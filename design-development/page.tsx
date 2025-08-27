import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Code, BookOpen, ArrowRight, Zap, Shield, Smartphone } from "lucide-react"
import Link from "next/link"

export default function DesignDevelopmentPage() {
  const services = [
    {
      category: "UI/UX Design",
      icon: Palette,
      description: "User-centered design that converts visitors into customers",
      color: "from-pink-500 to-rose-600",
      services: [
        {
          name: "Web & App Design",
          href: "/design-development/ui-ux-design/web-app-design",
          description: "Modern, responsive web and mobile app design",
        },
        {
          name: "eCommerce Store Design",
          href: "/design-development/ui-ux-design/ecommerce-store-design",
          description: "Conversion-focused online store design",
        },
        {
          name: "Wireframing & Prototyping",
          href: "/design-development/ui-ux-design/wireframing-prototyping",
          description: "Interactive prototypes and wireframes",
        },
        {
          name: "User Research & Testing",
          href: "/design-development/ui-ux-design/user-research-testing",
          description: "Data-driven design decisions",
        },
        {
          name: "Brand Identity Design",
          href: "/design-development/ui-ux-design/brand-identity-design",
          description: "Complete brand identity systems",
        },
        {
          name: "Design System Development",
          href: "/design-development/ui-ux-design/design-system-development",
          description: "Scalable design systems and guidelines",
        },
      ],
    },
    {
      category: "Development",
      icon: Code,
      description: "Robust, scalable development solutions for modern businesses",
      color: "from-blue-500 to-indigo-600",
      services: [
        {
          name: "Website Development",
          href: "/design-development/development/website-development",
          description: "Custom website development solutions",
        },
        {
          name: "eCommerce Development",
          href: "/design-development/development/ecommerce-development",
          description: "Powerful online store development",
        },
        {
          name: "Content Management System (CMS) Development",
          href: "/design-development/development/cms-development",
          description: "Custom CMS solutions",
        },
        {
          name: "Web Application Development",
          href: "/design-development/development/web-application-development",
          description: "Complex web application development",
        },
        {
          name: "Website Maintenance & Support",
          href: "/design-development/development/website-maintenance-support",
          description: "Ongoing support and maintenance",
        },
      ],
    },
  ]

  const stats = [
    { icon: Zap, label: "Average Load Time", value: "<2s" },
    { icon: Shield, label: "Security Score", value: "99%" },
    { icon: Smartphone, label: "Mobile Responsive", value: "100%" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 mb-6">
              <Palette className="mr-2 h-4 w-4" />
              Design & Development Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Beautiful Design Meets{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Powerful Development
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We create stunning, user-friendly websites and applications that not only look great but also deliver
              exceptional performance and user experience.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Start Your Project
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
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 1 ? "bg-gray-50" : ""}`}>
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} text-white`}
              >
                <category.icon className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{category.category}</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <CardHeader className="relative pb-4">
                    <CardTitle className="text-lg font-semibold text-gray-900">{service.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative pt-0">
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between p-0 text-purple-600 hover:text-purple-700"
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Learn Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Learn Design & Development</h2>
            <p className="mt-4 text-lg leading-8 text-purple-100">
              Explore our comprehensive resources on design principles, development best practices, and industry
              insights.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/design-development/learn">
                  Explore Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
