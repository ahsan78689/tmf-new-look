import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Share2,
  Users,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Heart,
  Star,
  Zap,
  Crown,
} from "lucide-react"
import Link from "next/link"

export default function SocialMediaAdvertisingPage() {
  const socialPackages = [
    {
      name: "Social Starter",
      subtitle: "Perfect for small businesses",
      price: "$1,200",
      period: "/month",
      originalPrice: "$1,500",
      savings: "Save $300",
      description: "Essential social media advertising to get started",
      features: [
        "2 social platforms (Facebook & Instagram)",
        "Campaign setup & optimization",
        "Basic audience targeting",
        "Ad creative design (5 variations)",
        "Monthly performance reports",
        "Email support",
      ],
      popular: false,
      color: "from-pink-500 to-pink-600",
      icon: Share2,
      badge: "Best Value",
    },
    {
      name: "Social Professional",
      subtitle: "Most comprehensive package",
      price: "$2,500",
      period: "/month",
      originalPrice: "$3,200",
      savings: "Save $700",
      description: "Full-service social media advertising management",
      features: [
        "4 social platforms included",
        "Advanced audience targeting",
        "A/B testing & optimization",
        "Custom creative design (15 variations)",
        "Video ad creation",
        "Remarketing campaigns",
        "Bi-weekly optimization calls",
        "Dedicated account manager",
        "Phone & email support",
      ],
      popular: true,
      color: "from-purple-500 to-purple-600",
      icon: Users,
      badge: "Most Popular",
    },
    {
      name: "Social Enterprise",
      subtitle: "For large-scale campaigns",
      price: "$4,800",
      period: "/month",
      originalPrice: "$6,000",
      savings: "Save $1,200",
      description: "Enterprise-level social media advertising",
      features: [
        "All major social platforms",
        "Advanced audience segmentation",
        "Custom video production",
        "Influencer collaboration",
        "Cross-platform campaigns",
        "Weekly strategy sessions",
        "Custom reporting dashboard",
        "Priority support",
        "Quarterly business reviews",
      ],
      popular: false,
      color: "from-indigo-500 to-indigo-600",
      icon: Crown,
      badge: "Premium",
    },
  ]

  const platforms = [
    {
      name: "Facebook Ads",
      description: "Reach your ideal customers with precision targeting",
      icon: "📘",
      features: ["Custom audiences", "Lookalike targeting", "Video ads", "Lead generation"],
      users: "2.9B+ users",
      bestFor: "B2C, Local businesses",
    },
    {
      name: "Instagram Ads",
      description: "Engage audiences with visual storytelling",
      icon: "📷",
      features: ["Story ads", "Shopping ads", "Reels advertising", "Influencer partnerships"],
      users: "2B+ users",
      bestFor: "E-commerce, Lifestyle brands",
    },
    {
      name: "LinkedIn Ads",
      description: "Connect with professionals and decision makers",
      icon: "💼",
      features: ["Sponsored content", "Message ads", "Lead gen forms", "Account targeting"],
      users: "900M+ users",
      bestFor: "B2B, Professional services",
    },
    {
      name: "TikTok Ads",
      description: "Capture attention with creative short-form content",
      icon: "🎵",
      features: ["In-feed ads", "Brand takeovers", "Hashtag challenges", "Spark ads"],
      users: "1B+ users",
      bestFor: "Gen Z, Creative brands",
    },
  ]

  const adTypes = [
    {
      title: "Brand Awareness Campaigns",
      description: "Increase visibility and reach new audiences",
      icon: Users,
      metrics: ["Reach", "Impressions", "Brand recall"],
    },
    {
      title: "Lead Generation Ads",
      description: "Capture qualified leads directly from social platforms",
      icon: Target,
      metrics: ["Cost per lead", "Lead quality", "Conversion rate"],
    },
    {
      title: "Conversion Campaigns",
      description: "Drive sales and specific actions on your website",
      icon: TrendingUp,
      metrics: ["ROAS", "Cost per acquisition", "Purchase value"],
    },
    {
      title: "Engagement Campaigns",
      description: "Build community and increase social interactions",
      icon: Heart,
      metrics: ["Engagement rate", "Comments", "Shares"],
    },
  ]

  const results = [
    { metric: "Average ROAS", value: "3.8x", description: "Return on ad spend" },
    { metric: "Lead Cost Reduction", value: "45%", description: "Lower cost per lead" },
    { metric: "Engagement Increase", value: "180%", description: "Higher social engagement" },
    { metric: "Reach Expansion", value: "250%", description: "Broader audience reach" },
  ]

  const process = [
    {
      step: "1",
      title: "Audience Research",
      description: "Identify and analyze your target audience across platforms",
    },
    {
      step: "2",
      title: "Creative Development",
      description: "Design compelling ad creatives that resonate with your audience",
    },
    {
      step: "3",
      title: "Campaign Launch",
      description: "Set up and launch optimized campaigns with proper tracking",
    },
    {
      step: "4",
      title: "Optimization",
      description: "Continuously optimize for better performance and ROI",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700 mb-6">
              <Share2 className="mr-2 h-4 w-4" />
              Social Media Advertising
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Amplify Your Brand with{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Social Media Ads
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Reach your ideal customers where they spend their time. Our social media advertising experts create
              engaging campaigns that drive awareness, leads, and sales across all major platforms.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
              >
                Start Your Campaign
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-pink-200 hover:bg-pink-50 bg-transparent">
                View Case Studies
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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{result.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                <div className="text-xs text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Social Media Advertising Packages
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Choose the perfect package to amplify your social media presence
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {socialPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.popular ? "ring-2 ring-purple-500 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                      <Star className="inline h-4 w-4 mr-1" />
                      {pkg.badge}
                    </div>
                  </div>
                )}
                <CardHeader className={pkg.popular ? "pt-12" : "pt-6"}>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${pkg.color} text-white mb-4`}
                  >
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                    {!pkg.popular && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                        {pkg.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{pkg.subtitle}</p>
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                    <span className="text-sm text-gray-400 line-through">{pkg.originalPrice}</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 mb-4">
                    {pkg.savings}
                  </Badge>
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    size="lg"
                  >
                    {pkg.popular ? (
                      <>
                        <Zap className="mr-2 h-4 w-4" />
                        Get Started Now
                      </>
                    ) : (
                      "Choose This Package"
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              All packages include free strategy consultation, creative design, and performance tracking
            </p>
            <Button variant="outline" size="lg">
              Need Custom Social Media Strategy? Let's Talk
            </Button>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Advertising Platforms
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              We manage campaigns across all major social media platforms
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{platform.icon}</div>
                    <div>
                      <CardTitle className="text-lg sm:text-xl">{platform.name}</CardTitle>
                      <div className="text-sm text-gray-500">{platform.users}</div>
                    </div>
                  </div>
                  <CardDescription className="text-sm sm:text-base">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {platform.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs">
                        Best for: {platform.bestFor}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Types Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Campaign Types</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Strategic campaigns designed to achieve your specific business goals
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {adTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                    <type.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                    <ul className="space-y-1">
                      {type.metrics.map((metric, metricIndex) => (
                        <li key={metricIndex} className="flex items-center text-sm">
                          <div className="h-2 w-2 bg-pink-600 rounded-full mr-2"></div>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Our Process</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              How we create successful social media advertising campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-purple-600 text-white text-lg font-bold">
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
              Why Choose Our Social Media Advertising?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Benefits of working with our social media experts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {[
              "Platform-certified specialists",
              "Custom audience targeting",
              "Creative design & copywriting",
              "A/B testing & optimization",
              "Detailed performance reporting",
              "Cross-platform campaign management",
              "Conversion tracking setup",
              "Competitor analysis",
              "Budget optimization",
              "24/7 campaign monitoring",
              "Creative refresh strategies",
              "ROI-focused approach",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Amplify Your Social Presence?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-pink-100">
              Let's create social media campaigns that drive real results for your business
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                Start Your Campaign
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/company/contact-us">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
