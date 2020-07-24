export default {
  install(Vue){
    Vue.prototype.$checkButton = (e)=>{
      console.log(e);
      
      console.log(222)
    }
  }
}