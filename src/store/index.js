import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getter'
import mutations  from './mutation'
import actions from './action'
import logger from './logger'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count:0,
    todos:[
      { name:'wm',id:1,done:true },
      { name:'hha',id:2,done:false }
    ],
    personMsg:{}
  },
  getters,
  mutations,
  actions,
  plugins:[logger]
})


export default store