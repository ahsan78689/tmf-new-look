import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingBag, Target, Search, CheckCircle, ArrowRight, Package, Star, TrendingUp, Zap, Award, Users, CreditCard, ShoppingCart, Truck } from 'lucide-react'
import Link from "next/link"

export default function EcommerceContentWritingPage() {
  const ecommerceSolutions = [
    {
      platform: "Shopify",
      logo: "🛍️",
      description: "Complete Shopify store optimization",
      services: ["Product descriptions", "Collection pages", "Homepage copy", "Email templates"],
      clientCount: 150,
      avgIncrease: "+62%"
    },
    {
      platform: "WooCommerce",
      logo: "🔧",
      description: "WordPress e-commerce excellence",
      services: ["Product catalogs", "Category descriptions", "Checkout optimization", "Blog integration"],
      clientCount: 120,
      avgIncrease: "+58%"
    },
    {
      platform: "Magento",
      logo: "🏢",
      description: "Enterprise e-commerce solutions",
      services: ["Multi-store content", "B2B descriptions", "Advanced SEO", "Custom attributes"],
      clientCount: 80,
      avgIncrease: "+71%"
    },
    {
      platform: "Amazon",
      logo: "📦",
      description: "Marketplace optimization",
      services: ["Listing optimization", "A+ content", "Keyword research", "Competitor analysis"],
      clientCount: 200,
      avgIncrease: "+45%"
    }
  ]

  const conversionFunnel = [
    {
      stage: "Discovery",
      description: "Attract visitors with SEO-optimized content",
      content: ["Category descriptions", "Blog posts", "Landing pages"],
      conversionRate: "3-5%",
      color: "from-blue-500 to-blue-600"
    },
    {
      stage: "Interest",
      description: "Engage with compelling product stories",
      content: ["Product descriptions", "Feature highlights", "Customer reviews"],
      conversionRate: "15-25%",
      color: "from-green-500 to-green-600"
    },
    {
      stage: "Consideration",
      description: "Build trust with detailed information",
      content: ["Specifications", "Size guides", "FAQ sections"],
      conversionRate: "25-35%",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      stage: "Purchase",
      description: "Convert with persuasive checkout copy",
      content: ["Cart descriptions", "Checkout copy", "Trust signals"],
      conversionRate: "60-80%",
      color: "from-red-500 to-red-600"
    }
  ]

  const contentTypes = {
    products: [
      { name: "Fashion & Apparel", features: ["Size guides", "Material descriptions", "Style tips", "Care instructions"], icon: "👗" },
      { name: "Electronics & Tech", features: ["Technical specs", "Compatibility info", "Setup guides", "Warranty details"], icon: "📱" },
      { name: "Home & Garden", features: ["Room inspiration", "Dimensions", "Assembly guides", "Maintenance tips"], icon: "🏠" },
      { name: "Health & Beauty", features: ["Ingredient benefits", "Usage instructions", "Skin type guides", "Results timeline"], icon: "💄" },
      { name: "Sports & Fitness", features: ["Performance benefits", "Size charts", "Training tips", "Equipment care"], icon: "⚽" },
      { name: "Food & Beverage", features: ["Nutritional info", "Recipe suggestions", "Storage instructions", "Allergen warnings"], icon: "🍕" }
    ],
    pages: [
      { name: "Homepage", features: ["Hero sections", "Value propositions", "Featured products", "Trust signals"], icon: "🏠" },
      { name: "Category Pages", features: ["Category overviews", "Filter descriptions", "SEO content", "Navigation help"], icon: "📂" },
      { name: "Checkout Pages", features: ["Security messaging", "Process explanations", "Trust badges", "Support info"], icon: "💳" },
      { name: "About Pages", features: ["Brand story", "Team introductions", "Values & mission", "Company history"], icon: "ℹ️" }
    ]
  }

  const successMetrics = [
    { metric: "Cart Abandonment", before: "68%", after: "42%", improvement: "-26%" },
    { metric: "Average Order Value", before: "$85", after: "$127", improvement: "+49%" },
    { metric: "Conversion Rate", before: "2.1%", after: "3.8%", improvement: "+81%" },
    { metric: "Return Rate", before: "15%", after: "8%", improvement: "-47%" }
  ]

  const testimonials = [
    {
      company: "StyleHub Fashion",
      industry: "Fashion Retail",
      result: "+73% online sales",
      quote: "Our product descriptions went from basic to brilliant. Customers now understand exactly what they're buying.",
      author: "Jessica Martinez, E-commerce Director",
      products: 500
    },
    {
      company: "TechGear Pro",
      industry: "Electronics",
      result: "+56% conversion rate",
      quote: "Complex tech products are now easy to understand. Our return rates dropped significantly.",
      author: "David Kim, Marketing Manager",
      products: 1200
    },
    {
      company: "HomeStyle Living",
      industry: "Home Decor",
      result: "+64% average order value",
      quote: "The lifestyle-focused copy helps customers envision our products in their homes.",
      author: "Sarah Thompson, Founder",
      products: 800
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Platform Focus */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 mb-8">
              <ShoppingBag className="mr-2 h-4 w-4" />
              E-commerce Content Specialists
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Content That{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sells Online
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your e-commerce store with content that converts browsers into buyers, 
              reduces returns, and builds customer loyalty across all platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Boost E-commerce Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
                View Store Examples
              </Button>
            </div>

            {/* Platform Logos */}
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl">🛍️</div>
              <div className="text-2xl">🔧</div>
              <div className="text-2xl">🏢</div>
              <div className="text-2xl">📦</div>
              <div className="text-2xl">🛒</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Platform-Specific Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Optimized content for every major e-commerce platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ecommerceSolutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{solution.logo}</div>
                      <div>
                        <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                          {solution.platform}
                        </CardTitle>
                        <CardDescription className="text-base">{solution.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-700 mb-2">{solution.avgIncrease}</Badge>
                      <div className="text-sm text-gray-600">{solution.clientCount} clients</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {solution.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                        {service}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 group-hover:bg-purple-600 transition-colors">
                    Get {solution.platform} Optimization
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Funnel */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The E-commerce Conversion Funnel
            </h2>
            <p className="text-lg text-gray-600">
              Strategic content for every stage of the customer journey
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conversionFunnel.map((stage, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stage.color}`}></div>
                  <CardContent className="p-6">
                    <div className="text-lg font-bold text-gray-900 mb-2">{stage.stage}</div>
                    <div className="text-sm text-gray-600 mb-4">{stage.description}</div>
                    
                    <div className="space-y-2 mb-4">
                      {stage.content.map((content, contentIndex) => (
                        <div key={contentIndex} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {content}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Conversion Rate</div>
                      <div className="text-xl font-bold text-purple-600">{stage.conversionRate}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Types with Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive E-commerce Content
            </h2>
            <p className="text-lg text-gray-600">
              From products to pages, we've got your entire store covered
            </p>
          </div>

          <Tabs defaultValue="products" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="products">Product Content</TabsTrigger>
              <TabsTrigger value="pages">Store Pages</TabsTrigger>
            </TabsList>
            
            <TabsContent value="products">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contentTypes.products.map((product, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{product.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pages">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contentTypes.pages.map((page, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{page.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {page.name}
                      </h3>
                      <div className="space-y-2">
                        {page.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Measurable E-commerce Results
            </h2>
            <p className="text-lg text-gray-600">
              See the impact of professional e-commerce content
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{metric.metric}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Before:</span>
                        <span className="font-semibold text-red-600">{metric.before}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">After:</span>
                        <span className="font-semibold text-green-600">{metric.after}</span>
                      </div>
                      <div className="pt-2 border-t">
                        <Badge className={`${metric.improvement.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {metric.improvement}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              E-commerce Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real online stores
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.company}</h3>
                      <p className="text-sm text-gray-600">{testimonial.industry}</p>
                      <p className="text-xs text-gray-500">{testimonial.products} products optimized</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 font-bold">
                      {testimonial.result}
                    </Badge>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="flex space-x-1 mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{testimonial.author}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Store Audit Offer */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your E-commerce Store?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get a free store content audit and discover how to increase your conversion rates by up to 60%
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">FREE</div>
                  <div className="text-purple-100">Store Audit</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24HR</div>
                  <div className="text-purple-100">Turnaround</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-purple-100">Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Free Store Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/digital-marketing/content-production">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
