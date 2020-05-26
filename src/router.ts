/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import(/* webpackChunkName: "bio" */ './views/home/sections/Bio.vue')
        },
        {
          path: '/projects',
          name: 'projects',
          component: () => import(/* webpackChunkName: "projects" */ './views/home/sections/Projects.vue')
        },
        {
          path: '/resume',
          name: 'resume',
          component: () => import(/* webpackChunkName: "resume" */ './views/home/sections/Resume.vue')
        }
      ]
    }
  ]
})
