export default{
  install(Vue){
    Vue.$checkPlugin = (params)=>{
      console.log(params);
      console.log('pluginhaha');
    }
  }
}