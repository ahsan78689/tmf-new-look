import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, DollarSign, TrendingUp, CheckCircle, ArrowRight, Zap, BarChart3, Users, Clock, Award, Star, Megaphone } from 'lucide-react'
import Link from "next/link"

export default function PPCManagementPage() {
  const platforms = [
    {
      name: "Google Ads",
      description: "Search, Display, Shopping, and YouTube advertising campaigns",
      icon: "🔍",
      features: ["Search Campaigns", "Display Network", "Shopping Ads", "YouTube Ads"],
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Microsoft Ads",
      description: "Bing and Yahoo search network advertising with lower competition",
      icon: "🌐",
      features: ["Bing Search", "Yahoo Network", "LinkedIn Integration", "Import from Google"],
      color: "from-green-500 to-green-600",
    },
    {
      name: "Facebook Ads",
      description: "Facebook and Instagram social media advertising campaigns",
      icon: "📱",
      features: ["Facebook Feed", "Instagram Stories", "Messenger Ads", "Audience Network"],
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "LinkedIn Ads",
      description: "Professional B2B targeting and lead generation campaigns",
      icon: "💼",
      features: ["Sponsored Content", "Message Ads", "Dynamic Ads", "Lead Gen Forms"],
      color: "from-purple-500 to-purple-600",
    },
  ]

  const services = [
    {
      title: "Campaign Strategy & Setup",
      description: "Comprehensive PPC strategy development and campaign architecture",
      features: ["Market Research", "Competitor Analysis", "Campaign Structure", "Goal Setting"],
    },
    {
      title: "Keyword Research & Selection",
      description: "In-depth keyword analysis and selection for maximum ROI",
      features: ["Search Volume Analysis", "Competition Assessment", "Long-tail Keywords", "Negative Keywords"],
    },
    {
      title: "Ad Copy Creation & Testing",
      description: "Compelling ad copy that drives clicks and conversions",
      features: ["A/B Testing", "Ad Extensions", "Responsive Ads", "Performance Optimization"],
    },
    {
      title: "Landing Page Optimization",
      description: "Optimize landing pages for better conversion rates and Quality Score",
      features: ["Page Speed", "Mobile Optimization", "Conversion Tracking", "User Experience"],
    },
    {
      title: "Bid Management & Optimization",
      description: "Strategic bid optimization for cost-effective results",
      features: ["Automated Bidding", "Manual Adjustments", "Budget Allocation", "Performance Monitoring"],
    },
    {
      title: "Performance Tracking & Reporting",
      description: "Detailed analytics and reporting for continuous improvement",
      features: ["Custom Dashboards", "Monthly Reports", "ROI Analysis", "Recommendations"],
    },
  ]

  const stats = [
    {
      value: "400%",
      label: "Average ROAS",
      description: "Return on ad spend",
      icon: DollarSign,
    },
    {
      value: "65%",
      label: "Cost Reduction",
      description: "Average CPC decrease",
      icon: TrendingUp,
    },
    {
      value: "250%",
      label: "Conversion Increase",
      description: "Improvement in conversions",
      icon: Target,
    },
    {
      value: "24/7",
      label: "Monitoring",
      description: "Campaign optimization",
      icon: Clock,
    },
  ]

  const benefits = [
    "Immediate traffic and visibility",
    "Precise audience targeting capabilities",
    "Measurable ROI and performance tracking",
    "Budget control and optimization",
    "Quick market testing capabilities",
    "Complement to organic SEO efforts",
    "Real-time campaign adjustments",
    "Expert bid management strategies",
  ]

  const testimonials = [
    {
      name: "David Wilson",
      company: "Tech Startup",
      content: "Our PPC campaigns generated 300% more qualified leads within the first month. The ROI has been incredible.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=DW",
    },
    {
      name: "Emma Thompson",
      company: "E-commerce Brand",
      content: "Professional PPC management that actually delivers results. Our cost per acquisition dropped by 50%.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=ET",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 mb-8 shadow-lg">
              <Megaphone className="mr-2 h-4 w-4" />
              PPC Management Services
              <Badge className="ml-2 bg-blue-600 text-white">Expert Management</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Professional PPC Management for{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Maximum ROI
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Drive immediate traffic and conversions with our expert PPC management services. We optimize your ad spend
              across all major platforms for maximum return on investment and sustainable business growth.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Free PPC Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-200 hover:bg-blue-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-500">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Advertising Platforms We Manage
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Expert management across all major PPC platforms for comprehensive coverage
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {platforms.map((platform, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start mb-6">
                    <div className="relative mr-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <span className="text-2xl">{platform.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {platform.name}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our PPC Management Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive PPC management services for optimal campaign performance
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our PPC Management?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Benefits of working with our certified PPC experts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              See how our PPC management drives real business results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Maximize Your Ad Spend?
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Get a free PPC audit and discover how we can improve your campaign performance
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Award className="mr-2 h-5 w-5" />
                Get Free PPC Audit
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/digital-marketing/digital-advertising">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
