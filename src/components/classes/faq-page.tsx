"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useState } from "react"
import { CONTACT } from "@/lib/config"

interface Faq {
  question: string
  answer: string
}

interface FaqPageProps {
  demoName: string
  demoAgeRange: string
  demoSlug: string
  whatsappMessage: string
  faqs: Faq[]
}

export function FaqPage({ demoName, demoAgeRange, demoSlug, whatsappMessage, faqs }: FaqPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const waUrl = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <main className="min-h-screen bg-black">

      {/* Breadcrumb */}
      <div className="bg-zinc-950 border-b border-white/10">
        <div className="px-8 md:px-16 lg:px-24 py-4 flex items-center gap-3 text-sm text-slate-400">
          <Link href="/classes" className="hover:text-slate-200 transition-colors">All Programs</Link>
          <span>/</span>
          <Link href={`/${demoSlug}`} className="hover:text-slate-200 transition-colors">{demoName}</Link>
          <span>/</span>
          <span className="text-slate-200">FAQ</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-3xl">
          <p className="text-slate-500 text-sm tracking-widest uppercase mb-4">{demoAgeRange}</p>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-slate-50 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-400 text-lg">
            Questions about {demoName.toLowerCase()} dance classes at Dance Connexions.
            Can&apos;t find your answer? Message us directly.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-slate-200 font-medium pr-4 text-lg">{faq.question}</span>
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
      </section>

      {/* Still have questions */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-slate-50 mb-4">Still Have Questions?</h2>
          <p className="text-slate-400 mb-8">
            WhatsApp us directly — we are happy to answer anything, from class schedules to what to wear on your first day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium tracking-wide transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Ask Us on WhatsApp
            </a>
            <Link
              href={`/${demoSlug}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-slate-50 tracking-wide transition-all"
            >
              Back to {demoName}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
