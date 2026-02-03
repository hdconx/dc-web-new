"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Tag } from "lucide-react"
import promotionsData from "@/../data/promotions.json"

export function PromoBar() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const dismissed = sessionStorage.getItem("dc-promo-bar-dismissed")
    if (dismissed !== "true") {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--promo-bar-height",
      visible ? "44px" : "0px"
    )
    return () => {
      document.documentElement.style.setProperty("--promo-bar-height", "0px")
    }
  }, [visible])

  const handleDismiss = () => {
    setVisible(false)
    sessionStorage.setItem("dc-promo-bar-dismissed", "true")
  }

  if (!mounted || !visible) return null

  const banner = promotionsData.bannerPromo

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[44px] bg-emerald-600 flex items-center justify-center px-4 gap-3">
      <Tag className="w-4 h-4 text-white flex-shrink-0" />

      <span className="text-white text-sm font-medium whitespace-nowrap">
        {banner.message}
      </span>

      <Link
        href="/rentals/promos"
        className="bg-white text-emerald-700 font-semibold text-sm px-4 py-1 rounded-full hover:bg-emerald-50 transition-colors whitespace-nowrap flex-shrink-0"
      >
        {banner.cta}
      </Link>

      <button
        onClick={handleDismiss}
        className="ml-auto text-white/70 hover:text-white transition-colors flex-shrink-0 p-1"
        aria-label="Dismiss promotion"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
