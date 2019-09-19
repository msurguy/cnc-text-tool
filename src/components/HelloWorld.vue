<template>
    <div class="page">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="controls-wrapper">
                <div class="controls">
                    <p class="mt-3 lead text-center text-white"> Source </p>
                    <div class="sidebar-control">
                        <div class="control-header">
                            <div></div>
                            <div class="control-label">
                                Upload File
                            </div>
                            <div></div>
                        </div>
                        <div class="custom-file">
                            <input @change="onSourceFileChange" type="file" accept="image/svg+xml"
                                   class="custom-file-input"
                                   id="sourcefile">
                            <label class="custom-file-label" for="sourcefile">Choose file</label>
                        </div>
                    </div>

                    <div class="progress" v-if="source.loading">
                        <div class="progress-bar" role="progressbar"
                             aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">Loading SVG
                        </div>
                    </div>

                    <transition name="slide">
                        <div v-if="source.svg">
                            <text-input label="Input String" @reset="resetTextInput"
                                        :value="text" @input="updateText"></text-input>
                            <select-field label="Font" v-model="font.selected"
                                          :options="fontOptions"></select-field>
                            <toggle label="Black / White" v-model="font.color"></toggle>
                        </div>
                    </transition>

                </div>
            </div>

            <div class="button">
                <div class="reveal"></div>
                <button class="btn btn-primary btn-block" @click.prevent="download">
                    Download SVG
                </button>
            </div>
        </div>

        <!-- Page Content -->
        <div class="paper">
            <div id="sketch" class="sketch">
                <div id="svg-wrapper" ref="svgWrapper">
                </div>
            </div>
        </div>
        <div class="footer-wrapper">
            <div class="footer">
                <h1>Line Text</h1>
                <p>Project by <a target="_blank" href="http://twitter.com/msurguy">@msurguy</a> (<a target="_blank"
                                                                                                    href="http://github.com/msurguy/svg-cropper">Source</a>)
                </p>
            </div>
        </div>
    </div>

</template>

