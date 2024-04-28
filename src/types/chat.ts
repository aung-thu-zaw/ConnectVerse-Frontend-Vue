export interface PrivateConversationMessage {}

export interface PrivateConversationMessageError {
  receiver_id: string
  content: string
  message_type: string
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
