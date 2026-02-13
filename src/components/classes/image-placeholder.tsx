/**
 * ImagePlaceholder — shows where a real image goes, with the AI generation prompt.
 *
 * When a real image is ready:
 * 1. Generate the image using Grok / Midjourney / Firefly with the prompt shown here.
 * 2. Optimise and save to /public/images/classes/[filename].webp
 * 3. Replace this component with:
 *    <Image src="/images/classes/[filename].webp" alt="..." fill className="object-cover" />
 */

interface ImagePlaceholderProps {
  /** Short label shown on the placeholder — what this image represents */
  label: string
  /** The AI generation prompt to use when creating this image */
  prompt: string
  /** Optional CSS classes for the outer container */
  className?: string
  /** Inline styles (e.g. aspectRatio) */
  style?: React.CSSProperties
  /** Show the prompt text on the placeholder (default: true) */
  showPrompt?: boolean
}

import React from "react"

export function ImagePlaceholder({
  label,
  prompt,
  className = "",
  style,
  showPrompt = true,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative bg-zinc-900 border border-dashed border-white/20 overflow-hidden flex flex-col items-center justify-center p-8 text-center ${className}`}
      style={style}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Icon */}
      <div className="relative z-10 mb-4 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
        <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      {/* Label */}
      <div className="relative z-10 mb-3 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
        <span className="text-slate-400 text-xs tracking-widest uppercase">{label}</span>
      </div>

      {/* Prompt */}
      {showPrompt && (
        <div className="relative z-10 max-w-sm">
          <p className="text-slate-600 text-xs mb-1 tracking-wider uppercase">AI Image Prompt:</p>
          <p className="text-slate-500 text-xs leading-relaxed">{prompt}</p>
        </div>
      )}
    </div>
  )
}
