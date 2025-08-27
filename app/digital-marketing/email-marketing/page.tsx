import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Users, BarChart3, CheckCircle, ArrowRight, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

export default function EmailMarketingPage() {
  const emailServices = [
    {
      title: "Email Campaign Design",
      description: "Beautiful, responsive email templates that drive engagement",
      icon: Mail,
      features: ["Custom templates", "Mobile optimization", "Brand consistency", "A/B testing"],
      price: "Starting at $500/month",
    },
    {
      title: "Marketing Automation",
      description: "Automated email sequences that nurture leads and drive sales",
      icon: Zap,
      features: ["Drip campaigns", "Behavioral triggers", "Lead scoring", "Segmentation"],
      price: "Starting at $800/month",
    },
    {
      title: "Newsletter Management",
      description: "Regular newsletters that keep your audience engaged",
      icon: Users,
      features: ["Content creation", "List management", "Performance tracking", "Growth strategies"],
      price: "Starting at $400/month",
    },
    {
      title: "Email Analytics",
      description: "Detailed insights to optimize your email performance",
      icon: BarChart3,
      features: ["Open rate tracking", "Click analysis", "Conversion metrics", "ROI reporting"],
      price: "Starting at $300/month",
    },
  ]

  const campaignTypes = [
    { type: "Welcome Series", description: "Onboard new subscribers", icon: "👋" },
    { type: "Product Launches", description: "Announce new products", icon: "🚀" },
    { type: "Abandoned Cart", description: "Recover lost sales", icon: "🛒" },
    { type: "Re-engagement", description: "Win back inactive users", icon: "💌" },
    { type: "Promotional", description: "Drive sales and offers", icon: "🎯" },
    { type: "Educational", description: "Share valuable content", icon: "📚" },
  ]

  const results = [
    { metric: "Open Rate", value: "28.5%", description: "Above industry average" },
    { metric: "Click Rate", value: "4.2%", description: "Higher engagement" },
    { metric: "Conversion Rate", value: "12.8%", description: "More sales generated" },
    { metric: "ROI", value: "420%", description: "Return on investment" },
  ]

  const process = [
    {
      step: "1",
      title: "Strategy & Planning",
      description: "Define goals, audience, and campaign strategy",
    },
    {
      step: "2",
      title: "Design & Content",
      description: "Create compelling email designs and copy",
    },
    {
      step: "3",
      title: "Setup & Testing",
      description: "Configure campaigns and test across devices",
    },
    {
      step: "4",
      title: "Launch & Optimize",
      description: "Send campaigns and optimize based on performance",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <Mail className="mr-2 h-4 w-4" />
              Email Marketing
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Drive Results with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Email Marketing
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Build stronger relationships with your customers through strategic email marketing. Our expert team
              creates engaging campaigns that drive conversions and build lasting customer loyalty.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Start Email Campaign
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                View Examples
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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
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
              Email Marketing Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive email marketing solutions to engage your audience and drive conversions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {emailServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">{service.price}</span>
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

      {/* Campaign Types Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Email Campaign Types
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Strategic email campaigns for every stage of the customer journey
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {campaignTypes.map((campaign, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{campaign.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">{campaign.type}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{campaign.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Email Marketing Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Proven methodology for email marketing success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-lg font-bold">
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
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Email Marketing Benefits
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Why email marketing is essential for your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {[
              "Direct communication with customers",
              "High ROI compared to other channels",
              "Personalized messaging capabilities",
              "Automated nurturing sequences",
              "Detailed performance analytics",
              "Cost-effective marketing solution",
              "Build customer loyalty and retention",
              "Drive traffic to your website",
              "Increase sales and conversions",
              "Segment audiences for targeted messaging",
              "Mobile-friendly communication",
              "Measurable results and insights",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Start Email Marketing?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              Let's create email campaigns that engage your audience and drive business growth
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Email Campaign
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
