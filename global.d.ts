import type Echo from 'laravel-echo'

// global.d.ts
declare global {
  interface Window {
    Echo: Echo
    Pusher: any
  }
}
