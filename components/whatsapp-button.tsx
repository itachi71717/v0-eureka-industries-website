"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/27629924357?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-[#1a1a1a] text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  )
}