<script>
  import bsCustomFileInput from 'bs-custom-file-input'

  import debounce from 'lodash.debounce'

  import Toggle from "@/components/Toggle";
  import SelectField from "@/components/SelectField";
  // import Slider from "@/components/Slider";
  // import ButtonGroup from "@/components/ButtonGroup";
  import TextInput from "@/components/TextInput";
  import * as SVG from 'svg.js'

  import parseFont from "@/util/loadfont";
  import SvgPath from 'svgpath';

  import he from 'he'
  import {downloadSVG} from "@/util/utils";

  const FONT_URL_ROOT = 'https://glcdn.githack.com/oskay/hershey-text/raw/master/hershey-text/svg_fonts/'

  export default {
    name: 'HelloWorld',
    components: {
      Toggle,
      SelectField,
     // Slider,
     // ButtonGroup,
      TextInput
    },
    props: {
      msg: String
    },
    data() {
      return {
        source: {
          name: '',
          svg: '',
          string: '',
          loading: false,
          width: 0,
          height: 0,
          viewbox: '0 0 0 0'
        },
        overlay: {
          width: 0,
          height: 0,
          viewbox: '0 0 0 0',
          svg: null,
          textGroup: null
        },
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
        fontOptions: [],
        font: {
          selected: 'EMSAllure',
          size: 24,
          color: false,
          loading: false
        }
      }
    },
    watch: {
      'font.selected'() {
        this.loadFont()
      },
      'font.loading'(newValue, oldValue) {
        if (oldValue === true && newValue === false) this.convert()
      },
      'font.size'() {
        this.loadFont()
      },
      paths (paths) {
        this.overlay.textGroup.clear()
        paths.forEach((path) => {
          let svgPath = this.overlay.textGroup.path(path.d)
          svgPath.fill('none').stroke({width: 1})
        })
      }
    },
    mounted() {
      bsCustomFileInput.init()

      // Reset the SVG container
      this.overlay.svg = SVG(document.getElementById('svg-wrapper')).addClass('canvas')
      this.overlay.svg.size(0,0)
      this.overlay.textGroup = this.overlay.svg.group()

      this.fontOptions = Object.keys(this.fonts).map((fontName) => {
        return {text: fontName, value: fontName}
      })
      this.loadFont()
    },
    methods: {
      updateText: debounce(function (e) {
        this.text = e
        this.convert()
      }, 300),
      resetTextInput() {
        this.text = ''
        return
      },
      onSourceFileChange(e) {
        this.source.loading = true

        // reset position / scale / other params of the text

        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.readSourceImage(files[0]);
      },
      readSourceImage(file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          // Set file name
          this.source.name = file.name.substr(0, file.name.lastIndexOf('.'))

          // try finding "<svg" in the document:
          let fileContents = e.target.result

          let firstOccurenceOfSVG = fileContents.indexOf('<svg ')

          if (firstOccurenceOfSVG === -1) {
            firstOccurenceOfSVG = fileContents.indexOf('<SVG ')
          }

          // Remove everything that occurs prior to SVG opening tag
          fileContents = fileContents.substring(firstOccurenceOfSVG)
          this.source.string = fileContents //= new DOMParser().parseFromString(fileContents, "image/svg+xml").documentElement

          const svgElement = new DOMParser().parseFromString(fileContents, "image/svg+xml").documentElement

          if (this.$refs.svgWrapper.childNodes[1]) {
            this.$refs.svgWrapper.removeChild(this.$refs.svgWrapper.childNodes[1])
          }
          this.$refs.svgWrapper.appendChild(svgElement)

          // Grab Width, Height and Viewbox attributes:
          this.source.width = svgElement.getAttribute('width')
          this.source.height = svgElement.getAttribute('height')
          this.source.viewbox = svgElement.getAttribute('viewBox')

          this.overlay.width = this.source.width
          this.overlay.height = this.source.height
          this.overlay.viewbox = this.source.viewbox

          const parsedViewbox = this.source.viewbox.split(' ').map(value => parseFloat(value))

          this.overlay.svg.size(this.overlay.width, this.overlay.height)
          this.overlay.svg.viewbox(parsedViewbox[0], parsedViewbox[1], parsedViewbox[2], parsedViewbox[3])

          this.overlay.svg.rect(100, 100).fill('#f06').move(20, 20)

          this.source.svg = svgElement //= new DOMParser().parseFromString(fileContents, "image/svg+xml").documentElement
          this.source.loading = false
        };
        reader.readAsText(file);
      },
      async loadFont() {
        this.font.loading = true
        if (this.fonts[this.font.selected].data && (this.font.size === this.fonts[this.font.selected].size)) {
          this.$nextTick(function () {
            this.font.loading = false
          })
          return
        }
        if (!this.fonts[this.font.selected].data) {
          this.fonts[this.font.selected].string = await this.loadFontFromURL(`${FONT_URL_ROOT}${this.font.selected}.svg`)
        }
        this.fonts[this.font.selected].data = parseFont(new DOMParser().parseFromString(this.fonts[this.font.selected].string, "image/svg+xml"), this.font.size)
        this.fonts[this.font.selected].size = this.font.size
        this.$nextTick(function () {
          this.font.loading = false
        })
      },
      async loadFontFromURL(url) {
        let {data} = await this.axios.get(url)
        // Remove anything before first <svg
        let firstOccurenceOfSVG = data.indexOf('<svg ')
        if (firstOccurenceOfSVG === -1) {
          firstOccurenceOfSVG = data.indexOf('<SVG ')
        }

        // Remove everything that occurs prior to SVG opening tag
        data = data.substring(firstOccurenceOfSVG)
        return data
      },
      download() {
        downloadSVG(this.$refs.svgWrapper.firstChild, `line-text-${Date.now()}`)
      },
      convert() {
        this.paths = []
        const fontData = this.fonts[this.font.selected].data
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

<style scoped>
    .page {
        position: relative;
        height: 100%;
        display: flex;
    }

    .controls {
        width: 100%;
        margin-bottom: 50px;
    }

    .controls-wrapper {
        max-height: 100vh;
        overflow: scroll;
    }

    .button {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
    }

    .reveal {
        display: block;
        height: 15px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(47, 47, 47) 100%);
    }

    .paper {
        padding: 10px;
        background-color: #dedede;
        position: relative;
        max-height: 100vh;
        width: calc(100% - 300px);
        overflow: scroll;
        z-index: 1;
    }

    .sketch {
        position: relative;
        /*overflow: auto;*/
    }

    #svg-wrapper {
        position: relative;
        display: inline-block;
        border: 1px dashed #000;
    }

    .sidebar {
        z-index: 10;
        width: 300px;
        position: relative;
    }

    .footer-wrapper {
        z-index: 1000;
        position: absolute;
        bottom: 0;
        right: 0;
        color: #2D2D2D;
    }

    .footer {
        padding: 15px 15px 0 15px;
        text-align: right;
    }

    @media (max-width: 767px) {
        .page {
            flex-direction: column;
        }

        .controls-wrapper {
            max-height: none;
        }

        .sidebar {
            width: 100%;
        }

        .paper {
            width: 100%;
            max-height: none;
        }

        .footer-wrapper {
            position: relative;
            background-color: #CCC;
        }
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: all 300ms ease-in-out;
    }

    .slide-enter-to,
    .slide-leave {
        max-height: 200px;
        opacity: 1;
        overflow: hidden;
    }

    .slide-enter,
    .slide-leave-to {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
    }
</style>
