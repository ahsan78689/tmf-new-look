"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The Meta Future transformed our digital presence completely. Our website traffic increased by 300% and lead generation improved by 250% within just 3 months. Their SEO expertise is unmatched!",
    service: "SEO & Digital Marketing",
    results: "300% traffic increase",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "E-Commerce Plus",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Working with The Meta Future was a game-changer for our e-commerce business. They built us a stunning website that not only looks amazing but also converts visitors into customers at an incredible rate.",
    service: "E-commerce Development",
    results: "200% conversion increase",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Founder",
    company: "Creative Studio",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The team's attention to detail and creative approach exceeded our expectations. Our new brand identity and website perfectly capture our vision and have helped us attract high-quality clients.",
    service: "Branding & Web Design",
    results: "150% client inquiries",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Operations Manager",
    company: "Local Services Co.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Their Google Ads management service has been phenomenal. We've seen a 400% return on ad spend and our local visibility has improved dramatically. Highly recommend their services!",
    service: "Google Ads Management",
    results: "400% ROAS",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Marketing Manager",
    company: "Health & Wellness",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The social media strategy they developed for us has been incredible. Our engagement rates have tripled and we've built a loyal community of over 50K followers across platforms.",
    service: "Social Media Marketing",
    results: "300% engagement increase",
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Business Owner",
    company: "Professional Services",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "From strategy to execution, The Meta Future delivered exceptional results. Our online presence is now professional, engaging, and most importantly, it's driving real business growth.",
    service: "Complete Digital Strategy",
    results: "250% business growth",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20">
                      <img
                        src={currentTestimonial.image || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{currentTestimonial.name}</h3>
                    <p className="text-purple-100 mb-1">{currentTestimonial.role}</p>
                    <p className="text-purple-200 text-sm mb-4">{currentTestimonial.company}</p>

                    <Badge className="bg-white/20 text-white border-white/30 mb-4">{currentTestimonial.service}</Badge>

                    <div className="text-2xl font-bold text-yellow-300">{currentTestimonial.results}</div>
                  </div>

                  {/* Decorative Quote */}
                  <Quote className="absolute top-4 right-4 h-12 w-12 text-white/20" />
                </div>

                {/* Content Side */}
                <div className="p-8 bg-white">
                  <div className="flex items-center mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex
                              ? "bg-gradient-to-r from-purple-600 to-blue-600"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevTestimonial}
                        className="rounded-full bg-transparent"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextTestimonial}
                        className="rounded-full bg-transparent"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
