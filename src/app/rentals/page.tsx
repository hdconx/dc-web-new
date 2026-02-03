"use client"

import { useState } from "react"
import { ChevronLeft, MessageCircle, ChevronDown, Check, Quote, Grid, Image, DollarSign, GitCompare, Tag } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getWhatsAppUrl, CONTACT, LOCATION } from "@/lib/config"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Dynamic WhatsApp link with room pre-fill
function getWhatsAppForRoom(roomName: string, subtitle: string) {
  const message = `Hi! I'm interested in renting ${roomName} (${subtitle}) at Dance Connexions.\n\n- Preferred date:\n- Time slot:\n- Activity type:\n- Group size:\n\nPlease let me know availability and pricing. Thank you!`
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`
}

export default function RentalsPage() {
  const [expandedStudio, setExpandedStudio] = useState<number | null>(null)

  const whatsappLink = getWhatsAppUrl("rentalInquiry")

  const studios = [
    {
      id: 1,
      name: "Room A",
      subtitle: "Large Studio",
      sqft: "1,200 sq ft",
      rate: "From RM 120/hour",
      bestFor: "Large classes, workshops, rehearsals, performances, events",
      image: "/images/studios/01-Studio-A-Main-Floor.webp",
      features: [
        "Mirrors covering 3 walls",
        "Professional sound + wireless mic",
        "Controlled RGB lighting",
        "Stage/Platform available",
        "Projector & screen available",
        "Air-conditioned",
      ],
      details: {
        dimensions: "Approx. 40ft x 50ft",
        capacity: "40-60 people (depending on activity type)",
        equipment: "High-quality sound system, wireless microphone, projector & large screen, controllable RGB lighting, stage platform",
        climate: "Fully air-conditioned with 6 wall-mounted fans",
        ideal: "Large dance classes, fitness workshops, rehearsals, auditions, performance training, modeling runway training, catwalk practice, fashion shows, theatrical productions",
      },
    },
    {
      id: 2,
      name: "Room D",
      subtitle: "Medium Studio (Standalone)",
      sqft: "700 sq ft",
      rate: "From RM 80/hour",
      bestFor: "Dance classes, fitness training, workshops",
      image: "/images/studios/04-Studio-D.webp",
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
      rate: "From RM 60/hour",
      bestFor: "Rehearsals, small classes, content creation",
      image: "/images/studios/02-Studio-B.webp",
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
      rate: "From RM 50/hour",
      bestFor: "Private lessons, small groups, practice sessions",
      image: "/images/studios/03-Studio-C.webp",
      features: ["Wall-to-wall mirrors", "Sound system", "Private & intimate setting", "Air-conditioned"],
      details: {
        capacity: "2-10 people (depending on activity type)",
        equipment: "Sound system",
        climate: "Fully air-conditioned",
        ideal: "Private dance lessons, one-on-one coaching, personal training sessions, practice requiring privacy",
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
          src="/images/studios/01-Studio-A-Main-Floor.webp"
          alt="Dance Connexions Studio A"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle gradient overlay - minimal, only at bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

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

        {/* Hero Content - Positioned at lower third */}
        <div className="absolute inset-x-0 bottom-0 pb-16 md:pb-20">
          <div className="text-center px-6 max-w-4xl mx-auto">
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

      {/* Quick Navigation */}
      <section className="py-6 px-6 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Link
              href="/rentals/rooms"
              className="inline-flex items-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 px-5 py-2.5 rounded-lg transition-all text-sm font-medium"
            >
              <Grid className="w-4 h-4" />
              Browse Rooms
            </Link>
            <Link
              href="/rentals/gallery"
              className="inline-flex items-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 px-5 py-2.5 rounded-lg transition-all text-sm font-medium"
            >
              <Image className="w-4 h-4" />
              Gallery
            </Link>
            <Link
              href="/rentals/compare"
              className="inline-flex items-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 px-5 py-2.5 rounded-lg transition-all text-sm font-medium"
            >
              <GitCompare className="w-4 h-4" />
              Compare
            </Link>
            <Link
              href="/rentals/promos"
              className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-400 hover:bg-emerald-600/20 px-5 py-2.5 rounded-lg transition-all text-sm font-medium"
            >
              <Tag className="w-4 h-4" />
              Promotions
            </Link>
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-50 text-center mb-4">
            Why Choose Us
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            Here's what makes our studios stand out
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Flexible Policies */}
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-emerald-500/50 transition-all">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Super Flexible Policies</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We understand things may not go as planned. Need to change your booking schedule, room, or setup? Unsure about details before booking? Talk to us—we have very flexible policies and we understand your challenges.
              </p>
            </div>

            {/* Card 2 - Affordable */}
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-emerald-500/50 transition-all">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Pricing That Works For You</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                From RM 50/hour with substantial discounts for multi-hour bookings, weekly classes, and long-term commitments. Contact us—we'll find a rate that fits your budget.
              </p>
            </div>

            {/* Card 3 - Multiple Room Options */}
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-emerald-500/50 transition-all">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">4 Studios to Choose From</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Small group of 5? Large workshop of 50? We have the right size room for your exact needs and budget.
              </p>
            </div>

            {/* Card 4 - Uninterrupted Mirrors */}
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-emerald-500/50 transition-all">
              <div className="text-3xl mb-3">🪞</div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Purpose-Built for Visual Learning</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Three walls covered with 10ft wide × 7ft high wall-to-wall mirrors—purpose-built by dancers who understand the importance of seeing every movement. Perfect for dance, modeling, acting, drama workshops, performance training, and any activity that relies on visual feedback. Our mirror setup provides unmatched advantages for movement-based learning and practice.
              </p>
            </div>

            {/* Card 5 - Flexible Schedule */}
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-emerald-500/50 transition-all">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Book Anytime You Need</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Early morning yoga at 7am? Midnight dance practice? We're open when you need us—morning to late night.
              </p>
            </div>

            {/* Card 6 - Storage Space */}
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-emerald-500/50 transition-all">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Free Storage Space</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Storage space available for regular renters. No need to drag bulky equipment back and forth—store your gear with us and arrive light. Makes your sessions easier and saves you time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Showcase */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 text-center mb-6">
            Choose Your Studio
          </h2>

          <p className="text-center text-slate-300 mb-8 text-lg">
            Four versatile studios for classes, rehearsals, workshops, content creation, and events
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Link
              href="/rentals/rooms"
              className="inline-flex items-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 px-6 py-3 rounded-lg transition-all font-semibold"
            >
              <Grid className="w-5 h-5" />
              View All Rooms
            </Link>
            <Link
              href="/rentals/compare"
              className="inline-flex items-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 px-6 py-3 rounded-lg transition-all font-semibold"
            >
              <GitCompare className="w-5 h-5" />
              Compare Rooms
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studios.map((studio) => (
              <button
                key={studio.id}
                onClick={() => setExpandedStudio(expandedStudio === studio.id ? null : studio.id)}
                className="text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded-lg"
              >
                <div className="bg-zinc-900 border border-slate-800 rounded-lg overflow-hidden hover:border-slate-600 transition-all duration-300 cursor-pointer h-full">
                  <div className="relative h-48 md:h-56 overflow-hidden rounded-t-lg bg-slate-800">
                    <img
                      src={studio.image || "/placeholder.svg"}
                      alt={`${studio.name} - ${studio.subtitle}`}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
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
                        <a
                          href={getWhatsAppForRoom(studio.name, studio.subtitle)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-200 text-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Inquire About {studio.name}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section - Accordion */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 text-center mb-6">
            Our Studios Are Ideal For
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Click each category to see what activities we support
          </p>

          <Accordion type="multiple" defaultValue={["dance"]} className="space-y-4">
            <AccordionItem value="dance" className="border border-slate-800 rounded-lg bg-zinc-900 px-6">
              <AccordionTrigger className="text-lg font-semibold text-slate-50 hover:text-emerald-400 py-5">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">💃</span>
                  Dance & Movement
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-2">
                  {[
                    "Dance classes (all styles - hip-hop, contemporary, ballroom, K-pop, line dancing, belly dancing, Latin dance, etc.)",
                    "Dance rehearsals & choreography development",
                    "Private dance coaching & instruction",
                    "Audition preparation & practice",
                    "Performance rehearsals",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fitness" className="border border-slate-800 rounded-lg bg-zinc-900 px-6">
              <AccordionTrigger className="text-lg font-semibold text-slate-50 hover:text-emerald-400 py-5">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🧘</span>
                  Fitness & Wellness
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-2">
                  {[
                    "Dance fitness classes (Zumba, Salsation, dance exercise)",
                    "Yoga sessions",
                    "Fitness training & personal training",
                    "Group fitness classes",
                    "Aerobics & cardio sessions",
                    "Stretching & flexibility training",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="performing" className="border border-slate-800 rounded-lg bg-zinc-900 px-6">
              <AccordionTrigger className="text-lg font-semibold text-slate-50 hover:text-emerald-400 py-5">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🎭</span>
                  Performing Arts
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-2">
                  {[
                    "Theatre & drama classes",
                    "Acting rehearsals & training",
                    "Modeling & runway training",
                    "Fashion shows & catwalk practice",
                    "Audition preparations",
                    "Talent showcases",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="content" className="border border-slate-800 rounded-lg bg-zinc-900 px-6">
              <AccordionTrigger className="text-lg font-semibold text-slate-50 hover:text-emerald-400 py-5">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">📸</span>
                  Content Creation
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-2">
                  {[
                    "Video shoots & tutorials",
                    "Social media content (TikTok, Instagram Reels, YouTube)",
                    "Professional photoshoots",
                    "Product launches & promotional videos",
                    "Online course recording",
                    "Livestream sessions",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="workshops" className="border border-slate-800 rounded-lg bg-zinc-900 px-6">
              <AccordionTrigger className="text-lg font-semibold text-slate-50 hover:text-emerald-400 py-5">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  Workshops & Studio Parties
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-2">
                  {[
                    "Training workshops & seminars",
                    "Dance socials & practice sessions",
                    "Birthday parties & celebrations",
                    "Team building activities",
                    "Corporate events & gatherings",
                    "Learning sessions & skill development",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CLOSING TEXT */}
          <div className="mt-10 text-center">
            <p className="text-slate-300 text-lg leading-relaxed">
              Planning something unique? We're flexible and accommodating.{" "}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">
                Contact us
              </a>{" "}
              to discuss your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 text-center mb-4">Flexible Pricing</h2>
          <p className="text-center text-slate-400 mb-6 max-w-2xl mx-auto">
            Every renter's needs are different. We work with you to find the right rate.
          </p>
          <p className="text-center text-emerald-400 mb-16 font-medium">
            Substantial discounts available—contact us for your personalized quote
          </p>

          <div className="space-y-16">
            {/* Base Hourly Rates */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-50 mb-4">Base Hourly Rates</h3>
              <p className="text-slate-400 text-sm mb-6">Standard hourly rates before discounts</p>

              <div className="mb-6 bg-emerald-900/20 border border-emerald-700/30 rounded-lg p-4">
                <p className="text-emerald-300 text-sm">
                  💡 <strong>Substantial discounts available:</strong> Multi-hour bookings, weekly classes, and long-term commitments qualify for reduced rates. WhatsApp us for your personalized quote.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="pb-4 text-slate-400 text-sm font-medium">Room</th>
                      <th className="pb-4 text-slate-400 text-sm font-medium text-right">Per Hour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr className="hover:bg-zinc-900 transition-colors">
                      <td className="py-4 text-slate-300">Room A (Large Studio, 1,200 sq ft)</td>
                      <td className="py-4 text-right text-slate-50 font-semibold">RM 120/hour</td>
                    </tr>
                    <tr className="hover:bg-zinc-900 transition-colors">
                      <td className="py-4 text-slate-300">Room D (Medium Studio, 700 sq ft)</td>
                      <td className="py-4 text-right text-slate-50 font-semibold">RM 80/hour</td>
                    </tr>
                    <tr className="hover:bg-zinc-900 transition-colors">
                      <td className="py-4 text-slate-300">Room B (Medium Studio, 400 sq ft)</td>
                      <td className="py-4 text-right text-slate-50 font-semibold">RM 60/hour</td>
                    </tr>
                    <tr className="hover:bg-zinc-900 transition-colors">
                      <td className="py-4 text-slate-300">Room C (Small Studio, 300 sq ft)</td>
                      <td className="py-4 text-right text-slate-50 font-semibold">RM 50/hour</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Better Rates Available */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-50 mb-8">Who Qualifies for Discounts?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zinc-900 p-6 rounded-lg border border-slate-800">
                  <div className="text-3xl mb-3">⏱️</div>
                  <h4 className="font-semibold text-slate-50 mb-2">Flexible Discounts</h4>
                  <p className="text-slate-400 text-sm">
                    Multi-hour bookings, bulk reservations, and off-peak timing all qualify for better rates. The more you book, the more you save.
                  </p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg border border-slate-800">
                  <div className="text-3xl mb-3">🎓</div>
                  <h4 className="font-semibold text-slate-50 mb-2">Special Groups</h4>
                  <p className="text-slate-400 text-sm">
                    Students, seniors, studio members, non-profits, and regular renters receive special consideration. Let us know your situation.
                  </p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg border border-slate-800">
                  <div className="text-3xl mb-3">🤝</div>
                  <h4 className="font-semibold text-slate-50 mb-2">Custom Packages</h4>
                  <p className="text-slate-400 text-sm">
                    Long-term partnerships, unique requirements, or recurring bookings? We'll create a package that works for your budget and needs.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-950/30 border border-emerald-700/40 rounded-xl p-8 md:p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4">
                Need a Better Rate?
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Tell us your requirements (hours needed, frequency, dates) and we'll work out pricing that fits your budget.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Get Your Custom Quote
              </a>
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
                      "HPL AC3 Grade Flooring",
                      "Free Wi-Fi throughout premises",
                      "Parking (free after office hours, weekends & holidays)",
                      "Reverse Osmosis Water Dispenser",
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
                      "Large Cooler For F&B",
                      "Equipment Storage",
                      "Tables and Chairs",
                      "Stage platform",
                      "Colorful LED Lighting",
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

      {/* Booking Policies Section - Accordion */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Booking Policies</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="booking-basics" className="border border-slate-700 rounded-lg bg-slate-800/50 px-6">
              <AccordionTrigger className="text-lg font-semibold text-slate-50 hover:text-emerald-400 py-5">
                Booking Basics
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-slate-50 mb-1">Minimum booking</p>
                    <p>1 hour</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-50 mb-1">Deposit and Balance Payment</p>
                    <p>Event specific. Contact us for the details.</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-50 mb-1">Payment Methods</p>
                    <p>DuitNow, eWallet (TnG), Bank Transfer, Cash</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cancellation" className="border border-slate-700 rounded-lg bg-slate-800/50 px-6">
              <AccordionTrigger className="text-lg font-semibold text-slate-50 hover:text-emerald-400 py-5">
                Cancellation & Rescheduling
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                <p className="leading-relaxed">
                  We have flexible cancellation and rescheduling policies depending on event details such as proximity of the event, type of setup, recurring status, and other factors. Contact us to discuss your specific situation and the applicable policy.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="time-rules" className="border border-slate-700 rounded-lg bg-slate-800/50 px-6">
              <AccordionTrigger className="text-lg font-semibold text-slate-50 hover:text-emerald-400 py-5">
                Extensions & Timing
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                <p className="leading-relaxed">
                  Subject to room availability, rentals can be extended at the same hourly rate. Contact us if you need additional time during your session.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
              <h3 className="text-xl font-semibold text-slate-50 mb-3">Confirm & Make Payment</h3>
              <p className="text-slate-400">
                We'll confirm availability and send payment details. Make payment to secure your booking.
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
          <div className="bg-slate-800/50 rounded-lg p-6 md:p-8 border border-slate-700 mb-12 text-center">
            <p className="text-slate-300">
              <span className="font-semibold">📱 Response Time:</span> We'll get back to you as soon as possible
            </p>
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
                a: "Absolutely! We welcome you to view our facilities by appointment to ensure they suit your needs. This also allows us to discuss your specific requirements and help you choose the right space.",
              },
              {
                q: "Is parking available?",
                a: "Yes, ample convenient parking available. FREE parking after office hours (Mon-Fri evenings), all day weekends, and public holidays. During office hours, street parking available at MBSJ rates (approx. RM 0.50/hour).",
              },
              {
                q: "What are your studio availability hours?",
                a: "Very flexible! Our studios are available from early morning to late midnight. We schedule based on your activity needs—whether it's 8am yoga, afternoon rehearsal, or midnight dance party.",
              },
              {
                q: "What's the minimum booking duration?",
                a: "Minimum booking is 1 hour.",
              },
              {
                q: "Can I extend my rental if I need more time?",
                a: "You're welcome to extend your rental duration! We do our best to accommodate extensions subject to room availability. Contact us if you need additional time.",
              },
              {
                q: "Is the studio accessible for people with mobility issues?",
                a: "Our studios are located on the 2nd floor and the building does not have elevator access. Please contact us to discuss your specific accessibility needs.",
              },
              {
                q: "Can I book for groups of different sizes?",
                a: "Yes! We have 4 studios ranging from 300 to 1,200 sq ft, accommodating groups from 2 to 60 people. We'll help you find the right size for your needs and budget.",
              },
              {
                q: "What's your cancellation and rescheduling policy?",
                a: "We have very accommodating cancellation and rescheduling policies. Contact us to find out more about the policy applicable to your event type.",
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
                q: "Can I bring my own equipment?",
                a: "You can bring your own equipment. We also have tripods, lighting accessories, and photography/video support tools available upon request.",
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
          <div className="mb-4 flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a
              href={`mailto:${CONTACT.email.rentals}`}
              className="text-slate-300 hover:text-emerald-400 underline transition-colors text-base"
            >
              {CONTACT.email.rentals}
            </a>
          </div>

          {/* TERTIARY: Phone */}
          <div className="text-slate-300 text-base mb-8 flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${CONTACT.phone.tel}`} className="hover:text-emerald-400 transition-colors font-semibold text-lg">
              {CONTACT.phone.display}
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
