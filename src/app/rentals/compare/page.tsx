"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Check, X, Plus, Square, Users, DollarSign, Sparkles, Wrench, Target, Calculator } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAvailableRooms, formatPrice } from "@/lib/config"
import { getActivitiesByCategory, calculateCapacityForActivity } from "@/lib/capacity-calculator"

type CompareSection = "overview" | "capacity" | "features" | "equipment" | "bestFor"

export default function ComparePage() {
  const allRooms = getAvailableRooms()
  const [selectedRooms, setSelectedRooms] = useState<string[]>(["room-a", "room-d"])
  const [activeSection, setActiveSection] = useState<CompareSection>("overview")
  const [selectedActivity, setSelectedActivity] = useState<string>("")

  const rooms = allRooms.filter((r) => selectedRooms.includes(r.id))

  const toggleRoom = (roomId: string) => {
    if (selectedRooms.includes(roomId)) {
      // Remove room (but keep at least 2)
      if (selectedRooms.length > 2) {
        setSelectedRooms(selectedRooms.filter((id) => id !== roomId))
      }
    } else {
      // Add room (max 4)
      if (selectedRooms.length < 4) {
        setSelectedRooms([...selectedRooms, roomId])
      }
    }
  }

  const sections: { id: CompareSection; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "Overview", icon: <Square className="w-4 h-4" /> },
    { id: "capacity", label: "Capacity", icon: <Users className="w-4 h-4" /> },
    { id: "features", label: "Features", icon: <Sparkles className="w-4 h-4" /> },
    { id: "equipment", label: "Equipment", icon: <Wrench className="w-4 h-4" /> },
    { id: "bestFor", label: "Best For", icon: <Target className="w-4 h-4" /> },
  ]

  // Get all unique features across selected rooms
  const allFeatures = [...new Set(rooms.flatMap((r) => r.features))]

  // Get all unique best-for items
  const allBestFor = [...new Set(rooms.flatMap((r) => r.bestFor))]

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50">
      <Header onMenuClick={() => {}} isVisible={true} />

      {/* Hero Section */}
      <section className="pt-24 pb-8 px-6 bg-zinc-900">
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
            Compare Rooms
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Not sure which room to choose? Compare up to 4 rooms side-by-side to find your perfect fit.
          </p>
        </div>
      </section>

      {/* Room Selector */}
      <section className="py-6 px-6 bg-zinc-900/50 border-b border-zinc-800 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-slate-400 mb-3">Select rooms to compare (2-4 rooms):</p>
          <div className="flex flex-wrap gap-2">
            {allRooms.map((room) => {
              const isSelected = selectedRooms.includes(room.id)
              const isDisabled = !isSelected && selectedRooms.length >= 4
              return (
                <button
                  key={room.id}
                  onClick={() => toggleRoom(room.id)}
                  disabled={isDisabled}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-emerald-600 text-white"
                      : isDisabled
                        ? "bg-zinc-800 text-slate-500 cursor-not-allowed"
                        : "bg-zinc-800 text-slate-300 hover:bg-zinc-700"
                  }`}
                >
                  {isSelected ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                  {room.name}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Tabs */}
      <section className="py-4 px-6 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? "bg-zinc-800 text-emerald-400"
                    : "text-slate-400 hover:text-slate-300"
                }`}
              >
                {section.icon}
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          {/* Room Headers */}
          <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: `repeat(${rooms.length}, minmax(200px, 1fr))` }}>
            {rooms.map((room) => (
              <div key={room.id} className="text-center">
                <Link
                  href={`/rentals/room/${room.id}`}
                  className="text-xl font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  {room.name}
                </Link>
                <p className="text-sm text-slate-400">{room.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Overview Section */}
          {activeSection === "overview" && (
            <div className="space-y-6">
              {/* Size */}
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                <h3 className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
                  <Square className="w-4 h-4" />
                  Size
                </h3>
                <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${rooms.length}, minmax(200px, 1fr))` }}>
                  {rooms.map((room) => (
                    <div key={room.id} className="text-center">
                      <p className="text-3xl font-bold text-slate-50">{room.size.sqft.toLocaleString()}</p>
                      <p className="text-sm text-slate-400">sqft ({room.size.sqm} sqm)</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                <h3 className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Hourly Rate
                </h3>
                <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${rooms.length}, minmax(200px, 1fr))` }}>
                  {rooms.map((room) => (
                    <div key={room.id} className="text-center">
                      <p className="text-3xl font-bold text-emerald-400">{formatPrice(room.baseHourlyRate)}</p>
                      <p className="text-sm text-slate-400">per hour</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Max Capacity */}
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                <h3 className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Max Capacity (Dance)
                </h3>
                <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${rooms.length}, minmax(200px, 1fr))` }}>
                  {rooms.map((room) => (
                    <div key={room.id} className="text-center">
                      <p className="text-3xl font-bold text-slate-50">{room.capacity.dance?.max || "N/A"}</p>
                      <p className="text-sm text-slate-400">people</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Capacity Section - Interactive Calculator */}
          {activeSection === "capacity" && (() => {
            const activitiesByCategory = getActivitiesByCategory()
            const capacityResults = selectedActivity
              ? calculateCapacityForActivity(selectedActivity, rooms)
              : []

            return (
              <div className="space-y-6">
                {/* Info Banner */}
                <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Calculator className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-emerald-300 text-sm font-medium mb-1">
                        Interactive Capacity Calculator
                      </p>
                      <p className="text-emerald-200/70 text-xs">
                        Select your activity type below to see recommended capacity for each room.
                        Calculations based on industry-standard space requirements per person/couple.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Activity Selector */}
                <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
                  <label htmlFor="activity-select" className="block text-slate-200 font-medium mb-3">
                    What activity are you planning?
                  </label>
                  <select
                    id="activity-select"
                    value={selectedActivity}
                    onChange={(e) => setSelectedActivity(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 text-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">-- Select an activity type --</option>
                    {Object.entries(activitiesByCategory).map(([category, activities]) => (
                      <optgroup key={category} label={category}>
                        {activities.map((activity) => (
                          <option key={activity.id} value={activity.id}>
                            {activity.icon} {activity.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {/* Results */}
                {selectedActivity && capacityResults.length > 0 && (() => {
                  const activities = Object.values(activitiesByCategory).flat()
                  const activity = activities.find((a) => a.id === selectedActivity)

                  return (
                    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
                      {/* Activity Details Header */}
                      <div className="bg-zinc-800/50 border-b border-zinc-700 p-4">
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">{activity?.icon}</span>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-50 mb-1">
                              {activity?.name}
                            </h3>
                            <p className="text-sm text-slate-400">{activity?.description}</p>
                            <p className="text-xs text-slate-500 mt-2">
                              Space requirement: {activity?.spacePerPerson} sqft per {activity?.unit}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Capacity Results Grid */}
                      <div className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {capacityResults.map((result) => (
                            <div
                              key={result.roomId}
                              className={`bg-zinc-800/50 rounded-lg p-4 border-2 ${
                                result.isIdeal
                                  ? "border-emerald-500/50"
                                  : "border-zinc-700"
                              }`}
                            >
                              <div className="text-center">
                                <p className="text-slate-400 text-sm mb-2">{result.roomName}</p>
                                <div className="flex items-baseline justify-center gap-1 mb-1">
                                  <span className={`text-3xl font-bold ${
                                    result.isIdeal ? "text-emerald-400" : "text-slate-500"
                                  }`}>
                                    {result.capacity}
                                  </span>
                                  <span className="text-slate-400 text-sm">{result.unit}</span>
                                </div>
                                {result.note && (
                                  <p className={`text-xs mt-2 ${
                                    result.isIdeal ? "text-emerald-300" : "text-slate-500"
                                  }`}>
                                    {result.note}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Disclaimer Footer */}
                      <div className="border-t border-zinc-800 p-4 bg-zinc-800/30">
                        <p className="text-xs text-slate-500 text-center">
                          ℹ️ Capacities are calculated guidance only. Actual capacity varies based on setup requirements,
                          equipment placement, and comfort preferences. Contact us to discuss your specific needs.
                        </p>
                      </div>
                    </div>
                  )
                })()}

                {/* Placeholder when no activity selected */}
                {!selectedActivity && (
                  <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-12 text-center">
                    <Calculator className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-400 text-lg mb-2">Select an activity to see capacity recommendations</p>
                    <p className="text-slate-500 text-sm">
                      Choose from 20+ activity types including dance classes, partner dancing,
                      fitness, workshops, and content creation.
                    </p>
                  </div>
                )}
              </div>
            )
          })()}

          {/* Features Section */}
          {activeSection === "features" && (
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Feature</th>
                    {rooms.map((room) => (
                      <th key={room.id} className="text-center py-4 px-4 text-slate-400 font-medium">
                        {room.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature, idx) => (
                    <tr key={idx} className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 text-slate-300 text-sm">{feature}</td>
                      {rooms.map((room) => (
                        <td key={room.id} className="text-center py-3 px-4">
                          {room.features.includes(feature) ? (
                            <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-zinc-600 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Equipment Section */}
          {activeSection === "equipment" && (
            <div className="space-y-6">
              {/* Included */}
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                <h3 className="text-sm font-medium text-emerald-400 mb-4">Included Equipment</h3>
                <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${rooms.length}, minmax(200px, 1fr))` }}>
                  {rooms.map((room) => (
                    <div key={room.id}>
                      <ul className="space-y-2">
                        {room.equipment.included.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                            <Check className="w-4 h-4 text-emerald-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available on Request */}
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                <h3 className="text-sm font-medium text-slate-400 mb-4">Available on Request</h3>
                <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${rooms.length}, minmax(200px, 1fr))` }}>
                  {rooms.map((room) => (
                    <div key={room.id}>
                      <ul className="space-y-2">
                        {room.equipment.available.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                            <Plus className="w-4 h-4 text-slate-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Best For Section */}
          {activeSection === "bestFor" && (
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Use Case</th>
                    {rooms.map((room) => (
                      <th key={room.id} className="text-center py-4 px-4 text-slate-400 font-medium">
                        {room.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allBestFor.map((useCase, idx) => (
                    <tr key={idx} className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 text-slate-300 text-sm">{useCase}</td>
                      {rooms.map((room) => (
                        <td key={room.id} className="text-center py-3 px-4">
                          {room.bestFor.includes(useCase) ? (
                            <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                          ) : (
                            <span className="text-zinc-600">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Recommendation Section */}
      <section className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-slate-50 mb-4">Still Not Sure?</h2>
          <p className="text-slate-400 mb-8">
            Tell us about your needs and we&apos;ll recommend the best room for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rentals/rooms"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 font-medium py-3 px-6 rounded-lg transition-all"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
