"use client"

import { useState } from "react"
import { IdentityGrid } from "@/components/identity-grid"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { ChevronDown, MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/config"
import Link from "next/link"
import Image from "next/image"

const FAQS = [
  {
    q: "Do I need any dance experience?",
    a: "Not at all. Every class is structured to welcome complete beginners. We start from the ground up — no steps assumed, no prior experience required.",
  },
  {
    q: "What age groups do you teach?",
    a: "Five groups: Kids (5–12), Teens (13–17), Young Adults (18–30), Adults (30–49), and Active Adults (55+). Each group has its own class structure, pace, and style selection.",
  },
  {
    q: "Do I need to bring a dance partner?",
    a: "No. We pair students as needed. Many people join solo and enjoy the experience more than they expected.",
  },
  {
    q: "Can I try a class before committing?",
    a: "Yes. Message us on WhatsApp and we will arrange a trial session. We keep it simple and pressure-free.",
  },
  {
    q: "What should I wear to class?",
    a: "Comfortable clothing you can move freely in. Bring clean indoor shoes or dance shoes — outdoor footwear is not permitted on the dance floor.",
  },
  {
    q: "How do I book a studio for rental?",
    a: "Message us on WhatsApp with your preferred date, time, activity type, and group size. We will confirm availability and provide pricing from there.",
  },
  {
    q: "When are the studios available?",
    a: "Flexible hours from 6 am to midnight, seven days a week, subject to availability. Walk-in enquiries and administration are available Monday to Saturday, 10 am–7 pm.",
  },
  {
    q: "How quickly do you reply on WhatsApp?",
    a: "Same day during business hours (Mon–Sat, 10 am–7 pm). We aim to respond promptly to every enquiry.",
  },
]

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const wa = CONTACT.whatsapp.url

  const identities = [
    {
      id: "kids",
      title: "Kids",
      ageRange: "5–12",
      imageUrl: "/images/image.png",
      href: "/kids",
      caption: "Creative movement & fun technique · Beginner-friendly",
      whatsappUrl: wa(
        "Hi! I'm interested in kids dance classes (age: __). Could you share details on available styles, schedules, and fees? Thank you."
      ),
    },
    {
      id: "teens",
      title: "Teens",
      ageRange: "13–17",
      imageUrl: "/teenage-dancers-in-urban-dance-studio.jpg",
      href: "/teens",
      caption: "Street, contemporary & more · All levels welcome",
      whatsappUrl: wa(
        "Hi! I'm interested in teen dance classes (age: __). Could you share available styles, schedules, and fees? Thank you."
      ),
    },
    {
      id: "young-adults",
      title: "Young Adults",
      ageRange: "18–30",
      imageUrl: "/young-adult-ballet-dancers-in-modern-studio.jpg",
      href: "/young-adults",
      caption: "Technique, performance & social dances",
      whatsappUrl: wa(
        "Hi! I'm interested in dance classes for young adults. Could you share available styles, schedules, and fees? Thank you."
      ),
    },
    {
      id: "adults",
      title: "Adults",
      ageRange: "30–49",
      imageUrl: "/adults-dancing-contemporary-in-premium-studio.jpg",
      href: "/adults",
      caption: "Fitness, expression & partner dances",
      whatsappUrl: wa(
        "Hi! I'm interested in adult dance classes. Could you share available styles, schedules, and fees? Thank you."
      ),
    },
    {
      id: "active-adults",
      title: "Active Adults",
      ageRange: "55+",
      imageUrl: "/mature-adults-dancing-gracefully-in-elegant-studio.jpg",
      href: "/active-adults",
      caption: "Low-impact movement · All abilities welcome",
      whatsappUrl: wa(
        "Hi! I'm interested in dance classes for active adults (55+). Could you share available classes, schedules, and fees? Thank you."
      ),
    },
    {
      id: "rentals",
      title: "Rentals",
      ageRange: "",
      imageUrl: "/professional-dance-studio-interior-cinematic-light.jpg",
      href: "/rentals",
      caption: "4 professional studios · Flexible hourly hire",
      whatsappUrl: wa(
        "Hi! I'm interested in renting a studio at Dance Connexions.\n\n- Preferred date:\n- Time slot:\n- Activity type:\n- Group size:\n\nCould you share availability and pricing? Thank you."
      ),
    },
  ]

  return (
    <>
      <Header onMenuClick={() => setShowMenu(true)} />
      <WhatsAppButton />

      {/* Mobile navigation overlay */}
      {showMenu && (
        <div className="fixed inset-0 z-[100] bg-black">
          <button
            onClick={() => setShowMenu(false)}
            className="absolute top-6 right-6 p-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all z-10 text-white text-lg leading-none"
            aria-label="Close menu"
          >
            ✕
          </button>
          <IdentityGrid identities={identities} onClose={() => setShowMenu(false)} />
        </div>
      )}

      <main className="relative bg-zinc-950">

        {/* ── Hero: Identity Grid ── */}
        <section id="hero-grid" className="h-screen relative flex flex-col">

          {/* Studio name bar — overlays the top of the grid */}
          <div className="w-full pt-20 pb-5 md:pt-24 md:pb-7 bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-1.5">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tighter text-slate-50">
              DANCE CONNEXIONS
            </h1>
            <p className="text-slate-400 text-[10px] md:text-xs tracking-[0.25em] uppercase">
              Movement for every age. Space for every vision.
            </p>
          </div>

          {/* Grid tiles */}
          <div className="flex-1 relative">
            <IdentityGrid identities={identities} />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center animate-bounce pointer-events-none">
              <p className="text-[10px] tracking-[0.3em] text-slate-400 font-light mb-2">SCROLL TO EXPLORE</p>
              <ChevronDown className="w-5 h-5 text-slate-400 mx-auto" />
            </div>
          </div>

        </section>

        {/* ── Quick Choice Bar ── */}
        <section className="sticky top-0 z-30 py-3.5 px-6 bg-zinc-900/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
            <span className="text-slate-600 text-xs tracking-[0.2em] uppercase hidden sm:block">
              I want to&nbsp;—
            </span>
            <Link
              href="/#hero-grid"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              Find a Class
            </Link>
            <Link
              href="/rentals"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/30 text-slate-50 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Rent a Studio
            </Link>
          </div>
        </section>

        {/* ── Emotional Flow: Opening moments ── */}
        <section className="bg-black pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-5xl mx-auto px-6">

            {/* Moment 1 — left-anchored, dominant opener */}
            <div className="max-w-xl">
              <p className="font-serif text-4xl md:text-5xl text-slate-50 tracking-tight leading-tight">
                Dance is a skill.
              </p>
              <p className="mt-3 text-slate-500 text-xl leading-relaxed">
                It's learned, not inherited.
              </p>
            </div>

            {/* Moment 2 — right-anchored, quieter */}
            <div className="max-w-xs ml-auto text-right mt-20 md:mt-28">
              <p className="text-slate-300 text-lg leading-relaxed">
                Good teaching removes fear.
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                What's left is movement.
              </p>
            </div>

          </div>
        </section>

        {/* Image interrupt — full bleed, no caption, no label */}
        <div className="relative h-[280px] md:h-[400px] overflow-hidden">
          <Image
            src="/adults-dancing-contemporary-in-premium-studio.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* ── Emotional Flow: Middle and closing moments ── */}
        <section className="bg-black pt-16 pb-10 md:pt-24 md:pb-16">
          <div className="max-w-5xl mx-auto px-6">

            {/* Moment 3 — left, confidence */}
            <div className="max-w-md">
              <p className="text-slate-300 text-xl md:text-2xl leading-snug">
                Confidence isn't performed.
              </p>
              <p className="text-slate-500 text-lg md:text-xl leading-snug">
                It's practiced.
              </p>
            </div>

            {/* Moment 4 — center, community, large serif */}
            <div className="text-center mt-20 md:mt-28">
              <p className="font-serif text-3xl md:text-4xl text-slate-50 tracking-tight leading-snug">
                Some come alone.<br />
                No one feels that way for long.
              </p>
            </div>

            {/* Moment 5 — right, stress relief */}
            <div className="max-w-xs ml-auto text-right mt-20 md:mt-28">
              <p className="text-slate-400 text-lg leading-relaxed">
                For an hour, the rest of the day can wait.
              </p>
            </div>

            {/* Moment 6 — left, social rhythm */}
            <div className="max-w-md mt-14 md:mt-20">
              <p className="text-slate-400 text-lg leading-relaxed">
                Over time, dance becomes part of your life — not an event.
              </p>
            </div>

          </div>
        </section>

        {/* Final anchor — alone, maximum breathing room */}
        <section className="bg-black pt-16 pb-32 md:pt-24 md:pb-48 px-6">
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-50 tracking-tight leading-snug text-center max-w-2xl mx-auto">
            Everyone here started exactly where you are.
          </p>
        </section>

        {/* ── Final CTA ── */}
        <section id="contact" className="py-24 md:py-32 px-6 bg-zinc-950 border-t border-white/10">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-50 tracking-tight leading-tight mb-4">
              Ready to take<br />the floor?
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-10">
              One message is all it takes. We will handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={wa(
                  "Hi! I'm interested in joining a dance class at Dance Connexions. Could you share details on classes, schedules, and fees? Thank you."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                Ask about classes
              </a>
              <a
                href={wa(
                  "Hi! I'm interested in renting a studio at Dance Connexions. Could you share availability and pricing? Thank you."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-white/30 text-slate-50 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                Ask about a studio
              </a>
            </div>
            <p className="text-slate-700 text-xs tracking-wider">
              We reply same day &nbsp;·&nbsp; Mon–Sat, 10 am–7 pm
            </p>
          </div>
        </section>

        {/* ── Getting Started — practical steps, after emotional journey ── */}
        <section className="py-16 md:py-24 px-6 bg-black border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-600 text-xs tracking-[0.3em] uppercase text-center mb-14">
              Getting started
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {[
                {
                  step: "01",
                  title: "Choose your path",
                  desc: "Pick your age group for classes, or explore our four studios for hire. The grid at the top is your starting point.",
                },
                {
                  step: "02",
                  title: "Message us on WhatsApp",
                  desc: "Tell us what you are looking for. We will recommend the right class or studio and answer any questions.",
                },
                {
                  step: "03",
                  title: "Show up and move",
                  desc: "Your first class or your first session on the floor. No experience needed. No judgment. Just movement.",
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-4">
                  <span className="font-serif text-5xl text-white/10 tracking-tighter leading-none">
                    {item.step}
                  </span>
                  <h3 className="text-slate-50 font-semibold text-base tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="py-16 md:py-24 px-6 bg-zinc-950">
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-600 text-xs tracking-[0.3em] uppercase text-center mb-14">
              Common questions
            </p>
            <div className="divide-y divide-white/10">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-slate-50 text-sm font-medium group-hover:text-white transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="pb-5 text-slate-400 text-sm leading-relaxed pr-10">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <Footer />

      </main>
    </>
  )
}
