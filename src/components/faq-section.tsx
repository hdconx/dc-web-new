"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQSectionProps {
  onCtaClick?: () => void
}

export function FAQSection({ onCtaClick }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is this suitable for absolute beginners?",
      answer:
        "Yes. Most of our students have never danced before. Our teaching method is designed specifically for people with zero experience, and our instructors are trained to work with nervous or uncertain beginners.",
    },
    {
      question: "How do you help people who feel nervous or unsure?",
      answer:
        "We start slowly, explain everything clearly, and never force performance or perfection. You learn at your own pace in a supportive, judgment-free environment. Feeling nervous is completely normal — we're experienced at helping people move through that.",
    },
    {
      question: "Is dance safe if I've never exercised much?",
      answer:
        "Absolutely. Dance is low-impact and adaptable. We teach proper technique to prevent injury and always encourage students to move within their comfort zone. Many of our students come from sedentary lifestyles and thrive.",
    },
    {
      question: "What makes your teaching approach different?",
      answer:
        "We prioritize clarity, patience, and progression over performance. You're not here to impress anyone — you're here to learn systematic movement in a calm, professional environment. Our instructors are trained to meet you where you are.",
    },
    {
      question: "Is this a welcoming community?",
      answer:
        "Yes. Our students range from shy beginners to confident movers, and everyone is here to grow. The culture is supportive, not competitive. You'll find people who understand what it feels like to start something new.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-50 text-center mb-12 tracking-tighter">
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-slate-200 font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={onCtaClick}
            className="inline-flex flex-col items-center gap-3 px-10 py-6 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-slate-50 hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <span className="text-xl font-medium">Start here</span>
            <span className="text-3xl">↑</span>
            <span className="text-slate-400 text-sm">Select your age group to explore classes</span>
          </button>
        </div>
      </div>
    </section>
  )
}
