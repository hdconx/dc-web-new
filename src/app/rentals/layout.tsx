import { PromoBar } from "@/components/promo-bar"

export default function RentalsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PromoBar />
      {children}
    </>
  )
}
