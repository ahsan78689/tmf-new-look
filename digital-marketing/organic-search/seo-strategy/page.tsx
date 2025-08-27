import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Target, CheckCircle, ArrowRight, Users } from "lucide-react"
import Link from "next/link"

export default function SEOStrategyPage() {
  const benefits = [
    "Increased organic traffic and visibility",
    "Higher search engine rankings",
    "Better user experience and site performance",
    "Long-term sustainable growth",
    "Cost-effective marketing solution",
    "Improved brand credibility and trust",
  ]

  const process = [
    {
      step: "1",
      title: "SEO Audit & Analysis",
      description: "Comprehensive analysis of your current SEO performance and competitor research",
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Custom SEO strategy tailored to your business goals and target audience",
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execute on-page, off-page, and technical SEO improvements",
    },
    {
      step: "4",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and optimization for sustained growth",
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      features: [
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO audit",
        "Monthly reporting",
        "5 pages optimized",
      ],
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      popular: true,
      features: [
        "Everything in Starter",
        "Content strategy & creation",
        "Link building campaign",
        "Local SEO optimization",
        "15 pages optimized",
        "Bi-weekly reporting",
      ],
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      features: [
        "Everything in Professional",
        "Advanced technical SEO",
        "E-commerce SEO",
        "International SEO",
        "Unlimited pages",
        "Weekly reporting",
        "Dedicated account manager",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700 mb-6">
              <Search className="mr-2 h-4 w-4" />
              SEO Strategy Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Strategic SEO That{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Drives Results
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Boost your search engine rankings and drive organic traffic with our comprehensive SEO strategy services.
              We create data-driven SEO plans that deliver measurable results for your business.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Get SEO Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 hover:bg-green-50 bg-transparent">
                View Case Studies
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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">300%</div>
              <div className="text-sm text-gray-600">Average Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <Target className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Keywords in Top 10</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Successful SEO Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our SEO Strategy?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our strategic approach to SEO delivers long-term results that grow your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our SEO Process</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              A proven methodology that delivers consistent results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SEO Strategy Packages</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Choose the perfect SEO package for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "border-green-500 shadow-xl" : "border-gray-200"}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Boost Your Rankings?</h2>
            <p className="mt-4 text-lg leading-8 text-green-100">
              Get a free SEO audit and discover how we can improve your search visibility
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Get Free SEO Audit
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
