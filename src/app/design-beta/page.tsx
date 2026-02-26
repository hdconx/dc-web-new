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

export default function DesignBeta() {
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

            <main className="relative bg-black overflow-x-hidden font-sans text-white">

                {/* ── Hero: Bold Swiss ── */}
                <section id="hero-grid" className="h-screen relative flex flex-col">
                    <div className="w-full pt-20 pb-10 md:pt-32 md:pb-16 bg-black z-10 flex flex-col items-center justify-center gap-1">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter text-white font-black uppercase leading-[0.8]">
                            DANCE CONNEXIONS
                        </h1>
                        <p className="text-zinc-500 text-[10px] md:text-sm tracking-[0.5em] uppercase font-bold mt-4">
                            Classes / Facilities
                        </p>
                    </div>

                    <div className="flex-1 relative">
                        <IdentityGrid identities={identities} />
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center opacity-40">
                            <ChevronDown className="w-5 h-5 text-white mx-auto" />
                        </div>
                    </div>
                </section>

                {/* ── Sticky Action Bar: Strong & Grounded ── */}
                <section className="sticky top-0 z-40 py-6 px-6 bg-zinc-900/95 backdrop-blur-xl border-b border-white/10">
                    <div className="max-w-7xl mx-auto flex items-center justify-center gap-8 md:gap-16">
                        <Link href="/#hero-grid" className="text-xs font-black uppercase tracking-tighter hover:text-zinc-400 transition-colors">Book a Class</Link>
                        <Link href="/rentals" className="text-xs font-black uppercase tracking-tighter hover:text-zinc-400 transition-colors">Rent a Studio</Link>
                    </div>
                </section>

                {/* ── Section: Purpose & Routing ── */}
                <section
                    ref={(el) => { sectionRefs.current[0] = el; }}
                    className="reveal-soft py-32 md:py-48 px-6 bg-black"
                >
                    <div className="max-w-4xl mx-auto text-left">
                        <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-16">
                            A serious place<br />for dance.
                        </h2>
                        <p className="text-zinc-500 text-xl font-medium leading-relaxed max-w-2xl border-l border-white/10 pl-10">
                            Dance Connexions provides the environment for focused practice. Whether you are entering a classroom for the first time or hiring a technical facility for rehearsal, we prioritise clarity, professional standards, and safety.
                        </p>
                    </div>
                </section>

                {/* ── Section: Dual Visibility ── */}
                <section
                    ref={(el) => { sectionRefs.current[1] = el; }}
                    className="reveal-soft py-2 px-6 bg-zinc-900"
                >
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="bg-black p-12 md:p-24">
                            <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Classes</h3>
                            <p className="text-zinc-500 text-lg leading-relaxed mb-12">
                                Programmes for age 5 to 55+. From beginners to returning dancers. We provide the structure; you provide the presence.
                            </p>
                            <Link href="/#hero-grid" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest bg-white text-black px-10 py-5 hover:bg-zinc-200 transition-colors">
                                Select Group <MoveRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="bg-black p-12 md:p-24">
                            <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Rentals</h3>
                            <p className="text-zinc-500 text-lg leading-relaxed mb-12">
                                4 high-spec studios. Harlequin floors. Integrated sound and light. Designed for teachers, creators, and rehearsals.
                            </p>
                            <Link href="/rentals" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest border border-white/20 text-white px-10 py-5 hover:bg-white/5 transition-colors">
                                View Specs <MoveRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── Section: Specs ── */}
                <section
                    ref={(el) => { sectionRefs.current[2] = el; }}
                    className="reveal-soft py-32 md:py-48 px-6"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-16">Facility<br />Standards.</h2>
                                <div className="space-y-12">
                                    {[
                                        { title: "Point-of-contact support", desc: "On-site staff available Monday to Saturday (10am–7pm) for access and enquiries." },
                                        { title: "Harlequin floors", desc: "Professional sprung floors installed throughout to protect joint health and performance quality." },
                                        { title: "Technical Integration", desc: "Every studio features dedicated high-spec audio and flexible lighting systems." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-10">
                                            <span className="text-zinc-800 text-5xl font-black leading-none">{i + 1}</span>
                                            <div>
                                                <h4 className="text-white font-black uppercase tracking-tight text-lg mb-2">{item.title}</h4>
                                                <p className="text-zinc-500 text-base leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-square md:aspect-auto bg-zinc-900 ring-1 ring-white/10">
                                <Image src="/professional-dance-studio-interior-cinematic-light.jpg" alt="Studio Interior" fill className="object-cover opacity-80grayscale" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Final CTA ── */}
                <section id="contact" className="py-32 md:py-48 px-6 bg-zinc-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.8] tracking-tighter uppercase mb-16">Take the Floor.</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <a href={wa("Hi! I'm interested in classes.")} className="w-full md:w-auto px-16 py-8 bg-white text-black font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform">Inquire about classes</a>
                            <a href={wa("Hi! I'm interested in rentals.")} className="w-full md:w-auto px-16 py-8 border-2 border-white text-white font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-colors">Book a Studio</a>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
