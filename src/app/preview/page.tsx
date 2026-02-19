import Link from "next/link"

const DIRECTIONS = [
  {
    href: "/preview/d1",
    label: "Direction 1",
    title: "The Two-Speed Page",
    desc: "Renters are routed out early. Learners get reassurance. Studio credibility recaptures anyone who kept scrolling.",
  },
  {
    href: "/preview/d2",
    label: "Direction 2",
    title: "The Space Speaks First",
    desc: "No philosophy. The studio environment does the convincing. Factual, sensory, minimal.",
  },
  {
    href: "/preview/d3",
    label: "Direction 3",
    title: "The Journey Without Labels",
    desc: "No age framing, no beginner framing. A universal progression that anyone — classes or rentals — can recognise.",
  },
]

export default function PreviewIndex() {
  return (
    <main className="bg-zinc-950 min-h-screen py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-6">Homepage · Content Section</p>
        <h1 className="font-serif text-3xl md:text-4xl text-slate-50 tracking-tight leading-tight mb-3">
          Three directions to review
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed mb-16 max-w-lg">
          Each page shows only the section between the Quick Choice Bar and the Final CTA.
          The hero grid above is not repeated — you already know what that looks like.
          Pick whichever direction feels right, or a combination.
        </p>

        <div className="space-y-4">
          {DIRECTIONS.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="block p-7 bg-zinc-900 border border-white/10 hover:border-white/30 transition-colors group"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-zinc-600 text-xs tracking-[0.2em] uppercase">{d.label}</span>
                <span className="text-slate-50 font-medium group-hover:text-white transition-colors">
                  {d.title} →
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{d.desc}</p>
            </Link>
          ))}
        </div>

        <p className="text-zinc-700 text-xs mt-12 leading-relaxed">
          These are design previews only. Whichever direction is chosen will replace the current
          content section in the real homepage. The identity grid, sticky bar, CTA, Getting Started,
          FAQs, and footer are not changing.
        </p>
      </div>
    </main>
  )
}
