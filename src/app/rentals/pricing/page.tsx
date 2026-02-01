"use client"

import Link from "next/link"
import { ChevronLeft, MessageCircle, Phone, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CONTACT } from "@/lib/config"

export default function PricingPage() {
  const whatsappLink = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(
    "Hi! I'm interested in studio rental pricing. Could you please provide information about rates and availability? Thank you!"
  )}`

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50">
      <Header onMenuClick={() => {}} isVisible={true} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/rentals"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Rentals
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Flexible Pricing
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            We believe in affordability, flexibility, and personalized rates. Let's discuss your specific needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          {/* Why Custom Pricing Card */}
          <div className="bg-gradient-to-br from-emerald-900/20 to-zinc-900/50 border border-emerald-700/30 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-300 mb-6">
              Why We Offer Customized Rates
            </h2>
            <div className="space-y-4 text-slate-300">
              <p className="text-lg leading-relaxed">
                Every event, class, and production is unique. Instead of rigid pricing tiers, we work with you to create a rate that fits:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-slate-200">Your budget</strong> - Student rates, senior discounts, and affordable options for beginners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-slate-200">Your schedule</strong> - Multi-hour bookings, weekly classes, and long-term commitments receive substantial discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-slate-200">Your activity</strong> - Different event types may have different pricing considerations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-slate-200">Seasonal promotions</strong> - Special rates during New Year, festive seasons, and more</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Base Rates Reference */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-semibold text-slate-50 mb-4">Starting Rates (Before Discounts)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-1">Room A - Main Space</p>
                <p className="text-emerald-400 font-semibold text-lg">From RM 120/hr</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-1">Room D - Creation Studio</p>
                <p className="text-emerald-400 font-semibold text-lg">From RM 80/hr</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-1">Room B - Intimate Studio</p>
                <p className="text-emerald-400 font-semibold text-lg">From RM 60/hr</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-1">Room C - Workshop Space</p>
                <p className="text-emerald-400 font-semibold text-lg">From RM 50/hr</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              * These are base hourly rates. Actual rates vary based on duration, frequency, and other factors.
            </p>
          </div>

          {/* Contact Options */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-slate-50 mb-6">Get Your Personalized Quote</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Tell us about your needs, and we'll create a pricing package that works for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href={`tel:${CONTACT.phone.link}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 font-medium py-3 px-8 rounded-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                Call {CONTACT.phone.display}
              </a>
            </div>

            <div className="inline-flex items-center gap-2 text-slate-400">
              <Mail className="w-4 h-4" />
              <span>Or email us at <a href={`mailto:${CONTACT.email}`} className="text-emerald-400 hover:text-emerald-300">{CONTACT.email}</a></span>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
            <p className="text-slate-400 mb-4">Want to see the studios first?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rentals/rooms"
                className="inline-flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Browse All Rooms →
              </Link>
              <Link
                href="/rentals/compare"
                className="inline-flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Compare Rooms →
              </Link>
              <Link
                href="/rentals/gallery"
                className="inline-flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                View Gallery →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
