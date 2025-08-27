"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, ArrowRight, Play, Users, Target, Calendar, BarChart3 } from "lucide-react"
import GetStartedPopup from "@/components/get-started-popup"

const banners = [
  {
    id: 1,
    badge: "Trusted by 500+ Companies",
    title: "Digital Solutions That",
    titleHighlight: "Drive Growth",
    description:
      "From SEO strategy to web development, we provide comprehensive digital marketing and development services that help your business thrive in the digital landscape.",
    primaryCta: "Start Your Project",
    secondaryCta: "View Our Work",
    stats: [
      { icon: Users, value: "500+", label: "Happy Clients" },
      { icon: Target, value: "98%", label: "Success Rate" },
      { icon: Calendar, value: "8+", label: "Years Experience" },
    ],
    dashboardData: {
      title: "SEO Performance",
      subtitle: "Last 30 days",
      growth: "+127%",
      growthLabel: "Growth",
      metrics: [
        { label: "Keywords", value: "2.4K" },
        { label: "Page Speed", value: "89%" },
        { label: "Backlinks", value: "156" },
      ],
      chartData: [40, 60, 45, 80, 65, 90, 75],
    },
  },
  {
    id: 2,
    badge: "Award-Winning Agency",
    title: "Web Development That",
    titleHighlight: "Converts Visitors",
    description:
      "Build powerful, responsive websites that engage your audience and drive conversions. Our expert development team creates custom solutions tailored to your business needs.",
    primaryCta: "Get Started",
    secondaryCta: "See Portfolio",
    stats: [
      { icon: Users, value: "300+", label: "Websites Built" },
      { icon: Target, value: "95%", label: "Client Retention" },
      { icon: Calendar, value: "5+", label: "Years Experience" },
    ],
    dashboardData: {
      title: "Website Performance",
      subtitle: "Last 30 days",
      growth: "+89%",
      growthLabel: "Conversions",
      metrics: [
        { label: "Page Views", value: "45K" },
        { label: "Load Time", value: "1.2s" },
        { label: "Uptime", value: "99.9%" },
      ],
      chartData: [30, 45, 35, 70, 55, 85, 65],
    },
  },
  {
    id: 3,
    badge: "Results-Driven Marketing",
    title: "Marketing Strategies That",
    titleHighlight: "Generate Leads",
    description:
      "Boost your online presence with data-driven marketing campaigns. From PPC to social media, we create strategies that deliver measurable results and ROI.",
    primaryCta: "Start Campaign",
    secondaryCta: "View Results",
    stats: [
      { icon: Users, value: "200+", label: "Campaigns Run" },
      { icon: Target, value: "250%", label: "Average ROI" },
      { icon: Calendar, value: "6+", label: "Years Experience" },
    ],
    dashboardData: {
      title: "Campaign Performance",
      subtitle: "Last 30 days",
      growth: "+156%",
      growthLabel: "Leads",
      metrics: [
        { label: "Impressions", value: "1.2M" },
        { label: "CTR", value: "3.4%" },
        { label: "Conversions", value: "892" },
      ],
      chartData: [25, 40, 30, 65, 50, 80, 60],
    },
  },
]

export default function HeroBanners() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const current = banners[currentBanner]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
              <TrendingUp className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">{current.badge}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                {current.title}
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {current.titleHighlight}
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">{current.description}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <GetStartedPopup>
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  <span className="relative z-10 flex items-center">
                    {current.primaryCta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </GetStartedPopup>

              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-700 px-8 py-4 text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  {current.secondaryCta}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {current.stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                      <Icon className="h-5 w-5 text-purple-600" />
                      <span className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Dashboard */}
          <div className="relative">
            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-2xl border-0 rounded-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{current.dashboardData.title}</h3>
                    <p className="text-sm text-gray-500">{current.dashboardData.subtitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{current.dashboardData.growth}</div>
                  <div className="text-sm text-gray-500">{current.dashboardData.growthLabel}</div>
                </div>
              </div>

              {/* Chart */}
              <div className="mb-6">
                <div className="flex items-end justify-between h-32 gap-2">
                  {current.dashboardData.chartData.map((value, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-purple-400 to-blue-400 rounded-t-sm flex-1 transition-all duration-500 hover:from-purple-500 hover:to-blue-500"
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {current.dashboardData.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                    <div className="text-sm text-gray-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              {currentBanner + 1}
            </div>
          </div>
        </div>

        {/* Banner Navigation */}
        <div className="flex items-center justify-center mt-12 gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
