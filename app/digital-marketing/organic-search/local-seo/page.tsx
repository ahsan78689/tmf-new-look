import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Phone, CheckCircle, ArrowRight, Building, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function LocalSEOPage() {
  const services = [
    {
      icon: Building,
      title: "Google Business Profile",
      description: "Optimize your Google Business Profile for maximum local visibility and customer engagement",
      features: ["Profile optimization", "Review management", "Post scheduling", "Insights tracking"],
    },
    {
      icon: MapPin,
      title: "Local Citations",
      description: "Build consistent NAP citations across local directories and review platforms",
      features: ["Directory submissions", "NAP consistency", "Citation building", "Local listings"],
    },
    {
      icon: Star,
      title: "Review Management",
      description: "Monitor and manage online reviews to build trust and improve local rankings",
      features: ["Review monitoring", "Response management", "Rating improvement", "Reputation building"],
    },
    {
      icon: Phone,
      title: "Local Keyword Optimization",
      description: "Target location-specific keywords to attract customers in your service area",
      features: ["Local keyword research", "Geo-targeted content", "Location pages", "Local intent optimization"],
    },
    {
      icon: MapPin,
      title: "Local Link Building",
      description: "Acquire high-quality local backlinks from community organizations and local businesses",
      features: ["Local partnerships", "Community involvement", "Local press", "Chamber of commerce"],
    },
    {
      icon: Building,
      title: "Local Schema Markup",
      description: "Implement local business schema to help search engines understand your location data",
      features: ["Business schema", "Location markup", "Review schema", "Event markup"],
    },
  ]

  const benefits = [
    "Higher local search rankings",
    "Increased foot traffic to your business",
    "More phone calls and inquiries",
    "Better online reputation",
    "Improved Google Maps visibility",
    "Higher conversion rates from local searches",
  ]

  const localFactors = [
    {
      factor: "Google Business Profile",
      importance: "Critical",
      description: "Complete and optimized GBP is essential for local visibility",
    },
    {
      factor: "Online Reviews",
      importance: "High",
      description: "Positive reviews and ratings significantly impact local rankings",
    },
    {
      factor: "Local Citations",
      importance: "High",
      description: "Consistent NAP across directories builds local authority",
    },
    {
      factor: "On-Page Optimization",
      importance: "Medium",
      description: "Location-specific content and keywords improve relevance",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-8 animate-fade-in">
              <MapPin className="mr-2 h-4 w-4" />
              Local SEO Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
              Local SEO That{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Drives Foot Traffic
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Dominate local search results and attract more customers to your business. Our comprehensive local SEO
              services help you rank higher in local searches and Google Maps.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Local SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-200 hover:bg-green-50 bg-transparent px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                View Local Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">250%</div>
              <div className="text-sm text-gray-600 font-medium">Average Local Visibility Increase</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">180%</div>
              <div className="text-sm text-gray-600 font-medium">More Local Leads Generated</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.8/5</div>
              <div className="text-sm text-gray-600 font-medium">Average Review Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our Local SEO Services
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Comprehensive local optimization to help your business get found by nearby customers
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Ranking Factors Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Local Ranking Factors
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Key factors that influence your local search rankings
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {localFactors.map((factor, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-green-600">{factor.factor}</CardTitle>
                    <Badge
                      variant="outline"
                      className={
                        factor.importance === "Critical"
                          ? "border-red-200 text-red-600"
                          : factor.importance === "High"
                            ? "border-orange-200 text-orange-600"
                            : "border-yellow-200 text-yellow-600"
                      }
                    >
                      {factor.importance} Impact
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Benefits of Local SEO
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Why local SEO is essential for location-based businesses
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200 group"
              >
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <MapPin className="mx-auto h-16 w-16 text-white mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Dominate Local Search?
            </h2>
            <p className="mt-6 text-xl leading-8 text-green-100">
              Start attracting more local customers with our proven local SEO strategies
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Local SEO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                <Link href="/digital-marketing/organic-search">View All SEO Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
