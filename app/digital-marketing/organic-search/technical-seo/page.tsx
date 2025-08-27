import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Zap, Shield, CheckCircle, ArrowRight, Code, Globe, Monitor, Star } from "lucide-react"
import Link from "next/link"

export default function TechnicalSEOPage() {
  const services = [
    {
      icon: Zap,
      title: "Site Speed Optimization",
      description: "Improve page load times and Core Web Vitals for better user experience and rankings",
      features: ["Core Web Vitals", "Page speed optimization", "Image compression", "Code minification"],
    },
    {
      icon: Globe,
      title: "Mobile Optimization",
      description: "Ensure your website is fully optimized for mobile devices and passes mobile-first indexing",
      features: ["Mobile-first design", "Responsive layouts", "Touch optimization", "Mobile usability"],
    },
    {
      icon: Code,
      title: "Crawlability & Indexing",
      description: "Optimize robots.txt, XML sitemaps, and site structure for better search engine crawling",
      features: ["XML sitemaps", "Robots.txt optimization", "Site architecture", "Crawl budget optimization"],
    },
    {
      icon: Shield,
      title: "HTTPS & Security",
      description: "Implement SSL certificates and security best practices to protect your site and users",
      features: ["SSL implementation", "Security headers", "HTTPS migration", "Security monitoring"],
    },
    {
      icon: Settings,
      title: "URL Structure",
      description: "Create clean, SEO-friendly URLs that are easy for users and search engines to understand",
      features: ["Clean URL structure", "Canonical tags", "Redirect management", "URL optimization"],
    },
    {
      icon: Code,
      title: "Schema Markup",
      description: "Implement structured data to help search engines understand your content better",
      features: ["Rich snippets", "Structured data", "JSON-LD implementation", "Schema validation"],
    },
  ]

  const benefits = [
    "Improved search engine crawling",
    "Faster page load times",
    "Better mobile user experience",
    "Enhanced security and trust",
    "Higher search rankings",
    "Reduced bounce rates",
  ]

  const technicalAudits = [
    {
      category: "Performance",
      checks: ["Page speed analysis", "Core Web Vitals", "Image optimization", "Code efficiency", "Caching setup"],
    },
    {
      category: "Crawlability",
      checks: ["XML sitemap review", "Robots.txt analysis", "Internal linking", "URL structure", "Redirect chains"],
    },
    {
      category: "Mobile",
      checks: ["Mobile-friendliness", "Responsive design", "Touch elements", "Viewport configuration", "Mobile speed"],
    },
    {
      category: "Security",
      checks: ["HTTPS implementation", "Security headers", "SSL certificate", "Mixed content", "Vulnerability scan"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 mb-8 animate-fade-in">
              <Settings className="mr-2 h-4 w-4" />
              Technical SEO Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
              Technical SEO for{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Peak Performance
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Optimize your website's technical foundation for search engines. Our comprehensive technical SEO services
              ensure your site is fast, secure, and easily crawlable by search engines.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Technical Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-200 hover:bg-orange-50 bg-transparent px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                View Audit Sample
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
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">60%</div>
              <div className="text-sm text-gray-600 font-medium">Average Speed Improvement</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Monitor className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600 font-medium">Mobile Optimization Score</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">96%</div>
              <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our Technical SEO Services
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Comprehensive technical optimization for better search engine performance
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
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

      {/* Technical Audits Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">What We Audit</h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Comprehensive technical analysis covering all critical areas
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {technicalAudits.map((audit, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600 flex items-center">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    {audit.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {audit.checks.map((check, checkIndex) => (
                      <div key={checkIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{check}</span>
                      </div>
                    ))}
                  </div>
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
              Benefits of Technical SEO
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Why technical optimization is crucial for SEO success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
              >
                <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <Settings className="mx-auto h-16 w-16 text-white mb-6 animate-spin" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Fix Technical Issues?
            </h2>
            <p className="mt-6 text-xl leading-8 text-orange-100">
              Get a comprehensive technical SEO audit and optimize your website's foundation
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Technical SEO
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
