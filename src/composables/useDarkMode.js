import { useDark, useToggle } from '@vueuse/core'

/**
 * Composable for managing dark mode
 *
 * Uses @vueuse/core's useDark for persistent dark mode state
 * Automatically syncs with system preferences and saves user choice to localStorage
 *
 * @returns {Object} Dark mode utilities
 * @property {Ref<boolean>} isDark - Whether dark mode is currently active
 * @property {Function} toggleDark - Function to toggle dark mode
 */
export function useDarkMode() {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    storageKey: 'vueuse-color-scheme',
  })

  const toggleDark = useToggle(isDark)

  return {
    isDark,
    toggleDark,
  }
}
