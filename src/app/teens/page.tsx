import { DetailPage } from "@/components/detail-page"

export default function TeensPage() {
  return (
    <DetailPage
      identity={{
        id: "teens",
        title: "Teens",
        ageRange: "10-17",
        tagline: "Express yourself through movement",
        overview:
          "Our Teen program empowers young dancers to discover their unique voice through technical excellence and artistic expression. We foster a supportive community where creativity, discipline, and self-confidence flourish.",
        imageUrl: "/teenage-dancers-in-urban-dance-studio.jpg",
        danceStyles: [
          {
            name: "Hip Hop",
            description: "Urban dance styles with contemporary street culture influence",
            link: "/dance-styles/hip-hop",
          },
          {
            name: "Contemporary",
            description: "Advanced technique with emotional storytelling",
            link: "/dance-styles/contemporary",
          },
          {
            name: "Jazz",
            description: "Dynamic combinations with musical theater influence",
            link: "/dance-styles/jazz",
          },
          {
            name: "Ballet",
            description: "Classical technique for strength and foundation",
            link: "/dance-styles/ballet",
          },
          {
            name: "Lyrical",
            description: "Fluid movement expressing music and emotion",
            link: "/dance-styles/lyrical",
          },
        ],
        pricing: {
          groupClasses: { price: "$30", duration: "per class", description: "8-15 students, weekly sessions" },
          semiPrivate: { price: "$55", duration: "per class", description: "3-5 students, intensive training" },
          privateClasses: {
            price: "$95",
            duration: "per hour",
            description: "Personalized choreography and technique",
          },
          dropIn: { price: "$35", duration: "single class", description: "Flexible scheduling available" },
        },
      }}
    />
  )
}
