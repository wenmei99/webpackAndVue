// touch ./src/index.js    touch用于创建一个没有内容的空文件，通过改指令创建index.js 文件
import Vue from 'vue'
import App from './app'


new Vue({
  el:'#app',
  template:'<App/>',
  components:{ App }
})

if(module.hot){
  module.hot.accept()
}