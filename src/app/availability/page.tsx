"use client"

import Link from "next/link"
import { Calendar, Clock, MessageCircle, ArrowRight, Sparkles, Filter } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getBusinessData, getAvailableRooms } from "@/lib/config"

export default function AvailabilityPage() {
  const business = getBusinessData()
  const rooms = getAvailableRooms()

  // Mock calendar data for placeholder
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const currentDate = new Date()
  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" })

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50">
      <Header onMenuClick={() => {}} isVisible={true} />

      <section className="pt-24 pb-12 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Coming Soon</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Room Availability
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Check real-time availability across all our studios. Live calendar integration coming soon.
          </p>
        </div>
      </section>

      {/* Placeholder Calendar */}
      <section className="py-12 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          {/* Room Filter Placeholder */}
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-zinc-800">
            <div className="flex items-center gap-2 text-slate-400">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter by room:</span>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              <button className="px-3 py-1.5 rounded-full text-sm bg-emerald-600 text-white">
                All Rooms
              </button>
              {rooms.map((room) => (
                <button
                  key={room.id}
                  className="px-3 py-1.5 rounded-full text-sm bg-zinc-800 text-slate-400 opacity-50 cursor-not-allowed"
                  disabled
                >
                  {room.name}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Preview */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
            {/* Calendar Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <button className="p-2 rounded-lg bg-zinc-800 text-slate-400 opacity-50 cursor-not-allowed" disabled>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <h2 className="text-lg font-semibold text-slate-50">{monthName}</h2>
              <button className="p-2 rounded-lg bg-zinc-800 text-slate-400 opacity-50 cursor-not-allowed" disabled>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 border-b border-zinc-800">
              {days.map((day) => (
                <div key={day} className="p-3 text-center text-sm font-medium text-slate-400">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid (Placeholder) */}
            <div className="grid grid-cols-7">
              {Array.from({ length: 35 }).map((_, idx) => {
                const dayNum = idx - 2 // Offset for month start
                const isCurrentMonth = dayNum > 0 && dayNum <= 31
                const isToday = dayNum === currentDate.getDate()
                return (
                  <div
                    key={idx}
                    className={`aspect-square p-2 border-b border-r border-zinc-800/50 ${
                      !isCurrentMonth ? "bg-zinc-950" : ""
                    }`}
                  >
                    {isCurrentMonth && (
                      <div className="h-full">
                        <span
                          className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm ${
                            isToday
                              ? "bg-emerald-500 text-white font-semibold"
                              : "text-slate-400"
                          }`}
                        >
                          {dayNum}
                        </span>
                        {/* Availability indicators (placeholder) */}
                        <div className="mt-1 space-y-0.5">
                          {dayNum % 3 === 0 && (
                            <div className="h-1 rounded-full bg-emerald-500/30 w-full"></div>
                          )}
                          {dayNum % 2 === 0 && (
                            <div className="h-1 rounded-full bg-amber-500/30 w-full"></div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Legend */}
            <div className="p-4 border-t border-zinc-800 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-slate-400">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-slate-400">Limited</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-slate-400">Fully Booked</span>
              </div>
            </div>
          </div>

          {/* Overlay Message */}
          <div className="relative -mt-64 pt-24 pb-12 flex items-center justify-center bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">
                Live Calendar Coming Soon
              </h2>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                We&apos;re integrating real-time availability so you can see open slots and book instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Booking Method */}
      <section className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-emerald-400" />
            <h2 className="text-xl font-semibold text-slate-50">Check Availability Now</h2>
          </div>
          <p className="text-slate-400 mb-8">
            While we build the live calendar, message us to check availability for your preferred dates and times.
          </p>
          <a
            href={`https://wa.me/${business.contact.whatsapp.number}?text=${encodeURIComponent("Hi! I'd like to check room availability for the following dates:")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Check Availability via WhatsApp
          </a>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-slate-50 mb-6 text-center">Explore Our Studios</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {rooms.map((room) => (
              <Link
                key={room.id}
                href={`/rentals/room/${room.id}`}
                className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-emerald-500/50 transition-all text-center group"
              >
                <h3 className="font-medium text-slate-50 group-hover:text-emerald-400 transition-colors">
                  {room.name}
                </h3>
                <p className="text-sm text-slate-400">{room.size.sqft} sqft</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
