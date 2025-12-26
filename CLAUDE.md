# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

xvue-scaffolding is a Vue 3 scaffolding template with enterprise features pre-configured. It's designed as a reusable template for creating new Vue applications with i18n, analytics, SEO, and email integration.

## Development Commands

```bash
# Development
npm run dev              # Start dev server on localhost:3000
npm run dev:host         # Start dev server with network access

# Build
npm run build            # Production build
npm run preview          # Preview production build

# Code Quality
npm run lint             # Lint code
npm run lint:fix         # Lint and auto-fix issues

# Project Setup
npm run setup            # Interactive setup wizard (configures .env)

# Release Management
npm run release          # Create semantic version release
```

## Architecture

### State Management Pattern

This project uses **Pinia with Composition API style** (not Options API). All stores follow this pattern:

```javascript
export const useMyStore = defineStore('myStore', () => {
  // State: use ref()
  const state = ref(initialValue)

  // Persistent state: use useStorage() from @vueuse/core
  const persistent = useStorage('key', defaultValue, localStorage, { deep: true })

  // Computed: use computed()
  const derived = computed(() => state.value * 2)

  // Actions: regular functions
  function action() { /* ... */ }

  return { state, persistent, derived, action }
})
```

See `src/stores/README.md` for detailed patterns and best practices.

### Dependency Injection Order

The application initializes plugins in a specific order in `src/main.js`:

1. variantJS
2. Vue3Toasity
3. Pinia (state management)
4. Router (depends on Pinia stores)
5. i18n

### Build Optimization

Vite is configured with strategic code splitting in `vite.config.js`:

- **vue-core chunk**: Vue, Vue Router, and Pinia bundled together (critical for avoiding initialization errors in production)
- **i18n-vendor**: Vue I18n separately chunked
- **ui-vendor**: UI libraries (Flowbite, vue3-toastify)
- **icons-vendor**: @iconify
- **utils-vendor**: @vueuse, vue-gtag, etc.

**Important**: Vue, vue-router, and pinia MUST stay in the same chunk to prevent production initialization errors.

### Feature Flags System

Centralized feature management in `src/config/features.js`:

```javascript
import { features, isFeatureEnabled } from '@/config/features'

// Check if a feature is enabled
if (features.analytics) { /* ... */ }
// or
if (isFeatureEnabled('contactForm')) { /* ... */ }
```

Available feature flags (configured via environment variables):
- `VITE_ENABLE_ANALYTICS` - Google Analytics tracking
- `VITE_ENABLE_CONTACT_FORM` - Contact form with AWS SES

### Internationalization (i18n)

- **Default locale**: Italian (it)
- **Fallback**: English (en)
- **Complete translations**: en, it
- **Partial translations**: fr, es, de, nl, pt, et

Locale is persisted in localStorage and loaded in `src/i18n/index.js`. The router in `src/router/index.js` contains extensive locale-specific meta tags and SEO data for each route and language.

To add a new language:
1. Create locale file in `src/i18n/locales/` (use `_template.js` as base)
2. Import and add to `messages` in `src/i18n/index.js`
3. Add language to `supportedLanguages` array in `src/router/index.js`
4. Add meta tags for the new language in route definitions

### Router Structure

The router (`src/router/index.js`) includes:
- Extensive per-route, per-language SEO metadata
- Open Graph tags for all supported languages
- Schema.org structured data
- Automatic sitemap generation support

Route meta includes title, description, and OG tags for each supported language.

### Global Component Registration

Lucide icons are registered globally in `src/main.js` as individual components (LucidePlay, LucidePause, etc.). This approach allows tree-shaking while providing convenient access in all components.

### Serverless API

The `api/` directory contains Vercel serverless functions:
- `send-mail.js` - Contact form handler using AWS SES

These functions deploy automatically on Vercel.

### Environment Configuration

The project uses a setup wizard (`scripts/setup.js`) that prompts for configuration and generates `.env` from `.env.example`. Required variables:

- `VITE_APP_NAME` - Application name
- `VITE_APP_DESCRIPTION` - App description
- `VITE_BASE_URL` - Base URL for production
- `VITE_GA_MEASUREMENT_ID` - Google Analytics ID (optional)
- AWS SES credentials (optional, for contact form)

## Project-Specific Conventions

### Path Alias

Use `@/` to reference the `src/` directory:
```javascript
import { useMyStore } from '@/stores/myStore'
import MyComponent from '@/components/MyComponent.vue'
```

### Component Icons

Import icons from `@/components/icons` (centralized barrel export):
```javascript
import { LucidePlay, LucidePause } from '@/components/icons'
```

### Composables Location

Reusable composables are in `src/composables/`:
- `useAnalytics.js` - Analytics tracking with feature flag integration
- `useDarkMode.js` - Theme management

### Styling

This project uses:
- **Tailwind CSS** for utility classes
- **Flowbite** for UI components (initialized in `main.js`)
- Dark mode support via `@vueuse/core` and Tailwind's dark mode

## Release Workflow

The project uses semantic versioning with `standard-version`:
1. Make commits following conventional commit format
2. Run `npm run release` to generate changelog and bump version
3. GitHub Actions (`auto-release.yml`) automatically creates releases on push

## Testing Environment

Dev server runs on **port 3000** by default (configured in `vite.config.js`).
