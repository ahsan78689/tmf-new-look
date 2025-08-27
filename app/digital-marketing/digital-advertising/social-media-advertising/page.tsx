import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, TrendingUp, CheckCircle, ArrowRight, Users, DollarSign, Star, Award, Heart, MessageCircle, Share2, Eye } from 'lucide-react'
import Link from "next/link"

export default function SocialMediaAdvertisingPage() {
  const platforms = [
    {
      name: "Facebook Ads",
      description: "Reach billions of users with targeted Facebook advertising campaigns",
      icon: "📘",
      color: "from-blue-500 to-blue-600",
      features: ["Detailed targeting", "Custom audiences", "Lookalike audiences", "Dynamic ads"],
      users: "2.9B",
      avgCPC: "$0.97",
    },
    {
      name: "Instagram Ads",
      description: "Visual storytelling through Instagram's engaging platform",
      icon: "📷",
      color: "from-pink-500 to-pink-600",
      features: ["Story ads", "Feed ads", "Reels ads", "Shopping ads"],
      users: "2B",
      avgCPC: "$1.20",
    },
    {
      name: "LinkedIn Ads",
      description: "Professional B2B targeting for business growth and lead generation",
      icon: "💼",
      color: "from-blue-600 to-blue-700",
      features: ["Job title targeting", "Company targeting", "Industry targeting", "Lead gen forms"],
      users: "900M",
      avgCPC: "$5.26",
    },
    {
      name: "TikTok Ads",
      description: "Reach younger audiences with creative video content",
      icon: "🎵",
      color: "from-purple-500 to-purple-600",
      features: ["In-feed ads", "Brand takeovers", "Hashtag challenges", "Branded effects"],
      users: "1B",
      avgCPC: "$1.00",
    },
    {
      name: "Twitter Ads",
      description: "Real-time engagement and brand awareness campaigns",
      icon: "🐦",
      color: "from-blue-400 to-blue-500",
      features: ["Promoted tweets", "Trend takeovers", "Video ads", "Conversation ads"],
      users: "450M",
      avgCPC: "$0.38",
    },
    {
      name: "YouTube Ads",
      description: "Video advertising on the world's largest video platform",
      icon: "📺",
      color: "from-red-500 to-red-600",
      features: ["Skippable ads", "Non-skippable ads", "Bumper ads", "Discovery ads"],
      users: "2.7B",
      avgCPC: "$2.00",
    },
  ]

  const services = [
    {
      title: "Campaign Strategy & Planning",
      description: "Comprehensive social media advertising strategy development",
      icon: Users,
      features: ["Audience research", "Platform selection", "Budget allocation", "Goal setting"],
    },
    {
      title: "Creative Development",
      description: "Engaging ad creatives that capture attention and drive action",
      icon: Heart,
      features: ["Visual design", "Video production", "Copywriting", "A/B testing"],
    },
    {
      title: "Audience Targeting",
      description: "Precise audience targeting for maximum campaign effectiveness",
      icon: Eye,
      features: ["Demographics", "Interests", "Behaviors", "Custom audiences"],
    },
    {
      title: "Campaign Management",
      description: "Full-service campaign setup, monitoring, and optimization",
      icon: MessageCircle,
      features: ["Daily monitoring", "Bid optimization", "Budget management", "Performance tracking"],
    },
    {
      title: "Performance Analytics",
      description: "Detailed analytics and reporting for continuous improvement",
      icon: TrendingUp,
      features: ["ROI tracking", "Conversion analysis", "Custom reports", "Insights & recommendations"],
    },
    {
      title: "Social Commerce",
      description: "Drive sales directly through social media platforms",
      icon: Share2,
      features: ["Shopping ads", "Product catalogs", "Dynamic retargeting", "Sales optimization"],
    },
  ]

  const stats = [
    {
      value: "500%",
      label: "Average ROAS",
      description: "Return on ad spend",
      icon: DollarSign,
    },
    {
      value: "2M+",
      label: "People Reached",
      description: "Monthly reach across platforms",
      icon: Users,
    },
    {
      value: "75%",
      label: "Conversion Rate",
      description: "Improvement in conversions",
      icon: TrendingUp,
    },
    {
      value: "24/7",
      label: "Campaign Monitoring",
      description: "Continuous optimization",
      icon: Eye,
    },
  ]

  const benefits = [
    "Precise audience targeting capabilities",
    "Cost-effective advertising solutions",
    "Real-time campaign optimization",
    "Detailed performance analytics",
    "Multi-platform campaign management",
    "Creative testing and optimization",
    "Advanced remarketing strategies",
    "Social commerce integration",
  ]

  const testimonials = [
    {
      name: "Amanda Foster",
      company: "Fashion Brand",
      content: "Our social media advertising campaigns brought us 400% more qualified leads and increased brand awareness significantly.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=AF",
    },
    {
      name: "Carlos Rodriguez",
      company: "Tech Company",
      content: "The team's expertise in social media advertising helped us achieve a 600% ROAS across all platforms. Outstanding results!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=CR",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-pink-700 mb-8 shadow-lg">
              <Smartphone className="mr-2 h-4 w-4" />
              Social Media Advertising
              <Badge className="ml-2 bg-pink-600 text-white">Expert Management</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Social Media Ads That{" "}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Reach your target audience where they spend their time. Our social media advertising experts create and
              manage campaigns across all major platforms to maximize your ROI and grow your business.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Social Ads Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-pink-200 hover:bg-pink-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 text-white shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-500">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30 relative">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Advertising Platforms We Master
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Expert management across all major social media advertising platforms
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                        {platform.name}
                      </CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span>{platform.users} users</span>
                        <span>Avg CPC: {platform.avgCPC}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-pink-600 mr-3 flex-shrink-0" />
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
              Our Social Media Advertising Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive social media advertising solutions for maximum impact
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-pink-600 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Social Media Advertising?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Benefits of working with our social media advertising experts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0" />
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
              See how our social media advertising expertise drives real results
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
      <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Dominate Social Media?
            </h2>
            <p className="mt-4 text-lg leading-8 text-pink-100">
              Let's create social media advertising campaigns that drive real business growth
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-white text-pink-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Award className="mr-2 h-5 w-5" />
                Start Social Campaign
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
