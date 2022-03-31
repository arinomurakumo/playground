const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
  },
}
