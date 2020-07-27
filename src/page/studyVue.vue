<template>
  <div>
    <!-- v-model是一个语法糖
    v-bind:value="value"
    v-on:input="e => value = e.target.value"  
    -->
    <input type="text" :value="msg" @input="changeValue">
    {{msg}}
  </div>
</template>

<script>
export default {
  // computed里面的函数名不能与data以及prop里面的函数名相同，因为他们三个都要挂到vm的实例上
  // 如果同名会产生覆盖，而且eslint 校验可能过不了，也反应了自己命名的不规范
  // 因为Props、methods、data、computed、watch都是在initState函数中被初始化的。
  // 初始化顺序就是我上面给出的顺序，本质上这些都是要挂载到this上面的，你如果重名的话，后面出现的属性自然而然会覆盖之前挂载的属性了。
  computed:{

  },
  data() {
    return {
      msg:''
    }
  },
  methods:{
    changeValue($event){
      // console.log($event.target.value);
      this.msg = $event.target.value
    }
  }
}
</script>

<style lang='scss' scoped>
 
</style>