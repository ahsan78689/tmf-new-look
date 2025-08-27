import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Globe, Users, Star, Zap } from "lucide-react"
import Link from "next/link"

export default function SEOServicesPage() {
  const seoPackages = [
    {
      name: "SEO Starter",
      subtitle: "Perfect for small businesses",
      price: "$1,500",
      period: "/month",
      originalPrice: "$2,000",
      savings: "Save $500",
      description: "Essential SEO foundation to get you started",
      features: [
        "Technical SEO audit",
        "Keyword research (50 keywords)",
        "On-page optimization (10 pages)",
        "Google My Business setup",
        "Monthly reporting",
        "Email support",
      ],
      popular: false,
      colorFrom: "from-blue-500",
      colorTo: "to-blue-600",
      icon: Target,
    },
    {
      name: "SEO Professional",
      subtitle: "Most popular choice",
      price: "$2,800",
      period: "/month",
      originalPrice: "$3,500",
      savings: "Save $700",
      description: "Comprehensive SEO strategy for growing businesses",
      features: [
        "Everything in Starter",
        "Advanced keyword research (200 keywords)",
        "Content strategy & creation (4 articles/month)",
        "Link building campaign",
        "Competitor analysis",
        "Local SEO optimization",
        "Bi-weekly reporting",
        "Phone & email support",
      ],
      popular: true,
      colorFrom: "from-purple-500",
      colorTo: "to-purple-600",
      icon: TrendingUp,
    },
    {
      name: "SEO Enterprise",
      subtitle: "For large organizations",
      price: "$5,500",
      period: "/month",
      originalPrice: "$7,000",
      savings: "Save $1,500",
      description: "Full-scale SEO domination for enterprise clients",
      features: [
        "Everything in Professional",
        "Unlimited keyword targeting",
        "Content creation (8 articles/month)",
        "Advanced link building",
        "Multi-location SEO",
        "Custom reporting dashboard",
        "Weekly strategy calls",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      popular: false,
      colorFrom: "from-green-500",
      colorTo: "to-green-600",
      icon: BarChart3,
    },
  ]

  const seoServices = [
    {
      title: "Technical SEO Audit",
      description: "Comprehensive analysis of your website's technical foundation",
      icon: Search,
      features: ["Site speed optimization", "Mobile responsiveness", "Schema markup", "XML sitemaps"],
    },
    {
      title: "Keyword Research & Strategy",
      description: "Data-driven keyword research to target your ideal customers",
      icon: Target,
      features: ["Competitor analysis", "Search volume analysis", "Long-tail keywords", "Content mapping"],
    },
    {
      title: "On-Page Optimization",
      description: "Optimize every element of your web pages for search engines",
      icon: TrendingUp,
      features: ["Title tag optimization", "Meta descriptions", "Header structure", "Internal linking"],
    },
    {
      title: "Content Strategy & Creation",
      description: "High-quality, SEO-optimized content that engages and converts",
      icon: BarChart3,
      features: ["Blog content", "Landing pages", "Product descriptions", "Content calendar"],
    },
  ]

  const seoProcess = [
    {
      step: "1",
      title: "SEO Audit",
      description: "Comprehensive analysis of your current SEO performance",
      duration: "1-2 weeks",
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Custom SEO strategy based on your business goals",
      duration: "1 week",
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execute technical fixes and content optimization",
      duration: "4-8 weeks",
    },
    {
      step: "4",
      title: "Monitoring & Reporting",
      description: "Track progress and adjust strategy as needed",
      duration: "Ongoing",
    },
  ]

  const benefits = [
    "Increase organic traffic by 150-300%",
    "Improve search engine rankings",
    "Higher quality leads and conversions",
    "Better user experience and site performance",
    "Long-term sustainable growth",
    "Competitive advantage in your market",
  ]

  const caseStudies = [
    {
      client: "E-commerce Store",
      industry: "Retail",
      results: "+285% organic traffic",
      timeframe: "6 months",
      description: "Increased online sales through strategic SEO optimization",
    },
    {
      client: "Local Service Business",
      industry: "Home Services",
      results: "+190% local leads",
      timeframe: "4 months",
      description: "Dominated local search results for key service terms",
    },
    {
      client: "SaaS Company",
      industry: "Technology",
      results: "+340% qualified leads",
      timeframe: "8 months",
      description: "Improved B2B lead generation through content marketing",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <Search className="mr-2 h-4 w-4" />
              SEO Services
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Dominate Search Results with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expert SEO
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Drive more organic traffic, increase your search rankings, and grow your business with our proven SEO
              strategies. Our data-driven approach delivers measurable results that matter to your bottom line.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">250%</div>
              <div className="text-sm text-gray-600">Average Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <Globe className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Websites Optimized</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              SEO Packages That Deliver Results
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Choose the perfect SEO package for your business needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {seoPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.popular ? "ring-2 ring-purple-500 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                      <Star className="inline h-4 w-4 mr-1" />
                      Most Popular Choice
                    </div>
                  </div>
                )}
                <CardHeader className={pkg.popular ? "pt-12" : "pt-6"}>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${pkg.colorFrom} ${pkg.colorTo} text-white mb-4`}
                  >
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      {pkg.savings}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{pkg.subtitle}</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                    <span className="text-sm text-gray-400 line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    size="lg"
                  >
                    {pkg.popular ? (
                      <>
                        <Zap className="mr-2 h-4 w-4" />
                        Get Started Now
                      </>
                    ) : (
                      "Choose This Package"
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              All packages include a 30-day money-back guarantee and free consultation
            </p>
            <Button variant="outline" size="lg">
              Need a Custom Package? Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our SEO Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive SEO solutions to boost your online visibility and drive qualified traffic
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {seoServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Our SEO Process</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              A proven methodology that delivers consistent results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4">
            {seoProcess.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-xs">
                    {item.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Success Stories</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Real results from our SEO campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{study.client}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {study.industry}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Results:</span>
                      <span className="text-lg font-bold text-green-600">{study.results}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Timeframe:</span>
                      <span className="text-sm font-medium">{study.timeframe}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Why Choose Our SEO Services?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Benefits you can expect from our SEO expertise
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Boost Your Search Rankings?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              Get a free SEO audit and discover how we can help you dominate search results
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free SEO Audit
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
