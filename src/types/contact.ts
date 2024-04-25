export interface ContactForm {
  name: string
  phone_number: string
  phone_country_code: string
  private_my_phone: boolean
}

export interface Error {
  name?: string
  phone_number: string
  phone_country_code?: string
  private_my_phone?: string
}

export interface Contact {
  id: number
  name: string | null
  phone_number: string
  phone_country_code: string
  private_my_phone: boolean
  associated_user: {
    id: number
    avatar: string
    username: string
    display_name: string
  }
}
