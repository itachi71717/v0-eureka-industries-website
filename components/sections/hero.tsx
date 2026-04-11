"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/95 via-[#1a1a1a]/85 to-[#C00000]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#C00000]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C00000]/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Image
              src="/images/logo.jpg"
              alt="Eureka Industries"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-white/90 text-sm font-medium">
              Excellence in Construction
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Eureka Industries
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-6 text-balance">
            Building KwaZulu-Natal&apos;s Future with Precision, Strength &amp; Innovation
          </p>

          {/* Supporting Text */}
          <div className="flex flex-wrap items-center gap-2 text-white/70 text-lg mb-4">
            <span>Civil Engineering</span>
            <span className="text-[#C00000]">•</span>
            <span>Construction</span>
            <span className="text-[#C00000]">•</span>
            <span>Project Management</span>
            <span className="text-[#C00000]">•</span>
            <span>Cleaning Services</span>
          </div>

          <p className="text-white/60 text-lg mb-10">
            Delivered On Time. On Budget. Without Compromise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              asChild
              size="lg"
              className="bg-[#C00000] hover:bg-[#a00000] text-white font-semibold px-8 py-6 text-lg group"
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
              className="border-white/50 text-[#1a1a1a] bg-white hover:bg-white/90 font-semibold px-8 py-6 text-lg"
            >
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>

          {/* Location Tag */}
          <div className="inline-flex items-center gap-2 text-white/60">
            <MapPin size={18} className="text-[#C00000]" />
            <span>Operating Across KwaZulu-Natal</span>
          </div>
        </div>
      </div>


    </section>
  )
}
