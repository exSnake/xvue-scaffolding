# Pinia Stores

This directory contains Pinia stores for state management.

## Pattern & Best Practices

This template uses **Composition API** style for Pinia stores (not Options API).

### Basic Store Structure

```javascript
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

export const useMyStore = defineStore('myStore', () => {
  // State - use ref()
  const count = ref(0)

  // Persistent state - use useStorage()
  const userSettings = useStorage('user-settings', {
    theme: 'light'
  }, localStorage, { deep: true })

  // Computed - use computed()
  const doubleCount = computed(() => count.value * 2)

  // Actions - regular functions
  function increment() {
    count.value++
  }

  return {
    count,
    userSettings,
    doubleCount,
    increment
  }
})
```

### Using Stores in Components

```vue
<script setup>
import { storeToRefs } from 'pinia'
import { useMyStore } from '@/stores/myStore'

const myStore = useMyStore()

// Destructure reactive state/computed with storeToRefs
const { count, doubleCount } = storeToRefs(myStore)

// Actions can be destructured directly
const { increment } = myStore
</script>
```

### Persistent State with useStorage

```javascript
import { useStorage } from '@vueuse/core'

// Simple value
const theme = useStorage('theme', 'light')

// Object with deep reactivity
const preferences = useStorage('preferences', {
  lang: 'en',
  notifications: true
}, localStorage, { deep: true })
```

### Store Naming Conventions

- Store file: `myStore.js` (camelCase)
- Store name: `'myStore'` (camelCase string)
- Composable: `useMyStore` (camelCase with 'use' prefix)

## Example Stores

- `app.js` - Main application store (theme, preferences, UI state)

## Creating a New Store

1. Create a new file: `src/stores/yourStore.js`
2. Define your store using Composition API pattern
3. Export the composable: `export const useYourStore = defineStore(...)`
4. Use it in components with `storeToRefs` for reactivity

## Resources

- [Pinia Documentation](https://pinia.vuejs.org/)
- [@vueuse/core Documentation](https://vueuse.org/)
