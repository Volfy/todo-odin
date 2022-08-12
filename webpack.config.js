const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  plugins: [new MiniCssExtractPlugin()],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};