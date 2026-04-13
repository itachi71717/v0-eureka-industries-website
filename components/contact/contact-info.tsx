import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "062 992 4357",
    href: "tel:+27629924357"
  },
  {
    icon: Mail,
    label: "Email",
    value: "eurekaindustries.20@gmail.com",
    href: "mailto:eurekaindustries.20@gmail.com"
  },
  {
    icon: Clock,
    label: "Operating Hours",
    value: "Monday - Friday: 8am - 5pm",
    href: null
  }
]

const addresses = [
  {
    city: "Pietermaritzburg",
    address: "32 Cassimjee Road, Northdale, Pietermaritzburg, 3201",
    mapsUrl: "https://www.google.com/maps/search/32+Cassimjee+Road+Northdale+Pietermaritzburg"
  },
  {
    city: "Durban",
    address: "360 Kenyon Howden, Montclair, Durban, 4001",
    mapsUrl: "https://www.google.com/maps/search/360+Kenyon+Howden+Montclair+Durban"
  }
]

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8">
        Contact Information
      </h2>

      {/* Contact Details Grid - Separated for better spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#C00000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-[#C00000]" />
          </div>
          <div>
            <div className="text-sm text-[#6a6a6a] mb-1">Phone</div>
            <a 
              href="tel:+27629924357" 
              className="text-[#1a1a1a] font-semibold hover:text-[#C00000] transition-colors text-lg"
            >
              062 992 4357
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#C00000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-[#C00000]" />
          </div>
          <div>
            <div className="text-sm text-[#6a6a6a] mb-1">Email</div>
            <a 
              href="mailto:eurekaindustries.20@gmail.com" 
              className="text-[#1a1a1a] font-semibold hover:text-[#C00000] transition-colors whitespace-nowrap"
            >
              eurekaindustries.20@gmail.com
            </a>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#C00000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-[#C00000]" />
          </div>
          <div>
            <div className="text-sm text-[#6a6a6a] mb-1">Operating Hours</div>
            <div className="text-[#1a1a1a] font-semibold text-sm">Monday - Friday: 8am - 5pm</div>
          </div>
        </div>
      </div>

      {/* Social Media CTAs */}
      <div className="mb-10 space-y-3">
        <Button 
          asChild
          size="lg"
          className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold"
        >
          <a 
            href="https://wa.me/27629924357?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Chat on WhatsApp
          </a>
        </Button>
        <Button 
          asChild
          size="lg"
          className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white font-semibold"
        >
          <a 
            href="https://www.instagram.com/eurekaindustries6?utm_source=qr&igsh=MWVxeWU1enAzYWVwZw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="mr-2 w-5 h-5" />
            Our Instagram
          </a>
        </Button>
      </div>

      {/* Our Locations */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#C00000]" />
          Our Business Locations
        </h3>
        <div className="space-y-4">
          {addresses.map((location) => (
            <Link 
              key={location.city}
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-[#e8e8e8] rounded-lg p-4 hover:border-[#C00000] hover:shadow-md transition-all duration-300"
            >
              <div className="font-semibold text-[#C00000] mb-1 flex items-center gap-2 group-hover:gap-3 transition-all">
                {location.city}
                <MapPin className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-[#4a4a4a] text-sm">{location.address}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Service Area Information */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-lg p-8 border border-white/10">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-[#C00000]/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-7 h-7 text-[#C00000]" />
          </div>
          <div className="flex-1">
            <div className="text-white/60 text-sm font-medium mb-1">Service Coverage</div>
            <div className="text-white font-bold text-xl mb-2">KwaZulu-Natal (KZN)</div>
            <div className="text-white/70 text-sm leading-relaxed">
              We serve residential, commercial, and industrial clients across KZN. Our main offices are based in Pietermaritzburg and Durban, allowing us to efficiently reach clients throughout the province.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
