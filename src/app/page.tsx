"use client"

import { useState, useEffect, useRef } from "react"
import { IdentityGrid } from "@/components/identity-grid"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { UniversalBenefits } from "@/components/universal-benefits"
import { BeginnerReassurance } from "@/components/beginner-reassurance"
import { StudioPremises } from "@/components/studio-premises"
import { QuickAccessStrip } from "@/components/quick-access-strip"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { EditorialGuidance } from "@/components/editorial-guidance"
import { StudioRentals } from "@/components/studio-rentals"
import { getWhatsAppUrl } from "@/lib/config"

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [triggerPulse, setTriggerPulse] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const identities = [
    {
      id: "kids",
      title: "Kids",
      ageRange: "5-9",
      imageUrl: "/images/image.png",
      href: "/kids",
    },
    {
      id: "teens",
      title: "Teens",
      ageRange: "10-17",
      imageUrl: "/teenage-dancers-in-urban-dance-studio.jpg",
      href: "/teens",
    },
    {
      id: "young-adults",
      title: "Young Adults",
      ageRange: "18-30",
      imageUrl: "/young-adult-ballet-dancers-in-modern-studio.jpg",
      href: "/young-adults",
    },
    {
      id: "adults",
      title: "Adults",
      ageRange: "30-49",
      imageUrl: "/adults-dancing-contemporary-in-premium-studio.jpg",
      href: "/adults",
    },
    {
      id: "active-adults",
      title: "Active Adults",
      ageRange: "50+",
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
    // Trigger pulse after scroll starts
    setTimeout(() => {
      setTriggerPulse(true)
      // Reset for next trigger
      setTimeout(() => setTriggerPulse(false), 5200)
    }, 300)
  }

  const handleCheckAvailability = () => {
    // Open rentals page or modal
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
        <section id="hero-grid" className="h-screen relative flex flex-col">
          <div className="w-full py-6 md:py-8 bg-black/40 backdrop-blur-sm z-10 flex items-center justify-center">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tighter text-slate-50">
              DANCE CONNEXIONS
            </h1>
          </div>

          <EditorialGuidance />

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

        <BeginnerReassurance onCtaClick={scrollToTop} />

        <UniversalBenefits onCtaClick={scrollToTop} />

        <StudioPremises onCtaClick={scrollToTop} />

        <StudioRentals onCheckAvailabilityClick={handleCheckAvailability} onContactClick={handleContactRental} />

        <QuickAccessStrip />

        <Footer />
      </main>
    </>
  )
}
