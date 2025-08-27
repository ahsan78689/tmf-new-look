import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, TrendingUp, CheckCircle, ArrowRight, Users, DollarSign, Star, Award, Monitor, Smartphone, Tablet, Globe, Target, BarChart3 } from 'lucide-react'
import Link from "next/link"

export default function DisplayAdvertisingPage() {
  const adFormats = [
    {
      name: "Banner Ads",
      description: "Traditional display banners across premium websites and networks",
      icon: Monitor,
      color: "from-blue-500 to-blue-600",
      features: ["Standard sizes", "Responsive design", "Rich media", "Animation support"],
      sizes: ["728x90", "300x250", "320x50", "970x250"],
    },
    {
      name: "Rich Media Ads",
      description: "Interactive and engaging multimedia advertising experiences",
      icon: Smartphone,
      color: "from-purple-500 to-purple-600",
      features: ["Video integration", "Interactive elements", "Expandable formats", "HTML5 support"],
      sizes: ["Custom", "Expandable", "Floating", "Interstitial"],
    },
    {
      name: "Native Ads",
      description: "Seamlessly integrated ads that match the content format",
      icon: Tablet,
      color: "from-green-500 to-green-600",
      features: ["Content matching", "Non-intrusive", "High engagement", "Platform specific"],
      sizes: ["In-feed", "Content", "Recommendation", "Promoted"],
    },
    {
      name: "Programmatic Display",
      description: "Automated ad buying across premium inventory sources",
      icon: Globe,
      color: "from-orange-500 to-orange-600",
      features: ["Real-time bidding", "Audience targeting", "Inventory access", "Optimization"],
      sizes: ["All formats", "Cross-device", "Premium", "Private deals"],
    },
  ]

  const services = [
    {
      title: "Creative Design & Development",
      description: "Professional ad creative design that captures attention and drives action",
      icon: Eye,
      features: ["Visual design", "Animation", "A/B testing", "Brand compliance"],
    },
    {
      title: "Audience Targeting",
      description: "Precise audience targeting for maximum campaign effectiveness",
      icon: Target,
      features: ["Demographics", "Interests", "Behaviors", "Lookalike audiences"],
    },
    {
      title: "Campaign Management",
      description: "Full-service campaign setup, monitoring, and optimization",
      icon: BarChart3,
      features: ["Campaign setup", "Bid optimization", "Budget management", "Performance tracking"],
    },
    {
      title: "Programmatic Buying",
      description: "Automated ad buying for efficient inventory acquisition",
      icon: Users,
      features: ["Real-time bidding", "Private marketplaces", "Deal negotiation", "Inventory access"],
    },
    {
      title: "Performance Analytics",
      description: "Detailed analytics and reporting for continuous improvement",
      icon: TrendingUp,
      features: ["Viewability tracking", "Brand safety", "Attribution modeling", "Custom reports"],
    },
    {
      title: "Retargeting Campaigns",
      description: "Re-engage visitors with strategic display retargeting",
      icon: DollarSign,
      features: ["Pixel implementation", "Audience segmentation", "Dynamic ads", "Cross-device tracking"],
    },
  ]

  const stats = [
    {
      value: "300%",
      label: "Brand Awareness",
      description: "Average increase in brand recall",
      icon: Eye,
    },
    {
      value: "2.5M+",
      label: "Impressions",
      description: "Monthly ad impressions",
      icon: Users,
    },
    {
      value: "65%",
      label: "Viewability Rate",
      description: "Above industry average",
      icon: TrendingUp,
    },
    {
      value: "24/7",
      label: "Campaign Monitoring",
      description: "Continuous optimization",
      icon: Monitor,
    },
  ]

  const networks = [
    { name: "Google Display Network", reach: "90%", sites: "2M+" },
    { name: "Facebook Audience Network", reach: "2.9B", sites: "Premium" },
    { name: "Amazon DSP", reach: "Premium", sites: "E-commerce" },
    { name: "Microsoft Advertising", reach: "500M", sites: "Professional" },
    { name: "Twitter Ads", reach: "450M", sites: "Real-time" },
    { name: "LinkedIn Display", reach: "900M", sites: "B2B Focus" },
  ]

  const benefits = [
    "Wide reach across premium websites",
    "Advanced audience targeting options",
    "Brand awareness and visibility",
    "Cost-effective advertising solution",
    "Real-time campaign optimization",
    "Detailed performance analytics",
    "Cross-device campaign tracking",
    "Professional creative development",
  ]

  const testimonials = [
    {
      name: "Michael Chen",
      company: "E-commerce Brand",
      content: "Our display advertising campaigns increased brand awareness by 400% and drove significant traffic to our website.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=MC",
    },
    {
      name: "Sarah Williams",
      company: "SaaS Company",
      content: "The programmatic display campaigns delivered exceptional results with a 250% increase in qualified leads.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=SW",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-orange-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 mb-8 shadow-lg">
              <Eye className="mr-2 h-4 w-4" />
              Display Advertising
              <Badge className="ml-2 bg-blue-600 text-white">Premium Networks</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Visual Display Ads That{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Build Brand Awareness
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Reach your target audience across premium websites with compelling display advertising campaigns. 
              Our expert team creates visually stunning ads that drive brand awareness and conversions.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Display Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-200 hover:bg-blue-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Portfolio
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

      {/* Ad Formats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Display Ad Formats We Create
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Professional display advertising across all major formats and devices
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {adFormats.map((format, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start mb-6">
                    <div className="relative mr-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${format.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <format.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {format.name}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {format.sizes.map((size, sizeIndex) => (
                          <Badge key={sizeIndex} variant="secondary" className="text-xs">
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {format.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3">
                    {format.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
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
              Our Display Advertising Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive display advertising solutions for maximum brand impact
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
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

      {/* Networks Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Premium Ad Networks
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Access to premium inventory across major advertising networks
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {networks.map((network, index) => (
              <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{network.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Reach:</span>
                      <span className="text-sm font-medium">{network.reach}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Sites:</span>
                      <span className="text-sm font-medium">{network.sites}</span>
                    </div>
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
              Why Choose Our Display Advertising?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Benefits of working with our display advertising experts
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
              See how our display advertising drives brand awareness and results
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
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Build Brand Awareness?
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Let's create display advertising campaigns that capture attention and drive results
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Award className="mr-2 h-5 w-5" />
                Start Display Campaign
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
