import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Users, Calendar, ArrowRight, Clock, TrendingUp } from "lucide-react"

export default function DesignDevelopmentLearnPage() {
  const featuredArticles = [
    {
      title: "Complete Guide to Modern Web Development",
      excerpt: "Everything you need to know about building modern web applications in 2024",
      category: "Development",
      readTime: "20 min read",
      date: "Dec 15, 2024",
      featured: true,
    },
    {
      title: "UI/UX Design Principles That Convert",
      excerpt: "Essential design principles for creating user interfaces that drive conversions",
      category: "Design",
      readTime: "15 min read",
      date: "Dec 12, 2024",
      featured: true,
    },
    {
      title: "React Best Practices for 2024",
      excerpt: "Advanced React patterns and best practices for scalable applications",
      category: "Development",
      readTime: "18 min read",
      date: "Dec 10, 2024",
      featured: true,
    },
  ]

  const articles = [
    {
      title: "Responsive Design Fundamentals",
      excerpt: "Master the basics of creating responsive websites that work on all devices",
      category: "Design",
      readTime: "12 min read",
      date: "Dec 8, 2024",
    },
    {
      title: "JavaScript ES6+ Features You Should Know",
      excerpt: "Modern JavaScript features that will improve your development workflow",
      category: "Development",
      readTime: "10 min read",
      date: "Dec 5, 2024",
    },
    {
      title: "Color Theory for Web Designers",
      excerpt: "Understanding color psychology and how to use colors effectively in web design",
      category: "Design",
      readTime: "8 min read",
      date: "Dec 3, 2024",
    },
    {
      title: "Node.js Performance Optimization",
      excerpt: "Tips and techniques for optimizing Node.js applications for better performance",
      category: "Development",
      readTime: "14 min read",
      date: "Nov 30, 2024",
    },
    {
      title: "Accessibility in Web Design",
      excerpt: "Creating inclusive web experiences for users with disabilities",
      category: "Design",
      readTime: "11 min read",
      date: "Nov 28, 2024",
    },
    {
      title: "Database Design Best Practices",
      excerpt: "Essential principles for designing efficient and scalable databases",
      category: "Development",
      readTime: "16 min read",
      date: "Nov 25, 2024",
    },
  ]

  const categories = [
    { name: "UI/UX Design", count: 32, color: "bg-purple-100 text-purple-800" },
    { name: "Frontend Development", count: 28, color: "bg-blue-100 text-blue-800" },
    { name: "Backend Development", count: 24, color: "bg-green-100 text-green-800" },
    { name: "Mobile Development", count: 18, color: "bg-pink-100 text-pink-800" },
    { name: "Web Performance", count: 15, color: "bg-yellow-100 text-yellow-800" },
    { name: "Design Systems", count: 12, color: "bg-indigo-100 text-indigo-800" },
  ]

  const tutorials = [
    {
      title: "Building a React E-commerce App",
      description: "Step-by-step tutorial for creating a full-featured e-commerce application",
      type: "Tutorial Series",
      duration: "4 hours",
    },
    {
      title: "Figma to Code Workflow",
      description: "Complete workflow from Figma designs to production-ready code",
      type: "Video Tutorial",
      duration: "2 hours",
    },
    {
      title: "API Development with Node.js",
      description: "Build RESTful APIs with Node.js, Express, and MongoDB",
      type: "Tutorial Series",
      duration: "3 hours",
    },
    {
      title: "Responsive Design Masterclass",
      description: "Master responsive design techniques for modern web development",
      type: "Video Course",
      duration: "5 hours",
    },
  ]

  const resources = [
    {
      title: "Web Development Checklist",
      description: "Complete checklist for launching production-ready web applications",
      type: "Checklist",
    },
    {
      title: "Design System Template",
      description: "Ready-to-use design system template for consistent UI components",
      type: "Template",
    },
    {
      title: "Code Review Guidelines",
      description: "Best practices for conducting effective code reviews",
      type: "Guide",
    },
    {
      title: "Performance Optimization Toolkit",
      description: "Tools and techniques for optimizing web application performance",
      type: "Toolkit",
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
              Design & Development Resources
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Learn Design &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Master the latest design and development techniques with our comprehensive library of tutorials, guides,
              and resources. Stay ahead of the curve with expert insights and practical knowledge.
            </p>
            <div className="mt-6 sm:mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Browse All Resources
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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-600">Tutorials & Guides</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">15K+</div>
              <div className="text-sm text-gray-600">Monthly Learners</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">Weekly</div>
              <div className="text-sm text-gray-600">New Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Featured Articles
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Our most comprehensive and popular design and development guides
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
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
                  <CardTitle className="text-lg sm:text-xl hover:text-purple-600 cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">{article.excerpt}</CardDescription>
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
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Browse by Category
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Find resources organized by design and development topics
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <CardContent className="p-4 sm:p-6">
                  <Badge className={`${category.color} mb-3`}>{category.name}</Badge>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{category.count}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Resources</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Video Tutorials</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Step-by-step video tutorials for hands-on learning
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                  <Code className="h-12 w-12 text-purple-600" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-600 text-xs">{tutorial.type}</Badge>
                    <span className="text-xs text-gray-500">{tutorial.duration}</span>
                  </div>
                  <CardTitle className="text-base sm:text-lg">{tutorial.title}</CardTitle>
                  <CardDescription className="text-sm">{tutorial.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-sm">
                    Watch Tutorial
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
              Latest insights and tips from our design and development experts
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
                  <CardTitle className="text-base sm:text-lg hover:text-purple-600 cursor-pointer">
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
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Free Resources</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Download our free templates, checklists, and toolkits
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
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-sm">
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Stay Updated</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-purple-100">
              Get the latest design and development insights delivered to your inbox weekly
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <div className="flex-1 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 text-sm sm:text-base"
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
