import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { Analytics } from "@vercel/analytics/vue";

import {
  LucideMenu,
  LucideMoon,
  LucideSun,
  LucideX,
  LucideGithub,
  LucideGlobe,
  LucideChevronDown,
  LucideChevronUp,
  LucideMail,
  LucideHome,
  LucideInfo,
} from "@/components/icons";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

import "./assets/main.css";
import "flowbite";

const app = createApp(App);

// Register commonly used icons globally
app.component("LucideMenu", LucideMenu);
app.component("LucideMoon", LucideMoon);
app.component("LucideSun", LucideSun);
app.component("LucideX", LucideX);
app.component("LucideGithub", LucideGithub);
app.component("LucideGlobe", LucideGlobe);
app.component("LucideChevronDown", LucideChevronDown);
app.component("LucideChevronUp", LucideChevronUp);
app.component("LucideMail", LucideMail);
app.component("LucideHome", LucideHome);
app.component("LucideInfo", LucideInfo);

// Toast notifications
app.use(Vue3Toasity, { autoClose: 3000 });

// State management
app.use(createPinia());

// Router
app.use(router);

// Internationalization
app.use(i18n);

// Vercel Analytics
app.component("Analytics", Analytics);

app.mount("#app");
