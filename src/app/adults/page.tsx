"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronDown, MessageCircle } from "lucide-react"
import { useState } from "react"

interface Genre {
  id: string
  name: string
  color: string
  vibe: string
  dances: { name: string; description: string }[]
  ctaText: string
  href: string
}

interface Testimonial {
  name: string
  text: string
  duration: string
  journey: string
}

interface FAQ {
  question: string
  answer: string
}

export default function AdultsPage() {
  const [expandedGenre, setExpandedGenre] = useState<string | null>(null)
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const genres: Genre[] = [
    {
      id: "latin-club",
      name: "Latin Club Dances",
      color: "from-orange-500/20 to-orange-600/20 border-orange-500/30",
      vibe: "Social, energetic dances enjoyed worldwide in clubs and social events.",
      dances: [
        { name: "Salsa", description: "Energetic partner dance with Cuban roots, danced socially worldwide" },
        { name: "Bachata", description: "Romantic, sensual dance from Dominican Republic with simple steps" },
        { name: "Merengue", description: "Fun, easy-to-learn Dominican dance - great for beginners" },
        { name: "Kizomba", description: "Smooth, intimate Angolan dance with flowing movements" },
      ],
      ctaText: "Explore Latin Club Dances",
      href: "/adults/latin-club-dances",
    },
    {
      id: "latin-ballroom",
      name: "Latin Ballroom Dances",
      color: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
      vibe: "Elegant, structured partner dances focused on technique and musicality.",
      dances: [
        { name: "Cha-Cha", description: "Playful, rhythmic dance with distinctive triple step" },
        { name: "Rumba", description: 'Slow, sensual "dance of love" focusing on hip movement' },
        { name: "Samba", description: "High-energy Brazilian carnival dance with bouncing action" },
        { name: "Paso Doble", description: "Dramatic Spanish-inspired dance representing bullfighting" },
        { name: "Jive", description: "Fast, energetic swing-style dance with kicks and flicks" },
      ],
      ctaText: "Explore Latin Ballroom Dances",
      href: "/adults/latin-ballroom-dances",
    },
    {
      id: "ballroom-social",
      name: "Ballroom & Social Partner Dances",
      color: "from-violet-500/20 to-violet-600/20 border-violet-500/30",
      vibe: "Classic and timeless partner dances for social confidence and grace.",
      dances: [
        { name: "Waltz", description: "Classic, elegant dance with sweeping turns and rise-and-fall" },
        { name: "Foxtrot", description: "Smooth, sophisticated dance perfect for formal occasions" },
        { name: "Tango", description: "Intense, passionate Argentine dance with sharp movements" },
        { name: "Quickstep", description: "Fast, light-footed dance with lots of movement across the floor" },
      ],
      ctaText: "Explore Ballroom Dances",
      href: "/adults/ballroom-social-dances",
    },
    {
      id: "line-dancing",
      name: "Line Dancing",
      color: "from-green-500/20 to-green-600/20 border-green-500/30",
      vibe: "Fun, group-based dances with no partner required.",
      dances: [
        { name: "Country Line Dance", description: "Group choreography to country music - no partner needed" },
        { name: "Electric Slide", description: "Classic party line dance everyone knows" },
        { name: "Cupid Shuffle", description: "Fun, easy group dance with simple directional steps" },
        { name: "Choreographed Routines", description: "Learn popular group dances from viral trends" },
      ],
      ctaText: "Explore Line Dancing",
      href: "/adults/line-dancing",
    },
    {
      id: "freestyle",
      name: "Freestyle & Contemporary Styles",
      color: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30",
      vibe: "Expressive styles focused on creativity and personal movement.",
      dances: [
        { name: "Contemporary", description: "Expressive modern dance blending ballet and jazz elements" },
        { name: "Jazz", description: "Energetic, stylized dance with sharp movements and personality" },
        { name: "Lyrical", description: "Emotional storytelling through fluid, graceful movement" },
        { name: "Hip Hop Freestyle", description: "Urban dance styles focusing on personal expression" },
      ],
      ctaText: "Explore Freestyle & Contemporary",
      href: "/adults/freestyle-contemporary",
    },
    {
      id: "fitness-fusion",
      name: "Fitness & Fusion Dance",
      color: "from-red-500/20 to-red-600/20 border-red-500/30",
      vibe: "High-energy dance styles designed to improve fitness and stamina.",
      dances: [
        { name: "Zumba", description: "Latin-inspired dance fitness party with easy-to-follow moves" },
        { name: "Dance Cardio", description: "High-energy workout combining dance styles for fitness" },
        { name: "BollyX", description: "Bollywood-inspired dance fitness with vibrant Indian music" },
        { name: "Dance Fusion", description: "Mix of styles designed to get your heart pumping" },
      ],
      ctaText: "Explore Fitness & Fusion",
      href: "/adults/fitness-fusion",
    },
  ]

  const benefits = [
    {
      title: "Physical Health & Mobility",
      description: "Build strength, flexibility, and cardiovascular fitness.",
      icon: "💪",
    },
    {
      title: "Mental Wellbeing",
      description: "Release stress and boost mood through joyful movement.",
      icon: "🧠",
    },
    {
      title: "Social Connection",
      description: "Meet like-minded adults and build a supportive community.",
      icon: "👥",
    },
    {
      title: "Confidence Building",
      description: "Gain poise and self-assurance through mastery and expression.",
      icon: "✨",
    },
    {
      title: "Creative Expression",
      description: "Explore your artistic side in a judgment-free environment.",
      icon: "🎨",
    },
    {
      title: "Stress Relief",
      description: "Escape daily pressures and find peace through movement.",
      icon: "🧘",
    },
  ]

  const testimonials: Testimonial[] = [
    {
      name: "Sarah, 38",
      text: "I hadn't danced since college. Coming back here has been transformative. The instructors meet you where you are, and the community is incredibly welcoming.",
      duration: "Dancing for 6 months",
      journey: "Started with Salsa, now also takes Bachata",
    },
    {
      name: "James, 42",
      text: "This class is my therapy. I leave feeling stronger, more confident, and genuinely happy every single session. It's become part of my weekly routine.",
      duration: "Dancing for 2 years",
      journey: "Began with Line Dancing, expanded to Ballroom",
    },
    {
      name: "Maria, 35",
      text: "The blend of technique and pure enjoyment is perfect. I was nervous at first, but the supportive environment made all the difference.",
      duration: "Dancing for 8 months",
      journey: "Trial class in Zumba led to Contemporary",
    },
    {
      name: "Robert, 58",
      text: "I'm 58 and thought I'd missed my chance. Turns out, this is exactly the right time. My body feels better than it has in years.",
      duration: "Dancing for 1 year",
      journey: "Started Foxtrot for his daughter's wedding, stayed for joy",
    },
  ]

  const faqs: FAQ[] = [
    {
      question: "What should I wear to my first class?",
      answer:
        "Comfortable clothes you can move in - think yoga pants or athletic wear. For footwear: clean sneakers, jazz shoes, or even socks work for your first class. No need to buy special dance shoes until you're ready to commit. We'll guide you on appropriate footwear for your chosen style as you progress.",
    },
    {
      question: "I have two left feet and no rhythm. Will I embarrass myself?",
      answer:
        "This is the #1 thing we hear - and here's the truth: most of our adult students said the exact same thing before starting. Dance is a LEARNED skill, not a talent you're born with. Our teaching method breaks everything into small, manageable steps. Plus, everyone in beginner classes is focused on their own learning, not watching you. You'll be surprised how quickly you pick it up.",
    },
    {
      question: "Do I need to bring a partner?",
      answer:
        "Absolutely not! About 80% of our adult students come solo. For partner dances, we rotate throughout class so everyone gets equal practice time and different leading/following experiences. Coming alone is actually ideal - you learn faster and meet more people. Many of our strongest friendships started in class.",
    },
    {
      question: "I'm [age]. Am I too old to start?",
      answer:
        "We have active students from their 20s to their 70s. Dance is low-impact, adaptable, and actually BETTER for adult bodies than high-impact exercise. Your body will tell you what it needs, and our instructors are trained to offer modifications. The best time to start was yesterday. The second best time is today.",
    },
    {
      question: "Can I join mid-month or do I have to wait for a new session?",
      answer:
        "Jump in anytime! Beginner classes review fundamentals regularly, and our instructors will help you catch up quickly. We designed our curriculum so new students can integrate smoothly at any point. Don't wait for 'the perfect time' - that's just fear talking.",
    },
    {
      question: "How long until I can actually dance at a social event?",
      answer:
        "You'll learn your first patterns in your FIRST class - seriously! Within 8-12 weeks, most students feel comfortable dancing socially. But here's the secret: dance is a lifelong journey. There's no finish line. You'll be 'dancing' from day one, just at your current level. And that's perfect.",
    },
    {
      question: "What's the time commitment? I have a busy schedule.",
      answer:
        "Most students attend once per week (60-90 min class). That's it. No homework, no pressure. Some get hooked and come more often, but one class per week is enough to progress steadily. We offer multiple time slots to fit work schedules, including evening and weekend options.",
    },
    {
      question: "What if I miss a class?",
      answer:
        "Life happens - we get it. Depending on your package, make-up classes may be available. Contact us and we'll work it out. Adult life is unpredictable, and we've built flexibility into our system.",
    },
  ]

  const journey = [
    {
      step: 1,
      title: "Connect",
      subtitle: "Reach out via WhatsApp or schedule form",
      detail: "Tell us about your interests and any concerns",
      icon: "💬",
    },
    {
      step: 2,
      title: "Guidance",
      subtitle: "We recommend the perfect starting class",
      detail: "Based on your goals, schedule, and experience level",
      icon: "🎯",
    },
    {
      step: 3,
      title: "First Class",
      subtitle: "Attend your trial class (no commitment)",
      detail: "Meet instructor, feel the vibe, learn basic moves",
      icon: "🕺",
    },
    {
      step: 4,
      title: "Decide",
      subtitle: "Choose your dance pathway",
      detail: "Drop-in, package, or unlimited - your pace, your choice",
      icon: "✨",
    },
    {
      step: 5,
      title: "Grow",
      subtitle: "Progress with community support",
      detail: "Make friends, build skills, celebrate milestones",
      icon: "📈",
    },
  ]

  const classStructure = [
    {
      time: "0-10 min",
      title: "Warm-up & Social Connection",
      description: "Gentle stretches, music, chat with fellow dancers",
      icon: "🔥",
    },
    {
      time: "10-40 min",
      title: "Technique & Foundation",
      description: "Instructor breaks down steps, everyone follows along",
      icon: "👣",
    },
    {
      time: "40-70 min",
      title: "Practice & Partner Rotation",
      description: "Try the moves with music, rotate partners (if applicable)",
      icon: "💃",
    },
    {
      time: "70-85 min",
      title: "Freestyle & Putting It Together",
      description: "Dance full sequences, feel the joy of movement",
      icon: "✨",
    },
    {
      time: "85-90 min",
      title: "Cool Down & Community",
      description: "Gentle stretches, announcements, social time",
      icon: "🤝",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      {/* Header with Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">
          <Link href="/" className="flex items-center gap-2 p-2 text-slate-50 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wide">BACK</span>
          </Link>

          <h1 className="font-serif text-2xl tracking-tighter text-slate-50">Dance Connexions</h1>

          <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
            <svg className="w-5 h-5 text-slate-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen pt-16 flex items-center mt-16">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/v0_image-eWCX7lW43Qi9XKOQ0qNs9nPt3ICXSv.png"
            alt="Adults dancing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>

        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl tracking-tighter text-slate-50">
              Dance for Joy, Confidence & Connection
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              Discover social, expressive, and fitness-focused dance classes designed for adult lifestyles.
            </p>
          </div>

          <button className="inline-block px-8 py-3 rounded-full bg-slate-50 text-black font-medium hover:bg-slate-200 transition-colors">
            Explore Dance Styles
          </button>
        </div>
      </section>

      {/* Who This Page Is For */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-slate-50 mb-8">Who This Is For</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            This page is designed for adults at any stage of their dance journey—whether you're taking your first steps
            or returning after years away.
          </p>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-slate-50 mt-1">•</span>
              <span>Absolute beginners seeking a judgment-free introduction to dance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-50 mt-1">•</span>
              <span>Returning dancers reconnecting with movement after time away</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-50 mt-1">•</span>
              <span>Social dancers looking to explore new styles and communities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-50 mt-1">•</span>
              <span>Adults seeking fitness through movement and joy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-50 mt-1">•</span>
              <span>Adults seeking creative expression and stress relief</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Adults Dance Here - Benefits */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-slate-50 mb-16">
            Why Adults Dance Here
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-serif text-xl text-slate-50 mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Genres - ENHANCED with details */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-slate-50 mb-4">
            Explore Dance Styles for Adults
          </h2>
          <p className="text-xl text-slate-400 mb-16">
            Choose a style that matches your energy, goals, and personality.
          </p>

          <div className="space-y-6">
            {genres.map((genre) => (
              <div
                key={genre.id}
                className={`bg-gradient-to-r ${genre.color} rounded-2xl border p-8 overflow-hidden transition-all duration-300 cursor-pointer ${
                  expandedGenre === genre.id ? "hover:shadow-xl shadow-lg" : "hover:shadow-lg hover:scale-105"
                }`}
              >
                <button
                  onClick={() => setExpandedGenre(expandedGenre === genre.id ? null : genre.id)}
                  className="w-full text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl md:text-3xl text-slate-50 mb-3 tracking-tight">
                        {genre.name}
                      </h3>
                      <p className="text-slate-400 text-lg">{genre.vibe}</p>
                      <p className="text-slate-500 text-sm mt-2">
                        {expandedGenre === genre.id ? "Tap to collapse ↑" : "Tap to see specific dances ↓"}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-7 h-7 text-emerald-500 flex-shrink-0 mt-2 transition-transform duration-300 ${
                        expandedGenre === genre.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`transition-all duration-300 ${expandedGenre === genre.id ? "bg-white/5 rounded-xl" : ""}`}
                >
                  {expandedGenre === genre.id && (
                    <div className="mt-6 pt-6 border-t border-white/20 space-y-6">
                      <div>
                        <h4 className="text-slate-300 text-sm tracking-widest uppercase mb-4">
                          Specific Dances Included
                        </h4>
                        <div className="space-y-3">
                          {genre.dances.map((dance, idx) => (
                            <div key={idx} className="px-4 py-3 rounded-lg bg-white/10 border border-white/20">
                              <p className="font-medium text-slate-200">{dance.name}</p>
                              <p className="text-slate-400 text-sm">{dance.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={genre.href}
                        className="inline-block px-6 py-3 rounded-full bg-slate-50 text-black font-medium hover:bg-slate-200 transition-colors"
                      >
                        {genre.ctaText}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-slate-50 mb-8">
            Our Teaching Philosophy
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            We believe dance should be joyful, inclusive, and transformative. Our instructors focus on technique while
            celebrating individual style. Every adult progresses at their own pace in a step-by-step structure with zero
            judgment and full support. Dance here isn't about perfection—it's about growth, expression, and connection.
          </p>
        </div>
      </section>

      {/* How Classes Work - ENHANCED */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-slate-50 mb-12">How Classes Work</h2>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-3">
              <span className="text-slate-50 mt-1">📊</span>
              <span className="text-slate-300">Beginner and Intermediate pathways tailored to your level</span>
            </div>
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20">
              <span className="text-slate-50 mt-1">✨</span>
              <span className="text-slate-300 font-medium">
                Partner not required—dance at your own pace and progress on your terms
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-50 mt-1">🎯</span>
              <span className="text-slate-300">Trial classes available to explore before committing</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-50 mt-1">👥</span>
              <span className="text-slate-300">
                Small to medium class sizes (8-15 students) for optimal instruction
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-50 mt-1">🕐</span>
              <span className="text-slate-300">Flexible weekly schedules to fit adult lifestyles</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="font-serif text-2xl text-slate-50 mb-8">What a Typical 90-Minute Class Looks Like</h3>
            <div className="space-y-4">
              {classStructure.map((segment, idx) => (
                <div key={idx} className="flex gap-4 pb-4 border-b border-white/10 last:border-0">
                  <div className="flex-shrink-0 text-2xl">{segment.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-slate-50 text-lg">{segment.title}</p>
                        <p className="text-slate-400 text-sm">{segment.description}</p>
                      </div>
                      <span className="text-slate-500 text-xs font-mono whitespace-nowrap">{segment.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your First Class Journey */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-slate-50 mb-4">
            Your First Class Journey
          </h2>
          <p className="text-xl text-slate-400 mb-16">Here's exactly what to expect, step by step.</p>

          <div className="grid md:grid-cols-5 gap-4 md:gap-2">
            {journey.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="text-2xl font-serif text-slate-50 mb-2">{item.title}</p>
                    <p className="text-slate-400 text-sm">{item.subtitle}</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-4 pt-4 border-t border-white/10">{item.detail}</p>
                </div>
                {idx < journey.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-slate-50 mb-4">
            Questions We Hear Often
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Adults have specific concerns, and we're here to address them directly. No judgment, just honest answers.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all hover:bg-white/10"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === String(idx) ? null : String(idx))}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                >
                  <p className="font-medium text-slate-50 text-lg">{faq.question}</p>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform ${
                      expandedFAQ === String(idx) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFAQ === String(idx) && (
                  <div className="px-6 pb-5 border-t border-white/10 pt-5">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - ENHANCED */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-slate-50 mb-16">What Adults Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <p className="text-slate-300 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-serif text-slate-50 font-medium">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.duration}</p>
                  <p className="text-slate-400 text-sm italic">Journey: {testimonial.journey}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Next Step - ENHANCED CTAs */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-24 bg-slate-50/20 mb-12" />
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-slate-50 mb-4 text-center">
            Your Next Step
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">Choose the path that feels right for you.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col md:col-span-1 md:row-span-2 md:justify-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-serif text-2xl text-slate-50 mb-2">Have Questions First?</h3>
              <p className="text-slate-400 mb-1">The perfect starting point</p>
              <p className="text-slate-500 text-sm mb-8 flex-1">
                Chat with us on WhatsApp. We'll guide you to your ideal class style.
              </p>
              <a
                href="https://wa.me/?text=Hi%21%20I'm%20interested%20in%20adult%20dance%20classes.%20I'd%20like%20to%20discuss%20which%20style%20might%20be%20right%20for%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-pulse inline-flex px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg transition-all text-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Start Here on WhatsApp
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-serif text-2xl text-slate-50 mb-2">Ready to Commit</h3>
              <p className="text-slate-400 mb-1">Know what you want</p>
              <p className="text-slate-500 text-sm mb-6 flex-1">View our full schedule and pricing options.</p>
              <Link
                href="/adults/schedule-pricing"
                className="inline-block px-6 py-3 rounded-full bg-slate-50 text-zinc-950 font-semibold hover:bg-slate-200 transition-colors text-center"
              >
                See Schedule & Pricing
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col">
              <div className="text-4xl mb-4">👀</div>
              <h3 className="font-serif text-2xl text-slate-50 mb-2">Want to Watch First</h3>
              <p className="text-slate-400 mb-1">Take your time</p>
              <p className="text-slate-500 text-sm mb-6 flex-1">Observe a real class before committing.</p>
              <a
                href="https://wa.me/?text=Hi%21%20I'd%20like%20to%20observe%20a%20class%20before%20committing.%20Can%20you%20help%20me%20schedule%20an%20observation%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/30 text-slate-300 font-medium transition-colors justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Book Observation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-serif text-slate-50 mb-4">Dance Connexions</h3>
              <p className="text-slate-400 text-sm">Experience dance. Build community. Transform life.</p>
            </div>
            <div>
              <h4 className="text-slate-50 text-sm font-medium tracking-wide uppercase mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="/" className="hover:text-slate-50 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-slate-50 transition-colors">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-slate-50 transition-colors">
                    Studio Rentals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-50 text-sm font-medium tracking-wide uppercase mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>📍 Location</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ info@danceconnexions.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-50 text-sm font-medium tracking-wide uppercase mb-4">Follow</h4>
              <div className="flex gap-3">
                <a href="#" className="text-slate-400 hover:text-slate-50 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-50 transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-slate-500 text-sm text-center">© 2025 Dance Connexions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
