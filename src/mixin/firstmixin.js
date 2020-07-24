export default {
  created(){
    console.log('mixin中的test');
  },
  methods:{
    mixinInTest(params,methodsName){
      console.log(params);
      methodsName()
    }
  },
}