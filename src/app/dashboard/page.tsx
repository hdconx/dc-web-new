"use client"

import Link from "next/link"
import { User, Calendar, Receipt, Settings, MessageCircle, ArrowRight, Sparkles, History } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getBusinessData } from "@/lib/config"

export default function DashboardPage() {
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
            Customer Portal
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            We&apos;re developing a dedicated portal for our renters. Soon you&apos;ll have access to:
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-medium text-slate-50 text-sm">Upcoming Bookings</h3>
            </div>
            <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <History className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-medium text-slate-50 text-sm">Booking History</h3>
            </div>
            <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Receipt className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-medium text-slate-50 text-sm">Invoices &amp; Receipts</h3>
            </div>
            <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Settings className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-medium text-slate-50 text-sm">Preferences</h3>
            </div>
          </div>

          {/* Portal Benefits */}
          <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 mb-8 text-left">
            <h2 className="text-lg font-semibold text-slate-50 mb-4 text-center">Why Create an Account?</h2>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></span>
                <span>View and manage all your bookings in one place</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></span>
                <span>Download invoices and receipts for your records</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></span>
                <span>Earn loyalty rewards with recurring bookings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></span>
                <span>Save your preferences for faster booking</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-slate-400" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400">Need help with a booking?</p>
                <p className="text-slate-50 font-medium">Contact us directly</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${business.contact.whatsapp.number}?text=${encodeURIComponent("Hi! I need help with my booking.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 px-5 rounded-lg transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Support
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Make a Booking
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/rentals"
              className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Explore Rentals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
