"use client"

import Link from "next/link"
import { Calendar, Clock, MessageCircle, ArrowRight, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getBusinessData } from "@/lib/config"

export default function BookPage() {
  const business = getBusinessData()

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50">
      <Header onMenuClick={() => {}} isVisible={true} />

      <section className="pt-24 pb-24 px-6 min-h-[80vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Coming Soon</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Online Booking
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            We&apos;re building a seamless online booking experience. Soon you&apos;ll be able to:
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-medium text-slate-50 mb-2">Check Availability</h3>
              <p className="text-sm text-slate-400">View real-time room availability</p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-medium text-slate-50 mb-2">Instant Booking</h3>
              <p className="text-sm text-slate-400">Book and pay online 24/7</p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-medium text-slate-50 mb-2">Auto Confirmation</h3>
              <p className="text-sm text-slate-400">Get instant booking confirmation</p>
            </div>
          </div>

          {/* Current Booking Method */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 mb-8">
            <h2 className="text-lg font-semibold text-slate-50 mb-4">Book Now via WhatsApp</h2>
            <p className="text-slate-400 mb-6">
              For now, reach out to us directly and we&apos;ll help you find the perfect time slot.
            </p>
            <a
              href={`https://wa.me/${business.contact.whatsapp.number}?text=${encodeURIComponent("Hi! I'd like to book a studio room.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Message Us on WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rentals/rooms"
              className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Browse Rooms
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/rentals/pricing"
              className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
