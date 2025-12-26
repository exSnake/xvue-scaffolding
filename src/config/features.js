/**
 * Feature Flags Configuration
 *
 * Centralized feature flag management based on environment variables.
 * Use these flags to enable/disable features across the application.
 */

export const features = {
  /**
   * Google Analytics tracking
   * Set VITE_ENABLE_ANALYTICS=true to enable
   */
  analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',

  /**
   * Contact form with AWS SES integration
   * Set VITE_ENABLE_CONTACT_FORM=true to enable
   */
  contactForm: import.meta.env.VITE_ENABLE_CONTACT_FORM === 'true',
}

/**
 * Helper function to check if a feature is enabled
 * @param {string} name - Feature name
 * @returns {boolean} - Whether the feature is enabled
 */
export const isFeatureEnabled = (name) => {
  return features[name] ?? false
}
