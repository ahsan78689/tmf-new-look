import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link2, Users, Share2, CheckCircle, ArrowRight, Globe, Star } from "lucide-react"
import Link from "next/link"

export default function OffPageOptimizationPage() {
  const services = [
    {
      icon: Link2,
      title: "Link Building",
      description: "Acquire high-quality backlinks from authoritative websites to boost your domain authority",
      features: [
        "High-quality backlinks",
        "Domain authority boost",
        "Organic link acquisition",
        "White-hat techniques",
      ],
    },
    {
      icon: Users,
      title: "Guest Posting",
      description: "Publish valuable content on relevant websites to build authority and earn quality backlinks",
      features: ["Quality content creation", "Relevant site targeting", "Authority building", "Brand exposure"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Leverage social platforms to increase brand awareness and drive traffic to your website",
      features: ["Social signals", "Brand awareness", "Traffic generation", "Community building"],
    },
    {
      icon: Globe,
      title: "Local Citations",
      description: "Build consistent NAP citations across directories to improve local search visibility",
      features: ["NAP consistency", "Directory submissions", "Local visibility", "Citation building"],
    },
    {
      icon: Users,
      title: "Influencer Outreach",
      description: "Connect with industry influencers to amplify your content and build valuable relationships",
      features: ["Influencer partnerships", "Content amplification", "Relationship building", "Brand mentions"],
    },
    {
      icon: Share2,
      title: "Brand Mentions",
      description: "Monitor and build unlinked brand mentions to improve your online reputation and authority",
      features: ["Mention monitoring", "Link reclamation", "Reputation management", "Authority signals"],
    },
  ]

  const benefits = [
    "Increased domain authority",
    "Higher search engine rankings",
    "More referral traffic",
    "Enhanced brand credibility",
    "Improved online reputation",
    "Better local search visibility",
  ]

  const linkTypes = [
    {
      type: "Editorial Links",
      description: "Natural links earned through high-quality content",
      value: "Highest",
      difficulty: "High",
    },
    {
      type: "Guest Post Links",
      description: "Links acquired through guest posting on relevant sites",
      value: "High",
      difficulty: "Medium",
    },
    {
      type: "Resource Links",
      description: "Links from resource pages and industry directories",
      value: "Medium",
      difficulty: "Medium",
    },
    {
      type: "Social Links",
      description: "Links from social media platforms and profiles",
      value: "Low",
      difficulty: "Low",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 mb-8 animate-fade-in">
              <Link2 className="mr-2 h-4 w-4" />
              Off-Page Optimization Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
              Off-Page SEO That{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Builds Authority
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Build your website's authority and credibility through strategic off-page optimization. Our comprehensive
              approach includes link building, social signals, and reputation management to boost your search rankings.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Link Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-200 hover:bg-purple-50 bg-transparent px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                View Link Portfolio
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
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Link2 className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-sm text-gray-600 font-medium">Quality Backlinks Built</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-sm text-gray-600 font-medium">Domain Authority Increase</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">94%</div>
              <div className="text-sm text-gray-600 font-medium">Client Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our Off-Page SEO Services
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Comprehensive strategies to build your website's authority and online presence
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
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

      {/* Link Types Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Types of Links We Build
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Understanding different link types and their SEO value
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {linkTypes.map((linkType, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-purple-600">{linkType.type}</CardTitle>
                    <div className="flex gap-2">
                      <Badge
                        variant="outline"
                        className={
                          linkType.value === "Highest"
                            ? "border-green-200 text-green-600"
                            : linkType.value === "High"
                              ? "border-blue-200 text-blue-600"
                              : linkType.value === "Medium"
                                ? "border-yellow-200 text-yellow-600"
                                : "border-gray-200 text-gray-600"
                        }
                      >
                        {linkType.value} Value
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          linkType.difficulty === "High"
                            ? "border-red-200 text-red-600"
                            : linkType.difficulty === "Medium"
                              ? "border-yellow-200 text-yellow-600"
                              : "border-green-200 text-green-600"
                        }
                      >
                        {linkType.difficulty} Difficulty
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{linkType.description}</p>
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
              Benefits of Off-Page SEO
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Why off-page optimization is essential for SEO success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200 group"
              >
                <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <Link2 className="mx-auto h-16 w-16 text-white mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Build Your Authority?
            </h2>
            <p className="mt-6 text-xl leading-8 text-purple-100">
              Start building high-quality backlinks and improve your search rankings with our proven strategies
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Off-Page SEO
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
