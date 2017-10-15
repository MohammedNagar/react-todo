var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try{
  envFile(path.join(__dirname,'config/' + process.env.NODE_ENV + '.env'));
}catch(e){

}
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
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor :{
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env' :{
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
      }
    })
  ],
  resolve: {
    modules: [__dirname,
       'node_modules',
       'app/components',
        'app/api',
        'app/actions',
         'app/reducers',
       'app/store'],
    alias:{
      app: 'app',
      applicationStyles:'app/styles/app.scss'

    },
    extensions: ['*','.js','.jsx']
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

  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
