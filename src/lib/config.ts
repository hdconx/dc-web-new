/**
 * Dance Connexions - Configuration Hub
 *
 * This file provides convenient access to business configuration.
 * All dynamic data is loaded from /data/*.json files.
 *
 * For direct data access, use data-loader.ts
 * For pricing calculations, use pricing-calculator.ts
 */

import {
  getBusinessInfo,
  getBusinessData,
  getContact,
  getLocation,
  getRooms,
  getRoom,
  getAvailableRooms,
  getActivityTypes,
  getWhatsAppUrl,
  formatPrice,
  getRoomOptions,
  getActivityOptions,
  getPricingRules,
} from "./data-loader"

import {
  calculatePrice,
  getQuickQuote,
  getRoomPriceRange,
  generatePricingTable,
} from "./pricing-calculator"

// ============================================================================
// RE-EXPORTS FOR CONVENIENCE
// ============================================================================

// Data access
export {
  getBusinessInfo,
  getBusinessData,
  getContact,
  getLocation,
  getRooms,
  getRoom,
  getAvailableRooms,
  getActivityTypes,
  getWhatsAppUrl,
  formatPrice,
  getRoomOptions,
  getActivityOptions,
  getPricingRules,
}

// Pricing
export {
  calculatePrice,
  getQuickQuote,
  getRoomPriceRange,
  generatePricingTable,
}

// ============================================================================
// QUICK ACCESS CONSTANTS (for backwards compatibility)
// ============================================================================

const businessInfo = getBusinessInfo()
const contactInfo = getContact()
const locationInfo = getLocation()

/**
 * Contact information - Quick access
 */
export const CONTACT = {
  whatsapp: {
    number: contactInfo.whatsapp.number,
    displayNumber: contactInfo.whatsapp.display,
    url: (message?: string) =>
      `https://wa.me/${contactInfo.whatsapp.number}${message ? `?text=${encodeURIComponent(message)}` : ""}`,
  },
  email: contactInfo.email,
  phone: {
    display: contactInfo.phone.display,
    tel: contactInfo.phone.primary,
  },
} as const

/**
 * Location information - Quick access
 */
export const LOCATION = {
  address: {
    ...locationInfo.address,
    // Backwards compatibility aliases
    street: locationInfo.address.line1,
  },
  coordinates: {
    lat: locationInfo.coordinates.latitude,
    lng: locationInfo.coordinates.longitude,
  },
  googleMapsUrl: locationInfo.maps.google,
  wazeUrl: locationInfo.maps.waze,
  // For backwards compatibility with existing components
  googleMapsEmbedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.0209145360596!2d${locationInfo.coordinates.longitude}!3d${locationInfo.coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c89b7bb9b69%3A0x8eff4e8ef8559c5e!2sDance%20Connexions!5e0!3m2!1sen!2smy!4v1767197467512!5m2!1sen!2smy`,
  parking: locationInfo.parking,
} as const

/**
 * Business information - Quick access
 */
export const BUSINESS = {
  name: businessInfo.identity.name,
  tagline: businessInfo.identity.tagline,
  established: businessInfo.identity.established,
  description: businessInfo.identity.description,
  socialMedia: businessInfo.socialMedia,
  hours: businessInfo.operatingHours,
} as const

/**
 * Pre-filled WhatsApp messages
 */
export const WHATSAPP_MESSAGES = businessInfo.whatsappMessages

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get WhatsApp URL with pre-filled message (legacy support)
 * @deprecated Use getWhatsAppUrl from data-loader instead
 */
export function getWhatsAppUrlLegacy(
  messageType: "rentalInquiry" | "classInquiry" | "general" | "booking" = "general"
): string {
  return getWhatsAppUrl(messageType)
}

/**
 * Get all studios as an array (legacy support)
 * @deprecated Use getAvailableRooms from data-loader instead
 */
export function getAllStudios() {
  return getAvailableRooms()
}
