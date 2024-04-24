import type {
  PhoneVerification,
  AuthForm,
  ProfileForm,
  Error,
  User,
  Authorization
} from '@/types/auth'
import type { Axios } from 'axios'
import { defineStore } from 'pinia'
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const errors = ref<Error | null>(null)
  const status = ref<string>('')
  const isAuthenticated = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const axios = inject('$axios') as Axios
  const router = useRouter()
  const phoneVerification = ref<PhoneVerification | null>(null)
  const authorization = ref<Authorization | null>(null)

  const requestVerificationCode = async (form: AuthForm): Promise<void> => {
    isLoading.value = true

    try {
      const response = await axios.post('/auth/verification-code/request', { ...form })

      if (!response) throw new Error('Response Not Found!')

      if (response.data.status === 'success') router.push({ name: 'auth.verification' })

      phoneVerification.value = response.data.data
    } catch (error: any) {
      errors.value = error.response?.data?.errors
    } finally {
      isLoading.value = false
    }
  }

  const verifyVerificationCode = async (verificationCode: string): Promise<void> => {
    isLoading.value = true

    try {
      const response = await axios.post('/auth/verify-code', {
        phone_number: phoneVerification.value?.phone_number,
        phone_country_code: phoneVerification.value?.phone_country_code,
        verification_code: verificationCode
      })

      if (!response) throw new Error('Response Not Found!')

      if (response.data.data.proceed_action === 'create-profile' || !response.data.data.user) {
        router.push({ name: 'profile.create' })
      }

      if (response.data.data.proceed_action === 'add-additional-password' || !response.data.data.user) {
        router.push({ name: 'profile.create' })
      }

      if (response.data.status === 'success' && response.data.data.user) {
        user.value = response.data.data.user
        isAuthenticated.value = true

        if (!response.data.data.authorization.token) {
          throw new Error('Authorization Token Not Found!')
        }

        authorization.value = response.data.data.authorization

        localStorage.setItem('token', response.data.data.authorization?.token)

        router.push({ name: 'home' })
      }
    } catch (error: any) {
      errors.value = { verification_code: error.response?.data?.message }
    } finally {
      isLoading.value = false
    }
  }

  const createProfile = async (form: ProfileForm): Promise<void> => {
    isLoading.value = true

    try {
      const response = await axios.post('/auth/create-profile', {
        ...form,
        phone_number: phoneVerification.value?.phone_number,
        phone_country_code: phoneVerification.value?.phone_country_code
      })

      if (!response) throw new Error('Response Not Found!')

      if (response.data.status === 'success' && response.data.data) {
        user.value = response.data.data.user
        isAuthenticated.value = true

        if (!response.data.data.authorization.token) {
          throw new Error('Authorization Token Not Found!')
        }

        authorization.value = response.data.data.authorization

        localStorage.setItem('token', response.data.data.authorization?.token)

        router.push({ name: 'home' })
      }
    } catch (error: any) {
      errors.value = error.response?.data?.errors
    } finally {
      isLoading.value = false
    }
  }

  const logout = async (): Promise<void> => {
    try {
      const response = await axios.post('/auth/logout')

      if (response.data.status === 'success') {
        user.value = null

        isAuthenticated.value = false

        localStorage.removeItem('token')

        router.push({ name: 'authentication' })
      }
    } catch (error: any) {
      console.error(error.response.data)
    }
  }

  const getAuthenticatedUser = async (): Promise<void> => {
    try {
      const response = await axios.get('/user')

      if (!response) throw new Error('Response Not Found!')

      user.value = response.data

      isAuthenticated.value = true
    } catch (error: any) {
      console.error(error.response.data)
    }
  }

  return {
    user,
    errors,
    status,
    isLoading,
    isAuthenticated,
    requestVerificationCode,
    verifyVerificationCode,
    createProfile,
    logout,
    getAuthenticatedUser
  }
})
