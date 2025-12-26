import { ref } from "vue";

// Google Analytics Measurement ID from environment variable
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";

// Track if GA is initialized
const isInitialized = ref(false);

/**
 * Composable for managing Google Analytics 4
 */
export function useAnalytics() {
  /**
   * Check if user has given consent
   */
  const hasConsent = () => {
    return localStorage.getItem("cookie_consent") === "accepted";
  };

  /**
   * Initialize Google Analytics
   * Only loads if consent is given
   */
  const initGA = () => {
    if (isInitialized.value) return;
    if (!hasConsent()) return;

    // Create and inject gtag script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true, // GDPR compliance
      cookie_flags: "SameSite=None;Secure",
    });

    isInitialized.value = true;
    console.log("[Analytics] Google Analytics initialized");
  };

  /**
   * Track a page view
   * @param {string} pagePath - The page path
   * @param {string} pageTitle - The page title
   */
  const trackPageView = (pagePath, pageTitle) => {
    if (!isInitialized.value || !window.gtag) return;

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  };

  /**
   * Track a custom event
   * @param {string} eventName - The event name
   * @param {object} eventParams - Additional event parameters
   *
   * @example
   * trackEvent('button_click', { button_name: 'subscribe' })
   * trackEvent('form_submit', { form_id: 'contact_form' })
   */
  const trackEvent = (eventName, eventParams = {}) => {
    if (!isInitialized.value || !window.gtag) return;

    window.gtag("event", eventName, eventParams);
  };

  return {
    isInitialized,
    hasConsent,
    initGA,
    trackPageView,
    trackEvent,
  };
}
