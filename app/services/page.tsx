import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Services | Construction, Engineering & Cleaning Services in KZN | Eureka Industries",
  description: "Comprehensive civil engineering, ClearVu fencing, residential & commercial construction, educational facilities, cleaning services, and plant hire across KwaZulu-Natal.",
  keywords: "ClearVu Fencing KZN, Civil Engineering Services, Construction Company KZN, Cleaning Services KZN, Plant Hire South Africa",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
