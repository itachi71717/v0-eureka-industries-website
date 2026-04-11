import { Leaf, Shield, Heart, Building } from "lucide-react"

const pillars = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety protocols protecting our team and community"
  },
  {
    icon: Heart,
    title: "Employee Health",
    description: "Prioritizing the wellbeing of every team member"
  },
  {
    icon: Leaf,
    title: "Environmental Care",
    description: "Sustainable practices that protect our natural resources"
  },
  {
    icon: Building,
    title: "Lasting Quality",
    description: "Construction built to stand the test of time"
  }
]

export function SustainabilitySection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C00000] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#C00000] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#C00000]/20 text-[#C00000] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Responsibility
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Sustainability &amp; Responsibility
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We prioritize safety, employee health, environmental responsibility, and long-lasting 
            construction quality. Our approach ensures that every project contributes to sustainable 
            development without compromising future needs.
          </p>
        </div>

        {/* Pillars - Show only 2 on mobile, all 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.slice(0, 2).map((pillar) => (
            <div 
              key={pillar.title}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#C00000]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-[#C00000]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
          {pillars.slice(2).map((pillar) => (
            <div 
              key={pillar.title}
              className="hidden md:block text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#C00000]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-[#C00000]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
