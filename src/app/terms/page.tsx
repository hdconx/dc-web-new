import Link from "next/link"
import { CONTACT } from "@/lib/config"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="bg-zinc-950 border-b border-white/10">
        <div className="px-8 md:px-16 lg:px-24 py-4 flex items-center gap-3 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Terms of Service</span>
        </div>
      </div>

      <section className="px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h1 className="font-serif text-4xl md:text-5xl text-slate-50 mb-4">Terms of Service</h1>
          <p className="text-slate-500 text-sm mb-16">Last updated: February 2026</p>

          <div className="space-y-12 text-slate-300 leading-relaxed">

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">1. About These Terms</h2>
              <p>
                These terms apply to the use of Dance Connexions&apos; website and services, including
                studio rentals and dance classes. By using our services, you agree to these terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">2. Studio Rentals</h2>
              <ul className="space-y-3 list-disc list-inside text-slate-400">
                <li>All rental bookings are confirmed upon receipt of a deposit as agreed at time of booking</li>
                <li>Cancellation policies are communicated at the time of booking and vary by event type</li>
                <li>Renters are responsible for any damage caused to the studio, equipment, or property</li>
                <li>The studio must be vacated by the agreed end time to accommodate other bookings</li>
                <li>Prohibited activities include martial arts, boxing, ballet (pointe work), and activities that may damage the floor or pose safety risks</li>
                <li>Maximum capacity limits must be observed for safety compliance</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">3. Dance Classes</h2>
              <ul className="space-y-3 list-disc list-inside text-slate-400">
                <li>Class fees are payable as agreed — monthly, intro pack, or drop-in</li>
                <li>Students should arrive on time; late arrivals may miss the warm-up</li>
                <li>Appropriate dance attire and footwear are required for all classes</li>
                <li>Students participate at their own risk; please inform the instructor of any medical conditions</li>
                <li>Classes may be rescheduled or cancelled in the event of instructor unavailability — students will be notified via WhatsApp</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">4. Payments and Refunds</h2>
              <p className="mb-4">
                All fees are agreed directly with Dance Connexions before commencement of services.
                Refund eligibility depends on the specific arrangement and is handled on a case-by-case basis.
                Please contact us to discuss any payment concerns.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">5. Photography and Video</h2>
              <p>
                Dance Connexions may occasionally photograph or film classes and studio sessions for marketing purposes.
                If you do not wish to appear in any materials, please inform us before your session. We will respect
                your request at all times.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">6. Limitation of Liability</h2>
              <p>
                Dance Connexions is not liable for personal injury, loss, or damage to personal belongings during
                studio use, except where caused by our direct negligence. Students and renters are responsible
                for their own safety and the safety of any minors in their care.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">7. Changes to These Terms</h2>
              <p>
                We may update these terms from time to time. The current version will always be available on
                this page. Continued use of our services constitutes acceptance of the current terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-slate-50 mb-4">8. Contact</h2>
              <p>
                Questions about these terms? Contact us via WhatsApp at{" "}
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {CONTACT.phone.display}
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
