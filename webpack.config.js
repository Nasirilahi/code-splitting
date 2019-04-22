const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    cus_lod: './src/custom-lodash.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development', 
  optimization: {
    runtimeChunk: 'single'
  }
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
}
