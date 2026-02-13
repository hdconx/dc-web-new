"use client"

import { Menu, User } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  onMenuClick: () => void
  isVisible: boolean
}

export function Header({ onMenuClick, isVisible }: HeaderProps) {
  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{ top: "var(--promo-bar-height, 0px)" }}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-serif text-lg tracking-tighter text-slate-50">DANCE CONNEXIONS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#hero-grid" className="text-sm text-slate-300 hover:text-white transition-colors tracking-wide">
            Dance Classes
          </Link>
          <Link href="/rentals" className="text-sm text-slate-300 hover:text-white transition-colors tracking-wide">
            Studio Rentals
          </Link>
          <Link href="/#contact" className="text-sm text-slate-300 hover:text-white transition-colors tracking-wide">
            Contact
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-slate-50 text-sm transition-all"
          >
            <User className="w-4 h-4" />
            My Portal
          </Link>
        </nav>

        {/* Mobile: login icon + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/dashboard"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            aria-label="My Portal"
          >
            <User className="w-4 h-4 text-slate-50" />
          </Link>
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-slate-50" />
          </button>
        </div>

      </div>
    </header>
  )
}
