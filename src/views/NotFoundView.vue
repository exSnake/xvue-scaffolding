<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full text-center">
      <!-- 404 Illustration -->
      <div class="mb-8">
        <h1
          class="text-9xl font-bold text-blue-600 dark:text-blue-400 animate-pulse"
        >
          404
        </h1>
      </div>

      <!-- Message -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t("notFound.title") }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          {{ $t("notFound.message") }}
        </p>
      </div>

      <!-- Actions -->
      <div class="space-y-4">
        <router-link
          :to="`/${$i18n.locale}`"
          class="inline-block w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          {{ $t("notFound.backHome") }}
        </router-link>

        <button
          @click="goBack"
          class="inline-block w-full px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {{ $t("notFound.goBack") }}
        </button>
      </div>

      <!-- Additional Links -->
      <div class="mt-8 text-sm text-gray-500 dark:text-gray-400">
        <p>{{ $t("notFound.suggestions") }}</p>
        <div class="mt-4 space-x-4">
          <router-link
            :to="`/${$i18n.locale}/about`"
            class="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {{ $t("nav.about") }}
          </router-link>
          <router-link
            :to="`/${$i18n.locale}/contact`"
            class="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {{ $t("nav.contact") }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>
