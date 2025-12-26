<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {{ appName }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ $t('home.subtitle') }}
          </p>
        </div>

        <!-- Links Section -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
            {{ $t('nav.links', 'Links') }}
          </h4>
          <nav class="flex flex-col space-y-2">
            <router-link
              :to="`/${$i18n.locale}`"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
            >
              {{ $t('nav.home') }}
            </router-link>
            <router-link
              :to="`/${$i18n.locale}/about`"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
            >
              {{ $t('nav.about') }}
            </router-link>
            <router-link
              v-if="features.contactForm"
              :to="`/${$i18n.locale}/contact`"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
            >
              {{ $t('nav.contact') }}
            </router-link>
          </nav>
        </div>

        <!-- Settings Section -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
            {{ $t('common.settings', 'Settings') }}
          </h4>
          <div class="flex flex-col space-y-3">
            <!-- Language Selector -->
            <div>
              <label class="text-xs text-gray-600 dark:text-gray-400 block mb-1">
                {{ $t('common.language', 'Language') }}
              </label>
              <select
                v-model="currentLocale"
                @change="changeLocale"
                class="text-sm bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded px-2 py-1 text-gray-900 dark:text-white"
              >
                <option v-for="locale in availableLocales" :key="locale" :value="locale">
                  {{ getLocaleName(locale) }}
                </option>
              </select>
            </div>

            <!-- Dark Mode Toggle -->
            <div>
              <button
                @click="toggleDark"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
              >
                <span class="mr-2">{{ isDark ? '☀️' : '🌙' }}</span>
                <span>{{ isDark ? $t('common.lightMode', 'Light Mode') : $t('common.darkMode', 'Dark Mode') }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            © {{ currentYear }} {{ appName }}. {{ $t('footer.rights') }}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ $t('footer.builtWith') }}
            <a
              href="https://vuejs.org"
              target="_blank"
              rel="noopener"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >Vue 3</a>
            +
            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noopener"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >Vite</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode'
import { features } from '@/config/features'

const { locale, availableLocales } = useI18n()
const router = useRouter()
const { isDark, toggleDark } = useDarkMode()

const appName = import.meta.env.VITE_APP_NAME || '{{APP_NAME}}'
const currentYear = new Date().getFullYear()
const currentLocale = ref(locale.value)

const localeNames = {
  en: 'English',
  it: 'Italiano',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  nl: 'Nederlands',
  pt: 'Português',
  et: 'Eesti',
}

function getLocaleName(locale) {
  return localeNames[locale] || locale.toUpperCase()
}

function changeLocale() {
  const currentPath = router.currentRoute.value.path
  const pathParts = currentPath.split('/').filter(Boolean)

  // Replace language in path
  if (pathParts.length > 0) {
    pathParts[0] = currentLocale.value
    router.push('/' + pathParts.join('/'))
  } else {
    router.push(`/${currentLocale.value}`)
  }
}
</script>
