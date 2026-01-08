"use client"

import { useState } from "react"
import { ChevronLeft, MessageCircle, ChevronDown, Check } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getWhatsAppUrl, CONTACT, LOCATION } from "@/lib/config"

export default function RentalsPage() {
  const [expandedStudio, setExpandedStudio] = useState<number | null>(null)

  const whatsappLink = getWhatsAppUrl("rental")

  const studios = [
    {
      id: 1,
      name: "Room A",
      subtitle: "Large Studio",
      sqft: "1,200 sq ft",
      rate: "RM 120/hour",
      bestFor: "Large classes, workshops, rehearsals, performances",
      image: "/rentals-hero/Studio A-Main.jpg",
      features: [
        "Wall-to-wall mirrors (3 walls)",
        "Professional sound + wireless mic",
        "Projector & screen available",
        "Air-conditioned + 6 fans",
      ],
      details: {
        dimensions: "Approx. 40ft x 50ft",
        capacity: "40-60 people (depending on activity type)",
        equipment: "High-quality sound system, wireless microphone, projector & large screen",
        climate: "Fully air-conditioned with 6 wall-mounted fans",
        ideal: "Large dance classes, fitness workshops, rehearsals, masterclasses, auditions, performance training",
      },
    },
    {
      id: 2,
      name: "Room D",
      subtitle: "Medium Studio (Standalone)",
      sqft: "700 sq ft",
      rate: "RM 80/hour",
      bestFor: "Dance classes, fitness training, workshops",
      image: "/rentals-hero/studio-d-medium-standalone.jpg",
      features: [
        "Wall-to-wall mirrors",
        "Professional sound system",
        "Projector & screen available",
        "Air-conditioned",
      ],
      details: {
        capacity: "15-30 people (depending on activity type)",
        equipment: "Professional sound system, projector & screen",
        climate: "Fully air-conditioned",
        ideal: "Medium-sized dance classes, fitness sessions, training workshops, rehearsals",
      },
    },
    {
      id: 3,
      name: "Room B",
      subtitle: "Medium Studio (Connected)",
      sqft: "400 sq ft",
      rate: "RM 60/hour",
      bestFor: "Rehearsals, small classes, content creation",
      image: "/rentals-hero/studio-b-medium-connected.jpg",
      features: ["Wall-to-wall mirrors", "Sound system", "Connects to Room A", "Air-conditioned"],
      details: {
        capacity: "10-20 people (depending on activity type)",
        equipment: "Sound system",
        special: "Can connect to Room A for larger events",
        climate: "Fully air-conditioned",
        ideal: "Small group rehearsals, private classes, fitness instruction, photo/video sessions",
      },
    },
    {
      id: 4,
      name: "Room C",
      subtitle: "Small Studio",
      sqft: "300 sq ft",
      rate: "RM 50/hour",
      bestFor: "Private lessons, small groups, practice sessions",
      image: "/rentals-hero/studio-c-small.jpg",
      features: ["Wall-to-wall mirrors", "Sound system", "Intimate environment", "Air-conditioned"],
      details: {
        capacity: "2-10 people (depending on activity type)",
        equipment: "Sound system",
        climate: "Fully air-conditioned",
        ideal: "Private dance lessons, one-on-one coaching, small group fitness, practice sessions",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50">
      <Header onMenuClick={() => {}} isVisible={true} />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden">
        {/* Hero Image - Full visibility */}
        <img
          src="/rentals-hero/Studio A - 1.jpg"
          alt="Dance Connexions Studio A"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle gradient overlay - minimal, only for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />

        {/* Back button - top left */}
        <div className="absolute top-24 left-8 z-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm bg-black/30 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/10 hover:border-white/30"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        {/* Hero Content - Centered vertically and horizontally */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              Studio Rentals
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed">
              Professional spaces for dance, fitness & creative projects
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-5 px-10 rounded-lg transition-all duration-200 shadow-2xl hover:shadow-emerald-500/50 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-16 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-50 text-center mb-12">
            Why Dance Connexions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700 hover:border-slate-600 transition-colors">
              <div className="text-4xl mb-4">🪞</div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Uninterrupted Mirrors</h3>
              <p className="text-slate-400">
                Full-wall mirrors for perfect choreography feedback and professional video content
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700 hover:border-slate-600 transition-colors">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Adjustable Lighting</h3>
              <p className="text-slate-400">
                Professional lighting control for dance performances, fitness classes, and content creation
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700 hover:border-slate-600 transition-colors">
              <div className="text-4xl mb-4">🎛️</div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Fully Customizable</h3>
              <p className="text-slate-400">
                Configure the space exactly how you need it—tables, chairs, dance floor arrangement all flexible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Showcase */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 text-center mb-16">
            Choose Your Studio
          </h2>

          <p className="text-center text-slate-300 mb-12 text-lg">
            Four professional spaces designed for dance, fitness, and creative movement
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studios.map((studio) => (
              <button
                key={studio.id}
                onClick={() => setExpandedStudio(expandedStudio === studio.id ? null : studio.id)}
                className="text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded-lg"
              >
                <div className="bg-zinc-900 border border-slate-800 rounded-lg overflow-hidden hover:border-slate-600 transition-all duration-300 cursor-pointer h-full">
                  <div className="relative h-48 md:h-56 overflow-hidden bg-slate-800">
                    <img
                      src={studio.image || "/placeholder.svg"}
                      alt={`${studio.name} - ${studio.subtitle}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-50">
                          {studio.name} <span className="text-slate-400 font-normal">- {studio.subtitle}</span>
                        </h3>
                        <p className="text-sm text-slate-400 mt-1">{studio.sqft}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronDown
                          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                            expandedStudio === studio.id ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 font-medium">Best for: {studio.bestFor}</p>

                    <div className="space-y-2">
                      {studio.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-base text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <ChevronDown className="w-3 h-3" />
                      {expandedStudio === studio.id ? "Hide Details" : "View Details"}
                    </div>

                    {expandedStudio === studio.id && (
                      <div className="pt-4 border-t border-slate-800 space-y-4 mt-4">
                        <div>
                          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                            Additional Details
                          </h4>
                          <p className="text-sm text-slate-300">
                            {studio.details.capacity && (
                              <>
                                Capacity: {studio.details.capacity}
                                <br />
                              </>
                            )}
                            {studio.details.equipment && (
                              <>
                                Equipment: {studio.details.equipment}
                                <br />
                              </>
                            )}
                            {studio.details.climate && (
                              <>
                                Climate: {studio.details.climate}
                                <br />
                              </>
                            )}
                            {studio.details.ideal && <>Ideal for: {studio.details.ideal}</>}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 text-center mb-16">
            Our Studios Are Ideal For
          </h2>

          <div className="max-w-3xl mx-auto space-y-12">
            {/* DANCE & MOVEMENT */}
            <div>
              <h3 className="text-xl font-semibold text-slate-50 mb-6">Dance & Movement</h3>
              <ul className="space-y-3">
                {[
                  "Dance classes (all styles - ballet, hip-hop, contemporary, ballroom, K-pop, etc.)",
                  "Dance rehearsals & choreography development",
                  "Private dance coaching & instruction",
                  "Audition preparation & practice",
                  "Performance rehearsals",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FITNESS & WELLNESS */}
            <div>
              <h3 className="text-xl font-semibold text-slate-50 mb-6">Fitness & Wellness</h3>
              <ul className="space-y-3">
                {[
                  "Yoga, Pilates, and barre classes",
                  "Fitness training & conditioning",
                  "Martial arts-inspired movement (non-contact)",
                  "Personal training sessions",
                  "Group fitness programs",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PERFORMING ARTS */}
            <div>
              <h3 className="text-xl font-semibold text-slate-50 mb-6">Performing Arts</h3>
              <ul className="space-y-3">
                {[
                  "Theatre & acting rehearsals",
                  "Performance practice & run-throughs",
                  "Modeling & runway training",
                  "Stage movement coaching",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTENT CREATION */}
            <div>
              <h3 className="text-xl font-semibold text-slate-50 mb-6">Content Creation</h3>
              <ul className="space-y-3">
                {[
                  "Dance & fitness photography",
                  "Video shoots & tutorials",
                  "Social media content creation",
                  "Instructional video recording",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WORKSHOPS & EVENTS */}
            <div>
              <h3 className="text-xl font-semibold text-slate-50 mb-6">Workshops & Events</h3>
              <ul className="space-y-3">
                {[
                  "Movement workshops & masterclasses",
                  "Training sessions & seminars",
                  "Dance socials & practice sessions",
                  "Small group learning sessions",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CLOSING TEXT */}
            <div className="pt-8 border-t border-zinc-800">
              <p className="text-slate-300 text-lg leading-relaxed">
                Planning something unique? We're flexible and accommodating. Contact us to discuss your specific needs
                and we'll help you find the right setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 text-center mb-4">Pricing</h2>
          <p className="text-center text-slate-400 mb-16">Transparent, flexible rates with no hidden fees</p>

          <div className="space-y-16">
            {/* Hourly Rates */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-50 mb-8">Hourly Rates</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="pb-4 text-slate-400 text-sm font-medium">Room</th>
                      <th className="pb-4 text-slate-400 text-sm font-medium text-right">Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr className="hover:bg-zinc-900 transition-colors">
                      <td className="py-4 text-slate-300">Room A (Large Studio)</td>
                      <td className="py-4 text-right text-slate-50 font-semibold">RM 120/hour</td>
                    </tr>
                    <tr className="hover:bg-zinc-900 transition-colors">
                      <td className="py-4 text-slate-300">Room D (Medium Studio)</td>
                      <td className="py-4 text-right text-slate-50 font-semibold">RM 80/hour</td>
                    </tr>
                    <tr className="hover:bg-zinc-900 transition-colors">
                      <td className="py-4 text-slate-300">Room B (Medium Studio)</td>
                      <td className="py-4 text-right text-slate-50 font-semibold">RM 60/hour</td>
                    </tr>
                    <tr className="hover:bg-zinc-900 transition-colors">
                      <td className="py-4 text-slate-300">Room C (Small Studio)</td>
                      <td className="py-4 text-right text-slate-50 font-semibold">RM 50/hour</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Peak & Off-Peak */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-50 mb-8">Peak & Off-Peak Hours</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-50 mb-4">Peak Hours</h4>
                  <ul className="space-y-2 text-slate-300 text-base">
                    <li>Monday–Friday: 5:00 PM – 9:00 PM</li>
                    <li>All day: Weekends & Public Holidays</li>
                  </ul>
                  <p className="text-slate-400 text-sm mt-4">Standard rates apply</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-50 mb-4">Off-Peak Hours</h4>
                  <ul className="space-y-2 text-slate-300 text-base">
                    <li>Monday–Friday: 9:00 AM – 5:00 PM</li>
                  </ul>
                  <p className="text-emerald-500 font-semibold mt-4">10% discount off hourly rates</p>
                </div>
              </div>
            </div>

            {/* Packages */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-50 mb-8">Multi-Hour Packages</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-zinc-900 p-6 rounded-lg">
                  <span className="text-slate-300">Half-Day Package (4 consecutive hours)</span>
                  <span className="text-emerald-500 font-semibold">Save 15%</span>
                </div>
                <div className="flex justify-between items-center bg-zinc-900 p-6 rounded-lg">
                  <span className="text-slate-300">Full-Day Package (8 consecutive hours)</span>
                  <span className="text-emerald-500 font-semibold">Save 25%</span>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <p className="text-slate-300 mb-3">
                    <strong>Monthly Recurring Bookings:</strong> Custom rates available for weekly recurring rentals.
                    Contact us for long-term package pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-50 mb-8">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-semibold text-slate-50 mb-6 text-lg">Included with Every Booking</h4>
                  <ul className="space-y-4">
                    {[
                      "Professional sound system",
                      "Air-conditioning & ventilation",
                      "Wall-to-wall mirrors",
                      "Free Wi-Fi throughout premises",
                      "Parking (free after office hours, weekends & holidays)",
                      "15-minute setup/cleanup buffer included in rental time",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-1">✓</span>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-50 mb-6 text-lg">Available Upon Request</h4>
                  <ul className="space-y-4">
                    {[
                      "Projector & screen (Room A & D)",
                      "Tripods & lighting equipment",
                      "Photography/video accessories",
                      "Wireless microphone (Room A)",
                      "Custom room setup assistance",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-slate-500 mt-1">•</span>
                        <span className="text-slate-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Flexible Scheduling Note */}
            <div className="bg-zinc-900 p-8 rounded-lg border border-slate-800">
              <p className="text-slate-300 text-base">
                <strong>Flexible Scheduling:</strong> Studios available from early morning to late midnight. Schedule
                based on your activity needs – whether it's 8am yoga or midnight dance party.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Policies Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Booking Policies</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Booking Basics */}
            <div>
              <h3 className="text-xl font-semibold text-slate-50 mb-6">Booking Basics</h3>
              <div className="space-y-4 text-slate-300">
                <div>
                  <p className="font-semibold text-slate-50">Minimum booking</p>
                  <p>1 hour</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-50">Deposit</p>
                  <p>50% to confirm booking</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-50">Balance</p>
                  <p>Payable before or upon arrival</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-50">Payment methods</p>
                  <p>Bank transfer, credit card, cash</p>
                </div>
              </div>
            </div>

            {/* Right Column: Cancellation Policy */}
            <div>
              <h3 className="text-xl font-semibold text-slate-50 mb-6">Cancellation Policy</h3>
              <div className="space-y-4 text-slate-300 mb-8">
                <div>
                  <p className="font-semibold text-slate-50">48+ hours notice</p>
                  <p className="text-emerald-500">Full refund</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-50">24-48 hours notice</p>
                  <p className="text-emerald-500">50% refund</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-50">Under 24 hours</p>
                  <p>No refund</p>
                </div>
                <div className="pt-2">
                  <p className="text-slate-400 text-sm">One-time reschedule option available</p>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6 text-slate-400 text-sm space-y-2">
                <p>• Setup & cleanup time included in your booked hours</p>
                <p>• Overtime charged at same hourly rate if extended</p>
                <p>• Please vacate on time to respect other bookings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Parking Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 text-center mb-16">
            Location & Parking
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Location Info */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">📍</span>
                <h3 className="text-2xl font-semibold text-slate-50">Easy to Find</h3>
              </div>

              <div className="bg-zinc-900 rounded-lg p-8 border border-slate-800 mb-8">
                <p className="text-slate-300 mb-6 leading-relaxed">
                  <strong className="text-slate-50">{LOCATION.address.street}</strong>
                  <br />
                  {LOCATION.address.city}
                  <br />
                  {LOCATION.address.postcode} {LOCATION.address.state.split(',')[0]}
                  <br />
                  {LOCATION.address.state.split(',')[1]?.trim()}, {LOCATION.address.country}
                </p>
                <a
                  href={LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Open in Maps
                </a>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-50 text-lg">Features</h4>
                {[
                  "Accessible via major highways",
                  "Public transport routes nearby",
                  "Surrounded by shopping, dining & amenities",
                  "Well-known Bandar Sunway area",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-1">✓</span>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Embedded Map */}
            <div className="w-full h-96 rounded-lg overflow-hidden border border-slate-800">
              <iframe
                src={LOCATION.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Parking Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* After Hours Parking */}
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6">
              <h4 className="font-semibold text-emerald-400 mb-3">After Office Hours & Weekends</h4>
              <p className="text-slate-300 mb-2">
                <strong className="text-emerald-300">FREE parking</strong> for 40-60 vehicles right at our premises
              </p>
              <p className="text-slate-400 text-sm">Mon-Fri after 5pm, All day Sat-Sun, Public holidays</p>
            </div>

            {/* Office Hours Parking */}
            <div className="bg-zinc-900 border border-slate-700 rounded-lg p-6">
              <h4 className="font-semibold text-slate-50 mb-3">Office Hours (Mon-Fri 9am-5pm)</h4>
              <p className="text-slate-300">
                Street parking available at MBSJ rates (approx. <strong>RM 0.50/hour</strong>)
              </p>
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-zinc-800 rounded-lg p-6 border border-slate-700 mt-8">
            <p className="text-slate-300">
              <strong className="text-slate-50">💡 Recommendation:</strong> For large groups (30+ people), we recommend
              evening or weekend bookings to ensure free parking for all participants.
            </p>
          </div>
        </div>
      </section>

      {/* How to Book Section */}
      <section className="py-16 md:py-24 border-t border-slate-700">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">How to Book</h2>
          <p className="text-lg text-slate-400 mb-12">Simple, fast, and personal</p>

          {/* 3-Step Process */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="text-5xl mb-4">💬</div>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Check Availability</h3>
              <p className="text-slate-400">
                Contact us on WhatsApp with your preferred date, time, room, activity type, and group size
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Confirm & Pay Deposit</h3>
              <p className="text-slate-400">
                We'll confirm availability and send payment details. 50% deposit secures your booking.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="text-5xl mb-4">🎉</div>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">You're All Set</h3>
              <p className="text-slate-400">
                Receive booking confirmation with studio access details, parking info, and arrival instructions
              </p>
            </div>
          </div>

          {/* Supporting Information */}
          <div className="bg-slate-800/50 rounded-lg p-6 md:p-8 border border-slate-700 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-300 mb-2">
                  <span className="font-semibold">⏱️ Response Time:</span> We respond within 2 hours during business
                  hours
                </p>
              </div>
              <div>
                <p className="text-slate-300">
                  <span className="font-semibold">📅 Booking Timeline:</span> Most bookings are made 1-2 weeks in
                  advance. Last-minute bookings available subject to availability.
                </p>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              💬 Check Availability on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Common Questions FAQ Section */}
      <section className="py-16 md:py-24 border-t border-slate-700">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12">Common Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "Can I visit the studio before booking?",
                a: "Yes! Free 10-minute viewing available. Contact us on WhatsApp to schedule a quick tour.",
              },
              {
                q: "Is parking available?",
                a: "Yes, ample parking available. FREE parking for 40-60 vehicles after office hours (Mon-Fri after 5pm), all day weekends, and public holidays. During office hours, street parking available at MBSJ rates (approx. RM 0.50/hour).",
              },
              {
                q: "Is Wi-Fi available?",
                a: "Yes, free Wi-Fi is available throughout all studio spaces.",
              },
              {
                q: "Can the lighting be adjusted?",
                a: "Yes! All studios have fully controllable lighting, perfect for classes, photography, video shoots, or creating the right atmosphere for your event.",
              },
              {
                q: "Is there a projector available?",
                a: "Yes, projector and large screen are available in Room A and Room D upon request.",
              },
              {
                q: "What's the minimum booking duration?",
                a: "Minimum booking is 1 hour. Your rental time includes setup and cleanup.",
              },
              {
                q: "Can I bring my own equipment?",
                a: "You can bring your own equipment. We also have tripods, lighting accessories, and photography/video support tools available upon request.",
              },
              {
                q: "Can I book recurring weekly time slots?",
                a: "Yes! We offer special monthly packages with better rates for recurring weekly bookings. Contact us to discuss your schedule.",
              },
              {
                q: "What if I need more time than I originally booked?",
                a: "Subject to availability, we can extend your booking. Extensions are charged at the same hourly rate. Contact us immediately if you need more time.",
              },
              {
                q: "How flexible is the scheduling?",
                a: "Very flexible! Our studios are available from early morning to late midnight. We schedule based on your activity needs - whether it's 8am yoga, afternoon rehearsal, or midnight dance party.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-slate-600 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
              >
                <button
                  onClick={() => {
                    const elem = document.getElementById(`faq-${idx}`)
                    if (elem) elem.classList.toggle("hidden")
                    const chevron = document.getElementById(`chevron-${idx}`)
                    if (chevron) chevron.classList.toggle("rotate-180")
                  }}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors text-left"
                >
                  <p className="font-semibold text-slate-50">{item.q}</p>
                  <svg
                    id={`chevron-${idx}`}
                    className="w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                <div id={`faq-${idx}`} className="hidden px-6 py-4 border-t border-slate-600 bg-slate-900/50">
                  <p className="text-slate-300 leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Book?</h2>
          <p className="text-slate-300 mb-12 text-lg">
            Contact us to check availability and discuss your specific needs. We're flexible, accommodating, and here to
            help make your session successful.
          </p>

          {/* PRIMARY CTA: WhatsApp */}
          <div className="mb-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              💬 Check Availability on WhatsApp
            </a>
          </div>

          {/* SECONDARY: Email link */}
          <div className="mb-4">
            <a
              href={`mailto:${CONTACT.email.rentals}`}
              className="text-slate-300 hover:text-emerald-400 underline transition-colors text-base"
            >
              Prefer email? Contact us at {CONTACT.email.rentals}
            </a>
          </div>

          {/* TERTIARY: Phone */}
          <div className="text-slate-400 text-sm mb-8">
            Or call:{" "}
            <a href={`tel:${CONTACT.phone.tel}`} className="hover:text-slate-300 transition-colors">
              {CONTACT.phone.display}
            </a>
          </div>

          {/* Supporting text */}
          <p className="text-slate-400 text-sm">
            We respond within 2 hours during business hours. Most bookings confirmed same day.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
