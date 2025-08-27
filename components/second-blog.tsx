"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function SecondBlog() {
  const blogPost = {
    title: "10 Web Design Trends That Will Dominate 2024",
    excerpt:
      "Stay ahead of the curve with these cutting-edge web design trends that are shaping the digital landscape in 2024. From AI-powered personalization to immersive 3D experiences.",
    author: "Michael Chen",
    authorRole: "UI/UX Designer",
    date: "January 12, 2024",
    readTime: "6 min read",
    category: "Web Design",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Web Design", "UI/UX", "Trends", "User Experience"],
    featured: true,
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-center space-x-3">
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {blogPost.category}
                </Badge>
                {blogPost.featured && (
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    Featured
                  </Badge>
                )}
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{blogPost.title}</h3>

              <p className="text-lg text-gray-600 leading-relaxed">{blogPost.excerpt}</p>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-start">
                <Button
                  asChild
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-500 group border-0"
                >
                  <Link href="/company/blog" className="flex items-center relative z-10">
                    <span className="mr-3">Read Full Article</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="relative overflow-hidden border-2 border-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 hover:text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-500 group bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600"
                >
                  <Link href="/company/blog" className="flex items-center relative z-10">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                      More Design Tips
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative group order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={blogPost.image || "/placeholder.svg"}
                  alt={blogPost.title}
                  className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Floating stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-purple-600">2024</div>
                        <div className="text-xs text-gray-600">Latest Trends</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-600">10+</div>
                        <div className="text-xs text-gray-600">Design Tips</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">Pro</div>
                        <div className="text-xs text-gray-600">Insights</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
