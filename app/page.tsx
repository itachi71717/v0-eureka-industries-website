import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { TrustIndicators } from "@/components/sections/trust-indicators"
import { AboutSection } from "@/components/sections/about"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { ServicesPreview } from "@/components/sections/services-preview"
import { ApproachSection } from "@/components/sections/approach"
import { SustainabilitySection } from "@/components/sections/sustainability"
import { CTASection } from "@/components/sections/cta"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustIndicators />
      <AboutSection />
      <WhyChooseUs />
      <ServicesPreview />
      <ApproachSection />
      <SustainabilitySection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
