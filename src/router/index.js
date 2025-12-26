import { createRouter, createWebHistory } from "vue-router";
import { features } from "@/config/features";

const supportedLanguages = ["en", "it", "fr", "es", "de", "nl", "et", "pt"];

const baseUrl = import.meta.env.VITE_BASE_URL || "{{BASE_URL}}";
const ogImage = `${baseUrl}/preview.png`;
const appName = import.meta.env.VITE_APP_NAME || "{{APP_NAME}}";
const appDescription =
  import.meta.env.VITE_APP_DESCRIPTION || "{{APP_DESCRIPTION}}";

const metaData = {
  home: {
    title: {
      en: `${appName}`,
      it: `${appName}`,
      fr: `${appName}`,
      es: `${appName}`,
      de: `${appName}`,
      nl: `${appName}`,
      pt: `${appName}`,
      et: `${appName}`,
    },
    metaTags: {
      en: [
        {
          name: "description",
          content: appDescription,
        },
        {
          property: "og:title",
          content: appName,
        },
        {
          property: "og:description",
          content: appDescription,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "en_US" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: appName,
        },
        {
          name: "twitter:description",
          content: appDescription,
        },
        { name: "twitter:image", content: ogImage },
      ],
      it: [
        {
          name: "description",
          content: appDescription,
        },
        {
          property: "og:title",
          content: appName,
        },
        {
          property: "og:description",
          content: appDescription,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "it_IT" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: appName,
        },
        {
          name: "twitter:description",
          content: appDescription,
        },
        { name: "twitter:image", content: ogImage },
      ],
      fr: [
        {
          name: "description",
          content: appDescription,
        },
        {
          property: "og:title",
          content: appName,
        },
        {
          property: "og:description",
          content: appDescription,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: appName,
        },
        {
          name: "twitter:description",
          content: appDescription,
        },
        { name: "twitter:image", content: ogImage },
      ],
      es: [
        {
          name: "description",
          content: appDescription,
        },
        {
          property: "og:title",
          content: appName,
        },
        {
          property: "og:description",
          content: appDescription,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "es_ES" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: appName,
        },
        {
          name: "twitter:description",
          content: appDescription,
        },
        { name: "twitter:image", content: ogImage },
      ],
      de: [
        {
          name: "description",
          content: appDescription,
        },
        {
          property: "og:title",
          content: appName,
        },
        {
          property: "og:description",
          content: appDescription,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "de_DE" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: appName,
        },
        {
          name: "twitter:description",
          content: appDescription,
        },
        { name: "twitter:image", content: ogImage },
      ],
      nl: [
        {
          name: "description",
          content: appDescription,
        },
        {
          property: "og:title",
          content: appName,
        },
        {
          property: "og:description",
          content: appDescription,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "nl_NL" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: appName,
        },
        {
          name: "twitter:description",
          content: appDescription,
        },
        { name: "twitter:image", content: ogImage },
      ],
      pt: [
        {
          name: "description",
          content: appDescription,
        },
        {
          property: "og:title",
          content: appName,
        },
        {
          property: "og:description",
          content: appDescription,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "pt_PT" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: appName,
        },
        {
          name: "twitter:description",
          content: appDescription,
        },
        { name: "twitter:image", content: ogImage },
      ],
      et: [
        {
          name: "description",
          content: appDescription,
        },
        {
          property: "og:title",
          content: appName,
        },
        {
          property: "og:description",
          content: appDescription,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "et_EE" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: appName,
        },
        {
          name: "twitter:description",
          content: appDescription,
        },
        { name: "twitter:image", content: ogImage },
      ],
    },
  },
  about: {
    title: {
      en: `About - ${appName}`,
      it: `Chi Siamo - ${appName}`,
      fr: `À Propos - ${appName}`,
      es: `Acerca de - ${appName}`,
      de: `Über Uns - ${appName}`,
      nl: `Over Ons - ${appName}`,
      pt: `Sobre - ${appName}`,
      et: `Meist - ${appName}`,
    },
    metaTags: {
      en: [
        {
          name: "description",
          content: `Learn more about ${appName} and our mission.`,
        },
        { property: "og:title", content: `About - ${appName}` },
        {
          property: "og:description",
          content: `Learn more about ${appName} and our mission.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "en_US" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `About - ${appName}` },
        {
          name: "twitter:description",
          content: `Learn more about ${appName} and our mission.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      it: [
        {
          name: "description",
          content: `Scopri di più su ${appName} e la nostra missione.`,
        },
        { property: "og:title", content: `Chi Siamo - ${appName}` },
        {
          property: "og:description",
          content: `Scopri di più su ${appName} e la nostra missione.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "it_IT" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Chi Siamo - ${appName}` },
        {
          name: "twitter:description",
          content: `Scopri di più su ${appName} e la nostra missione.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      fr: [
        {
          name: "description",
          content: `En savoir plus sur ${appName} et notre mission.`,
        },
        { property: "og:title", content: `À Propos - ${appName}` },
        {
          property: "og:description",
          content: `En savoir plus sur ${appName} et notre mission.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `À Propos - ${appName}` },
        {
          name: "twitter:description",
          content: `En savoir plus sur ${appName} et notre mission.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      es: [
        {
          name: "description",
          content: `Más información sobre ${appName} y nuestra misión.`,
        },
        { property: "og:title", content: `Acerca de - ${appName}` },
        {
          property: "og:description",
          content: `Más información sobre ${appName} y nuestra misión.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "es_ES" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Acerca de - ${appName}` },
        {
          name: "twitter:description",
          content: `Más información sobre ${appName} y nuestra misión.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      de: [
        {
          name: "description",
          content: `Erfahren Sie mehr über ${appName} und unsere Mission.`,
        },
        { property: "og:title", content: `Über Uns - ${appName}` },
        {
          property: "og:description",
          content: `Erfahren Sie mehr über ${appName} und unsere Mission.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "de_DE" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Über Uns - ${appName}` },
        {
          name: "twitter:description",
          content: `Erfahren Sie mehr über ${appName} und unsere Mission.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      nl: [
        {
          name: "description",
          content: `Meer informatie over ${appName} en onze missie.`,
        },
        { property: "og:title", content: `Over Ons - ${appName}` },
        {
          property: "og:description",
          content: `Meer informatie over ${appName} en onze missie.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "nl_NL" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Over Ons - ${appName}` },
        {
          name: "twitter:description",
          content: `Meer informatie over ${appName} en onze missie.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      pt: [
        {
          name: "description",
          content: `Saiba mais sobre ${appName} e nossa missão.`,
        },
        { property: "og:title", content: `Sobre - ${appName}` },
        {
          property: "og:description",
          content: `Saiba mais sobre ${appName} e nossa missão.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "pt_PT" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Sobre - ${appName}` },
        {
          name: "twitter:description",
          content: `Saiba mais sobre ${appName} e nossa missão.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      et: [
        {
          name: "description",
          content: `Lisateave ${appName} ja meie missiooni kohta.`,
        },
        { property: "og:title", content: `Meist - ${appName}` },
        {
          property: "og:description",
          content: `Lisateave ${appName} ja meie missiooni kohta.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "et_EE" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Meist - ${appName}` },
        {
          name: "twitter:description",
          content: `Lisateave ${appName} ja meie missiooni kohta.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
    },
  },
  contact: {
    title: {
      en: `Contact - ${appName}`,
      it: `Contatti - ${appName}`,
      fr: `Contact - ${appName}`,
      es: `Contacto - ${appName}`,
      de: `Kontakt - ${appName}`,
      nl: `Contact - ${appName}`,
      pt: `Contato - ${appName}`,
      et: `Kontakt - ${appName}`,
    },
    metaTags: {
      en: [
        {
          name: "description",
          content: `Get in touch with ${appName}. We'd love to hear from you.`,
        },
        { property: "og:title", content: `Contact - ${appName}` },
        {
          property: "og:description",
          content: `Get in touch with ${appName}. We'd love to hear from you.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "en_US" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Contact - ${appName}` },
        {
          name: "twitter:description",
          content: `Get in touch with ${appName}. We'd love to hear from you.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      it: [
        {
          name: "description",
          content: `Contatta ${appName}. Ci piacerebbe sentirti.`,
        },
        { property: "og:title", content: `Contatti - ${appName}` },
        {
          property: "og:description",
          content: `Contatta ${appName}. Ci piacerebbe sentirti.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "it_IT" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Contatti - ${appName}` },
        {
          name: "twitter:description",
          content: `Contatta ${appName}. Ci piacerebbe sentirti.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      fr: [
        {
          name: "description",
          content: `Contactez ${appName}. Nous serions ravis de vous entendre.`,
        },
        { property: "og:title", content: `Contact - ${appName}` },
        {
          property: "og:description",
          content: `Contactez ${appName}. Nous serions ravis de vous entendre.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Contact - ${appName}` },
        {
          name: "twitter:description",
          content: `Contactez ${appName}. Nous serions ravis de vous entendre.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      es: [
        {
          name: "description",
          content: `Póngase en contacto con ${appName}. Nos encantaría saber de usted.`,
        },
        { property: "og:title", content: `Contacto - ${appName}` },
        {
          property: "og:description",
          content: `Póngase en contacto con ${appName}. Nos encantaría saber de usted.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "es_ES" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Contacto - ${appName}` },
        {
          name: "twitter:description",
          content: `Póngase en contacto con ${appName}. Nos encantaría saber de usted.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      de: [
        {
          name: "description",
          content: `Kontaktieren Sie ${appName}. Wir würden uns freuen, von Ihnen zu hören.`,
        },
        { property: "og:title", content: `Kontakt - ${appName}` },
        {
          property: "og:description",
          content: `Kontaktieren Sie ${appName}. Wir würden uns freuen, von Ihnen zu hören.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "de_DE" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Kontakt - ${appName}` },
        {
          name: "twitter:description",
          content: `Kontaktieren Sie ${appName}. Wir würden uns freuen, von Ihnen zu hören.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      nl: [
        {
          name: "description",
          content: `Neem contact op met ${appName}. We horen graag van u.`,
        },
        { property: "og:title", content: `Contact - ${appName}` },
        {
          property: "og:description",
          content: `Neem contact op met ${appName}. We horen graag van u.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "nl_NL" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Contact - ${appName}` },
        {
          name: "twitter:description",
          content: `Neem contact op met ${appName}. We horen graag van u.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      pt: [
        {
          name: "description",
          content: `Entre em contato com ${appName}. Adoraríamos ouvir de você.`,
        },
        { property: "og:title", content: `Contato - ${appName}` },
        {
          property: "og:description",
          content: `Entre em contato com ${appName}. Adoraríamos ouvir de você.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "pt_PT" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Contato - ${appName}` },
        {
          name: "twitter:description",
          content: `Entre em contato com ${appName}. Adoraríamos ouvir de você.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
      et: [
        {
          name: "description",
          content: `Võtke ühendust ${appName}. Tahaksime teilt kuulda.`,
        },
        { property: "og:title", content: `Kontakt - ${appName}` },
        {
          property: "og:description",
          content: `Võtke ühendust ${appName}. Tahaksime teilt kuulda.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "et_EE" },
        { property: "og:site_name", content: appName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Kontakt - ${appName}` },
        {
          name: "twitter:description",
          content: `Võtke ühendust ${appName}. Tahaksime teilt kuulda.`,
        },
        { name: "twitter:image", content: ogImage },
      ],
    },
  },
};

let routes = [];

// Root redirect to browser language
routes.push({
  path: "/",
  redirect: () => {
    const browserLang = navigator.language.split("-")[0];
    const targetLang = supportedLanguages.includes(browserLang)
      ? browserLang
      : "en";
    return `/${targetLang}`;
  },
});

// Generate routes for all supported languages
supportedLanguages.forEach((lang) => {
  const langRoutes = [
    {
      path: `/${lang}`,
      name: lang,
      component: () => import("../views/HomeView.vue"),
      meta: {
        ...metaData.home,
        lang,
      },
    },
    {
      path: `/${lang}/about`,
      name: `about-${lang}`,
      component: () => import("../views/AboutView.vue"),
      meta: {
        ...metaData.about,
        lang,
      },
    },
  ];

  // Conditionally add contact route if feature is enabled
  if (features.contactForm) {
    langRoutes.push({
      path: `/${lang}/contact`,
      name: `contact-${lang}`,
      component: () => import("../views/ContactView.vue"),
      meta: {
        ...metaData.contact,
        lang,
      },
    });
  }

  routes.push(...langRoutes);
});

// 404 catch-all route
routes.push({
  path: "/:pathMatch(.*)*",
  name: "notfound",
  component: () => import("../views/NotFoundView.vue"),
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes,
});

router.beforeEach((to, from, next) => {
  // Get current language from route meta or fallback
  const currentLang = to.meta.lang || "en";

  let title = appName;
  if (to.meta.title) {
    if (typeof to.meta.title === "object") {
      title = to.meta.title[currentLang] || to.meta.title.en || title;
    } else {
      title = to.meta.title;
    }
  }
  document.title = title;

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;

  // Remove old meta tags
  Array.from(
    document.querySelectorAll("meta[data-vue-router-controlled]"),
  ).forEach((el) => el.remove());

  // Remove old canonical link
  const oldCanonical = document.querySelector(
    'link[rel="canonical"][data-vue-router-controlled]',
  );
  if (oldCanonical) {
    oldCanonical.remove();
  }

  // Add canonical URL
  const canonicalUrl = `${baseUrl}${to.fullPath}`;
  const canonicalLink = document.createElement("link");
  canonicalLink.rel = "canonical";
  canonicalLink.href = canonicalUrl;
  canonicalLink.dataset.vueRouterControlled = "";
  document.head.appendChild(canonicalLink);

  // Add og:url
  const ogUrlTag = document.createElement("meta");
  ogUrlTag.setAttribute("property", "og:url");
  ogUrlTag.setAttribute("content", canonicalUrl);
  ogUrlTag.dataset.vueRouterControlled = "";
  document.head.appendChild(ogUrlTag);

  // Add twitter:url
  const twitterUrlTag = document.createElement("meta");
  twitterUrlTag.setAttribute("name", "twitter:url");
  twitterUrlTag.setAttribute("content", canonicalUrl);
  twitterUrlTag.dataset.vueRouterControlled = "";
  document.head.appendChild(twitterUrlTag);

  if (to.meta.metaTags) {
    let metaTags;

    if (
      typeof to.meta.metaTags === "object" &&
      !Array.isArray(to.meta.metaTags)
    ) {
      metaTags = to.meta.metaTags[currentLang] || to.meta.metaTags.en || [];
    } else {
      metaTags = to.meta.metaTags;
    }

    metaTags.forEach((metaTag) => {
      const tag = document.createElement("meta");

      Object.keys(metaTag).forEach((key) => {
        tag.setAttribute(key, metaTag[key]);
      });

      tag.dataset.vueRouterControlled = "";

      document.head.appendChild(tag);
    });
  }

  next();
});

// Log route changes
router.afterEach((to, from) => {
  console.log(
    `[Router] Navigation from "${from.name || from.path}" to "${
      to.name || to.path
    }"`,
  );
});

export default router;
