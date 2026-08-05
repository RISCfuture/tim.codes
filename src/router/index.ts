import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '/',
        name: 'bio',
        component: () => import('../components/sections/BioSection.vue'),
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('../components/sections/ProjectsSection.vue'),
      },
      {
        path: 'resume',
        name: 'resume',
        component: () => import('../components/sections/ResumeSection.vue'),
      },
    ],
  },
]

// Dev-only route to preview error boundary
if (import.meta.env.DEV) {
  routes.push({
    path: '/dev/error',
    name: 'dev-error',
    component: () => import('../views/DevErrorView.vue'),
  })
}

// Stays last so it only catches what every route above declined.
routes.push({
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('../views/NotFoundView.vue'),
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Links published while the site used hash history still arrive as `/#/projects`,
// which is always the root path carrying the real route in the fragment. Scoped to
// the root so a stray `#/` on a genuine path cannot bounce the visitor home.
router.beforeEach((to) => {
  if (to.path !== '/' || !to.hash.startsWith('#/')) return true
  const legacyPath = to.hash.slice(1)
  return legacyPath === '/' ? true : legacyPath
})

export default router
