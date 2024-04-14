import '@/assets/css/tailwind.css'
import 'maz-ui/css/main.css'

import { createApp } from 'vue'
import { pinia } from '@/plugins/pinia'
import axios from '@/plugins/axios'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(axios, { baseUrl: 'http://localhost:8000/api' })
app.mount('#app')
