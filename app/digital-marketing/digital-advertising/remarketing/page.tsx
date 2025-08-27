import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, TrendingUp, CheckCircle, ArrowRight, Users, DollarSign, Star, Award, Target, Eye, ShoppingCart, Zap, BarChart3, Clock } from 'lucide-react'
import Link from "next/link"

export default function RemarketingPage() {
  const remarketingTypes = [
    {
      name: "Website Remarketing",
      description: "Re-engage visitors who browsed your website but didn't convert",
      icon: Eye,
      color: "from-blue-500 to-blue-600",
      features: ["Pixel tracking", "Page-based audiences", "Behavior targeting", "Custom messaging"],
      conversionRate: "25%",
    },
    {
      name: "Shopping Remarketing",
      description: "Target users who viewed specific products or abandoned carts",
      icon: ShoppingCart,
      color: "from-green-500 to-green-600",
      features: ["Product-specific ads", "Dynamic catalogs", "Cart abandonment", "Price updates"],
      conversionRate: "35%",
    },
    {
      name: "Video Remarketing",
      description: "Re-target users who interacted with your YouTube videos",
      icon: Target,
      color: "from-red-500 to-red-600",
      features: ["Video engagement", "Channel subscribers", "View duration", "Action targeting"],
      conversionRate: "20%",
    },
    {
      name: "Email Remarketing",
      description: "Target users based on email engagement and customer data",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
      features: ["Customer match", "Email lists", "Lifecycle targeting", "Personalization"],
      conversionRate: "40%",
    },
  ]

  const services = [
    {
      title: "Pixel Implementation",
      description: "Professional tracking pixel setup and configuration",
      icon: Target,
      features: ["Code installation", "Event tracking", "Conversion setup", "Testing & validation"],
    },
    {
      title: "Audience Segmentation",
      description: "Strategic audience creation based on user behavior",
      icon: Users,
      features: ["Behavior analysis", "Custom audiences", "Lookalike creation", "Exclusion lists"],
    },
    {
      title: "Dynamic Ad Creation",
      description: "Personalized ads that adapt to user preferences",
      icon: RefreshCw,
      features: ["Product catalogs", "Dynamic content", "Personalization", "A/B testing"],
    },
    {
      title: "Campaign Optimization",
      description: "Continuous optimization for maximum performance",
      icon: BarChart3,
      features: ["Bid adjustments", "Frequency capping", "Timing optimization", "Creative rotation"],
    },
    {
      title: "Cross-Platform Tracking",
      description: "Unified tracking across all devices and platforms",
      icon: Clock,
      features: ["Cross-device", "Multi-platform", "Attribution modeling", "Journey mapping"],
    },
    {
      title: "Performance Analytics",
      description: "Detailed reporting and insights for optimization",
      icon: TrendingUp,
      features: ["Conversion tracking", "ROI analysis", "Audience insights", "Custom reports"],
    },
  ]

  const stats = [
    {
      value: "76%",
      label: "Higher Conversion",
      description: "Than standard display ads",
      icon: TrendingUp,
    },
    {
      value: "3x",
      label: "Better CTR",
      description: "Compared to prospecting",
      icon: Eye,
    },
    {
      value: "50%",
      label: "Lower CPA",
      description: "Cost per acquisition",
      icon: DollarSign,
    },
    {
      value: "90%",
      label: "Reach Rate",
      description: "Of website visitors",
      icon: Users,
    },
  ]

  const platforms = [
    { name: "Google Ads", feature: "Display & Search Remarketing", reach: "90%" },
    { name: "Facebook", feature: "Custom Audiences & Lookalikes", reach: "2.9B" },
    { name: "Instagram", feature: "Visual Remarketing Campaigns", reach: "2B" },
    { name: "LinkedIn", feature: "Professional Remarketing", reach: "900M" },
    { name: "YouTube", feature: "Video Remarketing", reach: "2.7B" },
    { name: "Twitter", feature: "Tailored Audiences", reach: "450M" },
  ]

  const benefits = [
    "Higher conversion rates than cold traffic",
    "Cost-effective advertising approach",
    "Personalized messaging capabilities",
    "Cross-device and cross-platform tracking",
    "Advanced audience segmentation",
    "Dynamic product remarketing",
    "Frequency capping and optimization",
    "Detailed performance analytics",
  ]

  const testimonials = [
    {
      name: "Jessica Park",
      company: "E-commerce Store",
      content: "Our remarketing campaigns increased conversions by 300% and reduced our cost per acquisition by 60%. Amazing results!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=JP",
    },
    {
      name: "David Thompson",
      company: "SaaS Platform",
      content: "The remarketing strategy helped us re-engage 70% of our website visitors and significantly improved our sales funnel.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=DT",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 mb-8 shadow-lg">
              <RefreshCw className="mr-2 h-4 w-4" />
              Remarketing Campaigns
              <Badge className="ml-2 bg-blue-600 text-white">High Converting</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Re-engage Visitors with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
                Strategic Remarketing
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Turn missed opportunities into conversions with our advanced remarketing campaigns. 
              Re-engage visitors who didn't convert and guide them back to complete their purchase.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Remarketing Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-200 hover:bg-blue-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Case Studies
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
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 text-white shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-500">
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

      {/* Remarketing Types Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Remarketing Campaign Types
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Strategic remarketing across all major platforms and user behaviors
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {remarketingTypes.map((type, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start mb-6">
                    <div className="relative mr-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <type.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {type.name}
                      </CardTitle>
                      <Badge className="mt-2 bg-green-100 text-green-800 border-green-200">
                        {type.conversionRate} higher conversion
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
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
              Our Remarketing Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive remarketing solutions for maximum conversion optimization
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
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

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Remarketing Platforms
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Strategic remarketing across all major advertising platforms
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{platform.feature}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Reach:</span>
                    <span className="text-lg font-bold text-blue-600">{platform.reach}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Remarketing?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Benefits of working with our remarketing experts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              See how our remarketing campaigns drive conversions and ROI
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
      <section className="py-20 bg-gradient-to-br from-blue-600 via-green-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Re-engage Your Visitors?
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Start remarketing campaigns that convert missed opportunities into sales
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Award className="mr-2 h-5 w-5" />
                Start Remarketing Campaign
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
