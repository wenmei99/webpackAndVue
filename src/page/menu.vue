<template>
  <div>
    这是menu页面，从首页跳转过来
    <div v-seCondeDr>shhshshsh</div>
    <div v-thirdDr>哈哈哈哈哈哈，这倒是个意外</div>
    <div>{{count | getFixeNum }}</div>
    <div>{{count | testfixed}}</div>
    <button @click=testMixin>你知道mixin吗</button>
  </div>
</template>

<script>
import {testfixed} from '@/filter/secondFil'
import Vue from 'vue';
import firstMixin from '@/mixin/firstmixin.js'

export default {
  filters:{ testfixed },
  mixins:  [firstMixin],
  data() {
    return {
      count:10.5464
    }
  },
  created(){
    console.log(testfixed)
    // this.$checkButton('plugin')
    Vue.$checkPlugin('mmamma')
  },
  methods:{
    getSome(){
      console.log('盛夏白瓷梅子汤，碎冰碰壁叮当响');
    },
    testMixin(){
      console.log("这是当前页面");
      this.mixinInTest('去到mixin',()=>this.getSome())
    }
  }
}
</script>

<style lang='scss' scoped>
 
</style>