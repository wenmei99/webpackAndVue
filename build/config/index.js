const path = require('path')

const ROOT = path.join(__dirname,'..','..')

module.exports = {
  dev:{
    assetsSubDirectory:'static',
    assetsPublicPath:'/',
    host:'localhost',
    port:8090,
    autoOpenBrower:true,
    devtool:'source-map'
  },
  build:{
    index:path.resolve(ROOT,'dist/index.html'),
    assetsRoot:path.resolve(ROOT,'dist'),
    assetsSubDirectory:'static',
    assetsPublicPath:'/',
  }
}

