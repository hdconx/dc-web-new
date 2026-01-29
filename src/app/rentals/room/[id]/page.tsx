"use client"

import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ChevronLeft,
  Users,
  Square,
  Check,
  MessageCircle,
  ArrowRight,
  Ruler,
  Thermometer,
  Music,
  Lightbulb,
  Camera,
  Dumbbell,
  GraduationCap,
  PartyPopper,
  Video,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getRoom, getAvailableRooms, formatPrice, CONTACT } from "@/lib/config"

// Activity icons mapping
const activityIcons: Record<string, React.ReactNode> = {
  dance: <Users className="w-5 h-5" />,
  workshop: <GraduationCap className="w-5 h-5" />,
  fitness: <Dumbbell className="w-5 h-5" />,
  event: <PartyPopper className="w-5 h-5" />,
  filming: <Video className="w-5 h-5" />,
  practice: <Music className="w-5 h-5" />,
}

// Customer scenarios by room type
const customerScenarios = {
  "room-a": [
    { icon: "💃", title: "Dance Classes", desc: "Large group classes up to 50 students" },
    { icon: "🎬", title: "Video Production", desc: "Music videos, commercials, content shoots" },
    { icon: "🏆", title: "Competition Prep", desc: "Dance crews preparing for showcases" },
    { icon: "🎓", title: "Workshops", desc: "Masterclasses and certification training" },
  ],
  "room-d": [
    { icon: "📸", title: "Content Creation", desc: "TikTok, YouTube, Instagram shoots" },
    { icon: "🧘", title: "Fitness Classes", desc: "Yoga, Pilates, HIIT sessions" },
    { icon: "🎭", title: "Rehearsals", desc: "Theatre, acting, performance practice" },
    { icon: "💄", title: "Beauty Workshops", desc: "Makeup masterclasses with mirrors" },
  ],
  "room-b": [
    { icon: "👯", title: "Small Groups", desc: "Private classes and small rehearsals" },
    { icon: "🔗", title: "Overflow Space", desc: "Extension for large Room A events" },
    { icon: "📹", title: "Intimate Shoots", desc: "Solo or duo content creation" },
    { icon: "🎯", title: "Private Coaching", desc: "1-on-1 instruction sessions" },
  ],
  "room-c": [
    { icon: "🎯", title: "Private Practice", desc: "Solo rehearsal and audition prep" },
    { icon: "💰", title: "Budget-Friendly", desc: "Affordable for students & beginners" },
    { icon: "🎤", title: "Audition Prep", desc: "Self-tape recording sessions" },
    { icon: "🧘", title: "Personal Training", desc: "1-on-1 fitness sessions" },
  ],
}

