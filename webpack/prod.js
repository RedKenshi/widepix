const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    // Le point d'entrée de notre app
    path.resolve(__dirname, '..', 'app', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: '[name].map',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s(a|c)ss$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }) },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ],
  },

  plugins: [
      // Permet aux loaders qui n'ont pas migré vers webpack 2 de faire un bridge
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),

    // Concatene et minimifie le JS
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),

    // définie des variables d'environnement
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),


    // Le nom du fichier CSS
    new ExtractTextPlugin('all.css'),

    // Ajoute le fichier "all.css"
    // Proprement dans un html dont le template
    // se trouve à la racine
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'index.prod.template.html'),
    }),
  ],
};


module.exports = config;
