/**
 * i18n Locale Template
 *
 * Copy this file and rename to your language code (e.g., ja.js for Japanese)
 * Replace all translation strings with your language
 * Update src/i18n/index.js to import and register your locale
 *
 * Example:
 * 1. cp _template.js ja.js
 * 2. Translate all strings in ja.js
 * 3. In src/i18n/index.js:
 *    import ja from './locales/ja.js'
 *    messages: { ..., ja }
 */

export default {
  // Navigation
  nav: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
  },

  // Common UI strings
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    close: 'Close',
    confirm: 'Confirm',
    yes: 'Yes',
    no: 'No',
  },

  // Cookie Consent
  cookies: {
    message: 'This website uses cookies to enhance your experience.',
    accept: 'Accept',
    decline: 'Decline',
    learnMore: 'Learn More',
  },

  // Contact Form
  contact: {
    title: 'Contact Us',
    subtitle: 'Get in touch with us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    error: 'Failed to send message. Please try again.',
    disabled: {
      title: 'Contact Form Unavailable',
      message: 'The contact form is currently disabled.',
    },
    info: 'We typically respond within 24 hours.',
  },

  // Footer
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with',
  },

  // Home Page
  home: {
    title: '{{APP_NAME}}',
    subtitle: '{{APP_DESCRIPTION}}',
    welcome: 'Welcome',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
  },

  // About Page
  about: {
    title: 'About Us',
    subtitle: 'Learn more about our mission',
    mission: {
      title: 'Our Mission',
      description:
        'We are dedicated to creating amazing web experiences using modern technologies.',
    },
    features: {
      title: 'Features',
      feature1: {
        title: 'Modern Stack',
        description: 'Built with Vue 3, Vite, and Tailwind CSS',
      },
      feature2: {
        title: 'Internationalization',
        description: 'Multi-language support out of the box',
      },
      feature3: {
        title: 'SEO Optimized',
        description: 'Search engine friendly with proper meta tags',
      },
      feature4: {
        title: 'Analytics Ready',
        description: 'Google Analytics integration with GDPR compliance',
      },
    },
    cta: 'Contact Us',
  },

  // 404 Not Found
  notFound: {
    title: 'Page Not Found',
    message: 'The page you are looking for does not exist.',
    backHome: 'Back to Home',
    goBack: 'Go Back',
    suggestions: 'You might be interested in:',
  },
}
