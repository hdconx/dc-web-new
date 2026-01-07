"use client"

import { Menu } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  onMenuClick: () => void
  isVisible: boolean
}

export function Header({ onMenuClick, isVisible }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="font-serif text-lg tracking-tighter text-slate-50">DANCE CONNEXIONS</h1>
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 text-slate-50" />
        </button>
      </div>
    </header>
  )
}