function getWhatsAppForRoom(roomName: string) {
  const message = `Hi! I'm interested in booking ${roomName} at Dance Connexions.\n\n- Preferred date:\n- Time slot:\n- Activity type:\n- Group size:\n\nPlease let me know availability and pricing. Thank you!`
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`
}

export default function RoomDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const room = getRoom(id)
  const allRooms = getAvailableRooms()

  if (!room) {
    notFound()
  }

  const otherRooms = allRooms.filter((r) => r.id !== room.id).slice(0, 3)
  const scenarios = customerScenarios[room.id as keyof typeof customerScenarios] || customerScenarios["room-a"]

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50">
      <Header onMenuClick={() => {}} isVisible={true} />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={room.images[0] || `/rentals-hero/Studio A-Main.jpg`}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/rentals-hero/Studio A-Main.jpg"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-24 left-6 z-10">
          <Link
            href="/rentals/rooms"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm bg-black/30 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/10 hover:border-white/30"
          >
            <ChevronLeft className="w-4 h-4" />
            All Rooms
          </Link>
        </div>

        {/* Room Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-2">
              {room.name}
            </h1>
            <p className="text-xl text-white/80">{room.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-zinc-900 border-b border-zinc-800 py-4 px-6 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Square className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-300">{room.size.sqft.toLocaleString()} sqft</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-300">Up to {room.capacity.dance?.max || 20} people</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-semibold text-lg">
                From {formatPrice(room.baseHourlyRate)}/hr
              </span>
            </div>
          </div>
          <a
            href={getWhatsAppForRoom(room.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 px-5 rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Inquire Now
          </a>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">About This Space</h2>
              <p className="text-slate-300 text-lg leading-relaxed">{room.description}</p>
            </section>

            {/* Perfect For Section */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-6">Perfect For</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scenarios.map((scenario, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="text-3xl mb-3">{scenario.icon}</div>
                    <h3 className="font-semibold text-slate-50 mb-1">{scenario.title}</h3>
                    <p className="text-sm text-slate-400">{scenario.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Capacity by Activity */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-6">Capacity by Activity</h2>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-zinc-800">
                    <tr>
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Activity Type</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Min</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Optimal</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Max</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {Object.entries(room.capacity).map(([activity, cap]) => (
                      <tr key={activity} className="hover:bg-zinc-800/50 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <span className="text-emerald-500">
                              {activityIcons[activity] || <Users className="w-5 h-5" />}
                            </span>
                            <span className="text-slate-300 capitalize">{activity}</span>
                          </div>
                        </td>
                        <td className="text-center py-3 px-4 text-slate-400">{cap.min}</td>
                        <td className="text-center py-3 px-4 text-emerald-400 font-medium">{cap.optimal}</td>
                        <td className="text-center py-3 px-4 text-slate-400">{cap.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-500 mt-3">
                * Capacity varies based on activity intensity and setup requirements
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-6">Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Equipment */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-6">Equipment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h3 className="font-semibold text-slate-50 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-500" />
                    Included
                  </h3>
                  <ul className="space-y-2">
                    {room.equipment.included.map((item, idx) => (
                      <li key={idx} className="text-slate-300 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h3 className="font-semibold text-slate-50 mb-4 flex items-center gap-2">
                    <span className="text-slate-400">+</span>
                    Available on Request
                  </h3>
                  <ul className="space-y-2">
                    {room.equipment.available.map((item, idx) => (
                      <li key={idx} className="text-slate-400 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Rules & Restrictions */}
            {room.restrictions && room.restrictions.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-slate-50 mb-6">Studio Rules</h2>
                <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-5">
                  <ul className="space-y-2">
                    {room.restrictions.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-amber-200">
                        <span className="text-amber-500">•</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Gallery Placeholder */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-50 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700"
                  >
                    <div className="text-center text-slate-500">
                      <Camera className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Photo {i}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-3 text-center">
                More photos coming soon. Contact us to schedule a viewing.
              </p>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Sticky Booking Card */}
            <div className="lg:sticky lg:top-36 space-y-6">
              {/* Pricing Card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-50 mb-4">Pricing</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Hourly rate</span>
                    <span className="text-slate-50 font-semibold">From {formatPrice(room.baseHourlyRate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Half-day (4hrs)</span>
                    <span className="text-emerald-400">15% off</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Full-day (8hrs)</span>
                    <span className="text-emerald-400">25% off</span>
                  </div>
                </div>
                <a
                  href={getWhatsAppForRoom(room.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Check Availability
                </a>
                <p className="text-xs text-slate-500 text-center mt-3">
                  Recurring & long-term rates available
                </p>
              </div>

              {/* Quick Links */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-50 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link
                    href="/rentals/compare"
                    className="flex items-center justify-between py-2 text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    Compare Rooms
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/rentals/pricing"
                    className="flex items-center justify-between py-2 text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    Full Pricing Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/rentals/gallery"
                    className="flex items-center justify-between py-2 text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    View Gallery
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Connected Room Notice */}
              {room.connectedTo && (
                <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">Expandable Space</h3>
                  <p className="text-sm text-slate-300 mb-4">
                    This room can connect to {room.connectedTo === "room-a" ? "Room A" : room.connectedTo} for larger events.
                  </p>
                  <Link
                    href={`/rentals/room/${room.connectedTo}`}
                    className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
                  >
                    View connected room →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Other Rooms Section */}
      <section className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-50 mb-8">Explore Other Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherRooms.map((otherRoom) => (
              <Link
                key={otherRoom.id}
                href={`/rentals/room/${otherRoom.id}`}
                className="group bg-zinc-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-emerald-500/50 transition-all"
              >
                <div className="h-32 bg-zinc-700 overflow-hidden">
                  <img
                    src={otherRoom.images[0] || "/rentals-hero/Studio A-Main.jpg"}
                    alt={otherRoom.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/rentals-hero/Studio A-Main.jpg"
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-50 group-hover:text-emerald-400 transition-colors">
                    {otherRoom.name}
                  </h3>
                  <p className="text-sm text-slate-400">{otherRoom.subtitle}</p>
                  <p className="text-sm text-emerald-400 mt-2">From {formatPrice(otherRoom.baseHourlyRate)}/hr</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
