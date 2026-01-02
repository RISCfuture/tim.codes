import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
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

// Dev-only route to preview error boundary
if (import.meta.env.DEV) {
  routes.push({
    path: '/dev/error',
    name: 'dev-error',
    component: () => import('../views/DevErrorView.vue')
  })
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
