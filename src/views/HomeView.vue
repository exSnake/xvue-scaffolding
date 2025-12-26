<script setup>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const appName = import.meta.env.VITE_APP_NAME || "{{APP_NAME}}";
const appDescription =
  import.meta.env.VITE_APP_DESCRIPTION || "{{APP_DESCRIPTION}}";
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="container mx-auto max-w-4xl text-center">
        <h1
          class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          {{ appName }}
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          {{ appDescription }}
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <router-link
            :to="`/${$i18n.locale}/about`"
            class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {{ t("home.learnMore") }}
          </router-link>
          <router-link
            v-if="$route.matched.some((r) => r.path.includes('contact'))"
            :to="`/${$i18n.locale}/contact`"
            class="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-blue-600 dark:border-blue-400"
          >
            {{ t("home.getInTouch") }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-6xl">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
        >
          {{ t("home.features.title") }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div
            class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <div
              class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100"
            >
              {{ t("home.features.feature1.title") }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ t("home.features.feature1.description") }}
            </p>
          </div>

          <!-- Feature 2 -->
          <div
            class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <div
              class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100"
            >
              {{ t("home.features.feature2.title") }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ t("home.features.feature2.description") }}
            </p>
          </div>

          <!-- Feature 3 -->
          <div
            class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <div
              class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100"
            >
              {{ t("home.features.feature3.title") }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ t("home.features.feature3.description") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4">
      <div
        class="container mx-auto max-w-4xl text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-12 shadow-2xl"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          {{ t("home.cta.title") }}
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          {{ t("home.cta.description") }}
        </p>
        <router-link
          :to="`/${$i18n.locale}/about`"
          class="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {{ t("home.cta.button") }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Additional component-specific styles if needed */
</style>
