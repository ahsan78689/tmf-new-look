import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Shield, CheckCircle, ArrowRight, Globe } from "lucide-react"
import Link from "next/link"
import Section from "@/components/section" // Declare the Section variable

export default function CustomWebsitesPage() {
  const websiteTypes = [
    {
      title: "Business Websites",
      description: "Professional websites that establish credibility and drive growth",
      icon: Globe,
      features: ["Custom design", "Mobile responsive", "SEO optimized", "Contact forms"],
      price: "Starting at $3,500",
      timeline: "4-6 weeks",
    },
    {
      title: "Portfolio Websites",
      description: "Showcase your work with stunning visual presentations",
      icon: Palette,
      features: ["Gallery layouts", "Project showcases", "Client testimonials", "Blog integration"],
      price: "Starting at $2,500",
      timeline: "3-4 weeks",
    },
    {
      title: "Landing Pages",
      description: "High-converting pages designed to capture leads and drive sales",
      icon: Zap,
      features: ["Conversion optimization", "A/B testing", "Analytics integration", "Fast loading"],
      price: "Starting at $1,500",
      timeline: "2-3 weeks",
    },
    {
      title: "Corporate Websites",
      description: "Enterprise-level websites with advanced functionality",
      icon: Shield,
      features: ["Multi-page structure", "User management", "Advanced security", "Scalable architecture"],
      price: "Starting at $8,000",
      timeline: "8-12 weeks",
    },
  ]

  const technologies = [
    { name: "HTML5", description: "Modern markup", level: "Expert" },
    { name: "CSS3", description: "Advanced styling", level: "Expert" },
    { name: "JavaScript", description: "Interactive features", level: "Expert" },
    { name: "React", description: "Component-based UI", level: "Advanced" },
    { name: "Next.js", description: "Full-stack framework", level: "Advanced" },
    { name: "Node.js", description: "Backend development", level: "Intermediate" },
  ]

  const features = [
    "Fully responsive design",
    "Custom visual design",
    "SEO optimization",
    "Fast loading speeds",
    "Mobile-first approach",
    "Cross-browser compatibility",
    "Content management system",
    "Analytics integration",
    "Security implementation",
    "Ongoing maintenance",
    "Performance optimization",
    "User experience focus",
  ]

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Understanding your goals, audience, and requirements",
    },
    {
      step: "2",
      title: "Design & Wireframing",
      description: "Creating visual designs and user experience wireframes",
    },
    {
      step: "3",
      title: "Development",
      description: "Building your website with clean, efficient code",
    },
    {
      step: "4",
      title: "Testing & Launch",
      description: "Quality assurance testing and smooth deployment",
    },
  ]

  const results = [
    { metric: "Websites Built", value: "500+", description: "Custom websites delivered" },
    { metric: "Client Satisfaction", value: "98%", description: "Happy clients" },
    { metric: "Average Load Time", value: "2.1s", description: "Fast performance" },
    { metric: "Mobile Score", value: "95/100", description: "Mobile optimization" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <Code className="mr-2 h-4 w-4" />
              Custom Website Development
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Custom Websites That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Get a unique, professional website tailored to your business needs. Our custom development approach
              ensures your site stands out from the competition and delivers exceptional user experiences.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                View Portfolio
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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{result.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                <div className="text-xs text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Custom Website Types
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Tailored solutions for every business need
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {websiteTypes.map((type, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <type.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-blue-600">{type.price}</span>
                    <Badge variant="secondary" className="text-xs">
                      {type.timeline}
                    </Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Technologies We Use
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Modern technologies for robust, scalable websites
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{tech.description}</p>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${
                      tech.level === "Expert"
                        ? "bg-green-100 text-green-800"
                        : tech.level === "Advanced"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {tech.level}
                  </Badge>
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
              Our Development Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Proven methodology for successful website delivery
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-lg font-bold">
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
              Every custom website includes these essential features
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
      <Section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Build Your Custom Website?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              Let's create a unique website that perfectly represents your brand and drives business growth
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your Project
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
      </Section>

      <Footer />
    </div>
  )
}
