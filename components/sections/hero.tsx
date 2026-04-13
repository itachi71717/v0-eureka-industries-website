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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Eureka Industries - Construction and Infrastructure"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/75 to-[#0a0a0a]/50" />
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C00000]/25 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#ff3333]/15 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          
          {/* Company Name - HUGE ON MOBILE */}
          <h1 
            className={`text-7xl sm:text-8xl md:text-9xl font-black text-white mb-12 md:mb-16 leading-tight tracking-tight transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            EUREKA
          </h1>

          {/* Red accent line */}
          <div className={`w-20 h-1.5 bg-gradient-to-r from-[#ff3333] to-[#C00000] rounded-full mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transformOrigin: 'left' }} />

          {/* Hook - Simple, Powerful */}
          <p 
            className={`text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 md:mb-8 leading-tight transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            We Build Infrastructure That Lasts
          </p>

          {/* Subheading */}
          <p 
            className={`text-lg sm:text-xl md:text-2xl text-white/85 font-medium mb-12 md:mb-14 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Engineering excellence across KwaZulu-Natal. Projects built to stand the test of time.
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Button 
              asChild
              size="lg"
              className="bg-[#ff3333] hover:bg-[#ff1a1a] text-white font-black px-8 py-7 md:py-8 text-lg shadow-[0_0_60px_rgba(255,51,51,0.5)] hover:shadow-[0_0_100px_rgba(255,51,51,0.8)] transition-all duration-300 hover:scale-105 group"
            >
              <Link href="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-[#0a0a0a] font-bold px-8 py-7 md:py-8 text-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="/services">
                See Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Location Bar */}
      <div 
        className={`relative z-10 bg-gradient-to-r from-[#ff3333] to-[#C00000] py-5 md:py-6 shadow-2xl transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-white">
            <MapPin size={20} className="flex-shrink-0" />
            <span className="font-black text-base md:text-lg">
              Serving KwaZulu-Natal
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
