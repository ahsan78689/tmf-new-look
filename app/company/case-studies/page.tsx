import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, ShoppingCart, Building, ArrowRight, ExternalLink, Calendar, Target } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "E-commerce Revenue Growth",
      client: "Fashion Forward Boutique",
      industry: "E-commerce",
      challenge: "Low online sales and poor website conversion rates",
      solution: "Complete website redesign, SEO optimization, and Google Ads campaigns",
      results: [
        { metric: "Revenue Increase", value: "+340%", description: "Within 8 months" },
        { metric: "Conversion Rate", value: "+180%", description: "From 1.2% to 3.4%" },
        { metric: "Organic Traffic", value: "+250%", description: "Monthly visitors" },
        { metric: "ROAS", value: "6.2x", description: "Return on ad spend" },
      ],
      duration: "8 months",
      services: ["Web Development", "SEO", "Google Ads", "Conversion Optimization"],
      testimonial:
        "The Meta Future transformed our online business. We went from struggling to make sales to becoming a leading fashion retailer in our niche.",
      clientName: "Sarah Johnson, CEO",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-pink-500 to-rose-500",
      icon: ShoppingCart,
    },
    {
      title: "Local Service Business Domination",
      client: "Premier Home Services",
      industry: "Home Services",
      challenge: "Limited local visibility and inconsistent lead generation",
      solution: "Local SEO strategy, Google My Business optimization, and targeted advertising",
      results: [
        { metric: "Local Leads", value: "+420%", description: "Monthly qualified leads" },
        { metric: "Google Rankings", value: "#1", description: "For 15 key terms" },
        { metric: "Phone Calls", value: "+300%", description: "Direct inquiries" },
        { metric: "Service Area", value: "+150%", description: "Geographic expansion" },
      ],
      duration: "6 months",
      services: ["Local SEO", "Google My Business", "PPC Advertising", "Website Development"],
      testimonial:
        "We now dominate our local market. Our phone rings constantly with qualified leads, and we've had to hire additional staff to keep up with demand.",
      clientName: "Mike Rodriguez, Owner",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-blue-500 to-cyan-500",
      icon: Building,
    },
    {
      title: "SaaS Lead Generation Success",
      client: "TechFlow Solutions",
      industry: "Software/SaaS",
      challenge: "High customer acquisition costs and low-quality leads",
      solution: "Content marketing strategy, LinkedIn advertising, and marketing automation",
      results: [
        { metric: "Lead Quality", value: "+280%", description: "SQL conversion rate" },
        { metric: "Cost Per Lead", value: "-65%", description: "Reduced acquisition cost" },
        { metric: "Demo Requests", value: "+190%", description: "Monthly qualified demos" },
        { metric: "Pipeline Value", value: "+450%", description: "Sales pipeline growth" },
      ],
      duration: "10 months",
      services: ["Content Marketing", "LinkedIn Ads", "Marketing Automation", "Lead Nurturing"],
      testimonial:
        "The Meta Future helped us build a predictable lead generation machine. Our sales team is now closing higher-quality deals consistently.",
      clientName: "David Chen, VP Marketing",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-purple-500 to-indigo-500",
      icon: Users,
    },
    {
      title: "Healthcare Practice Growth",
      client: "Advanced Medical Center",
      industry: "Healthcare",
      challenge: "Limited online presence and difficulty attracting new patients",
      solution: "Medical SEO, reputation management, and patient-focused website design",
      results: [
        { metric: "New Patients", value: "+220%", description: "Monthly new appointments" },
        { metric: "Online Reviews", value: "4.9/5", description: "Average rating improvement" },
        { metric: "Website Traffic", value: "+310%", description: "Organic visitors" },
        { metric: "Appointment Bookings", value: "+180%", description: "Online scheduling" },
      ],
      duration: "7 months",
      services: ["Medical SEO", "Reputation Management", "Website Design", "Content Marketing"],
      testimonial:
        "Our practice has grown tremendously. We're now the go-to medical center in our area, and our online reputation speaks for itself.",
      clientName: "Dr. Lisa Thompson, MD",
      image: "/placeholder.svg?height=400&width=600",
      color: "from-green-500 to-emerald-500",
      icon: TrendingUp,
    },
  ]

  const industries = [
    { name: "E-commerce", projects: "45+", avgGrowth: "280%" },
    { name: "Healthcare", projects: "32+", avgGrowth: "190%" },
    { name: "Professional Services", projects: "28+", avgGrowth: "220%" },
    { name: "Home Services", projects: "38+", avgGrowth: "340%" },
    { name: "SaaS/Technology", projects: "25+", avgGrowth: "250%" },
    { name: "Real Estate", projects: "22+", avgGrowth: "180%" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 mb-6">
              <TrendingUp className="mr-2 h-4 w-4" />
              Success Stories
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Real Results from{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Real Clients
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries achieve remarkable growth through our
              digital marketing and web development services. These case studies showcase measurable results and
              transformative success stories.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                View All Industries
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-2xl">
                <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${study.color} text-white`}
                        >
                          <study.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-1">
                            {study.industry}
                          </Badge>
                          <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 mb-4">{study.client}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Services Provided</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <blockquote className="text-gray-700 italic mb-2">"{study.testimonial}"</blockquote>
                      <cite className="text-sm font-medium text-gray-900">— {study.clientName}</cite>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Duration: {study.duration}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Results Achieved</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{result.value}</div>
                            <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                            <div className="text-xs text-gray-600">{result.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={`${study.client} case study`}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button variant="secondary" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live Site
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Industries We've Transformed
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Our expertise spans across diverse industries with proven success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Projects:</span>
                      <span className="text-sm font-medium">{industry.projects}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Avg. Growth:</span>
                      <span className="text-lg font-bold text-green-600">{industry.avgGrowth}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Write Your Success Story?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-purple-100">
              Join our growing list of successful clients and transform your business with proven digital strategies
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Target className="mr-2 h-4 w-4" />
                Start Your Project
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/company/contact-us">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
