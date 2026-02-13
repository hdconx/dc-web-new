import Link from "next/link"
import { CONTACT, BUSINESS, LOCATION } from "@/lib/config"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="bg-zinc-950 border-b border-white/10">
        <div className="px-8 md:px-16 lg:px-24 py-4 flex items-center gap-3 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Privacy Policy</span>
        </div>
      </div>

      <section className="px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h1 className="font-serif text-4xl md:text-5xl text-slate-50 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-16">Last updated: February 2026</p>

          <div className="space-y-12 text-slate-300 leading-relaxed">

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">1. Who We Are</h2>
              <p>
                {BUSINESS.name} operates a dance studio in {LOCATION.address.city}, {LOCATION.address.state.split(",")[0]}, Malaysia.
                This policy explains how we handle personal information when you visit our website or contact us.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect only the minimum information needed to respond to your enquiry:</p>
              <ul className="space-y-2 list-disc list-inside text-slate-400">
                <li>Your name and contact details (when you message us via WhatsApp or email)</li>
                <li>Information you voluntarily share about your dance class needs or studio rental requirements</li>
                <li>Standard website analytics data (page visits, device type) — no personally identifiable data</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">3. How We Use Your Information</h2>
              <ul className="space-y-2 list-disc list-inside text-slate-400">
                <li>To respond to your enquiries about classes or studio rentals</li>
                <li>To provide class schedules, pricing, and booking confirmations</li>
                <li>To send information you have specifically requested</li>
              </ul>
              <p className="mt-4">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">4. WhatsApp Communications</h2>
              <p>
                When you contact us via WhatsApp, your messages are subject to WhatsApp&apos;s own privacy policy.
                We use WhatsApp solely to communicate with you about our services. We do not add you to
                broadcast lists or group chats without your consent.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">5. Data Retention</h2>
              <p>
                We retain your contact information only as long as necessary to provide the service you requested
                or as required by law. You may request deletion of your information at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">6. Your Rights</h2>
              <p className="mb-4">Under Malaysian personal data protection laws, you have the right to:</p>
              <ul className="space-y-2 list-disc list-inside text-slate-400">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent for us to contact you</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">7. Contact</h2>
              <p>
                For any privacy-related queries, contact us via WhatsApp at{" "}
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {CONTACT.phone.display}
                </a>{" "}
                or by email at{" "}
                <a
                  href={`mailto:${CONTACT.email.rentals}`}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {CONTACT.email.rentals}
                </a>.
              </p>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <Link href="/" className="text-slate-400 hover:text-slate-200 transition-colors text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
