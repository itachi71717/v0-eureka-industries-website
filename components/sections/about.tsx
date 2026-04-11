import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f8f8f8] via-white to-[#f0f0f0] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C00000]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#C00000]/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                alt="Construction site showing civil engineering infrastructure in KwaZulu-Natal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
            </div>
            {/* Accent Box */}
            <div className="absolute -bottom-6 -right-6 bg-[#C00000] text-white p-6 rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl font-bold">KZN</div>
              <div className="text-sm text-white/80">Trusted Partner</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block bg-[#C00000]/10 text-[#C00000] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 text-balance">
              Who We Are
            </h2>
            <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
              <p className="text-lg">
                Eureka Industries is a dynamic and forward-thinking civil engineering, construction, 
                and project management company delivering innovative infrastructure solutions across 
                KwaZulu-Natal.
              </p>
              <p>
                Built on intelligent risk-taking, a strong work ethic, and prudent customer relationships, 
                we have developed a reputation for excellence, reliability, and strategic execution.
              </p>
              <p>
                We serve both public and private sector clients, delivering end-to-end solutions 
                tailored to each project.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[#e0e0e0]">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#C00000]">KZN</div>
                <div className="text-sm text-[#6a6a6a] mt-1">Service Area</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#C00000]">100%</div>
                <div className="text-sm text-[#6a6a6a] mt-1">Commitment</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#C00000]">24/7</div>
                <div className="text-sm text-[#6a6a6a] mt-1">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
