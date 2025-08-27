import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPreview() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Clock, label: "Years Experience", value: "8+" },
    { icon: Target, label: "Projects Completed", value: "1000+" },
  ]

  const industries = [
    "E-commerce & Retail",
    "Healthcare & Medical",
    "Real Estate",
    "Technology & SaaS",
    "Finance & Banking",
    "Education & Training",
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700">
                  About MetaFuture
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Driving Digital Success Since 2016
                </h2>
                <p className="text-lg leading-8 text-gray-600">
                  We are a full-service digital agency dedicated to helping businesses thrive in the digital landscape.
                  Our team of experts combines creativity with technical expertise to deliver solutions that drive real
                  business results.
                </p>
                <p className="text-base leading-7 text-gray-600">
                  From startups to enterprise companies, we've helped hundreds of businesses achieve their online goals
                  through strategic digital marketing, innovative design, and robust development solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Industries We Serve</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                      {industry}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Link href="/who-we-are/about-us">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                  <Link href="/who-we-are/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-2xl"></div>
                <div className="relative space-y-4">
                  <Card className="bg-white shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Our Team</h4>
                          <p className="text-sm text-gray-500">Expert professionals</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="aspect-square rounded-lg bg-gradient-to-br from-purple-100 to-blue-100"
                          ></div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Award className="h-8 w-8 text-purple-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Client Success</h4>
                            <p className="text-sm text-gray-500">Proven results</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">98%</div>
                          <div className="text-xs text-gray-500">Satisfaction</div>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-[98%] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
