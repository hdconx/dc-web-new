import { FaqPage } from "@/components/classes/faq-page"
import classesData from "@/../data/classes.json"

export const metadata = {
  title: "Kids Dance Classes FAQ | Dance Connexions Sunway",
  description: "Common questions about kids dance classes at Dance Connexions Bandar Sunway — ages, experience, schedule, pricing, and more.",
}

export default function KidsFaqPage() {
  const demo = classesData.demographics.find((d) => d.id === "kids")!
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
