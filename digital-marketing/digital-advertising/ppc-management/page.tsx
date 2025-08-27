import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Megaphone, Target, DollarSign, CheckCircle, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function PPCManagementPage() {
  const benefits = [
    "Immediate traffic and visibility",
    "Precise audience targeting",
    "Measurable ROI and performance",
    "Budget control and optimization",
    "Quick market testing capabilities",
    "Complement to organic SEO efforts",
  ]

  const platforms = [
    {
      name: "Google Ads",
      description: "Search, Display, Shopping, and YouTube advertising",
      icon: "🔍",
    },
    {
      name: "Microsoft Ads",
      description: "Bing and Yahoo search network advertising",
      icon: "🌐",
    },
    {
      name: "Facebook Ads",
      description: "Facebook and Instagram social media advertising",
      icon: "📱",
    },
    {
      name: "LinkedIn Ads",
      description: "Professional B2B targeting and advertising",
      icon: "💼",
    },
  ]

  const services = [
    {
      title: "Campaign Strategy",
      description: "Comprehensive PPC strategy development aligned with your business goals",
    },
    {
      title: "Keyword Research",
      description: "In-depth keyword analysis and selection for maximum ROI",
    },
    {
      title: "Ad Creation",
      description: "Compelling ad copy and creative development that converts",
    },
    {
      title: "Landing Page Optimization",
      description: "Optimize landing pages for better conversion rates",
    },
    {
      title: "Bid Management",
      description: "Strategic bid optimization for cost-effective results",
    },
    {
      title: "Performance Tracking",
      description: "Detailed reporting and analytics for continuous improvement",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <Megaphone className="mr-2 h-4 w-4" />
              PPC Management Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Professional PPC Management for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Maximum ROI
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Drive immediate traffic and conversions with our expert PPC management services. We optimize your ad spend
              across all major platforms for maximum return on investment.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Free PPC Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <DollarSign className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">400%</div>
              <div className="text-sm text-gray-600">Average ROAS</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <Target className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">65%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">250%</div>
              <div className="text-sm text-gray-600">Conversion Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advertising Platforms We Manage
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Expert management across all major PPC platforms</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our PPC Services</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive PPC management services for optimal performance
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our PPC Management?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Benefits of working with our certified PPC experts</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Maximize Your Ad Spend?
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Get a free PPC audit and discover how we can improve your campaign performance
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free PPC Audit
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/digital-marketing">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
