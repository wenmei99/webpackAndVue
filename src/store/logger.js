import creatLogger from 'vuex/dist/logger'

const logger = creatLogger({
  collapsed:false,        // 不自动展开mutation记录
  filter(mutation,stateBefore,stateAfter){
    // console.log(mutation,stateBefore,stateAfter);
    // 过滤只展示需要打印的部分数据
    return mutation.type === 'UPDATEPERSON'
  },
  transformer(state){
    return state.todos
  },
  logActions: false,      // 不记录 action 日志
  logMutations: true,     // 记录 mutation 日志
  logger: console,        // 自定义 console 实现，默认为 `console`
})


export default logger