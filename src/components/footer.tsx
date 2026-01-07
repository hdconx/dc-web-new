import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react"
import { CONTACT, LOCATION, BUSINESS } from "@/lib/config"

export function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-slate-50 tracking-tighter">Dance Connexions</h3>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-1" />
                <div>
                  <p className="font-medium text-slate-200">Location</p>
                  <p className="text-sm">{LOCATION.address.street}</p>
                  <p className="text-sm">{LOCATION.address.city}, {LOCATION.address.postcode} {LOCATION.address.state.split(',')[0]}</p>
                  <p className="text-sm">{LOCATION.address.state.split(',')[1]?.trim()}, {LOCATION.address.country}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-400 mt-1" />
                <div>
                  <p className="font-medium text-slate-200">Operating Hours</p>
                  <p className="text-sm">Mon-Fri: 10am - 9pm</p>
                  <p className="text-sm">Sat-Sun: 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-400 mt-1" />
                <div>
                  <p className="font-medium text-slate-200">Contact</p>
                  <p className="text-sm">{CONTACT.phone.display}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-400 mt-1" />
                <div>
                  <p className="font-medium text-slate-200">Email</p>
                  <p className="text-sm">{CONTACT.email.rentals}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-slate-400" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div id="location" className="relative h-80 rounded-lg overflow-hidden border border-white/10">
            <iframe
              src={LOCATION.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dance Connexions Location"
            ></iframe>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="/#hero-grid" className="hover:text-slate-200 transition-colors">
              Home
            </a>
            <a href="/kids" className="hover:text-slate-200 transition-colors">
              Kids
            </a>
            <a href="/teens" className="hover:text-slate-200 transition-colors">
              Teens
            </a>
            <a href="/young-adults" className="hover:text-slate-200 transition-colors">
              Young Adults
            </a>
            <a href="/adults" className="hover:text-slate-200 transition-colors">
              Adults
            </a>
            <a href="/active-adults" className="hover:text-slate-200 transition-colors">
              Active Adults
            </a>
            <a href="/rentals" className="hover:text-slate-200 transition-colors">
              Rentals
            </a>
          </div>

          <div className="text-center mt-8 space-y-2">
            <p className="text-sm text-slate-500">
              © 2026 Dance Connexions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-600">
              <a href="/privacy" className="hover:text-slate-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms" className="hover:text-slate-400 transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="/sitemap" className="hover:text-slate-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
