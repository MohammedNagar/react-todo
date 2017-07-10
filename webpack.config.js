var webpack = require('webpack');
var path = require('path');

module.exports= {
  entry:[ 'babel-polyfill',
  'script-loader!jquery/dist/jquery.min.js',
  'script-loader!foundation-sites/dist/js/foundation.min.js',
  './app/app.jsx'],
  output: {
    path: __dirname,
    filename:'./public/bundle.js'
  },
  externals: {
    jquery:'jQuery'
  },
  plugins :[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  resolve: {
    modules: [__dirname, 'node_modules', path.resolve('./app/components')],
    alias:{
      applicationStyles:'app/styles/app.scss'
    },
    extensions: ['*','.js','.jsx;']
  },
  module :{
    rules:[{
      loader :'babel-loader',
      query :{
        presets:['react','es2015','es2017','stage-0'],
        plugins: ['transform-runtime']
      },
      test:/\.jsx?$/,
      exclude:/(node_modules|bower_components)/
    },

    {
            test: /\.scss$/,
            use: [
                {
                loader: "sass-loader",
                options: {
                    includePaths: ["./node_modules/foundation-sites/scss"]
                }
            }]
        }
      ]
    },

  devtool: 'cheap-module-eval-source-map'
};
