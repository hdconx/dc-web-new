import { DemographicLanding } from "@/components/classes/demographic-landing"
import classesData from "@/../data/classes.json"

export const metadata = {
  title: "Teen Dance Classes | Dance Connexions Sunway",
  description:
    "Dance classes for teenagers aged 13–17 in Bandar Sunway. K-Pop, Hip Hop, Street Jazz, Contemporary, and Breaking.",
}

export default function TeensPage() {
  const demo = classesData.demographics.find((d) => d.id === "teens")!
  return <DemographicLanding demo={demo} pricing={classesData.classPricing} />
}
