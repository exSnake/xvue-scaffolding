import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useStorage } from "@vueuse/core";

/**
 * Main application store
 *
 * Example store demonstrating Pinia best practices with:
 * - Persistent state using useStorage
 * - Computed properties
 * - Actions for state mutations
 */
export const useAppStore = defineStore("app", () => {
  // State: Theme preference
  const theme = useStorage("theme", "system", localStorage, {
    serializer: {
      read: (v) => v || "system",
      write: (v) => v,
    },
  });

  // State: User preferences (persisted to localStorage)
  const preferences = useStorage(
    "app-preferences",
    {
      notifications: true,
      analytics: true,
      language: "en",
    },
    localStorage,
    {
      deep: true,
    },
  );

  // State: UI state (not persisted)
  const sidebarOpen = ref(false);

  // Computed: Check if dark mode is active
  const isDarkMode = computed(() => theme.value === "dark");

  // Actions
  function toggleTheme() {
    if (theme.value === "dark") {
      theme.value = "light";
    } else if (theme.value === "light") {
      theme.value = "system";
    } else {
      theme.value = "dark";
    }
  }

  function setTheme(newTheme) {
    if (["light", "dark", "system"].includes(newTheme)) {
      theme.value = newTheme;
    }
  }

  function updatePreference(key, value) {
    if (key in preferences.value) {
      preferences.value[key] = value;
    }
  }

  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value;
  }

  return {
    // State
    theme,
    preferences,
    sidebarOpen,

    // Computed
    isDarkMode,

    // Actions
    toggleTheme,
    setTheme,
    updatePreference,
    toggleSidebar,
  };
});
