import Link from "next/link"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/config"

export default function Direction2() {
  const wa = CONTACT.whatsapp.url

  return (
    <main className="bg-zinc-950">

      {/* Preview banner */}
      <div className="bg-zinc-900 py-3 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/preview" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
            ← All directions
          </Link>
          <p className="text-zinc-400 text-xs tracking-wider">Direction 2 — The Space Speaks First</p>
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

      {/* Moment 1 — One quiet opening line */}
      <section className="pt-28 pb-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <p className="text-slate-400 text-xl md:text-2xl font-light tracking-wide">
            This is a place built for movement.
          </p>
        </div>
      </section>

      {/* Moment 2 — Environmental fragments: felt benefits, not features */}
      <section className="pb-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

          <div>
            <p className="font-serif text-4xl md:text-5xl text-slate-50 tracking-tight">
              Sprung floors.
            </p>
          </div>

          <div className="ml-auto max-w-md text-right">
            <p className="font-serif text-3xl md:text-4xl text-slate-200 tracking-tight">
              Mirrors when you need them.
            </p>
          </div>

          <div>
            <p className="font-serif text-3xl md:text-4xl text-slate-300 tracking-tight">
              Space to move without being watched.
            </p>
          </div>

          <div className="ml-auto max-w-sm text-right">
            <p className="font-serif text-2xl md:text-3xl text-slate-400 tracking-tight">
              Time that belongs to you.
            </p>
          </div>

        </div>
      </section>

      {/* Moment 3 — Grounded versions of the copy lines: less poetic, more honest */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-2xl mx-auto space-y-10">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Confidence grows through repetition.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mt-1">
              Not performance. Not talent. Practice.
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-lg leading-relaxed">
              No one arrives finished.
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-lg leading-relaxed">
              Some come alone. Most stop noticing that after the first class.
            </p>
          </div>
        </div>
      </section>

      {/* Moment 4 — Image interrupt: empty or lightly used studio */}
      <div className="relative h-[320px] md:h-[480px] overflow-hidden">
        <Image
          src="/professional-dance-studio-interior-cinematic-light.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Moment 5 — Gentle routing: classes by age + rental */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">

          <div className="mb-16">
            <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-6">Classes by age group</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-y-4 gap-x-10">
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
                  className="group flex items-baseline gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <span className="text-base font-light">{g.label}</span>
                  <span className="text-slate-600 text-xs">{g.sub}</span>
                  <span className="text-slate-600 group-hover:text-white transition-colors text-xs">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-4">Studio hire</p>
            <Link
              href="/rentals"
              className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors w-fit"
            >
              <span className="text-base font-light">Four studios · Flexible hourly hire</span>
              <span className="text-slate-600 group-hover:text-white transition-colors text-xs">→</span>
            </Link>
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
