// touch ./src/index.js    touch用于创建一个没有内容的空文件，通过改指令创建index.js 文件
import Vue from 'vue'
import App from './app'
import router from './router'
// import DrColor from  '@/directive/firstDirective'



new Vue({
  el:'#app',
  router,
  template:'<App/>',
  components:{ App },
  // directives:{DrColor}
})

if(module.hot){
  module.hot.accept()
}