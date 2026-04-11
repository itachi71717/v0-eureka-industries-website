import Image from "next/image"
import { Handshake, Award, Search, ClipboardCheck } from "lucide-react"

const approachPoints = [
  {
    icon: ClipboardCheck,
    title: "Quality Assurance",
    description: "Strict standards from raw materials to final inspection"
  },
  {
    icon: Handshake,
    title: "Strong Partnerships",
    description: "Collaborative relationships with clients and suppliers"
  },
  {
    icon: Award,
    title: "Modern Methods",
    description: "Innovative construction techniques and technologies"
  },
  {
    icon: Search,
    title: "Full Transparency",
    description: "Clear communication and accountability at every stage"
  }
]

export function ApproachSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-[#f8f8f8] to-[#f0f0f0] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1590644365607-1c5e0375e79e?q=80&w=2070&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C00000]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C00000]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-block bg-[#C00000]/10 text-[#C00000] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 text-balance">
              Excellence Through Methodology
            </h2>
            <p className="text-[#4a4a4a] text-lg leading-relaxed mb-10">
              Our operations are anchored in quality assurance, strong partnerships, and modern 
              construction methods. From raw material selection to final inspection, we maintain 
              strict standards to ensure excellence, accountability, and transparency.
            </p>

            {/* Approach Points */}
            <div className="grid sm:grid-cols-2 gap-6">
              {approachPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C00000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-[#C00000]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-1">{point.title}</h3>
                    <p className="text-[#6a6a6a] text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
                alt="Construction project management in KwaZulu-Natal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#C00000] rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#1a1a1a]">Quality Guaranteed</div>
                  <div className="text-[#6a6a6a] text-sm">Every project meets our high standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
