"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with Strategic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Eureka Industries - Construction and Infrastructure"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/92 via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
      </div>

      {/* Dynamic Red Glow Accents */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C00000]/30 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#ff3333]/20 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl">
          
          {/* Company Name - PROMINENT, BOLD */}
          <div 
            className={`mb-4 md:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-[#ff3333] text-lg md:text-xl font-black tracking-widest uppercase mb-2">
              EUREKA INDUSTRIES
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#ff3333] to-[#C00000] rounded-full" />
          </div>

          {/* Main Hook Headline - ONE POWERFUL LINE */}
          <h1 
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 md:mb-10 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            We Build The Infrastructure That Defines KwaZulu-Natal
          </h1>

          {/* Subheading - The Promise */}
          <p 
            className={`text-xl sm:text-2xl md:text-3xl text-white/90 font-semibold mb-10 md:mb-12 max-w-3xl leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            500+ projects completed. 15+ years of excellence. 100% on-time delivery. We don't just build—we transform communities into thriving futures.
          </p>

          {/* CTA - Bold & Simple */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Button 
              asChild
              size="lg"
              className="bg-[#ff3333] hover:bg-[#ff1a1a] text-white font-black px-10 py-8 md:py-9 text-lg md:text-xl shadow-[0_0_60px_rgba(255,51,51,0.6)] hover:shadow-[0_0_100px_rgba(255,51,51,0.9)] transition-all duration-300 hover:scale-105 group"
            >
              <Link href="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              className="border-2 border-white text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#0a0a0a] font-bold px-10 py-8 md:py-9 text-lg md:text-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/services">
                See Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Location Bar - Bold & Vibrant */}
      <div 
        className={`relative z-10 bg-gradient-to-r from-[#ff3333] to-[#C00000] py-5 md:py-6 shadow-2xl transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-white">
            <MapPin size={22} className="animate-pulse flex-shrink-0" />
            <span className="font-black text-base md:text-lg">
              Serving All of KwaZulu-Natal
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/40 pointer-events-none animate-bounce">
        <span className="text-xs uppercase tracking-widest font-bold">Scroll to explore</span>
      </div>
    </section>
  )
}
