import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact Us | Eureka Industries | KwaZulu-Natal Construction Company",
  description: "Contact Eureka Industries for civil engineering, construction, ClearVu fencing, and cleaning services in KZN. Get a free quote today. Call 062 992 4357.",
  keywords: "Contact Eureka Industries, Construction Quote KZN, Civil Engineering Contact, Pietermaritzburg Construction, Durban Construction Company",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <section className="py-20 lg:py-32 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <ContactMap />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
