"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Users, Square, Clock, Check, ArrowRight, Filter } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAvailableRooms, formatPrice } from "@/lib/config"

type FilterType = "all" | "large" | "medium" | "small"

export default function RoomsListingPage() {
  const [filter, setFilter] = useState<FilterType>("all")
  const rooms = getAvailableRooms()

  const filteredRooms = rooms.filter((room) => {
    if (filter === "all") return true
    if (filter === "large") return room.size.sqft >= 1000
    if (filter === "medium") return room.size.sqft >= 400 && room.size.sqft < 1000
    if (filter === "small") return room.size.sqft < 400
    return true
  })

  const filterOptions: { value: FilterType; label: string; count: number }[] = [
    { value: "all", label: "All Rooms", count: rooms.length },
    { value: "large", label: "Large (1000+ sqft)", count: rooms.filter((r) => r.size.sqft >= 1000).length },
    { value: "medium", label: "Medium (400-999 sqft)", count: rooms.filter((r) => r.size.sqft >= 400 && r.size.sqft < 1000).length },
    { value: "small", label: "Small (<400 sqft)", count: rooms.filter((r) => r.size.sqft < 400).length },
  ]

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
            Our Studios
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Four professional spaces designed for dance, fitness, content creation, and more.
            Find the perfect room for your needs.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 px-6 bg-zinc-950 border-b border-zinc-800 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-slate-500 flex-shrink-0" />
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  filter === option.value
                    ? "bg-emerald-600 text-white"
                    : "bg-zinc-800 text-slate-300 hover:bg-zinc-700"
                }`}
              >
                {option.label} ({option.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Room Cards Grid */}
      <section className="py-12 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredRooms.map((room) => (
              <Link
                key={room.id}
                href={`/rentals/room/${room.id}`}
                className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
              >
                {/* Room Image */}
                <div className="relative h-56 md:h-64 overflow-hidden bg-zinc-800">
                  <img
                    src={
                      room.id === "room-a" ? "/rentals-hero/Studio A-Main.jpg" :
                      room.id === "room-d" ? "/rentals-hero/studio-d-medium-standalone.jpg" :
                      room.id === "room-b" ? "/rentals-hero/studio-b-medium-connected.jpg" :
                      room.id === "room-c" ? "/rentals-hero/studio-c-small.jpg" :
                      "/rentals-hero/Studio A-Main.jpg"
                    }
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/rentals-hero/Studio A-Main.jpg"
                    }}
                  />
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-emerald-400 font-semibold">
                      From {formatPrice(room.baseHourlyRate)}/hr
                    </span>
                  </div>
                </div>

                {/* Room Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-slate-50 group-hover:text-emerald-400 transition-colors">
                        {room.name}
                      </h2>
                      <p className="text-slate-400">{room.subtitle}</p>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Square className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">{room.size.sqft.toLocaleString()} sqft</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Users className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">{room.capacity.dance?.max || 20}+ pax</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Clock className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">1hr min</span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {room.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                    {room.features.length > 3 && (
                      <p className="text-sm text-slate-500">+{room.features.length - 3} more features</p>
                    )}
                  </div>

                  {/* Best For */}
                  <div className="mb-6">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {room.bestFor.slice(0, 3).map((use, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-zinc-800 text-slate-300 px-2 py-1 rounded"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <span className="text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredRooms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400">No rooms match your filter. Try a different size category.</p>
              <button
                onClick={() => setFilter("all")}
                className="mt-4 text-emerald-400 hover:text-emerald-300 underline"
              >
                Show all rooms
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-slate-50 mb-4">Not sure which room to choose?</h2>
          <p className="text-slate-400 mb-8">
            Compare rooms side-by-side or contact us for a personalized recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rentals/compare"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 font-medium py-3 px-6 rounded-lg transition-all"
            >
              Compare Rooms
            </Link>
            <Link
              href="/rentals/gallery"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 font-medium py-3 px-6 rounded-lg transition-all"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
