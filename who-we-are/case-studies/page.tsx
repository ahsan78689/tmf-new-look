import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowRight, ExternalLink, Calendar, Award } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "E-commerce Revenue Growth",
      client: "TechGear Online",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor mobile experience",
      solution: "Complete website redesign with mobile-first approach and conversion optimization",
      results: [
        { metric: "Conversion Rate", improvement: "+185%", value: "From 1.2% to 3.4%" },
        { metric: "Mobile Sales", improvement: "+240%", value: "60% of total revenue" },
        { metric: "Page Load Speed", improvement: "+65%", value: "Under 2 seconds" },
        { metric: "Revenue Growth", improvement: "+320%", value: "$2.4M annually" },
      ],
      duration: "4 months",
      services: ["Web Development", "UI/UX Design", "E-commerce Optimization"],
      testimonial: "The team transformed our online presence completely. Our revenue has tripled since the redesign.",
      image: "/placeholder.svg?height=300&width=500&text=TechGear+E-commerce+Success",
    },
    {
      title: "SaaS Platform User Engagement",
      client: "CloudSync Pro",
      industry: "SaaS Technology",
      challenge: "High user churn rate and complex onboarding process",
      solution: "Streamlined user interface design and simplified onboarding flow",
      results: [
        { metric: "User Retention", improvement: "+150%", value: "85% monthly retention" },
        { metric: "Onboarding Time", improvement: "-70%", value: "5 minutes average" },
        { metric: "User Satisfaction", improvement: "+90%", value: "4.8/5 rating" },
        { metric: "Feature Adoption", improvement: "+120%", value: "78% feature usage" },
      ],
      duration: "6 months",
      services: ["UI/UX Design", "User Research", "Usability Testing"],
      testimonial:
        "Our users love the new interface. Churn rate dropped significantly and engagement is at an all-time high.",
      image: "/placeholder.svg?height=300&width=500&text=CloudSync+SaaS+Dashboard",
    },
    {
      title: "Healthcare Practice Digital Transformation",
      client: "MedCare Specialists",
      industry: "Healthcare",
      challenge: "Outdated website and inefficient patient booking system",
      solution: "Modern website with integrated appointment booking and patient portal",
      results: [
        { metric: "Online Bookings", improvement: "+400%", value: "80% of appointments" },
        { metric: "Patient Satisfaction", improvement: "+75%", value: "95% satisfaction rate" },
        { metric: "Administrative Time", improvement: "-50%", value: "20 hours saved weekly" },
        { metric: "New Patients", improvement: "+160%", value: "200+ monthly" },
      ],
      duration: "3 months",
      services: ["Web Development", "Patient Portal", "SEO Optimization"],
      testimonial:
        "The new system has revolutionized how we manage patients. Everything is so much more efficient now.",
      image: "/placeholder.svg?height=300&width=500&text=MedCare+Healthcare+Portal",
    },
    {
      title: "Restaurant Chain Digital Marketing",
      client: "Bella Vista Restaurants",
      industry: "Food & Beverage",
      challenge: "Low online visibility and declining foot traffic",
      solution: "Comprehensive digital marketing strategy with local SEO and social media",
      results: [
        { metric: "Local Search Ranking", improvement: "+300%", value: "Top 3 for key terms" },
        { metric: "Online Orders", improvement: "+250%", value: "40% of total sales" },
        { metric: "Social Engagement", improvement: "+180%", value: "50K followers" },
        { metric: "Foot Traffic", improvement: "+85%", value: "Pre-pandemic levels" },
      ],
      duration: "8 months",
      services: ["SEO", "Social Media Marketing", "Content Marketing"],
      testimonial:
        "Our restaurants are busier than ever. The digital marketing strategy brought customers back and then some.",
      image: "/placeholder.svg?height=300&width=500&text=Bella+Vista+Restaurant+Success",
    },
    {
      title: "Manufacturing Company Lead Generation",
      client: "Industrial Solutions Inc",
      industry: "Manufacturing",
      challenge: "Limited online presence and few qualified leads",
      solution: "B2B website redesign with lead generation optimization and content marketing",
      results: [
        { metric: "Qualified Leads", improvement: "+380%", value: "150+ monthly leads" },
        { metric: "Website Traffic", improvement: "+220%", value: "25K monthly visitors" },
        { metric: "Conversion Rate", improvement: "+165%", value: "8.5% lead conversion" },
        { metric: "Sales Pipeline", improvement: "+290%", value: "$5M in opportunities" },
      ],
      duration: "5 months",
      services: ["Web Development", "Content Marketing", "Lead Generation"],
      testimonial: "We've never had so many qualified leads. The ROI on this investment has been incredible.",
      image: "/placeholder.svg?height=300&width=500&text=Industrial+Solutions+B2B+Success",
    },
    {
      title: "Real Estate Agency Growth",
      client: "Premier Properties Group",
      industry: "Real Estate",
      challenge: "Outdated property listings and poor mobile experience",
      solution: "Modern real estate website with advanced search and mobile optimization",
      results: [
        { metric: "Property Inquiries", improvement: "+275%", value: "500+ monthly inquiries" },
        { metric: "Mobile Traffic", improvement: "+190%", value: "70% of total traffic" },
        { metric: "Listing Views", improvement: "+145%", value: "Average 2,500 per listing" },
        { metric: "Agent Productivity", improvement: "+120%", value: "30% more closings" },
      ],
      duration: "4 months",
      services: ["Web Development", "Property Management System", "Mobile Optimization"],
      testimonial:
        "The new website has transformed our business. Agents are closing more deals and clients love the experience.",
      image: "/placeholder.svg?height=300&width=500&text=Premier+Properties+Real+Estate",
    },
  ]

  const industries = [
    { name: "E-commerce", count: "45+ projects", growth: "Average 180% revenue increase" },
    { name: "SaaS & Technology", count: "35+ projects", growth: "Average 150% user retention" },
    { name: "Healthcare", count: "25+ projects", growth: "Average 200% efficiency gain" },
    { name: "Manufacturing", count: "20+ projects", growth: "Average 250% lead increase" },
    { name: "Real Estate", count: "18+ projects", growth: "Average 160% inquiry boost" },
    { name: "Food & Beverage", count: "15+ projects", growth: "Average 140% traffic growth" },
  ]

  const successMetrics = [
    { metric: "Average ROI", value: "340%", description: "Return on investment for our clients" },
    { metric: "Project Success Rate", value: "98%", description: "Projects delivered on time and budget" },
    { metric: "Client Retention", value: "92%", description: "Clients who continue working with us" },
    { metric: "Revenue Growth", value: "185%", description: "Average revenue increase for clients" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700 mb-6">
              <Award className="mr-2 h-4 w-4" />
              Client Success Stories
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Real Results for{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Real Businesses
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Discover how we've helped businesses across various industries achieve remarkable growth through strategic
              digital solutions. These case studies showcase measurable results and transformative outcomes.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 hover:bg-green-50 bg-transparent">
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{item.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{item.metric}</div>
                <div className="text-xs text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Featured Case Studies
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              In-depth look at how we've helped businesses achieve their goals
            </p>
          </div>
          <div className="space-y-12 sm:space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={`${study.client} case study`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {study.industry}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-base text-gray-600 mb-4">{study.client}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-600 mb-4">{study.challenge}</p>

                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-600 mb-4">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-lg font-bold text-green-600">{result.improvement}</div>
                            <div className="text-sm font-medium text-gray-900">{result.metric}</div>
                            <div className="text-xs text-gray-600">{result.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-green-500 pl-4 mb-6">
                      <p className="text-sm italic text-gray-600">"{study.testimonial}"</p>
                    </blockquote>

                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      View Full Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Industries We've Transformed
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Success stories across diverse industries and business sectors
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{industry.count}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-800">{industry.growth}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Success Formula
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              The proven methodology behind every successful project
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white text-lg font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-sm text-gray-600">Understanding your business, goals, and challenges</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white text-lg font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
                <p className="text-sm text-gray-600">Developing a customized plan for success</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white text-lg font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
                <p className="text-sm text-gray-600">Implementing solutions with precision and care</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white text-lg font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
                <p className="text-sm text-gray-600">Continuous improvement and growth</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Write Your Success Story?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-green-100">
              Join the businesses that have transformed their digital presence and achieved remarkable growth
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start Your Project
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/who-we-are">Learn About Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
