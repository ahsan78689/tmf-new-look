import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, CreditCard, Truck, BarChart3, CheckCircle, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export default function EcommerceDevelopmentPage() {
  const ecommerceServices = [
    {
      title: "Custom E-commerce Websites",
      description: "Fully customized online stores built from scratch",
      icon: ShoppingCart,
      features: ["Custom design", "Mobile responsive", "SEO optimized", "Fast loading"],
      price: "Starting at $5,000",
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple options",
      icon: CreditCard,
      features: ["Multiple payment methods", "Secure transactions", "PCI compliance", "Fraud protection"],
      price: "Starting at $800",
    },
    {
      title: "Inventory Management",
      description: "Advanced inventory tracking and management systems",
      icon: Truck,
      features: ["Real-time tracking", "Low stock alerts", "Multi-location support", "Automated reordering"],
      price: "Starting at $1,200",
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive e-commerce analytics and insights",
      icon: BarChart3,
      features: ["Sales reports", "Customer analytics", "Performance tracking", "ROI analysis"],
      price: "Starting at $600",
    },
  ]

  const platforms = [
    { name: "Shopify", description: "Popular e-commerce platform", icon: "🛍️", bestFor: "Quick setup" },
    { name: "WooCommerce", description: "WordPress e-commerce", icon: "🔧", bestFor: "Flexibility" },
    { name: "Magento", description: "Enterprise solution", icon: "🏢", bestFor: "Large stores" },
    { name: "Custom Build", description: "Tailored solution", icon: "⚡", bestFor: "Unique needs" },
    { name: "BigCommerce", description: "All-in-one platform", icon: "📦", bestFor: "Scalability" },
    { name: "Squarespace", description: "Design-focused", icon: "🎨", bestFor: "Visual appeal" },
  ]

  const features = [
    "Responsive mobile-first design",
    "Secure payment processing",
    "Inventory management system",
    "Order management dashboard",
    "Customer account portal",
    "Product catalog management",
    "Shopping cart and checkout",
    "Email marketing integration",
    "SEO optimization",
    "Analytics and reporting",
    "Multi-currency support",
    "Shipping calculator integration",
  ]

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Understanding your business needs and e-commerce goals",
    },
    {
      step: "2",
      title: "Design & UX",
      description: "Creating user-friendly designs that convert visitors",
    },
    {
      step: "3",
      title: "Development",
      description: "Building your e-commerce store with robust functionality",
    },
    {
      step: "4",
      title: "Testing & Launch",
      description: "Quality assurance testing and successful store launch",
    },
  ]

  const results = [
    { metric: "E-commerce Sites", value: "200+", description: "Successfully launched" },
    { metric: "Average Revenue Increase", value: "250%", description: "After redesign" },
    { metric: "Conversion Rate", value: "4.2%", description: "Average store performance" },
    { metric: "Client Satisfaction", value: "98%", description: "Happy store owners" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 mb-6">
              <ShoppingCart className="mr-2 h-4 w-4" />
              E-commerce Development
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Build Your Online{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Store Empire
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Create a powerful e-commerce website that drives sales and grows your business. Our expert team builds
              custom online stores with advanced features, secure payments, and exceptional user experiences.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                Start E-commerce Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-200 hover:bg-emerald-50 bg-transparent">
                View Store Examples
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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
                  <Zap className="h-6 w-6" />
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
              E-commerce Development Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Complete e-commerce solutions to power your online business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {ecommerceServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">{service.price}</span>
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
              E-commerce Platforms
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              We work with all major e-commerce platforms
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-2">{platform.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{platform.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{platform.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {platform.bestFor}
                  </Badge>
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
              Our E-commerce Development Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Proven methodology for e-commerce success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-lg font-bold">
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

      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">What's Included</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Every e-commerce project includes these essential features
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Launch Your Online Store?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-emerald-100">
              Let's build an e-commerce website that drives sales and grows your business
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Start E-commerce Project
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
