import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  PenTool,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Target,
  Star,
  Zap,
  Crown,
} from "lucide-react"
import Link from "next/link"

export default function ContentMarketingPage() {
  const contentPackages = [
    {
      name: "Content Essentials",
      subtitle: "Perfect for getting started",
      price: "$1,800",
      period: "/month",
      originalPrice: "$2,400",
      savings: "Save $600",
      description: "Essential content marketing to build your presence",
      features: [
        "4 blog posts per month",
        "Social media content (20 posts)",
        "Email newsletter template",
        "Content calendar planning",
        "Basic SEO optimization",
        "Monthly performance report",
        "Email support",
      ],
      popular: false,
      color: "from-orange-500 to-orange-600",
      icon: FileText,
      badge: "Best Value",
    },
    {
      name: "Content Professional",
      subtitle: "Most comprehensive package",
      price: "$3,500",
      period: "/month",
      originalPrice: "$4,500",
      savings: "Save $1,000",
      description: "Complete content marketing strategy and execution",
      features: [
        "8 blog posts per month",
        "Social media content (50 posts)",
        "Email marketing campaigns",
        "Video content creation (2 videos)",
        "Infographic design",
        "Advanced SEO optimization",
        "Content distribution strategy",
        "Bi-weekly strategy calls",
        "Dedicated content manager",
        "Phone & email support",
      ],
      popular: true,
      color: "from-red-500 to-red-600",
      icon: PenTool,
      badge: "Most Popular",
    },
    {
      name: "Content Enterprise",
      subtitle: "For content-driven businesses",
      price: "$6,800",
      period: "/month",
      originalPrice: "$8,500",
      savings: "Save $1,700",
      description: "Enterprise-level content marketing domination",
      features: [
        "16 blog posts per month",
        "Multi-platform content strategy",
        "Video production (4 videos)",
        "Podcast content creation",
        "Ebook and whitepaper creation",
        "Influencer collaboration",
        "Content automation setup",
        "Weekly strategy sessions",
        "Custom analytics dashboard",
        "Priority support team",
      ],
      popular: false,
      color: "from-purple-500 to-purple-600",
      icon: Crown,
      badge: "Premium",
    },
  ]

  const contentServices = [
    {
      title: "Blog Content Strategy",
      description: "Engaging blog posts that drive traffic and establish authority",
      icon: FileText,
      features: ["SEO-optimized articles", "Content calendar", "Topic research", "Performance tracking"],
    },
    {
      title: "Social Media Content",
      description: "Compelling content for all your social media platforms",
      icon: Users,
      features: ["Platform-specific content", "Visual design", "Hashtag strategy", "Engagement optimization"],
    },
    {
      title: "Email Marketing Content",
      description: "Persuasive email campaigns that convert subscribers",
      icon: Target,
      features: ["Newsletter design", "Drip campaigns", "Personalization", "A/B testing"],
    },
    {
      title: "Video Content Creation",
      description: "Professional video content for marketing and education",
      icon: BarChart3,
      features: ["Script writing", "Video production", "Animation", "YouTube optimization"],
    },
  ]

  const contentTypes = [
    { type: "Blog Posts", description: "SEO-optimized articles", icon: "📝" },
    { type: "Infographics", description: "Visual data storytelling", icon: "📊" },
    { type: "Videos", description: "Engaging video content", icon: "🎥" },
    { type: "Ebooks", description: "In-depth guides", icon: "📚" },
    { type: "Case Studies", description: "Success stories", icon: "📈" },
    { type: "Whitepapers", description: "Industry insights", icon: "📄" },
    { type: "Social Posts", description: "Platform-specific content", icon: "📱" },
    { type: "Email Campaigns", description: "Newsletter content", icon: "📧" },
  ]

  const results = [
    { metric: "Traffic Increase", value: "185%", description: "Average organic traffic growth" },
    { metric: "Lead Generation", value: "240%", description: "More qualified leads" },
    { metric: "Engagement Rate", value: "65%", description: "Higher content engagement" },
    { metric: "Brand Awareness", value: "150%", description: "Increased brand recognition" },
  ]

  const process = [
    {
      step: "1",
      title: "Content Audit",
      description: "Analyze existing content and identify opportunities",
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Create comprehensive content marketing strategy",
    },
    {
      step: "3",
      title: "Content Creation",
      description: "Produce high-quality, engaging content",
    },
    {
      step: "4",
      title: "Distribution & Optimization",
      description: "Publish and optimize content for maximum reach",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 mb-6">
              <PenTool className="mr-2 h-4 w-4" />
              Content Marketing
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Engage Your Audience with{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Compelling Content
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Build trust, drive engagement, and generate leads with strategic content marketing. Our expert team
              creates valuable content that resonates with your audience and drives business growth.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                Start Content Strategy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-200 hover:bg-orange-50 bg-transparent">
                View Content Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-red-600 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{result.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                <div className="text-xs text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Content Marketing Packages
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Choose the perfect content strategy to engage your audience and drive growth
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {contentPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.popular ? "ring-2 ring-red-500 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-2 text-sm font-semibold">
                      <Star className="inline h-4 w-4 mr-1" />
                      {pkg.badge}
                    </div>
                  </div>
                )}
                <CardHeader className={pkg.popular ? "pt-12" : "pt-6"}>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${pkg.color} text-white mb-4`}
                  >
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                    {!pkg.popular && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                        {pkg.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{pkg.subtitle}</p>
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                    <span className="text-sm text-gray-400 line-through">{pkg.originalPrice}</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 mb-4">
                    {pkg.savings}
                  </Badge>
                  <p className="text-sm text-gray-600">{pkg.description}</p>
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
                        ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
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
              All packages include content strategy consultation, editorial calendar, and performance analytics
            </p>
            <Button variant="outline" size="lg">
              Need Custom Content Strategy? Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Content Marketing Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive content solutions to engage your audience and drive results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {contentServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-red-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
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

      {/* Content Types Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Content We Create
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Diverse content formats to engage your audience across all channels
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 sm:gap-6">
            {contentTypes.map((content, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{content.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">{content.type}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{content.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Content Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Strategic approach to content marketing success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-red-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
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
              Content Marketing Benefits
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Why content marketing is essential for your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {[
              "Increase organic search traffic",
              "Build brand authority and trust",
              "Generate qualified leads",
              "Improve customer engagement",
              "Support sales conversations",
              "Reduce customer acquisition costs",
              "Enhance social media presence",
              "Educate your target audience",
              "Improve search engine rankings",
              "Create shareable content",
              "Build email subscriber lists",
              "Establish thought leadership",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Create Compelling Content?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-orange-100">
              Let's develop a content strategy that engages your audience and drives business growth
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Start Content Strategy
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
