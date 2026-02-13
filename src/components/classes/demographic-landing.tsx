"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useState } from "react"
import { CONTACT } from "@/lib/config"
import { ImagePlaceholder } from "./image-placeholder"

interface Style {
  slug: string
  name: string
  tagline: string
  cardDescription: string
  imagePrompt?: string
}

interface Faq {
  question: string
  answer: string
}

export interface DemographicData {
  id: string
  name: string
  ageRange: string
  slug: string
  headline: string
  subheadline: string
  overview: string
  whatsappMessage: string
  accentClass: string
  heroImagePrompt?: string
  styles: Style[]
  faqs: Faq[]
}

interface ClassPricing {
  monthly: { display: string; period: string; note: string }
  introFourSession: { display: string; period: string; note: string }
  dropIn: { display: string; period: string; note: string }
  privateIndividual: { display: string; period: string; note: string }
}

interface DemographicLandingProps {
  demo: DemographicData
  pricing: ClassPricing
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function FaqAccordion({ faqs, previewOnly }: { faqs: Faq[]; previewOnly?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const displayFaqs = previewOnly ? faqs.slice(0, 3) : faqs

  return (
    <div className="space-y-3">
      {displayFaqs.map((faq, i) => (
        <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
          >
            <span className="text-slate-200 font-medium pr-4">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6">
              <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function DemographicLanding({ demo, pricing }: DemographicLandingProps) {
  const waUrl = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(demo.whatsappMessage)}`

  return (
    <main className="min-h-screen bg-black">

      {/* ── Hero ── */}
      <section className={`relative bg-gradient-to-br ${demo.accentClass} via-zinc-950 to-zinc-900`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.04)_0%,transparent_60%)]" />

        {/* Nav back link */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6">
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all text-slate-50 text-sm"
          >
            ← All Programs
          </Link>
        </div>

        {/* Hero content — split layout */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          {/* Left: text */}
          <div>
            <p className="text-slate-400 tracking-[0.3em] text-sm uppercase mb-4">{demo.ageRange}</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-50 mb-6 leading-tight">
              {demo.headline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 leading-relaxed">
              {demo.subheadline}
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
              <a
                href="#styles"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-slate-50 tracking-wide transition-all"
              >
                See Classes
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: hero image placeholder */}
          <div className="hidden lg:block">
            <ImagePlaceholder
              label={`${demo.name} Hero Image`}
              prompt={demo.heroImagePrompt ?? `Professional photo of ${demo.name.toLowerCase()} dance class in a Malaysian studio, 16:9`}
              className="w-full rounded-2xl"
              style={{ aspectRatio: "16/9" }}
            />
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">{demo.overview}</p>
        </div>
      </section>

      {/* ── Dance Styles ── */}
      <section id="styles" className="py-20 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-slate-50 mb-4">What We Offer</h2>
          <p className="text-slate-400 mb-14 text-lg">
            Each class links to a full description — what you&apos;ll learn, who it suits, and how it works.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {demo.styles.map((style) => (
              <Link
                key={style.slug}
                href={`/${demo.slug}/${style.slug}`}
                className="group rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all overflow-hidden"
              >
                {/* Style card image placeholder */}
                <ImagePlaceholder
                  label={style.name}
                  prompt={style.imagePrompt ?? `Dance class photo for ${style.name}, Malaysian students, professional studio`}
                  className="w-full h-44"
                  showPrompt={false}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-2xl tracking-tight text-slate-50 group-hover:text-white transition-colors">
                      {style.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-slate-500 text-sm tracking-wide mb-3 italic">{style.tagline}</p>
                  <p className="text-slate-400 leading-relaxed">{style.cardDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Classes Work ── */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-slate-50 mb-14">How Classes Work</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl mb-4">⏱</div>
              <h3 className="text-slate-50 font-semibold text-lg mb-3">1-Hour Sessions</h3>
              <p className="text-slate-400 leading-relaxed">
                Each class runs for approximately one hour, scheduled with buffer time between sessions so you are never rushed.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl mb-4">📅</div>
              <h3 className="text-slate-50 font-semibold text-lg mb-3">Flexible Scheduling</h3>
              <p className="text-slate-400 leading-relaxed">
                Classes run on a weekly recurring basis. We schedule around your availability — daytime, evening, or weekend options available.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl mb-4">✓</div>
              <h3 className="text-slate-50 font-semibold text-lg mb-3">Try Before You Commit</h3>
              <p className="text-slate-400 leading-relaxed">
                Drop in for a single class at RM 50. No commitment, no pressure. When you are ready, move to a monthly or intro pack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-slate-50 mb-4">Pricing</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Straightforward rates. No hidden fees. Private sessions available upon request.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 text-sm tracking-widest uppercase py-4 pr-8">Option</th>
                  <th className="text-left text-slate-400 text-sm tracking-widest uppercase py-4 pr-8">Rate</th>
                  <th className="text-left text-slate-400 text-sm tracking-widest uppercase py-4">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-5 pr-8">
                    <span className="text-slate-50 font-medium">Monthly Package</span>
                  </td>
                  <td className="py-5 pr-8">
                    <span className="font-serif text-2xl text-slate-50">{pricing.monthly.display}</span>
                    <span className="text-slate-500 text-sm ml-2">{pricing.monthly.period}</span>
                  </td>
                  <td className="py-5 text-slate-400">{pricing.monthly.note}</td>
                </tr>
                <tr>
                  <td className="py-5 pr-8">
                    <span className="text-slate-50 font-medium">Intro 4-Session Pack</span>
                  </td>
                  <td className="py-5 pr-8">
                    <span className="font-serif text-2xl text-slate-50">{pricing.introFourSession.display}</span>
                    <span className="text-slate-500 text-sm ml-2">{pricing.introFourSession.period}</span>
                  </td>
                  <td className="py-5 text-slate-400">{pricing.introFourSession.note}</td>
                </tr>
                <tr>
                  <td className="py-5 pr-8">
                    <span className="text-slate-50 font-medium">Drop-In</span>
                  </td>
                  <td className="py-5 pr-8">
                    <span className="font-serif text-2xl text-slate-50">{pricing.dropIn.display}</span>
                    <span className="text-slate-500 text-sm ml-2">{pricing.dropIn.period}</span>
                  </td>
                  <td className="py-5 text-slate-400">{pricing.dropIn.note}</td>
                </tr>
                <tr>
                  <td className="py-5 pr-8">
                    <span className="text-slate-50 font-medium">Private Session</span>
                  </td>
                  <td className="py-5 pr-8">
                    <span className="font-serif text-2xl text-slate-50">from {pricing.privateIndividual.display}</span>
                    <span className="text-slate-500 text-sm ml-2">{pricing.privateIndividual.period}</span>
                  </td>
                  <td className="py-5 text-slate-400">One-on-one or duo sessions — enquire for details</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ Preview ── */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-slate-50 mb-12">Common Questions</h2>

          <FaqAccordion faqs={demo.faqs} previewOnly />

          <div className="mt-8">
            <Link
              href={`/${demo.slug}/faq`}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              See all FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-slate-50 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Message us on WhatsApp — we will share the schedule, answer your questions, and help you find the right class.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium tracking-wide transition-all"
            >
              <WhatsAppIcon />
              Chat With Us on WhatsApp
            </a>
            <Link
              href="/classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-slate-50 tracking-wide transition-all"
            >
              Explore Other Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
