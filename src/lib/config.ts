/**
 * Dance Connexions - Centralized Configuration
 *
 * SINGLE SOURCE OF TRUTH for all business information
 *
 * ⚠️ IMPORTANT: This file is the canonical source for contact info, pricing, and business data.
 * All other files should import from here - never hardcode these values elsewhere.
 */

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const CONTACT = {
  whatsapp: {
    number: "60123223607",
    displayNumber: "+60 12-322 3607",
    url: (message?: string) =>
      `https://wa.me/60123223607${message ? `?text=${encodeURIComponent(message)}` : ""}`,
  },
  email: {
    rentals: "rentals@danceconnexions.com",
    general: "info@danceconnexions.com",
  },
  phone: {
    display: "+60 12-322 3607",
    tel: "+60123223607",
  },
} as const

// ============================================================================
// LOCATION & ADDRESS
// ============================================================================

export const LOCATION = {
  address: {
    street: "21-2, Jalan PJS 11/2",
    city: "Bandar Sunway",
    postcode: "47500",
    state: "Subang Jaya, Selangor",
    country: "Malaysia",
    full: "21-2, Jalan PJS 11/2, Bandar Sunway, 47500 Subang Jaya, Selangor",
  },
  coordinates: {
    lat: 3.0723240659674045,
    lng: 101.60068661794297,
  },
  googleMapsUrl: "https://maps.app.goo.gl/9S4HNWYiTbxeTjXC9",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.0209145360596!2d101.60068661794297!3d3.0723240659674045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c89b7bb9b69%3A0x8eff4e8ef8559c5e!2sDance%20Connexions!5e0!3m2!1sen!2smy!4v1767197467512!5m2!1sen!2smy",
} as const

// ============================================================================
// STUDIO ROOMS - SPECIFICATIONS
// ============================================================================

export const STUDIOS = {
  roomA: {
    id: "room-a",
    name: "Room A",
    subtitle: "Large Studio",
    size: {
      sqft: 1200,
      display: "1,200 sq ft",
    },
    capacity: {
      min: 40,
      max: 60,
      note: "depending on activity type",
    },
    pricing: {
      hourly: 120,
      display: "RM 120/hour",
    },
    features: [
      "Wall-to-wall mirrors (3 walls)",
      "Professional sound + wireless mic",
      "Projector & screen available",
      "Air-conditioned + 6 fans",
    ],
    bestFor: "Large classes, workshops, rehearsals, performances",
  },
  roomD: {
    id: "room-d",
    name: "Room D",
    subtitle: "Medium Studio (Standalone)",
    size: {
      sqft: 700,
      display: "700 sq ft",
    },
    capacity: {
      min: 15,
      max: 30,
      note: "depending on activity type",
    },
    pricing: {
      hourly: 80,
      display: "RM 80/hour",
    },
    features: [
      "Wall-to-wall mirrors",
      "Professional sound system",
      "Projector & screen available",
      "Air-conditioned",
    ],
    bestFor: "Dance classes, fitness training, workshops",
  },
  roomB: {
    id: "room-b",
    name: "Room B",
    subtitle: "Medium Studio (Connected)",
    size: {
      sqft: 400,
      display: "400 sq ft",
    },
    capacity: {
      min: 10,
      max: 20,
      note: "depending on activity type",
    },
    pricing: {
      hourly: 60,
      display: "RM 60/hour",
    },
    features: [
      "Wall-to-wall mirrors",
      "Sound system",
      "Connects to Room A",
      "Air-conditioned",
    ],
    bestFor: "Rehearsals, small classes, content creation",
  },
  roomC: {
    id: "room-c",
    name: "Room C",
    subtitle: "Small Studio",
    size: {
      sqft: 300,
      display: "300 sq ft",
    },
    capacity: {
      min: 2,
      max: 10,
      note: "depending on activity type",
    },
    pricing: {
      hourly: 50,
      display: "RM 50/hour",
    },
    features: [
      "Wall-to-wall mirrors",
      "Sound system",
      "Intimate environment",
      "Air-conditioned",
    ],
    bestFor: "Private lessons, small groups, practice sessions",
  },
} as const

// ============================================================================
// PRICING & PACKAGES
// ============================================================================

export const PRICING = {
  discounts: {
    offPeak: {
      percentage: 10,
      description: "10% off during weekday mornings (9am-5pm)",
    },
    halfDay: {
      percentage: 15,
      hours: 4,
      description: "15% off for 4 consecutive hours",
    },
    fullDay: {
      percentage: 25,
      hours: 8,
      description: "25% off for 8 consecutive hours",
    },
  },
  peakHours: {
    weekday: "Monday–Friday: 5:00 PM – 9:00 PM",
    weekend: "All day: Weekends & Public Holidays",
  },
  offPeakHours: {
    weekday: "Monday–Friday: 9:00 AM – 5:00 PM",
  },
  minimumBooking: {
    hours: 1,
    description: "Minimum booking is 1 hour",
  },
} as const

// ============================================================================
// BUSINESS INFORMATION
// ============================================================================

export const BUSINESS = {
  name: "Dance Connexions",
  tagline: "The Movement Ecosystem",
  established: 1999,
  description: "Premium dance studio offering classes for all ages and professional rentals",

  socialMedia: {
    instagram: "@danceconnexions", // Update with actual handle
    facebook: "DanceConnexions", // Update with actual handle
    tiktok: "@danceconnexions", // Update with actual handle
  },

  hours: {
    availability: "Early morning to late midnight",
    description: "Flexible scheduling based on your activity needs",
  },
} as const

// ============================================================================
// PRE-FILLED WHATSAPP MESSAGES
// ============================================================================

export const WHATSAPP_MESSAGES = {
  general: "Hi, I'd like to know more about Dance Connexions.",

  rental: "Hi! I'd like to inquire about studio rental. Please share:\n- Preferred date:\n- Time slot:\n- Studio preference:\n- Intended use:\n- Group size:",

  rentalInterest: "Hi! I'm interested in renting studio space at Dance Connexions. Could you please share availability and pricing details?",

  classInquiry: "Hi! I'd like to know more about dance classes at Dance Connexions.",
} as const

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get WhatsApp URL with optional pre-filled message
 */
export function getWhatsAppUrl(messageType: keyof typeof WHATSAPP_MESSAGES = "general"): string {
  const message = WHATSAPP_MESSAGES[messageType]
  return CONTACT.whatsapp.url(message)
}

/**
 * Format price in RM
 */
export function formatPrice(amount: number): string {
  return `RM ${amount}`
}

/**
 * Get all studios as an array
 */
export function getAllStudios() {
  return Object.values(STUDIOS)
}
