"use client"

import Image from "next/image"
import Link from "next/link"

interface Identity {
  id: string
  title: string
  ageRange: string
  subLabel?: string
  imageUrl: string
  href: string
  caption?: string
  whatsappUrl?: string
}

interface IdentityGridProps {
  identities: Identity[]
  onClose?: () => void
}

export function IdentityGrid({ identities, onClose }: IdentityGridProps) {
  return (
    <div className="relative w-full h-full">
      <div className="relative h-full w-full grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 bg-black">
        {identities.map((identity) => (
          <Link
            key={identity.id}
            href={identity.href}
            onClick={onClose}
            className="group relative overflow-hidden bg-zinc-950 transition-all duration-300 cursor-pointer"
            aria-label={`${identity.title}${identity.ageRange ? ` · ${identity.ageRange}` : ""}`}
          >
            {/* Background image — zooms on hover */}
            <Image
              src={identity.imageUrl || "/placeholder.svg"}
              alt={identity.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Default gradient overlay — fades out on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30 transition-opacity duration-400 group-hover:opacity-0" />

            {/* Default state: vertical title */}
            <div className="absolute bottom-4 left-4 z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
              <h3
                className="font-serif text-4xl md:text-5xl tracking-tighter text-slate-50 drop-shadow-lg"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed", letterSpacing: "-0.05em" }}
              >
                {identity.title}
              </h3>
            </div>

            {/* Hover overlay: darkened + centered content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center bg-black/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight text-white mb-1 leading-tight">
                {identity.title}
              </h3>
              {identity.ageRange && (
                <p className="text-slate-400 text-[10px] tracking-[0.2em] uppercase mb-3">
                  {identity.ageRange}
                </p>
              )}
              {identity.caption && (
                <p className="text-slate-300 text-xs leading-relaxed mb-4 max-w-[160px]">
                  {identity.caption}
                </p>
              )}
              {identity.whatsappUrl ? (
                <a
                  href={identity.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full bg-green-600 hover:bg-green-500 text-white font-medium transition-colors"
                  aria-label={`Ask about ${identity.title} on WhatsApp`}
                >
                  {/* WhatsApp icon */}
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current flex-shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Ask on WhatsApp
                </a>
              ) : (
                <span className="text-xs text-slate-500 tracking-wider">Explore →</span>
              )}
            </div>

          </Link>
        ))}
      </div>
    </div>
  )
}
