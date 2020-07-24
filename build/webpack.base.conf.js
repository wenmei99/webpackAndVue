// Node.js自带的操作路径的模块
const path = require('path')
const webpack = require('webpack')
// 简化了html文件的创建
const HtmlWepackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

console.log(path.resolve(__dirname, '../'));

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry:{
    main:'./src/index.js'
  },
  output:{
    // 打包过后的输出路径,带hash值是为了保证文件的唯一性
    path:path.resolve(__dirname,'../dist'),
    filename:'[name].[hash].js',
    publicPath:'/'
  },
  resolve:{
    extensions:['.js','.vue','.json'],
    alias:{
      vue$: 'vue/dist/vue.esm.js',
      '@':resolve('src'),
      '/static':resolve('static')
    }
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:['babel-loader'],
        include:[resolve('src'),resolve('test'),resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test:/\.(png | jpg | jpeg |gif)$/,
        use:{
          loader:'file-loader',
        }
      },
      {
        test:/\.vue$/,
        loader:'vue-loader',
      },
      {
        test:/\.(sa|c|sc)ss$/,
        // use:['vue-style-loader','css-loader','postcss-loader','sass-loader',]
        use:[
          {
            loader:process.env.NODE_ENV === 'development' ?'vue-style-loader':MiniCssExtractPlugin.loader,
            options:{
              hmr: process.env.NODE_ENV === 'development',
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins:[
    new HtmlWepackPlugin({template:path.resolve(__dirname,'../index.html')}),
    new VueLoaderPlugin(),
    // new webpack.optimize.AggressiveSplittingPlugin()
  ]
}