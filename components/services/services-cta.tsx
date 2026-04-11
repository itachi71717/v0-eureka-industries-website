import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"

export function ServicesCTA() {
  return (
    <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C00000]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C00000]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#C00000]/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#C00000] to-[#a00000] rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Need a Custom Solution?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Every project is unique. Contact us to discuss your specific requirements 
            and get a tailored quote for your construction or service needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-white text-[#C00000] hover:bg-white/90 font-semibold px-8 group"
            >
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-white text-[#C00000] hover:bg-white/90 font-semibold px-8"
            >
              <a href="tel:+27629924357">
                <Phone className="mr-2" size={18} />
                Call Us
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold px-8"
            >
              <a href="https://wa.me/27629924357?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={18} />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
