const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, './')
    }
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
