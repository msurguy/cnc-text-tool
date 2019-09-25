import each from 'lodash/each'
import SvgPath from 'svgpath';
// let XMLDOMParser = require('xmldom').DOMParser; use jsdom instead if used on server

export default function parseFont(element, size = 24) {

  let result = [];

  const svgFont = element.getElementsByTagName('font')[0];
  const svgFontface = element.getElementsByTagName('font-face')[0];
  const svgGlyps = element.getElementsByTagName('glyph');

  const fontHorizAdvX = svgFont.getAttribute('horiz-adv-x');
  const fontAscent = svgFontface.getAttribute('ascent');
  const fontUnitsPerEm = svgFontface.getAttribute('units-per-em') || 1000;

  const EM = size // Unit for the height
  const scale = EM / fontUnitsPerEm;

  each(svgGlyps, function (svgGlyph) {
    const d = svgGlyph.getAttribute('d');

    const unicode = svgGlyph.getAttribute('unicode');
    const name = svgGlyph.getAttribute('glyph-name') || ('glyph' + unicode);
    const width = svgGlyph.getAttribute('horiz-adv-x') || fontHorizAdvX;

    result[unicode] = {
      d: d ? new SvgPath(d)
        .translate(0, -fontAscent)
        .scale(scale, -scale)
        .abs()
        // .round(2)
        .rel()
        //.round(2)
        .toString() : null,
      unicode: unicode,
      name: name,
      width: parseFloat(width * scale), //.toFixed(1)),
      height: EM
    }
  });

  return result;
}
