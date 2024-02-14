import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '/',
          name: 'bio',
          component: () => import('../components/sections/BioSection.vue')
        },
        {
          path: 'projects',
          name: 'projects',
          component: () => import('../components/sections/ProjectsSection.vue')
        },
        {
          path: 'resume',
          name: 'resume',
          component: () => import('../components/sections/ResumeSection.vue')
        }
      ]
    }
  ]
})

export default router
