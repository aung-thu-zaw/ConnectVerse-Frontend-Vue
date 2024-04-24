import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from '@/router/auth'
import chatRoutes from '@/router/chat'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [...authRoutes, ...chatRoutes]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.middleware) {
    const middlewareArray = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]
    for (const middleware of middlewareArray) {
      await middleware(to, from, next)
    }
  } else {
    next()
  }
})

export default router
