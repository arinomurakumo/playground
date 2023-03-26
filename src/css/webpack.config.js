const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')

module.exports = {
  entry: {
    index: './index.js',
    '14.postcss-cascade-layers': './14.postcss-cascade-layers/style.css',
  },
  output: {
    path: path.resolve(__dirname, './assets/bundle/'),
    filename: '[name].js',
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, './'),
    },
    client: {
      progress: true,
      overlay: true,
    },
    compress: false,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: './assets/bundle/css/[name].css',
    }),
  ],
}
