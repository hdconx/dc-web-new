"use client"

import { useState, useEffect, useRef } from "react"
import { IdentityGrid } from "@/components/identity-grid"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { ChevronDown, MoveRight } from "lucide-react"
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

export default function DesignAlpha() {
    const [showMenu, setShowMenu] = useState(false)
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const sectionRefs = useRef<(HTMLElement | null)[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active")
                    }
                });
            },
            { threshold: 0.1 }
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

            <main className="relative bg-[#0a0a0b] overflow-x-hidden font-sans text-zinc-400">

                {/* ── Hero: Minimalist ── */}
                <section id="hero-grid" className="h-screen relative flex flex-col">
                    <div className="w-full pt-20 pb-8 md:pt-28 md:pb-12 bg-[#050505] z-10 flex flex-col items-center justify-center gap-2 border-b border-white/[0.03]">
                        <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl tracking-widest text-[#e8e8e3] font-light uppercase">
                            DANCE CONNEXIONS
                        </h1>
                        <p className="text-zinc-600 text-[9px] md:text-[10px] tracking-[0.5em] uppercase font-medium">
                            Classes & Professional Facility
                        </p>
                    </div>

                    <div className="flex-1 relative">
                        <IdentityGrid identities={identities} />
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-20 hover:opacity-100 transition-opacity">
                            <ChevronDown className="w-4 h-4 text-zinc-400 animate-pulse" />
                        </div>
                    </div>
                </section>

                {/* ── Sticky Action Bar: Neutral & Fine ── */}
                <section className="sticky top-0 z-40 py-5 bg-[#050505]/90 backdrop-blur-2xl border-b border-white/[0.03]">
                    <div className="max-w-7xl mx-auto flex items-center justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                        <Link href="/#hero-grid" className="hover:text-[#e8e8e3] transition-colors">Find a Class</Link>
                        <div className="w-px h-3 bg-white/10" />
                        <Link href="/rentals" className="hover:text-[#e8e8e3] transition-colors">Rent a Studio</Link>
                    </div>
                </section>

                {/* ── Introduction: Architectural ── */}
                <section
                    ref={(el) => { sectionRefs.current[0] = el; }}
                    className="reveal-soft py-40 md:py-60 px-6"
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-serif text-[#e8e8e3] leading-[1.3] mb-16 font-light">
                            Built for the practice of dance.
                        </h2>
                        <div className="w-12 h-px bg-white/20 mx-auto mb-16" />
                        <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto italic">
                            From the technical requirements of high-spec studios to the foundational needs of a first class, our facility is designed for clarity and focus.
                        </p>
                    </div>
                </section>

                {/* ── Dual Path: Balanced Symmetrics ── */}
                <section
                    ref={(el) => { sectionRefs.current[1] = el; }}
                    className="reveal-soft py-24 px-6 border-y border-white/[0.03]"
                >
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-zinc-600 mb-10">01</div>
                            <h3 className="text-2xl font-serif text-[#e8e8e3] mb-8 font-light">Movement Classes</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-12 max-w-sm">
                                Structured programs for all stages. From age 5 up to seniors. We remove the barriers of fear and experience through professional teaching.
                            </p>
                            <Link href="/#hero-grid" className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest pb-1 border-b border-white/10 hover:border-white transition-all">
                                Browse Groups
                            </Link>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-zinc-600 mb-10">02</div>
                            <h3 className="text-2xl font-serif text-[#e8e8e3] mb-8 font-light">Studio Rentals</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-12 max-w-sm">
                                Four professional environments for hourly hire. Optimized for rehearsal, technical training, and content creation for high-end results.
                            </p>
                            <Link href="/rentals" className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest pb-1 border-b border-white/10 hover:border-white transition-all">
                                View Facility
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── Professional Trust: Studio Focus ── */}
                <section
                    ref={(el) => { sectionRefs.current[2] = el; }}
                    className="reveal-soft py-40 md:py-60 px-6"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                            <div className="relative aspect-[4/5] bg-zinc-900 border border-white/[0.05]">
                                <Image
                                    src="/professional-dance-studio-interior-cinematic-light.jpg"
                                    alt="Studio Spec"
                                    fill
                                    className="object-cover opacity-60"
                                />
                            </div>
                            <div className="max-w-lg">
                                <h2 className="text-3xl md:text-4xl font-serif text-[#e8e8e3] mb-16 font-light leading-tight">Professional certainty in every room.</h2>
                                <div className="space-y-16">
                                    {[
                                        { title: "Harlequin floors", desc: "The global standard for professional dance, ensuring joint safety and perfect grip." },
                                        { title: "Technical Infrastructure", desc: "Studio-grade audio and flexible lighting systems built into every studio space." },
                                        { title: "On-site support", desc: "Assistance available Monday to Saturday for access and operational needs." }
                                    ].map((item, i) => (
                                        <div key={i} className="group">
                                            <h4 className="text-[#e8e8e3] font-bold uppercase tracking-[0.3em] text-[9px] mb-4 opacity-40 group-hover:opacity-100 transition-opacity">{item.title}</h4>
                                            <p className="text-zinc-500 text-base leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Finality: High Conversion ── */}
                <section id="contact" className="py-40 md:py-60 px-6 bg-[#050505]">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-serif text-[#e8e8e3] mb-16 font-light">Are you ready to take the floor?</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                            <a href={wa("Hi! I'm interested in classes.")} className="text-zinc-400 text-xs font-bold uppercase tracking-[0.4em] hover:text-white transition-colors">Ask about classes</a>
                            <div className="hidden sm:block w-px h-6 bg-white/10" />
                            <a href={wa("Hi! I'm interested in rentals.")} className="text-zinc-400 text-xs font-bold uppercase tracking-[0.4em] hover:text-white transition-colors">Ask about a studio</a>
                        </div>
                    </div>
                </section>

                {/* ── Simple FAQ ── */}
                <section className="py-24 px-6 border-t border-white/[0.03]">
                    <div className="max-w-lg mx-auto divide-y divide-white/[0.03]">
                        {FAQS.slice(0, 4).map((faq, i) => (
                            <div key={i} className="py-10">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between text-left group"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                        {faq.q}
                                    </span>
                                </button>
                                {openFaq === i && (
                                    <p className="mt-8 text-zinc-600 text-sm leading-relaxed font-light italic">
                                        {faq.a}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
