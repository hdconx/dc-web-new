"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { CONTACT } from "@/lib/config"
import { ImagePlaceholder } from "./image-placeholder"

interface StyleData {
  slug: string
  name: string
  tagline: string
  fullDescription: string
  whatYoullLearn: string[]
  whoItsFor: string
  whatsappMessage: string
  imagePrompt?: string
}

interface RelatedStyle {
  slug: string
  name: string
  tagline: string
}

interface ClassPricing {
  monthly: { display: string; period: string }
  introFourSession: { display: string; period: string }
  dropIn: { display: string; period: string }
  privateIndividual: { display: string; period: string }
}

interface StylePageProps {
  demoName: string
  demoAgeRange: string
  demoSlug: string
  style: StyleData
  relatedStyles: RelatedStyle[]
  pricing: ClassPricing
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function StylePage({ demoName, demoAgeRange, demoSlug, style, relatedStyles, pricing }: StylePageProps) {
  const waUrl = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(style.whatsappMessage)}`

  return (
    <main className="min-h-screen bg-black">

      {/* ── Header / Breadcrumb ── */}
      <div className="bg-zinc-950 border-b border-white/10">
        <div className="px-8 md:px-16 lg:px-24 py-4 flex items-center gap-3 text-sm text-slate-400">
          <Link href="/classes" className="hover:text-slate-200 transition-colors">All Programs</Link>
          <span>/</span>
          <Link href={`/${demoSlug}`} className="hover:text-slate-200 transition-colors">{demoName}</Link>
          <span>/</span>
          <span className="text-slate-200">{style.name}</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-zinc-950">
        <div className="grid lg:grid-cols-2 items-stretch">
          {/* Text side */}
          <div className="px-8 md:px-16 lg:px-24 py-20 flex flex-col justify-center">
            <p className="text-slate-500 text-sm tracking-widest uppercase mb-4">{demoAgeRange}</p>
            <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-slate-50 mb-4">{style.name}</h1>
            <p className="text-xl text-slate-400 italic">{style.tagline}</p>
          </div>
          {/* Image side */}
          <ImagePlaceholder
            label={`${style.name} — ${demoAgeRange}`}
            prompt={style.imagePrompt ?? `${style.name} dance class, Malaysian students, professional studio, 3:2`}
            className="min-h-64 lg:min-h-0"
          />
        </div>
      </section>

      {/* ── About This Class ── */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-3xl">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h2 className="font-serif text-3xl text-slate-50 mb-6">About This Class</h2>
          <p className="text-lg text-slate-300 leading-relaxed">{style.fullDescription}</p>
        </div>
      </section>

      {/* ── What You'll Learn ── */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-3xl">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h2 className="font-serif text-3xl text-slate-50 mb-10">What You&apos;ll Learn</h2>
          <ul className="space-y-4">
            {style.whatYoullLearn.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-3xl">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h2 className="font-serif text-3xl text-slate-50 mb-6">Who This Class Is For</h2>
          <p className="text-lg text-slate-300 leading-relaxed">{style.whoItsFor}</p>
        </div>
      </section>

      {/* ── Class Details ── */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-3xl">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h2 className="font-serif text-3xl text-slate-50 mb-10">Class Details</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-slate-500 text-sm tracking-widest uppercase mb-2">Duration</p>
              <p className="text-slate-50 text-lg font-medium">1-hour sessions</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-slate-500 text-sm tracking-widest uppercase mb-2">Schedule</p>
              <p className="text-slate-50 text-lg font-medium">Weekly recurring</p>
              <p className="text-slate-400 text-sm mt-1">Day and evening options available</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-slate-500 text-sm tracking-widest uppercase mb-2">Experience Level</p>
              <p className="text-slate-50 text-lg font-medium">All levels welcome</p>
              <p className="text-slate-400 text-sm mt-1">Including complete beginners</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-slate-500 text-sm tracking-widest uppercase mb-2">First Class</p>
              <p className="text-slate-50 text-lg font-medium">Drop-in available</p>
              <p className="text-slate-400 text-sm mt-1">Try before you commit</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-3xl">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h2 className="font-serif text-3xl text-slate-50 mb-10">Pricing</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-slate-400 text-sm tracking-widest uppercase mb-3">Monthly</p>
              <p className="font-serif text-3xl text-slate-50">{pricing.monthly.display}</p>
              <p className="text-slate-500 text-sm mt-1">{pricing.monthly.period}</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-slate-400 text-sm tracking-widest uppercase mb-3">Intro 4-Session</p>
              <p className="font-serif text-3xl text-slate-50">{pricing.introFourSession.display}</p>
              <p className="text-slate-500 text-sm mt-1">{pricing.introFourSession.period}</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-slate-400 text-sm tracking-widest uppercase mb-3">Drop-In</p>
              <p className="font-serif text-3xl text-slate-50">{pricing.dropIn.display}</p>
              <p className="text-slate-500 text-sm mt-1">{pricing.dropIn.period}</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-slate-400 text-sm tracking-widest uppercase mb-3">Private Sessions</p>
              <p className="font-serif text-3xl text-slate-50">from {pricing.privateIndividual.display}</p>
              <p className="text-slate-500 text-sm mt-1">{pricing.privateIndividual.period}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Styles ── */}
      {relatedStyles.length > 0 && (
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-zinc-950">
          <div className="max-w-4xl">
            <div className="h-px w-16 bg-white/20 mb-8" />
            <h2 className="font-serif text-3xl text-slate-50 mb-10">Other {demoName} Classes</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedStyles.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${demoSlug}/${s.slug}`}
                  className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-slate-50 font-medium group-hover:text-white transition-colors">{s.name}</h3>
                      <p className="text-slate-500 text-sm mt-1 italic">{s.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl text-slate-50 mb-6">Interested in {style.name}?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Message us on WhatsApp to ask about the schedule, availability, or anything else. We will get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium tracking-wide transition-all"
            >
              <WhatsAppIcon />
              Enquire on WhatsApp
            </a>
            <Link
              href={`/${demoSlug}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-slate-50 tracking-wide transition-all"
            >
              Back to {demoName}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
