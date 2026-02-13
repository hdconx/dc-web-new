import { MapPin, Calendar, Building2, MessageSquare } from "lucide-react"
import Link from "next/link"

export function QuickAccessStrip() {
  const links = [
    { icon: MapPin, label: "Location & Parking", href: "#location" },
    { icon: Calendar, label: "Classes & Schedule", href: "/classes" },
    { icon: Building2, label: "Studio Rental", href: "/rentals" },
    { icon: MessageSquare, label: "Contact Us", href: "#contact" },
  ]

  return (
    <section className="py-12 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.label}
              href={link.href}
              className="group flex flex-col items-center gap-3 p-6 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all"
            >
              <Icon className="w-6 h-6 text-slate-400 group-hover:text-slate-200 transition-colors" />
              <span className="text-sm text-center text-slate-300 group-hover:text-slate-100 transition-colors">
                {link.label}
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
