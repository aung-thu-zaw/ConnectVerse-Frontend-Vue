import axios from 'axios'
import type { App } from 'vue'

const createAxiosInstance = (options: any) => {
  const axiosInstance = axios.create({
    baseURL: options.baseURL || 'http://localhost:8000/api',
    withCredentials: options.withCredentials || true,
    withXSRFToken: options.withXSRFToken || true,
    headers: {
      Accept: options.headers?.accept || 'application/json',
      'Content-Type': options.headers?.contentType || 'application/json',
      'X-Requested-With': options.headers?.xRequestedWith || 'XMLHttpRequest'
    }
  })

  const token = localStorage.getItem('token')

  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  return axiosInstance
}

export default {
  install: (app: App, options: any) => {
    const axiosInstance = createAxiosInstance(options)
    app.config.globalProperties.$axios = axiosInstance

    app.provide('$axios', axiosInstance)
  }
}
