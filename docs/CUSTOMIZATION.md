# Customization Guide

This guide explains how to customize various aspects of your application.

## Table of Contents

- [Colors & Theme](#colors--theme)
- [Logo & Branding](#logo--branding)
- [Adding New Pages](#adding-new-pages)
- [Adding New Languages](#adding-new-languages)
- [SEO & Meta Tags](#seo--meta-tags)
- [Feature Flags](#feature-flags)
- [Email Templates](#email-templates)

## Colors & Theme

### Tailwind Colors

Edit `tailwind.config.js` to customize colors:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... add your brand colors
          900: '#1e3a8a',
        },
      },
    },
  },
};
```

### Theme Color (Browser UI)

Update in multiple places:

1. `.env`:
   ```env
   VITE_THEME_COLOR=#your-color
   ```

2. `public/site.webmanifest`:
   ```json
   {
     "theme_color": "#your-color"
   }
   ```

3. `index.html`:
   ```html
   <meta name="theme-color" content="#your-color">
   ```

### Dark Mode

Dark mode is automatically handled by `useDarkMode` composable. To customize dark mode colors, use Tailwind's `dark:` prefix:

```vue
<div class="bg-white dark:bg-gray-900">
  <p class="text-gray-900 dark:text-gray-100">Content</p>
</div>
```

## Logo & Branding

### Logo Files

Replace files in `public/logo/`:

- `logo.svg` - Main logo (used in navbar, footer)
- `favicon-32x32.png` - Browser favicon
- `favicon-16x16.png` - Browser favicon
- `apple-touch-icon.png` - iOS home screen icon
- `android-chrome-192x192.png` - Android icon
- `android-chrome-512x512.png` - High-res Android icon

### Preview Image

Replace `public/preview.png` with your Open Graph image:
- Dimensions: 1200x630px
- Format: PNG or JPG
- Used for social media shares

### Logo Usage in Components

The logo is referenced in:
- `src/components/common/NavBar.vue`
- `src/components/common/Footer.vue`

Update the path if you change the logo location.

## Adding New Pages

### 1. Create View Component

Create a new file in `src/views/`:

```vue
<!-- src/views/PricingView.vue -->
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="container mx-auto px-4 py-20">
    <h1 class="text-4xl font-bold mb-6">{{ t('pricing.title') }}</h1>
    <!-- Your content -->
  </div>
</template>
```

### 2. Add Route

Edit `src/router/index.js`:

```js
// Add metadata
const metaData = {
  // ... existing routes
  pricing: {
    title: {
      en: `Pricing - ${appName}`,
      it: `Prezzi - ${appName}`,
      // ... other languages
    },
    metaTags: {
      en: [
        {
          name: 'description',
          content: 'View our pricing plans',
        },
        // ... other meta tags
      ],
      // ... other languages
    },
  },
};

// Add route to each language
supportedLanguages.forEach((lang) => {
  const langRoutes = [
    // ... existing routes
    {
      path: `/${lang}/pricing`,
      name: `pricing-${lang}`,
      component: () => import('../views/PricingView.vue'),
      meta: {
        ...metaData.pricing,
        lang,
      },
    },
  ];
  routes.push(...langRoutes);
});
```

### 3. Add Navigation Link

Update `src/components/common/NavBar.vue`:

```vue
<router-link :to="`/${$i18n.locale}/pricing`">
  {{ t('nav.pricing') }}
</router-link>
```

### 4. Add Translations

Update locale files:

```js
// src/i18n/locales/en.js
export default {
  nav: {
    // ... existing
    pricing: 'Pricing',
  },
  pricing: {
    title: 'Pricing Plans',
    // ... more translations
  },
};
```

### 5. Update Sitemap

Add to `public/sitemap.xml`:

```xml
<url>
  <loc>{{BASE_URL}}/en/pricing</loc>
  <xhtml:link rel="alternate" hreflang="en" href="{{BASE_URL}}/en/pricing"/>
  <!-- ... other languages -->
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## Adding New Languages

### 1. Create Locale File

Create `src/i18n/locales/ja.js` (Japanese example):

```js
export default {
  nav: {
    home: 'ホーム',
    about: '私たちについて',
    // ... translate all keys
  },
  // ... rest of translations
};
```

### 2. Update Supported Languages

Edit `src/router/index.js`:

```js
const supportedLanguages = ['en', 'it', 'fr', 'es', 'de', 'nl', 'et', 'pt', 'ja'];
```

### 3. Update index.html

Add language alternate links:

```html
<link rel="alternate" hreflang="ja" href="{{BASE_URL}}/ja">
```

### 4. Update sitemap.xml

Add Japanese URLs to all page entries in sitemap.

### 5. Update Schema.org

Edit `index.html` JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "inLanguage": ["en-US", "it-IT", ..., "ja-JP"]
}
```

## SEO & Meta Tags

### Page-Specific Meta Tags

Defined in `src/router/index.js`:

```js
const metaData = {
  yourPage: {
    title: {
      en: 'Page Title - App Name',
      // ... other languages
    },
    metaTags: {
      en: [
        { name: 'description', content: 'Page description' },
        { property: 'og:title', content: 'Page Title' },
        { property: 'og:description', content: 'Page description' },
        { property: 'og:image', content: ogImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        // ... more tags
      ],
    },
  },
};
```

### Global Meta Tags

Edit `index.html` for global tags that apply to all pages.

### Sitemap

Update `public/sitemap.xml`:
- Add new pages
- Set appropriate `changefreq` (daily, weekly, monthly)
- Set appropriate `priority` (0.0 to 1.0)

### Robots.txt

Edit `public/robots.txt` if needed:

```txt
User-agent: *
Allow: /

# Block specific paths
Disallow: /admin/
Disallow: /api/

Sitemap: {{BASE_URL}}/sitemap.xml
```

## Feature Flags

### Environment-Based Flags

Add to `.env`:

```env
VITE_ENABLE_BLOG=true
VITE_ENABLE_PRICING=false
```

### Using Flags

In `src/config/features.js`:

```js
export const features = {
  analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  contactForm: import.meta.env.VITE_ENABLE_CONTACT_FORM === 'true',
  blog: import.meta.env.VITE_ENABLE_BLOG === 'true',
  pricing: import.meta.env.VITE_ENABLE_PRICING === 'true',
};
```

In components:

```vue
<script setup>
import { features } from '@/config/features';
</script>

<template>
  <section v-if="features.blog">
    <!-- Blog section -->
  </section>
</template>
```

In router:

```js
if (features.blog) {
  langRoutes.push({
    path: `/${lang}/blog`,
    // ... route config
  });
}
```

## Email Templates

### Customizing Contact Form Email

Edit `src/utils/emailTemplate.js`:

```js
export function createEmailTemplate({
  name,
  email,
  message,
  appName,
  timestamp,
}) {
  return `
    <!DOCTYPE html>
    <html>
      <body>
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p style="color: #666;">
          Sent from ${appName} on ${timestamp}
        </p>
      </body>
    </html>
  `;
}
```

### Adding More Email Types

Create additional template functions in the same file or create separate files for different email types.

### Email Service

The contact form uses AWS SES via `/api/send-mail.js`. To use a different service:

1. Update the API endpoint
2. Modify the contact form submission logic in `ContactForm.vue`
3. Update environment variables

## Components

### Creating Reusable Components

Place shared components in `src/components/`:

```
src/components/
├── common/       # App-wide components (NavBar, Footer)
├── forms/        # Form components
├── ui/           # UI components (buttons, modals)
└── icons/        # Icon components
```

### Component Best Practices

1. Use Composition API (`<script setup>`)
2. Leverage TypeScript for props (optional)
3. Add proper documentation
4. Keep components focused and single-purpose
5. Use composables for shared logic

## State Management

### Creating Stores

Create Pinia stores in `src/stores/`:

```js
// src/stores/user.js
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useUserStore = defineStore('user', () => {
  const user = useStorage('user', null, undefined, { deep: true });

  function setUser(userData) {
    user.value = userData;
  }

  function clearUser() {
    user.value = null;
  }

  return {
    user,
    setUser,
    clearUser,
  };
});
```

See `src/stores/README.md` for patterns and examples.

## Advanced

### Custom Fonts

1. Add font files to `public/fonts/`
2. Update `src/assets/base.css`:

```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont.woff2') format('woff2');
}

:root {
  font-family: 'YourFont', sans-serif;
}
```

### Analytics Events

Track custom events:

```vue
<script setup>
import { useAnalytics } from '@/composables/useAnalytics';

const { trackEvent } = useAnalytics();

function handleClick() {
  trackEvent('button_click', {
    button_name: 'subscribe',
    page: 'home',
  });
}
</script>
```

### Custom Build Configuration

Edit `vite.config.js` for advanced Vite configuration:
- Plugins
- Build optimizations
- Proxy settings
- Environment-specific configs

## Need Help?

- Check [SETUP.md](./SETUP.md) for setup instructions
- Review existing components for examples
- Consult [Vue 3 documentation](https://vuejs.org/)
- Open an issue on GitHub
