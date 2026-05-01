import { defineStore } from 'pinia'
import { watch } from 'vue'
import { useLocalStorage, usePreferredDark } from '@vueuse/core'

export type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const preferredDark = usePreferredDark()
  const theme = useLocalStorage<Theme>('theme', () => (preferredDark.value ? 'dark' : 'light'))

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  function initializeTheme() {
    applyTheme()
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  watch(theme, applyTheme)

  return {
    theme,
    initializeTheme,
    toggleTheme,
  }
})
