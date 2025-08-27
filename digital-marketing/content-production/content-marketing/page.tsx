import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PenTool, TrendingUp, Users, CheckCircle, ArrowRight, Target } from "lucide-react"
import Link from "next/link"

export default function ContentMarketingPage() {
  const benefits = [
    "Increased brand awareness and authority",
    "Higher search engine rankings",
    "Better customer engagement",
    "Lead generation and nurturing",
    "Cost-effective marketing solution",
    "Long-term sustainable results",
  ]

  const services = [
    {
      title: "Content Strategy",
      description: "Comprehensive content planning aligned with your business goals",
      features: ["Content audit", "Competitor analysis", "Editorial calendar", "Content pillars"],
    },
    {
      title: "Blog Writing",
      description: "Engaging blog posts that drive traffic and conversions",
      features: ["SEO-optimized articles", "Industry expertise", "Regular publishing", "Performance tracking"],
    },
    {
      title: "Website Content",
      description: "Compelling website copy that converts visitors",
      features: ["Landing pages", "Product descriptions", "About pages", "Service pages"],
    },
    {
      title: "Social Media Content",
      description: "Engaging content for all social media platforms",
      features: ["Platform-specific content", "Visual content", "Hashtag strategy", "Community management"],
    },
    {
      title: "Email Marketing",
      description: "Nurturing email campaigns that drive results",
      features: ["Newsletter campaigns", "Drip sequences", "Personalization", "A/B testing"],
    },
    {
      title: "Video Content",
      description: "Engaging video content for maximum impact",
      features: ["Script writing", "Video production", "YouTube optimization", "Social video"],
    },
  ]

  const process = [
    {
      step: "1",
      title: "Strategy Development",
      description: "Define content goals, audience, and key messaging",
    },
    {
      step: "2",
      title: "Content Planning",
      description: "Create editorial calendar and content roadmap",
    },
    {
      step: "3",
      title: "Content Creation",
      description: "Produce high-quality, engaging content",
    },
    {
      step: "4",
      title: "Distribution & Promotion",
      description: "Amplify content across multiple channels",
    },
    {
      step: "5",
      title: "Performance Analysis",
      description: "Track metrics and optimize for better results",
    },
  ]

  const contentTypes = [
    { type: "Blog Articles", description: "In-depth articles that educate and engage", icon: "📝" },
    { type: "Infographics", description: "Visual content that simplifies complex information", icon: "📊" },
    { type: "Videos", description: "Engaging video content for various platforms", icon: "🎥" },
    { type: "Ebooks", description: "Comprehensive guides for lead generation", icon: "📚" },
    { type: "Case Studies", description: "Success stories that build credibility", icon: "📈" },
    { type: "Whitepapers", description: "Authoritative reports on industry topics", icon: "📄" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 mb-6">
              <PenTool className="mr-2 h-4 w-4" />
              Content Marketing Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Content That{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Converts & Engages
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Create compelling content that attracts, engages, and converts your target audience. Our content marketing
              strategies drive brand awareness, generate leads, and build lasting customer relationships.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Get Content Strategy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                View Content Examples
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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">300%</div>
              <div className="text-sm text-gray-600">Average Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Lead Generation Increase</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Target className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Content Pieces Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Content Types We Create</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Diverse content formats to engage your audience across all touchpoints
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contentTypes.map((content, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{content.icon}</div>
                  <CardTitle className="text-xl">{content.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{content.description}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Content Services</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive content marketing services to grow your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Content Process</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              A proven methodology for creating content that drives results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Content Marketing?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Benefits of working with our content marketing experts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Create Amazing Content?
            </h2>
            <p className="mt-4 text-lg leading-8 text-purple-100">
              Let's develop a content strategy that drives real business results
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Content Strategy
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
