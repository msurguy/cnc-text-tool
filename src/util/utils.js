export function pointsToPath(points, scale = 1, closed = false) {
  let svgpath = '', i, j;
  for (i = 0; i < points.length; i++) {
    for (j = 0; j < points[i].length; j++) {
      if (!j) svgpath += 'M';
      else svgpath += 'L';
      svgpath += (points[i][j].X / scale) + ', ' + (points[i][j].Y / scale);
    }
    if (closed) svgpath += 'Z';
  }
  if (svgpath === "") svgpath = "M0,0";
  return svgpath;
}


export function createPolygon(x, y, numOfSides, radius, minAngle) {
  let points = ''
  let xo
  let yo
  for (let i = 0; i < numOfSides; i++) {
    let t = (Math.PI * 2 / numOfSides * i) + minAngle * (Math.PI / 180)
    xo = x + radius * Math.sin(t)
    yo = y + radius * Math.cos(t)
    points += xo + ',' + yo + ' '
  }
  return points
}

export function downloadSVG(element, fileName) {
  const svgDoctype = '<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'

  // serialize our SVG XML to a string.
  let svgString = (new XMLSerializer()).serializeToString(element)

  // reduce the SVG path by cutting off floating point values after the first digit beyond floating point (~50% less MBs)
  svgString = svgString.replace(/([+]?\d+\.\d{3,}([eE][+]?\d+)?)/g, (x) => (+x).toFixed(3))
  // remove Vue's data IDs
  svgString = svgString.replace(/ data-v-([0-9a-z]){8}=""/g, () => '')

  const blob = new Blob([svgDoctype + svgString], {type: 'image/svg+xml;charset=utf-8'})

  /* This portion of script saves the file to local filesystem as a download */
  let svgUrl = URL.createObjectURL(blob)

  const downloadLink = document.createElement('a')
  downloadLink.href = svgUrl
  downloadLink.download = `${fileName}.svg`
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}

export function stringToInlineSVG(string) {
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(string)
}
