import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Globe, PenTool, Search, CheckCircle, ArrowRight, FileText, Users, Target, Zap, Award, BookOpen, Star, Clock, TrendingUp } from 'lucide-react'
import Link from "next/link"

export default function WebsiteContentWritingPage() {
  const contentTypes = [
    {
      title: "Homepage Content",
      description: "Compelling homepage copy that converts visitors into customers",
      icon: Globe,
      price: "Starting at $299",
      features: ["Hero section copy", "Value propositions", "Trust signals", "Call-to-action optimization"],
      timeline: "3-5 days",
      complexity: 85
    },
    {
      title: "About Us Pages",
      description: "Authentic brand storytelling that builds trust and connection",
      icon: Users,
      price: "Starting at $199",
      features: ["Brand story", "Team introductions", "Company values", "Mission statements"],
      timeline: "2-3 days",
      complexity: 70
    },
    {
      title: "Service Pages",
      description: "Detailed service descriptions that showcase your expertise",
      icon: Target,
      price: "Starting at $249",
      features: ["Service benefits", "Process explanations", "Pricing information", "FAQ sections"],
      timeline: "3-4 days",
      complexity: 80
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages for campaigns and promotions",
      icon: Zap,
      price: "Starting at $349",
      features: ["Conversion optimization", "A/B test variations", "Lead magnets", "Form optimization"],
      timeline: "4-6 days",
      complexity: 90
    }
  ]

  const writingProcess = [
    {
      phase: "Discovery",
      duration: "1-2 days",
      activities: [
        "Brand voice analysis",
        "Competitor research",
        "Target audience profiling",
        "Content audit"
      ]
    },
    {
      phase: "Strategy",
      duration: "1 day",
      activities: [
        "Content strategy development",
        "Keyword research",
        "Information architecture",
        "Messaging framework"
      ]
    },
    {
      phase: "Creation",
      duration: "3-5 days",
      activities: [
        "Content writing",
        "SEO optimization",
        "Internal review",
        "Quality assurance"
      ]
    },
    {
      phase: "Refinement",
      duration: "1-2 days",
      activities: [
        "Client feedback integration",
        "Revisions and edits",
        "Final optimization",
        "Delivery preparation"
      ]
    }
  ]

  const industries = [
    { name: "Technology", projects: 150, satisfaction: 98 },
    { name: "Healthcare", projects: 120, satisfaction: 96 },
    { name: "Finance", projects: 90, satisfaction: 97 },
    { name: "E-commerce", projects: 200, satisfaction: 99 },
    { name: "Education", projects: 80, satisfaction: 95 },
    { name: "Real Estate", projects: 110, satisfaction: 98 }
  ]

  const testimonials = [
    {
      quote: "The website content completely transformed our conversion rates. Professional, engaging, and perfectly aligned with our brand voice.",
      author: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5
    },
    {
      quote: "Outstanding quality and attention to detail. Our new website content has significantly improved our search rankings.",
      author: "Michael Chen",
      company: "Digital Solutions",
      rating: 5
    },
    {
      quote: "Fast turnaround, excellent communication, and content that truly represents our brand. Highly recommended!",
      author: "Emily Rodriguez",
      company: "Creative Agency",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Elements */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-8 animate-pulse">
              <PenTool className="mr-2 h-4 w-4" />
              Website Content Writing Specialists
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Words That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Work Wonders
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your website into a powerful conversion machine with professionally crafted content 
              that speaks directly to your audience and drives measurable results.
            </p>
            
            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200"
              >
                Get Content Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 hover:scale-105 transition-all duration-200">
                View Writing Samples
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Websites Written</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24hr</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Content Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Content That Converts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our specialized website content services, each designed to maximize your online impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white group-hover:scale-110 transition-transform duration-200">
                        <type.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {type.title}
                        </CardTitle>
                        <div className="text-sm text-blue-600 font-semibold">{type.price}</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      {type.timeline}
                    </Badge>
                  </div>
                  <CardDescription className="text-base mt-2">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Complexity Level</span>
                      <span>{type.complexity}%</span>
                    </div>
                    <Progress value={type.complexity} className="h-2" />
                  </div>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group-hover:bg-blue-600 transition-colors">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Writing Process
            </h2>
            <p className="text-lg text-gray-600">
              From concept to completion in 4 strategic phases
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>
            
            <div className="space-y-12">
              {writingProcess.map((phase, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <Card className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'} shadow-lg border-0`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <Badge className="bg-blue-100 text-blue-700">{phase.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise with Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry Expertise That Delivers
            </h2>
            <p className="text-lg text-gray-600">
              Proven results across diverse industries and business types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{industry.projects}</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm font-semibold ml-2">{industry.satisfaction}%</span>
                      </div>
                      <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Guarantee */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Website Content?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get professionally written content that converts visitors into customers, 
              backed by our 100% satisfaction guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all">
                Start Your Project
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

            <div className="inline-flex items-center space-x-2 text-blue-100">
              <Award className="h-5 w-5" />
              <span className="text-sm">30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
