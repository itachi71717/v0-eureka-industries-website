import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  Fence, 
  Home, 
  ShoppingBag, 
  GraduationCap, 
  Sparkles,
  Truck,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Civil Engineering & Infrastructure",
    description: "Roads, bridges, pipelines, sewer systems, dams & canals.",
    featured: false
  },
  {
    icon: Fence,
    title: "ClearVu Fencing",
    description: "High-security fencing solutions for residential, commercial & industrial.",
    featured: true
  },
  {
    icon: Home,
    title: "Residential Construction",
    description: "High-quality housing developments for urban and rural environments.",
    featured: false
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commercial",
    description: "Shopping centres and commercial infrastructure delivered efficiently.",
    featured: false
  },
  {
    icon: GraduationCap,
    title: "Educational Facilities",
    description: "Safe and modern learning environments through construction & refurbishment.",
    featured: false
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    description: "Estate, event, construction site, and commercial cleaning solutions.",
    featured: false
  },
  {
    icon: Truck,
    title: "Plant Hire",
    description: "Reliable access to construction equipment and machinery.",
    featured: false
  }
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f8f8f8] via-white to-[#efefef] relative overflow-hidden md:bg-gradient-to-br">
      {/* Mobile Background Image */}
      <div className="absolute inset-0 md:hidden opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/mobile-bg-texture.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C00000]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C00000]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#C00000]/10 text-[#C00000] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 text-balance">
            Comprehensive Solutions for Every Project
          </h2>
          <p className="text-[#6a6a6a] text-lg">
            From civil engineering to cleaning services, we deliver end-to-end solutions 
            tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid - Show fewer on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.slice(0, 6).map((service) => (
            <Link 
              key={service.title}
              href="/services"
              className={`group relative bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg hover:border-[#C00000]/30 transition-all duration-300 ${
                service.featured ? 'border-[#C00000] ring-2 ring-[#C00000]/20 md:col-span-2 lg:col-span-1' : 'border-[#e8e8e8]'
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6 bg-[#C00000] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                service.featured ? 'bg-[#C00000]' : 'bg-[#C00000]/10'
              }`}>
                <service.icon className={`w-6 h-6 ${
                  service.featured ? 'text-white' : 'text-[#C00000]'
                }`} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#C00000] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#6a6a6a] text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-[#C00000] hover:bg-[#a00000] text-white font-semibold px-8 group"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
