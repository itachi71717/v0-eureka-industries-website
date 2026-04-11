"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Send, CheckCircle2 } from "lucide-react"

const services = [
  "Civil Engineering & Infrastructure",
  "ClearVu Fencing",
  "Residential Construction",
  "Retail & Commercial Construction",
  "Educational Facilities",
  "Cleaning Services",
  "Plant Hire",
  "Other"
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl border border-[#e8e8e8] p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Thank You!
        </h3>
        <p className="text-[#6a6a6a] mb-6">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-[#C00000] text-[#C00000] hover:bg-[#C00000] hover:text-white"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-[#e8e8e8] p-8 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
        Request a Quote
      </h2>
      <p className="text-[#6a6a6a] mb-2">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>
      <p className="text-xs text-[#999999] mb-8 pb-6 border-b border-[#e8e8e8]">
        Your submission will be sent to <strong>eurekaindustries.20@gmail.com</strong>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="border-[#e0e0e0] focus:border-[#C00000] focus:ring-[#C00000]"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a1a] mb-2">
            Phone Number *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Your phone number"
            className="border-[#e0e0e0] focus:border-[#C00000] focus:ring-[#C00000]"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="border-[#e0e0e0] focus:border-[#C00000] focus:ring-[#C00000]"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[#1a1a1a] mb-2">
            Service Required *
          </label>
          <Select name="service" required>
            <SelectTrigger className="border-[#e0e0e0] focus:border-[#C00000] focus:ring-[#C00000]">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project..."
            className="border-[#e0e0e0] focus:border-[#C00000] focus:ring-[#C00000] resize-none"
          />
        </div>

        {/* Submit */}
        <Button 
          type="submit"
          size="lg"
          className="w-full bg-[#C00000] hover:bg-[#a00000] text-white font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 w-5 h-5" />
              Request a Quote
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
