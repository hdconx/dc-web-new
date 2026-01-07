import { DetailPage } from "@/components/detail-page"

export default function KidsPage() {
  return (
    <DetailPage
      identity={{
        id: "kids",
        title: "Kids",
        ageRange: "5-9",
        tagline: "Where imagination meets movement",
        overview:
          "Our Kids program nurtures young dancers through creative exploration and foundational technique. We believe in building confidence, coordination, and a lifelong love of movement in a supportive, playful environment.",
        imageUrl: "/images/image.png",
        danceStyles: [
          {
            name: "Ballet",
            description: "Classic technique foundations with age-appropriate progressions",
            link: "/dance-styles/ballet",
          },
          {
            name: "Contemporary",
            description: "Expressive movement combining multiple dance forms",
            link: "/dance-styles/contemporary",
          },
          {
            name: "Jazz",
            description: "Energetic choreography set to popular music",
            link: "/dance-styles/jazz",
          },
          {
            name: "Creative Movement",
            description: "Imaginative exploration of rhythm, space, and body awareness",
            link: "/dance-styles/creative-movement",
          },
        ],
        pricing: {
          groupClasses: { price: "$25", duration: "per class", description: "8-12 students, weekly sessions" },
          semiPrivate: { price: "$45", duration: "per class", description: "3-5 students, focused attention" },
          privateClasses: { price: "$85", duration: "per hour", description: "One-on-one personalized instruction" },
          dropIn: { price: "$30", duration: "single class", description: "Try before you commit" },
        },
      }}
    />
  )
}
