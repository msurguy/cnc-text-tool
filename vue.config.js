module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cnc-text-tool/'
    : '/'
}
