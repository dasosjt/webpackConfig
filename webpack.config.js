var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: "/assets/"
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()//,
    //new webpack.NoEmitOnErrorsPlugin()
  ]
};
