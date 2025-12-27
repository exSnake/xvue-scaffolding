<template>
  <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t("contact.title") }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ $t("contact.subtitle") }}
        </p>
      </div>

      <!-- Contact Form Component -->
      <div
        v-if="features.contactForm"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <ContactForm />
      </div>

      <!-- Feature Disabled Message -->
      <div
        v-else
        class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 text-center"
      >
        <h2
          class="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2"
        >
          {{ $t("contact.disabled.title") }}
        </h2>
        <p class="text-yellow-700 dark:text-yellow-300">
          {{ $t("contact.disabled.message") }}
        </p>
      </div>

      <!-- Additional Info -->
      <div class="mt-8 text-center text-gray-600 dark:text-gray-400">
        <p>{{ $t("contact.info") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ContactForm from "@/components/forms/ContactForm.vue";
import { features } from "@/config/features";
</script>
