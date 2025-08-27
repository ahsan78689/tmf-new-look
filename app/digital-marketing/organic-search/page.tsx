import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  Star,
  Zap,
  FileText,
  Settings,
  MapPin,
  ShoppingCart,
  BarChart3,
  Globe,
  Rocket,
  Award,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function OrganicSearchPage() {
  const services = [
    {
      icon: Target,
      title: "SEO Strategy",
      description: "Comprehensive SEO strategies tailored to your business goals and target audience",
      features: ["Custom SEO roadmap", "Competitor analysis", "Keyword research", "Performance tracking"],
      color: "bg-gradient-to-br from-green-600 to-blue-600",
      href: "/digital-marketing/organic-search/seo-strategy",
      popular: true,
    },
    {
      icon: Search,
      title: "Keyword Research",
      description: "In-depth keyword analysis to identify high-value search opportunities",
      features: ["Search volume analysis", "Competition assessment", "Long-tail keywords", "Intent mapping"],
      color: "bg-gradient-to-br from-blue-600 to-purple-600",
      href: "/digital-marketing/organic-search/keyword-research",
      popular: false,
    },
    {
      icon: FileText,
      title: "On-Page Optimization",
      description: "Optimize every element of your web pages for maximum search visibility",
      features: ["Title tag optimization", "Meta descriptions", "Content optimization", "Schema markup"],
      color: "bg-gradient-to-br from-purple-600 to-pink-600",
      href: "/digital-marketing/organic-search/on-page-optimization",
      popular: false,
    },
    {
      icon: Globe,
      title: "Off-Page Optimization",
      description: "Build authority and credibility through strategic link building and outreach",
      features: ["Link building", "Guest posting", "Brand mentions", "Social signals"],
      color: "bg-gradient-to-br from-orange-600 to-red-600",
      href: "/digital-marketing/organic-search/off-page-optimization",
      popular: false,
    },
    {
      icon: Settings,
      title: "Technical SEO",
      description: "Fix technical issues and optimize your website's foundation for search engines",
      features: ["Site speed optimization", "Mobile optimization", "Crawlability", "Core Web Vitals"],
      color: "bg-gradient-to-br from-red-600 to-pink-600",
      href: "/digital-marketing/organic-search/technical-seo",
      popular: false,
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your area",
      features: ["Google Business Profile", "Local citations", "Review management", "Local keywords"],
      color: "bg-gradient-to-br from-green-600 to-teal-600",
      href: "/digital-marketing/organic-search/local-seo",
      popular: false,
    },
    {
      icon: ShoppingCart,
      title: "E-commerce SEO",
      description: "Specialized SEO strategies for online stores to drive sales and revenue",
      features: ["Product optimization", "Category pages", "Shopping feeds", "Conversion optimization"],
      color: "bg-gradient-to-br from-yellow-600 to-orange-600",
      href: "/digital-marketing/organic-search/ecommerce-seo",
      popular: false,
    },
    {
      icon: BarChart3,
      title: "SEO Audits",
      description: "Comprehensive analysis of your website's SEO performance and opportunities",
      features: ["Technical analysis", "Content review", "Competitor research", "Action plan"],
      color: "bg-gradient-to-br from-indigo-600 to-blue-600",
      href: "/digital-marketing/organic-search/seo-audits",
      popular: false,
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Organic Traffic",
      description: "Drive more qualified visitors to your website through improved search rankings",
    },
    {
      icon: Target,
      title: "Better Targeting",
      description: "Reach customers actively searching for your products or services",
    },
    {
      icon: Award,
      title: "Higher Credibility",
      description: "Build trust and authority with top search engine rankings",
    },
    {
      icon: Clock,
      title: "Long-term Results",
      description: "Sustainable growth that continues to deliver value over time",
    },
  ]

  const stats = [
    { number: "300%", label: "Average Traffic Increase", icon: TrendingUp },
    { number: "85%", label: "Keywords in Top 10", icon: Target },
    { number: "200+", label: "Successful Projects", icon: Users },
    { number: "4.9/5", label: "Client Satisfaction", icon: Star },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Our organic traffic increased by 400% in just 8 months. The SEO strategy was comprehensive and results-driven.",
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Best investment we've made in digital marketing. Our search rankings improved dramatically across all target keywords.",
    },
    {
      name: "Lisa Rodriguez",
      company: "Local Services Pro",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "The local SEO optimization helped us dominate our market. We're now the top result for all our main services.",
    },
  ]

  const process = [
    {
      step: "1",
      title: "SEO Audit & Analysis",
      description: "Comprehensive analysis of your current SEO performance and opportunities",
      icon: Search,
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Custom SEO strategy tailored to your business goals and target audience",
      icon: Target,
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execute on-page, off-page, and technical optimizations",
      icon: Zap,
    },
    {
      step: "4",
      title: "Monitor & Optimize",
      description: "Continuous monitoring and optimization for sustained growth",
      icon: BarChart3,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>

        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-8 animate-fade-in">
              <Search className="mr-2 h-4 w-4" />
              #1 Organic Search Optimization
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
              Dominate Search Results with{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Organic SEO
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Drive qualified traffic, increase visibility, and grow your business with our comprehensive organic search
              optimization services. We help you rank higher, attract more customers, and achieve sustainable growth.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-200 hover:bg-green-50 bg-transparent px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                View Our Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our Organic Search Services
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Comprehensive SEO solutions to boost your search rankings and drive organic growth
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 z-20 bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg">
                    Popular
                  </Badge>
                )}

                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start mb-6">
                    <div className="relative mr-4">
                      <div
                        className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden`}
                      >
                        <service.icon className="h-7 w-7 relative z-10" />
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-green-200 transition-colors duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Why Choose Organic Search?
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              The benefits of investing in organic search optimization for your business
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Our SEO Process</h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <item.icon className="h-8 w-8" />
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Hear from businesses that have achieved remarkable growth with our SEO services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 ring-2 ring-green-200">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-green-600 to-blue-600 text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse animation-delay-2000"></div>

        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <Rocket className="mx-auto h-16 w-16 text-white mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Dominate Search Results?
            </h2>
            <p className="mt-6 text-xl leading-8 text-green-100">
              Get a free SEO audit and discover how we can improve your search visibility, drive more qualified traffic,
              and grow your business with organic search optimization.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                <Link href="/digital-marketing">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
