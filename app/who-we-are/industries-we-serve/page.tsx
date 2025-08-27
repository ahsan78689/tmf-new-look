import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  Car,
  Home,
  Utensils,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function IndustriesWeServePage() {
  const industries = [
    {
      icon: Building2,
      title: "Technology & Software",
      description:
        "SaaS companies, tech startups, and software development firms looking to scale their digital presence.",
      services: ["Lead Generation", "Content Marketing", "Technical SEO", "Conversion Optimization"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Online stores and retail businesses seeking to increase sales and improve their online visibility.",
      services: ["E-commerce SEO", "PPC Management", "Social Media Advertising", "Product Photography"],
    },
    {
      icon: Heart,
      title: "Healthcare & Medical",
      description:
        "Medical practices, healthcare providers, and wellness companies building trust and patient relationships.",
      services: ["Local SEO", "Reputation Management", "HIPAA-Compliant Marketing", "Patient Acquisition"],
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description:
        "Educational institutions, online course creators, and training organizations expanding their reach.",
      services: ["Content Strategy", "Social Media Management", "Lead Nurturing", "Brand Development"],
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Car dealerships, auto repair shops, and automotive service providers driving more customers.",
      services: ["Local Marketing", "Review Management", "Inventory Marketing", "Service Promotion"],
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Real estate agents, property developers, and home service providers generating quality leads.",
      services: ["Local SEO", "Property Marketing", "Lead Generation", "Virtual Tours"],
    },
    {
      icon: Utensils,
      title: "Food & Hospitality",
      description: "Restaurants, hotels, and hospitality businesses attracting more customers and bookings.",
      services: ["Local Marketing", "Social Media", "Online Ordering", "Reputation Management"],
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Law firms, accounting practices, and consulting businesses establishing thought leadership.",
      services: ["Content Marketing", "LinkedIn Marketing", "SEO", "Lead Generation"],
    },
  ]

  const whyChooseUs = [
    "Industry-specific expertise and strategies",
    "Deep understanding of target audiences",
    "Compliance with industry regulations",
    "Proven track record across verticals",
    "Customized solutions for each industry",
    "Ongoing support and optimization",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Industries We{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Proudly Serve
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We bring specialized expertise to diverse industries, understanding the unique challenges and
              opportunities each sector faces in the digital landscape.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Discuss Your Industry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Solutions for Every Industry
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our industry-focused approach ensures your marketing strategy aligns with your sector's best practices
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                      <industry.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Industry Expertise?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We don't just provide generic marketing solutions - we understand your industry inside and out
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">8+</div>
              <div className="text-sm text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">7</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Grow Your Industry Presence?
            </h2>
            <p className="mt-4 text-lg leading-8 text-purple-100">
              Let's discuss how our industry expertise can help your business achieve its digital marketing goals
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Schedule Consultation
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/who-we-are/case-studies">View Industry Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
