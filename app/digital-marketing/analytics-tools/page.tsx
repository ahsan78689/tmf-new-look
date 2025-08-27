import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Target, Eye, MousePointer, Users, Clock, DollarSign, ArrowRight, CheckCircle, Star, Zap, Award, LineChart, PieChart, Activity, Monitor, Smartphone, Globe, Search, ShoppingCart, Mail, Calendar, Filter, Download, Share2, AlertCircle, Lightbulb, Database, Settings, RefreshCw, Gauge, ChevronUp, ChevronDown, Play, Pause, RotateCcw, FileText, ImageIcon, Video, Layers } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function AnalyticsToolsPage() {
  const analyticsServices = [
    {
      name: "Conversion Rate Optimization",
      href: "/digital-marketing/analytics-tools/conversion-rate-optimization",
      description: "Optimize your website to convert more visitors into customers",
      icon: Target,
      color: "from-green-500 to-emerald-600",
      features: ["A/B Testing", "Heatmap Analysis", "User Journey Mapping", "Landing Page Optimization"],
      metrics: ["25-40% conversion increase", "15-30% revenue boost"],
      tools: ["Google Optimize", "Hotjar", "Crazy Egg", "Optimizely"],
    },
    {
      name: "Web Analytics",
      href: "/digital-marketing/analytics-tools/web-analytics",
      description: "Comprehensive website performance tracking and analysis",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      features: ["Traffic Analysis", "User Behavior", "Goal Tracking", "Custom Dashboards"],
      metrics: ["100% data accuracy", "Real-time insights"],
      tools: ["Google Analytics", "Adobe Analytics", "Mixpanel", "Segment"],
    },
    {
      name: "Data Visualization",
      href: "/digital-marketing/analytics-tools/data-visualization",
      description: "Transform complex data into actionable visual insights",
      icon: PieChart,
      color: "from-purple-500 to-violet-600",
      features: ["Interactive Dashboards", "Custom Reports", "Real-time Updates", "Multi-source Integration"],
      metrics: ["50% faster decisions", "90% stakeholder satisfaction"],
      tools: ["Tableau", "Power BI", "Google Data Studio", "Looker"],
    },
    {
      name: "Reporting & Analysis",
      href: "/digital-marketing/analytics-tools/reporting-analysis",
      description: "Comprehensive performance reports with actionable recommendations",
      icon: FileText,
      color: "from-orange-500 to-red-600",
      features: ["Automated Reports", "Performance Insights", "Competitive Analysis", "ROI Tracking"],
      metrics: ["Weekly/Monthly reports", "Custom KPI tracking"],
      tools: ["Custom Dashboards", "Automated Systems", "API Integrations", "Excel/Sheets"],
    },
  ]

  const analyticsMetrics = [
    {
      category: "Traffic Metrics",
      icon: Users,
      metrics: [
        { name: "Unique Visitors", description: "Individual users visiting your site", importance: "High" },
        { name: "Page Views", description: "Total pages viewed by all visitors", importance: "Medium" },
        { name: "Session Duration", description: "Average time spent on your site", importance: "High" },
        { name: "Bounce Rate", description: "Percentage of single-page sessions", importance: "High" },
      ],
      color: "from-blue-500 to-cyan-600",
    },
    {
      category: "Conversion Metrics",
      icon: Target,
      metrics: [
        { name: "Conversion Rate", description: "Percentage of visitors who convert", importance: "Critical" },
        { name: "Cost Per Conversion", description: "Average cost to acquire a conversion", importance: "High" },
        { name: "Revenue Per Visitor", description: "Average revenue generated per visitor", importance: "Critical" },
        { name: "Cart Abandonment", description: "Percentage of abandoned shopping carts", importance: "High" },
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      category: "Engagement Metrics",
      icon: Activity,
      metrics: [
        { name: "Click-Through Rate", description: "Percentage of users who click on links", importance: "High" },
        { name: "Social Shares", description: "Number of times content is shared", importance: "Medium" },
        { name: "Email Open Rate", description: "Percentage of emails opened", importance: "High" },
        { name: "Video Completion", description: "Percentage who watch full videos", importance: "Medium" },
      ],
      color: "from-purple-500 to-violet-600",
    },
    {
      category: "Technical Metrics",
      icon: Monitor,
      metrics: [
        { name: "Page Load Speed", description: "Time it takes for pages to load", importance: "Critical" },
        { name: "Mobile Performance", description: "Site performance on mobile devices", importance: "Critical" },
        { name: "Error Rate", description: "Percentage of pages with errors", importance: "High" },
        { name: "Uptime", description: "Percentage of time site is accessible", importance: "Critical" },
      ],
      color: "from-orange-500 to-red-600",
    },
  ]

  const dashboardFeatures = [
    {
      title: "Real-Time Data",
      description: "Monitor your website performance as it happens",
      icon: Activity,
      benefits: ["Instant alerts", "Live visitor tracking", "Real-time conversions", "Immediate insights"],
    },
    {
      title: "Custom KPIs",
      description: "Track the metrics that matter most to your business",
      icon: Target,
      benefits: ["Business-specific metrics", "Goal tracking", "Custom calculations", "Personalized views"],
    },
    {
      title: "Multi-Channel Integration",
      description: "Combine data from all your marketing channels",
      icon: Layers,
      benefits: ["Unified reporting", "Cross-channel attribution", "Complete customer journey", "Holistic view"],
    },
    {
      title: "Automated Insights",
      description: "AI-powered recommendations and anomaly detection",
      icon: Lightbulb,
      benefits: ["Smart alerts", "Trend identification", "Performance recommendations", "Predictive analytics"],
    },
  ]

  const caseStudies = [
    {
      client: "E-commerce Fashion Store",
      industry: "Retail",
      challenge: "Low conversion rates and high cart abandonment",
      solution: "Comprehensive CRO strategy with A/B testing and user behavior analysis",
      results: [
        { metric: "Conversion Rate", before: "2.1%", after: "3.8%", improvement: "+81%" },
        { metric: "Cart Abandonment", before: "68%", after: "45%", improvement: "-34%" },
        { metric: "Revenue", before: "$50K/month", after: "$89K/month", improvement: "+78%" },
        { metric: "AOV", before: "$85", after: "$112", improvement: "+32%" },
      ],
      timeframe: "6 months",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      client: "SaaS Technology Platform",
      industry: "Technology",
      challenge: "Poor user engagement and unclear conversion funnel",
      solution: "Advanced analytics setup with custom dashboards and user journey mapping",
      results: [
        { metric: "User Engagement", before: "35%", after: "67%", improvement: "+91%" },
        { metric: "Trial-to-Paid", before: "12%", after: "28%", improvement: "+133%" },
        { metric: "Churn Rate", before: "8%", after: "4.2%", improvement: "-48%" },
        { metric: "LTV", before: "$450", after: "$780", improvement: "+73%" },
      ],
      timeframe: "4 months",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      client: "Local Service Business",
      industry: "Services",
      challenge: "Limited visibility into marketing ROI and customer acquisition",
      solution: "Complete analytics overhaul with attribution modeling and ROI tracking",
      results: [
        { metric: "Marketing ROI", before: "Unknown", after: "4.2x", improvement: "New Insight" },
        { metric: "Lead Quality", before: "Poor", after: "Excellent", improvement: "+200%" },
        { metric: "Cost Per Lead", before: "$85", after: "$32", improvement: "-62%" },
        { metric: "Customer LTV", before: "$320", after: "$580", improvement: "+81%" },
      ],
      timeframe: "3 months",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const tools = [
    {
      category: "Analytics Platforms",
      tools: [
        { name: "Google Analytics 4", logo: "/placeholder.svg?height=40&width=40", description: "Comprehensive web analytics" },
        { name: "Adobe Analytics", logo: "/placeholder.svg?height=40&width=40", description: "Enterprise analytics solution" },
        { name: "Mixpanel", logo: "/placeholder.svg?height=40&width=40", description: "Product analytics platform" },
        { name: "Segment", logo: "/placeholder.svg?height=40&width=40", description: "Customer data platform" },
      ],
    },
    {
      category: "Visualization Tools",
      tools: [
        { name: "Tableau", logo: "/placeholder.svg?height=40&width=40", description: "Advanced data visualization" },
        { name: "Power BI", logo: "/placeholder.svg?height=40&width=40", description: "Microsoft business intelligence" },
        { name: "Google Data Studio", logo: "/placeholder.svg?height=40&width=40", description: "Free reporting tool" },
        { name: "Looker", logo: "/placeholder.svg?height=40&width=40", description: "Modern BI platform" },
      ],
    },
    {
      category: "Optimization Tools",
      tools: [
        { name: "Google Optimize", logo: "/placeholder.svg?height=40&width=40", description: "A/B testing platform" },
        { name: "Hotjar", logo: "/placeholder.svg?height=40&width=40", description: "Heatmaps and recordings" },
        { name: "Optimizely", logo: "/placeholder.svg?height=40&width=40", description: "Experimentation platform" },
        { name: "Crazy Egg", logo: "/placeholder.svg?height=40&width=40", description: "Website optimization" },
      ],
    },
  ]

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "TechFlow Solutions",
      role: "Marketing Director",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The analytics setup transformed how we make decisions. We now have clear visibility into our entire funnel and can optimize based on real data. Our conversion rates improved by 85% in just 4 months.",
      improvement: "85% conversion increase",
    },
    {
      name: "Robert Kim",
      company: "E-commerce Central",
      role: "CEO",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The CRO work was incredible. They identified issues we never knew existed and implemented solutions that doubled our revenue. The data visualization dashboards are a game-changer for our team.",
      improvement: "Revenue doubled",
    },
    {
      name: "Lisa Chen",
      company: "Growth Marketing Co.",
      role: "VP of Marketing",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Finally, we have a clear picture of our marketing ROI across all channels. The custom dashboards save us hours every week and the insights have helped us optimize our entire marketing strategy.",
      improvement: "5x marketing ROI",
    },
  ]

  const stats = [
    { label: "Average Conversion Increase", value: "67%", icon: TrendingUp },
    { label: "Data Accuracy Improvement", value: "95%", icon: Target },
    { label: "Reporting Time Saved", value: "80%", icon: Clock },
    { label: "Client Satisfaction Rate", value: "98%", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 via-transparent to-blue-600/5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-700 mb-8 animate-pulse shadow-lg">
                <BarChart3 className="mr-2 h-4 w-4" />
                Data-Driven Decisions - 95% Accuracy Guaranteed
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl">
                Analytics & Tools That{" "}
                <span className="bg-gradient-to-r from-slate-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Drive Growth
                </span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-600 max-w-4xl mx-auto sm:text-2xl">
                Transform your data into actionable insights with our comprehensive analytics solutions. From conversion
                optimization to advanced reporting, we help you make data-driven decisions that accelerate growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="flex items-center">
                        <span>Get Free Analytics Audit</span>
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
                      className="relative border-2 border-slate-200 hover:border-slate-300 bg-white/90 backdrop-blur-sm hover:bg-slate-50 text-gray-900 hover:text-slate-700 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="flex items-center">
                        <div className="mr-3 p-1 bg-slate-100 rounded-full group-hover:bg-slate-200 transition-colors">
                          <Play className="h-4 w-4 text-slate-600" />
                        </div>
                        <span>View Dashboard Demo</span>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-blue-100 text-slate-600 mx-auto">
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Analytics Dashboard Preview</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                      <div className="flex items-center">
                        <div className="p-2 bg-green-100 rounded-lg mr-3">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Conversion Rate</div>
                          <div className="text-sm text-gray-600">This month</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">4.8%</div>
                        <div className="text-sm text-green-600 flex items-center">
                          <ChevronUp className="h-4 w-4 mr-1" />
                          +23%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Website Traffic</div>
                          <div className="text-sm text-gray-600">This month</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">45.2K</div>
                        <div className="text-sm text-blue-600 flex items-center">
                          <ChevronUp className="h-4 w-4 mr-1" />
                          +18%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
                      <div className="flex items-center">
                        <div className="p-2 bg-purple-100 rounded-lg mr-3">
                          <DollarSign className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Revenue</div>
                          <div className="text-sm text-gray-600">This month</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">$89.5K</div>
                        <div className="text-sm text-purple-600 flex items-center">
                          <ChevronUp className="h-4 w-4 mr-1" />
                          +34%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Our Analytics & Optimization Services
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Comprehensive analytics solutions that turn your data into competitive advantages.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {analyticsServices.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
                <CardHeader className="relative pb-4">
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-slate-600 transition-colors mb-2">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-0">
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expected Results:</h4>
                      <div className="space-y-1">
                        {service.metrics.map((metric, metricIndex) => (
                          <Badge key={metricIndex} variant="secondary" className="mr-2 mb-1 bg-green-100 text-green-800">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tools Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="group/button relative overflow-hidden">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white group-hover:scale-105 transition-all duration-300"
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

      {/* Metrics Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <Badge variant="outline" className="mb-6 text-slate-700 border-slate-200">
              Key Metrics
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Metrics That Matter for Your Business
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Track the right metrics to make informed decisions and drive sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {analyticsMetrics.map((category, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
                <CardHeader className="relative pb-4">
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-slate-600 transition-colors mb-4">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative pt-0">
                  <div className="space-y-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 mb-1">{metric.name}</div>
                          <div className="text-sm text-gray-600">{metric.description}</div>
                        </div>
                        <Badge
                          variant={metric.importance === "Critical" ? "destructive" : metric.importance === "High" ? "default" : "secondary"}
                          className="ml-4"
                        >
                          {metric.importance}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Advanced Dashboard Features
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Powerful features that transform raw data into actionable business intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <CardHeader className="relative text-center pb-4">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-blue-100 text-slate-600 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-slate-600 transition-colors mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-0">
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <Badge variant="outline" className="mb-6 text-white border-white/20 bg-white/10 backdrop-blur-sm">
              Our Tools
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Industry-Leading Analytics Tools
            </h2>
            <p className="text-xl leading-8 text-gray-300">
              We use the best tools in the industry to deliver accurate insights and powerful analytics.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {tools.map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold text-white mb-8">{category.category}</h3>
                <div className="space-y-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors">
                      <Image
                        src={tool.logo || "/placeholder.svg"}
                        alt={tool.name}
                        width={40}
                        height={40}
                        className="rounded-lg mr-4"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-white">{tool.name}</div>
                        <div className="text-sm text-gray-300">{tool.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <Badge variant="outline" className="mb-6 text-slate-700 border-slate-200">
              Success Stories
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              See how our analytics and optimization strategies have transformed businesses across different industries.
            </p>
          </div>
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
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
                      <Badge className="absolute top-4 right-4 bg-slate-900/90 text-white">{study.timeframe}</Badge>
                    </div>
                  </div>
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{study.client}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg mb-4">{study.challenge}</p>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-600 mb-4">Results Achieved:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                            <div className="font-semibold text-gray-900 mb-1">{result.metric}</div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Before: {result.before}</span>
                              <span className="text-gray-600">After: {result.after}</span>
                            </div>
                            <div className="text-center mt-2">
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                {result.improvement}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              What Our Clients Say About Our Analytics
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Real feedback from businesses that have transformed their decision-making with our analytics solutions.
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
                    <Avatar className="h-16 w-16 ring-4 ring-slate-100">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-slate-600 to-blue-600 text-white text-lg font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{testimonial.name}</CardTitle>
                      <CardDescription className="text-base text-gray-600">{testimonial.role}</CardDescription>
                      <CardDescription className="text-sm text-slate-600 font-medium">
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
                    {testimonial.improvement}
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
      <section className="py-24 bg-gradient-to-br from-slate-600 via-gray-700 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container relative">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
                Ready to Make{" "}
                <span className="text-cyan-300">Data-Driven Decisions?</span>
              </h2>
              <p className="text-xl leading-8 text-slate-100 mb-12 max-w-3xl mx-auto">
                Get a free analytics audit and discover exactly what metrics you should be tracking to accelerate your
                business growth. No obligations, just actionable insights.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">Free</div>
                    <div className="text-slate-100">Analytics Audit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24-48h</div>
                    <div className="text-slate-100">Setup Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">95%</div>
                    <div className="text-slate-100">Data Accuracy</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="group relative overflow-hidden">
                    <Button
                      size="lg"
                      className="relative bg-white text-slate-600 hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center">
                        <span>Get Free Analytics Audit</span>
                        <div className="ml-3 p-1 bg-slate-100 rounded-full">
                          <ArrowRight className="h-5 w-5 text-slate-600" />
                        </div>
                      </div>
                    </Button>
                  </div>

                  <div className="group relative overflow-hidden">
                    <Button
                      size="lg"
                      variant="outline"
                      className="relative border-2 border-white text-white hover:bg-white hover:text-slate-600 px-10 py-6 text-xl font-semibold rounded-2xl bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center">
                        <div className="mr-3 p-1 bg-white/20 rounded-full group-hover:bg-slate-100 transition-colors">
                          <BarChart3 className="h-5 w-5" />
                        </div>
                        <span>View Dashboard Demo</span>
                      </div>
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-slate-100 mt-6">
                  Join 500+ businesses that make smarter decisions with our analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
