import type { Contact, ContactForm, Error } from '@/types/contact'
import type { Axios, AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { inject, ref } from 'vue'

export const useContactStore = defineStore('contact', () => {
  const contacts = ref<Contact[] | null>(null)
  const errors = ref<Error | null>(null)
  const isLoading = ref<boolean>(false)
  const axios = inject('$axios') as Axios

  const getAllContacts = async (): Promise<void> => {
    try {
      const response = await axios.get('/user/contacts')

      if (!response) throw new Error('Response Not Found!')

      contacts.value = response.data.data
    } catch (error: any) {
      console.error(error.response.data)
    }
  }

  const createContact = async (form: ContactForm): Promise<void | AxiosResponse> => {
    isLoading.value = true

    try {
      const response = await axios.post('/user/contacts', { ...form, name: form.name ?? null })

      if (!response) throw new Error('Response Not Found!')

      return response
    } catch (error: any) {
      if (error.response?.data?.message && !error.response?.data?.errors?.length) {
        errors.value = { phone_number: error.response.data.message }
      } else {
        errors.value = error.response?.data?.errors
      }
    } finally {
      isLoading.value = false
    }
  }

  const editContact = async (
    contactId: number,
    form: ContactForm
  ): Promise<void | AxiosResponse> => {
    isLoading.value = true
    try {
      const response = await axios.patch(`/user/contacts/${contactId}`, {
        ...form,
        name: form.name ?? null
      })

      if (!response) throw new Error('Response Not Found!')

      return response
    } catch (error: any) {
      errors.value = error.response?.data?.errors
    } finally {
      isLoading.value = false
    }
  }

  const deleteContact = async (contactId: number): Promise<void> => {
    try {
      const response = await axios.delete(`/user/contacts/${contactId}`)

      if (!response) throw new Error('Response Not Found!')

      if (response.data.data.status === 'success') await getAllContacts()
    } catch (error: any) {
      console.error(error.response.data)
    }
  }

  return {
    contacts,
    errors,
    isLoading,
    getAllContacts,
    createContact,
    editContact,
    deleteContact
  }
})
