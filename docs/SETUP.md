# Setup Guide

Welcome to xvue-scaffolding! This guide will help you get started with your new Vue 3 project.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the setup wizard (recommended)
npm run setup

# 3. Start development server
npm run dev
```

The setup wizard will guide you through configuring your project.

## Manual Setup

If you prefer to skip the wizard, follow these steps:

### 1. Create Environment File

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

### 2. Configure Environment Variables

Edit `.env` and replace the placeholders:

```env
# Application Info
VITE_APP_NAME=Your App Name
VITE_APP_DESCRIPTION=Your app description
VITE_BASE_URL=https://yoursite.com

# Analytics (optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_ENABLE_ANALYTICS=true

# AWS SES for Contact Form (optional)
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
EMAIL_FROM=noreply@yoursite.com
EMAIL_TO=contact@yoursite.com

# Feature Flags
VITE_ENABLE_CONTACT_FORM=true

# Theme
VITE_THEME_COLOR=#2563EB
```

### 3. Replace Placeholders in Static Files

The following files contain placeholders that need to be updated:

- `index.html` - Update `{{APP_NAME}}`, `{{APP_DESCRIPTION}}`, etc.
- `public/robots.txt` - Update `{{BASE_URL}}`
- `public/sitemap.xml` - Update `{{BASE_URL}}`
- `public/site.webmanifest` - Update `{{APP_NAME}}`, `{{THEME_COLOR}}`
- `package.json` - Update `name`, `description`, `author`, `repository`

You can use find-and-replace to update all placeholders at once:

```bash
# Example using sed (macOS/Linux)
find . -type f -not -path '*/node_modules/*' -not -path '*/.git/*' \\
  -exec sed -i '' 's/{{APP_NAME}}/Your App Name/g' {} +
```

### 4. Customize Branding

Replace the logo files in `public/logo/`:

- `logo.svg` - Main logo
- `favicon-32x32.png` - 32x32 favicon
- `favicon-16x16.png` - 16x16 favicon
- `apple-touch-icon.png` - 180x180 Apple touch icon
- `android-chrome-192x192.png` - 192x192 Android icon
- `android-chrome-512x512.png` - 512x512 Android icon
- `preview.png` - 1200x630 Open Graph preview image

### 5. Configure AWS SES (Optional)

If you want to use the contact form:

1. Create an AWS account and set up SES
2. Verify your email addresses in SES
3. Add AWS credentials to `.env`
4. Ensure `VITE_ENABLE_CONTACT_FORM=true`

### 6. Setup Google Analytics (Optional)

1. Create a Google Analytics 4 property
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add it to `.env` as `VITE_GA_MEASUREMENT_ID`
4. Ensure `VITE_ENABLE_ANALYTICS=true`

## Development

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Start dev server with network access
npm run dev:host

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix
```

## Building for Production

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The build output is in `dist/` folder. You can deploy this to any static hosting:

- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `dist/` to S3 bucket
- **CloudFlare Pages**: Connect your repo

## Next Steps

- Read [CUSTOMIZATION.md](./CUSTOMIZATION.md) to learn how to customize your app
- Explore the codebase structure
- Start building your features!

## Troubleshooting

### Port 3000 already in use

Change the port in `vite.config.js`:

```js
export default {
  server: {
    port: 3001, // Change to your preferred port
  },
};
```

### Environment variables not working

Make sure:
1. Variable names start with `VITE_` (required for Vite)
2. You restarted the dev server after changing `.env`
3. You're not using quotes around values in `.env`

### Build fails

Run linter first:

```bash
npm run lint
```

Fix any errors before building.

## Support

If you need help:
- Check the [Vue 3 documentation](https://vuejs.org/)
- Check the [Vite documentation](https://vitejs.dev/)
- Open an issue on GitHub
