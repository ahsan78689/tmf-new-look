import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, DollarSign, TrendingUp, CheckCircle, ArrowRight, Zap, BarChart3, Users, Clock, Award, Star, Crown, Search, Eye, ShoppingCart, Play } from 'lucide-react'
import Link from "next/link"

export default function GoogleAdsPage() {
  const adTypes = [
    {
      name: "Search Ads",
      description: "Target customers actively searching for your products or services",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      features: ["Keyword targeting", "Ad extensions", "Location targeting", "Device targeting"],
    },
    {
      name: "Display Ads",
      description: "Build brand awareness with visual ads across Google's network",
      icon: Eye,
      color: "from-green-500 to-green-600",
      features: ["Visual creatives", "Audience targeting", "Remarketing", "Placement targeting"],
    },
    {
      name: "Shopping Ads",
      description: "Showcase your products directly in Google search results",
      icon: ShoppingCart,
      color: "from-purple-500 to-purple-600",
      features: ["Product listings", "Price comparison", "Merchant Center", "Feed optimization"],
    },
    {
      name: "YouTube Ads",
      description: "Reach your audience with engaging video advertisements",
      icon: Play,
      color: "from-red-500 to-red-600",
      features: ["Video campaigns", "TrueView ads", "Bumper ads", "Discovery ads"],
    },
  ]

  const packages = [
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
      badge: "Premium",
    },
  ]

  const stats = [
    {
      value: "4.2x",
      label: "Average ROAS",
      description: "Return on ad spend",
      icon: DollarSign,
    },
    {
      value: "35%",
      label: "Cost Reduction",
      description: "Average CPC decrease",
      icon: TrendingUp,
    },
    {
      value: "8.5%",
      label: "Conversion Rate",
      description: "Average improvement",
      icon: Target,
    },
    {
      value: "8.2/10",
      label: "Quality Score",
      description: "Average quality score",
      icon: Award,
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

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Online Retailer",
      content: "Our Google Ads ROAS increased by 420% within 3 months. The team's expertise in campaign optimization is outstanding.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=JM",
    },
    {
      name: "Robert Kim",
      company: "SaaS Startup",
      content: "Professional Google Ads management that delivers results. Our cost per acquisition dropped by 60% while increasing conversions.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40&text=RK",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-green-700 mb-8 shadow-lg">
              <Target className="mr-2 h-4 w-4" />
              Google Ads Management
              <Badge className="ml-2 bg-green-600 text-white">Certified Experts</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Maximize ROI with{" "}
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expert Google Ads
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Drive qualified traffic, increase conversions, and grow your business with our data-driven Google Ads
              management. Our certified experts optimize every dollar of your ad spend for maximum return.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Free Account Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-200 hover:bg-green-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-500">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Types Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Google Ads Campaign Types
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive Google Ads management across all campaign types
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {adTypes.map((adType, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start mb-6">
                    <div className="relative mr-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${adType.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <adType.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        {adType.name}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {adType.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3">
                    {adType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Google Ads Management Packages
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Transparent pricing with no hidden fees - pay only for results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
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
                    {pkg.popular ? <Crown className="h-6 w-6" /> : <Target className="h-6 w-6" />}
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

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Proven success across diverse business sectors
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              See how our Google Ads expertise drives real business results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Scale Your Business?
            </h2>
            <p className="mt-4 text-lg leading-8 text-green-100">
              Get a free Google Ads audit and discover how we can improve your campaign performance
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Award className="mr-2 h-5 w-5" />
                Get Free Account Audit
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/digital-marketing/digital-advertising">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
