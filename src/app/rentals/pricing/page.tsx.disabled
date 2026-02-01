"use client"

import Link from "next/link"
import { ChevronLeft, Clock, Users, Percent, Package, CreditCard, AlertCircle, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAvailableRooms, formatPrice, getBusinessData, getPricingRules } from "@/lib/config"

export default function PricingPage() {
  const rooms = getAvailableRooms()
  const business = getBusinessData()
  const pricing = getPricingRules()

  // Sort rooms by price for the table
  const sortedRooms = [...rooms].sort((a, b) => a.baseHourlyRate - b.baseHourlyRate)

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50">
      <Header onMenuClick={() => {}} isVisible={true} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/rentals"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Rentals
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Pricing &amp; Packages
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Transparent pricing with flexible options. From hourly rentals to discounted packages,
            find the right fit for your needs.
          </p>
        </div>
      </section>

      {/* Base Hourly Rates */}
      <section className="py-12 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Clock className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-50">Hourly Rates</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 px-4 text-slate-400 font-medium">Room</th>
                  <th className="text-left py-4 px-4 text-slate-400 font-medium">Size</th>
                  <th className="text-left py-4 px-4 text-slate-400 font-medium">Capacity</th>
                  <th className="text-right py-4 px-4 text-slate-400 font-medium">Hourly Rate</th>
                </tr>
              </thead>
              <tbody>
                {sortedRooms.map((room) => (
                  <tr key={room.id} className="border-b border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                    <td className="py-4 px-4">
                      <Link href={`/rentals/room/${room.id}`} className="text-emerald-400 hover:text-emerald-300 font-medium">
                        {room.name}
                      </Link>
                      <p className="text-sm text-slate-500">{room.subtitle}</p>
                    </td>
                    <td className="py-4 px-4 text-slate-300">{room.size.sqft.toLocaleString()} sqft</td>
                    <td className="py-4 px-4 text-slate-300">
                      {room.capacity.dance?.max || 20} pax
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-2xl font-semibold text-emerald-400">
                        {formatPrice(room.baseHourlyRate)}
                      </span>
                      <span className="text-slate-400">/hr</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            * Rates shown are base rates during peak hours. Discounts available for off-peak times and longer bookings.
          </p>
        </div>
      </section>

      {/* Time-Based Pricing */}
      <section className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Percent className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-50">Time-Based Modifiers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Peak */}
            <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
              <h3 className="font-semibold text-slate-50 mb-2">Peak Hours</h3>
              <p className="text-2xl font-bold text-slate-300 mb-2">Standard Rate</p>
              <p className="text-sm text-slate-400">
                {pricing.timeSlots.peakHours.weekday.description}
                <br />
                {pricing.timeSlots.peakHours.weekend.description}
              </p>
            </div>

            {/* Off-Peak */}
            <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-slate-50">Off-Peak</h3>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                  Save {pricing.timeSlotModifiers.offPeak.discount}%
                </span>
              </div>
              <p className="text-2xl font-bold text-emerald-400 mb-2">15% Off</p>
              <p className="text-sm text-slate-400">
                {pricing.timeSlots.offPeakHours.weekday.description}
              </p>
            </div>

            {/* Early Bird */}
            <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-slate-50">Early Bird</h3>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                  Save {pricing.timeSlotModifiers.earlyBird.discount}%
                </span>
              </div>
              <p className="text-2xl font-bold text-emerald-400 mb-2">20% Off</p>
              <p className="text-sm text-slate-400">
                {pricing.timeSlots.earlyBird.weekday.description}
              </p>
            </div>

            {/* Late Night */}
            <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-500/30">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-slate-50">Late Night</h3>
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">
                  +{pricing.timeSlotModifiers.lateNight.surcharge}%
                </span>
              </div>
              <p className="text-2xl font-bold text-amber-400 mb-2">15% Surcharge</p>
              <p className="text-sm text-slate-400">
                {pricing.timeSlots.lateNight.daily.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Duration Discounts */}
      <section className="py-12 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Package className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-50">Duration Discounts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Extended */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-slate-50 mb-2">
                {pricing.durationDiscounts.extended.name}
              </h3>
              <p className="text-3xl font-bold text-emerald-400 mb-4">
                {pricing.durationDiscounts.extended.discount}% Off
              </p>
              <p className="text-slate-400 text-sm">
                Book {pricing.durationDiscounts.extended.minHours}+ consecutive hours
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <p className="text-xs text-slate-500">{pricing.durationDiscounts.extended.description}</p>
              </div>
            </div>

            {/* Half Day - Featured */}
            <div className="bg-emerald-900/20 rounded-xl p-6 border-2 border-emerald-500/50 relative">
              <span className="absolute -top-3 left-4 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Popular
              </span>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">
                {pricing.durationDiscounts.halfDay.name}
              </h3>
              <p className="text-3xl font-bold text-emerald-400 mb-4">
                {pricing.durationDiscounts.halfDay.discount}% Off
              </p>
              <p className="text-slate-400 text-sm">
                Book {pricing.durationDiscounts.halfDay.minHours}-{pricing.durationDiscounts.halfDay.maxHours} hours
              </p>
              <div className="mt-4 pt-4 border-t border-emerald-500/30">
                <p className="text-xs text-slate-400">{pricing.durationDiscounts.halfDay.description}</p>
              </div>
            </div>

            {/* Full Day */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-slate-50 mb-2">
                {pricing.durationDiscounts.fullDay.name}
              </h3>
              <p className="text-3xl font-bold text-emerald-400 mb-4">
                {pricing.durationDiscounts.fullDay.discount}% Off
              </p>
              <p className="text-slate-400 text-sm">
                Book {pricing.durationDiscounts.fullDay.minHours}-{pricing.durationDiscounts.fullDay.maxHours} hours
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <p className="text-xs text-slate-500">{pricing.durationDiscounts.fullDay.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hour Packages */}
      <section className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <CreditCard className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-50">Prepaid Hour Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold text-slate-50 mb-1">{pricing.packages["starter-5"].name}</h3>
              <p className="text-slate-400 text-sm mb-4">{pricing.packages["starter-5"].hours} hours</p>
              <p className="text-3xl font-bold text-emerald-400 mb-2">
                {pricing.packages["starter-5"].discount}% Off
              </p>
              <p className="text-sm text-slate-400 mb-4">
                Valid for {pricing.packages["starter-5"].validityDays} days
              </p>
              <p className="text-xs text-slate-500">{pricing.packages["starter-5"].description}</p>
            </div>

            {/* Regular - Featured */}
            <div className="bg-emerald-900/20 rounded-xl p-6 border-2 border-emerald-500/50 relative">
              <span className="absolute -top-3 left-4 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Best Value
              </span>
              <h3 className="text-lg font-semibold text-slate-50 mb-1">{pricing.packages["regular-10"].name}</h3>
              <p className="text-slate-400 text-sm mb-4">{pricing.packages["regular-10"].hours} hours</p>
              <p className="text-3xl font-bold text-emerald-400 mb-2">
                {pricing.packages["regular-10"].discount}% Off
              </p>
              <p className="text-sm text-slate-400 mb-4">
                Valid for {pricing.packages["regular-10"].validityDays} days
              </p>
              <p className="text-xs text-slate-400">{pricing.packages["regular-10"].description}</p>
            </div>

            {/* Pro */}
            <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold text-slate-50 mb-1">{pricing.packages["pro-20"].name}</h3>
              <p className="text-slate-400 text-sm mb-4">{pricing.packages["pro-20"].hours} hours</p>
              <p className="text-3xl font-bold text-emerald-400 mb-2">
                {pricing.packages["pro-20"].discount}% Off
              </p>
              <p className="text-sm text-slate-400 mb-4">
                Valid for {pricing.packages["pro-20"].validityDays} days
              </p>
              <p className="text-xs text-slate-500">{pricing.packages["pro-20"].description}</p>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-6 text-center">
            Packages can be used across any room. Hours don&apos;t expire within validity period.
          </p>
        </div>
      </section>

      {/* Customer Discounts */}
      <section className="py-12 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Users className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-50">Special Rates</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
              <h3 className="font-medium text-slate-50 mb-1">Dance Instructors</h3>
              <p className="text-emerald-400 font-semibold">{pricing.customerTypes.instructor.discount}% Off</p>
              <p className="text-xs text-slate-500 mt-1">With verification</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
              <h3 className="font-medium text-slate-50 mb-1">Students</h3>
              <p className="text-emerald-400 font-semibold">{pricing.customerTypes.student.discount}% Off</p>
              <p className="text-xs text-slate-500 mt-1">Valid student ID required</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
              <h3 className="font-medium text-slate-50 mb-1">Recurring Bookings</h3>
              <p className="text-emerald-400 font-semibold">{pricing.customerTypes.recurring.discount}% Off</p>
              <p className="text-xs text-slate-500 mt-1">4+ bookings/month</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
              <h3 className="font-medium text-slate-50 mb-1">First Time</h3>
              <p className="text-emerald-400 font-semibold">{pricing.specialOffers.firstTime.discount}% Off</p>
              <p className="text-xs text-slate-500 mt-1">Your first booking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Modifiers */}
      <section className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-50 mb-6">Activity-Based Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Activities */}
            <div>
              <h3 className="text-lg font-medium text-slate-300 mb-4">Standard Rate Activities</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Dance classes (all styles)
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Dance rehearsals
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Fitness/workout classes
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Private lessons
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Social dance practice
                </li>
              </ul>
            </div>

            {/* Premium Activities */}
            <div>
              <h3 className="text-lg font-medium text-slate-300 mb-4">Premium Activities</h3>
              <ul className="space-y-3">
                <li className="text-slate-400">
                  <span className="text-slate-50">Workshops/Masterclasses</span>
                  <span className="ml-2 text-amber-400">+10%</span>
                </li>
                <li className="text-slate-400">
                  <span className="text-slate-50">Content Creation</span>
                  <span className="ml-2 text-amber-400">+20%</span>
                </li>
                <li className="text-slate-400">
                  <span className="text-slate-50">Photo Shoots</span>
                  <span className="ml-2 text-amber-400">+25%</span>
                </li>
                <li className="text-slate-400">
                  <span className="text-slate-50">Video Production</span>
                  <span className="ml-2 text-amber-400">+50%</span>
                  <span className="text-xs text-slate-500 block">Requires approval</span>
                </li>
                <li className="text-slate-400">
                  <span className="text-slate-50">Private Events</span>
                  <span className="ml-2 text-amber-400">+50%</span>
                  <span className="text-xs text-slate-500 block">Dance-related only</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Add-ons */}
      <section className="py-12 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-50 mb-6">Equipment Add-ons</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(pricing.additionalFees.equipmentRental).map(([key, item]) => (
              <div key={key} className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                <h3 className="font-medium text-slate-50 mb-1">{item.description}</h3>
                <p className="text-emerald-400 font-semibold">
                  {formatPrice('perSession' in item ? item.perSession : item.perUnit)}
                  <span className="text-slate-400 text-sm font-normal">
                    {'perSession' in item ? '/session' : '/unit'}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <AlertCircle className="w-6 h-6 text-amber-400" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-50">Cancellation Policy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-500/30">
              <h3 className="font-semibold text-emerald-400 mb-1">48+ Hours Notice</h3>
              <p className="text-2xl font-bold text-slate-50 mb-1">100% Refund</p>
              <p className="text-xs text-slate-400">{pricing.cancellationPolicy.fullRefund.description}</p>
            </div>
            <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-500/30">
              <h3 className="font-semibold text-amber-400 mb-1">24-48 Hours Notice</h3>
              <p className="text-2xl font-bold text-slate-50 mb-1">50% Refund</p>
              <p className="text-xs text-slate-400">{pricing.cancellationPolicy.partialRefund.description}</p>
            </div>
            <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
              <h3 className="font-semibold text-red-400 mb-1">&lt;24 Hours Notice</h3>
              <p className="text-2xl font-bold text-slate-50 mb-1">No Refund</p>
              <p className="text-xs text-slate-400">{pricing.cancellationPolicy.noRefund.description}</p>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            {pricing.deposit.description}. Payment methods: {pricing.deposit.paymentMethods.join(", ")}.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-slate-50 mb-4">Ready to Book?</h2>
          <p className="text-slate-400 mb-8">
            Have questions about pricing or need a custom quote? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rentals/rooms"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              View Rooms
            </Link>
            <a
              href={`https://wa.me/${business.contact.whatsapp.number}?text=${encodeURIComponent("Hi, I'd like to inquire about studio rental pricing.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Fine Print */}
      <section className="py-8 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <ul className="text-xs text-slate-500 space-y-1">
            {pricing.pricingNotes.map((note, index) => (
              <li key={index}>&bull; {note}</li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}
