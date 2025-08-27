import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, TrendingUp, CheckCircle, ArrowRight, Users, DollarSign, Star, Award, Target, Eye, Video, Zap, BarChart3, Clock, Camera } from 'lucide-react'
import Link from "next/link"

export default function VideoAdvertisingPage() {
  const videoTypes = [
    {
      name: "YouTube Advertising",
      description: "Reach billions of viewers with targeted video campaigns on YouTube",
      icon: Play,
      color: "from-red-500 to-red-600",
      features: ["TrueView ads", "Bumper ads", "Discovery ads", "Masthead campaigns"],
      reach: "2.7B users",
    },
    {
      name: "Social Video Ads",
      description: "Engaging video content across Facebook, Instagram, and other social platforms",
      icon: Video,
      color: "from-blue-500 to-blue-600",
      features: ["Feed videos", "Story ads", "Reels advertising", "Live streaming"],
      reach: "4B+ users",
    },
    {
      name: "Connected TV Ads",
      description: "Premium video advertising on streaming platforms and smart TVs",
      icon: Camera,
      color: "from-purple-500 to-purple-600",
      features: ["OTT platforms", "Streaming services", "Smart TV apps", "Premium inventory"],
      reach: "200M+ households",
    },
    {
      name: "In-Stream Video",
      description: "Pre-roll, mid-roll, and post-roll video ads across premium websites",
      icon: Target,
      color: "from-green-500 to-green-600",
      features: ["Pre-roll ads", "Mid-roll placement", "Outstream video", "Native video"],
      reach: "1B+ websites",
    },
  ]

  const services = [
    {
      title: "Video Production",
      description: "Professional video creation and production services",
      icon: Camera,
      features: ["Script writing", "Video shooting", "Post-production", "Animation"],
    },
    {
      title: "Campaign Strategy",
      description: "Strategic video advertising campaign planning and execution",
      icon: Target,
      features: ["Audience research", "Platform selection", "Budget planning", "Creative strategy"],
    },
    {
      title: "Video Optimization",
      description: "Optimize video content for maximum engagement and conversions",
      icon: Zap,
      features: ["A/B testing", "Thumbnail optimization", "Call-to-action", "Landing pages"],
    },
    {
      title: "Audience Targeting",
      description: "Precise audience targeting for video advertising campaigns",
      icon: Users,
      features: ["Demographics", "Interests", "Behaviors", "Custom audiences"],
    },
    {
      title: "Performance Tracking",
      description: "Comprehensive video advertising analytics and reporting",
      icon: BarChart3,
      features: ["View tracking", "Engagement metrics", "Conversion analysis", "ROI reporting"],
    },
    {
      title: "Multi-Platform Management",
      description: "Manage video campaigns across all major advertising platforms",
      icon: Eye,
      features: ["YouTube", "Facebook", "Instagram", "Connected TV"],
    },
  ]

  const stats = [
    {
      value: "300%",
      label: "Higher Engagement",
      description: "Than static ads",
      icon: Eye,
    },
    {
      value: "80%",
      label: "Brand Recall",
      description: "Improvement with video",
      icon: TrendingUp,
    },
    {
      value: "200%",
      label: "Conversion Boost",
      description: "Video vs text ads",
      icon: DollarSign,
    },
    {
      value: "5B+",
      label: "Video Views",
      description: "Generated monthly",
      icon: Play,
    },
  ]

  const platforms = [
    { name: "YouTube", feature: "TrueView & Discovery Ads", reach: "2.7B users", avgCPV: "$0.10-0.30" },
    { name: "Facebook", feature: "In-Feed & Story Video Ads", reach: "2.9B users", avgCPV: "$0.05-0.25" },
    { name: "Instagram", feature: "Feed, Story & Reels Video", reach: "2B users", avgCPV: "$0.20-0.50" },
    { name: "LinkedIn", feature: "Sponsored Video Content", reach: "900M users", avgCPV: "$0.50-2.00" },
    { name: "TikTok", feature: "In-Feed & Brand Takeover", reach: "1B users", avgCPV: "$0.10-0.30" },
    { name: "Connected TV", feature: "OTT & Streaming Platforms", reach: "200M households", avgCPV: "$15-40 CPM" },
  ]

  const benefits = [
    "Higher engagement rates than static ads",
    "Improved brand awareness and recall",
    "Better storytelling capabilities",
    "Cross-platform video distribution",
    "Advanced audience targeting options",
    "Detailed video performance analytics",
    "Professional video production services",
    "Multi-format video optimization",
  ]

  const testimonials = [
    {
      name: "Alex Rivera",
      company: "Tech Startup",
      content: "Our video advertising campaigns generated 500% more engagement and increased brand awareness by 300%. The ROI has been incredible.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=AR",
    },
    {
      name: "Sophie Chen",
      company: "E-commerce Brand",
      content: "The video production and advertising strategy helped us achieve 250% more conversions with compelling video content.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=SC",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-red-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-red-700 mb-8 shadow-lg">
              <Play className="mr-2 h-4 w-4" />
              Video Advertising
              <Badge className="ml-2 bg-red-600 text-white">High Engagement</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Video Ads That{" "}
              <span className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Captivate & Convert
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Engage your audience with compelling video advertising campaigns across YouTube, social media, and connected TV. 
              Our expert team creates and manages video ads that drive brand awareness and conversions.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Video Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-red-200 hover:bg-red-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Video Portfolio
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
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-purple-600 text-white shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-500">
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

      {/* Video Types Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50/30 relative">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Video Advertising Formats
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Professional video advertising across all major platforms and formats
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {videoTypes.map((type, index) => (
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
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                        {type.name}
                      </CardTitle>
                      <Badge className="mt-2 bg-blue-100 text-blue-800 border-blue-200">
                        {type.reach}
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
                        <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
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
              Our Video Advertising Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive video advertising solutions from production to performance
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-purple-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Video Advertising Platforms
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Strategic video advertising across all major platforms and networks
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{platform.feature}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Reach:</span>
                      <span className="text-sm font-medium">{platform.reach}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Avg CPV:</span>
                      <span className="text-sm font-medium text-red-600">{platform.avgCPV}</span>
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
              Why Choose Our Video Advertising?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Benefits of working with our video advertising experts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              See how our video advertising drives engagement and conversions
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
      <section className="py-20 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Create Compelling Video Ads?
            </h2>
            <p className="mt-4 text-lg leading-8 text-red-100">
              Let's create video advertising campaigns that captivate your audience and drive results
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Award className="mr-2 h-5 w-5" />
                Start Video Campaign
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
