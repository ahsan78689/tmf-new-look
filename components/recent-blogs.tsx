"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Digital Marketing: What You Need to Know",
    excerpt:
      "Explore how artificial intelligence is revolutionizing digital marketing strategies and what it means for businesses in 2024.",
    author: "Alex Thompson",
    date: "January 18, 2024",
    readTime: "7 min read",
    category: "AI & Marketing",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["AI", "Marketing", "Technology"],
  },
  {
    id: 2,
    title: "Mobile-First Design: Best Practices for 2024",
    excerpt:
      "Learn the essential principles of mobile-first design and how to create exceptional user experiences on mobile devices.",
    author: "Sarah Kim",
    date: "January 16, 2024",
    readTime: "5 min read",
    category: "Web Design",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Mobile", "UX", "Design"],
  },
  {
    id: 3,
    title: "E-commerce Conversion Optimization: 10 Proven Strategies",
    excerpt:
      "Discover proven strategies to increase your e-commerce conversion rates and boost online sales effectively.",
    author: "Michael Chen",
    date: "January 14, 2024",
    readTime: "8 min read",
    category: "E-commerce",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["E-commerce", "Conversion", "Sales"],
  },
  {
    id: 4,
    title: "Social Media Marketing Trends That Will Dominate 2024",
    excerpt:
      "Stay ahead of the curve with the latest social media marketing trends and strategies for maximum engagement.",
    author: "Emily Rodriguez",
    date: "January 12, 2024",
    readTime: "6 min read",
    category: "Social Media",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Social Media", "Trends", "Marketing"],
  },
  {
    id: 5,
    title: "SEO in 2024: Core Web Vitals and Beyond",
    excerpt: "Master the latest SEO techniques including Core Web Vitals optimization and emerging ranking factors.",
    author: "David Park",
    date: "January 10, 2024",
    readTime: "9 min read",
    category: "SEO",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["SEO", "Performance", "Google"],
  },
  {
    id: 6,
    title: "Building Brand Authority Through Content Marketing",
    excerpt:
      "Learn how to establish your brand as an industry authority through strategic content marketing initiatives.",
    author: "Lisa Wang",
    date: "January 8, 2024",
    readTime: "7 min read",
    category: "Content Marketing",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Branding", "Content", "Authority"],
  },
]

export default function RecentBlogs() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  const itemsPerView = 3
  const maxIndex = Math.max(0, blogPosts.length - itemsPerView)

  useEffect(() => {
    if (!isAutoScrolling) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoScrolling, maxIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <div>
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
              Latest Insights
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Blog Posts</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay updated with the latest trends, tips, and insights from our digital marketing experts
            </p>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="relative rounded-full bg-white border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <ChevronLeft className="h-5 w-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 relative z-10" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="relative rounded-full bg-white border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <ChevronRight className="h-5 w-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 relative z-10" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {blogPosts.map((post, index) => (
              <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-purple-600 hover:bg-purple-700">{post.category}</Badge>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-purple-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between p-0 h-auto text-purple-600 hover:text-purple-700 hover:bg-transparent"
                    >
                      <Link href="/company/blog">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-center mt-8 space-x-4 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="relative rounded-full bg-white border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <ChevronLeft className="h-4 w-4 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 relative z-10" />
          </Button>

          <div className="flex space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-purple-300 hover:scale-105"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="relative rounded-full bg-white border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <ChevronRight className="h-4 w-4 text-purple-600 group-hover:text-purple-700 transition-colors duration-300 relative z-10" />
          </Button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Link href="/company/blog">
              View All Blog Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
