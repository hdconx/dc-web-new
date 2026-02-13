import { FaqPage } from "@/components/classes/faq-page"
import classesData from "@/../data/classes.json"

export const metadata = {
  title: "Active Adult Dance Classes FAQ | Dance Connexions Sunway",
  description: "Common questions about active adult dance classes at Dance Connexions — physical requirements, partners, schedule, and more.",
}

export default function ActiveAdultsFaqPage() {
  const demo = classesData.demographics.find((d) => d.id === "active-adults")!
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
