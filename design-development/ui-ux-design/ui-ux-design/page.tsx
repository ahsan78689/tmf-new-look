import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, Users, Zap, CheckCircle, ArrowRight, Eye, Smartphone, Monitor } from "lucide-react"
import Link from "next/link"

export default function UIUXDesignPage() {
  const services = [
    {
      title: "User Research",
      description: "Understanding your users through research and data analysis",
      icon: Users,
      features: ["User interviews", "Surveys & questionnaires", "Persona development", "Journey mapping"],
    },
    {
      title: "Wireframing",
      description: "Creating structural blueprints for your digital products",
      icon: Monitor,
      features: ["Low-fidelity wireframes", "Information architecture", "User flow design", "Content strategy"],
    },
    {
      title: "Prototyping",
      description: "Interactive prototypes to test and validate design concepts",
      icon: Zap,
      features: ["Interactive prototypes", "Clickable mockups", "Animation design", "Usability testing"],
    },
    {
      title: "Visual Design",
      description: "Beautiful, on-brand visual designs that engage users",
      icon: Palette,
      features: ["Visual identity", "Color schemes", "Typography", "Icon design"],
    },
    {
      title: "Mobile Design",
      description: "Mobile-first design for optimal user experience",
      icon: Smartphone,
      features: ["Responsive design", "Touch interactions", "Mobile optimization", "App design"],
    },
    {
      title: "Usability Testing",
      description: "Testing designs with real users for optimal experience",
      icon: Eye,
      features: ["User testing sessions", "A/B testing", "Heatmap analysis", "Conversion optimization"],
    },
  ]

  const designProcess = [
    {
      step: "1",
      title: "Discovery",
      description: "Understanding business goals, user needs, and project requirements",
      activities: ["Stakeholder interviews", "Competitive analysis", "User research", "Requirements gathering"],
    },
    {
      step: "2",
      title: "Strategy",
      description: "Defining design strategy and creating user personas",
      activities: ["User personas", "Journey mapping", "Information architecture", "Content strategy"],
    },
    {
      step: "3",
      title: "Design",
      description: "Creating wireframes, prototypes, and visual designs",
      activities: ["Wireframing", "Prototyping", "Visual design", "Design systems"],
    },
    {
      step: "4",
      title: "Testing",
      description: "Validating designs through user testing and feedback",
      activities: ["Usability testing", "A/B testing", "Feedback collection", "Design iteration"],
    },
    {
      step: "5",
      title: "Delivery",
      description: "Finalizing designs and preparing for development",
      activities: ["Design handoff", "Style guides", "Asset preparation", "Developer support"],
    },
  ]

  const benefits = [
    "Improved user satisfaction and engagement",
    "Higher conversion rates and ROI",
    "Reduced development costs and time",
    "Better brand perception and trust",
    "Increased customer retention",
    "Competitive advantage in the market",
  ]

  const tools = [
    { name: "Figma", description: "Collaborative design and prototyping", logo: "🎨" },
    { name: "Adobe XD", description: "User experience design platform", logo: "🔷" },
    { name: "Sketch", description: "Digital design toolkit", logo: "💎" },
    { name: "InVision", description: "Digital product design platform", logo: "🚀" },
    { name: "Principle", description: "Animation and interaction design", logo: "⚡" },
    { name: "Framer", description: "Interactive design and prototyping", logo: "🔥" },
  ]

  const portfolio = [
    {
      title: "E-commerce Mobile App",
      category: "Mobile Design",
      description: "Complete mobile shopping experience with intuitive navigation",
      metrics: "40% increase in mobile conversions",
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Complex data visualization made simple and actionable",
      metrics: "60% reduction in user onboarding time",
    },
    {
      title: "Healthcare Platform",
      category: "Web Design",
      description: "Patient portal with accessibility-first design approach",
      metrics: "95% user satisfaction score",
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
              UI/UX Design Services
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              User Experience Design That{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Drives Results
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Create exceptional user experiences that delight your customers and drive business growth. Our UI/UX
              design services combine user research, strategic thinking, and beautiful design to deliver results.
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Design Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">45%</div>
              <div className="text-sm text-gray-600">Average Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Eye className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">User Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our UI/UX Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive design services to create exceptional user experiences
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
            {designProcess.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    {item.activities.map((activity, activityIndex) => (
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

      {/* Tools Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Design Tools We Use
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Industry-leading tools for professional design work
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{tool.logo}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">{tool.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Recent Work</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Examples of our UI/UX design work across different industries
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {portfolio.map((project, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-800">{project.metrics}</p>
                  </div>
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
