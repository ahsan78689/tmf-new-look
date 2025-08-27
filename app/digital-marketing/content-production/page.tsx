import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PenTool, FileText, ShoppingCart, Search, Smartphone, Mail, Video, Globe, ArrowRight, CheckCircle, Star, TrendingUp, Users, Calendar, Clock, Target, Zap, Award, BookOpen, Edit3, Type, ImageIcon, Mic, Play, BarChart3, DollarSign, Heart, MessageSquare, Share2, Eye, ThumbsUp, Download, Lightbulb, Layers, Palette, Megaphone } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function ContentProductionPage() {
  const contentServices = [
    {
      name: "Website Content Writing",
      href: "/digital-marketing/content-production/website-content-writing",
      description: "Professional website copy that converts visitors into customers",
      icon: Globe,
      color: "from-blue-500 to-cyan-600",
      features: ["Landing Pages", "About Pages", "Service Pages", "Product Descriptions"],
      deliveryTime: "3-5 days",
      startingPrice: "$299",
    },
    {
      name: "Blog & Article Writing",
      href: "/digital-marketing/content-production/blog-article-writing",
      description: "Engaging blog posts and articles that drive traffic and engagement",
      icon: FileText,
      color: "from-green-500 to-emerald-600",
      features: ["SEO Optimized", "Research-Based", "Engaging Headlines", "Call-to-Actions"],
      deliveryTime: "2-3 days",
      startingPrice: "$149",
    },
    {
      name: "Product Copy Writing",
      href: "/digital-marketing/content-production/product-copy-writing",
      description: "Compelling product descriptions that boost sales and conversions",
      icon: ShoppingCart,
      color: "from-purple-500 to-violet-600",
      features: ["Benefit-Focused", "SEO Friendly", "Conversion Optimized", "Brand Aligned"],
      deliveryTime: "1-2 days",
      startingPrice: "$99",
    },
    {
      name: "E-commerce Content Writing",
      href: "/digital-marketing/content-production/ecommerce-content-writing",
      description: "Complete e-commerce content solutions for online stores",
      icon: DollarSign,
      color: "from-orange-500 to-red-600",
      features: ["Category Pages", "Product Catalogs", "Buying Guides", "FAQ Content"],
      deliveryTime: "5-7 days",
      startingPrice: "$499",
    },
    {
      name: "SEO Content Writing",
      href: "/digital-marketing/content-production/seo-content-writing",
      description: "Search-optimized content that ranks high and drives organic traffic",
      icon: Search,
      color: "from-indigo-500 to-blue-600",
      features: ["Keyword Research", "On-Page SEO", "Meta Descriptions", "Schema Markup"],
      deliveryTime: "3-4 days",
      startingPrice: "$199",
    },
    {
      name: "Social Media Content Writing",
      href: "/digital-marketing/content-production/social-media-content-writing",
      description: "Engaging social media content that builds communities and drives engagement",
      icon: Smartphone,
      color: "from-pink-500 to-rose-600",
      features: ["Platform-Specific", "Hashtag Strategy", "Visual Content", "Engagement Focus"],
      deliveryTime: "1-2 days",
      startingPrice: "$79",
    },
    {
      name: "Email Marketing Content Writing",
      href: "/digital-marketing/content-production/email-marketing-content-writing",
      description: "High-converting email campaigns that nurture leads and drive sales",
      icon: Mail,
      color: "from-teal-500 to-cyan-600",
      features: ["Subject Lines", "Personalization", "A/B Testing", "Automation Sequences"],
      deliveryTime: "2-3 days",
      startingPrice: "$129",
    },
    {
      name: "Multi-Media Production",
      href: "/digital-marketing/content-production/multi-media-production",
      description: "Video, audio, and visual content that captivates and converts",
      icon: Video,
      color: "from-yellow-500 to-orange-600",
      features: ["Video Scripts", "Podcast Content", "Infographics", "Interactive Media"],
      deliveryTime: "7-10 days",
      startingPrice: "$799",
    },
  ]

  const contentTypes = [
    {
      category: "Written Content",
      icon: Edit3,
      items: ["Blog Posts", "Articles", "Web Copy", "Product Descriptions", "Email Campaigns", "Social Posts"],
      color: "from-blue-500 to-cyan-600",
    },
    {
      category: "Visual Content",
      icon: ImageIcon,
      items: ["Infographics", "Social Graphics", "Presentations", "eBooks", "Whitepapers", "Case Studies"],
      color: "from-purple-500 to-violet-600",
    },
    {
      category: "Video Content",
      icon: Play,
      items: ["Explainer Videos", "Product Demos", "Testimonials", "Social Videos", "Webinars", "Tutorials"],
      color: "from-green-500 to-emerald-600",
    },
    {
      category: "Audio Content",
      icon: Mic,
      items: ["Podcasts", "Voice-overs", "Audio Ads", "Jingles", "Interviews", "Audiobooks"],
      color: "from-orange-500 to-red-600",
    },
  ]

  const contentProcess = [
    {
      step: "01",
      title: "Content Strategy",
      description: "We analyze your audience, competitors, and goals to create a comprehensive content strategy.",
      icon: Target,
      deliverables: ["Content Audit", "Competitor Analysis", "Content Calendar", "Strategy Document"],
    },
    {
      step: "02",
      title: "Content Creation",
      description: "Our expert writers and creators produce high-quality content aligned with your brand voice.",
      icon: PenTool,
      deliverables: ["Original Content", "SEO Optimization", "Brand Alignment", "Quality Assurance"],
    },
    {
      step: "03",
      title: "Content Optimization",
      description: "We optimize content for search engines, conversions, and user engagement.",
      icon: Zap,
      deliverables: ["SEO Optimization", "Conversion Testing", "Performance Tracking", "Continuous Improvement"],
    },
    {
      step: "04",
      title: "Content Distribution",
      description: "Strategic distribution across multiple channels to maximize reach and engagement.",
      icon: Share2,
      deliverables: ["Multi-Channel Publishing", "Social Promotion", "Email Distribution", "Performance Reports"],
    },
  ]

  const portfolioItems = [
    {
      title: "E-commerce Fashion Brand",
      category: "Product Copy & Blog Content",
      description: "Complete content overhaul resulting in 300% increase in organic traffic",
      image: "/placeholder.svg?height=300&width=400",
      results: ["300% traffic increase", "150% conversion boost", "50% more engagement"],
      contentTypes: ["Product Descriptions", "Blog Posts", "Category Pages"],
    },
    {
      title: "SaaS Technology Company",
      category: "Technical Content & Case Studies",
      description: "Technical content strategy that generated 200% more qualified leads",
      image: "/placeholder.svg?height=300&width=400",
      results: ["200% lead increase", "45% better quality", "60% more demos"],
      contentTypes: ["Technical Articles", "Case Studies", "Whitepapers"],
    },
    {
      title: "Local Restaurant Chain",
      category: "Social Media & Email Content",
      description: "Social and email content that increased customer retention by 180%",
      image: "/placeholder.svg?height=300&width=400",
      results: ["180% retention boost", "250% social growth", "90% email open rate"],
      contentTypes: ["Social Posts", "Email Campaigns", "Menu Descriptions"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "TechStart Solutions",
      role: "Marketing Director",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The content quality exceeded our expectations. Our blog traffic increased by 400% in just 3 months, and our conversion rates doubled. The team truly understands our industry and audience.",
      contentType: "Blog & SEO Content",
    },
    {
      name: "David Chen",
      company: "E-commerce Plus",
      role: "CEO",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Their product descriptions transformed our online store. Sales increased by 250% and our bounce rate dropped significantly. The copy is compelling and converts beautifully.",
      contentType: "Product Copy",
    },
    {
      name: "Maria Rodriguez",
      company: "Local Services Co.",
      role: "Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The social media content strategy brought us 300+ new customers. Our engagement rates are through the roof and our brand awareness has never been stronger.",
      contentType: "Social Media Content",
    },
  ]

  const stats = [
    { label: "Content Pieces Created", value: "10,000+", icon: FileText },
    { label: "Average Traffic Increase", value: "285%", icon: TrendingUp },
    { label: "Client Satisfaction Rate", value: "98%", icon: Star },
    { label: "Content Types Mastered", value: "50+", icon: Layers },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-transparent to-purple-600/5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-6 py-3 text-sm font-medium text-indigo-700 mb-8 animate-pulse shadow-lg">
                <PenTool className="mr-2 h-4 w-4" />
                Content That Converts - 10,000+ Pieces Created
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl">
                Content Production That{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Drives Results
                </span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-600 max-w-4xl mx-auto sm:text-2xl">
                From compelling website copy to engaging blog posts, we create content that not only captures attention
                but converts visitors into customers and builds lasting relationships with your audience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="flex items-center">
                        <span>Start Your Content Strategy</span>
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
                      className="relative border-2 border-indigo-200 hover:border-indigo-300 bg-white/90 backdrop-blur-sm hover:bg-indigo-50 text-gray-900 hover:text-indigo-700 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="flex items-center">
                        <div className="mr-3 p-1 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors">
                          <Eye className="h-4 w-4 text-indigo-600" />
                        </div>
                        <span>View Portfolio</span>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600 mx-auto">
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-indigo-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Content Strategy Includes:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Comprehensive Content Audit</div>
                        <div className="text-sm text-gray-600">Analysis of existing content and gaps</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Custom Content Calendar</div>
                        <div className="text-sm text-gray-600">Strategic planning for consistent publishing</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">SEO-Optimized Content</div>
                        <div className="text-sm text-gray-600">Content that ranks and drives organic traffic</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Multi-Channel Distribution</div>
                        <div className="text-sm text-gray-600">Content optimized for all your channels</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <Badge variant="outline" className="mb-6 text-indigo-700 border-indigo-200">
              Content Types
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Every Type of Content Your Business Needs
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              From written content to multimedia productions, we create everything you need to engage your audience
              across all channels.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {contentTypes.map((type, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${type.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
                <CardHeader className="relative pb-4">
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${type.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <type.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-4">
                    {type.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-3">
                    {type.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className="h-2 w-2 bg-indigo-600 rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Our Content Production Services
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Specialized content services tailored to your specific needs and business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contentServices.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:rotate-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
                <CardHeader className="relative pb-4">
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      From {service.startingPrice}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {service.deliveryTime}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-0">
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="group/button relative overflow-hidden">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white group-hover:scale-105 transition-all duration-300"
                    >
                      <Link href={service.href} className="flex items-center justify-center">
                        <span>Learn More</span>
                        <div className="ml-2 p-1 bg-white/20 rounded-full">
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

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <Badge variant="outline" className="mb-6 text-white border-white/20 bg-white/10 backdrop-blur-sm">
              Our Process
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              From Strategy to Success
            </h2>
            <p className="text-xl leading-8 text-gray-300">
              Our proven 4-step content production process ensures every piece of content serves your business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {contentProcess.map((step, index) => (
              <div key={index} className="relative group text-center">
                <div className="mb-8 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-10 w-10" />
                </div>
                <div className="text-6xl font-bold text-indigo-400 mb-4 opacity-50">{step.step}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                <div className="space-y-2">
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{deliverable}</span>
                    </div>
                  ))}
                </div>
                {index < contentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <Badge variant="outline" className="mb-6 text-indigo-700 border-indigo-200">
              Portfolio
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Content That Delivers Results
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              See how our content strategies have transformed businesses across different industries.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">{item.category}</Badge>
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-indigo-600 mb-4">Content Types:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.contentTypes.map((type, typeIndex) => (
                        <Badge key={typeIndex} variant="secondary" className="bg-indigo-100 text-indigo-800">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-4">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {item.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center p-4 bg-green-50 rounded-xl">
                          <div className="text-2xl font-bold text-green-600 mb-1">{result.split(" ")[0]}</div>
                          <div className="text-sm text-gray-700">{result.split(" ").slice(1).join(" ")}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              What Our Clients Say About Our Content
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Real feedback from businesses that have transformed their content strategy with us.
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
                    <Avatar className="h-16 w-16 ring-4 ring-indigo-100">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-lg font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{testimonial.name}</CardTitle>
                      <CardDescription className="text-base text-gray-600">{testimonial.role}</CardDescription>
                      <CardDescription className="text-sm text-indigo-600 font-medium">
                        {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 w-fit">
                    {testimonial.contentType}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic leading-relaxed text-lg">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container relative">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
                Ready to Create Content That{" "}
                <span className="text-yellow-300">Converts?</span>
              </h2>
              <p className="text-xl leading-8 text-indigo-100 mb-12 max-w-3xl mx-auto">
                Get a free content audit and discover exactly what type of content your business needs to achieve its
                goals. No obligations, just actionable insights.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">Free</div>
                    <div className="text-indigo-100">Content Audit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24-48h</div>
                    <div className="text-indigo-100">Turnaround</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="group relative overflow-hidden">
                    <Button
                      size="lg"
                      className="relative bg-white text-indigo-600 hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center">
                        <span>Get Free Content Audit</span>
                        <div className="ml-3 p-1 bg-indigo-100 rounded-full">
                          <ArrowRight className="h-5 w-5 text-indigo-600" />
                        </div>
                      </div>
                    </Button>
                  </div>

                  <div className="group relative overflow-hidden">
                    <Button
                      size="lg"
                      variant="outline"
                      className="relative border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-10 py-6 text-xl font-semibold rounded-2xl bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center">
                        <div className="mr-3 p-1 bg-white/20 rounded-full group-hover:bg-indigo-100 transition-colors">
                          <Eye className="h-5 w-5" />
                        </div>
                        <span>View Content Samples</span>
                      </div>
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-indigo-100 mt-6">
                  Join 1,000+ businesses that trust us with their content strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
