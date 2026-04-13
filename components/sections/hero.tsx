"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full bg-gradient-to-br from-[#C00000] via-[#ff3333] to-[#8B0000] min-h-screen flex flex-col">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-black/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 pt-32 md:pt-20 pb-20">
        {/* Animated Badge */}
        <div className={`inline-flex items-center gap-2 mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-white/90 text-sm md:text-base font-semibold tracking-widest uppercase">Engineering Excellence</span>
        </div>

        {/* Company Name - FULL NAME VISIBLE */}
        <div className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
            EUREKA<br />
            <span className="text-white drop-shadow-lg">INDUSTRIES</span>
          </h1>
        </div>

        {/* Primary Hook */}
        <div className={`max-w-2xl mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
            Building Tomorrow, Today
          </p>
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
            We don't just build infrastructure. We engineer futures. From concept to completion, we deliver projects that transform communities and stand the test of time.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            asChild
            size="lg"
            className="bg-white hover:bg-white/90 text-[#C00000] font-black px-8 md:px-10 py-7 md:py-8 text-base md:text-lg shadow-2xl hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
          >
            <Link href="/contact" className="flex items-center justify-center">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
            </Link>
          </Button>
          <Button 
            asChild
            size="lg"
            className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-black px-8 md:px-10 py-7 md:py-8 text-base md:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <Link href="/services" className="flex items-center justify-center">
              <Zap size={20} className="mr-2" />
              See Our Work
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/70 text-sm font-semibold">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
