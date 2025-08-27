import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Target, CheckCircle, ArrowRight, Code, ImageIcon, Zap } from "lucide-react"
import Link from "next/link"

export default function OnPageOptimizationPage() {
  const services = [
    {
      icon: FileText,
      title: "Title Tag Optimization",
      description: "Craft compelling, keyword-rich title tags that improve click-through rates and rankings",
      features: ["Keyword-optimized titles", "Character limit compliance", "Brand consistency", "CTR optimization"],
    },
    {
      icon: Code,
      title: "Meta Description Writing",
      description: "Write persuasive meta descriptions that encourage clicks from search results",
      features: ["Compelling copy", "Call-to-action inclusion", "Keyword integration", "Length optimization"],
    },
    {
      icon: Target,
      title: "Header Tag Structure",
      description: "Optimize H1, H2, H3 tags for better content hierarchy and keyword targeting",
      features: ["Proper hierarchy", "Keyword placement", "Readability improvement", "SEO structure"],
    },
    {
      icon: ImageIcon,
      title: "Image Optimization",
      description: "Optimize images with proper alt text, file names, and compression for better performance",
      features: ["Alt text optimization", "File size reduction", "Descriptive naming", "Format optimization"],
    },
    {
      icon: FileText,
      title: "Content Optimization",
      description: "Enhance content quality, keyword density, and readability for better user experience",
      features: ["Keyword density", "Content quality", "Readability scores", "User engagement"],
    },
    {
      icon: Code,
      title: "Schema Markup",
      description: "Implement structured data to help search engines understand your content better",
      features: ["Rich snippets", "Structured data", "Search enhancement", "SERP features"],
    },
  ]

  const benefits = [
    "Improved search engine rankings",
    "Higher click-through rates",
    "Better user experience",
    "Increased organic traffic",
    "Enhanced content relevance",
    "Better crawlability and indexing",
  ]

  const optimizationAreas = [
    {
      area: "Technical Elements",
      items: ["Title tags", "Meta descriptions", "Header tags", "URL structure", "Internal linking", "Schema markup"],
    },
    {
      area: "Content Quality",
      items: ["Keyword optimization", "Content depth", "Readability", "User intent", "Topic coverage", "E-A-T signals"],
    },
    {
      area: "User Experience",
      items: [
        "Page speed",
        "Mobile optimization",
        "Navigation",
        "Content structure",
        "Visual hierarchy",
        "Accessibility",
      ],
    },
    {
      area: "Performance Metrics",
      items: [
        "Core Web Vitals",
        "Loading speed",
        "Interactivity",
        "Visual stability",
        "Mobile usability",
        "HTTPS security",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-8 animate-fade-in">
              <FileText className="mr-2 h-4 w-4" />
              On-Page Optimization Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
              On-Page SEO Optimization for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Maximum Impact
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Optimize every element of your web pages for search engines and users. Our comprehensive on-page SEO
              services ensure your content is perfectly structured for maximum visibility and engagement.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Page Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 hover:bg-blue-50 bg-transparent px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                View Optimization Examples
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
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FileText className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5,000+</div>
              <div className="text-sm text-gray-600 font-medium">Pages Optimized</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">180%</div>
              <div className="text-sm text-gray-600 font-medium">Average CTR Improvement</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">92%</div>
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
              Our On-Page SEO Services
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Comprehensive optimization of all on-page elements for better search performance
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
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

      {/* Optimization Areas Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              What We Optimize
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Comprehensive on-page optimization covering all critical elements
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {optimizationAreas.map((area, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600 flex items-center">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    {area.area}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {area.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
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
              Benefits of On-Page Optimization
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Why on-page SEO is crucial for your website's success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <FileText className="mx-auto h-16 w-16 text-white mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Optimize Your Pages?
            </h2>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Get a comprehensive on-page SEO audit and start improving your search rankings today
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Page Optimization
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
