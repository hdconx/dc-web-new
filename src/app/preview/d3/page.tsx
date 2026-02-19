import Link from "next/link"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/config"

export default function Direction3() {
  const wa = CONTACT.whatsapp.url

  return (
    <main className="bg-zinc-950">

      {/* Preview banner */}
      <div className="bg-zinc-900 py-3 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/preview" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
            ← All directions
          </Link>
          <p className="text-zinc-400 text-xs tracking-wider">Direction 3 — The Journey Without Labels</p>
          <div className="w-28" />
        </div>
      </div>

      {/* Context placeholder */}
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

      {/* Moment 1 — Arrival: no explanation, no framing */}
      <section className="pt-32 pb-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <p className="text-slate-400 text-xl md:text-2xl font-light">
            People come here for different reasons.
          </p>
        </div>
      </section>

      {/* Moment 2 — Early stage: fragments of why people arrive */}
      <section className="pb-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-5 max-w-xs">
            <p className="text-slate-500 text-lg font-light">Curiosity.</p>
            <p className="text-slate-500 text-lg font-light">Restlessness.</p>
            <p className="text-slate-500 text-lg font-light">Returning after time away.</p>
            <p className="text-slate-500 text-lg font-light">Trying something again.</p>
            <p className="text-slate-500 text-lg font-light">Finding a space to teach.</p>
            <p className="text-slate-500 text-lg font-light">A reason to move.</p>
          </div>
        </div>
      </section>

      {/* Moment 3 — Middle stage: something shifts */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="ml-auto max-w-lg space-y-8 text-right">
            <p className="text-slate-200 text-2xl md:text-3xl font-light leading-snug">
              Learning replaces guessing.
            </p>
            <p className="text-slate-300 text-xl md:text-2xl font-light leading-snug">
              Movement replaces overthinking.
            </p>
            <p className="text-slate-400 text-xl font-light leading-snug">
              Familiar faces appear.
            </p>
          </div>
        </div>
      </section>

      {/* Moment 4 — Image interrupt: people moving together, non-performative */}
      <div className="relative h-[300px] md:h-[460px] overflow-hidden">
        <Image
          src="/young-adult-ballet-dancers-in-modern-studio.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Moment 5 — Continuity: not identity, not lifestyle. Just rhythm. */}
      <section className="py-28 md:py-36 px-6 bg-black">
        <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-50 tracking-tight leading-snug text-center max-w-2xl mx-auto">
          Over time, it becomes part of your week.
        </p>
      </section>

      {/* Moment 6 — Exit paths: demographic routing for class seekers + rental */}
      <section className="pb-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

            {/* Classes routing */}
            <div>
              <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-6">Dance classes</p>
              <div className="space-y-4">
                {[
                  { label: "Kids", sub: "5–12", href: "/kids" },
                  { label: "Teens", sub: "13–17", href: "/teens" },
                  { label: "Young Adults", sub: "18–30", href: "/young-adults" },
                  { label: "Adults", sub: "30–49", href: "/adults" },
                  { label: "Active Adults", sub: "55+", href: "/active-adults" },
                ].map((g) => (
                  <Link
                    key={g.href}
                    href={g.href}
                    className="group flex items-baseline gap-2.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <span className="text-base font-light">{g.label}</span>
                    <span className="text-slate-600 text-xs">{g.sub}</span>
                    <span className="text-slate-600 group-hover:text-white transition-colors text-xs ml-auto">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Studio rental routing */}
            <div>
              <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-6">Studio hire</p>
              <div className="space-y-5">
                <p className="text-slate-500 text-sm leading-relaxed">
                  Four studios. Flexible hourly hire. Available from 6 am to midnight.
                </p>
                <Link
                  href="/rentals"
                  className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <span className="text-base font-light">View studios and rates</span>
                  <span className="text-slate-600 group-hover:text-white transition-colors text-xs">→</span>
                </Link>
              </div>
            </div>

          </div>
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
