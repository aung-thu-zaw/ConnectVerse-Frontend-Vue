import { useAuthStore } from '@/stores/auth'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export default async function auth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const store = useAuthStore()

  if (!store.user) await store.getAuthenticatedUser()

  if (!store.isAuthenticated) {
    next({ name: 'authentication' })
  } else {
    next()
  }
}
