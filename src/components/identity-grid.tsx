"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface Identity {
  id: string
  title: string
  ageRange: string
  subLabel: string
  imageUrl: string
  href: string
}

interface IdentityGridProps {
  identities: Identity[]
  onClose?: () => void
  showCloseButton?: boolean
  pulseRef?: React.Ref<HTMLDivElement>
  triggerPulse?: boolean
}

export function IdentityGrid({
  identities,
  onClose,
  showCloseButton = true,
  pulseRef,
  triggerPulse,
}: IdentityGridProps) {
  const localRef = useRef<HTMLDivElement>(null)
  const [pulse1Active, setPulse1Active] = useState(false)
  const [pulse2Active, setPulse2Active] = useState(false)

  useEffect(() => {
    if (triggerPulse) {
      console.log("[v0] Triggering pulse animation")
      // First beat plays immediately
      setPulse1Active(true)

      const timer1 = setTimeout(() => {
        setPulse1Active(false)
        // Second beat plays after ~4.5 seconds
        setPulse2Active(true)
        console.log("[v0] Second pulse beat triggered")

        const timer2 = setTimeout(() => {
          setPulse2Active(false)
        }, 700) // Animation duration

        return () => clearTimeout(timer2)
      }, 4500) // Wait 4.5s before second beat

      return () => clearTimeout(timer1)
    }
  }, [triggerPulse])

  return (
    <div
      ref={pulseRef || localRef}
      className={`relative w-full h-full ${pulse1Active ? "grid-pulse-1" : ""} ${pulse2Active ? "grid-pulse-2" : ""}`}
    >
      <div className="relative h-full w-full grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 bg-black">
        {identities.map((identity) => {
          return (
            <Link
              key={identity.id}
              href={identity.href}
              onClick={onClose}
              className="group relative overflow-hidden bg-zinc-950 hover:brightness-110 transition-all duration-500"
            >
              <Image src={identity.imageUrl || "/placeholder.svg"} alt={identity.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />

              <div className="absolute bottom-4 left-4">
                <h3
                  className="font-serif text-4xl md:text-5xl tracking-tighter text-slate-50 group-hover:text-white transition-colors drop-shadow-lg"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed", letterSpacing: "-0.05em" }}
                >
                  {identity.title}
                </h3>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
