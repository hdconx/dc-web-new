"use client"

import { Header } from "@/components/header"
import Link from "next/link"
import { ChevronLeft, Tag, Phone, Mail } from "lucide-react"
import promotionsData from "@/../data/promotions.json"
import { getContact } from "@/lib/config"

interface Promotion {
  id: string
  title: string
  badge: string
  discount: string
  tagline: string
  description: string
  eligibility: string
  howToClaim: string
  poster: string
  active: boolean
}

const BADGE_COLORS: Record<string, string> = {
  NEW: "bg-emerald-500 text-white",
  STUDENT: "bg-blue-500 text-white",
  SENIOR: "bg-amber-500 text-white",
}

export default function PromosPage() {
  const contact = getContact()
  const activePromos = (promotionsData.promotions as Promotion[]).filter(
    (p) => p.active
  )

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50">
      <Header onMenuClick={() => {}} isVisible={true} />

      {/* Hero */}
      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/rentals"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Rentals
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-600 p-2.5 rounded-xl">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-50">
              Promotions & Offers
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl">
            Take advantage of our special offers. Great deals for new renters,
            students, and more.
          </p>
        </div>
      </section>

      {/* Active Promotions */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {activePromos.map((promo) => (
            <div
              key={promo.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
            >
              {/* Promo Header */}
              <div className="bg-gradient-to-r from-emerald-900/40 to-zinc-900 border-b border-zinc-800 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          BADGE_COLORS[promo.badge] || "bg-zinc-700 text-white"
                        }`}
                      >
                        {promo.badge}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-slate-50">
                      {promo.title}
                    </h2>
                    <p className="text-slate-400 text-sm mt-1">
                      {promo.tagline}
                    </p>
                  </div>

                  {/* Discount Badge */}
                  <div className="bg-emerald-600 rounded-xl p-4 text-center flex-shrink-0">
                    <p className="text-3xl font-bold text-white">
                      {promo.discount}
                    </p>
                    <p className="text-emerald-200 text-xs font-medium">OFF</p>
                  </div>
                </div>
              </div>

              {/* Poster Image (if available) */}
              {promo.poster && (
                <div className="p-4 border-b border-zinc-800">
                  <img
                    src={promo.poster}
                    alt={`${promo.title} poster`}
                    className="w-full rounded-lg"
                  />
                </div>
              )}

              {/* Details */}
              <div className="p-6 space-y-4">
                <p className="text-slate-300">{promo.description}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-zinc-800/50 rounded-lg p-4">
                    <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Who's Eligible
                    </p>
                    <p className="text-slate-300 text-sm">
                      {promo.eligibility}
                    </p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-4">
                    <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      How to Claim
                    </p>
                    <p className="text-slate-300 text-sm">
                      {promo.howToClaim}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`tel:${contact.phone.primary}`}
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-5 rounded-lg transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call to Book
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 py-2.5 px-5 rounded-lg transition-all text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          ))}

          {activePromos.length === 0 && (
            <div className="text-center py-20">
              <Tag className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
              <p className="text-slate-400">No active promotions at this time.</p>
              <p className="text-slate-500 text-sm mt-1">
                Check back soon for upcoming deals!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Back to Rentals */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/rentals/rooms"
            className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-slate-300 hover:text-white font-medium py-3 px-6 rounded-lg transition-all"
          >
            Browse All Rooms
          </Link>
        </div>
      </section>
    </div>
  )
}
