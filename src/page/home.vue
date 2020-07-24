<template>
  <div>
    <button @click="toNextpage">跳转</button>
    <div v-DrColor>测试自定义指令</div>
    <button @click="sendFirstReq">先发一个请求</button>
    <button @click="getSomeData">测试axios相关</button>
  </div>
</template>

<script>
import DrColor from  '@/directive/firstDirective'
import axios from 'axios'
import firstApi from '@/api/firstApi.js'


export default {
  directives:{DrColor},
  data() {
    return {
    }
  },
  methods:{
    toNextpage(){
      this.$router.push({name:'Menu'});
    },
    sendFirstReq(){
      axios.get('/static/msg.json').then((data)=>{
        console.log(data);
      }).catch((err)=>{
        alert(err+'this is an error');
      })
    },
    getSomeData(){
      firstApi.getJson().then(()=>{

      })
    }
  }
}
</script>

<style lang='scss' scoped>
 
</style>