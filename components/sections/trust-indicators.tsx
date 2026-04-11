import { Clock, Wallet, Users, Heart } from "lucide-react"

const indicators = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Projects completed as scheduled"
  },
  {
    icon: Wallet,
    title: "On-Budget Execution",
    description: "No hidden costs or surprises"
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled professionals"
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is our priority"
  }
]

export function TrustIndicators() {
  return (
    <section className="bg-[#C00000] py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {indicators.map((indicator) => (
            <div 
              key={indicator.title}
              className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <indicator.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {indicator.title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm">
                  {indicator.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
