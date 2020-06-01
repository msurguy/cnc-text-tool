export function downloadSVG(element, svgContent, fileName) {
  const svgDoctype = '<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'

  // serialize our SVG XML to a string.
  let svgString = (new XMLSerializer()).serializeToString(element)

  // reduce the SVG path by cutting off floating point values after the first digit beyond floating point (~50% less MBs)
  // svgString = svgString.replace(/([+]?\d+\.\d{3,}([eE][+]?\d+)?)/g, (x) => (+x).toFixed(3))
  // remove Vue's data IDs
  // svgString = svgString.replace(/ data-v-([0-9a-z]){8}=""/g, () => '')
  svgString = svgString.replace('</svg>', `\n${svgContent}\n</svg>`)

  const blob = new Blob([svgDoctype + svgString], {type: 'image/svg+xml;charset=utf-8'})

  /* This portion of script saves the file to local filesystem as a download */
  let svgUrl = (window.URL && window.URL.createObjectURL) ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);

  const downloadLink = document.createElement('a')
  downloadLink.href = svgUrl
  downloadLink.target = '_blank'
  downloadLink.download = `${fileName}.svg`

  // Safari thinks _blank anchor are pop ups. We only want to set _blank
  // target if the browser does not support the HTML5 download attribute.
  // This allows you to download files in desktop safari if pop up blocking
  // is enabled.
  if (typeof downloadLink.download === 'undefined') {
    downloadLink.setAttribute('target', '_blank')
  }

  document.body.appendChild(downloadLink)
  downloadLink.click()

  // Fixes "webkit blob resource error 1"
  setTimeout(function () {
    document.body.removeChild(downloadLink)
    window.URL.revokeObjectURL(svgUrl)
  }, 200)
}
//
// export function stringToInlineSVG(string) {
//   return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(string)
// }
