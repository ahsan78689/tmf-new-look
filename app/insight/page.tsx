import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, Globe, ArrowRight, Download, Eye } from "lucide-react"

export default function InsightPage() {
  const insights = [
    {
      title: "Digital Marketing Trends 2024",
      description: "Comprehensive analysis of emerging digital marketing trends and their impact on business growth.",
      category: "Marketing",
      type: "Report",
      downloadCount: "2.3k",
      readTime: "15 min",
      icon: TrendingUp,
      featured: true,
    },
    {
      title: "E-commerce Conversion Optimization",
      description: "Data-driven strategies to improve your online store's conversion rates and revenue.",
      category: "E-commerce",
      type: "Guide",
      downloadCount: "1.8k",
      readTime: "12 min",
      icon: BarChart3,
      featured: false,
    },
    {
      title: "Social Media ROI Calculator",
      description: "Interactive tool to measure and optimize your social media marketing return on investment.",
      category: "Social Media",
      type: "Tool",
      downloadCount: "3.1k",
      readTime: "5 min",
      icon: Users,
      featured: false,
    },
    {
      title: "SEO Performance Benchmark",
      description: "Industry benchmarks and best practices for search engine optimization in 2024.",
      category: "SEO",
      type: "Benchmark",
      downloadCount: "2.7k",
      readTime: "10 min",
      icon: Globe,
      featured: false,
    },
    {
      title: "Website Performance Audit Checklist",
      description: "Complete checklist to audit and improve your website's performance and user experience.",
      category: "Web Development",
      type: "Checklist",
      downloadCount: "1.9k",
      readTime: "8 min",
      icon: BarChart3,
      featured: false,
    },
    {
      title: "Content Marketing Strategy Template",
      description: "Ready-to-use template for creating effective content marketing strategies that drive results.",
      category: "Content Marketing",
      type: "Template",
      downloadCount: "2.5k",
      readTime: "6 min",
      icon: TrendingUp,
      featured: false,
    },
  ]

  const categories = [
    { name: "All", count: 24 },
    { name: "Marketing", count: 8 },
    { name: "SEO", count: 6 },
    { name: "E-commerce", count: 4 },
    { name: "Social Media", count: 3 },
    { name: "Web Development", count: 3 },
  ]

  const stats = [
    { label: "Resources Available", value: "50+", icon: Download },
    { label: "Total Downloads", value: "25k+", icon: TrendingUp },
    { label: "Monthly Visitors", value: "15k+", icon: Users },
    { label: "Industry Reports", value: "12", icon: BarChart3 },
  ]

  const featuredInsight = insights.find((insight) => insight.featured)
  const regularInsights = insights.filter((insight) => !insight.featured)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 mb-6">
              <BarChart3 className="mr-2 h-4 w-4" />
              Business Insights
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Data-Driven Insights for{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Business Growth
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Access our collection of industry reports, research studies, tools, and resources to make informed
              decisions and drive your business forward. All insights are based on real data and proven strategies.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-indigo-200 hover:bg-indigo-50 bg-transparent">
                Subscribe for Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-indigo-600 hover:bg-indigo-700" : ""}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      {featuredInsight && (
        <section className="py-12 sm:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Featured Resource</h2>
            </div>
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary">{featuredInsight.category}</Badge>
                    <Badge variant="outline">{featuredInsight.type}</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{featuredInsight.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredInsight.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      {featuredInsight.downloadCount} downloads
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {featuredInsight.readTime}
                    </div>
                  </div>
                  <Button className="w-fit bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resource
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <featuredInsight.icon className="h-24 w-24 text-indigo-600 mx-auto mb-4" />
                    <p className="text-indigo-700 font-medium">Premium Resource</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Insights Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">All Resources</h2>
            <p className="mt-4 text-lg text-gray-600">Explore our complete library of business insights and tools</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {regularInsights.map((insight, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {insight.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {insight.type}
                      </Badge>
                    </div>
                    <insight.icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{insight.title}</CardTitle>
                  <CardDescription className="text-sm">{insight.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {insight.downloadCount}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {insight.readTime}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Download className="mr-2 h-3 w-3" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Get Latest Insights
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-indigo-100">
              Subscribe to receive new reports, tools, and insights delivered directly to your inbox
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20"
              />
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
