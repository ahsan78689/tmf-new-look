import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp, Users, Award } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs sm:text-sm font-medium text-purple-700">
                  <TrendingUp className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Trusted by 500+ Companies
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                  Digital Solutions That{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Drive Growth
                  </span>
                </h1>
                <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:text-xl">
                  From SEO strategy to web development, we provide comprehensive digital marketing and development
                  services that help your business thrive in the digital landscape.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-sm sm:text-base"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-200 hover:bg-purple-50 bg-transparent text-sm sm:text-base"
                >
                  <Play className="mr-2 h-4 w-4" />
                  View Our Work
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center sm:text-left">
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center justify-center sm:justify-start">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-2" />
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">500+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">Happy Clients</p>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center justify-center sm:justify-start">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-2" />
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">98%</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">Success Rate</p>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center justify-center sm:justify-start">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-2" />
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">8+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="relative mx-auto w-full max-w-sm lg:max-w-lg">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-2xl"></div>
                <div className="relative rounded-2xl bg-white p-4 sm:p-6 lg:p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">SEO Performance</h3>
                          <p className="text-sm text-gray-500">Last 30 days</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">+127%</div>
                        <div className="text-sm text-gray-500">Growth</div>
                      </div>
                    </div>
                    <div className="h-32 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 p-4 flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-r from-purple-200 to-blue-200 rounded opacity-50 flex items-end justify-around p-2">
                        <div className="w-4 bg-purple-500 rounded-t" style={{ height: "60%" }}></div>
                        <div className="w-4 bg-purple-500 rounded-t" style={{ height: "80%" }}></div>
                        <div className="w-4 bg-blue-500 rounded-t" style={{ height: "40%" }}></div>
                        <div className="w-4 bg-blue-500 rounded-t" style={{ height: "90%" }}></div>
                        <div className="w-4 bg-purple-600 rounded-t" style={{ height: "100%" }}></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-semibold text-gray-900">2.4K</div>
                        <div className="text-xs text-gray-500">Keywords</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">89%</div>
                        <div className="text-xs text-gray-500">Page Speed</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">156</div>
                        <div className="text-xs text-gray-500">Backlinks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
