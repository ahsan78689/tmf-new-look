import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Zap, Shield, CheckCircle, ArrowRight, CreditCard, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function EcommerceDevelopmentPage() {
  const platforms = [
    {
      name: "Shopify",
      description: "Leading e-commerce platform for businesses of all sizes",
      features: ["Easy to use", "Mobile responsive", "App ecosystem", "Payment processing"],
      icon: "🛍️",
    },
    {
      name: "WooCommerce",
      description: "Flexible WordPress-based e-commerce solution",
      features: ["WordPress integration", "Customizable", "SEO friendly", "Cost effective"],
      icon: "🔧",
    },
    {
      name: "Magento",
      description: "Enterprise-level e-commerce platform",
      features: ["Scalable", "Multi-store", "B2B features", "Advanced reporting"],
      icon: "🏢",
    },
    {
      name: "Custom Solutions",
      description: "Tailored e-commerce solutions for unique requirements",
      features: ["Fully customized", "Scalable architecture", "Third-party integrations", "Performance optimized"],
      icon: "⚙️",
    },
  ]

  const features = [
    {
      title: "Responsive Design",
      description: "Mobile-first design that works perfectly on all devices",
      icon: Zap,
    },
    {
      title: "Secure Payments",
      description: "Multiple payment gateways with SSL encryption",
      icon: Shield,
    },
    {
      title: "Inventory Management",
      description: "Advanced inventory tracking and management systems",
      icon: ShoppingCart,
    },
    {
      title: "SEO Optimization",
      description: "Built-in SEO features for better search visibility",
      icon: TrendingUp,
    },
    {
      title: "Analytics Integration",
      description: "Comprehensive tracking and reporting capabilities",
      icon: Users,
    },
    {
      title: "Payment Processing",
      description: "Secure and reliable payment processing solutions",
      icon: CreditCard,
    },
  ]

  const services = [
    "Custom e-commerce website development",
    "Platform migration and upgrades",
    "Third-party integrations",
    "Payment gateway setup",
    "Inventory management systems",
    "Multi-vendor marketplace development",
    "Mobile app development",
    "Performance optimization",
    "Security implementation",
    "Ongoing maintenance and support",
  ]

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Understanding your business requirements and target audience",
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description: "Creating user-friendly designs and interactive prototypes",
    },
    {
      step: "3",
      title: "Development",
      description: "Building your e-commerce store with best practices",
    },
    {
      step: "4",
      title: "Testing & Launch",
      description: "Thorough testing and smooth launch of your store",
    },
    {
      step: "5",
      title: "Support & Optimization",
      description: "Ongoing support and performance optimization",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700 mb-6">
              <ShoppingCart className="mr-2 h-4 w-4" />
              E-commerce Development
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              E-commerce Stores That{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Drive Sales
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Build powerful online stores that convert visitors into customers. Our e-commerce development services
              create fast, secure, and user-friendly shopping experiences that grow your business.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Start E-commerce Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 hover:bg-green-50 bg-transparent">
                View Portfolio
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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600">E-commerce Stores Built</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">250%</div>
              <div className="text-sm text-gray-600">Average Sales Increase</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">2s</div>
              <div className="text-sm text-gray-600">Average Load Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">E-commerce Platforms</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We work with all major e-commerce platforms to find the perfect fit for your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">E-commerce Features</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Essential features that make your online store successful
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our E-commerce Services</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive e-commerce development services for your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Development Process</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              A proven methodology for building successful e-commerce stores
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white text-lg font-bold">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Launch Your Online Store?
            </h2>
            <p className="mt-4 text-lg leading-8 text-green-100">
              Let's build an e-commerce store that drives sales and grows your business
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start E-commerce Project
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/design-development">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
