var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  // entry: './src/index.js',
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   filename: 'bundle.js'
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
