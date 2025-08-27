"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, PenTool, Code, Palette, ArrowRight, BarChart3, Target } from "lucide-react"
import Link from "next/link"

const mainServices = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions to grow your online presence",
    services: ["SEO Strategy", "PPC Management", "Content Marketing", "Social Media"],
    color: "bg-green-500",
    href: "/digital-marketing",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Design & Development",
    description: "Beautiful, functional websites and applications that convert visitors",
    services: ["UI/UX Design", "Web Development", "E-commerce", "Mobile Apps"],
    color: "bg-purple-500",
    href: "/web-development",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Technology Stack",
    description: "Modern technologies and tools for scalable digital solutions",
    services: ["React & Node.js", "WordPress & Shopify", "Analytics Tools", "Design Software"],
    color: "bg-blue-500",
    href: "/technology",
  },
]

const specializedServices = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Organic Search",
    services: ["Technical SEO", "Keyword Research", "On-Page SEO", "Local SEO"],
    color: "bg-purple-500",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Digital Advertising",
    services: ["Campaign Management", "Google Ads", "Social Media Ads", "Remarketing"],
    color: "bg-purple-500",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Content Production",
    services: ["Content Strategy", "Blog Writing", "SEO Content", "Social Media Content"],
    color: "bg-purple-500",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    services: ["Web Design", "App Design", "User Research", "Prototyping"],
    color: "bg-purple-500",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Development",
    services: ["Website Development", "E-commerce", "CMS Development", "Web Apps"],
    color: "bg-purple-500",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analytics & Tools",
    services: ["Google Analytics", "Search Console", "Heatmaps", "Performance Tracking"],
    color: "bg-purple-500",
  },
]

export default function MainServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Our Services Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-4 relative">
              Our Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to help your business succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <Card
              key={index}
              className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Card background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg">
                <div className="w-full h-full bg-white rounded-lg"></div>
              </div>

              <CardHeader className="pb-4 relative z-10">
                <div className="relative mb-4 mx-auto">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center text-white mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {service.icon}
                  </div>
                  {/* Icon glow effect */}
                  <div
                    className={`absolute inset-0 w-16 h-16 ${service.color} rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500 mx-auto`}
                  ></div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6 flex flex-col items-center">
                  {service.services.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={`${service.href}/${item.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                      className="group/bar block"
                    >
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white hover:from-purple-50 hover:to-blue-50 border border-gray-100 hover:border-purple-200 transition-all duration-300 transform hover:translate-x-2 hover:shadow-md cursor-pointer w-64 h-12">
                        <div className="flex items-center min-w-0">
                          <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-3 transform group-hover/bar:scale-y-125 transition-transform duration-300"></div>
                          <span className="text-sm font-medium text-gray-700 group-hover/bar:text-gray-900 transition-colors duration-300 truncate">
                            {item}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-purple-500 opacity-0 group-hover/bar:opacity-100 transform group-hover/bar:translate-x-1 transition-all duration-300 flex-shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-300 rounded-full px-6 py-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Link href={service.href}>
                      <span className="relative z-10 flex items-center">
                        Explore Services
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialized Services Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-4 relative">
              Specialized Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deep expertise across all areas of digital marketing and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializedServices.map((service, index) => (
            <Card
              key={index}
              className="group border-0 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Subtle border animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] rounded-lg">
                <div className="w-full h-full bg-white rounded-lg"></div>
              </div>

              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-start mb-6">
                  <div className="relative mr-4">
                    <div
                      className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      {service.icon}
                    </div>
                    {/* Enhanced glow effect */}
                    <div
                      className={`absolute inset-0 w-14 h-14 ${service.color} rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 animate-pulse`}
                    ></div>
                    {/* Floating particles effect */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce delay-200"></div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2 relative">
                      {service.title}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i < 4 ? "bg-gradient-to-r from-purple-400 to-blue-400" : "bg-gray-200"
                            } group-hover:scale-125`}
                            style={{ animationDelay: `${i * 100}ms` }}
                          ></div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">Expert Level</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {service.services.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="group/item flex items-center p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-purple-50 hover:to-blue-50 transition-all duration-300 transform hover:translate-x-2 hover:shadow-md"
                    >
                      <div className="relative mr-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg flex items-center justify-center shadow-sm group-hover/item:shadow-md transition-all duration-300 transform group-hover/item:scale-110">
                          <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                        </div>
                        <div className="absolute inset-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg opacity-0 group-hover/item:opacity-30 blur-md transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                          {item}
                        </span>
                        <div className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover/item:w-full transition-all duration-500 mt-1"></div>
                      </div>
                      <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-purple-500 transform group-hover/item:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Advanced metrics section */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Active Projects: {35 + (index * 7)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span>Success Rate: 98%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
