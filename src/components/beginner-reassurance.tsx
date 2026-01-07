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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/v0_image-XLzAFDrfIYp2ElgxX3QcQjhpBggmSq.png"
              alt="Welcoming environment for beginners"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-50 tracking-tight">
              Never Danced Before? Perfect.
            </h2>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>Most people who walk through our doors have never danced before. That's exactly who we teach.</p>

              <p>
                Learning dance is systematic and guided. You progress step-by-step, at your own pace, in a judgment-free
                environment.
              </p>

              <p className="text-slate-400 text-base italic">
                "I can't dance" is the most common thing we hear — and the easiest belief we help people outgrow.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-slate-50 hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <span className="text-lg">Let us guide you</span>
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
