import apiHome from '@/api/firstApi'
import types from './action-types'
import mutypes from './mutation-types'


const actions = {
  [types.GETMSGJSON]({commit,state},testname){
    apiHome.getJson().then((data)=>{
      console.log(data);
      const obj = data.find(({name})=>name===testname);
      commit(mutypes.UPDATEPERSON,obj)
    })
  }
}

export default actions