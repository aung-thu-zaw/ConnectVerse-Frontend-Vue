import guest from '../middlewares/guest'

export default [
  {
    path: '/auth',
    meta: {
      middleware: [guest]
    },
    children: [
      {
        path: '',
        name: 'authentication',
        component: () => import('@/views/auth/Authentication.vue')
      },
      {
        path: 'verification',
        name: 'auth.verification',
        component: () => import('@/views/auth/Verification.vue')
      },
      {
        path: 'two-factor',
        name: 'auth.two-factor',
        component: () => import('@/views/auth/TwoFactorAuth.vue')
      }
    ]
  },
  {
    path: '/profile/create',
    name: 'profile.create',
    component: () => import('@/views/auth/CreateProfile.vue'),
    meta: {
      middleware: [guest]
    }
  }
]
