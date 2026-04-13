"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image - Full Coverage */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Eureka Industries - Infrastructure that Lasts"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Premium Dark Overlay - Top to Bottom Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        {/* Top Spacing */}
        <div className="flex-1 flex items-center justify-center pt-20 md:pt-0">
          <div className="w-full px-6 md:px-8">
            {/* Company Name - MASSIVE AND DOMINANT */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8 md:mb-12">
                EUREKA<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3333] to-[#ff6666]">INDUSTRIES</span>
              </h1>
            </div>

            {/* Accent Line */}
            <div className={`h-1 bg-[#ff3333] w-32 mb-12 md:mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transformOrigin: 'left' }} />

            {/* Hook - Bold, Simple, Clear */}
            <div className={`max-w-2xl transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 md:mb-8">
                Infrastructure Built to Last
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-10 md:mb-14 max-w-xl">
                Precision engineering across KwaZulu-Natal. Projects designed to endure generations.
              </p>
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                asChild
                size="lg"
                className="bg-[#ff3333] hover:bg-[#ff1a1a] text-white font-black px-8 py-6 md:py-7 text-base md:text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(255,51,51,0.6)] transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/contact" className="flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                className="border-2 border-white/60 text-white bg-white/5 hover:bg-white/15 font-bold px-8 py-6 md:py-7 text-base md:text-lg transition-all duration-300 hover:border-white"
              >
                <Link href="/services">
                  See Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Red Bar - Location/Service Statement */}
        <div className={`bg-gradient-to-r from-[#ff3333] to-[#C00000] py-6 md:py-8 shadow-2xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="px-6 md:px-8">
            <p className="text-white font-black text-base md:text-lg text-center">
              Serving KwaZulu-Natal with Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
