import types from './mutation-types';

const mutations = {
  [types.FIRSTMUTATION](state,num){
    state.count +=num
  },
  [types.UPDATEPERSON](state,msg){
    state.personMsg = msg
  }
}

export default mutations