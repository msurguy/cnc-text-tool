<template>
  <div class="hello">
    <input type="text" v-model="text">
    <button @click.prevent="convert">Convert Text</button>
    <select v-model="selectedFont">
      <option v-for="option in fontOptions" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <input type="range" name="font-size" min="10" max="200" step="1" v-model="fontSize">
    <svg width="6in" height="6in" id="canvas">
      <g id="line-text">
        <path v-for="(path, index) in paths" :key="index" stroke-linejoin="round" stroke="#000" stroke-width="1px"
              fill="none" :d="path.d"></path>
      </g>
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
          data: null,
          string: '',
          size: 24
        },
        'EMSElfin': {
          data: null,
          string: '',
          size: 24
        },
        'EMSFelix': {
          data: null,
          string: '',
          size: 24
        },
        'EMSNixish': {
          data: null,
          string: '',
          size: 24
        },
        'EMSNixishItalic': {
          data: null,
          string: '',
          size: 24
        },
        'EMSOsmotron': {
          data: null,
          string: '',
          size: 24
        },
        'EMSReadability': {
          data: null,
          string: '',
          size: 24
        },
        'EMSReadabilityItalic': {
          data: null,
          string: '',
          size: 24
        },
        'EMSTech': {
          data: null,
          string: '',
          size: 24
        },
        'HersheyGothEnglish': {
          data: null,
          string: '',
          size: 24
        },
        'HersheySans1': {
          data: null,
          string: '',
          size: 24
        },
        'HersheySansMed': {
          data: null,
          string: '',
          size: 24
        },
        'HersheyScript1': {
          data: null,
          string: '',
          size: 24
        },
        'HersheyScriptMed': {
          data: null,
          string: '',
          size: 24
        },
        'HersheySerifBold': {
          data: null,
          string: '',
          size: 24
        },
        'HersheySerifBoldItalic': {
          data: null,
          string: '',
          size: 24
        },
        'HersheySerifMed': {
          data: null,
          string: '',
          size: 24
        },
        'HersheySerifMedItalic': {
          data: null,
          string: '',
          size: 24
        }
      },
      selectedFont: 'EMSAllure',
      fontOptions: [],
      loadingFont: false,
      fontSize: 24
    }
  },
    watch: {
      selectedFont () {
        this.loadFont()
      },
      loadingFont (newValue, oldValue) {
        if (oldValue === true && newValue === false) this.convert()
      },
      fontSize () {
        this.loadFont()
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
      if (this.fonts[this.selectedFont].data && (this.fontSize === this.fonts[this.selectedFont].fontSize)) {
        this.$nextTick(function () {
          this.loadingFont = false
        })
        return
      }
      if (!this.fonts[this.selectedFont].data) {
        const fontString = await this.loadFontFromURL(`${FONT_URL_ROOT}${this.selectedFont}.svg`)
        this.fonts[this.selectedFont].string = fontString
      }
      this.fonts[this.selectedFont].data = parseFont(new DOMParser().parseFromString(this.fonts[this.selectedFont].string, "image/svg+xml"), this.fontSize)
      this.fonts[this.selectedFont].fontSize = this.fontSize
      this.$nextTick(function () {
        this.loadingFont = false
      })
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
