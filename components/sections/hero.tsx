"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Zap, Shield, Clock } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  { value: "500+", label: "Projects Completed", icon: Zap },
  { value: "15+", label: "Years Experience", icon: Shield },
  { value: "100%", label: "On-Time Delivery", icon: Clock },
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red Glow Effects */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#C00000]/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-[#C00000]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#ff3333]/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            #C00000 50px,
            #C00000 51px
          )`
        }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-4 lg:px-8 pt-24 pb-8 md:pt-32 md:pb-16">
        <div className="max-w-5xl mx-auto w-full">
          
          {/* Animated Badge */}
          <div 
            className={`inline-flex items-center gap-2 bg-[#C00000] text-white rounded-full px-4 py-2 mb-6 md:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-bold tracking-wider uppercase">Building Excellence Since 2009</span>
          </div>

          {/* Main Heading - BOLD and IMPACTFUL */}
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-6 leading-[0.95] tracking-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="block">WE BUILD</span>
            <span className="block text-[#C00000] drop-shadow-[0_0_30px_rgba(192,0,0,0.5)]">
              THE FUTURE
            </span>
          </h1>

          {/* Subheading with Red Accent Line */}
          <div 
            className={`flex items-start gap-4 mb-6 md:mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="w-1 h-16 md:h-20 bg-gradient-to-b from-[#C00000] to-transparent flex-shrink-0 mt-1" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium leading-tight">
              KwaZulu-Natal&apos;s Premier Civil Engineering &amp; Construction Company
            </p>
          </div>

          {/* Service Tags */}
          <div 
            className={`flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {["Civil Engineering", "Construction", "Project Management", "Cleaning Services"].map((service, index) => (
              <span 
                key={service}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium hover:bg-[#C00000] hover:border-[#C00000] transition-colors cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons - Large and Prominent */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Button 
              asChild
              size="lg"
              className="bg-[#C00000] hover:bg-[#ff1a1a] text-white font-bold px-8 py-6 md:py-7 text-base md:text-lg group shadow-[0_0_40px_rgba(192,0,0,0.4)] hover:shadow-[0_0_60px_rgba(192,0,0,0.6)] transition-all"
            >
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0a0a0a] font-bold px-8 py-6 md:py-7 text-base md:text-lg transition-all"
            >
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>

          {/* Stats Section - Mobile Optimized */}
          <div 
            className={`grid grid-cols-3 gap-2 md:gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center md:text-left p-3 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#C00000]/50 transition-colors"
              >
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-[#C00000] mx-auto md:mx-0 mb-2" />
                <div className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-white/60 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Location Bar */}
      <div 
        className={`relative z-10 bg-[#C00000] py-3 md:py-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-white">
            <MapPin size={18} className="animate-bounce" />
            <span className="font-semibold text-sm md:text-base">
              Proudly Serving All of KwaZulu-Natal
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-[#C00000] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
