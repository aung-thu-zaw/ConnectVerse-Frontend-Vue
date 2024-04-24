import type {
  PhoneVerification,
  AuthForm,
  ProfileForm,
  Error,
  User,
  Authorization,
  AdditionalPasswordForm
} from '@/types/auth'
import type { Axios } from 'axios'
import { defineStore } from 'pinia'
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import { handleRequest, handleSuccessResponse } from '@/utils/auth'

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

  const requestVerificationCode = async (form: AuthForm) => {
    const onSuccess = (response: any) => {
      phoneVerification.value = response.data.data
      if (response.data.status === 'success') router.push({ name: 'auth.verification' })
    }

    handleRequest(
      axios.post('/auth/verification-code/request', { ...form }),
      onSuccess,
      errors,
      isLoading
    )
  }

  const verifyVerificationCode = async (verificationCode: string) => {
    const onSuccess = (response: any) => {
      if (response.data.data.proceed_action === 'create-profile' && !response.data.data.user) {
        router.push({ name: 'profile.create' })
      }

      if (
        response.data.data.proceed_action === 'add-additional-password' &&
        !response.data.data.user
      ) {
        router.push({ name: 'auth.two-factor' })
      }

      handleSuccessResponse(response, user, isAuthenticated, authorization, router)
    }

    handleRequest(
      axios.post('/auth/verify-code', {
        phone_number: phoneVerification.value?.phone_number,
        phone_country_code: phoneVerification.value?.phone_country_code,
        verification_code: verificationCode
      }),
      onSuccess,
      errors,
      isLoading
    )
  }

  const createProfile = async (form: ProfileForm) => {
    const onSuccess = (response: any) => {
      handleSuccessResponse(response, user, isAuthenticated, authorization, router)
    }

    handleRequest(
      axios.post('/auth/create-profile', {
        ...form,
        phone_number: phoneVerification.value?.phone_number,
        phone_country_code: phoneVerification.value?.phone_country_code
      }),
      onSuccess,
      errors,
      isLoading
    )
  }

  const loginWithAdditionalPassword = async (form: AdditionalPasswordForm) => {
    const onSuccess = (response: any) => {
      handleSuccessResponse(response, user, isAuthenticated, authorization, router)
    }

    handleRequest(
      axios.post('/auth/login/additional-password', {
        ...form,
        phone_number: phoneVerification.value?.phone_number,
        phone_country_code: phoneVerification.value?.phone_country_code
      }),
      onSuccess,
      errors,
      isLoading
    )
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
    loginWithAdditionalPassword,
    logout,
    getAuthenticatedUser
  }
})
