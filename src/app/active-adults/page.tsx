import { DemographicLanding } from "@/components/classes/demographic-landing"
import classesData from "@/../data/classes.json"

export const metadata = {
  title: "Active Adult Dance Classes | Dance Connexions Sunway",
  description:
    "Gentle dance classes for active adults aged 55+ in Bandar Sunway. Ballroom Basics, Line Dancing, Latin Rhythm, and Social Dance.",
}

export default function ActiveAdultsPage() {
  const demo = classesData.demographics.find((d) => d.id === "active-adults")!
  return <DemographicLanding demo={demo} pricing={classesData.classPricing} />
}
