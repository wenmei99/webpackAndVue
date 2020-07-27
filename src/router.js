import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 使用路由懒加载
const RouterView = () => import('@/layout/routerView');

const homePage = () => import('@/page/home');

const Empty = () => import('@/layout/empty.vue');

const Menu = ()=>import('@/page/menu');

const StudyVue = ()=>import('@/page/studyVue')


export default new VueRouter({
  routes:[
    {
      path:'/',
      name:'index',
      components:Empty,
      redirect:'/homePage'
    },
    {
      path:'/homePage',
      component:homePage,
      name:'homePage'
    },
    {
      path:'/menu',
      component:Menu,
      name:'Menu'
    },
    {
      path:'/studyVue',
      component:StudyVue,
      name:'StudyVue'
    },
  ]
})
