import { markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

const pinia = createPinia()

pinia.use(({ store, app }) => {
  store.router = markRaw(router)
  store.axios = markRaw(app.config.globalProperties.$axios)
})

export default pinia
