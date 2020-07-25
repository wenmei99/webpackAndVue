// 有时候我们需要对state衍生出一些状态，比如对数组中的一些数据进行过滤并计算，这时候可以用state
export default{
  doneTodo:(state)=>{
   return state.todos.filter(({done})=>done)
  }
}