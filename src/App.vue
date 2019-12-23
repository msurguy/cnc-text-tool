<template>
  <div id="app">
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
                <text-area-input label="Input Text" @reset="resetTextInput"
                            :value="text" @input="updateText"></text-area-input>
                <double-text-input label="Position" first-label="x:" second-label="y:"
                                   :first-value="overlay.x" :second-value="overlay.y" @firstInput="moveOverlayX"
                                   @secondInput="moveOverlayY"></double-text-input>
                <select-field label="Font" v-model="font.selected"
                              :options="fontOptions"></select-field>
                <select-field label="Alignment" v-model="font.alignment"
                              :options="fontAlignmentOptions"></select-field>
                <slider :min="10" :max="150" :step="1" label="Font Size" v-model.number="font.sizeInPixels"></slider>
                <slider :min="0.5" :max="3" :step="0.1" label="Line Height" v-model.number="font.lineHeight"></slider>
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
                                                                                              href="http://github.com/msurguy/cnc-text-tool">Source</a>)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import bsCustomFileInput from 'bs-custom-file-input'

  import Toggle from "@/components/Toggle";
  import SelectField from "@/components/SelectField";
  import Slider from "@/components/Slider";
  // import ButtonGroup from "@/components/ButtonGroup";
  import TextAreaInput from "@/components/TextAreaInput";
  import DoubleTextInput from "@/components/DoubleTextInput";

  import { SVG, Matrix } from "@svgdotjs/svg.js";
  import '@/lib/svg.draggable'

  import SvgPath from 'svgpath';

  import { downloadSVG } from "@/util/download";
  import parseFont from "@/util/fontLoader";

  import debounce from 'lodash.debounce'

  const FONT_URL_ROOT = 'https://glcdn.githack.com/oskay/svg-fonts/raw/master/fonts/';

  export default {
    name: 'HelloWorld',
    components: {
      Toggle,
      SelectField,
      Slider,
      TextAreaInput,
      DoubleTextInput
    },
    props: {
      msg: String
    },
    data () {
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
        text: 'Hershey Text\nLorem Ipsum',
        fonts: {

          EMSAllure: {
            filename: 'EMS/EMSAllure',
            data: null,
            string: '',
            size: 24
          },
          EMSBird: {
            filename: 'EMS/EMSBird',
            data: null,
            string: '',
            size: 24
          },
          EMSBirdSwashCaps: {
            filename: 'EMS/EMSBirdSwashCaps',
            data: null,
            string: '',
            size: 24
          },
          EMSBrush: {
            filename: 'EMS/EMSBrush',
            data: null,
            string: '',
            size: 24
          },
          EMSCapitol: {
            filename: 'EMS/EMSCapitol',
            data: null,
            string: '',
            size: 24
          },
          EMSCasualHand: {
            filename: 'EMS/EMSCasualHand',
            data: null,
            string: '',
            size: 24
          },
          EMSDecorousScript: {
            filename: 'EMS/EMSDecorousScript',
            data: null,
            string: '',
            size: 24
          },
          EMSDelight: {
            filename: 'EMS/EMSDelight',
            data: null,
            string: '',
            size: 24
          },
          EMSDelightSwashCaps: {
            filename: 'EMS/EMSDelightSwashCaps',
            data: null,
            string: '',
            size: 24
          },
          EMSElfin: {
            filename: 'EMS/EMSElfin',
            data: null,
            string: '',
            size: 24
          },
          EMSFelix: {
            filename: 'EMS/EMSFelix',
            data: null,
            string: '',
            size: 24
          },
          EMSHerculean: {
            filename: 'EMS/EMSHerculean',
            data: null,
            string: '',
            size: 24
          },
          EMSInvite: {
            filename: 'EMS/EMSInvite',
            data: null,
            string: '',
            size: 24
          },
          EMSLeague: {
            filename: 'EMS/EMSLeague',
            data: null,
            string: '',
            size: 24
          },
          EMSLittlePrincess: {
            filename: 'EMS/EMSLittlePrincess',
            data: null,
            string: '',
            size: 24
          },
          EMSMistyNight: {
            filename: 'EMS/EMSMistyNight',
            data: null,
            string: '',
            size: 24
          },
          EMSNeato: {
            filename: 'EMS/EMSNeato',
            data: null,
            string: '',
            size: 24
          },
          EMSNixish: {
            filename: 'EMS/EMSNixish',
            data: null,
            string: '',
            size: 24
          },
          EMSNixishItalic: {
            filename: 'EMS/EMSNixishItalic',
            data: null,
            string: '',
            size: 24
          },
          EMSOsmotron: {
            filename: 'EMS/EMSOsmotron',
            data: null,
            string: '',
            size: 24
          },
          EMSPancakes: {
            filename: 'EMS/EMSPancakes',
            data: null,
            string: '',
            size: 24
          },
          EMSPepita: {
            filename: 'EMS/EMSPepita',
            data: null,
            string: '',
            size: 24
          },
          EMSQwandry: {
            filename: 'EMS/EMSQwandry',
            data: null,
            string: '',
            size: 24
          },
          EMSReadability: {
            filename: 'EMS/EMSReadability',
            data: null,
            string: '',
            size: 24
          },
          EMSReadabilityItalic: {
            filename: 'EMS/EMSReadabilityItalic',
            data: null,
            string: '',
            size: 24
          },
          EMSSociety: {
            filename: 'EMS/EMSSociety',
            data: null,
            string: '',
            size: 24
          },
          EMSSpaceRocks: {
            filename: 'EMS/EMSSpaceRocks',
            data: null,
            string: '',
            size: 24
          },
          EMSSwiss: {
            filename: 'EMS/EMSSwiss',
            data: null,
            string: '',
            size: 24
          },
          EMSTech: {
            filename: 'EMS/EMSTech',
            data: null,
            string: '',
            size: 24
          },
          HersheyGothEnglish: {
            filename: 'Hershey/HersheyGothEnglish',
            data: null,
            string: '',
            size: 24
          },
          HersheyGothGerman: {
            filename: 'Hershey/HersheyGothGerman',
            data: null,
            string: '',
            size: 24
          },
          HersheyGothItalian: {
            filename: 'Hershey/HersheyGothItalian',
            data: null,
            string: '',
            size: 24
          },
          HersheySans1: {
            filename: 'Hershey/HersheySans1',
            data: null,
            string: '',
            size: 24
          },
          HersheySansMed: {
            filename: 'Hershey/HersheySansMed',
            data: null,
            string: '',
            size: 24
          },
          HersheyScript1: {
            filename: 'Hershey/HersheyScript1',
            data: null,
            string: '',
            size: 24
          },
          HersheyScriptMed: {
            filename: 'Hershey/HersheyScriptMed',
            data: null,
            string: '',
            size: 24
          },
          HersheySerifBold: {
            filename: 'Hershey/HersheySerifBold',
            data: null,
            string: '',
            size: 24
          },
          HersheySerifBoldItalic: {
            filename: 'Hershey/HersheySerifBoldItalic',
            data: null,
            string: '',
            size: 24
          },
          HersheySerifMed: {
            filename: 'Hershey/HersheySerifMed',
            data: null,
            string: '',
            size: 24
          },
          HersheySerifMedItalic: {
            filename: 'Hershey/HersheySerifMedItalic',
            data: null,
            string: '',
            size: 24
          }
        },
        fontOptions: [],
        fontAlignmentOptions: [
          { text: 'Left', value: 'left' },
          { text: 'Center', value: 'center' },
          { text: 'Right', value: 'right' }
        ],
        font: {
          alignment: 'left',
          selected: 'HersheyScriptMed',
          sizeInPixels: 24,
          size: 24,
          lineHeight: 1,
          color: false,
          loading: false,
          strokeWidth: 1,
          widthUnit: 'px'
        }
      }
    },
    watch: {
      'font.selected' () {
        this.loadFont()
      },
      'font.loading' (newValue, oldValue) {
        if (oldValue === true && newValue === false) this.createTextPaths()
      },
      'font.sizeInPixels' (value) {
        this.font.size = value; // convertUnits(value, 'px', this.font.widthUnit)
        this.loadFont()
      },
      'font.color' () {
        this.createTextPaths()
      },
      'font.lineHeight' () {
        this.createTextPaths()
      },
      'font.alignment' () {
        this.createTextPaths()
      },
      'overlay.rotation' (degrees) {
        this.overlay.textGroup.transform({ rotate: degrees }, false)
      },
      paths (paths) {
        this.overlay.textGroup.clear();
        paths.forEach((path) => {
          this.overlay.textGroup.path(path.d).fill('none').stroke({
            width: this.font.strokeWidth,
            color: this.font.color ? '#FFFFFF' : '#000000',
            linecap: 'join'
          })
        });
        const { x, y, width, height } = this.overlay.textGroup.bbox();
        this.overlay.textGroup.rect(width, height).fill('rgba(0,0,0,0)').move(x, y);
        this.overlay.textGroup.move(this.overlay.x, this.overlay.y)
      }
    },
    mounted () {
      bsCustomFileInput.init();

      // Reset the SVG container
      this.overlay.svg = SVG().addTo('#svg-wrapper').addClass('canvas');
      this.overlay.svg.size(0, 0);
      this.overlay.textGroup = this.overlay.svg.group();
      this.overlay.textGroup.draggable().on('dragmove', (e) => {
        this.overlay.x = e.detail.box.x;
        this.overlay.y = e.detail.box.y
      });

      this.fontOptions = Object.keys(this.fonts).map((fontName) => {
        return { text: fontName, value: fontName }
      });
      this.loadFont()
    },
    methods: {
      moveOverlayX (value) {
        this.overlay.x = parseFloat(value);
        this.overlay.textGroup.move(value, this.overlay.y)
      },
      moveOverlayY (value) {
        this.overlay.y = parseFloat(value);
        this.overlay.textGroup.move(this.overlay.x, value)
      },
      updateText: debounce(function (e) {
        this.text = e;
        this.createTextPaths()
      }, 300),
      resetTextInput () {
        this.text = '';

      },
      onSourceFileChange (e) {
        this.source.loading = true;

        // reset position / scale / other params of the text

        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.readSourceImage(files[0]);
      },
      readSourceImage (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          // Set file name
          this.source.name = file.name.substr(0, file.name.lastIndexOf('.'));

          // try finding "<svg" in the document:
          let fileContents = e.target.result;

          let firstOccurenceOfSVG = fileContents.indexOf('<svg ');

          if (firstOccurenceOfSVG === -1) {
            firstOccurenceOfSVG = fileContents.indexOf('<SVG ')
          }

          // Remove everything that occurs prior to SVG opening tag
          fileContents = fileContents.substring(firstOccurenceOfSVG);
          this.source.string = fileContents; //= new DOMParser().parseFromString(fileContents, "image/svg+xml").documentElement

          const svgElement = new DOMParser().parseFromString(fileContents, "image/svg+xml").documentElement;
          // Remove classes used in this application
          svgElement.classList.remove("canvas");

          if (this.$refs.svgWrapper.childNodes[1]) {
            this.$refs.svgWrapper.removeChild(this.$refs.svgWrapper.childNodes[1])
          }
          this.$refs.svgWrapper.appendChild(svgElement);

          // Grab Width, Height and Viewbox attributes:
          this.source.viewbox = svgElement.hasAttribute('viewBox') ? svgElement.getAttribute('viewBox') : false;
          this.source.width = svgElement.hasAttribute('width') ? svgElement.getAttribute('width') : 0;
          this.source.height = svgElement.hasAttribute('height') ? svgElement.getAttribute('height') : 0;

          if (this.source.viewbox) {
            const viewBoxDelimeter = this.source.viewbox.indexOf(',') > -1 ? ',' : ' ';
            const parsedViewbox = this.source.viewbox.split(viewBoxDelimeter).map(value => parseFloat(value));
            this.overlay.svg.viewbox(parsedViewbox[0], parsedViewbox[1], parsedViewbox[2], parsedViewbox[3]);
            this.overlay.x = parsedViewbox[0];
            this.overlay.y = parsedViewbox[1];
            this.overlay.textGroup.move(parsedViewbox[0], parsedViewbox[1]);
            // Some SVGs don't have width and height and instead just have viewbox, let's extract width and height from 3rd and 4th element
            if (!this.source.width) {
              this.source.width = parsedViewbox[2];
              svgElement.setAttribute('width', parsedViewbox[2])
            }
            if (!this.source.height) {
              this.source.height = parsedViewbox[3];
              svgElement.setAttribute('height', parsedViewbox[3])
            }
          }

          // Retrieve width Unit
          const widthUnitPresent = (typeof this.source.width == 'number') ? false : this.source.width.match(/[a-zA-Z]+/g);

          // By default, the unit will be in pixels
          this.font.widthUnit = 'px';
          if (widthUnitPresent) this.font.widthUnit = widthUnitPresent[0];

          this.font.strokeWidth = 1; // this.font.widthUnit === 'px' ? 1 : convertUnits(1, 'px', this.font.widthUnit)
          this.font.size = this.font.sizeInPixels; // this.font.widthUnit !== 'px' ? convertUnits(this.font.sizeInPixels, 'cm', this.font.widthUnit) : this.font.sizeInPixels
          this.overlay.width = this.source.width;
          this.overlay.height = this.source.height;
          this.overlay.viewbox = this.source.viewbox ? this.source.viewbox : `0 0 ${this.overlay.width} ${this.overlay.height}`;

          if (!this.source.viewbox) {
            this.overlay.svg.viewbox(0, 0, this.overlay.width, this.overlay.height)
          }

          this.overlay.svg.size(this.overlay.width, this.overlay.height);

          this.source.svg = svgElement; //= new DOMParser().parseFromString(fileContents, "image/svg+xml").documentElement
          this.source.loading = false;

          this.loadFont()
        };
        reader.readAsText(file);
      },
      async loadFont () {
        // console.log('loading font')
        const fontMeta = this.fonts[this.font.selected];
        this.font.loading = true;
        if (fontMeta.data && (this.font.size === fontMeta.size)) {
          this.$nextTick(function () {
            this.font.loading = false
          });
          return
        }
        if (!fontMeta.data) {
          // Path is retrieved from the font path
          fontMeta.string = await this.loadFontFromURL(`${FONT_URL_ROOT}${fontMeta.filename}.svg`)
        }
        fontMeta.data = parseFont(new DOMParser().parseFromString(fontMeta.string, "image/svg+xml"), this.font.size);
        // console.log(this.font.size)
        fontMeta.size = this.font.size;
        this.$nextTick(function () {
          this.font.loading = false
        })
      },
      async loadFontFromURL (url) {
        let { data } = await this.axios.get(url);
        // Remove anything before first <svg
        let firstOccurenceOfSVG = data.indexOf('<svg ');
        if (firstOccurenceOfSVG === -1) {
          firstOccurenceOfSVG = data.indexOf('<SVG ')
        }

        // Remove everything that occurs prior to SVG opening tag
        data = data.substring(firstOccurenceOfSVG);
        return data
      },
      download () {
        // TODO : Only transform if text was rotated
        let flattenedPaths = '';

        const clonedGroup = this.overlay.textGroup.clone();

        let paths = clonedGroup.children();
        const transformObject = new Matrix(this.overlay.textGroup);
        const transformArray = [transformObject.a, transformObject.b, transformObject.c, transformObject.d, transformObject.e, transformObject.f];

        paths.forEach((path) => {
          if (path.type === 'path') {
            const pathD = path.attr('d');
            let newPathD = '';

            if (this.overlay.rotation !== 0) {
              newPathD = new SvgPath(pathD)
                      .matrix(transformArray)
                      // .round(3)
                      .toString()
            } else {
              newPathD = new SvgPath(pathD)
              //.round(3)
                      .toString()
            }

            flattenedPaths += path.plot(newPathD).svg()
          }
        });
        const flattenedGroup = `<g>${flattenedPaths}</g>`;
        downloadSVG(this.$refs.svgWrapper.childNodes[1], flattenedGroup, `line-text-${Date.now()}`)
      },
      createTextPaths () {
        this.paths = [];
        const fontData = this.fonts[this.font.selected].data;
        const inputString = this.text;

        // Generate SVGs in a grid inside of SVG file

        let originX = 0;
        let lineWidth = 0;
        let originY = 0;
        let lineWidths = [];
        let lineIndex = 0;
        let maxLineWidth = 0;

        let characters = inputString.split('');

        if (this.font.alignment !== 'left') {
          // First calculate line widths
          characters.forEach((character, index) => {
            if (character === '\n') {
              lineWidths.push(lineWidth);
              lineWidth = 0
            }

            if (fontData[character]) {
              lineWidth += fontData[character].width;
              // if last character, add to line widths
              if (index + 1 === characters.length) {
                lineWidths.push(lineWidth)
              }
            }
          });

          maxLineWidth = Math.max(...lineWidths)
        }

        characters.forEach((character) => {
          if (character === '\n') {
            lineIndex = lineIndex + 1;
            originX = 0;
            originY += this.fonts[this.font.selected].size * this.font.lineHeight
          }

          if (fontData[character]) {
            if (fontData[character].d) {
              let characterXPosition = originX;
              if (this.font.alignment === 'center') characterXPosition = originX - (lineWidths[lineIndex] / 2);
              if (this.font.alignment === 'right') characterXPosition = originX - maxLineWidth - (lineWidths[lineIndex]);
              this.paths.push({
                d: new SvgPath(fontData[character].d)
                        .translate(characterXPosition, originY)
                        //.skew()
                        .rel()
                        //.round(2)
                        .toString()
              })
            }
            originX += fontData[character].width
          }
        })
      }
    }
  }
</script>

<style>

  #app {
    height: 100%;
  }

  .canvas {
    position: absolute;
    left: 0;
    top: 0;
  }

  #svg-wrapper rect {
    pointer-events: all;
  }

  #svg-wrapper svg:first-child rect:hover {
    fill: rgba(0, 0, 0, 0.08)
  }

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

