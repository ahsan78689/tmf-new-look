"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle, Gift, TrendingUp, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Weekly Marketing Tips",
    description: "Get actionable insights delivered to your inbox",
  },
  {
    icon: <Gift className="h-5 w-5" />,
    title: "Exclusive Resources",
    description: "Access to premium guides and templates",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Industry Updates",
    description: "Stay ahead with the latest trends and news",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Early Access",
    description: "Be first to know about new services and offers",
  },
]

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail("")
    }, 1500)
  }

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to Our Community!</h2>
            <p className="text-xl text-purple-100 mb-8">
              Thank you for subscribing! Check your email for a welcome message with exclusive resources.
            </p>
            <Button
              onClick={() => setIsSubscribed(false)}
              className="group relative overflow-hidden bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/30 px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Subscribe Another Email</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full" />
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full" />
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-white rounded-full" />
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Mail className="h-3 w-3 mr-1" />
              Newsletter
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Stay Ahead of the Digital Curve</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Join 10,000+ marketers and business owners who get our weekly insights, tips, and exclusive resources
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">What you'll get:</h3>

              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                          <p className="text-purple-100 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Subscription Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h3>
                <p className="text-gray-600">No spam, unsubscribe anytime. We respect your privacy.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-lg border-2 border-gray-200 focus:border-purple-500 rounded-xl"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="group relative overflow-hidden w-full h-12 text-lg bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <>
                      <span className="relative z-10 flex items-center justify-center">
                        Subscribe Now
                        <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Free forever</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mt-12">
            <p className="text-purple-100 mb-4">Trusted by marketing professionals at:</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <img
                src="/placeholder.svg?height=30&width=100"
                alt="Company 1"
                className="h-6 filter brightness-0 invert"
              />
              <img
                src="/placeholder.svg?height=30&width=100"
                alt="Company 2"
                className="h-6 filter brightness-0 invert"
              />
              <img
                src="/placeholder.svg?height=30&width=100"
                alt="Company 3"
                className="h-6 filter brightness-0 invert"
              />
              <img
                src="/placeholder.svg?height=30&width=100"
                alt="Company 4"
                className="h-6 filter brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
