// touch ./src/index.js    touch用于创建一个没有内容的空文件，通过改指令创建index.js 文件
import Vue from 'vue'
import App from './app'
import router from './router'
import alldires from '@/directive/alldirective'
import allFilters from '@/filter/firstfilter'
import $checkButton from '@/plugin/testPlugin'
import $checkPlugin from '@/plugin/secondPlugin'
import Store from '@/store/index.js'

Object.keys(alldires).forEach((dir)=>Vue.directive(dir,alldires[dir]))
Object.keys(allFilters).forEach((fil)=>Vue.filter(fil,allFilters[fil]))

Vue.use($checkButton)
Vue.use($checkPlugin)


new Vue({
  el:'#app',
  router,
  template:'<App/>',
  components:{ App },
  store:Store
})

if(module.hot){
  module.hot.accept()
}