import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Megaphone, Palette, Code, BarChart3, Smartphone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "SEO & Organic Search",
    description:
      "Boost your visibility with comprehensive SEO strategies that drive organic traffic and improve rankings.",
    href: "/digital-marketing/organic-search/seo-strategy",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description: "Maximize ROI with targeted PPC campaigns, social media ads, and strategic advertising solutions.",
    href: "/digital-marketing/digital-advertising/ppc-management",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create stunning, user-friendly designs that convert visitors into customers and enhance user experience.",
    href: "/design-development/ui-ux-design/web-app-design",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build robust, scalable websites and applications using the latest technologies and best practices.",
    href: "/design-development/development/website-development",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: BarChart3,
    title: "Content Marketing",
    description:
      "Engage your audience with compelling content that tells your story and drives meaningful connections.",
    href: "/digital-marketing/content-production/content-marketing",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Smartphone,
    title: "eCommerce Solutions",
    description: "Launch and optimize your online store with comprehensive eCommerce development and marketing.",
    href: "/design-development/development/ecommerce-development",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From strategy to execution, we provide end-to-end digital services that help your business thrive in the
            modern marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-purple-50 group-hover:border-purple-200 bg-transparent"
                  >
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
