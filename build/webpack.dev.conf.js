/*
  开发环境webpack的mode属性值设置为development,开启这个不会压缩代码
  需要webpack-dev-server 和热更新   webpack-dev-server为本地提供一个简单的web服务器
  css不用提取到单独的文件并进行压缩（你也可以提取）
  不需要构建前清除上一次的构建内容
  不需要打包分析
*/
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const basicConfig = require('./webpack.base.conf')
const config = require('./config/index')
// const AutoDllPlugin = require('autodll-webpack-plugin')

console.log(merge);

module.exports = merge(basicConfig,{
  mode:'development',
  devtool:config.dev.devtool,
  devServer:{
    contentBase: './dist',
    hot:true
  },
  plugins:[
    new webpack.NamedModulesPlugin(),    // 开启热更新使用该插件会显示相对路径，一般是使用在开发环境
    new webpack.HotModuleReplacementPlugin(),  // 模块热替换插件
    // new AutoDllPlugin({
    //   inject:true,      // 插件会自动把打包出来的第三方文件插入到html中
    //   debug:true,
    //   filename:'[name]_[hash].js',   // 打包以后的文件名称
    //   path:'./dll',      //  打包后的路径
    //   entry:{
    //     vendor:['vue']    // entry 是入口，vendor是指定的名称，数组里的内容就是要打包的第三方库的名名称，
    //   }
    // })
  ]
})