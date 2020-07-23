<template>
  <div>
    <button @click="toNextpage">跳转</button>
    <div v-DrColor>测试自定义指令</div>
  </div>
</template>

<script>
import DrColor from  '@/directive/firstDirective'
export default {
  directives:{DrColor},
  data() {
    return {
    }
  },
  methods:{
    toNextpage(){
      this.$router.push({name:'Menu'})
    }
  }
}
</script>

<style lang='scss' scoped>
 
</style>