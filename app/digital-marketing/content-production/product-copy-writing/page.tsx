"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { ShoppingCart, Target, Search, CheckCircle, ArrowRight, Package, Star, TrendingUp, Zap, Award, Users, DollarSign, BarChart3 } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function ProductCopyWritingPage() {
  const [conversionRate, setConversionRate] = useState([2.5])
  const [monthlyVisitors, setMonthlyVisitors] = useState([10000])
  
  const calculateRevenue = () => {
    const currentRevenue = (monthlyVisitors[0] * (conversionRate[0] / 100) * 50 * 12)
    const improvedRevenue = (monthlyVisitors[0] * ((conversionRate[0] + 1.5) / 100) * 50 * 12)
    return {
      current: currentRevenue,
      improved: improvedRevenue,
      increase: improvedRevenue - currentRevenue
    }
  }

  const revenue = calculateRevenue()

  const copyTypes = [
    {
      type: "E-commerce Products",
      icon: ShoppingCart,
      description: "Convert browsers into buyers with compelling product descriptions",
      features: ["Product titles", "Feature highlights", "Benefit-focused copy", "SEO optimization"],
      beforeAfter: {
        before: "Basic product listing with technical specs",
        after: "Compelling story that addresses customer pain points"
      },
      conversionBoost: "+45%"
    },
    {
      type: "SaaS & Software",
      icon: Zap,
      description: "Explain complex features in simple, benefit-driven language",
      features: ["Feature descriptions", "Use case scenarios", "Pricing copy", "Trial CTAs"],
      beforeAfter: {
        before: "Technical jargon that confuses users",
        after: "Clear benefits that drive sign-ups"
      },
      conversionBoost: "+38%"
    },
    {
      type: "Physical Products",
      icon: Package,
      description: "Bring products to life with sensory and emotional copy",
      features: ["Sensory descriptions", "Lifestyle benefits", "Size guides", "Care instructions"],
      beforeAfter: {
        before: "Dry specifications and measurements",
        after: "Vivid descriptions that help customers visualize ownership"
      },
      conversionBoost: "+52%"
    },
    {
      type: "Services & Consulting",
      icon: Users,
      description: "Transform intangible services into tangible value propositions",
      features: ["Service benefits", "Process explanations", "Outcome focus", "Trust signals"],
      beforeAfter: {
        before: "Generic service descriptions",
        after: "Specific outcomes and transformation promises"
      },
      conversionBoost: "+41%"
    }
  ]

  const copywritingFormula = [
    {
      step: "A",
      name: "Attention",
      description: "Grab attention with compelling headlines",
      example: "Transform Your Morning Routine in Just 5 Minutes"
    },
    {
      step: "I",
      name: "Interest",
      description: "Build interest with relevant benefits",
      example: "Finally, a coffee maker that remembers your perfect brew"
    },
    {
      step: "D",
      name: "Desire",
      description: "Create desire through emotional connection",
      example: "Imagine starting every day with café-quality coffee"
    },
    {
      step: "A",
      name: "Action",
      description: "Drive action with clear, compelling CTAs",
      example: "Order now and taste the difference tomorrow"
    }
  ]

  const testimonialData = [
    {
      company: "TechGadget Pro",
      industry: "Electronics",
      result: "+67% conversion rate",
      quote: "Our product pages went from boring spec sheets to compelling stories. Sales increased dramatically.",
      author: "Sarah Chen, Marketing Director"
    },
    {
      company: "FitLife Supplements",
      industry: "Health & Wellness",
      result: "+43% average order value",
      quote: "The copy doesn't just describe our products—it sells the transformation our customers want.",
      author: "Mike Rodriguez, Founder"
    },
    {
      company: "HomeStyle Furniture",
      industry: "Home & Garden",
      result: "+55% online sales",
      quote: "Customers can now envision our furniture in their homes. The copy creates an emotional connection.",
      author: "Emma Thompson, E-commerce Manager"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with ROI Calculator */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 mb-8">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Product Copy That Sells
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Copy That{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Converts
                </span>
              </h1>
              <p className="text-xl leading-8 text-gray-600 mb-8">
                Transform your product descriptions from boring specs into compelling stories 
                that drive sales and build customer desire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  Boost Product Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-200 hover:bg-orange-50">
                  View Copy Samples
                </Button>
              </div>
            </div>

            {/* Interactive ROI Calculator */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-orange-50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-orange-600" />
                  ROI Calculator
                </CardTitle>
                <CardDescription>See your potential revenue increase</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Monthly Visitors: {monthlyVisitors[0].toLocaleString()}
                  </label>
                  <Slider
                    value={monthlyVisitors}
                    onValueChange={setMonthlyVisitors}
                    max={100000}
                    min={1000}
                    step={1000}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Current Conversion Rate: {conversionRate[0]}%
                  </label>
                  <Slider
                    value={conversionRate}
                    onValueChange={setConversionRate}
                    max={10}
                    min={0.5}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-600">Current Revenue</div>
                      <div className="text-lg font-bold text-gray-900">
                        ${revenue.current.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">With Better Copy</div>
                      <div className="text-lg font-bold text-orange-600">
                        ${revenue.improved.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-sm text-gray-600">Annual Increase</div>
                    <div className="text-2xl font-bold text-green-600">
                      +${revenue.increase.toLocaleString()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Copy Types with Before/After */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Copy That Transforms Products Into Profits
            </h2>
            <p className="text-lg text-gray-600">
              See how we turn features into benefits and browsers into buyers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {copyTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-orange-600 to-red-600 text-white group-hover:scale-110 transition-transform">
                        <type.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{type.type}</CardTitle>
                        <Badge className="bg-green-100 text-green-700 mt-1">{type.conversionBoost}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-2">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What We Include:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs font-semibold text-red-600 mb-1">BEFORE</div>
                          <div className="text-sm text-gray-700">{type.beforeAfter.before}</div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-green-600 mb-1">AFTER</div>
                          <div className="text-sm text-gray-700">{type.beforeAfter.after}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AIDA Formula Breakdown */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Copywriting Formula
            </h2>
            <p className="text-lg text-gray-600">
              The AIDA framework that turns visitors into customers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {copywritingFormula.map((step, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.name}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-orange-800">"{step.example}"</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-lg text-gray-600">
              See how our product copy transformed these businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonialData.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.company}</h3>
                      <p className="text-sm text-gray-600">{testimonial.industry}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 font-bold">
                      {testimonial.result}
                    </Badge>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="flex space-x-1 mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{testimonial.author}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Numbers Don't Lie
            </h2>
            <p className="text-lg text-gray-600">
              Our product copy consistently delivers measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "Average Conversion Boost", value: "+47%", icon: TrendingUp, color: "text-green-600" },
              { metric: "Client Satisfaction Rate", value: "98%", icon: Star, color: "text-yellow-600" },
              { metric: "Products Optimized", value: "2,500+", icon: Package, color: "text-blue-600" },
              { metric: "Revenue Generated", value: "$12M+", icon: DollarSign, color: "text-purple-600" }
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-full bg-gray-100 ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Urgency */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Product Sales?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Don't let poor product copy cost you sales. Get copy that converts browsers into buyers.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="text-orange-100 mb-2">Limited Time Offer</div>
              <div className="text-2xl font-bold text-white mb-2">50% Off Your First Project</div>
              <div className="text-orange-100">Valid for the next 7 days only</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Claim Your Discount
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/digital-marketing/content-production">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
