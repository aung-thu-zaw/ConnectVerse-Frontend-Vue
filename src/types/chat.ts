import type { User } from './auth'

export interface Conversation {
  id: number
  notification_mute_status: 'not_muted' | '1_hr' | '4_hr' | '8_hr' | '1_day' | '3_days' | 'forever'
  sender: User | null
  receiver: User | null
  both_read_last_message: boolean
  total_unread_message_count: number
  last_sent_message?: {
    sender: string
    message: string
    file?: string[]
  }
  last_active_at: string | null
}

export interface GroupChat {
  id: number
  name: string
  description: string
  typing_allowed: boolean
  notification_mute_status: 'not_muted' | '1_hr' | '4_hr' | '8_hr' | '1_day' | '3_days' | 'forever'
  owner: User
  member_count: number
  last_active_at: string | null
}

export interface Channel {
  id: number
  name: string
  description: string
  notification_mute_status: 'not_muted' | '1_hr' | '4_hr' | '8_hr' | '1_day' | '3_days' | 'forever'
  owner: User
  subscriber_count: number
  last_active_at: string | null
}

export interface ChatList {
  id: number
  user_id: number
  pinned: boolean
  chat_type: 'App\\Models\\Conversation' | 'App\\Models\\GroupChat' | 'App\\Models\\Channel'
  chat: Conversation | GroupChat | Channel
}

export interface PrivateConversationMessage {}

export interface PrivateConversationMessageError {
  receiver_id: string
  content: string
  message_type: string
  is_read_by_sender: boolean
  is_read_by_receiver: boolean
  media_type: string
  media_file: string
  caption: string
}

export interface GroupConversationMessage {}

export interface GroupConversationMessageError {}

export interface ChannelMessage {}

export interface ChannelMessageError {}

export interface MessageForm {
  receiver_id: number
  content: string
  message_type: 'text' | 'media' | string
  media?: {
    media_type: 'file' | 'image' | 'video' | 'voice' | string
    media_file: File[] | string[]
    caption: string
  }
}
