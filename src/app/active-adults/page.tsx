import { DetailPage } from "@/components/detail-page"

export default function ActiveAdultsPage() {
  return (
    <DetailPage
      identity={{
        id: "active-adults",
        title: "Active Adults",
        ageRange: "50+",
        tagline: "Movement for life",
        overview:
          "Our Active Adults program celebrates movement as a lifelong practice. We offer gentle, joyful classes designed to maintain mobility, build strength, and foster social connection in a supportive environment tailored for mature dancers.",
        imageUrl: "/mature-adults-dancing-gracefully-in-elegant-studio.jpg",
        danceStyles: [
          {
            name: "Ballroom Social",
            description: "Partner dancing in a friendly, social setting",
            link: "/dance-styles/ballroom",
          },
          {
            name: "Gentle Movement",
            description: "Low-impact exercises promoting flexibility and balance",
            link: "/dance-styles/gentle-movement",
          },
          {
            name: "Line Dancing",
            description: "Fun, social choreography to classic and country music",
            link: "/dance-styles/line-dancing",
          },
          {
            name: "Chair Dance",
            description: "Seated movement for all mobility levels",
            link: "/dance-styles/chair-dance",
          },
          {
            name: "Tap",
            description: "Rhythmic footwork that's mentally and physically engaging",
            link: "/dance-styles/tap",
          },
        ],
        pricing: {
          groupClasses: { price: "$25", duration: "per class", description: "Community-focused atmosphere" },
          semiPrivate: { price: "$50", duration: "per class", description: "Personalized pace and attention" },
          privateClasses: { price: "$90", duration: "per hour", description: "Adapted to your mobility and goals" },
          dropIn: { price: "$30", duration: "single class", description: "Come dance with us anytime" },
        },
      }}
    />
  )
}
