<template>
  <div>
    <button @click="toNextpage">跳转</button>
    <div v-DrColor>测试自定义指令</div>
    <button @click="sendFirstReq">先发一个请求</button>
    <button @click="getSomeData">测试axios相关</button>
    <button @click="getError">获取请求错误数据</button>
    <ul>
      <li v-for="(item,index) in showData" :key="index">{{item.name}} is {{item.age}} 岁</li>
    </ul>
    <div>{{count}}</div>
    <ul>
      <li v-for="item in todos" :key="item.id">{{item.name}}</li>
    </ul>
    <div v-for="item in doneTodo" :key="item.id">{{item.name}}</div>
    <div @click="testMutations">测试mutation</div>
    <button @click="testAction">测试action</button>
    <div v-if="personMsg">{{personMsg.name}}</div>
  </div>
</template>

<script>
import DrColor from  '@/directive/firstDirective'
import axios from 'axios'
import firstApi from '@/api/firstApi.js'
import { mapState ,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  directives:{DrColor},
  data() {
    return {
      showData:[] 
    }
  },
  computed:{
    // ...mapState({
    //   count:'count'
    // })
    ...mapState(['count','todos','personMsg']),
    ...mapGetters(['doneTodo'])
  },
  created(){
    // console.log(this.$store.state.count);
  },
  methods:{
    ...mapMutations(['FIRSTMUTATION']),
    ...mapActions(['GETMSGJSON']),
    testMutations(){
      this.FIRSTMUTATION(111)
    },
    testAction(){
      this.GETMSGJSON('wm')
    },
    toNextpage(){
      this.$router.push({name:'Menu'});
    },
    sendFirstReq(){
      axios.get('/static/msg.json').then((data)=>{
        this.showData = data
      }).catch((err)=>{
        alert(err+'this is an error');
      })
    },
    getSomeData(){
      firstApi.getJson().then((data)=>{
        this.showData = data
      })
    },
    getError(){
      firstApi.getErrorMsg().then((data)=>{
      }).catch((err)=>{
        alert(`${err},请求失败，请稍后重试`)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
 
</style>