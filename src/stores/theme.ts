import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>('light')

  // Initialize theme from localStorage or system preference
  function initializeTheme() {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored && (stored === 'light' || stored === 'dark')) {
      theme.value = stored
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = prefersDark ? 'dark' : 'light'
    }
    applyTheme()
  }

  // Apply theme to document
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  // Toggle between light and dark
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  // Watch for theme changes and persist
  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme)
    applyTheme()
  })

  return {
    theme,
    initializeTheme,
    toggleTheme,
  }
})
