import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import GetStartedPopup from "@/components/get-started-popup"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-32">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your Digital Presence with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              The Meta Future
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            We're a full-service digital agency specializing in cutting-edge marketing strategies, stunning design, and
            robust development solutions that drive real results for your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <GetStartedPopup>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </GetStartedPopup>
            <Button variant="outline" size="lg" className="group bg-transparent">
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
