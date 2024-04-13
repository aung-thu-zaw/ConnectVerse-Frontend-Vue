import { ref, onMounted, onUnmounted } from 'vue'

type Theme = 'light' | 'dark'

const useTheme = (initialTheme?: Theme) => {
  const theme = ref<Theme | string>('')

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    localStorage.setItem('color-theme', newTheme)
  }

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === 'theme' && event.newValue !== null) {
      theme.value = event.newValue as Theme
    }
  }

  onMounted(() => {
    if (!initialTheme) {
      const storedTheme = localStorage.getItem('color-theme') as Theme
      theme.value = storedTheme !== null ? storedTheme : 'light'
    } else {
      theme.value = initialTheme
    }

    window.addEventListener('storage', handleStorageChange)
  })

  onUnmounted(() => {
    window.removeEventListener('storage', handleStorageChange)
  })

  return {
    theme,
    setTheme
  }
}

export default useTheme
