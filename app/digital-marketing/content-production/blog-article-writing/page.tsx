import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { BookOpen, PenTool, Search, CheckCircle, ArrowRight, FileText, Users, Target, Zap, Award, TrendingUp, Calendar, Lightbulb, Clock, Eye } from 'lucide-react'
import Link from "next/link"

export default function BlogArticleWritingPage() {
  const blogPackages = [
    {
      name: "Starter",
      price: "$149",
      period: "per article",
      description: "Perfect for small businesses starting their content journey",
      features: [
        "800-1200 words",
        "Basic SEO optimization",
        "1 revision included",
        "Stock image suggestions",
        "Social media snippets"
      ],
      popular: false,
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "Professional",
      price: "$249",
      period: "per article",
      description: "Comprehensive articles for established businesses",
      features: [
        "1500-2000 words",
        "Advanced SEO optimization",
        "2 revisions included",
        "Custom graphics included",
        "Meta descriptions",
        "Internal linking strategy"
      ],
      popular: true,
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Premium",
      price: "$399",
      period: "per article",
      description: "In-depth thought leadership content",
      features: [
        "2500+ words",
        "Expert interviews",
        "Original research",
        "Custom infographics",
        "Distribution strategy",
        "Performance tracking"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ]

  const contentCategories = [
    {
      category: "Educational Content",
      icon: Lightbulb,
      description: "How-to guides, tutorials, and educational resources",
      examples: ["Step-by-step tutorials", "Best practices guides", "Industry insights", "Tips and tricks"],
      readTime: "5-8 min",
      engagement: "High"
    },
    {
      category: "Thought Leadership",
      icon: Award,
      description: "Expert opinions and industry analysis",
      examples: ["Industry predictions", "Expert interviews", "Opinion pieces", "Trend analysis"],
      readTime: "8-12 min",
      engagement: "Very High"
    },
    {
      category: "Company Updates",
      icon: Users,
      description: "News, announcements, and behind-the-scenes content",
      examples: ["Product launches", "Team spotlights", "Company milestones", "Event coverage"],
      readTime: "3-5 min",
      engagement: "Medium"
    },
    {
      category: "Case Studies",
      icon: Target,
      description: "Success stories and detailed project breakdowns",
      examples: ["Client success stories", "Project case studies", "Before/after analysis", "ROI demonstrations"],
      readTime: "6-10 min",
      engagement: "High"
    }
  ]

  const writingStats = [
    { metric: "Average Read Time", value: "4.2 min", change: "+15%" },
    { metric: "Engagement Rate", value: "68%", change: "+23%" },
    { metric: "Social Shares", value: "1.2K", change: "+45%" },
    { metric: "Organic Traffic", value: "+180%", change: "+12%" }
  ]

  const contentCalendar = [
    { week: "Week 1", topics: ["Industry Trends", "How-to Guide"], status: "Published" },
    { week: "Week 2", topics: ["Case Study", "Expert Interview"], status: "In Review" },
    { week: "Week 3", topics: ["Product Update", "Behind Scenes"], status: "Writing" },
    { week: "Week 4", topics: ["Thought Leadership", "Tutorial"], status: "Planning" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dynamic Elements */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 lg:py-32">
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
        
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 mb-8">
              <BookOpen className="mr-2 h-4 w-4" />
              Blog & Article Writing Experts
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Stories That{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Spark Engagement
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto">
              Create compelling blog content that educates, engages, and converts your audience 
              into loyal customers through strategic storytelling and expert insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                Start Content Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-200 hover:bg-emerald-50">
                View Writing Portfolio
              </Button>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {writingStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.metric}</div>
                  <div className="text-xs text-emerald-600 font-semibold">{stat.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Content Package
            </h2>
            <p className="text-lg text-gray-600">
              Flexible options to match your content needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPackages.map((pkg, index) => (
              <Card key={index} className={`relative border-0 shadow-xl ${pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''} hover:shadow-2xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">{pkg.period}</span>
                  </div>
                  <CardDescription className="mt-2">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 transition-opacity`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Categories with Tabs */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Content That Resonates
            </h2>
            <p className="text-lg text-gray-600">
              Explore our specialized content categories designed for maximum impact
            </p>
          </div>

          <Tabs defaultValue="educational" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="educational">Educational</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="casestudies">Case Studies</TabsTrigger>
            </TabsList>
            
            {contentCategories.map((category, index) => (
              <TabsContent key={index} value={category.category.toLowerCase().replace(' ', '')}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
                        <category.icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl">{category.category}</CardTitle>
                        <CardDescription className="text-lg mt-1">{category.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Avg. Read Time</div>
                        <div className="font-semibold">{category.readTime}</div>
                        <Badge className="mt-1 bg-emerald-100 text-emerald-700">{category.engagement} Engagement</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="p-4 bg-gray-50 rounded-lg text-center">
                          <div className="font-medium text-gray-900">{example}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Content Calendar Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Strategic Content Planning
            </h2>
            <p className="text-lg text-gray-600">
              See how we organize and deliver consistent, high-quality content
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Sample Content Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentCalendar.map((week, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="font-semibold text-gray-900">{week.week}</div>
                      <Separator orientation="vertical" className="h-6" />
                      <div className="flex space-x-2">
                        {week.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="secondary">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                    <Badge 
                      className={`${
                        week.status === 'Published' ? 'bg-green-100 text-green-700' :
                        week.status === 'In Review' ? 'bg-yellow-100 text-yellow-700' :
                        week.status === 'Writing' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {week.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Benefits */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Blog Writing?
            </h2>
            <p className="text-lg text-gray-600">
              Measurable results that grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Increased Traffic", description: "Average 180% boost in organic traffic within 6 months", color: "text-green-600" },
              { icon: Users, title: "Better Engagement", description: "68% higher engagement rates compared to industry average", color: "text-blue-600" },
              { icon: Target, title: "Lead Generation", description: "Convert 23% more visitors into qualified leads", color: "text-purple-600" },
              { icon: Search, title: "SEO Optimized", description: "Rank higher with content optimized for search engines", color: "text-orange-600" },
              { icon: Clock, title: "Consistent Publishing", description: "Never miss a deadline with our reliable content schedule", color: "text-teal-600" },
              { icon: Award, title: "Expert Writers", description: "Industry specialists with proven track records", color: "text-red-600" }
            ].map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full bg-gray-100 ${benefit.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Social Proof */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Content Journey?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join 500+ businesses that trust us with their content marketing success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Get Content Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/digital-marketing/content-production">Explore All Services</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-emerald-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Free content audit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">No long-term contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">100% satisfaction guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
