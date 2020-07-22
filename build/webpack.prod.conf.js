const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const MiniCssextractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig,{
  mode:'production',
  plugins:[
    new MiniCssextractPlugin({
      filename:'[name].css',
      chunkFilename:'[id].css'
    })
  ]
})