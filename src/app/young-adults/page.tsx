import { DetailPage } from "@/components/detail-page"

export default function YoungAdultsPage() {
  return (
    <DetailPage
      identity={{
        id: "young-adults",
        title: "Young Adults",
        ageRange: "18-30",
        tagline: "Elevate your artistry",
        overview:
          "Our Young Adults program offers advanced training for serious dancers pursuing artistic excellence. Whether you're preparing for auditions, refining your technique, or exploring new styles, we provide the professional environment to push your boundaries.",
        imageUrl: "/young-adult-ballet-dancers-in-modern-studio.jpg",
        danceStyles: [
          {
            name: "Contemporary",
            description: "Advanced choreography with professional-level technique",
            link: "/dance-styles/contemporary",
          },
          {
            name: "Ballet",
            description: "Classical training with pointe work and variations",
            link: "/dance-styles/ballet",
          },
          {
            name: "Modern",
            description: "Graham, Horton, and release techniques",
            link: "/dance-styles/modern",
          },
          {
            name: "Jazz",
            description: "Commercial and theatrical jazz styles",
            link: "/dance-styles/jazz",
          },
          {
            name: "Choreography Workshop",
            description: "Develop your creative voice and composition skills",
            link: "/dance-styles/choreography",
          },
        ],
        pricing: {
          groupClasses: { price: "$35", duration: "per class", description: "Professional-level training environment" },
          semiPrivate: { price: "$65", duration: "per class", description: "3-5 dancers, audition preparation" },
          privateClasses: {
            price: "$110",
            duration: "per hour",
            description: "Career coaching and technique refinement",
          },
          dropIn: { price: "$40", duration: "single class", description: "Open to experienced dancers" },
        },
      }}
    />
  )
}
