var webpack = require('webpack');
var min = process && process.env && process.env.ENVIRONMENT === 'PRODUCTION';

module.exports = {
  entry: "./index.js",

  output: {
    path: "./dist",
    filename: "react-sync" + (min ? '.min' : '') + '.js',
    library: "ReactSync",
    libraryTarget: "umd"
  },

  externals: {
    'jquery': { commonjs: 'jquery', commonjs2: 'jquery', amd: 'jquery', root: '$' },
    'react': { commonjs: 'react', commonjs2: 'react', amd: 'react', root: 'React' }
  },

  plugins: min ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};