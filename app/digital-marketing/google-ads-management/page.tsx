import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  DollarSign,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Zap,
  Star,
  Crown,
} from "lucide-react"
import Link from "next/link"

export default function GoogleAdsManagementPage() {
  const adPackages = [
    {
      name: "Ads Starter",
      subtitle: "Perfect for new advertisers",
      managementFee: "15%",
      setupFee: "$500",
      minSpend: "$2,000",
      period: "/month",
      description: "Get started with Google Ads the right way",
      features: [
        "Account setup & optimization",
        "1 campaign type (Search or Display)",
        "Keyword research (100 keywords)",
        "Ad copy creation (5 variations)",
        "Landing page recommendations",
        "Monthly performance reports",
        "Email support",
      ],
      popular: false,
      color: "from-green-500 to-green-600",
      icon: Target,
      badge: "Best Value",
    },
    {
      name: "Ads Professional",
      subtitle: "Most comprehensive package",
      managementFee: "12%",
      setupFee: "$750",
      minSpend: "$5,000",
      period: "/month",
      description: "Full-service Google Ads management",
      features: [
        "Everything in Starter",
        "Multiple campaign types",
        "Advanced keyword research (500+ keywords)",
        "A/B testing & optimization",
        "Conversion tracking setup",
        "Remarketing campaigns",
        "Bi-weekly optimization calls",
        "Dedicated account manager",
        "Phone & email support",
      ],
      popular: true,
      color: "from-blue-500 to-blue-600",
      icon: BarChart3,
      badge: "Most Popular",
    },
    {
      name: "Ads Enterprise",
      subtitle: "For large-scale campaigns",
      managementFee: "10%",
      setupFee: "$1,500",
      minSpend: "$15,000",
      period: "/month",
      description: "Enterprise-level Google Ads management",
      features: [
        "Everything in Professional",
        "Unlimited campaigns",
        "Advanced audience targeting",
        "Custom conversion tracking",
        "YouTube & Shopping ads",
        "Weekly strategy sessions",
        "Custom reporting dashboard",
        "Priority support",
        "Quarterly business reviews",
      ],
      popular: false,
      color: "from-purple-500 to-purple-600",
      icon: Crown,
      badge: "Premium",
    },
  ]

  const adServices = [
    {
      title: "Search Ads Campaign",
      description: "Target customers actively searching for your products or services",
      icon: Target,
      features: ["Keyword research", "Ad copy creation", "Bid optimization", "Landing page alignment"],
    },
    {
      title: "Display Advertising",
      description: "Build brand awareness with visual ads across Google's network",
      icon: BarChart3,
      features: ["Creative design", "Audience targeting", "Remarketing campaigns", "Performance tracking"],
    },
    {
      title: "Shopping Campaigns",
      description: "Showcase your products directly in Google search results",
      icon: DollarSign,
      features: ["Product feed optimization", "Shopping ads setup", "Merchant Center management", "Price optimization"],
    },
    {
      title: "YouTube Advertising",
      description: "Reach your audience with engaging video advertisements",
      icon: Users,
      features: ["Video ad creation", "Audience targeting", "Campaign optimization", "View tracking"],
    },
  ]

  const managementProcess = [
    {
      step: "1",
      title: "Account Audit",
      description: "Comprehensive review of existing campaigns and opportunities",
      duration: "1 week",
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Custom Google Ads strategy aligned with your business goals",
      duration: "1 week",
    },
    {
      step: "3",
      title: "Campaign Setup",
      description: "Create and launch optimized campaigns with proper tracking",
      duration: "1-2 weeks",
    },
    {
      step: "4",
      title: "Optimization & Reporting",
      description: "Continuous optimization and detailed performance reporting",
      duration: "Ongoing",
    },
  ]

  const results = [
    {
      metric: "Average ROAS",
      value: "4.2x",
      description: "Return on ad spend across all campaigns",
    },
    {
      metric: "Cost Reduction",
      value: "35%",
      description: "Average decrease in cost per acquisition",
    },
    {
      metric: "Conversion Rate",
      value: "8.5%",
      description: "Average conversion rate improvement",
    },
    {
      metric: "Quality Score",
      value: "8.2/10",
      description: "Average Google Ads quality score",
    },
  ]

  const industries = [
    { name: "E-commerce", campaigns: "150+", avgROAS: "5.2x" },
    { name: "Healthcare", campaigns: "80+", avgROAS: "3.8x" },
    { name: "Legal Services", campaigns: "60+", avgROAS: "4.5x" },
    { name: "Home Services", campaigns: "120+", avgROAS: "6.1x" },
    { name: "SaaS", campaigns: "45+", avgROAS: "3.2x" },
    { name: "Real Estate", campaigns: "90+", avgROAS: "4.8x" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700 mb-6">
              <Target className="mr-2 h-4 w-4" />
              Google Ads Management
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Maximize ROI with{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Expert Google Ads
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Drive qualified traffic, increase conversions, and grow your business with our data-driven Google Ads
              management. Our certified experts optimize every dollar of your ad spend for maximum return.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Get Free Account Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 hover:bg-green-50 bg-transparent">
                View Success Stories
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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
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

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Google Ads Management Packages
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Transparent pricing with no hidden fees - pay only for results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {adPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.popular ? "ring-2 ring-blue-500 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 text-sm font-semibold">
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
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Management Fee:</span>
                      <span className="text-2xl font-bold text-gray-900">{pkg.managementFee}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Setup Fee:</span>
                      <span className="text-lg font-semibold text-gray-700">{pkg.setupFee}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Min. Ad Spend:</span>
                      <span className="text-lg font-semibold text-gray-700">
                        {pkg.minSpend}
                        {pkg.period}
                      </span>
                    </div>
                  </div>
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
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
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
              All packages include free account audit, setup assistance, and 30-day performance guarantee
            </p>
            <Button variant="outline" size="lg">
              Need Custom Pricing? Let's Talk
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Google Ads Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive Google Ads management to drive qualified traffic and conversions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {adServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
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
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Management Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Proven methodology for Google Ads success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4">
            {managementProcess.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-xs">
                    {item.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Industries We Serve
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Proven success across diverse business sectors
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Campaigns:</span>
                      <span className="text-sm font-medium">{industry.campaigns}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Avg. ROAS:</span>
                      <span className="text-lg font-bold text-green-600">{industry.avgROAS}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">What's Included</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Everything you need for successful Google Ads campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {[
              "Google Ads certified experts",
              "Custom campaign strategy",
              "Keyword research & selection",
              "Ad copy creation & testing",
              "Landing page optimization",
              "Bid management & optimization",
              "Conversion tracking setup",
              "Monthly performance reports",
              "Dedicated account manager",
              "24/7 campaign monitoring",
              "A/B testing & optimization",
              "Competitor analysis",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Scale Your Business?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-green-100">
              Get a free Google Ads audit and discover how we can improve your campaign performance
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Get Free Account Audit
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
