"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function SchedulePricingPage() {
  const [activeTab, setActiveTab] = useState("schedule")

  const schedule = [
    { day: "Monday", time: "7:00 PM", style: "Salsa", level: "Beginner", instructor: "Maria" },
    { day: "Monday", time: "8:30 PM", style: "Bachata", level: "All Levels", instructor: "Carlos" },
    { day: "Tuesday", time: "6:00 PM", style: "Ballroom", level: "Beginner", instructor: "David" },
    { day: "Wednesday", time: "7:30 PM", style: "Zumba", level: "All Levels", instructor: "Lisa" },
    { day: "Thursday", time: "7:00 PM", style: "Line Dance", level: "Beginner", instructor: "Jennifer" },
    { day: "Friday", time: "8:00 PM", style: "Latin Mix", level: "Intermediate", instructor: "Maria" },
    { day: "Saturday", time: "2:00 PM", style: "Contemporary", level: "Beginner", instructor: "Sarah" },
    { day: "Saturday", time: "4:00 PM", style: "Hip Hop", level: "All Levels", instructor: "Marcus" },
    { day: "Sunday", time: "11:00 AM", style: "Ballroom", level: "All Levels", instructor: "David" },
  ]

  const pricingPlans = [
    {
      name: "Drop-In",
      price: "$25",
      period: "per class",
      features: ["Pay as you go", "No commitment", "Try different styles", "Perfect for busy schedules"],
      cta: "Book Drop-In",
      popular: false,
    },
    {
      name: "Monthly Package",
      price: "$160",
      period: "/month (8 classes)",
      features: [
        "$20 per class (save $40)",
        "Flexible class choices",
        "Roll over unused classes",
        "Priority registration",
      ],
      cta: "Start Monthly",
      popular: true,
    },
    {
      name: "Unlimited",
      price: "$240",
      period: "/month",
      features: ["Attend any/all classes", "Maximum value", "All styles included", "Early access to workshops"],
      cta: "Go Unlimited",
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">
          <Link href="/adults" className="flex items-center gap-2 p-2 text-slate-50 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wide">BACK</span>
          </Link>
          <h1 className="font-serif text-2xl tracking-tighter text-slate-50">Dance Connexions</h1>
          <div className="w-10" />
        </div>
      </header>

      <section className="pt-32 pb-16 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-6xl md:text-7xl tracking-tighter text-slate-50 mb-4">
            Adult Classes - Schedule & Pricing
          </h1>
          <p className="text-xl text-slate-400 mb-12">Find the class that fits your life</p>

          {/* Tabs */}
          <div className="flex gap-4 mb-12 border-b border-white/10">
            <button
              onClick={() => setActiveTab("schedule")}
              className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                activeTab === "schedule"
                  ? "border-slate-50 text-slate-50"
                  : "border-transparent text-slate-400 hover:text-slate-50"
              }`}
            >
              Schedule
            </button>
            <button
              onClick={() => setActiveTab("pricing")}
              className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                activeTab === "pricing"
                  ? "border-slate-50 text-slate-50"
                  : "border-transparent text-slate-400 hover:text-slate-50"
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => setActiveTab("trial")}
              className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                activeTab === "trial"
                  ? "border-slate-50 text-slate-50"
                  : "border-transparent text-slate-400 hover:text-slate-50"
              }`}
            >
              Trial Class
            </button>
          </div>

          {/* Schedule Tab */}
          {activeTab === "schedule" && (
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 text-slate-50 font-serif">Day</th>
                      <th className="px-6 py-4 text-slate-50 font-serif">Time</th>
                      <th className="px-6 py-4 text-slate-50 font-serif">Style</th>
                      <th className="px-6 py-4 text-slate-50 font-serif">Level</th>
                      <th className="px-6 py-4 text-slate-50 font-serif">Instructor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((item, idx) => (
                      <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-slate-300">{item.day}</td>
                        <td className="px-6 py-4 text-slate-300">{item.time}</td>
                        <td className="px-6 py-4 text-slate-300">{item.style}</td>
                        <td className="px-6 py-4 text-slate-300">{item.level}</td>
                        <td className="px-6 py-4 text-slate-300">{item.instructor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-400 mt-6">
                ✓ Schedule updated monthly. Current session runs Jan 2025 - Feb 2025
              </p>
            </div>
          )}

          {/* Pricing Tab */}
          {activeTab === "pricing" && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, idx) => (
                  <div
                    key={idx}
                    className={`relative rounded-2xl border p-8 transition-all ${
                      plan.popular
                        ? "bg-white/10 border-white/30 ring-1 ring-white/20"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-50 text-black text-xs font-medium rounded-full">
                        ⭐ POPULAR
                      </div>
                    )}
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl text-slate-50 mb-2">{plan.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-slate-50">{plan.price}</span>
                        <span className="text-slate-400">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <span className="text-slate-50 mt-0.5">✓</span>
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full px-6 py-3 rounded-full font-medium transition-colors ${
                        plan.popular
                          ? "bg-slate-50 text-black hover:bg-slate-200"
                          : "bg-white/10 border border-white/20 text-slate-50 hover:bg-white/20"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-center text-slate-400 text-sm mt-8">
                All packages include your first trial class FREE
              </p>
            </div>
          )}

          {/* Trial Class Tab */}
          {activeTab === "trial" && (
            <form className="max-w-2xl space-y-6">
              <div>
                <label className="block text-slate-50 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-slate-50 placeholder-slate-400 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-slate-50 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-slate-50 placeholder-slate-400 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-slate-50 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-slate-50 placeholder-slate-400 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-slate-50 font-medium mb-2">Which style interests you?</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-slate-50 focus:outline-none focus:border-white/40 transition-colors">
                  <option value="">Select a style...</option>
                  <option>Salsa</option>
                  <option>Bachata</option>
                  <option>Ballroom</option>
                  <option>Line Dancing</option>
                  <option>Contemporary</option>
                  <option>Zumba</option>
                  <option>Not sure, help me choose</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-50 font-medium mb-2">Any questions or concerns?</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-slate-50 placeholder-slate-400 focus:outline-none focus:border-white/40 transition-colors min-h-32"
                  placeholder="Tell us anything..."
                />
              </div>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" defaultChecked />
                <span className="text-slate-300 text-sm">I understand I can try one class free before committing</span>
              </label>
              <button
                type="submit"
                className="w-full px-6 py-4 rounded-full bg-slate-50 text-black font-medium hover:bg-slate-200 transition-colors"
              >
                Schedule My Trial
              </button>
              <p className="text-center text-slate-400 text-sm">No credit card required. Just show up and dance.</p>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
