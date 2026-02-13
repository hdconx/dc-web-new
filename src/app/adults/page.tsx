import { DemographicLanding } from "@/components/classes/demographic-landing"
import classesData from "@/../data/classes.json"

export const metadata = {
  title: "Adult Dance Classes | Dance Connexions Sunway",
  description:
    "Dance classes for adults aged 30–55 in Bandar Sunway. Ballroom & Latin, Salsa, Contemporary, and Barre Fitness.",
}

export default function AdultsPage() {
  const demo = classesData.demographics.find((d) => d.id === "adults")!
  return <DemographicLanding demo={demo} pricing={classesData.classPricing} />
}
