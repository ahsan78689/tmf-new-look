import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, TrendingUp, CheckCircle, ArrowRight, Users, DollarSign } from "lucide-react"
import Link from "next/link"

export default function SocialMediaAdvertisingPage() {
  const platforms = [
    {
      name: "Facebook Ads",
      description: "Reach billions of users with targeted Facebook advertising",
      icon: "📘",
      features: ["Detailed targeting", "Custom audiences", "Lookalike audiences", "Dynamic ads"],
    },
    {
      name: "Instagram Ads",
      description: "Visual storytelling through Instagram's engaging platform",
      icon: "📷",
      features: ["Story ads", "Feed ads", "Reels ads", "Shopping ads"],
    },
    {
      name: "LinkedIn Ads",
      description: "Professional B2B targeting for business growth",
      icon: "💼",
      features: ["Job title targeting", "Company targeting", "Industry targeting", "Lead gen forms"],
    },
    {
      name: "Twitter Ads",
      description: "Real-time engagement and brand awareness",
      icon: "🐦",
      features: ["Promoted tweets", "Trend takeovers", "Video ads", "Conversation ads"],
    },
    {
      name: "TikTok Ads",
      description: "Reach younger audiences with creative video content",
      icon: "🎵",
      features: ["In-feed ads", "Brand takeovers", "Hashtag challenges", "Branded effects"],
    },
    {
      name: "YouTube Ads",
      description: "Video advertising on the world's largest video platform",
      icon: "📺",
      features: ["Skippable ads", "Non-skippable ads", "Bumper ads", "Discovery ads"],
    },
  ]

  const services = [
    {
      title: "Campaign Strategy",
      description: "Comprehensive social media advertising strategy development",
    },
    {
      title: "Audience Research",
      description: "In-depth audience analysis and targeting optimization",
    },
    {
      title: "Creative Development",
      description: "Engaging ad creatives that capture attention and drive action",
    },
    {
      title: "Campaign Management",
      description: "Full-service campaign setup, monitoring, and optimization",
    },
    {
      title: "Performance Tracking",
      description: "Detailed analytics and reporting for continuous improvement",
    },
    {
      title: "A/B Testing",
      description: "Systematic testing to optimize ad performance and ROI",
    },
  ]

  const benefits = [
    "Precise audience targeting capabilities",
    "Cost-effective advertising solutions",
    "Real-time campaign optimization",
    "Detailed performance analytics",
    "Multi-platform campaign management",
    "Creative testing and optimization",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700 mb-6">
              <Smartphone className="mr-2 h-4 w-4" />
              Social Media Advertising
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Social Media Ads That{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Reach your target audience where they spend their time. Our social media advertising experts create and
              manage campaigns across all major platforms to maximize your ROI and grow your business.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
              >
                Start Social Ads Campaign
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-pink-200 hover:bg-pink-50 bg-transparent">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                <DollarSign className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">500%</div>
              <div className="text-sm text-gray-600">Average ROAS</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">2M+</div>
              <div className="text-sm text-gray-600">People Reached Monthly</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">75%</div>
              <div className="text-sm text-gray-600">Conversion Rate Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advertising Platforms We Master
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Expert management across all major social media advertising platforms
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-pink-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Social Media Advertising Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive social media advertising solutions for maximum impact
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Social Media Advertising?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Benefits of working with our social media advertising experts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Dominate Social Media?
            </h2>
            <p className="mt-4 text-lg leading-8 text-pink-100">
              Let's create social media advertising campaigns that drive real business growth
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                Start Social Campaign
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/digital-marketing">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
