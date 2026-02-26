"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { MoveRight, ChevronDown } from "lucide-react"
import { CONTACT } from "@/lib/config"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { IdentityGrid } from "@/components/identity-grid"
import { Footer } from "@/components/footer"

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

  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100")
            entry.target.classList.remove("translate-y-12", "opacity-0")
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const wa = CONTACT.whatsapp.url

  const identities = [
    {
      id: "kids",
      title: "Kids",
      ageRange: "5–12",
      imageUrl: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1000&auto=format&fit=crop",
      href: "/kids",
      caption: "Creative movement & fun technique · Beginner-friendly",
      whatsappUrl: wa("Hi! I'm interested in kids dance classes (age: __). Could you share details on available styles, schedules, and fees? Thank you."),
    },
    {
      id: "teens",
      title: "Teens",
      ageRange: "13–17",
      imageUrl: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1000&auto=format&fit=crop",
      href: "/teens",
      caption: "Street, contemporary & more · All levels welcome",
      whatsappUrl: wa("Hi! I'm interested in teen dance classes (age: __). Could you share available styles, schedules, and fees? Thank you."),
    },
    {
      id: "young-adults",
      title: "Young Adults",
      ageRange: "18–30",
      imageUrl: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=1000&auto=format&fit=crop",
      href: "/young-adults",
      caption: "Technique, performance & social dances",
      whatsappUrl: wa("Hi! I'm interested in dance classes for young adults. Could you share available styles, schedules, and fees? Thank you."),
    },
    {
      id: "adults",
      title: "Adults",
      ageRange: "30–49",
      imageUrl: "https://images.unsplash.com/photo-1536257321689-0b19b67bd0f2?q=80&w=1000&auto=format&fit=crop",
      href: "/adults",
      caption: "Fitness, expression & partner dances",
      whatsappUrl: wa("Hi! I'm interested in adult dance classes. Could you share available styles, schedules, and fees? Thank you."),
    },
    {
      id: "active-adults",
      title: "Active Adults",
      ageRange: "55+",
      imageUrl: "https://images.unsplash.com/photo-1516709886364-e461239c0919?q=80&w=1000&auto=format&fit=crop",
      href: "/active-adults",
      caption: "Low-impact movement · All abilities welcome",
      whatsappUrl: wa("Hi! I'm interested in dance classes for active adults (55+). Could you share available classes, schedules, and fees? Thank you."),
    },
    {
      id: "rentals",
      title: "Rentals",
      ageRange: "",
      imageUrl: "https://images.unsplash.com/photo-1598254826435-0816cf62eebc?q=80&w=1000&auto=format&fit=crop",
      href: "/rentals",
      caption: "4 professional studios · Flexible hourly hire",
      whatsappUrl: wa("Hi! I'm interested in renting a studio at Dance Connexions.\n\n- Preferred date:\n- Time slot:\n- Activity type:\n- Group size:\n\nCould you share availability and pricing? Thank you."),
    },
  ]

  // Feature Component for Demographic Vignettes
  const Vignette = ({
    title, subtitle, description, imageUrl, linkText, linkHref, isReversed, index
  }: {
    title: string, subtitle: string, description: string, imageUrl: string, linkText: string, linkHref: string, isReversed: boolean, index: number
  }) => (
    <div
      ref={(el) => { sectionRefs.current[index] = el; }}
      className={`py-20 md:py-32 px-6 flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 max-w-7xl mx-auto transform translate-y-12 opacity-0 transition-all duration-1000 ease-out`}
    >
      <div className="w-full md:w-1/2 relative">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-[2s] ease-out" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 flex items-center gap-4">
          <span className="w-8 h-px bg-white/20" /> {subtitle}
        </span>
        <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">{title}</h3>
        <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md font-light">
          {description}
        </p>
        <Link href={linkHref} className="group flex items-center gap-4 text-white text-xs font-bold uppercase tracking-widest hover:text-zinc-300 transition-colors">
          <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <MoveRight className="w-4 h-4" />
          </span>
          {linkText}
        </Link>
      </div>
    </div>
  )

  return (
    <>
      <Header onMenuClick={() => setShowMenu(true)} />
      <WhatsAppButton />

      {/* Mobile navigation overlay */}
      {showMenu && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl">
          <button
            onClick={() => setShowMenu(false)}
            className="absolute top-6 right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all z-10 text-white text-xl leading-none"
            aria-label="Close menu"
          >
            ✕
          </button>
          <IdentityGrid identities={identities} onClose={() => setShowMenu(false)} />
        </div>
      )}

      <main className="relative bg-[#050505] overflow-x-hidden text-zinc-300 font-sans selection:bg-white/20">

        {/* ── 4.1 HERO IDENTITY GRID (Smart Demographic Router) ── */}
        <section id="hero-grid" className="min-h-[100svh] relative flex flex-col pt-20 bg-black">
          <div className="flex-1 relative border-b border-white/10">
            <IdentityGrid identities={identities} />
          </div>
        </section>

        {/* ── 4.2 STICKY ACTION BAR ── */}
        <section className="sticky top-0 z-50 py-4 px-6 bg-[#050505]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/#hero-grid"
              className="group relative px-6 py-3 md:px-8 bg-white text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-zinc-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Find a Class</span>
            </Link>
            <Link
              href="/rentals"
              className="group relative px-6 py-3 md:px-8 border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Rent a Studio</span>
            </Link>
          </div>
        </section>

        {/* ── UNIVERSAL WELCOME (Philosophy grounded in reality) ── */}
        <section className="py-40 md:py-56 px-6 bg-black relative border-b border-white/5 flex items-center justify-center min-h-[70vh]">
          {/* Deep Cinematic Hero Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/rich_studio_bg_dark.png"
              alt="Dance Studio Atmosphere"
              className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity"
              onError={(e) => {
                // Fallback to unsplash if the local generated image fails
                e.currentTarget.src = "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=2500&auto=format&fit=crop";
              }}
            />
            {/* Rich vignette overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_100%)] opacity-90" />
          </div>

          <div
            ref={(el) => { sectionRefs.current[0] = el; }}
            className="relative z-10 max-w-4xl mx-auto text-center transform translate-y-12 opacity-0 transition-all duration-[1200ms] ease-out"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-[1.2] font-light drop-shadow-2xl">
              "This school has classes for people like me."
            </h2>
            <div className="w-16 h-px bg-white/30 mx-auto mb-12 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

            <div className="relative p-8 md:p-12 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl mx-auto">
              <p className="text-zinc-300 text-lg md:text-2xl font-light leading-relaxed mb-6">
                We believe dance is learned, not inherited. Everyone here started exactly where you are. We prioritize community over competition, and learning over performance.
              </p>
              <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed">
                Whether you are discovering rhythm at age five, seeking stress relief at forty, or booking a professional space for a showcase—you belong here.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE DEMOGRAPHIC VIGNETTES (Inclusion without alienation) ── */}
        <div className="divide-y divide-white/5 relative">

          <Vignette
            index={1}
            subtitle="Kids (Ages 5-12)"
            title="Safe, fun, and confidence-building."
            description="A nurturing environment where children discover movement. Coolness without pressure, focused on making friends, learning foundational techniques, and expressing themselves safely."
            imageUrl="/demo_kids_1772137747565.png"
            linkText="Explore Kids Classes"
            linkHref="/kids"
            isReversed={false}
          />

          <Vignette
            index={2}
            subtitle="Teens (Ages 13-17)"
            title="Express yourself. No judgment."
            description="From K-Pop to contemporary. A space to find your crew, learn the routines you watch online, and build serious skills in a confident, modern environment."
            imageUrl="/demo_teens_1772137765783.png"
            linkText="Explore Teen Classes"
            linkHref="/teens"
            isReversed={true}
          />

          <Vignette
            index={3}
            subtitle="Young Adults (Ages 18-30)"
            title="Fitness that feels like fun."
            description="Ditch the treadmill. Learn new skills, sweat it out, and find a community that lasts well past the final 8-count."
            imageUrl="/demo_young_adults_1772137781847.png"
            linkText="Explore Young Adult Classes"
            linkHref="/young-adults"
            isReversed={false}
          />

          <Vignette
            index={4}
            subtitle="Adults (Ages 30-50)"
            title="Stress relief that actually works."
            description="It is never too late to learn. Whether you're exploring Salsa and Bachata for date night, or using contemporary dance to decompress from the workday."
            imageUrl="/demo_adults_1772137801058.png"
            linkText="Explore Adult Classes"
            linkHref="/adults"
            isReversed={true}
          />

          <Vignette
            index={5}
            subtitle="Active Adults (Ages 50+)"
            title="Stay active, stay connected."
            description="Health, vitality, and friendship through gentle movement. Low-impact options designed specifically to protect joints while keeping you moving through life."
            imageUrl="/demo_seniors_1772137818769.png"
            linkText="Explore Active Adult Classes"
            linkHref="/active-adults"
            isReversed={false}
          />

          <Vignette
            index={6}
            subtitle="Studio Rentals"
            title="Professional space for your vision."
            description="Four purpose-built studios with Harlequin point-elastic floors, integrated audio, and flexible scheduling. Built by dancers, for instructors, creators, and event organizers."
            imageUrl="https://images.unsplash.com/photo-1598254826435-0816cf62eebc?q=80&w=1200&auto=format&fit=crop"
            linkText="View Studio Specifications"
            linkHref="/rentals"
            isReversed={true}
          />

        </div>

        {/* ── 4.3 FINAL CTA SECTION ── */}
        <section id="contact" className="py-32 md:py-48 px-6 bg-black border-t border-white/5 relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

          <div
            ref={(el) => { sectionRefs.current[7] = el; }}
            className="relative z-10 max-w-4xl mx-auto text-center transform translate-y-12 opacity-0 transition-all duration-1000 ease-out w-full"
          >
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-16 leading-[1.1] font-light">
              Ready to take the floor?
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-32 w-full max-w-2xl mx-auto">
              <a
                href={wa("Hi! I'm interested in joining a dance class at Dance Connexions. Could you help me select the right one?")}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-1/2 relative p-[1px] rounded-sm overflow-hidden bg-gradient-to-r from-zinc-500 via-white to-zinc-500 hover:from-white hover:via-white hover:to-white transition-all duration-500"
              >
                <div className="relative w-full h-full bg-black hover:bg-zinc-950 transition-colors duration-500 rounded-sm px-8 py-5 flex items-center justify-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white group-hover:fill-green-400 transition-colors duration-300" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Ask About Classes</span>
                </div>
              </a>

              <a
                href={wa("Hi! I'm interested in renting a studio at Dance Connexions. Could you share availability?")}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-1/2 relative p-[1px] rounded-sm overflow-hidden bg-white/20 hover:bg-white/50 transition-all duration-500"
              >
                <div className="relative w-full h-full bg-black group-hover:bg-zinc-950 transition-colors duration-500 rounded-sm px-8 py-5 flex items-center justify-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white group-hover:fill-green-400 transition-colors duration-300" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Book a Studio</span>
                </div>
              </a>
            </div>

            {/* Premium Accordion FAQs */}
            <div className="text-left mt-16 max-w-3xl mx-auto">
              <span className="text-zinc-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block text-center">Common Questions</span>
              <div className="divide-y divide-white/5 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {FAQS.map((faq: { q: string, a: string }, i: number) => (
                  <div key={i} className="group">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 px-8 text-left hover:bg-white/[0.02] transition-colors"
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-zinc-300 text-sm font-bold uppercase tracking-[0.1em] md:tracking-widest group-hover:text-white transition-colors">
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-500 flex-shrink-0 ml-4 ${openFaq === i ? "rotate-180 text-white" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="p-6 px-8 pt-0 text-zinc-400 text-sm font-light leading-relaxed">
                        <div className="w-8 h-px bg-white/20 mb-4" />
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
