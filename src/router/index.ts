import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'authentication',
      component: () => import('@/views/auth/Authentication.vue')
    },
    {
      path: '/auth/verification',
      name: 'auth.verification',
      component: () => import('@/views/auth/Verification.vue')
    },
    {
      path: '/auth/two-factor',
      name: 'auth.two-factor',
      component: () => import('@/views/auth/TwoFactorAuth.vue')
    },
    {
      path: '/profile/create',
      name: 'profile.create',
      component: () => import('@/views/auth/CreateProfile.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    }
  ]
})

export default router
