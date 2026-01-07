"use client"

import { Check } from "lucide-react"

interface StudioPremisesProps {
  onCtaClick?: () => void
}

export function StudioPremises({ onCtaClick }: StudioPremisesProps) {
  const facilities = [
    "Professional sprung flooring (joint-safe)",
    "Wall-to-wall mirrors",
    "Fully air-conditioned",
    "Clean changing rooms",
    "Accessible ground floor",
    "Ample parking",
  ]

  return (
    <section className="py-24 md:py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-50 tracking-tight mb-6">
            A Space Built for Movement
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Since 1999, Dance Connexions has been a purpose-built dance studio in Bandar Sunway. Clean, safe, and
            designed by dancers who understand what a real studio should feel like.
          </p>
        </div>

        {/* Studio images */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <img
              src="/dance-studio-with-mirrors.png"
              alt="Dance studio with mirrors"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden">
            <img
              src="/dance-studio-wooden-floor-and-lighting.jpg"
              alt="Professional dance flooring"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Facility checklist */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {facilities.map((facility) => (
            <div
              key={facility}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-slate-300 text-sm">{facility}</span>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-slate-50 hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <span className="text-lg">Take your first step</span>
            <span className="text-2xl">↑</span>
          </button>
        </div>
      </div>
    </section>
  )
}
