import Vue from 'vue'
import Router from 'vue-router'


import home from './views/home.vue'
import article from './views/article.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/article',
      component: article
    }
  ]
})
