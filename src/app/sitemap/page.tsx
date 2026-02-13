import Link from "next/link"
import classesData from "@/../data/classes.json"

interface SiteSection {
  title: string
  links: { label: string; href: string; description?: string }[]
}

export default function SitemapPage() {
  const sections: SiteSection[] = [
    {
      title: "Main",
      links: [
        { label: "Home", href: "/", description: "Dance Connexions homepage" },
        { label: "Dance Classes", href: "/classes", description: "All class programmes by age group" },
        { label: "Studio Rentals", href: "/rentals", description: "Hourly and event studio hire" },
      ],
    },
    {
      title: "Dance Classes — By Age Group",
      links: classesData.demographics.map((d) => ({
        label: `${d.name} (${d.ageRange})`,
        href: `/${d.slug}`,
        description: d.subheadline,
      })),
    },
    {
      title: "Dance Classes — FAQ Pages",
      links: classesData.demographics.map((d) => ({
        label: `${d.name} — FAQ`,
        href: `/${d.slug}/faq`,
      })),
    },
    {
      title: "Dance Classes — Individual Styles",
      links: classesData.demographics.flatMap((d) =>
        d.styles.map((s) => ({
          label: `${d.name} — ${s.name}`,
          href: `/${d.slug}/${s.slug}`,
          description: s.tagline,
        }))
      ),
    },
    {
      title: "Studio Rentals",
      links: [
        { label: "All Studios", href: "/rentals/rooms", description: "Browse all 4 studios" },
        { label: "Compare Studios", href: "/rentals/compare", description: "Side-by-side studio comparison" },
        { label: "Gallery", href: "/rentals/gallery", description: "Photos of all studios" },
        { label: "Promotions", href: "/rentals/promos", description: "Current offers and promotions" },
        { label: "Studio A", href: "/rentals/room/studio-a", description: "Large studio with stage and RGB lighting" },
        { label: "Studio B", href: "/rentals/room/studio-b", description: "Versatile mid-size studio" },
        { label: "Studio C", href: "/rentals/room/studio-c", description: "Private studio for intimate sessions" },
        { label: "Studio D", href: "/rentals/room/studio-d", description: "Compact studio for small groups" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <div className="bg-zinc-950 border-b border-white/10">
        <div className="px-8 md:px-16 lg:px-24 py-4 flex items-center gap-3 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Sitemap</span>
        </div>
      </div>

      <section className="px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-16 bg-white/20 mb-8" />
          <h1 className="font-serif text-4xl md:text-5xl text-slate-50 mb-4">Sitemap</h1>
          <p className="text-slate-400 mb-16">All pages on the Dance Connexions website.</p>

          <div className="space-y-16">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xs tracking-widest uppercase text-slate-500 mb-6">{section.title}</h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href} className="flex items-baseline gap-4">
                      <Link
                        href={link.href}
                        className="text-slate-200 hover:text-white transition-colors font-medium min-w-48"
                      >
                        {link.label}
                      </Link>
                      {link.description && (
                        <span className="text-slate-500 text-sm">{link.description}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
