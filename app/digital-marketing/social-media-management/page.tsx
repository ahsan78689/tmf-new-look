import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Share2, Users, Calendar, BarChart3, CheckCircle, ArrowRight, TrendingUp, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function SocialMediaManagementPage() {
  const managementServices = [
    {
      title: "Content Creation & Curation",
      description: "Engaging content that resonates with your audience",
      icon: Share2,
      features: ["Custom graphics", "Video content", "Copywriting", "Content calendar"],
      price: "Starting at $1,200/month",
    },
    {
      title: "Community Management",
      description: "Build and nurture your online community",
      icon: Users,
      features: ["Daily engagement", "Comment management", "Customer support", "Reputation monitoring"],
      price: "Starting at $800/month",
    },
    {
      title: "Social Media Strategy",
      description: "Strategic planning for maximum social impact",
      icon: Calendar,
      features: ["Platform strategy", "Content planning", "Audience analysis", "Competitor research"],
      price: "Starting at $600/month",
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed insights to optimize your social presence",
      icon: BarChart3,
      features: ["Performance tracking", "Engagement metrics", "Growth analysis", "ROI reporting"],
      price: "Starting at $400/month",
    },
  ]

  const platforms = [
    { name: "Facebook", users: "2.9B+", icon: "📘", bestFor: "Community building" },
    { name: "Instagram", users: "2B+", icon: "📷", bestFor: "Visual storytelling" },
    { name: "Twitter", users: "450M+", icon: "🐦", bestFor: "Real-time engagement" },
    { name: "LinkedIn", users: "900M+", icon: "💼", bestFor: "B2B networking" },
    { name: "TikTok", users: "1B+", icon: "🎵", bestFor: "Creative content" },
    { name: "YouTube", users: "2.7B+", icon: "📺", bestFor: "Video marketing" },
  ]

  const results = [
    { metric: "Follower Growth", value: "185%", description: "Average increase in followers" },
    { metric: "Engagement Rate", value: "8.5%", description: "Above industry average" },
    { metric: "Brand Mentions", value: "240%", description: "Increase in brand visibility" },
    { metric: "Lead Generation", value: "160%", description: "More qualified leads" },
  ]

  const contentTypes = [
    { type: "Educational Posts", description: "Share valuable insights", icon: "📚" },
    { type: "Behind-the-Scenes", description: "Show your company culture", icon: "🎬" },
    { type: "User-Generated Content", description: "Showcase customer stories", icon: "👥" },
    { type: "Product Showcases", description: "Highlight your offerings", icon: "🛍️" },
    { type: "Industry News", description: "Share relevant updates", icon: "📰" },
    { type: "Interactive Content", description: "Polls, quizzes, and Q&As", icon: "🎯" },
  ]

  const process = [
    {
      step: "1",
      title: "Social Audit",
      description: "Analyze current social media presence and opportunities",
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Create comprehensive social media strategy",
    },
    {
      step: "3",
      title: "Content Creation",
      description: "Develop engaging content aligned with your brand",
    },
    {
      step: "4",
      title: "Community Management",
      description: "Engage with audience and build relationships",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 mb-6">
              <MessageCircle className="mr-2 h-4 w-4" />
              Social Media Management
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Build Your Brand with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Social Media
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Grow your online presence and engage your audience with strategic social media management. Our expert team
              creates compelling content and builds meaningful connections with your customers.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Start Social Strategy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{result.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                <div className="text-xs text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Social Media Management Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive social media solutions to grow your online presence
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {managementServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">{service.price}</span>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Platforms We Manage
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Expert management across all major social media platforms
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-2">{platform.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{platform.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{platform.users}</p>
                  <Badge variant="secondary" className="text-xs">
                    {platform.bestFor}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Content We Create
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Diverse content types to engage your audience
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {contentTypes.map((content, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{content.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">{content.type}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{content.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Management Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Strategic approach to social media success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Social Media Management Benefits
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Why professional social media management matters
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {[
              "Consistent brand presence across platforms",
              "Increased brand awareness and visibility",
              "Higher engagement with your audience",
              "Professional content creation",
              "Time-saving automated scheduling",
              "Real-time community management",
              "Data-driven strategy optimization",
              "Crisis management and reputation protection",
              "Lead generation through social channels",
              "Competitive advantage in your market",
              "Improved customer relationships",
              "Measurable ROI and performance tracking",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Grow Your Social Presence?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-purple-100">
              Let's create a social media strategy that builds your brand and engages your audience
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Social Strategy
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/contact-us">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
