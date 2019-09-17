<template>
  <div class="hello">
    <input type="text" v-model="text">
    <button @click.prevent="convert">Convert Text</button>
    <select v-model="selectedFont">
      <option v-for="option in fontOptions" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <svg width="6in" height="6in" id="canvas">
      <path v-for="(path, index) in paths" :key="index" stroke-linejoin="round" stroke="#000" stroke-width="1px" fill="none" :d="path.d"></path>
    </svg>
  </div>
</template>

<script>
  import parseFont from "@/util/loadfont";
  import SvgPath from 'svgpath';

  import he from 'he'

  const FONT_URL_ROOT = 'https://glcdn.githack.com/oskay/hershey-text/raw/master/hershey-text/svg_fonts/'

  export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      paths: [],
      text: 'Type Text Here',
      fonts: {
        'EMSAllure': {
          data: null
        },
        'EMSElfin': {
          data: null
        },
        'EMSFelix': {
          data: null
        },
        'EMSNixish': {
          data: null
        },
        'EMSNixishItalic': {
          data: null
        },
        'EMSOsmotron': {
          data: null
        },
        'EMSReadability': {
          data: null
        },
        'EMSReadabilityItalic': {
          data: null
        },
        'EMSTech': {
          data: null
        },
        'HersheyGothEnglish': {
          data: null
        },
        'HersheySans1': {
          data: null
        },
        'HersheySansMed': {
          data: null
        },
        'HersheyScript1': {
          data: null
        },
        'HersheyScriptMed': {
          data: null
        },
        'HersheySerifBold': {
          data: null
        },
        'HersheySerifBoldItalic': {
          data: null
        },
        'HersheySerifMed': {
          data: null
        },
        'HersheySerifMedItalic': {
          data: null
        }
      },
      selectedFont: 'EMSAllure',
      fontOptions: [],
      loadingFont: false
    }
  },
    watch: {
      selectedFont () {
        this.loadFont()
      },
      loadingFont (newValue, oldValue) {
        if (oldValue === true && newValue === false) this.convert()
      }
    },
    mounted() {
      this.fontOptions = Object.keys(this.fonts).map((fontName) => {
        return { text: fontName, value: fontName}
      })
      this.loadFont()
    },
    methods: {
    async loadFont () {
      this.loadingFont = true
      if (this.fonts[this.selectedFont].data) {
        this.$nextTick(function () {
          this.loadingFont = false
        })
        return
      }
      const fontString = await this.loadFontFromURL(`${FONT_URL_ROOT}${this.selectedFont}.svg`)
      this.loadingFont = false
      this.fonts[this.selectedFont].data = parseFont(new DOMParser().parseFromString(fontString, "image/svg+xml"), 48)
    },
    async loadFontFromURL(url) {
      let { data } = await this.axios.get(url)
      // Remove anything before first <svg
      let firstOccurenceOfSVG = data.indexOf('<svg ')
      if (firstOccurenceOfSVG === -1) {
        firstOccurenceOfSVG = data.indexOf('<SVG ')
      }

      // Remove everything that occurs prior to SVG opening tag
      data = data.substring(firstOccurenceOfSVG)
      return data
    },
    convert() {
      this.paths = []
      const fontData = this.fonts[this.selectedFont].data
      const inputString = this.text

      // Generate SVGs in a grid inside of SVG file

      let originX = 0
      let originY = 0


      let characters = inputString.split('')

      characters.forEach((character) => {

        let encodedCharacter = he.encode(character)
        if (character === ' ') encodedCharacter = ' '
        if (character === '&') encodedCharacter = '&'
        if (character === '\'') encodedCharacter = '&apos;'

        if (encodedCharacter.length > 2) encodedCharacter = encodedCharacter.toLowerCase()

        if (fontData[encodedCharacter]) {
          if (fontData[encodedCharacter].d) {
            this.paths.push({
              d: new SvgPath(fontData[encodedCharacter].d)
                      .translate(originX, originY)
                      //.rotate(-10)
                      //.skew()
                      //.skewY(10)
                      // .abs()
                      // .round(2)
                      .rel()
                      .round(2)
                      .toString()
            })
          }
          originX += fontData[encodedCharacter].width
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .hello {
    margin: 0;
    padding: 0;
  }

  #canvas {
    display: block;
  }
</style>
