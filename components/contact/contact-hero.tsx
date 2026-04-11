export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#1a1a1a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#C00000]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block bg-[#C00000]/20 text-[#C00000] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Contact Eureka Industries
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl">
            We are ready to partner with you on your next project. Contact Eureka Industries 
            today and let&apos;s build something exceptional together.
          </p>
        </div>
      </div>
    </section>
  )
}
