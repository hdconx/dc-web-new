"use client"

import { useState, useEffect, useRef } from "react"
import { IdentityGrid } from "@/components/identity-grid"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BeginnerReassurance } from "@/components/beginner-reassurance"
import { StudioPremises } from "@/components/studio-premises"
import { QuickAccessStrip } from "@/components/quick-access-strip"
import { Footer } from "@/components/footer"
import { ChevronDown, User } from "lucide-react"
import { StudioRentals } from "@/components/studio-rentals"
import { getWhatsAppUrl } from "@/lib/config"
import Link from "next/link"

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [triggerPulse, setTriggerPulse] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const identities = [
    {
      id: "kids",
      title: "Kids",
      ageRange: "5–12",
      imageUrl: "/images/image.png",
      href: "/kids",
    },
    {
      id: "teens",
      title: "Teens",
      ageRange: "13–17",
      imageUrl: "/teenage-dancers-in-urban-dance-studio.jpg",
      href: "/teens",
    },
    {
      id: "young-adults",
      title: "Young Adults",
      ageRange: "18–30",
      imageUrl: "/young-adult-ballet-dancers-in-modern-studio.jpg",
      href: "/young-adults",
    },
    {
      id: "adults",
      title: "Adults",
      ageRange: "30–49",
      imageUrl: "/adults-dancing-contemporary-in-premium-studio.jpg",
      href: "/adults",
    },
    {
      id: "active-adults",
      title: "Active Adults",
      ageRange: "55+",
      imageUrl: "/mature-adults-dancing-gracefully-in-elegant-studio.jpg",
      href: "/active-adults",
    },
    {
      id: "rentals",
      title: "Rentals",
      ageRange: "",
      imageUrl: "/professional-dance-studio-interior-cinematic-light.jpg",
      href: "/rentals",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setTimeout(() => {
      setTriggerPulse(true)
      setTimeout(() => setTriggerPulse(false), 5200)
    }, 300)
  }

  const handleCheckAvailability = () => {
    window.location.href = "/rentals"
  }

  const handleContactRental = () => {
    window.open(getWhatsAppUrl("rentalInterest"), "_blank")
  }

  return (
    <>
      <Header onMenuClick={() => setShowMenu(true)} isVisible={isScrolled} />
      <WhatsAppButton />

      {showMenu && (
        <div className="fixed inset-0 z-[100] bg-black">
          <button
            onClick={() => setShowMenu(false)}
            className="absolute top-6 right-6 p-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all z-10"
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

          {/* Studio name bar */}
          <div className="w-full py-6 md:py-8 bg-black/40 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-1">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tighter text-slate-50">
              DANCE CONNEXIONS
            </h1>
            <p className="text-slate-400 text-xs md:text-sm tracking-[0.25em] uppercase">
              Dance Classes · Studio Rentals · Bandar Sunway
            </p>
          </div>

          {/* Guidance */}
          <div className="w-full py-3 bg-transparent z-10 flex items-center justify-center">
            <p className="text-slate-300 text-xs md:text-sm font-light tracking-tight text-center px-6">
              Choose the group that best represents you — or explore our studios for hire
            </p>
          </div>

          {/* Tiles */}
          <div className="flex-1 relative">
            <IdentityGrid
              identities={identities}
              showCloseButton={false}
              pulseRef={gridRef}
              triggerPulse={triggerPulse}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center animate-bounce">
              <p className="text-[10px] tracking-[0.3em] text-slate-400 font-light mb-2">SCROLL TO EXPLORE</p>
              <ChevronDown className="w-5 h-5 text-slate-400 mx-auto" />
            </div>
          </div>

        </section>

        {/* ── Why Dance Connexions ── */}
        {/* Alternating editorial rows: image / text, text / image */}

        {/* Row 1 — Image LEFT, Text RIGHT */}
        <section className="bg-black py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/diverse-people-feeling-healthy-through-movement.jpg"
                  alt="Physical wellbeing through dance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2 space-y-4">
              <p className="text-xs font-semibold text-slate-500 tracking-[0.25em] uppercase">Wellbeing</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-50 tracking-tight leading-tight">
                Move better.<br />Feel better.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Dance is full-body exercise that never feels like a workout. Improved strength,
                flexibility, and cardiovascular health — as a side effect of genuinely enjoying yourself.
              </p>
            </div>
          </div>
        </section>

        {/* Row 2 — Text LEFT, Image RIGHT */}
        <section className="bg-zinc-950 py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <p className="text-xs font-semibold text-slate-500 tracking-[0.25em] uppercase">Community</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-50 tracking-tight leading-tight">
                People worth<br />knowing.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Dance class is where friendships form naturally. A shared experience, a warm atmosphere,
                and people of all backgrounds finding common ground through movement.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/friends-laughing-together-in-community.jpg"
                  alt="Community and connection through dance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Row 3 — Image LEFT, Text RIGHT */}
        <section className="bg-black py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/adults-dancing-contemporary-in-premium-studio.jpg"
                  alt="Express yourself through dance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2 space-y-4">
              <p className="text-xs font-semibold text-slate-500 tracking-[0.25em] uppercase">Expression</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-50 tracking-tight leading-tight">
                Express yourself<br />freely.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                No competition. No pressure to perform. Just the joy of learning to move with intention —
                and the quiet confidence that comes with it.
              </p>
            </div>
          </div>
        </section>

        {/* ── Beginner Welcome ── */}
        <BeginnerReassurance onCtaClick={scrollToTop} />

        {/* ── The Studio ── */}
        <StudioPremises onCtaClick={scrollToTop} />

        {/* ── Studio Rentals ── */}
        <StudioRentals onCheckAvailabilityClick={handleCheckAvailability} onContactClick={handleContactRental} />

        {/* ── Student / Renter Portal Strip ── */}
        <section className="py-10 px-6 bg-zinc-900 border-t border-white/10">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-slate-50 font-semibold text-lg">Students &amp; Renters</p>
              <p className="text-slate-400 text-sm mt-1">
                Manage your bookings, class schedule, and invoices — coming soon.
              </p>
            </div>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-slate-50 text-sm font-medium transition-all flex-shrink-0"
            >
              <User className="w-4 h-4" />
              Access My Portal
            </Link>
          </div>
        </section>

        {/* ── Quick Links ── */}
        <QuickAccessStrip />

        {/* ── Footer ── */}
        <Footer />

      </main>
    </>
  )
}
