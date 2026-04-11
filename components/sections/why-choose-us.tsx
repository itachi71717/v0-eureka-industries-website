import { CheckCircle2, Shield, Lightbulb, Users, Clock, Award } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Proven Delivery",
    description: "Projects completed on time and within budget, every time."
  },
  {
    icon: Users,
    title: "Hands-On Management",
    description: "Proactive, involved leadership at every project stage."
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Deep knowledge across civil engineering and construction."
  },
  {
    icon: CheckCircle2,
    title: "Client-First Approach",
    description: "Your needs and success drive every decision we make."
  },
  {
    icon: Shield,
    title: "Safety & Quality",
    description: "Uncompromising standards for safety and sustainability."
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Modern methods and continuous improvement mindset."
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C00000]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C00000]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#C00000]/20 text-[#C00000] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Why Eureka
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Why Choose Eureka Industries
          </h2>
          <p className="text-white/60 text-lg">
            We combine expertise, innovation, and unwavering commitment to deliver 
            exceptional results on every project.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason) => (
            <div 
              key={reason.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-[#C00000]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#C00000]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C00000] transition-colors">
                <reason.icon className="w-7 h-7 text-[#C00000] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
