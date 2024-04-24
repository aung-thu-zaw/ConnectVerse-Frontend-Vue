import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import type { AxiosResponse } from 'axios'
import type { User, Error, Authorization } from '@/types/auth'

export const handleSuccessResponse = (
  response: AxiosResponse<any>,
  user: Ref<User | null>,
  isAuthenticated: Ref<boolean>,
  authorization: Ref<Authorization | null>,
  router: Router
) => {
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
}

export const handleErrorResponse = (error: any, errors: Ref<Error | null>) => {
  if (
    error.response.data.message === 'Phone verification record not found!' ||
    error.response.data.message === 'Invalid verification code!'
  ) {
    errors.value = { verification_code: error.response.data.message }
  } else {
    errors.value = error.response?.data?.errors
  }
}

export const handleRequest = async (
  request: Promise<any>,
  onSuccess: Function,
  errors: Ref<Error | null>,
  isLoading: Ref<boolean>
) => {
  isLoading.value = true

  try {
    const response = await request

    if (!response) throw new Error('Response Not Found!')

    onSuccess(response)
  } catch (error: any) {
    handleErrorResponse(error, errors)
  } finally {
    isLoading.value = false
  }
}
