import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-[#C00000] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl" />
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
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-lg"
            >
              <Link href="/contact">
                <Phone className="mr-2" size={20} />
                Contact Us
              </Link>
            </Button>
          </div>

          <div className="mt-10 pt-10 border-t border-white/20">
            <p className="text-white/60 text-sm">
              Call us directly at{" "}
              <a href="tel:+27629924357" className="text-white hover:underline font-semibold">
                062 992 4357
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
