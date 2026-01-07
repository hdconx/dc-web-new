"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronDown, MapPin, Clock, Users } from "lucide-react"
import { useState } from "react"

interface DanceStyle {
  name: string
  description: string
  durationMin: string
  intensityLevel: string
}

interface Testimonial {
  name: string
  age: string
  text: string
}

interface PricingTier {
  price: string
  duration: string
  description: string
}

interface DemographicPageProps {
  title: string
  ageRange: string
  tagline: string
  overview: string
  heroImageUrl: string
  whoThisIsFor: string
  benefits: Array<{
    title: string
    description: string
    icon: string
  }>
  danceStyles: DanceStyle[]
  teachingPhilosophy: string
  practicalInfo: {
    classSchedule: string
    location: string
    classSize: string
  }
  testimonials: Testimonial[]
  pricing: {
    groupClasses: PricingTier
    semiPrivate: PricingTier
    privateClasses: PricingTier
    dropIn: PricingTier
  }
}

export function DemographicPage({
  title,
  ageRange,
  tagline,
  overview,
  heroImageUrl,
  whoThisIsFor,
  benefits,
  danceStyles,
  teachingPhilosophy,
  practicalInfo,
  testimonials,
  pricing,
}: DemographicPageProps) {
  const [expandedStyle, setExpandedStyle] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image src={heroImageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        </div>

        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6">
          <Link
            href="/"
            className="p-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-slate-50" />
            <span className="text-slate-50 text-sm tracking-wide">BACK</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/danceconnexions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 text-slate-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.668.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/danceconnexions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 text-slate-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl space-y-6">
            <div className="space-y-2">
              <p className="text-slate-400 tracking-[0.3em] text-sm uppercase">{ageRange}</p>
              <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl tracking-tighter text-slate-50">{title}</h1>
              <p className="text-2xl md:text-3xl text-slate-300 tracking-wide font-light">{tagline}</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20dance%20classes%20for%20{title.toLowerCase()}"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-xl hover:shadow-2xl transition-all"
          aria-label="Contact via WhatsApp"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </section>

      {/* Overview */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-slate-50 mb-8">The Experience</h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">{overview}</p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-slate-50 mb-8">Who This Is For</h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">{whoThisIsFor}</p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-slate-50 mb-16">Benefits</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="font-serif text-xl tracking-tight text-slate-50 mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Styles - Expandable Accordions */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-slate-50 mb-16">Dance Styles</h2>

          <div className="space-y-4">
            {danceStyles.map((style) => (
              <button
                key={style.name}
                onClick={() => setExpandedStyle(expandedStyle === style.name ? null : style.name)}
                className="w-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-2xl tracking-tight text-slate-50 group-hover:text-white transition-colors mb-2">
                      {style.name}
                    </h3>
                    <p className="text-slate-400">{style.description}</p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-400 transition-transform ${expandedStyle === style.name ? "rotate-180" : ""}`}
                  />
                </div>

                {/* Expanded Content */}
                {expandedStyle === style.name && (
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400">Duration: {style.durationMin}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400">Intensity: {style.intensityLevel}</span>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-slate-50 mb-8">Our Philosophy</h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">{teachingPhilosophy}</p>
        </div>
      </section>

      {/* Practical Info Snapshot */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-slate-50 mb-16">Practical Info</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-slate-50 mb-2">Class Schedule</h3>
                  <p className="text-slate-400">{practicalInfo.classSchedule}</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-slate-50 mb-2">Location</h3>
                  <p className="text-slate-400">{practicalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-slate-50 mb-2">Class Size</h3>
                  <p className="text-slate-400">{practicalInfo.classSize}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-slate-50 mb-16">
            What Our Community Says
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-slate-300 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-serif text-slate-50">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-slate-50 mb-16">Investment & Pricing</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Group Classes */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="mb-6">
                <h3 className="text-slate-400 text-sm tracking-widest uppercase mb-3">Group Classes</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl text-slate-50">{pricing.groupClasses.price}</span>
                  <span className="text-slate-400 text-sm">{pricing.groupClasses.duration}</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{pricing.groupClasses.description}</p>
            </div>

            {/* Semi-Private */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="mb-6">
                <h3 className="text-slate-400 text-sm tracking-widest uppercase mb-3">Semi-Private</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl text-slate-50">{pricing.semiPrivate.price}</span>
                  <span className="text-slate-400 text-sm">{pricing.semiPrivate.duration}</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{pricing.semiPrivate.description}</p>
            </div>

            {/* Private Classes */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="mb-6">
                <h3 className="text-slate-400 text-sm tracking-widest uppercase mb-3">Private Classes</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl text-slate-50">{pricing.privateClasses.price}</span>
                  <span className="text-slate-400 text-sm">{pricing.privateClasses.duration}</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{pricing.privateClasses.description}</p>
            </div>

            {/* Drop-In */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="mb-6">
                <h3 className="text-slate-400 text-sm tracking-widest uppercase mb-3">Drop-In</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl text-slate-50">{pricing.dropIn.price}</span>
                  <span className="text-slate-400 text-sm">{pricing.dropIn.duration}</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{pricing.dropIn.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-slate-50">Ready to Begin?</h2>
          <p className="text-xl text-slate-400">Connect with us to schedule your first class or learn more</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20dance%20classes%20for%20{title.toLowerCase()}"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white tracking-widest text-sm transition-all items-center gap-3"
            >
              CONTACT US ON WHATSAPP
              <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/"
              className="inline-flex px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-slate-50 tracking-widest text-sm transition-all items-center gap-3"
            >
              EXPLORE OTHER PROGRAMS
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
