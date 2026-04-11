import Image from "next/image"
import { 
  Building2, 
  Fence, 
  Home, 
  ShoppingBag, 
  GraduationCap, 
  Sparkles, 
  Truck,
  CheckCircle2
} from "lucide-react"

const services = [
  {
    id: "civil-engineering",
    icon: Building2,
    title: "Civil Engineering & Infrastructure",
    description: "We deliver durable infrastructure designed for long-term performance across KwaZulu-Natal.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Roads and highways",
      "Bridges and overpasses",
      "Pipelines and utilities",
      "Sewer systems",
      "Dams and canals"
    ]
  },
  {
    id: "clearvu-fencing",
    icon: Fence,
    title: "ClearVu Fencing",
    description: "Specializing in high-security ClearVu fencing solutions for residential, commercial, and industrial properties.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    features: [
      "High security protection",
      "Low maintenance requirements",
      "Long lifespan durability",
      "Modern aesthetic appearance"
    ]
  },
  {
    id: "residential",
    icon: Home,
    title: "Residential Construction",
    description: "High-quality housing developments for urban and rural environments, built to the highest standards.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Custom home construction",
      "Housing developments",
      "Renovations and extensions",
      "Quality finishes"
    ]
  },
  {
    id: "commercial",
    icon: ShoppingBag,
    title: "Retail & Commercial Construction",
    description: "Shopping centres and commercial infrastructure delivered efficiently and on budget.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Shopping centres",
      "Office buildings",
      "Industrial facilities",
      "Mixed-use developments"
    ]
  },
  {
    id: "educational",
    icon: GraduationCap,
    title: "Educational Facilities",
    description: "Construction and refurbishment of schools, creating safe and modern learning environments.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032&auto=format&fit=crop",
    features: [
      "New school construction",
      "Classroom refurbishment",
      "Sports facilities",
      "Administrative buildings"
    ]
  },
  {
    id: "cleaning",
    icon: Sparkles,
    title: "Cleaning Services",
    description: "Professional, scalable cleaning solutions tailored to different environments and requirements.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Estate cleaning & maintenance",
      "Event cleaning",
      "Construction site cleaning",
      "Commercial cleaning"
    ]
  },
  {
    id: "plant-hire",
    icon: Truck,
    title: "Plant Hire",
    description: "Reliable access to construction equipment and machinery for your project needs.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
    features: [
      "Excavators and loaders",
      "Trucks and haulers",
      "Specialized equipment",
      "Operated or self-drive options"
    ]
  }
]

export function ServicesList() {
  return (
    <section className="py-20 lg:py-32 bg-[#f8f8f8]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                  service.featured ? 'ring-4 ring-[#C00000]' : ''
                }`}>
                  <Image
                    src={service.image}
                    alt={`${service.title} services in KwaZulu-Natal`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
                </div>
                {service.featured && (
                  <div className="absolute -top-4 left-6 bg-[#C00000] text-white text-sm font-semibold px-4 py-2 rounded-full">
                    Featured Service
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="w-14 h-14 bg-[#C00000]/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#C00000]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                  {service.title}
                </h2>
                <p className="text-[#4a4a4a] text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C00000] flex-shrink-0" />
                      <span className="text-[#4a4a4a]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
