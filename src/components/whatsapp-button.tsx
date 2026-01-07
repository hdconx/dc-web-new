"use client"

import { MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/config"

export function WhatsAppButton() {
  const handleClick = () => {
    window.open(getWhatsAppUrl("general"), "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg transition-all hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-5 h-5 text-white" />
    </button>
  )
}
