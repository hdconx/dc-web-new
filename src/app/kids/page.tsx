import { DemographicLanding } from "@/components/classes/demographic-landing"
import classesData from "@/../data/classes.json"

export const metadata = {
  title: "Kids Dance Classes | Dance Connexions Sunway",
  description:
    "Fun, safe, and age-appropriate dance classes for children aged 5–12 in Bandar Sunway. Creative Movement, Ballet Basics, Hip Hop, and K-Pop.",
}

export default function KidsPage() {
  const demo = classesData.demographics.find((d) => d.id === "kids")!
  const pricing = classesData.classPricing
  return <DemographicLanding demo={demo} pricing={pricing} />
}
