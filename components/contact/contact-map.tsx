export function ContactMap() {
  return (
    <section className="bg-[#1a1a1a] py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Our Service Area
          </h2>
          <p className="text-white/60">
            Proudly serving KwaZulu-Natal from our offices in Pietermaritzburg and Durban
          </p>
        </div>
        
        <div className="rounded-xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884935.6068992855!2d29.634963!3d-29.609988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6a574e79e26cb%3A0x1f03b61d8ac39ce3!2sKwaZulu-Natal%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Eureka Industries Service Area - KwaZulu-Natal Map"
            className="grayscale-[50%] contrast-[1.1]"
          />
        </div>
      </div>
    </section>
  )
}
