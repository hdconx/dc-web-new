import { FaqPage } from "@/components/classes/faq-page"
import classesData from "@/../data/classes.json"

export const metadata = {
  title: "Teen Dance Classes FAQ | Dance Connexions Sunway",
  description: "Common questions about teen dance classes at Dance Connexions Bandar Sunway — experience, schedule, pricing, and more.",
}

export default function TeensFaqPage() {
  const demo = classesData.demographics.find((d) => d.id === "teens")!
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
