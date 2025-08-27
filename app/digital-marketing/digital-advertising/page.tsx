import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, Users, DollarSign, ArrowRight, CheckCircle, Zap, BarChart3, Megaphone, Eye, RefreshCw, ShoppingCart, Play, Lightbulb, Star, Award, Clock } from 'lucide-react'
import Link from "next/link"

export default function DigitalAdvertisingPage() {
  const services = [
    {
      title: "PPC Management",
      description: "Professional pay-per-click campaign management across all major platforms",
      icon: Target,
      color: "from-blue-500 to-blue-600",
      features: ["Google Ads", "Microsoft Ads", "Campaign Optimization", "Bid Management"],
      href: "/digital-marketing/digital-advertising/ppc-management",
      popular: true,
    },
    {
      title: "Google Ads",
      description: "Expert Google Ads management for maximum ROI and qualified traffic",
      icon: Zap,
      color: "from-green-500 to-green-600",
      features: ["Search Campaigns", "Display Ads", "Shopping Ads", "YouTube Ads"],
      href: "/digital-marketing/digital-advertising/google-ads",
      popular: false,
    },
    {
      title: "Social Media Advertising",
      description: "Targeted social media campaigns across Facebook, Instagram, LinkedIn, and more",
      icon: Users,
      color: "from-pink-500 to-pink-600",
      features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "TikTok Ads"],
      href: "/digital-marketing/digital-advertising/social-media-advertising",
      popular: false,
    },
    {
      title: "Display Advertising",
      description: "Visual banner advertising across premium websites and networks",
      icon: Eye,
      color: "from-purple-500 to-purple-600",
      features: ["Banner Ads", "Rich Media", "Programmatic", "Retargeting"],
      href: "/digital-marketing/digital-advertising/display-advertising",
      popular: false,
    },
    {
      title: "Remarketing",
      description: "Re-engage visitors who didn't convert with strategic remarketing campaigns",
      icon: RefreshCw,
      color: "from-orange-500 to-orange-600",
      features: ["Pixel Setup", "Audience Creation", "Dynamic Ads", "Cross-Platform"],
      href: "/digital-marketing/digital-advertising/remarketing",
      popular: false,
    },
    {
      title: "E-commerce Advertising",
      description: "Specialized advertising strategies for online stores and product sales",
      icon: ShoppingCart,
      color: "from-indigo-500 to-indigo-600",
      features: ["Product Ads", "Shopping Campaigns", "Feed Optimization", "ROAS Focus"],
      href: "/digital-marketing/digital-advertising/ecommerce-advertising",
      popular: false,
    },
    {
      title: "Video Advertising",
      description: "Engaging video campaigns on YouTube, Facebook, and other video platforms",
      icon: Play,
      color: "from-red-500 to-red-600",
      features: ["YouTube Ads", "Video Creation", "Audience Targeting", "Performance Tracking"],
      href: "/digital-marketing/digital-advertising/video-advertising",
      popular: false,
    },
    {
      title: "Advertising Strategy",
      description: "Comprehensive advertising strategy development and campaign planning",
      icon: Lightbulb,
      color: "from-yellow-500 to-yellow-600",
      features: ["Strategy Planning", "Market Research", "Competitor Analysis", "Budget Planning"],
      href: "/digital-marketing/digital-advertising/advertising-strategy",
      popular: false,
    },
  ]

  const stats = [
    {
      number: "500%",
      label: "Average ROAS",
      description: "Return on ad spend across campaigns",
      icon: TrendingUp,
    },
    {
      number: "85%",
      label: "Keywords in Top 10",
      description: "Average keyword ranking improvement",
      icon: Target,
    },
    {
      number: "200+",
      label: "Successful Projects",
      description: "Completed advertising campaigns",
      icon: Users,
    },
    {
      number: "4.9/5",
      label: "Client Satisfaction",
      description: "Average client rating",
      icon: Star,
    },
  ]

  const benefits = [
    "Immediate traffic and visibility",
    "Precise audience targeting",
    "Measurable ROI tracking",
    "Budget control and optimization",
    "A/B testing capabilities",
    "Multi-platform management",
    "Real-time performance data",
    "Expert campaign optimization",
  ]

  const platforms = [
    { name: "Google Ads", logo: "🔍", description: "Search, Display, Shopping, YouTube" },
    { name: "Facebook", logo: "📘", description: "Facebook & Instagram advertising" },
    { name: "LinkedIn", logo: "💼", description: "Professional B2B targeting" },
    { name: "Microsoft Ads", logo: "🌐", description: "Bing & Yahoo networks" },
    { name: "TikTok", logo: "🎵", description: "Short-form video advertising" },
    { name: "Twitter", logo: "🐦", description: "Real-time engagement ads" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "E-commerce Store",
      content: "Our ROAS increased by 400% within the first 3 months. The team's expertise in digital advertising is unmatched.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=SJ",
    },
    {
      name: "Mike Chen",
      company: "SaaS Company",
      content: "Professional PPC management that actually delivers results. Our cost per acquisition dropped by 60%.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=MC",
    },
    {
      name: "Lisa Rodriguez",
      company: "Local Business",
      content: "The social media advertising campaigns brought us more qualified leads than we ever imagined possible.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=LR",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400/10 to-red-400/10 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 mb-8 shadow-lg animate-fade-in">
              <Megaphone className="mr-2 h-4 w-4" />
              Digital Advertising Services
              <Badge className="ml-2 bg-blue-600 text-white">Expert Management</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
              Drive Growth with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Strategic Digital Advertising
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Maximize your ROI with our comprehensive digital advertising services. From Google Ads to social media campaigns, 
              we create data-driven strategies that deliver measurable results and accelerate your business growth.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Free Advertising Audit
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
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
              Complete Digital Advertising Solutions
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              From strategy to execution, we handle every aspect of your digital advertising campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 z-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                    Popular
                  </Badge>
                )}
                
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start mb-6">
                    <div className="relative mr-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden`}
                      >
                        <service.icon className="h-7 w-7 relative z-10" />
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
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
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-200 transition-colors duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advertising Platforms We Master
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Expert management across all major digital advertising platforms
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{platform.logo}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-gray-600">{platform.description}</p>
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
              Why Choose Our Digital Advertising?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Benefits of working with our certified advertising experts
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
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Hear from businesses that have achieved remarkable growth with our advertising services
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
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
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
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse animation-delay-2000"></div>
        
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <Award className="mx-auto h-16 w-16 text-white mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Dominate Digital Advertising?
            </h2>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Get a free advertising audit and discover how we can improve your campaign performance, drive more qualified traffic, and grow your business with strategic digital advertising.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Advertising Audit
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
