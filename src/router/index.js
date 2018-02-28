import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Welcome from '@/pages/Welcome'
import ArticleLists from '@/pages/ArticleLists'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Login
    }, {
      path: '/home',
      component: Home,
      children: [{
        path: '',
        component: Welcome
      }, {
        path: 'articleLists',
        component: ArticleLists
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
