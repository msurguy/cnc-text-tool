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
                            <double-text-input label="Position" first-label="x:" second-label="y:"
                                        :first-value="overlay.x" :second-value="overlay.y" @firstInput="moveOverlayX"
                                               @secondInput="moveOverlayY"></double-text-input>
                            <select-field label="Font" v-model="font.selected"
                                          :options="fontOptions"></select-field>
                            <slider :min="10" :max="150" :step="1" label="Font Size" v-model.number="font.size"></slider>
                            <slider :min="-360" :max="360" :step="1" label="Rotation" v-model.number="overlay.rotation"></slider>
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
                <h3>CNC Text Editor</h3>
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
  import Slider from "@/components/Slider";
  // import ButtonGroup from "@/components/ButtonGroup";
  import TextInput from "@/components/TextInput";
  import DoubleTextInput from "@/components/DoubleTextInput";
  import {SVG, Matrix} from "@svgdotjs/svg.js";
  import '@/lib/svg.draggable'

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
      Slider,
     // ButtonGroup,
      TextInput,
      DoubleTextInput
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
          textGroup: null,
          flattened: null,
          x: 0,
          y: 0,
          rotation: 0
        },
        paths: [],
        text: 'Lorem Ipsum',
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
          selected: 'HersheySans1',
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
        if (oldValue === true && newValue === false) this.createTextPaths()
      },
      'font.size'() {
        this.loadFont()
      },
      'font.color'(){
        this.createTextPaths()
      },
      'overlay.rotation'(degrees) {
        this.overlay.textGroup.transform({rotate: degrees}, false)
      },
      paths (paths) {
        this.overlay.textGroup.clear()
        paths.forEach((path) => {
          this.overlay.textGroup.path(path.d).fill('none').stroke({width: '1px', color: this.font.color ? '#FFFFFF' : '#000000', linecap: 'join'})
        })
        const {x, y, width, height} = this.overlay.textGroup.bbox()
        this.overlay.textGroup.rect(width, height).fill('rgba(0,0,0,0)').move(x, y)
        this.overlay.textGroup.move(this.overlay.x, this.overlay.y)
      }
    },
    mounted() {
      bsCustomFileInput.init()

      // Reset the SVG container
      this.overlay.svg = SVG().addTo('#svg-wrapper').addClass('canvas')
      this.overlay.svg.size(0,0)
      this.overlay.textGroup = this.overlay.svg.group()
      this.overlay.textGroup.draggable().on('dragmove', (e) => {
        this.overlay.x = e.detail.box.x
        this.overlay.y = e.detail.box.y
      })

      this.fontOptions = Object.keys(this.fonts).map((fontName) => {
        return {text: fontName, value: fontName}
      })
      this.loadFont()
    },
    methods: {
      moveOverlayX(value) {
        this.overlay.x = parseFloat(value)
        this.overlay.textGroup.move(value, this.overlay.y)
      },
      moveOverlayY(value) {
        this.overlay.y = parseFloat(value)
        this.overlay.textGroup.move(this.overlay.x, value)
      },
      updateText: debounce(function (e) {
        this.text = e
        this.createTextPaths()
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

          this.overlay.svg.size(this.overlay.width, this.overlay.height)

          if (this.source.viewbox) {
            const parsedViewbox = this.source.viewbox.split(' ').map(value => parseFloat(value))
            this.overlay.svg.viewbox(parsedViewbox[0], parsedViewbox[1], parsedViewbox[2], parsedViewbox[3])
            this.overlay.x = parsedViewbox[0]
            this.overlay.y = parsedViewbox[1]
            this.overlay.textGroup.move(parsedViewbox[0], parsedViewbox[1])
          }

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
        // TODO : Only transform if text was rotated
        let flattenedPaths = ''

        const clonedGroup = this.overlay.textGroup.clone()

        let paths = clonedGroup.children()
        const transformObject = new Matrix(this.overlay.textGroup)
        const transformArray = [transformObject.a, transformObject.b, transformObject.c, transformObject.d, transformObject.e, transformObject.f]

        paths.forEach((path) => {
          if (path.type === 'path') {
            const pathD = path.attr('d')
            let newPathD = ''

            if (this.overlay.rotation !== 0) {
              newPathD = new SvgPath(pathD)
                .matrix(transformArray)
                .round(3)
                .toString()
            } else {
              newPathD = new SvgPath(pathD)
                .round(3)
                .toString()
            }

            flattenedPaths += path.plot(newPathD).svg()
          }
        })
        const flattenedGroup = `<g>${flattenedPaths}</g>`
        downloadSVG(this.$refs.svgWrapper.childNodes[1], flattenedGroup, `line-text-${Date.now()}`)
      },
      createTextPaths() {
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
                  //.skew()
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
