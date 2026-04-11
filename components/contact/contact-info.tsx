import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    address: "32 Cassimjee Road, Northdale, Pietermaritzburg, 3201"
  },
  {
    city: "Durban",
    address: "360 Kenyon Howden, Montclair, Durban, 4001"
  }
]

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8">
        Contact Information
      </h2>

      {/* Contact Details */}
      <div className="space-y-6 mb-10">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#C00000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <detail.icon className="w-5 h-5 text-[#C00000]" />
            </div>
            <div>
              <div className="text-sm text-[#6a6a6a] mb-1">{detail.label}</div>
              {detail.href ? (
                <a 
                  href={detail.href} 
                  className="text-[#1a1a1a] font-semibold hover:text-[#C00000] transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <div className="text-[#1a1a1a] font-semibold">{detail.value}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Addresses */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#C00000]" />
          Our Locations
        </h3>
        <div className="space-y-4">
          {addresses.map((location) => (
            <div 
              key={location.city} 
              className="bg-white border border-[#e8e8e8] rounded-lg p-4"
            >
              <div className="font-semibold text-[#C00000] mb-1">{location.city}</div>
              <div className="text-[#4a4a4a] text-sm">{location.address}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Operating Area */}
      <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8">
        <div className="text-white/60 text-sm mb-2">Operating Area</div>
        <div className="text-white font-bold text-xl">KwaZulu-Natal (KZN)</div>
        <div className="text-white/70 text-sm mt-2">
          Serving residential, commercial, and industrial clients across the province.
        </div>
      </div>

      {/* WhatsApp CTA */}
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
    </div>
  )
}
