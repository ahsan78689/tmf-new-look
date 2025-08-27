import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, TrendingUp, CheckCircle, ArrowRight, Users, DollarSign, Star, Award, Target, Eye, Package, Zap, BarChart3, Clock, CreditCard } from 'lucide-react'
import Link from "next/link"

export default function EcommerceAdvertisingPage() {
  const adTypes = [
    {
      name: "Shopping Campaigns",
      description: "Showcase your products directly in Google search results with rich product information",
      icon: ShoppingCart,
      color: "from-blue-500 to-blue-600",
      features: ["Product listings", "Price comparison", "Merchant Center", "Feed optimization"],
      avgROAS: "4.2x",
    },
    {
      name: "Dynamic Product Ads",
      description: "Automatically promote your entire product catalog with personalized ads",
      icon: Package,
      color: "from-green-500 to-green-600",
      features: ["Catalog sync", "Dynamic templates", "Cross-selling", "Inventory updates"],
      avgROAS: "5.1x",
    },
    {
      name: "Social Commerce",
      description: "Sell directly through social media platforms with integrated shopping features",
      icon: Users,
      color: "from-pink-500 to-pink-600",
      features: ["Instagram Shopping", "Facebook Shop", "Social checkout", "Influencer tags"],
      avgROAS: "3.8x",
    },
    {
      name: "Marketplace Advertising",
      description: "Promote your products on Amazon, eBay, and other major marketplaces",
      icon: Target,
      color: "from-orange-500 to-orange-600",
      features: ["Amazon PPC", "eBay Promoted", "Marketplace optimization", "Competitor analysis"],
      avgROAS: "6.3x",
    },
  ]

  const services = [
    {
      title: "Product Feed Optimization",
      description: "Optimize your product data feeds for maximum visibility and performance",
      icon: Package,
      features: ["Feed structure", "Product titles", "Descriptions", "Category mapping"],
    },
    {
      title: "Shopping Campaign Management",
      description: "Professional management of Google Shopping and Microsoft Shopping campaigns",
      icon: ShoppingCart,
      features: ["Campaign setup", "Bid optimization", "Negative keywords", "Performance tracking"],
    },
    {
      title: "Dynamic Remarketing",
      description: "Re-engage visitors with personalized product ads based on browsing behavior",
      icon: Eye,
      features: ["Behavioral targeting", "Product recommendations", "Cart abandonment", "Cross-selling"],
    },
    {
      title: "Social Commerce Setup",
      description: "Set up and optimize social media shopping features and catalogs",
      icon: Users,
      features: ["Catalog creation", "Product tagging", "Shop setup", "Social integration"],
    },
    {
      title: "Marketplace Optimization",
      description: "Optimize your presence and advertising on major e-commerce marketplaces",
      icon: Target,
      features: ["Listing optimization", "PPC management", "Review management", "Competitor analysis"],
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive tracking and reporting for e-commerce advertising ROI",
      icon: BarChart3,
      features: ["Revenue tracking", "ROAS analysis", "Attribution modeling", "Custom dashboards"],
    },
  ]

  const stats = [
    {
      value: "450%",
      label: "Average ROAS",
      description: "Return on ad spend",
      icon: DollarSign,
    },
    {
      value: "85%",
      label: "Conversion Rate",
      description: "Improvement in conversions",
      icon: TrendingUp,
    },
    {
      value: "60%",
      label: "Lower CPA",
      description: "Cost per acquisition",
      icon: CreditCard,
    },
    {
      value: "24/7",
      label: "Campaign Monitoring",
      description: "Continuous optimization",
      icon: Clock,
    },
  ]

  const platforms = [
    { name: "Google Shopping", feature: "Product Listings & Shopping Ads", commission: "Free clicks" },
    { name: "Facebook Shop", feature: "Social Commerce & Instagram Shopping", commission: "5% selling fee" },
    { name: "Amazon PPC", feature: "Sponsored Products & Brands", commission: "Variable CPC" },
    { name: "Microsoft Shopping", feature: "Bing Shopping Campaigns", commission: "Lower competition" },
    { name: "eBay Promoted", feature: "Promoted Listings & Ads", commission: "2-12% ad rate" },
    { name: "Pinterest Shopping", feature: "Product Rich Pins & Shopping Ads", commission: "Variable CPC" },
  ]

  const benefits = [
    "Higher conversion rates for product searches",
    "Visual product showcase with pricing",
    "Automated inventory and price updates",
    "Cross-platform product promotion",
    "Advanced audience targeting for shoppers",
    "Dynamic remarketing for cart abandoners",
    "Comprehensive e-commerce analytics",
    "Multi-marketplace advertising management",
  ]

  const testimonials = [
    {
      name: "Rachel Green",
      company: "Fashion E-commerce",
      content: "Our e-commerce advertising campaigns increased online sales by 400% and our ROAS improved to 6.2x within 3 months.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=RG",
    },
    {
      name: "Mark Johnson",
      company: "Electronics Store",
      content: "The shopping campaigns and marketplace optimization helped us dominate our product categories with 300% more visibility.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=MJ",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400/10 to-orange-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 mb-8 shadow-lg">
              <ShoppingCart className="mr-2 h-4 w-4" />
              E-commerce Advertising
              <Badge className="ml-2 bg-blue-600 text-white">Sales Focused</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              E-commerce Ads That{" "}
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
                Drive Sales
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Specialized advertising strategies for online stores and product sales. From Google Shopping to marketplace advertising, 
              we help e-commerce businesses maximize their revenue and reach more customers.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Boost E-commerce Sales
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

      {/* Ad Types Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              E-commerce Advertising Solutions
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Specialized advertising strategies designed for online retail success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {adTypes.map((type, index) => (
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
                        {type.avgROAS} avg ROAS
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
              Our E-commerce Advertising Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive e-commerce advertising solutions for maximum sales growth
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
              E-commerce Advertising Platforms
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Strategic advertising across all major e-commerce and marketplace platforms
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{platform.feature}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Cost:</span>
                    <span className="text-sm font-medium text-blue-600">{platform.commission}</span>
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
              Why Choose Our E-commerce Advertising?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Benefits of working with our e-commerce advertising specialists
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
              See how our e-commerce advertising drives sales and revenue growth
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
      <section className="py-20 bg-gradient-to-br from-blue-600 via-green-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Boost Your E-commerce Sales?
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Let's create e-commerce advertising campaigns that drive revenue and growth
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Award className="mr-2 h-5 w-5" />
                Start E-commerce Campaign
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
