"use client"

export interface BeginnerReassuranceProps {
  onCtaClick?: () => void
}

export function BeginnerReassurance({ onCtaClick }: BeginnerReassuranceProps) {
  return (
    <section className="py-24 md:py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="/warm-smiling-beginner-dancers-feeling-confident-an.jpg"
              alt="Welcoming environment for beginners"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-50 tracking-tight">
              Never Danced Before?<br />Perfect.
            </h2>
            <p className="text-slate-300 text-xl leading-relaxed">
              Most people who walk through our doors have never danced before.
              That is exactly who we teach — step by step, at your own pace,
              in an environment where no one is judging anyone.
            </p>
            <p className="text-slate-400 text-lg italic">
              &ldquo;I can&apos;t dance&rdquo; is the most common thing we hear —
              and the easiest belief we help people outgrow.
            </p>
            <div className="pt-4">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-slate-50 hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <span className="text-lg">Choose your class above</span>
                <span className="text-xl">↑</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
