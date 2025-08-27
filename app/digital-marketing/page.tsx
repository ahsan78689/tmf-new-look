import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Megaphone,
  PenTool,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Star,
  CheckCircle,
  Quote,
  BarChart3,
  Play,
  Award,
  Zap,
  Globe,
  Smartphone,
  Mail,
  Calendar,
  Clock,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DigitalMarketingPage() {
  const services = [
    {
      category: "Organic Search",
      icon: Search,
      description: "Improve your search engine rankings and drive organic traffic with proven SEO strategies",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      services: [
        {
          name: "SEO Strategy",
          href: "/digital-marketing/organic-search/seo-strategy",
          description: "Comprehensive SEO planning and execution",
          icon: Target,
        },
        {
          name: "Keyword Research",
          href: "/digital-marketing/organic-search/keyword-research",
          description: "Find the right keywords for your business",
          icon: Search,
        },
        {
          name: "On-Page Optimization",
          href: "/digital-marketing/organic-search/on-page-optimization",
          description: "Optimize your website content and structure",
          icon: Globe,
        },
        {
          name: "Off-Page Optimization",
          href: "/digital-marketing/organic-search/off-page-optimization",
          description: "Build authority through link building",
          icon: TrendingUp,
        },
        {
          name: "Technical SEO",
          href: "/digital-marketing/organic-search/technical-seo",
          description: "Fix technical issues that impact rankings",
          icon: Zap,
        },
        {
          name: "Local SEO",
          href: "/digital-marketing/organic-search/local-seo",
          description: "Dominate local search results",
          icon: Globe,
        },
        {
          name: "eCommerce SEO",
          href: "/digital-marketing/organic-search/ecommerce-seo",
          description: "SEO for online stores",
          icon: DollarSign,
        },
        {
          name: "SEO Audits",
          href: "/digital-marketing/organic-search/seo-audits",
          description: "Comprehensive website analysis",
          icon: BarChart3,
        },
      ],
    },
    {
      category: "Digital Advertising",
      icon: Megaphone,
      description: "Targeted advertising campaigns that deliver measurable results and maximize ROI",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      services: [
        {
          name: "PPC Management",
          href: "/digital-marketing/digital-advertising/ppc-management",
          description: "Professional pay-per-click campaign management",
          icon: Target,
        },
        {
          name: "Google Ads",
          href: "/digital-marketing/digital-advertising/google-ads",
          description: "Search and display advertising on Google",
          icon: Search,
        },
        {
          name: "Social Media Advertising",
          href: "/digital-marketing/digital-advertising/social-media-advertising",
          description: "Facebook, Instagram, LinkedIn ads",
          icon: Smartphone,
        },
        {
          name: "Display Advertising",
          href: "/digital-marketing/digital-advertising/display-advertising",
          description: "Banner and visual advertising campaigns",
          icon: Globe,
        },
        {
          name: "Remarketing",
          href: "/digital-marketing/digital-advertising/remarketing",
          description: "Re-engage previous website visitors",
          icon: TrendingUp,
        },
        {
          name: "Ecommerce Advertising",
          href: "/digital-marketing/digital-advertising/ecommerce-advertising",
          description: "Shopping ads and product promotion",
          icon: DollarSign,
        },
        {
          name: "Video Advertising",
          href: "/digital-marketing/digital-advertising/video-advertising",
          description: "YouTube and video platform advertising",
          icon: Play,
        },
        {
          name: "Advertising Strategy",
          href: "/digital-marketing/digital-advertising/advertising-strategy",
          description: "Strategic planning for advertising campaigns",
          icon: BarChart3,
        },
      ],
    },
    {
      category: "Content Production",
      icon: PenTool,
      description: "High-quality content that engages your audience and converts visitors into customers",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      services: [
        {
          name: "Website Content Writing",
          href: "/digital-marketing/content-production/website-content-writing",
          description: "Professional website copywriting",
          icon: Globe,
        },
        {
          name: "Blog / Article Writing",
          href: "/digital-marketing/content-production/blog-article-writing",
          description: "Engaging blog posts and articles",
          icon: PenTool,
        },
        {
          name: "Product Copy Writing",
          href: "/digital-marketing/content-production/product-copy-writing",
          description: "Compelling product descriptions",
          icon: DollarSign,
        },
        {
          name: "eCommerce Content Writing",
          href: "/digital-marketing/content-production/ecommerce-content-writing",
          description: "Content for online stores",
          icon: DollarSign,
        },
        {
          name: "SEO Content Writing",
          href: "/digital-marketing/content-production/seo-content-writing",
          description: "Search-optimized content creation",
          icon: Search,
        },
        {
          name: "Social Media Content Writing",
          href: "/digital-marketing/content-production/social-media-content-writing",
          description: "Social media posts and campaigns",
          icon: Smartphone,
        },
        {
          name: "Email Marketing Content Writing",
          href: "/digital-marketing/content-production/email-marketing-content-writing",
          description: "Email campaigns and newsletters",
          icon: Mail,
        },
        {
          name: "Multi Media Production",
          href: "/digital-marketing/content-production/multi-media-production",
          description: "Video, audio, and visual content",
          icon: Play,
        },
      ],
    },
    {
      category: "Analytics & Tools",
      icon: BarChart3,
      description: "Data-driven insights and optimization tools to maximize your marketing performance",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      services: [
        {
          name: "Conversion Rate Optimization",
          href: "/digital-marketing/analytics-tools/conversion-rate-optimization",
          description: "Optimize your website for better conversions",
          icon: TrendingUp,
        },
        {
          name: "Web Analytics",
          href: "/digital-marketing/analytics-tools/web-analytics",
          description: "Track and analyze website performance",
          icon: BarChart3,
        },
        {
          name: "Data Visualization",
          href: "/digital-marketing/analytics-tools/data-visualization",
          description: "Transform data into actionable insights",
          icon: BarChart3,
        },
        {
          name: "Reporting & Analysis",
          href: "/digital-marketing/analytics-tools/reporting-analysis",
          description: "Comprehensive performance reporting",
          icon: BarChart3,
        },
      ],
    },
  ]

  const stats = [
    { icon: TrendingUp, label: "Average ROI Increase", value: "250%", color: "from-green-500 to-emerald-600" },
    { icon: Target, label: "Campaign Success Rate", value: "94%", color: "from-blue-500 to-cyan-600" },
    { icon: Users, label: "Clients Served", value: "500+", color: "from-purple-500 to-violet-600" },
    { icon: Star, label: "Client Satisfaction", value: "4.9/5", color: "from-orange-500 to-red-600" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The Meta Future transformed our digital presence completely. Our organic traffic increased by 300% in just 6 months, and our conversion rates doubled. Their strategic approach and attention to detail is unmatched.",
      results: "300% traffic increase",
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "Marketing Director",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Their SEO strategy helped us rank #1 for our main keywords. The ROI on our digital marketing investment has been incredible - over 400% return. They truly understand e-commerce marketing.",
      results: "400% ROI increase",
    },
    {
      name: "Emily Rodriguez",
      company: "Local Services Co.",
      role: "Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Local SEO services brought us 50+ new customers per month. Our Google My Business profile now gets 10x more views and calls. The team is responsive and delivers real results.",
      results: "50+ new customers/month",
    },
  ]

  const caseStudies = [
    {
      client: "E-commerce Fashion Brand",
      industry: "Fashion & Retail",
      challenge: "Low organic visibility and poor conversion rates despite high traffic",
      solution: "Comprehensive SEO strategy + PPC campaigns + conversion optimization",
      results: [
        "400% increase in organic traffic",
        "250% boost in online sales",
        "60% reduction in cost per acquisition",
        "150% improvement in conversion rate",
      ],
      timeframe: "8 months",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      client: "B2B Software Company",
      industry: "Technology",
      challenge: "Limited lead generation and brand awareness in competitive market",
      solution: "Content marketing + LinkedIn advertising + marketing automation",
      results: [
        "300% increase in qualified leads",
        "150% growth in brand mentions",
        "45% improvement in lead quality",
        "200% boost in demo requests",
      ],
      timeframe: "6 months",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      client: "Local Restaurant Chain",
      industry: "Food & Hospitality",
      challenge: "Poor local search visibility and declining foot traffic",
      solution: "Local SEO + Google Ads + reputation management + social media",
      results: [
        "500% increase in online reservations",
        "200% boost in foot traffic",
        "4.8/5 average review rating",
        "300% growth in social media followers",
      ],
      timeframe: "4 months",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your current digital presence, competitors, and market opportunities to create a strategic foundation.",
      icon: Search,
      duration: "1-2 weeks",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Based on our analysis, we develop a comprehensive digital marketing strategy tailored to your business goals.",
      icon: Target,
      duration: "1 week",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Our expert team executes the strategy across all channels, ensuring consistent messaging and optimal performance.",
      icon: Zap,
      duration: "Ongoing",
    },
    {
      step: "04",
      title: "Optimization & Reporting",
      description:
        "We continuously monitor, optimize, and report on performance to maximize your ROI and achieve your goals.",
      icon: BarChart3,
      duration: "Monthly",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-6 py-3 text-sm font-medium text-purple-700 mb-8 animate-pulse shadow-lg">
                <Award className="mr-2 h-4 w-4" />
                #1 Digital Marketing Agency - 500+ Success Stories
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl">
                Drive Growth with Strategic{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Digital Marketing
                </span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-600 max-w-4xl mx-auto sm:text-2xl">
                From SEO and PPC to content marketing and social media advertising, we provide comprehensive digital
                marketing solutions that deliver measurable results and accelerate your business growth.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="flex items-center">
                        <span>Get Free Strategy Session</span>
                        <div className="ml-3 p-1 bg-white/20 rounded-full">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Button>
                  </div>

                  <div className="group relative overflow-hidden">
                    <Button
                      size="lg"
                      variant="outline"
                      className="relative border-2 border-purple-200 hover:border-purple-300 bg-white/90 backdrop-blur-sm hover:bg-purple-50 text-gray-900 hover:text-purple-700 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="flex items-center">
                        <div className="mr-3 p-1 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                          <Play className="h-4 w-4 text-purple-600" />
                        </div>
                        <span>View Success Stories</span>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="mr-2 p-1 bg-green-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Free Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 p-1 bg-green-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">No Long-term Contracts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 p-1 bg-green-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Proven Results</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-80 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-purple-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Comprehensive digital audit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Custom strategy roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Competitive analysis report</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Growth opportunity identification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50"></div>
        <div className="container relative">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-700 border-purple-200">
              Our Track Record
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Numbers That Speak for Themselves</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${stat.color} text-white group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}
                >
                  <stat.icon className="h-10 w-10" />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 sm:py-24 lg:py-28 relative ${categoryIndex % 2 === 1 ? "bg-gray-50" : ""}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-30`}></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center mb-20">
              <div
                className={`mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${category.color} text-white shadow-xl`}
              >
                <category.icon className="h-10 w-10" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                {category.category}
              </h2>
              <p className="text-xl leading-8 text-gray-600 sm:text-2xl">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="group relative overflow-hidden border-0 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:rotate-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <CardHeader className="relative pb-4">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative pt-0">
                    <div className="group/button relative overflow-hidden">
                      <Button
                        asChild
                        variant="ghost"
                        className="w-full justify-start p-0 h-auto text-purple-600 hover:text-purple-700 hover:bg-transparent font-semibold group-hover:translate-x-2 transition-all duration-300"
                      >
                        <Link href={service.href} className="flex items-center">
                          <span>Learn More</span>
                          <div className="ml-2 p-1 bg-purple-100 rounded-full group-hover/button:bg-purple-200 transition-colors">
                            <ArrowRight className="h-3 w-3" />
                          </div>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <Badge variant="outline" className="mb-6 text-white border-white/20 bg-white/10 backdrop-blur-sm">
              Our Process
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">How We Drive Your Success</h2>
            <p className="text-xl leading-8 text-gray-300">
              Our proven 4-step process ensures maximum ROI and sustainable growth for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="text-6xl font-bold text-purple-400 mb-4 opacity-50">{step.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                    <Clock className="h-3 w-3 mr-1" />
                    {step.duration}
                  </Badge>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <Badge variant="outline" className="mb-6 text-purple-700 border-purple-200">
              Success Stories
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Real Results for Real Businesses
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              See how we've helped businesses like yours achieve remarkable growth through strategic digital marketing.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.client}
                      width={500}
                      height={300}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">{study.industry}</Badge>
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{study.client}</h3>
                    <Badge variant="outline" className="text-purple-700 border-purple-200">
                      {study.timeframe} project
                    </Badge>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-2">Challenge:</h4>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">Solution:</h4>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-4">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center p-4 bg-green-50 rounded-xl">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-900">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="group/cta relative overflow-hidden inline-block">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <Link href="/digital-marketing/case-studies" className="flex items-center">
                          <span>View Full Case Study</span>
                          <div className="ml-2 p-1 bg-white/20 rounded-full">
                            <ArrowRight className="h-3 w-3" />
                          </div>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">What Our Clients Say</h2>
            <p className="text-xl leading-8 text-gray-600">
              Don't just take our word for it - hear from businesses that have transformed their digital presence with
              us.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="h-16 w-16 ring-4 ring-purple-100">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white text-lg font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{testimonial.name}</CardTitle>
                      <CardDescription className="text-base text-gray-600">{testimonial.role}</CardDescription>
                      <CardDescription className="text-sm text-purple-600 font-medium">
                        {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit">
                    {testimonial.results}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <Quote className="h-8 w-8 text-purple-600 mb-4 opacity-50" />
                  <p className="text-gray-700 italic leading-relaxed text-lg">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container relative">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 text-white shadow-xl">
                <BookOpen className="h-10 w-10" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Master Digital Marketing
              </h2>
              <p className="text-xl leading-8 text-purple-100 mb-12">
                Access our comprehensive library of digital marketing resources, guides, case studies, and articles to
                stay ahead of the curve and master the latest strategies that drive real business results.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">100+</div>
                    <div className="text-purple-100">Free Resources</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-purple-100">Case Studies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">Weekly</div>
                    <div className="text-purple-100">New Content</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="group relative overflow-hidden">
                    <Button
                      asChild
                      size="lg"
                      className="relative bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Link href="/digital-marketing/learn" className="flex items-center">
                        <span>Explore Resources</span>
                        <div className="ml-3 p-1 bg-purple-100 rounded-full">
                          <ArrowRight className="h-4 w-4 text-purple-600" />
                        </div>
                      </Link>
                    </Button>
                  </div>

                  <div className="group relative overflow-hidden">
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="relative border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-6 text-lg font-semibold rounded-2xl bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Link href="/digital-marketing/learn/case-studies" className="flex items-center">
                        <div className="mr-3 p-1 bg-white/20 rounded-full group-hover:bg-purple-100 transition-colors">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <span>View Case Studies</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50"></div>
        <div className="container relative">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-8">
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Digital Presence?
                </span>
              </h2>
              <p className="text-xl leading-8 text-gray-600 mb-12 max-w-3xl mx-auto">
                Get a free comprehensive digital marketing audit and discover exactly how we can help you achieve your
                business goals. No obligations, just actionable insights.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <div className="p-1 bg-green-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Free 30-min consultation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <div className="p-1 bg-green-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Custom strategy roadmap</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <div className="p-1 bg-green-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Competitive analysis</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="flex items-center">
                        <span>Get Free Audit</span>
                        <div className="ml-3 p-1 bg-white/20 rounded-full">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </Button>
                  </div>

                  <div className="group relative overflow-hidden">
                    <Button
                      size="lg"
                      variant="outline"
                      className="relative border-2 border-purple-200 hover:border-purple-300 bg-white hover:bg-purple-50 text-gray-900 hover:text-purple-700 px-10 py-6 text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="flex items-center">
                        <div className="mr-3 p-1 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                          <Calendar className="h-5 w-5 text-purple-600" />
                        </div>
                        <span>Schedule Consultation</span>
                      </div>
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-6">
                  Join 500+ businesses that have transformed their digital presence with us
                </p>
              </div>

              <div className="lg:w-80 bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-purple-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Free Audit Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">SEO performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Conversion rate assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Social media audit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Growth recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
