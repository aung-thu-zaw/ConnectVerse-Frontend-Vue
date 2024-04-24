export interface Authorization {
  token: string
  type: string
}

export interface User {
  id: number
  avatar: string | null
  username: string
  display_name: string
  phone_number: string
  phone_country_code: string
  phone_verified_at: string | null
  recovery_email: string | null
  recovery_email_verified_at: string | null
}

export interface Error {
  phone_number?: string
  phone_country_code?: string
  verification_code?: string
  username?: string
  display_name?: string
  avatar?: string
  recovery_email?: string
}

export interface AuthForm {
  phone_number: string
  phone_country_code: string
}

export interface ProfileForm {
  username: string
  display_name: string
  phone_number: string
  phone_country_code: string
  recovery_email: string | null
}

export interface PhoneVerification {
  phone_number: string
  phone_country_code: string
  phone_verify_code: string | null
  phone_last_verified_at: string | null
  phone_verify_code_expires_at: string | null
}
