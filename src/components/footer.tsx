import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Youtube, Twitter, MessageCircle, Car, Navigation } from "lucide-react"
import { CONTACT, LOCATION, BUSINESS, getWhatsAppUrl } from "@/lib/config"

export function Footer() {
  const whatsappLink = getWhatsAppUrl("general")

  return (
    <footer id="contact" className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-50 mb-2">Contact & Location</h2>
          <p className="text-slate-400">Get in touch or find us on the map</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact & Location Info */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl text-slate-50 tracking-tighter">Dance Connexions</h3>

            {/* Contact Methods */}
            <div className="space-y-4 text-slate-300">
              <h4 className="font-semibold text-slate-200 text-lg mb-4">Contact Us</h4>

              {/* WhatsApp Contact */}
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-200">WhatsApp</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {CONTACT.phone.display}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-200">Phone</p>
                  <a
                    href={`tel:${CONTACT.phone.tel}`}
                    className="text-sm hover:text-slate-100 transition-colors"
                  >
                    {CONTACT.phone.display}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-200">Email</p>
                  <a
                    href={`mailto:${CONTACT.email.rentals}`}
                    className="text-sm hover:text-slate-100 transition-colors"
                  >
                    {CONTACT.email.rentals}
                  </a>
                </div>
              </div>

              {/* Availability Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-200">Studio Availability</p>
                  <p className="text-sm">Available 7 days a week</p>
                  <p className="text-sm text-slate-400">Early morning to late midnight</p>
                  <p className="text-sm text-emerald-400 mt-1">Contact us anytime to book</p>
                </div>
              </div>
            </div>

            {/* Location & Access */}
            <div className="space-y-4 text-slate-300">
              <h4 className="font-semibold text-slate-200 text-lg mb-4">Location & Access</h4>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-200">Address</p>
                  <p className="text-sm">{LOCATION.address.street}</p>
                  <p className="text-sm">{LOCATION.address.city}, {LOCATION.address.postcode} {LOCATION.address.state.split(',')[0]}</p>
                  <p className="text-sm">{LOCATION.address.state.split(',')[1]?.trim()}</p>
                  <p className="text-sm">{LOCATION.address.country}</p>
                  <a
                    href={LOCATION.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm mt-2 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Parking */}
              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-200">Parking</p>
                  <p className="text-sm">Ample free parking after hours & weekends</p>
                  <p className="text-sm text-slate-400">MBSJ street parking during office hours</p>
                </div>
              </div>

              {/* Accessibility */}
              <div className="text-sm bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
                <p className="text-slate-300 mb-1"><strong>Getting Here:</strong></p>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Accessible via major highways</li>
                  <li>• Public transport routes nearby</li>
                  <li>• Located in Bandar Sunway area</li>
                </ul>
                <p className="text-slate-500 text-xs mt-2 pt-2 border-t border-zinc-800">
                  Note: Studios on 2nd floor (no elevator)
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://instagram.com/danceconnexions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-slate-400" />
              </a>
              <a
                href="https://facebook.com/danceconnexions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-slate-400" />
              </a>
              <a
                href="https://youtube.com/@danceconnexions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-slate-400" />
              </a>
              <a
                href="https://x.com/danceconnexions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5 text-slate-400" />
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
