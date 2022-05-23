import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
// import Home from '../view/home/home.vue'

export default () => createRouter({
  //history: createWebHistory(), // 创建history路由模式
  history: createWebHashHistory(), //创建hash路由模式
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../view/home/home.vue'),
    },
    {
      path: '/demo1',
      name: 'Demo1',
      component: () => import('../view/demo1/demo1.vue')
    },
    {
      path: '/demo2',
      name: 'Demo2',
      component: () => import('../view/demo2/demo2.vue')
    },
    {
      path: '/demo3',
      name: 'Demo3',
      component: () => import('../view/demo3/demo.vue')
    },
    {
      path: '/demo4',
      name: 'Demo4',
      component: () => import('../view/demo4/demo.vue')
    },
    {
      path: '/demo5',
      name: 'Demo5',
      component: () => import('../view/demo5/demo.vue')
    },
    {
      path: '/map_cn',
      name: 'Demo_Map',
      component: () => import('../view/map_cn/demo.vue')
    },
  ]
})
