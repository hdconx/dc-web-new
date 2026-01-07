"use client"

interface UniversalBenefitsProps {
  onCtaClick?: () => void
}

export function UniversalBenefits({ onCtaClick }: UniversalBenefitsProps) {
  const benefits = [
    {
      title: "Physical Wellbeing",
      description:
        "Gentle, full-body movement that builds strength, flexibility, and cardiovascular health naturally — without feeling like a workout.",
      image: "/diverse-people-feeling-healthy-through-movement.jpg",
      imagePosition: "left",
    },
    {
      title: "Mental Clarity",
      description:
        "Coordination and rhythm training keep your mind sharp, focused, and present. Dance is meditation in motion.",
      image: "/person-feeling-calm-and-mentally-clear.jpg",
      imagePosition: "right",
    },
    {
      title: "Emotional Confidence",
      description:
        "Express yourself freely and discover capabilities you didn't know you had. Movement builds quiet, lasting confidence.",
      image: "/confident-person-expressing-joy-and-freedom.jpg",
      imagePosition: "left",
    },
    {
      title: "Social Connection",
      description:
        "Meet people in a warm, supportive environment. Dance creates friendships built on shared experience and mutual encouragement.",
      image: "/friends-laughing-together-in-community.jpg",
      imagePosition: "right",
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-50 tracking-tight mb-4">Why Movement Matters</h2>
          <p className="text-slate-400 text-lg">Benefits that apply to everyone, regardless of age or experience</p>
        </div>

        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${benefit.imagePosition === "right" ? "md:grid-flow-dense" : ""}`}
            >
              <div className={benefit.imagePosition === "right" ? "md:col-start-2" : ""}>
                <div className="relative h-[350px] rounded-2xl overflow-hidden">
                  <img
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-3xl md:text-4xl text-slate-50 tracking-tight">{benefit.title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full border-2 border-emerald-400/30 bg-emerald-400/5 backdrop-blur-sm text-slate-50 hover:bg-emerald-400/10 hover:border-emerald-400/50 transition-all"
          >
            <span className="text-lg font-medium">Ready to start?</span>
            <span className="text-2xl">↑</span>
          </button>
          <p className="text-slate-500 text-sm mt-4">Choose your journey above</p>
        </div>
      </div>
    </section>
  )
}
