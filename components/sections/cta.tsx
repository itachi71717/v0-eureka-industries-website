import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#C00000] to-[#a00000] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Partner with Eureka Industries for reliable, high-quality results. 
            Let&apos;s build something exceptional together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-white text-[#C00000] hover:bg-white/90 font-semibold px-8 py-6 text-lg group"
            >
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-white text-[#C00000] hover:bg-white/90 font-semibold px-8 py-6 text-lg group"
            >
              <a href="tel:+27629924357">
                <Phone className="mr-2" size={20} />
                Call Us
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold px-8 py-6 text-lg group"
            >
              <a href="https://wa.me/27629924357?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
