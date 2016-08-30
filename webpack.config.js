var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var path = require('path');
module.exports = {
  context: path.join(__dirname, "public"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: './js/client.js',
  output: {
    path: __dirname + "/public/",
    filename: 'bundle.min.js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['node_modules', 'vendor']
  },
  module: {
      loaders: [
          {test: /\.css$/,loader: "style-loader!css-loader!postcss-loader"},
          {test: /\.scss$/,loaders: ["style", "css", "sass"]},
          {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
          {test: /\.(jpe?g|png|gif|svg)$/,loader: 'url-loader?limit=10000&name=images/[name].[ext]'},
          {test: /\.js$/, exclude: /node_modules/, 
              loader: 'babel-loader', query: {
              presets: ['react', 'es2015', 'stage-0'],
              plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
          }
      ]
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};