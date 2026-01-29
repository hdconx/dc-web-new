/**
 * Data Loader - Loads business configuration from JSON files
 *
 * This module provides type-safe access to business data stored in /data/*.json
 * Data can be easily migrated to a database later without changing the API
 */

import roomsData from "@/../data/rooms.json"
import pricingData from "@/../data/pricing-rules.json"
import businessData from "@/../data/business.json"

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface RoomCapacity {
  min: number
  max: number
  optimal: number
}

export interface Room {
  id: string
  name: string
  displayName: string
  subtitle: string
  description: string
  size: {
    sqft: number
    sqm: number
  }
  capacity: Record<string, RoomCapacity>
  baseHourlyRate: number
  features: string[]
  equipment: {
    included: string[]
    available: string[]
  }
  bestFor: string[]
  restrictions: string[]
  images: string[]
  available: boolean
  sortOrder: number
  connectedTo?: string
}

export interface TimeSlotModifier {
  id: string
  name: string
  modifier: number
  discount?: number
  surcharge?: number
  description: string
}

export interface DurationDiscount {
  id: string
  name: string
  minHours: number
  maxHours: number
  discount: number
  modifier: number
  description: string
}

export interface ActivityType {
  id: string
  name: string
  category: string
  modifier: number
  surcharge?: number
  discount?: number
  description: string
  examples?: string[]
  notes?: string
  requiresApproval?: boolean
}

export interface CustomerType {
  id: string
  name: string
  modifier: number
  discount?: number
  description: string
  requiresVerification?: boolean
  minBookingsPerMonth?: number
  notes?: string
}

export interface Package {
  id: string
  name: string
  hours?: number
  discount?: number
  modifier?: number
  validityDays?: number
  description: string
  type?: string
  notes?: string
}

export interface BusinessContact {
  phone: { primary: string; display: string }
  whatsapp: { number: string; display: string; preferred: boolean }
  email: { rentals: string; classes: string; general: string }
}

export interface BusinessLocation {
  address: {
    line1: string
    line2: string
    city: string
    postcode: string
    state: string
    country: string
    full: string
  }
  coordinates: { latitude: number; longitude: number }
  maps: { google: string; waze: string }
  parking: {
    type: string
    officeHours: { rate: string; description: string }
    afterHours: { rate: string; description: string; capacity: string }
    recommendation: string
  }
}

// ============================================================================
// DATA ACCESS FUNCTIONS
// ============================================================================

/**
 * Get all rooms
 */
export function getRooms(): Room[] {
  return roomsData.rooms as unknown as Room[]
}

/**
 * Get a specific room by ID
 */
export function getRoom(roomId: string): Room | undefined {
  return getRooms().find((room) => room.id === roomId)
}

/**
 * Get available rooms only
 */
export function getAvailableRooms(): Room[] {
  return getRooms()
    .filter((room) => room.available)
    .sort((a, b) => a.sortOrder - b.sortOrder)
}

/**
 * Get all activity types
 */
export function getActivityTypes(): Record<string, ActivityType> {
  return pricingData.activityTypes as Record<string, ActivityType>
}

/**
 * Get activity type by ID
 */
export function getActivityType(activityId: string): ActivityType | undefined {
  return getActivityTypes()[activityId]
}

/**
 * Get activities by category
 */
export function getActivitiesByCategory(category: string): ActivityType[] {
  return Object.values(getActivityTypes()).filter((a) => a.category === category)
}

/**
 * Get all customer types
 */
export function getCustomerTypes(): Record<string, CustomerType> {
  return pricingData.customerTypes as Record<string, CustomerType>
}

/**
 * Get duration discounts
 */
export function getDurationDiscounts(): Record<string, DurationDiscount> {
  return pricingData.durationDiscounts as Record<string, DurationDiscount>
}

/**
 * Get time slot modifiers
 */
export function getTimeSlotModifiers(): Record<string, TimeSlotModifier> {
  return pricingData.timeSlotModifiers as Record<string, TimeSlotModifier>
}

/**
 * Get packages
 */
export function getPackages(): Record<string, Package> {
  return pricingData.packages as Record<string, Package>
}

/**
 * Get business information
 */
export function getBusinessInfo() {
  return businessData
}

/**
 * Get contact information
 */
export function getContact(): BusinessContact {
  return businessData.contact as BusinessContact
}

/**
 * Get location information
 */
export function getLocation(): BusinessLocation {
  return businessData.location as BusinessLocation
}

/**
 * Get WhatsApp URL with pre-filled message
 */
export function getWhatsAppUrl(messageType: keyof typeof businessData.whatsappMessages = "general"): string {
  const number = businessData.contact.whatsapp.number
  const message = businessData.whatsappMessages[messageType]
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/**
 * Get cancellation policy
 */
export function getCancellationPolicy() {
  return pricingData.cancellationPolicy
}

/**
 * Get deposit requirements
 */
export function getDepositPolicy() {
  return pricingData.deposit
}

/**
 * Get pricing notes
 */
export function getPricingNotes(): string[] {
  return pricingData.pricingNotes
}

/**
 * Get currency settings
 */
export function getCurrency() {
  return pricingData.currency
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Format price with currency
 */
export function formatPrice(amount: number): string {
  const currency = getCurrency()
  return currency.format.replace("{amount}", amount.toFixed(0))
}

/**
 * Get all rooms as a simple array for dropdowns/selects
 */
export function getRoomOptions() {
  return getAvailableRooms().map((room) => ({
    value: room.id,
    label: room.name,
    sublabel: room.subtitle,
    price: formatPrice(room.baseHourlyRate),
  }))
}

/**
 * Get all activity types as options for dropdowns
 */
export function getActivityOptions() {
  return Object.values(getActivityTypes()).map((activity) => ({
    value: activity.id,
    label: activity.name,
    category: activity.category,
    hasModifier: activity.modifier !== 1.0,
  }))
}
