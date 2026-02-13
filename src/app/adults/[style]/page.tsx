import { notFound } from "next/navigation"
import { StylePage } from "@/components/classes/style-page"
import classesData from "@/../data/classes.json"

export async function generateStaticParams() {
  const demo = classesData.demographics.find((d) => d.id === "adults")!
  return demo.styles.map((s) => ({ style: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ style: string }> }) {
  const { style: styleSlug } = await params
  const demo = classesData.demographics.find((d) => d.id === "adults")!
  const style = demo.styles.find((s) => s.slug === styleSlug)
  if (!style) return {}
  return {
    title: `${style.name} — Adult Classes | Dance Connexions Sunway`,
    description: style.fullDescription.slice(0, 155),
  }
}

export default async function AdultsStylePage({ params }: { params: Promise<{ style: string }> }) {
  const { style: styleSlug } = await params
  const demo = classesData.demographics.find((d) => d.id === "adults")!
  const style = demo.styles.find((s) => s.slug === styleSlug)
  if (!style) notFound()

  const relatedStyles = demo.styles
    .filter((s) => s.slug !== styleSlug)
    .slice(0, 3)
    .map((s) => ({ slug: s.slug, name: s.name, tagline: s.tagline }))

  return (
    <StylePage
      demoName={demo.name}
      demoAgeRange={demo.ageRange}
      demoSlug={demo.slug}
      style={style}
      relatedStyles={relatedStyles}
      pricing={classesData.classPricing}
    />
  )
}
