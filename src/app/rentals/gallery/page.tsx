"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X, Play, Camera } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAvailableRooms } from "@/lib/config"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

// Gallery images for each room (using actual photos)
const galleryImages: Record<string, { src: string; caption: string }[]> = {
  "room-a": [
    { src: "/rentals-hero/01-MARKETING-SELECTED/01-Studio-A-Main-Floor.jpg", caption: "Main dance floor with 3-wall mirrors" },
    { src: "/rentals-hero/Studio A-Main.jpg", caption: "Full studio view" },
    { src: "/rentals-hero/01-MARKETING-SELECTED/05-Studio-A-Seating-Setup.jpg", caption: "Workshop seating configuration" },
    { src: "/rentals-hero/01-MARKETING-SELECTED/06-Studio-A-Event-Setup.jpg", caption: "Event setup with chairs" },
    { src: "/rentals-hero/Studio A - 1.jpg", caption: "Studio A from entrance" },
  ],
  "room-b": [
    { src: "/rentals-hero/01-MARKETING-SELECTED/02-Studio-B.jpg", caption: "Studio B - connected to Room A" },
    // TODO: Add more Room B photos
  ],
  "room-c": [
    { src: "/rentals-hero/01-MARKETING-SELECTED/03-Studio-C.jpg", caption: "Studio C - compact & private" },
    // TODO: Add more Room C photos
  ],
  "room-d": [
    { src: "/rentals-hero/01-MARKETING-SELECTED/04-Studio-D.jpg", caption: "Studio D - standalone medium studio" },
    { src: "/rentals-hero/studio-d-medium-standalone.jpg", caption: "Versatile creation space" },
  ],
}

export default function GalleryPage() {
  const rooms = getAvailableRooms()
  const [activeRoom, setActiveRoom] = useState("room-a")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const currentImages = galleryImages[activeRoom] || []
  const currentRoom = rooms.find((r) => r.id === activeRoom)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50">
      <Header onMenuClick={() => {}} isVisible={true} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/rentals"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Rentals
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Studio Gallery
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Explore our professional dance studios through photos. See the spaces, equipment, and setup options available.
          </p>
        </div>
      </section>

      {/* Room Tabs */}
      <section className="py-6 px-6 bg-zinc-950 border-b border-zinc-800 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeRoom === room.id
                    ? "bg-emerald-600 text-white"
                    : "bg-zinc-800 text-slate-300 hover:bg-zinc-700"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Room Info Banner */}
      {currentRoom && (
        <section className="py-6 px-6 bg-zinc-900/50">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">{currentRoom.name}</h2>
              <p className="text-slate-400">{currentRoom.subtitle} &bull; {currentRoom.size.sqft.toLocaleString()} sqft</p>
            </div>
            <Link
              href={`/rentals/room/${currentRoom.id}`}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              View Full Details
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}

      {/* Image Grid */}
      <section className="py-12 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.jpg"
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                </div>
                {/* Zoom icon */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </button>
            ))}
          </div>

          {/* No images fallback */}
          {currentImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">Gallery images coming soon for this room.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Placeholder Section */}
      <section className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-800 rounded-full mb-6">
            <Play className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-50 mb-4">Video Tours Coming Soon</h2>
          <p className="text-slate-400 mb-8">
            We&apos;re preparing immersive video tours of each studio. Stay tuned for 360° walkthroughs
            and behind-the-scenes content.
          </p>
          <Link
            href="/rentals/rooms"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Browse All Rooms
          </Link>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-black/95 border-none flex items-center justify-center"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">
            {currentImages[lightboxIndex]?.caption || "Studio image"} - {currentRoom?.name}
          </DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button - positioned at top-right corner */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="fixed top-6 right-6 z-50 bg-black/70 backdrop-blur-sm p-3 rounded-full text-white hover:bg-black/90 transition-colors shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows - positioned at left and right edges */}
            {currentImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="fixed left-6 top-1/2 -translate-y-1/2 z-50 bg-black/70 backdrop-blur-sm p-4 rounded-full text-white hover:bg-black/90 transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  onClick={nextImage}
                  className="fixed right-6 top-1/2 -translate-y-1/2 z-50 bg-black/70 backdrop-blur-sm p-4 rounded-full text-white hover:bg-black/90 transition-colors shadow-lg"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}

            {/* Image */}
            {currentImages[lightboxIndex] && (
              <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <img
                  src={currentImages[lightboxIndex].src}
                  alt={currentImages[lightboxIndex].caption}
                  className="max-w-[85vw] max-h-[75vh] w-auto h-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.jpg"
                  }}
                />
                {/* Caption */}
                <div className="py-4 px-6 text-center">
                  <p className="text-white text-sm mb-2">{currentImages[lightboxIndex].caption}</p>
                  <p className="text-slate-400 text-xs">
                    {lightboxIndex + 1} of {currentImages.length} &bull; {currentRoom?.name}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
