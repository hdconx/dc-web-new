"use client"
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react"
import { CONTACT, LOCATION } from "@/lib/config"

export interface StudioRentalsProps {
  onCheckAvailabilityClick?: () => void
  onContactClick?: () => void
}

export function StudioRentals({ onCheckAvailabilityClick, onContactClick }: StudioRentalsProps) {
  const studios = [
    {
      name: "Main Space",
      id: "studio-a",
      image: "/rentals-hero/Studio A-Main.jpg",
    },
    {
      name: "Intimate Studio",
      id: "studio-b",
      image: "/rentals-hero/studio-b-medium-connected.jpg",
    },
    {
      name: "Workshop Space",
      id: "studio-c",
      image: "/rentals-hero/studio-c-small.jpg",
    },
    {
      name: "Creation Studio",
      id: "studio-d",
      image: "/rentals-hero/studio-d-medium-standalone.jpg",
    },
  ]

  return (
    <section className="py-16 px-6 bg-zinc-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 mb-12">
          <h2 className="font-serif text-3xl text-slate-50 tracking-tight">Studio Rentals</h2>
          <p className="text-slate-400 text-sm">
            Professional spaces available for classes, rehearsals & content creation
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {studios.map((studio) => (
            <div key={studio.id} className="group cursor-pointer">
              <div className="relative h-64 rounded-lg overflow-hidden mb-3 bg-slate-900">
                <img
                  src={studio.image || "/placeholder.svg"}
                  alt={studio.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg text-slate-50 tracking-tight group-hover:text-emerald-400 transition-colors">
                {studio.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={onCheckAvailabilityClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-all"
          >
            <span>Explore All Rentals</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-slate-50 font-semibold mb-1">Location</h3>
                <p className="text-slate-400 text-sm">{LOCATION.address.city}, {LOCATION.address.state.split(',')[1]?.trim()}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-slate-50 font-semibold mb-1">Phone</h3>
                <a href={`tel:${CONTACT.phone.tel}`} className="text-slate-400 text-sm hover:text-emerald-400 transition-colors">
                  {CONTACT.phone.display}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-slate-50 font-semibold mb-1">Email</h3>
                <a
                  href={`mailto:${CONTACT.email.rentals}`}
                  className="text-slate-400 text-sm hover:text-emerald-400 transition-colors"
                >
                  {CONTACT.email.rentals}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
