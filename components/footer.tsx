import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.jpg"
                alt="Eureka Industries Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="font-bold text-xl">Eureka Industries</span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Building KwaZulu-Natal&apos;s future with precision, strength, and innovation. 
              Civil engineering and construction excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-white/70 hover:text-[#C00000] transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-white/70 hover:text-[#C00000] transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-[#C00000] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/services#civil-engineering" className="text-white/70 hover:text-[#C00000] transition-colors">
                Civil Engineering
              </Link>
              <Link href="/services#clearvu-fencing" className="text-white/70 hover:text-[#C00000] transition-colors">
                ClearVu Fencing
              </Link>
              <Link href="/services#construction" className="text-white/70 hover:text-[#C00000] transition-colors">
                Construction
              </Link>
              <Link href="/services#cleaning" className="text-white/70 hover:text-[#C00000] transition-colors">
                Cleaning Services
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a 
                href="tel:+27629924357" 
                className="flex items-center gap-3 text-white/70 hover:text-[#C00000] transition-colors"
              >
                <Phone size={18} className="text-[#C00000]" />
                062 992 4357
              </a>
              <a 
                href="mailto:eurekaindustries.20@gmail.com" 
                className="flex items-center gap-3 text-white/70 hover:text-[#C00000] transition-colors"
              >
                <Mail size={18} className="text-[#C00000]" />
                eurekaindustries.20@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="text-[#C00000] flex-shrink-0 mt-1" />
                <span>Operating Across KwaZulu-Natal</span>
              </div>
              <a 
                href="https://www.instagram.com/eurekaindustries6?utm_source=qr&igsh=MWVxeWU1enAzYWVwZw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#C00000] transition-colors"
              >
                <Instagram size={18} className="text-[#C00000]" />
                Our Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Eureka Industries. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            KwaZulu-Natal, South Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
