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
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Construction site - Eureka Industries building the future of KwaZulu-Natal"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay Gradient - Strategic for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/85 to-[#0a0a0a]/70" />
        
        {/* Dynamic Red Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C00000]/5 to-[#C00000]/10" />
      </div>

      {/* Animated Decorative Elements - Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Top right glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C00000]/20 rounded-full blur-3xl opacity-60" />
        {/* Bottom left glow */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#ff3333]/15 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-4 lg:px-8 pt-24 pb-8 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto w-full">
          
          {/* Top Badge - What We Do */}
          <div 
            className={`inline-flex items-center gap-2 bg-[#C00000] text-white rounded-full px-4 py-2.5 mb-8 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-bold tracking-wider uppercase">Civil Engineering • Construction • Infrastructure</span>
          </div>

          {/* Main Headline - MASSIVE, BOLD, IMPACTFUL */}
          <h1 
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-[0.92] tracking-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="block">Transform</span>
            <span className="block text-[#ff3333] drop-shadow-[0_0_40px_rgba(255,51,51,0.7)] animate-pulse">
              KwaZulu-Natal
            </span>
            <span className="block">Into Tomorrow</span>
          </h1>

          {/* Subheading - Emotional & Compelling */}
          <div 
            className={`flex items-start gap-4 mb-8 md:mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="w-1.5 h-20 md:h-24 bg-gradient-to-b from-[#ff3333] via-[#C00000] to-transparent flex-shrink-0 mt-0.5 rounded-full" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-bold leading-snug">
              We don&apos;t just build structures. We engineer the backbone of communities. Bold infrastructure. Intelligent solutions. Delivered on time, every time.
            </p>
          </div>

          {/* Service Highlights - Eye-catching Pills */}
          <div 
            className={`flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-14 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {[
              { service: "Civil Engineering", emoji: "🏗️" },
              { service: "Commercial Construction", emoji: "🏢" },
              { service: "Infrastructure", emoji: "🛣️" },
              { service: "Project Management", emoji: "📋" }
            ].map((item, index) => (
              <span 
                key={item.service}
                className="bg-white/15 backdrop-blur-md border border-white/30 text-white px-4 py-2.5 md:px-5 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-[#C00000] hover:border-[#C00000] hover:scale-105 transition-all cursor-pointer shadow-lg"
              >
                <span className="mr-2">{item.emoji}</span>{item.service}
              </span>
            ))}
          </div>

          {/* CTA Buttons - Large & Commanding */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Button 
              asChild
              size="lg"
              className="bg-[#ff3333] hover:bg-[#ff1a1a] text-white font-black px-8 py-7 md:py-8 text-lg md:text-xl group shadow-[0_0_50px_rgba(255,51,51,0.5)] hover:shadow-[0_0_80px_rgba(255,51,51,0.8)] transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                Get Your Free Quote Now
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#0a0a0a] font-bold px-8 py-7 md:py-8 text-lg md:text-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/services">
                Explore Our Work
              </Link>
            </Button>
          </div>

          {/* Impact Stats - Bold Numbers */}
          <div 
            className={`grid grid-cols-3 gap-3 md:gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="p-4 md:p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#ff3333] transition-all group cursor-default hover:bg-white/15"
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-[#ff3333] mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1.5">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm text-white/70 font-semibold leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Location Bar - Bold & Bright */}
      <div 
        className={`relative z-10 bg-gradient-to-r from-[#ff3333] to-[#C00000] py-4 md:py-5 shadow-lg transition-all duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-white">
            <MapPin size={20} className="animate-bounce flex-shrink-0" />
            <span className="font-black text-base md:text-lg">
              Proudly Serving All of KwaZulu-Natal
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/50 pointer-events-none">
        <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-[#ff3333] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
