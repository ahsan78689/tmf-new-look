import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Palette, BarChart3, Users, Calendar, ArrowRight, Clock, TrendingUp } from "lucide-react"

export default function TechnologyResourcesPage() {
  const featuredResources = [
    {
      title: "Complete React Development Guide",
      excerpt: "Master React from basics to advanced concepts with practical examples",
      category: "Development",
      readTime: "25 min read",
      date: "Dec 15, 2024",
      featured: true,
    },
    {
      title: "Figma to Production Workflow",
      excerpt: "Streamline your design-to-development process with modern tools",
      category: "Design Tools",
      readTime: "18 min read",
      date: "Dec 12, 2024",
      featured: true,
    },
    {
      title: "Google Analytics 4 Mastery",
      excerpt: "Complete guide to setting up and using GA4 for better insights",
      category: "Analytics",
      readTime: "22 min read",
      date: "Dec 10, 2024",
      featured: true,
    },
  ]

  const articles = [
    {
      title: "WordPress Performance Optimization",
      excerpt: "Speed up your WordPress site with these proven optimization techniques",
      category: "CMS",
      readTime: "15 min read",
      date: "Dec 8, 2024",
    },
    {
      title: "Shopify Theme Development Best Practices",
      excerpt: "Build custom Shopify themes that are fast, scalable, and maintainable",
      category: "E-commerce",
      readTime: "12 min read",
      date: "Dec 5, 2024",
    },
    {
      title: "Node.js Microservices Architecture",
      excerpt: "Design and implement scalable microservices with Node.js",
      category: "Backend",
      readTime: "20 min read",
      date: "Dec 3, 2024",
    },
    {
      title: "Adobe XD to Figma Migration Guide",
      excerpt: "Step-by-step guide for migrating your design workflow from XD to Figma",
      category: "Design Tools",
      readTime: "10 min read",
      date: "Nov 30, 2024",
    },
    {
      title: "HubSpot Marketing Automation Setup",
      excerpt: "Configure HubSpot for effective marketing automation and lead nurturing",
      category: "Marketing Tools",
      readTime: "16 min read",
      date: "Nov 28, 2024",
    },
    {
      title: "Database Optimization for Web Apps",
      excerpt: "Optimize database performance for better web application speed",
      category: "Database",
      readTime: "18 min read",
      date: "Nov 25, 2024",
    },
  ]

  const categories = [
    { name: "Development Frameworks", count: 45, color: "bg-blue-100 text-blue-800", icon: Code },
    { name: "Design Tools", count: 32, color: "bg-purple-100 text-purple-800", icon: Palette },
    { name: "Marketing Tools", count: 28, color: "bg-green-100 text-green-800", icon: BarChart3 },
    { name: "CMS Platforms", count: 24, color: "bg-yellow-100 text-yellow-800", icon: BookOpen },
    { name: "E-commerce", count: 20, color: "bg-pink-100 text-pink-800", icon: BookOpen },
    { name: "Analytics", count: 18, color: "bg-indigo-100 text-indigo-800", icon: BarChart3 },
  ]

  const toolGuides = [
    {
      title: "React Hooks Deep Dive",
      description: "Master React Hooks with practical examples and best practices",
      tool: "React",
      type: "Advanced Guide",
      duration: "3 hours",
    },
    {
      title: "Figma Component Systems",
      description: "Build scalable design systems in Figma for consistent UI development",
      tool: "Figma",
      type: "Tutorial Series",
      duration: "2.5 hours",
    },
    {
      title: "WordPress Custom Theme Development",
      description: "Create custom WordPress themes from scratch with modern techniques",
      tool: "WordPress",
      type: "Complete Course",
      duration: "4 hours",
    },
    {
      title: "Google Ads Campaign Optimization",
      description: "Advanced strategies for optimizing Google Ads campaigns for better ROI",
      tool: "Google Ads",
      type: "Masterclass",
      duration: "2 hours",
    },
  ]

  const resources = [
    {
      title: "Technology Stack Comparison",
      description: "Compare different technology stacks for your next project",
      type: "Comparison Guide",
    },
    {
      title: "Development Tools Checklist",
      description: "Essential tools every developer should have in their toolkit",
      type: "Checklist",
    },
    {
      title: "Design System Template",
      description: "Ready-to-use design system template for Figma and Sketch",
      type: "Template",
    },
    {
      title: "API Documentation Template",
      description: "Professional API documentation template for developers",
      type: "Template",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <BookOpen className="mr-2 h-4 w-4" />
              Technology Resources
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Master Modern{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Stay ahead with our comprehensive technology resources. Learn the latest tools, frameworks, and platforms
              that power modern digital experiences through expert guides and tutorials.
            </p>
            <div className="mt-6 sm:mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Technology Guides</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">25K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Technologies Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Featured Resources
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Our most comprehensive and popular technology guides
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-600">{resource.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {resource.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl hover:text-blue-600 cursor-pointer">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">{resource.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {resource.date}
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
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
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Technology Categories
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Explore resources organized by technology categories
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <Badge className={`${category.color} mb-3`}>{category.name}</Badge>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{category.count}</div>
                  <div className="text-sm text-gray-600">Resources</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Guides Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Tool-Specific Guides
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              In-depth guides for specific tools and technologies
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {toolGuides.map((guide, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-t-lg flex items-center justify-center">
                  <Code className="h-12 w-12 text-blue-600" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-purple-600 text-xs">{guide.tool}</Badge>
                    <span className="text-xs text-gray-500">{guide.duration}</span>
                  </div>
                  <CardTitle className="text-base sm:text-lg">{guide.title}</CardTitle>
                  <CardDescription className="text-sm">{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {guide.type}
                  </Badge>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm">
                    View Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Recent Articles</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Latest technology insights and tutorials from our experts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
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
                  <CardTitle className="text-base sm:text-lg hover:text-blue-600 cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
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
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Free Resources</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Download our free templates, checklists, and comparison guides
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit bg-green-600">{resource.type}</Badge>
                  <CardTitle className="text-base sm:text-lg">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm">
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Stay Updated</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              Get the latest technology insights and tutorials delivered to your inbox weekly
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <div className="flex-1 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 text-sm sm:text-base"
                />
              </div>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
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
