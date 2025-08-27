import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, BarChart3, BookOpen, ArrowRight, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function TechnologyPage() {
  const techCategories = [
    {
      category: "Design Tools",
      icon: Palette,
      description: "Professional design software and tools for creating stunning visuals",
      color: "from-pink-500 to-rose-600",
      technologies: [
        {
          name: "Figma",
          description: "Collaborative interface design tool",
          expertise: "Expert",
          href: "/technology/design/figma",
        },
        {
          name: "Adobe XD",
          description: "User experience design and prototyping",
          expertise: "Advanced",
          href: "/technology/design/adobe-xd",
        },
        {
          name: "Sketch",
          description: "Digital design toolkit for Mac",
          expertise: "Advanced",
          href: "/technology/design/sketch",
        },
        {
          name: "InVision",
          description: "Digital product design platform",
          expertise: "Intermediate",
          href: "/technology/design/invision",
        },
      ],
    },
    {
      category: "Development",
      icon: Code,
      description: "Modern development frameworks and technologies",
      color: "from-blue-500 to-indigo-600",
      technologies: [
        {
          name: "React",
          description: "JavaScript library for building user interfaces",
          expertise: "Expert",
          href: "/technology/development/react",
        },
        {
          name: "Node.js",
          description: "JavaScript runtime for server-side development",
          expertise: "Expert",
          href: "/technology/development/nodejs",
        },
        {
          name: "WordPress",
          description: "Content management system",
          expertise: "Expert",
          href: "/technology/development/wordpress",
        },
        {
          name: "Shopify",
          description: "E-commerce platform",
          expertise: "Advanced",
          href: "/technology/development/shopify",
        },
        {
          name: "Magento",
          description: "Enterprise e-commerce solution",
          expertise: "Advanced",
          href: "/technology/development/magento",
        },
        {
          name: "HTML/CSS/JavaScript",
          description: "Core web technologies",
          expertise: "Expert",
          href: "/technology/development/html-css-javascript",
        },
      ],
    },
    {
      category: "Marketing Tools",
      icon: BarChart3,
      description: "Analytics and marketing automation platforms",
      color: "from-green-500 to-emerald-600",
      technologies: [
        {
          name: "Google Analytics",
          description: "Web analytics service",
          expertise: "Expert",
          href: "/technology/marketing/google-analytics",
        },
        {
          name: "Google Ads",
          description: "Online advertising platform",
          expertise: "Expert",
          href: "/technology/marketing/google-ads",
        },
        {
          name: "Google Search Console",
          description: "SEO monitoring tool",
          expertise: "Expert",
          href: "/technology/marketing/google-search-console",
        },
        {
          name: "Meta Ads Manager",
          description: "Facebook and Instagram advertising",
          expertise: "Advanced",
          href: "/technology/marketing/meta-ads-manager",
        },
        {
          name: "HubSpot",
          description: "Marketing automation platform",
          expertise: "Advanced",
          href: "/technology/marketing/hubspot",
        },
        {
          name: "Mailchimp",
          description: "Email marketing service",
          expertise: "Intermediate",
          href: "/technology/marketing/mailchimp",
        },
      ],
    },
  ]

  const stats = [
    { icon: Code, label: "Technologies Mastered", value: "50+" },
    { icon: Users, label: "Certified Experts", value: "18" },
    { icon: Zap, label: "Years Combined Experience", value: "100+" },
  ]

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case "Expert":
        return "bg-green-100 text-green-800"
      case "Advanced":
        return "bg-blue-100 text-blue-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <Code className="mr-2 h-4 w-4" />
              Technology Stack
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Cutting-Edge{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We use the latest technologies and tools to deliver exceptional digital solutions. Our expertise spans
              design, development, and marketing technologies.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Explore Technologies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      {techCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 1 ? "bg-gray-50" : ""}`}>
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} text-white`}
              >
                <category.icon className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{category.category}</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.technologies.map((tech, techIndex) => (
                <Card
                  key={techIndex}
                  className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-semibold text-gray-900">{tech.name}</CardTitle>
                      <Badge className={getExpertiseColor(tech.expertise)}>{tech.expertise}</Badge>
                    </div>
                    <CardDescription className="text-gray-600">{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative pt-0">
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between p-0 text-purple-600 hover:text-purple-700"
                    >
                      <Link href={tech.href}>
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technology Resources</h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Learn about the latest technologies and how we use them to create amazing digital experiences
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/technology/learn">
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
