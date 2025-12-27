<template>
  <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t("about.title") }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ $t("about.subtitle") }}
        </p>
      </div>

      <!-- Mission Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t("about.mission.title") }}
        </h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ $t("about.mission.description") }}
        </p>
      </div>

      <!-- Features Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t("about.features.title") }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="flex items-start"
          >
            <div
              class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-400 mt-1"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                {{ feature.title }}
              </h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <router-link
          :to="`/${$i18n.locale}/contact`"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          {{ $t("about.cta") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const features = computed(() => [
  {
    title: t("about.features.feature1.title"),
    description: t("about.features.feature1.description"),
  },
  {
    title: t("about.features.feature2.title"),
    description: t("about.features.feature2.description"),
  },
  {
    title: t("about.features.feature3.title"),
    description: t("about.features.feature3.description"),
  },
  {
    title: t("about.features.feature4.title"),
    description: t("about.features.feature4.description"),
  },
]);
</script>
