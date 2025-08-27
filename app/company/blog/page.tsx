import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search, BookOpen } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Discover the latest trends shaping the web development landscape and how they'll impact your business in the coming year.",
    author: "Sarah Johnson",
    date: "December 15, 2023",
    category: "Web Development",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600&text=Featured+Blog+Post",
  }

  const blogPosts = [
    {
      title: "10 Essential SEO Tips for Small Businesses",
      excerpt: "Learn the fundamental SEO strategies that can help your small business rank higher in search results.",
      author: "Mike Chen",
      date: "December 12, 2023",
      category: "SEO",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400&text=SEO+Tips",
    },
    {
      title: "How to Choose the Right Social Media Platform for Your Business",
      excerpt:
        "A comprehensive guide to selecting the social media platforms that will best serve your business goals.",
      author: "Emily Rodriguez",
      date: "December 10, 2023",
      category: "Social Media",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=400&text=Social+Media+Guide",
    },
    {
      title: "The ROI of Professional Web Design",
      excerpt:
        "Discover how investing in professional web design can significantly impact your business's bottom line.",
      author: "David Kim",
      date: "December 8, 2023",
      category: "Web Design",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=400&text=Web+Design+ROI",
    },
    {
      title: "Email Marketing Best Practices for 2024",
      excerpt: "Stay ahead of the curve with these email marketing strategies that drive engagement and conversions.",
      author: "Lisa Wang",
      date: "December 5, 2023",
      category: "Email Marketing",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400&text=Email+Marketing",
    },
    {
      title: "Building a Strong Brand Identity Online",
      excerpt:
        "Learn how to create a cohesive brand identity that resonates with your audience across all digital channels.",
      author: "James Wilson",
      date: "December 3, 2023",
      category: "Branding",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=400&text=Brand+Identity",
    },
    {
      title: "The Complete Guide to Google Ads for Beginners",
      excerpt:
        "Everything you need to know to get started with Google Ads and drive qualified traffic to your website.",
      author: "Maria Garcia",
      date: "December 1, 2023",
      category: "PPC",
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=400&text=Google+Ads+Guide",
    },
  ]

  const categories = [
    { name: "All Posts", count: 24 },
    { name: "Web Development", count: 8 },
    { name: "Digital Marketing", count: 6 },
    { name: "SEO", count: 4 },
    { name: "Social Media", count: 3 },
    { name: "Web Design", count: 3 },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <BookOpen className="mr-2 h-4 w-4" />
              Our Blog
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Insights & Resources for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Success
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and strategies in digital marketing, web development, and
              business growth. Our expert team shares valuable insights to help your business thrive online.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 sm:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Featured Article</h2>
          </div>
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Latest Articles</h2>
            <p className="mt-4 text-lg text-gray-600">Discover insights and strategies to grow your business</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="aspect-video">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-sm">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Stay Updated</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              Subscribe to our newsletter and get the latest insights delivered to your inbox
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20"
              />
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
