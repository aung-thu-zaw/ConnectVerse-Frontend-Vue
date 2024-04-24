import auth from '../middlewares/auth'

export default [
  {
    path: '/',
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue')
      }
    ]
  }
]
