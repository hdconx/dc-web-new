import { FaqPage } from "@/components/classes/faq-page"
import classesData from "@/../data/classes.json"

export const metadata = {
  title: "Adult Dance Classes FAQ | Dance Connexions Sunway",
  description: "Common questions about adult dance classes at Dance Connexions — age, experience, schedule, pricing, private sessions, and more.",
}

export default function AdultsFaqPage() {
  const demo = classesData.demographics.find((d) => d.id === "adults")!
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
