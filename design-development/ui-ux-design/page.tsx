import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, Users, Zap, CheckCircle, ArrowRight, Eye, Smartphone, Monitor, Layers } from "lucide-react"
import Link from "next/link"

export default function UIUXDesignOverviewPage() {
  const designServices = [
    {
      title: "User Experience (UX) Design",
      description: "Research-driven design that focuses on user needs and behaviors",
      icon: Users,
      link: "/design-development/ui-ux-design/ui-ux-design",
      features: ["User research", "Journey mapping", "Wireframing", "Prototyping"],
    },
    {
      title: "User Interface (UI) Design",
      description: "Beautiful, intuitive interfaces that delight users",
      icon: Palette,
      link: "/design-development/ui-ux-design/ui-design",
      features: ["Visual design", "Design systems", "Component libraries", "Brand integration"],
    },
    {
      title: "Web App Design",
      description: "Complex web application interfaces made simple and intuitive",
      icon: Monitor,
      link: "/design-development/ui-ux-design/web-app-design",
      features: ["Dashboard design", "Data visualization", "Admin panels", "SaaS interfaces"],
    },
    {
      title: "Mobile App Design",
      description: "Native and responsive mobile experiences",
      icon: Smartphone,
      link: "/design-development/ui-ux-design/mobile-app-design",
      features: ["iOS design", "Android design", "Cross-platform", "Touch interactions"],
    },
    {
      title: "Design Systems",
      description: "Scalable design systems for consistent user experiences",
      icon: Layers,
      link: "/design-development/ui-ux-design/design-systems",
      features: ["Component libraries", "Style guides", "Design tokens", "Documentation"],
    },
    {
      title: "Usability Testing",
      description: "Validate designs with real users for optimal performance",
      icon: Eye,
      link: "/design-development/ui-ux-design/usability-testing",
      features: ["User testing", "A/B testing", "Analytics", "Optimization"],
    },
  ]

  const designProcess = [
    {
      phase: "Discovery",
      description: "Understanding business goals and user needs",
      activities: ["Stakeholder interviews", "User research", "Competitive analysis", "Requirements gathering"],
      duration: "1-2 weeks",
    },
    {
      phase: "Strategy",
      description: "Defining design strategy and user personas",
      activities: ["User personas", "Journey mapping", "Information architecture", "Content strategy"],
      duration: "1 week",
    },
    {
      phase: "Design",
      description: "Creating wireframes and visual designs",
      activities: ["Wireframing", "Visual design", "Prototyping", "Design systems"],
      duration: "2-4 weeks",
    },
    {
      phase: "Testing",
      description: "Validating designs with users",
      activities: ["Usability testing", "A/B testing", "Feedback collection", "Iteration"],
      duration: "1-2 weeks",
    },
    {
      phase: "Delivery",
      description: "Preparing designs for development",
      activities: ["Design handoff", "Style guides", "Asset preparation", "Developer support"],
      duration: "1 week",
    },
  ]

  const industries = [
    {
      name: "SaaS & Technology",
      description: "Complex software interfaces made simple",
      projects: "50+ projects",
      icon: "💻",
    },
    {
      name: "E-commerce",
      description: "Shopping experiences that convert",
      projects: "30+ projects",
      icon: "🛒",
    },
    {
      name: "Healthcare",
      description: "Accessible, compliant medical interfaces",
      projects: "25+ projects",
      icon: "🏥",
    },
    {
      name: "Finance",
      description: "Secure, trustworthy financial platforms",
      projects: "20+ projects",
      icon: "💰",
    },
    {
      name: "Education",
      description: "Engaging learning experiences",
      projects: "15+ projects",
      icon: "📚",
    },
    {
      name: "Real Estate",
      description: "Property platforms that sell",
      projects: "12+ projects",
      icon: "🏠",
    },
  ]

  const tools = [
    { name: "Figma", description: "Design and prototyping", category: "Design" },
    { name: "Adobe XD", description: "User experience design", category: "Design" },
    { name: "Sketch", description: "Interface design", category: "Design" },
    { name: "InVision", description: "Prototyping and collaboration", category: "Prototyping" },
    { name: "Principle", description: "Animation design", category: "Animation" },
    { name: "Framer", description: "Interactive prototypes", category: "Prototyping" },
  ]

  const benefits = [
    "Increased user satisfaction and engagement",
    "Higher conversion rates and revenue",
    "Reduced development costs and time",
    "Better brand perception and trust",
    "Improved accessibility and usability",
    "Competitive advantage in the market",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 mb-6">
              <Palette className="mr-2 h-4 w-4" />
              UI/UX Design Services
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Design Experiences That{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Users Love
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Create exceptional user experiences that drive engagement, conversions, and business growth. Our UI/UX
              design services combine user research, strategic thinking, and beautiful design.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Design Projects</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">45%</div>
              <div className="text-sm text-gray-600">Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Eye className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Layers className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Design Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Design Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive UI/UX design services for all your digital needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {designServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full group-hover:bg-purple-50 bg-transparent">
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Design Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              A proven methodology for creating user-centered designs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5">
            {designProcess.map((phase, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white text-lg font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  <CardDescription className="text-sm">{phase.description}</CardDescription>
                  <Badge variant="secondary" className="text-xs mt-2">
                    {phase.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center">
                        <div className="mr-2 h-1 w-1 rounded-full bg-purple-600"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Industries We Serve
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Specialized design expertise across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{industry.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {industry.projects}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Design Tools & Technologies
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Industry-leading tools for professional design work
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">{tool.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">{tool.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {tool.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Why Choose Our UI/UX Design?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Benefits of working with our experienced design team
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Create Amazing User Experiences?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-purple-100">
              Let's design user experiences that delight your customers and drive business growth
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
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
