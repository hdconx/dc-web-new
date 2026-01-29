/**
 * Pricing Calculator - Calculates rental prices based on dynamic rules
 *
 * This module handles all pricing logic including:
 * - Base room rates
 * - Time slot modifiers (peak/off-peak)
 * - Duration discounts
 * - Activity type modifiers
 * - Customer type discounts
 * - Package pricing
 */

import {
  getRoom,
  getActivityType,
  getCustomerTypes,
  getDurationDiscounts,
  getTimeSlotModifiers,
  formatPrice,
  getCurrency,
} from "./data-loader"
import pricingData from "@/../data/pricing-rules.json"

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface PricingInput {
  roomId: string
  activityType?: string
  customerType?: string
  startTime: Date
  endTime: Date
  specialOfferCode?: string
}

export interface PricingBreakdown {
  baseRate: number
  hours: number
  subtotal: number
  timeSlotModifier: {
    name: string
    modifier: number
    adjustment: number
  }
  activityModifier?: {
    name: string
    modifier: number
    adjustment: number
  }
  customerDiscount?: {
    name: string
    modifier: number
    adjustment: number
  }
  durationDiscount?: {
    name: string
    discount: number
    adjustment: number
  }
  specialOffer?: {
    name: string
    discount: number
    adjustment: number
  }
  total: number
  deposit: number
  formatted: {
    subtotal: string
    total: string
    deposit: string
    perHour: string
  }
}

export interface QuickQuote {
  roomId: string
  roomName: string
  hours: number
  baseTotal: string
  estimatedTotal: string
  note: string
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Determine the time slot for a given datetime
 */
function getTimeSlot(dateTime: Date): "peak" | "offPeak" | "earlyBird" | "lateNight" {
  const day = dateTime.getDay() // 0 = Sunday, 6 = Saturday
  const hour = dateTime.getHours()

  // Weekend = always peak
  if (day === 0 || day === 6) {
    return "peak"
  }

  // Weekday logic
  if (hour >= 6 && hour < 9) {
    return "earlyBird"
  }
  if (hour >= 9 && hour < 17) {
    return "offPeak"
  }
  if (hour >= 17 && hour < 22) {
    return "peak"
  }
  if (hour >= 22 || hour < 6) {
    return "lateNight"
  }

  return "peak" // Default
}

/**
 * Calculate hours between two dates
 */
function calculateHours(start: Date, end: Date): number {
  const diffMs = end.getTime() - start.getTime()
  return Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60)))
}

/**
 * Get applicable duration discount
 */
function getDurationDiscountForHours(hours: number) {
  const discounts = getDurationDiscounts()

  // Check in order of highest discount first
  if (hours >= discounts.fullDay.minHours) {
    return discounts.fullDay
  }
  if (hours >= discounts.halfDay.minHours && hours <= discounts.halfDay.maxHours) {
    return discounts.halfDay
  }
  if (hours >= discounts.extended.minHours && hours <= discounts.extended.maxHours) {
    return discounts.extended
  }

  return null
}

// ============================================================================
// MAIN PRICING FUNCTIONS
// ============================================================================

/**
 * Calculate full pricing breakdown for a booking
 */
export function calculatePrice(input: PricingInput): PricingBreakdown {
  const room = getRoom(input.roomId)
  if (!room) {
    throw new Error(`Room not found: ${input.roomId}`)
  }

  const hours = calculateHours(input.startTime, input.endTime)
  const baseRate = room.baseHourlyRate
  const subtotal = baseRate * hours

  let runningTotal = subtotal

  // 1. Time slot modifier
  const timeSlot = getTimeSlot(input.startTime)
  const timeSlotModifiers = getTimeSlotModifiers()
  const timeModifier = timeSlotModifiers[timeSlot] || timeSlotModifiers.peak
  const timeAdjustment = subtotal * (timeModifier.modifier - 1)
  runningTotal = subtotal * timeModifier.modifier

  // 2. Activity type modifier
  let activityModifierResult: PricingBreakdown["activityModifier"] = undefined
  if (input.activityType) {
    const activity = getActivityType(input.activityType)
    if (activity && activity.modifier !== 1.0) {
      const activityAdjustment = runningTotal * (activity.modifier - 1)
      activityModifierResult = {
        name: activity.name,
        modifier: activity.modifier,
        adjustment: activityAdjustment,
      }
      runningTotal = runningTotal * activity.modifier
    }
  }

  // 3. Customer type discount
  let customerDiscountResult: PricingBreakdown["customerDiscount"] = undefined
  if (input.customerType && input.customerType !== "regular") {
    const customerTypes = getCustomerTypes()
    const customerType = customerTypes[input.customerType]
    if (customerType && customerType.modifier !== 1.0) {
      const customerAdjustment = runningTotal * (customerType.modifier - 1)
      customerDiscountResult = {
        name: customerType.name,
        modifier: customerType.modifier,
        adjustment: customerAdjustment,
      }
      runningTotal = runningTotal * customerType.modifier
    }
  }

  // 4. Duration discount
  let durationDiscountResult: PricingBreakdown["durationDiscount"] = undefined
  const durationDiscount = getDurationDiscountForHours(hours)
  if (durationDiscount) {
    const durationAdjustment = runningTotal * (durationDiscount.modifier - 1)
    durationDiscountResult = {
      name: durationDiscount.name,
      discount: durationDiscount.discount,
      adjustment: durationAdjustment,
    }
    runningTotal = runningTotal * durationDiscount.modifier
  }

  // 5. Special offers
  let specialOfferResult: PricingBreakdown["specialOffer"] = undefined
  if (input.specialOfferCode) {
    const offers = pricingData.specialOffers as Record<string, { name: string; discount: number; active: boolean }>
    const offer = offers[input.specialOfferCode]
    if (offer && offer.active) {
      const offerAdjustment = runningTotal * (offer.discount / -100)
      specialOfferResult = {
        name: offer.name,
        discount: offer.discount,
        adjustment: offerAdjustment,
      }
      runningTotal = runningTotal * (1 - offer.discount / 100)
    }
  }

  // Calculate deposit
  const depositPercent = pricingData.deposit.percentage
  const deposit = runningTotal * (depositPercent / 100)

  // Round to nearest whole number
  const total = Math.round(runningTotal)

  return {
    baseRate,
    hours,
    subtotal,
    timeSlotModifier: {
      name: timeModifier.name,
      modifier: timeModifier.modifier,
      adjustment: timeAdjustment,
    },
    activityModifier: activityModifierResult,
    customerDiscount: customerDiscountResult,
    durationDiscount: durationDiscountResult,
    specialOffer: specialOfferResult,
    total,
    deposit: Math.round(deposit),
    formatted: {
      subtotal: formatPrice(subtotal),
      total: formatPrice(total),
      deposit: formatPrice(Math.round(deposit)),
      perHour: formatPrice(Math.round(total / hours)),
    },
  }
}

