# xvue-scaffolding

Vue 3 scaffolding template personale con feature enterprise pre-configurate.

## Quick Start

```bash
# Clona template
npx degit exsnake/xvue-scaffolding my-new-project
cd my-new-project

# Installa dipendenze
npm install

# Setup progetto (interattivo)
npm run setup

# Avvia dev server
npm run dev
```

## Cosa Include

### Core Stack
- **Vue 3.5+** con Composition API
- **Vite 6** - Build tool veloce
- **Pinia** - State management
- **Vue Router** - Routing con supporto i18n
- **Vue I18n** - Internazionalizzazione

### Styling
- **Tailwind CSS** - Utility-first CSS
- **Flowbite** - Componenti UI
- **Dark Mode** - Supporto nativo con @vueuse/core

### Feature Enterprise
- **Multi-language i18n** (EN, IT + 6 altre lingue)
- **Google Analytics 4** con GDPR compliance
- **Vercel Analytics** integrato
- **SEO Ottimizzato** (sitemap, robots.txt, meta tags, Schema.org)
- **Contact Form** con AWS SES backend
- **Cookie Consent** GDPR-compliant

### Developer Experience
- **ESLint 9** con flat config
- **Prettier** - Code formatting
- **Auto-release** workflow (GitHub Actions)
- **Dependabot** configurato

## Struttura Progetto

```
xvue-scaffolding/
├── .github/          # GitHub Actions workflows
├── api/              # Serverless functions (Vercel)
├── docs/             # Documentazione
├── public/           # Asset statici
├── scripts/          # Script utility (setup wizard)
├── src/
│   ├── assets/       # CSS e asset
│   ├── components/   # Componenti Vue
│   ├── composables/  # Composables riutilizzabili
│   ├── config/       # Configurazione app
│   ├── i18n/         # Traduzioni
│   ├── router/       # Route configuration
│   ├── stores/       # Pinia stores
│   ├── utils/        # Utility functions
│   └── views/        # Page components
└── utils/            # Utility serverless
```

## Comandi Disponibili

```bash
npm run dev          # Dev server (http://localhost:3000)
npm run dev:host     # Dev server con accesso network
npm run build        # Build produzione
npm run preview      # Preview build produzione
npm run lint         # Lint codice
npm run lint:fix     # Lint e auto-fix
npm run setup        # Setup wizard interattivo
npm run release      # Create release (semantic versioning)
```

## Configurazione

### Prima volta
1. Esegui `npm run setup` per configurare il progetto
2. Il wizard ti chiederà:
   - Nome app
   - Descrizione
   - URL base
   - Google Analytics ID (opzionale)
   - AWS SES credentials (opzionale)
3. Configurazione salvata in `.env`

### Manuale
Copia `.env.example` a `.env` e configura:

```env
VITE_APP_NAME=My App
VITE_APP_DESCRIPTION=My amazing app
VITE_BASE_URL=https://myapp.com
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# ... etc
```

## Feature Flags

Abilita/disabilita feature via environment variables:

```env
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CONTACT_FORM=true
```

## Internazionalizzazione

### Lingue Incluse
- **Completo**: English (en), Italiano (it)
- **Struttura base**: Français (fr), Español (es), Deutsch (de), Nederlands (nl), Português (pt), Eesti (et)

### Aggiungere una Lingua
1. Copia `src/i18n/locales/_template.js` → `ja.js`
2. Traduci tutte le stringhe
3. Aggiungi import in `src/i18n/index.js`

## Deployment

### Vercel (Raccomandato)
```bash
npm install -g vercel
vercel
```

### Build Manuale
```bash
npm run build
# Output in /dist
```

## Documentazione

- [Setup Guide](docs/SETUP.md) - Configurazione iniziale dettagliata
- [Customization Guide](docs/CUSTOMIZATION.md) - Come personalizzare il template

## Tech Stack Completo

**Frontend**
- Vue 3.5.17
- Vue Router 4.5.1
- Pinia 3.0.3
- Vue I18n 11.2.7

**Styling**
- Tailwind CSS 3.4.17
- Flowbite 3.1.2
- @tailwindcss/forms

**Utilities**
- @vueuse/core 13.4.0
- @iconify/vue

**Analytics**
- @vercel/analytics
- vue-gtag (Google Analytics)

**Email**
- @aws-sdk/client-ses

**Dev Tools**
- Vite 6.3.5
- ESLint 9.30.0
- Prettier 3.6.2

## License

MIT

## Author

exSnake
