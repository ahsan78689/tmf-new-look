import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Palette, Settings, Shield, CheckCircle, ArrowRight, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function WordPressDevelopmentPage() {
  const wordpressServices = [
    {
      title: "Custom WordPress Themes",
      description: "Unique, responsive themes tailored to your brand",
      icon: Palette,
      features: ["Custom design", "Mobile responsive", "SEO optimized", "Fast loading"],
      price: "Starting at $2,500",
    },
    {
      title: "WordPress Plugin Development",
      description: "Custom functionality to extend your WordPress site",
      icon: Code,
      features: ["Custom plugins", "Third-party integrations", "Performance optimization", "Security focused"],
      price: "Starting at $1,500",
    },
    {
      title: "WordPress Maintenance",
      description: "Keep your WordPress site secure and up-to-date",
      icon: Settings,
      features: ["Regular updates", "Security monitoring", "Backup management", "Performance optimization"],
      price: "Starting at $200/month",
    },
    {
      title: "WordPress Security",
      description: "Comprehensive security solutions for WordPress",
      icon: Shield,
      features: ["Security audits", "Malware removal", "Firewall setup", "SSL certificates"],
      price: "Starting at $500",
    },
  ]

  const wordpressTypes = [
    { type: "Business Websites", description: "Professional corporate sites", icon: "🏢" },
    { type: "E-commerce Stores", description: "WooCommerce online shops", icon: "🛒" },
    { type: "Blogs & News Sites", description: "Content-focused websites", icon: "📰" },
    { type: "Portfolio Sites", description: "Creative showcases", icon: "🎨" },
    { type: "Membership Sites", description: "Subscription-based platforms", icon: "👥" },
    { type: "Learning Management", description: "Educational platforms", icon: "📚" },
  ]

  const features = [
    "Custom WordPress theme development",
    "Responsive mobile-first design",
    "SEO optimization built-in",
    "Fast loading and performance",
    "User-friendly admin interface",
    "Plugin integration and customization",
    "Security hardening and protection",
    "Regular updates and maintenance",
    "Content management training",
    "Analytics and tracking setup",
    "Social media integration",
    "Contact forms and lead capture",
  ]

  const process = [
    {
      step: "1",
      title: "Planning & Strategy",
      description: "Define requirements and create development roadmap",
    },
    {
      step: "2",
      title: "Design & Development",
      description: "Create custom themes and implement functionality",
    },
    {
      step: "3",
      title: "Testing & Optimization",
      description: "Ensure quality, performance, and security",
    },
    {
      step: "4",
      title: "Launch & Training",
      description: "Deploy site and train your team",
    },
  ]

  const results = [
    { metric: "WordPress Sites", value: "300+", description: "Successfully delivered" },
    { metric: "Client Satisfaction", value: "96%", description: "Happy clients" },
    { metric: "Average Load Time", value: "1.8s", description: "Optimized performance" },
    { metric: "Security Score", value: "A+", description: "Top security rating" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <Globe className="mr-2 h-4 w-4" />
              WordPress Development
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Professional WordPress{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Build powerful, scalable WordPress websites with custom themes and functionality. Our WordPress experts
              create secure, fast, and user-friendly sites that are easy to manage.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Start WordPress Project
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
              WordPress Development Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive WordPress solutions for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {wordpressServices.map((service, index) => (
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

      {/* WordPress Types Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              WordPress Site Types
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              WordPress solutions for every type of website
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {wordpressTypes.map((type, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{type.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">{type.type}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{type.description}</p>
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
              Our WordPress Development Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Proven methodology for WordPress success
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

      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">What's Included</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Every WordPress project includes these essential features
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{feature}</span>
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
              Ready to Build Your WordPress Site?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              Let's create a powerful WordPress website that grows with your business
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start WordPress Project
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
