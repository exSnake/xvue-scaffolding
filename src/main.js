import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { Analytics } from "@vercel/analytics/vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

import "./assets/main.css";
import "flowbite";

const app = createApp(App);

// Toast notifications
app.use(Vue3Toasity, { autoClose: 3000 });

// State management
app.use(createPinia());

// Router
app.use(router);

// Internationalization
app.use(i18n);

// Vercel Analytics
// eslint-disable-next-line vue/multi-word-component-names
app.component("Analytics", Analytics);

app.mount("#app");
