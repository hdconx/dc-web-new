import { DemographicLanding } from "@/components/classes/demographic-landing"
import classesData from "@/../data/classes.json"

export const metadata = {
  title: "Young Adult Dance Classes | Dance Connexions Sunway",
  description:
    "Dance classes for young adults aged 18–30 in Bandar Sunway. Salsa, K-Pop, Contemporary, Hip Hop, and Heels Style.",
}

export default function YoungAdultsPage() {
  const demo = classesData.demographics.find((d) => d.id === "young-adults")!
  return <DemographicLanding demo={demo} pricing={classesData.classPricing} />
}
