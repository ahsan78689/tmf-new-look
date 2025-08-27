import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, BookOpen, Target, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ThirdBlog() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="w-fit">
              Strategy Guide
            </Badge>
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                The Complete Guide to Building a Winning Digital Strategy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Learn how to create a comprehensive digital strategy that aligns with your business goals and drives
                measurable results. This guide covers everything from market research to implementation and
                optimization.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>December 12, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Emily Rodriguez</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>12 min read</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">What You'll Learn:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Goal Setting</h4>
                    <p className="text-sm text-gray-600">Define clear, measurable objectives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Audience Research</h4>
                    <p className="text-sm text-gray-600">Understand your target market</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Channel Strategy</h4>
                    <p className="text-sm text-gray-600">Choose the right marketing channels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Implementation</h4>
                    <p className="text-sm text-gray-600">Execute your strategy effectively</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Free Strategy Template Included</h4>
              <p className="text-sm text-gray-600 mb-4">
                Download our comprehensive digital strategy template to help you plan and execute your own winning
                strategy.
              </p>
              <div className="flex items-center space-x-2 text-sm text-purple-600">
                <span>✓ 20-page strategy framework</span>
                <span>✓ Actionable worksheets</span>
                <span>✓ Real examples</span>
              </div>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Link href="/blog/digital-strategy-guide" className="flex items-center">
                Read Strategy Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Digital+Strategy+Guide"
              alt="Digital Strategy Guide"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

            {/* Floating elements */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="text-xs text-gray-600">Strategy Framework</div>
              <div className="font-semibold text-gray-900">6 Key Steps</div>
            </div>

            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="text-xs text-gray-600">Success Rate</div>
              <div className="font-semibold text-green-600">95%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
