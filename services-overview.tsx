import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Megaphone, PenTool, Code, Palette, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesOverview() {
  const services = [
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to grow your online presence",
      features: ["SEO Strategy", "PPC Management", "Content Marketing", "Social Media"],
      href: "/digital-marketing",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Palette,
      title: "Design & Development",
      description: "Beautiful, functional websites and applications that convert visitors",
      features: ["UI/UX Design", "Web Development", "E-commerce", "Mobile Apps"],
      href: "/design-development",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Code,
      title: "Technology Stack",
      description: "Modern technologies and tools for scalable digital solutions",
      features: ["React & Node.js", "WordPress & Shopify", "Analytics Tools", "Design Software"],
      href: "/technology",
      color: "from-blue-500 to-cyan-600",
    },
  ]

  const subServices = [
    {
      category: "Organic Search",
      services: ["SEO Strategy", "Keyword Research", "Technical SEO", "Local SEO"],
      icon: Search,
    },
    {
      category: "Digital Advertising",
      services: ["PPC Management", "Google Ads", "Social Media Ads", "Remarketing"],
      icon: Megaphone,
    },
    {
      category: "Content Production",
      services: ["Website Content", "Blog Writing", "SEO Content", "Social Media Content"],
      icon: PenTool,
    },
    {
      category: "UI/UX Design",
      services: ["Web Design", "App Design", "User Research", "Prototyping"],
      icon: Palette,
    },
    {
      category: "Development",
      services: ["Website Development", "E-commerce", "CMS Development", "Web Apps"],
      icon: Code,
    },
    {
      category: "Analytics & Tools",
      services: ["Google Analytics", "Search Console", "HubSpot", "Performance Tracking"],
      icon: BarChart3,
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">Our Services</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Comprehensive digital solutions designed to help your business succeed online
          </p>
        </div>

        {/* Main Service Categories */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 mb-16 lg:mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <CardHeader className="relative">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.color} text-white`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between p-0 text-purple-600 hover:text-purple-700"
                >
                  <Link href={service.href}>
                    Explore Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Sub-Services */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Specialized Services</h3>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Deep expertise across all areas of digital marketing and development
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subServices.map((service, index) => (
            <Card key={index} className="border-0 bg-gray-50 hover:bg-white transition-colors duration-200">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                    <service.icon className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{service.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 text-sm text-gray-600">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-gray-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
