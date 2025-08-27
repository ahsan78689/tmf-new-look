"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FeaturedBlog() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aoIAYBTHkClJ7AIHbvHdCNOqzoR2hg.png"
              alt="Digital marketing team working on strategy"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Achieve Digital Marketing Goals Effectively and Efficiently
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At Meta Future, we are a comprehensive digital marketing agency with customized solutions to meet our
              client's unique needs and goals. Our{" "}
              <span className="text-pink-500 font-medium">expert digital marketing team</span> of experienced
              professionals combines creativity, strategy, and technology to drive results and maximize ROI for
              businesses across various industries.
            </p>

            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full bg-transparent"
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
