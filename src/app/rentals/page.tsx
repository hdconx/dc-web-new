"use client"

import { useState } from "react"
import { ChevronLeft, MessageCircle, ChevronDown, Check, Quote, Grid, Image, DollarSign, GitCompare } from "lucide-react"
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
      bestFor: "Large classes, workshops, rehearsals, performances",
      image: "/rentals-hero/Studio A-Main.jpg",
      features: [
        "Mirrors covering 3 walls",
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
      rate: "From RM 80/hour",
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
      rate: "From RM 60/hour",
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
      rate: "From RM 50/hour",
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
          src="/rentals-hero/Studio A-Main.jpg"
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
              className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white px-5 py-2.5 rounded-lg transition-all text-sm font-medium"
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
              href="/rentals/pricing"
              className="inline-flex items-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 px-5 py-2.5 rounded-lg transition-all text-sm font-medium"
            >
              <DollarSign className="w-4 h-4" />
              Pricing
            </Link>
            <Link
              href="/rentals/compare"
              className="inline-flex items-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 px-5 py-2.5 rounded-lg transition-all text-sm font-medium"
            >
              <GitCompare className="w-4 h-4" />
              Compare
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
            Designed for your success, built with your needs in mind
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
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Built by Dancers for Dancers</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                3 walls covered with high, uninterrupted mirrors. Large mirrors let you see your full body movement, perfect posture checks, and group formations at a glance. We understand what you need because we've been in your shoes.
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

      {/* Testimonials Section - Coming Soon */}
      <section className="py-16 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-50 text-center mb-4">
            What Renters Say
          </h2>
          <p className="text-center text-slate-400 mb-12">
            We're collecting feedback from our renters
          </p>

          <div className="bg-zinc-900 border border-slate-800 rounded-lg p-8 md:p-12 text-center">
            <Quote className="w-12 h-12 text-emerald-500/30 mx-auto mb-6" />
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              We're actively collecting reviews from renters who use our studios. If you've rented with us, we'd love to hear about your experience!
            </p>
            <p className="text-slate-400 text-sm">
              Have you rented our studios? <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">Share your feedback on WhatsApp</a> and help others discover our space.
            </p>
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
            Four professional spaces designed for dance, fitness, and creative movement
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Link
              href="/rentals/rooms"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl font-semibold"
            >
              <Grid className="w-5 h-5" />
              View All Rooms
            </Link>
            <Link
              href="/rentals/compare"
              className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-slate-300 hover:text-white px-6 py-3 rounded-lg transition-all border border-zinc-700 font-semibold"
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
                  <div className="relative h-48 md:h-56 overflow-hidden bg-slate-800">
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
                    "Dance classes (all styles - ballet, hip-hop, contemporary, ballroom, K-pop, etc.)",
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
                    "Yoga, Pilates, and barre classes",
                    "Fitness training & conditioning",
                    "Martial arts-inspired movement (non-contact)",
                    "Personal training sessions",
                    "Group fitness programs",
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
                    "Theatre & acting rehearsals",
                    "Performance practice & run-throughs",
                    "Modeling & runway training",
                    "Stage movement coaching",
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
                    "Dance & fitness photography",
                    "Video shoots & tutorials",
                    "Social media content creation",
                    "Instructional video recording",
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
                  Workshops & Events
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-2">
                  {[
                    "Movement workshops & masterclasses",
                    "Training sessions & seminars",
                    "Dance socials & practice sessions",
                    "Small group learning sessions",
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
          <div className="flex justify-center mb-8">
            <Link
              href="/rentals/pricing"
              className="inline-flex items-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 px-5 py-2.5 rounded-lg transition-all text-sm font-medium"
            >
              View Full Pricing Details →
            </Link>
          </div>
          <p className="text-center text-emerald-400 mb-16 font-medium">
            Substantial discounts available—contact us for your personalized quote
          </p>

          <div className="space-y-16">
            {/* Base Hourly Rates */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-50 mb-4">Base Hourly Rates</h3>
              <p className="text-slate-400 text-sm mb-8">Starting rates for standard bookings</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="pb-4 text-slate-400 text-sm font-medium">Room</th>
                      <th className="pb-4 text-slate-400 text-sm font-medium text-right">From</th>
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
              <div className="mt-6 bg-emerald-900/20 border border-emerald-700/30 rounded-lg p-4">
                <p className="text-emerald-300 text-sm">
                  💡 <strong>Better rates available:</strong> Multi-hour bookings, weekly classes, and long-term commitments qualify for reduced rates. WhatsApp us for your personalized quote.
                </p>
              </div>
            </div>

            {/* Better Rates Available */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-50 mb-8">Better Rates Available For</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zinc-900 p-6 rounded-lg border border-slate-800">
                  <div className="text-3xl mb-3">⏱️</div>
                  <h4 className="font-semibold text-slate-50 mb-2">Multi-Hour Sessions</h4>
                  <p className="text-slate-400 text-sm">
                    Booking 4+ hours? Get a better rate. The more hours, the more you save.
                  </p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg border border-slate-800">
                  <div className="text-3xl mb-3">📅</div>
                  <h4 className="font-semibold text-slate-50 mb-2">Weekly Recurring</h4>
                  <p className="text-slate-400 text-sm">
                    Regular weekly classes? We offer special recurring rates for consistent bookings.
                  </p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg border border-slate-800">
                  <div className="text-3xl mb-3">🤝</div>
                  <h4 className="font-semibold text-slate-50 mb-2">Long-Term Commitments</h4>
                  <p className="text-slate-400 text-sm">
                    Monthly or yearly? Substantial discounts available. Let's discuss your needs.
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-slate-50">Minimum booking</p>
                    <p>1 hour</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-50">Deposit</p>
                    <p>50% to confirm</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-50">Balance</p>
                    <p>Before or upon arrival</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-50">Payment</p>
                    <p>Transfer, card, cash</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cancellation" className="border border-slate-700 rounded-lg bg-slate-800/50 px-6">
              <AccordionTrigger className="text-lg font-semibold text-slate-50 hover:text-emerald-400 py-5">
                Cancellation & Refunds
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>48+ hours notice</span>
                    <span className="text-emerald-400 font-medium">Full refund</span>
                  </div>
                  <div className="flex justify-between">
                    <span>24-48 hours notice</span>
                    <span className="text-emerald-400 font-medium">50% refund</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Under 24 hours</span>
                    <span className="text-slate-400">No refund</span>
                  </div>
                  <p className="text-sm text-slate-400 pt-2">One-time reschedule option available</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="time-rules" className="border border-slate-700 rounded-lg bg-slate-800/50 px-6">
              <AccordionTrigger className="text-lg font-semibold text-slate-50 hover:text-emerald-400 py-5">
                Time & Overtime Rules
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    Setup & cleanup time included in your booked hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    Overtime charged at same hourly rate if extended
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    Please vacate on time to respect other bookings
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
                  className="inline-block px-4 py-2 border-2 border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-lg text-sm font-medium transition-all"
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
                allowFullScreen
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
