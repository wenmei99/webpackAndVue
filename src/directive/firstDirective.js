export default{
  //只调用一次，第一次绑定到元素时调用
  bind(el){
    el.style.fontSize = '20px';
    el.style.color = 'green'
    el.style.padding= '10px'
    function handleEl(){
      el.style.color = 'red'
      console.log(el)
    }
    el._changeColor_ = handleEl
    el.addEventListener('click', el._changeColor_)
  },
  // 被绑定元素插入父节点的时候调用
  inserted(){

  },
  update(){

  },
  // 只调用一次，指令与元素解绑时调用
  unbind(el){
    el.removeEventListener('click', el._changeColor_)
    delete  el._changeColor_
  }
}