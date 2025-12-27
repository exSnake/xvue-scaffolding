<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const appName = import.meta.env.VITE_APP_NAME || "Vue App";
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-3xl mx-auto text-center">
      <!-- Success Icon -->
      <div class="mb-8">
        <svg
          class="w-24 h-24 mx-auto text-green-500 dark:text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <!-- Main Message -->
      <h1
        class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
      >
        {{ t('home.title') }}
      </h1>

      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
        {{ t('home.subtitle') }}
      </p>

      <!-- Instructions -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-left mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          {{ t('home.nextSteps') }}
        </h2>
        <ol class="space-y-3 text-gray-700 dark:text-gray-300">
          <li class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <span>{{ t('home.step1') }}</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <span>{{ t('home.step2') }}</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <span>{{ t('home.step3') }}</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <span>{{ t('home.step4') }}</span>
          </li>
        </ol>
      </div>

      <!-- Documentation Links -->
      <div class="flex gap-4 justify-center flex-wrap">
        <a
          href="/docs/SETUP.md"
          target="_blank"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {{ t('home.setupGuide') }}
        </a>
        <a
          href="/docs/CUSTOMIZATION.md"
          target="_blank"
          class="px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 dark:border-gray-600"
        >
          {{ t('home.customization') }}
        </a>
      </div>

      <!-- Tech Stack -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {{ t('home.builtWith') }}
        </p>
        <div class="flex gap-6 justify-center flex-wrap text-sm text-gray-600 dark:text-gray-400">
          <span>Vue 3</span>
          <span>•</span>
          <span>Vite</span>
          <span>•</span>
          <span>Pinia</span>
          <span>•</span>
          <span>Vue Router</span>
          <span>•</span>
          <span>Vue I18n</span>
          <span>•</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </div>
  </div>
</template>
