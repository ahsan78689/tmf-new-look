import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, Smartphone, Monitor, CheckCircle, ArrowRight, Users, Award, Zap } from "lucide-react"
import Link from "next/link"

export default function WebAppDesignPage() {
  const benefits = [
    "User-centered design approach",
    "Mobile-first responsive design",
    "Modern and intuitive interfaces",
    "Improved user engagement",
    "Higher conversion rates",
    "Brand consistency across platforms",
  ]

  const process = [
    {
      step: "1",
      title: "Discovery & Research",
      description: "Understanding your users, goals, and market requirements",
    },
    {
      step: "2",
      title: "Wireframing & Prototyping",
      description: "Creating interactive prototypes and user flow mapping",
    },
    {
      step: "3",
      title: "Visual Design",
      description: "Crafting beautiful, on-brand visual designs",
    },
    {
      step: "4",
      title: "Testing & Refinement",
      description: "User testing and iterative design improvements",
    },
  ]

  const services = [
    {
      title: "Website Design",
      description: "Modern, responsive websites that engage and convert visitors",
      icon: Monitor,
    },
    {
      title: "Mobile App Design",
      description: "Native and cross-platform mobile app interfaces",
      icon: Smartphone,
    },
    {
      title: "Web Application Design",
      description: "Complex web application interfaces and dashboards",
      icon: Palette,
    },
  ]

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Web Design",
      description: "Modern e-commerce platform with intuitive shopping experience",
    },
    {
      title: "Healthcare App",
      category: "Mobile Design",
      description: "Patient management app with clean, accessible interface",
    },
    {
      title: "SaaS Dashboard",
      category: "Web App",
      description: "Analytics dashboard with data visualization",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 mb-6">
              <Palette className="mr-2 h-4 w-4" />
              Web & App Design Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Beautiful Design That{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Converts
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Create stunning web and mobile app designs that provide exceptional user experiences. Our design team
              crafts interfaces that are both beautiful and highly functional.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Start Design Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 bg-transparent">
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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-600">Design Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Award className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900">40%</div>
              <div className="text-sm text-gray-600">Average Conversion Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Design Services</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive design solutions for web and mobile platforms
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Design Process</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              A proven methodology for creating exceptional user experiences
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Work</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Examples of our design work across different industries
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {portfolio.map((project, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.description}</p>
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
              Why Choose Our Design Services?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Benefits of working with our experienced design team</p>
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
              Ready to Create Amazing Designs?
            </h2>
            <p className="mt-4 text-lg leading-8 text-purple-100">
              Let's discuss your design project and create something beautiful together
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Design Project
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