/**
 * Get a quick quote (simplified pricing without all modifiers)
 */
export function getQuickQuote(roomId: string, hours: number): QuickQuote {
  const room = getRoom(roomId)
  if (!room) {
    throw new Error(`Room not found: ${roomId}`)
  }

  const baseTotal = room.baseHourlyRate * hours
  const durationDiscount = getDurationDiscountForHours(hours)
  let estimatedTotal = baseTotal

  let note = "Base rate"
  if (durationDiscount) {
    estimatedTotal = baseTotal * durationDiscount.modifier
    note = `Includes ${durationDiscount.discount}% ${durationDiscount.name.toLowerCase()}`
  }

  return {
    roomId,
    roomName: room.name,
    hours,
    baseTotal: formatPrice(baseTotal),
    estimatedTotal: formatPrice(Math.round(estimatedTotal)),
    note,
  }
}

/**
 * Get price range for a room (min to max considering all modifiers)
 */
export function getRoomPriceRange(roomId: string): { min: string; max: string; base: string } {
  const room = getRoom(roomId)
  if (!room) {
    throw new Error(`Room not found: ${roomId}`)
  }

  const base = room.baseHourlyRate
  const timeModifiers = getTimeSlotModifiers()

  // Min: early bird + student discount
  const minModifier = Math.min(...Object.values(timeModifiers).map((t) => t.modifier))
  const min = Math.round(base * minModifier * 0.9) // 10% student discount

  // Max: late night + video production
  const maxModifier = Math.max(...Object.values(timeModifiers).map((t) => t.modifier))
  const activityTypes = pricingData.activityTypes as Record<string, { modifier: number }>
  const maxActivityModifier = Math.max(...Object.values(activityTypes).map((a) => a.modifier))
  const max = Math.round(base * maxModifier * maxActivityModifier)

  return {
    min: formatPrice(min),
    max: formatPrice(max),
    base: formatPrice(base),
  }
}

/**
 * Generate a pricing table for a room (for display purposes)
 */
export function generatePricingTable(roomId: string) {
  const room = getRoom(roomId)
  if (!room) return null

  const base = room.baseHourlyRate
  const timeModifiers = getTimeSlotModifiers()
  const durationDiscounts = getDurationDiscounts()

  return {
    room: {
      id: room.id,
      name: room.name,
      displayName: room.displayName,
    },
    hourlyRates: {
      offPeak: formatPrice(Math.round(base * timeModifiers.offPeak.modifier)),
      peak: formatPrice(base),
      earlyBird: formatPrice(Math.round(base * timeModifiers.earlyBird.modifier)),
      lateNight: formatPrice(Math.round(base * timeModifiers.lateNight.modifier)),
    },
    packages: {
      threeHours: {
        label: "3 Hours",
        price: formatPrice(Math.round(base * 3 * durationDiscounts.extended.modifier)),
        discount: `${durationDiscounts.extended.discount}% off`,
      },
      halfDay: {
        label: "Half Day (4-5 hrs)",
        price: formatPrice(Math.round(base * 4 * durationDiscounts.halfDay.modifier)),
        discount: `${durationDiscounts.halfDay.discount}% off`,
      },
      fullDay: {
        label: "Full Day (8+ hrs)",
        price: formatPrice(Math.round(base * 8 * durationDiscounts.fullDay.modifier)),
        discount: `${durationDiscounts.fullDay.discount}% off`,
      },
    },
  }
}
