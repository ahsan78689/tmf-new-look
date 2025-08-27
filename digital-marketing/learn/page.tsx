import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, TrendingUp, Users, Calendar, ArrowRight, Clock } from "lucide-react"

export default function DigitalMarketingLearnPage() {
  const featuredArticles = [
    {
      title: "Complete Guide to SEO in 2024",
      excerpt: "Everything you need to know about modern SEO strategies and best practices",
      category: "SEO",
      readTime: "15 min read",
      date: "Dec 15, 2024",
      featured: true,
    },
    {
      title: "PPC Campaign Optimization Strategies",
      excerpt: "Advanced techniques to improve your PPC campaign performance and ROI",
      category: "PPC",
      readTime: "12 min read",
      date: "Dec 12, 2024",
      featured: true,
    },
    {
      title: "Content Marketing That Converts",
      excerpt: "How to create content that engages your audience and drives conversions",
      category: "Content Marketing",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      featured: true,
    },
  ]

  const articles = [
    {
      title: "Local SEO Best Practices for Small Businesses",
      excerpt: "Dominate local search results with these proven local SEO strategies",
      category: "SEO",
      readTime: "8 min read",
      date: "Dec 8, 2024",
    },
    {
      title: "Social Media Advertising Trends 2024",
      excerpt: "Latest trends and strategies for social media advertising success",
      category: "Social Media",
      readTime: "6 min read",
      date: "Dec 5, 2024",
    },
    {
      title: "Email Marketing Automation Guide",
      excerpt: "Set up automated email campaigns that nurture leads and drive sales",
      category: "Email Marketing",
      readTime: "12 min read",
      date: "Dec 3, 2024",
    },
    {
      title: "Google Analytics 4: Complete Setup Guide",
      excerpt: "Master GA4 with this comprehensive setup and configuration guide",
      category: "Analytics",
      readTime: "15 min read",
      date: "Nov 30, 2024",
    },
    {
      title: "Conversion Rate Optimization Tactics",
      excerpt: "Proven tactics to improve your website's conversion rates",
      category: "CRO",
      readTime: "9 min read",
      date: "Nov 28, 2024",
    },
    {
      title: "Video Marketing Strategy for 2024",
      excerpt: "How to leverage video content for maximum marketing impact",
      category: "Video Marketing",
      readTime: "11 min read",
      date: "Nov 25, 2024",
    },
  ]

  const categories = [
    { name: "SEO", count: 24, color: "bg-green-100 text-green-800" },
    { name: "PPC", count: 18, color: "bg-blue-100 text-blue-800" },
    { name: "Content Marketing", count: 15, color: "bg-purple-100 text-purple-800" },
    { name: "Social Media", count: 12, color: "bg-pink-100 text-pink-800" },
    { name: "Email Marketing", count: 10, color: "bg-yellow-100 text-yellow-800" },
    { name: "Analytics", count: 8, color: "bg-indigo-100 text-indigo-800" },
  ]

  const resources = [
    {
      title: "SEO Checklist 2024",
      description: "Complete checklist for optimizing your website for search engines",
      type: "Checklist",
    },
    {
      title: "PPC Campaign Template",
      description: "Ready-to-use template for planning your PPC campaigns",
      type: "Template",
    },
    {
      title: "Content Calendar Template",
      description: "Organize your content marketing with this comprehensive calendar",
      type: "Template",
    },
    {
      title: "Digital Marketing Glossary",
      description: "Essential terms and definitions for digital marketers",
      type: "Guide",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 mb-6">
              <BookOpen className="mr-2 h-4 w-4" />
              Digital Marketing Resources
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Learn Digital Marketing{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                From Experts
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay ahead of the curve with our comprehensive library of digital marketing guides, tutorials, and
              industry insights. Learn from our experts and grow your marketing skills.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Browse All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600">Articles & Guides</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">Weekly</div>
              <div className="text-sm text-gray-600">New Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Articles</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Our most popular and comprehensive guides</p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-purple-600">{article.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-purple-600 cursor-pointer">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Browse by Category</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Find articles organized by digital marketing topics</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <Badge className={`${category.color} mb-3`}>{category.name}</Badge>
                  <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                  <div className="text-sm text-gray-600">Articles</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Articles</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Latest insights and tips from our digital marketing experts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-purple-600 cursor-pointer">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Free Resources</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Download our free templates, checklists, and guides</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit bg-green-600">{resource.type}</Badge>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay Updated</h2>
            <p className="mt-4 text-lg leading-8 text-purple-100">
              Get the latest digital marketing insights delivered to your inbox weekly
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <div className="flex-1 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20"
                />
              </div>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
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
