import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Code, Search, Megaphone, Smartphone, ShoppingCart, BarChart3, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create stunning, user-friendly interfaces that convert visitors into customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build fast, secure, and scalable websites using modern technologies.",
      features: ["Responsive Design", "CMS Integration", "E-commerce", "Custom Development"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Reach your target audience with strategic digital marketing campaigns.",
      features: ["PPC Advertising", "Social Media", "Content Marketing", "Email Marketing"],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Develop native and cross-platform mobile applications.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Build powerful online stores that drive sales and growth.",
      features: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Track performance and make data-driven decisions.",
      features: ["Google Analytics", "Conversion Tracking", "Custom Reports", "ROI Analysis"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your website for speed, performance, and user experience.",
      features: ["Speed Optimization", "Core Web Vitals", "CDN Setup", "Caching"],
    },
  ]

  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We offer comprehensive digital solutions to help your business succeed online
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <CardHeader className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="mt-4 w-full justify-start p-0 text-purple-600 hover:text-purple-700">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
