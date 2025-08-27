import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, TrendingUp, CheckCircle, ArrowRight, Users, DollarSign, Star, Award, Target, Eye, BarChart3, Zap, Clock, Brain, Search, PieChart } from 'lucide-react'
import Link from "next/link"

export default function AdvertisingStrategyPage() {
  const strategyServices = [
    {
      name: "Market Research & Analysis",
      description: "Comprehensive market research to understand your competitive landscape",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      features: ["Competitor analysis", "Market trends", "Audience insights", "Opportunity identification"],
      duration: "1-2 weeks",
    },
    {
      name: "Audience Strategy",
      description: "Detailed audience research and segmentation for targeted advertising",
      icon: Users,
      color: "from-green-500 to-green-600",
      features: ["Persona development", "Behavioral analysis", "Demographic research", "Psychographic profiling"],
      duration: "1 week",
    },
    {
      name: "Channel Strategy",
      description: "Strategic platform selection and budget allocation across channels",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      features: ["Platform evaluation", "Budget allocation", "Channel optimization", "Cross-platform synergy"],
      duration: "1 week",
    },
    {
      name: "Creative Strategy",
      description: "Develop compelling creative concepts and messaging frameworks",
      icon: Lightbulb,
      color: "from-orange-500 to-orange-600",
      features: ["Message development", "Creative concepts", "Brand positioning", "Content strategy"],
      duration: "2 weeks",
    },
  ]

  const strategyProcess = [
    {
      step: "1",
      title: "Discovery & Research",
      description: "Deep dive into your business, market, and competition",
      icon: Search,
      deliverables: ["Market analysis", "Competitor audit", "SWOT analysis", "Opportunity map"],
    },
    {
      step: "2",
      title: "Audience Development",
      description: "Create detailed audience personas and targeting strategies",
      icon: Users,
      deliverables: ["Audience personas", "Targeting matrix", "Customer journey", "Segmentation plan"],
    },
    {
      step: "3",
      title: "Strategy Formulation",
      description: "Develop comprehensive advertising strategy and roadmap",
      icon: Brain,
      deliverables: ["Strategy document", "Channel plan", "Budget allocation", "Timeline"],
    },
    {
      step: "4",
      title: "Implementation Plan",
      description: "Create detailed execution plan with KPIs and success metrics",
      icon: Target,
      deliverables: ["Implementation guide", "KPI framework", "Success metrics", "Optimization plan"],
    },
  ]

  const services = [
    {
      title: "Competitive Analysis",
      description: "Analyze competitor strategies and identify market opportunities",
      icon: Eye,
      features: ["Competitor research", "Ad analysis", "Positioning study", "Gap identification"],
    },
    {
      title: "Budget Planning",
      description: "Strategic budget allocation across channels and campaigns",
      icon: DollarSign,
      features: ["Budget optimization", "ROI forecasting", "Channel allocation", "Performance modeling"],
    },
    {
      title: "Campaign Architecture",
      description: "Design optimal campaign structure for maximum performance",
      icon: BarChart3,
      features: ["Campaign hierarchy", "Targeting structure", "Bidding strategy", "Optimization framework"],
    },
    {
      title: "Performance Framework",
      description: "Establish KPIs and measurement systems for success tracking",
      icon: TrendingUp,
      features: ["KPI definition", "Tracking setup", "Reporting structure", "Success metrics"],
    },
    {
      title: "Creative Direction",
      description: "Develop creative guidelines and messaging strategies",
      icon: Lightbulb,
      features: ["Brand guidelines", "Message hierarchy", "Creative concepts", "Content strategy"],
    },
    {
      title: "Optimization Strategy",
      description: "Continuous improvement and optimization methodologies",
      icon: Zap,
      features: ["Testing framework", "Optimization process", "Performance analysis", "Scaling strategies"],
    },
  ]

  const stats = [
    {
      value: "300%",
      label: "Strategy Impact",
      description: "Average performance improvement",
      icon: TrendingUp,
    },
    {
      value: "85%",
      label: "Success Rate",
      description: "Strategies meeting goals",
      icon: Target,
    },
    {
      value: "50+",
      label: "Industries Served",
      description: "Across diverse sectors",
      icon: Users,
    },
    {
      value: "24/7",
      label: "Strategic Support",
      description: "Ongoing optimization",
      icon: Clock,
    },
  ]

  const benefits = [
    "Data-driven strategic approach",
    "Comprehensive market analysis",
    "Optimized budget allocation",
    "Clear performance metrics",
    "Scalable campaign architecture",
    "Competitive advantage insights",
    "Risk mitigation strategies",
    "Long-term growth planning",
  ]

  const testimonials = [
    {
      name: "Maria Gonzalez",
      company: "SaaS Platform",
      content: "The advertising strategy completely transformed our approach. We saw 400% improvement in campaign performance within 6 months.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=MG",
    },
    {
      name: "James Wilson",
      company: "E-commerce Brand",
      content: "Strategic planning helped us optimize our ad spend and achieve 250% better ROAS across all channels. Exceptional work!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=JW",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-yellow-700 mb-8 shadow-lg">
              <Lightbulb className="mr-2 h-4 w-4" />
              Advertising Strategy
              <Badge className="ml-2 bg-yellow-600 text-white">Strategic Planning</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Strategic Advertising That{" "}
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Drives Growth
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Develop comprehensive advertising strategies that align with your business goals. Our strategic approach 
              combines market research, audience insights, and competitive analysis to create winning campaigns.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Strategic Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-yellow-200 hover:bg-yellow-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Strategy Examples
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
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-600 to-orange-600 text-white shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-500">
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

      {/* Strategy Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50/30 relative">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Strategic Advertising Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive strategy development for advertising success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {strategyServices.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start mb-6">
                    <div className="relative mr-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <service.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                        {service.name}
                      </CardTitle>
                      <Badge className="mt-2 bg-orange-100 text-orange-800 border-orange-200">
                        {service.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Strategic Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              A proven methodology for developing winning advertising strategies
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {strategyProcess.map((item, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-600 to-orange-600 text-white shadow-lg">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <div className="text-sm font-bold text-yellow-600 mb-2">Step {item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {item.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{deliverable}</span>
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
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Strategy Development Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive strategic services for advertising success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Strategic Approach?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Benefits of working with our advertising strategy experts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CheckCircle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              See how our strategic approach drives advertising success
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
      <section className="py-20 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Develop Your Strategy?
            </h2>
            <p className="mt-4 text-lg leading-8 text-yellow-100">
              Let's create a comprehensive advertising strategy that drives real business growth
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-white text-yellow-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Award className="mr-2 h-5 w-5" />
                Get Strategic Consultation
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
