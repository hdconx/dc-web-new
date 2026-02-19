import Link from "next/link"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/config"

export default function Direction1() {
  const wa = CONTACT.whatsapp.url

  return (
    <main className="bg-zinc-950">

      {/* Preview banner */}
      <div className="bg-zinc-900 py-3 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/preview" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
            ← All directions
          </Link>
          <p className="text-zinc-400 text-xs tracking-wider">Direction 1 — The Two-Speed Page</p>
          <div className="w-28" />
        </div>
      </div>

      {/* Context placeholder — represents hero above */}
      <div className="py-6 px-6 bg-zinc-900/40 border-b border-white/5">
        <p className="text-center text-zinc-700 text-xs tracking-[0.25em] uppercase">
          ↑ Header · Hero Identity Grid (6 tiles) · your entry point is above
        </p>
      </div>

      {/* Quick Choice Bar — sticky */}
      <div className="sticky top-0 z-30 py-3.5 px-6 bg-zinc-900/95 backdrop-blur-md border-b border-white/10">
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
      </div>

      {/* ─────────────────────────────────────────
          CONTENT SECTION STARTS HERE
      ───────────────────────────────────────── */}

      {/* Moment 1 — Fork: immediate relevance check */}
      <section className="pt-24 pb-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-600 text-sm tracking-wide mb-12">
            This space is used for different purposes.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-20">
            <Link
              href="/#hero-grid"
              className="group flex items-center gap-3 text-slate-50 text-xl font-light border-b border-white/15 pb-3 hover:border-white/50 transition-colors w-fit"
            >
              Teaching &amp; Classes
              <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
            </Link>
            <Link
              href="/rentals"
              className="group flex items-center gap-3 text-slate-50 text-xl font-light border-b border-white/15 pb-3 hover:border-white/50 transition-colors w-fit"
            >
              Studio Rentals
              <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Moment 2 — Belief + evidence pairs */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-2xl mx-auto space-y-16 md:space-y-20">

          <div>
            <p className="font-serif text-3xl md:text-4xl text-slate-50 tracking-tight leading-snug">
              Dance is a skill.
            </p>
            <p className="mt-3 text-slate-500 text-base leading-relaxed max-w-sm">
              It&apos;s built through instruction, repetition, and time — not talent.
            </p>
          </div>

          <div className="ml-auto max-w-sm text-right">
            <p className="font-serif text-2xl md:text-3xl text-slate-50 tracking-tight leading-snug">
              No experience needed.
            </p>
            <p className="mt-3 text-slate-500 text-base leading-relaxed">
              Classes are structured to start from nothing. That is the design, not an exception.
            </p>
          </div>

          <div>
            <p className="font-serif text-2xl md:text-3xl text-slate-50 tracking-tight leading-snug">
              No partner required.
            </p>
            <p className="mt-3 text-slate-500 text-base leading-relaxed max-w-sm">
              Students are paired as needed. Many people join alone.
            </p>
          </div>

        </div>
      </section>

      {/* Moment 3 — Social reality */}
      <section className="pt-8 pb-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xs mb-20">
            <p className="text-slate-300 text-xl leading-relaxed">Some arrive alone.</p>
            <p className="text-slate-500 text-xl leading-relaxed">Classes don&apos;t stay that way.</p>
          </div>

          {/* Demographic routing — for people who missed or skipped the identity grid */}
          <div>
            <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-5">Find your group</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              {[
                { label: "Kids (5–12)", href: "/kids" },
                { label: "Teens (13–17)", href: "/teens" },
                { label: "Young Adults (18–30)", href: "/young-adults" },
                { label: "Adults (30–49)", href: "/adults" },
                { label: "Active Adults (55+)", href: "/active-adults" },
              ].map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="text-slate-500 text-sm hover:text-white transition-colors"
                >
                  {g.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Moment 4 — Image interrupt: visual breathing space */}
      <div className="relative h-[280px] md:h-[420px] overflow-hidden">
        <Image
          src="/adults-dancing-contemporary-in-premium-studio.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Moment 5 — Studio credibility: recaptures renters who kept scrolling */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-sm mb-10">
            <p className="text-slate-50 text-2xl font-light tracking-tight">Four studios.</p>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Different sizes, different configurations. Sprung floors. Good acoustics.
              Available from 6 am to midnight, seven days a week.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            <div className="relative h-44 overflow-hidden">
              <Image
                src="/professional-dance-studio-interior-cinematic-light.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="relative h-44 overflow-hidden">
              <Image
                src="/young-adult-ballet-dancers-in-modern-studio.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="relative h-44 overflow-hidden hidden md:block">
              <Image
                src="/mature-adults-dancing-gracefully-in-elegant-studio.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          <Link href="/rentals" className="text-slate-500 text-sm hover:text-white transition-colors">
            View studio details →
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CONTENT SECTION ENDS HERE
      ───────────────────────────────────────── */}

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6 bg-zinc-950 border-t border-white/10">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-50 tracking-tight leading-tight mb-4">
            Ready to take<br />the floor?
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-10">
            One message is all it takes. We will handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={wa("Hi! I'm interested in joining a dance class at Dance Connexions. Could you share details on classes, schedules, and fees? Thank you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              Ask about classes
            </a>
            <a
              href={wa("Hi! I'm interested in renting a studio at Dance Connexions. Could you share availability and pricing? Thank you.")}
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

    </main>
  )
}
