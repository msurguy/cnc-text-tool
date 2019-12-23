module.exports = {
  outputDir: 'docs',
  devServer: {
    port: 8000
  },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/cnc-text-tool/'
    : '/'
}
