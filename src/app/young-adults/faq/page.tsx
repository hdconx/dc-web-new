import { FaqPage } from "@/components/classes/faq-page"
import classesData from "@/../data/classes.json"

export const metadata = {
  title: "Young Adult Dance Classes FAQ | Dance Connexions Sunway",
  description: "Common questions about young adult dance classes at Dance Connexions — schedule, pricing, experience, and more.",
}

export default function YoungAdultsFaqPage() {
  const demo = classesData.demographics.find((d) => d.id === "young-adults")!
  return (
    <FaqPage
      demoName={demo.name}
      demoAgeRange={demo.ageRange}
      demoSlug={demo.slug}
      whatsappMessage={demo.whatsappMessage}
      faqs={demo.faqs}
    />
  )
}
