import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ShoppingCart,
  Package,
  Search,
  CheckCircle,
  ArrowRight,
  Users,
  Star,
  Zap,
  Globe,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function EcommerceSEOPage() {
  const services = [
    {
      icon: Package,
      title: "Product Page Optimization",
      description: "Optimize product titles, descriptions, images, and schema markup for better search visibility",
      features: [
        "Product title optimization",
        "Meta descriptions",
        "Image alt tags",
        "Product schema markup",
        "User-generated content integration",
      ],
    },
    {
      icon: Search,
      title: "Category Page SEO",
      description: "Structure and optimize category pages to rank for high-volume commercial keywords",
      features: [
        "Category page structure",
        "Faceted navigation SEO",
        "Internal linking strategy",
        "Category descriptions",
        "Breadcrumb optimization",
      ],
    },
    {
      icon: Zap,
      title: "Technical E-commerce SEO",
      description: "Fix technical issues specific to e-commerce sites for better crawling and indexing",
      features: [
        "Site speed optimization",
        "Mobile optimization",
        "Duplicate content fixes",
        "URL structure",
        "XML sitemaps",
      ],
    },
    {
      icon: Globe,
      title: "Shopping Feed Optimization",
      description: "Optimize product feeds for Google Shopping, Bing Shopping, and other platforms",
      features: [
        "Google Shopping optimization",
        "Product feed management",
        "Shopping campaign setup",
        "Feed quality improvements",
        "Merchant Center optimization",
      ],
    },
  ]

  const benefits = [
    "Increased organic product visibility",
    "Higher conversion rates from search",
    "Better product page rankings",
    "Improved shopping feed performance",
    "Enhanced user experience",
    "Reduced cart abandonment",
    "Higher average order value",
    "Better mobile shopping experience",
  ]

  const packages = [
    {
      name: "Starter Store",
      price: "$1,499",
      period: "/month",
      description: "Perfect for small to medium e-commerce stores",
      products: "Up to 500 products",
      features: [
        "Product page optimization (50 products/month)",
        "Category page optimization (10 pages)",
        "Technical SEO audit & fixes",
        "Google Shopping setup",
        "Basic schema markup",
        "Monthly reporting",
        "Email support",
      ],
      cta: "Start Growing Sales",
      popular: false,
    },
    {
      name: "Growing Business",
      price: "$2,999",
      period: "/month",
      popular: true,
      description: "Ideal for growing e-commerce businesses",
      products: "Up to 2,000 products",
      features: [
        "Everything in Starter Store",
        "Product page optimization (150 products/month)",
        "Category page optimization (25 pages)",
        "Advanced technical SEO",
        "Shopping feed optimization",
        "Content marketing strategy",
        "Link building for e-commerce",
        "Bi-weekly reporting",
        "Phone & email support",
      ],
      cta: "Scale Your Store",
    },
    {
      name: "Enterprise",
      price: "$5,999",
      period: "/month",
      description: "For large e-commerce operations",
      products: "Unlimited products",
      features: [
        "Everything in Growing Business",
        "Unlimited product optimization",
        "Advanced category optimization",
        "Multi-language SEO",
        "International SEO strategy",
        "Custom content creation",
        "Advanced shopping campaigns",
        "Weekly reporting & strategy calls",
        "Dedicated account manager",
        "Priority support",
      ],
      cta: "Dominate Your Market",
      popular: false,
    },
  ]

  const caseStudies = [
    {
      client: "Fashion Forward",
      industry: "Fashion E-commerce",
      challenge: "Low product visibility and poor conversion rates",
      results: {
        traffic: "+450%",
        revenue: "+380%",
        rankings: "200+ products in top 10",
        timeframe: "10 months",
      },
      testimonial:
        "Our online sales have exploded since implementing their e-commerce SEO strategy. We're now ranking for thousands of product keywords.",
      author: "Emma Thompson, E-commerce Manager",
    },
    {
      client: "Tech Gadgets Pro",
      industry: "Electronics",
      challenge: "High competition and low organic visibility",
      results: {
        traffic: "+320%",
        revenue: "+275%",
        rankings: "150+ keywords in top 5",
        timeframe: "8 months",
      },
      testimonial:
        "The technical SEO improvements and product optimization have transformed our online presence. ROI has been incredible.",
      author: "James Wilson, Marketing Director",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Martinez",
      company: "Home Decor Plus",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Our e-commerce SEO results have been phenomenal. Organic revenue increased by 300% in just 6 months.",
    },
    {
      name: "Michael Chang",
      company: "Sports Equipment Co.",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "The product page optimizations and shopping feed improvements have dramatically increased our visibility and sales.",
    },
    {
      name: "Lisa Rodriguez",
      company: "Beauty Essentials",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Best investment we've made. Our products now rank on the first page for competitive keywords.",
    },
  ]

  const ecommerceFeatures = [
    {
      title: "Advanced Product Schema",
      description: "Implement rich snippets for products including reviews, pricing, and availability",
    },
    {
      title: "Inventory-Based SEO",
      description: "Optimize based on stock levels and seasonal trends",
    },
    {
      title: "Multi-Currency Optimization",
      description: "SEO strategies for international e-commerce sites",
    },
    {
      title: "Review & Rating Optimization",
      description: "Leverage customer reviews for better search visibility",
    },
    {
      title: "Seasonal Campaign Planning",
      description: "Prepare for peak shopping seasons with targeted SEO",
    },
    {
      title: "Competitor Price Monitoring",
      description: "Track competitor pricing and adjust SEO strategy accordingly",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 mb-8 animate-fade-in">
              <ShoppingCart className="mr-2 h-4 w-4" />
              E-commerce SEO Specialists
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
              E-commerce SEO That{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Drives Sales
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Maximize your online store's visibility and revenue with our specialized e-commerce SEO services. We
              optimize product pages, category structures, and technical elements to drive qualified traffic that
              converts.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get E-commerce Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-200 hover:bg-orange-50 bg-transparent px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <DollarSign className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">400%</div>
              <div className="text-sm text-gray-600 font-medium">Average Revenue Increase</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Package className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-sm text-gray-600 font-medium">Products Optimized</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-sm text-gray-600 font-medium">E-commerce Clients</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our E-commerce SEO Services
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Comprehensive optimization strategies designed specifically for online stores
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Benefits of E-commerce SEO
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Why specialized e-commerce SEO is essential for online store success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
              >
                <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge variant="outline" className="mb-4 text-white border-white/20 bg-white/10 backdrop-blur-sm">
              Success Stories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">E-commerce Success Stories</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              See how our e-commerce SEO strategies have transformed online stores
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl text-white">{study.client}</CardTitle>
                      <Badge variant="secondary" className="mt-2 bg-orange-600/20 text-orange-300 border-orange-500/30">
                        {study.industry}
                      </Badge>
                    </div>
                    <Badge className="bg-orange-600 text-white shadow-lg">{study.results.timeframe}</Badge>
                  </div>
                  <p className="text-gray-300">{study.challenge}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">{study.results.traffic}</div>
                      <div className="text-xs text-gray-400">Traffic Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{study.results.revenue}</div>
                      <div className="text-xs text-gray-400">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{study.results.rankings}</div>
                      <div className="text-xs text-gray-400">Top Rankings</div>
                    </div>
                  </div>
                  <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-300">
                    "{study.testimonial}"
                  </blockquote>
                  <p className="text-sm text-gray-400 mt-2">- {study.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              E-commerce SEO Packages
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Tailored packages designed for different sizes of online stores
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:scale-105 ${
                  pkg.popular
                    ? "border-orange-500 shadow-2xl bg-gradient-to-br from-orange-50 to-red-50"
                    : "border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-1 shadow-lg">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <p className="text-gray-600 mt-2">{pkg.description}</p>
                  <Badge variant="outline" className="mt-2 mx-auto border-orange-200 text-orange-600">
                    {pkg.products}
                  </Badge>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 text-lg">{pkg.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-3 text-lg transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl"
                        : "bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Advanced E-commerce Features
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Additional optimizations that set your online store apart from the competition
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecommerceFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What E-commerce Clients Say</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Hear from online store owners who have achieved remarkable growth
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 ring-2 ring-orange-200">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-orange-600 to-red-600 text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <ShoppingCart className="mx-auto h-16 w-16 text-white mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Boost Your Online Sales?
            </h2>
            <p className="mt-6 text-xl leading-8 text-orange-100">
              Get a comprehensive e-commerce SEO audit and discover how we can optimize your online store for maximum
              visibility and revenue.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get E-commerce Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                <Link href="/digital-marketing/organic-search">View All SEO Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
