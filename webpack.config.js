const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ }
    ]
  },
  devtool: 'source-map',
  plugins: [HtmlWebpackPluginConfig]
 },
 {
  test: /\.js$|\.jsx$/,
  use: {
    loader: 'istanbul-instrumenter-loader',
    options: { esModules: true }
  },
  enforce: 'post',
  exclude: /node_modules|\.spec\.js$/,
}
