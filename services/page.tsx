import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Code, Search, Megaphone, Smartphone, ShoppingCart, BarChart3, Zap, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Design & Development",
      description: "Complete design and development solutions for your digital presence",
      services: [
        {
          icon: Palette,
          name: "UI/UX Design",
          description: "User-centered design that converts",
          features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
        },
        {
          icon: Code,
          name: "Web Development",
          description: "Modern, fast, and secure websites",
          features: ["Responsive Design", "CMS Integration", "Custom Development", "API Integration"],
        },
        {
          icon: Smartphone,
          name: "Mobile App Development",
          description: "Native and cross-platform mobile apps",
          features: ["iOS Development", "Android Development", "React Native", "Flutter"],
        },
        {
          icon: ShoppingCart,
          name: "E-commerce Development",
          description: "Powerful online stores that drive sales",
          features: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"],
        },
      ],
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence",
      services: [
        {
          icon: Search,
          name: "SEO Services",
          description: "Improve your search engine rankings",
          features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
        },
        {
          icon: Megaphone,
          name: "PPC Management",
          description: "Targeted advertising campaigns",
          features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "ROI Tracking"],
        },
        {
          icon: BarChart3,
          name: "Social Media Marketing",
          description: "Build your brand on social platforms",
          features: ["Content Strategy", "Community Management", "Paid Social", "Analytics"],
        },
        {
          icon: Zap,
          name: "Content Marketing",
          description: "Engaging content that drives results",
          features: ["Blog Writing", "Video Content", "Email Marketing", "Content Strategy"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 1 ? "bg-gray-50" : ""}`}>
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{category.title}</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <CardHeader className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{service.name}</CardTitle>
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
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  )
}
