import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Shield, CheckCircle, ArrowRight, Globe, Smartphone, Database } from "lucide-react"
import Link from "next/link"
import Section from "@/components/section" // Declare the Section variable

export default function WebDevelopmentPage() {
  const services = [
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with latest technologies",
      icon: Globe,
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Backend Development",
      description: "Scalable server-side solutions and APIs",
      icon: Database,
      technologies: ["Node.js", "Python", "PHP", "Express.js", "Django", "Laravel"],
    },
    {
      title: "Full-Stack Development",
      description: "Complete web applications from frontend to backend",
      icon: Code,
      technologies: ["MERN Stack", "MEAN Stack", "Django + React", "Laravel + Vue", "Next.js", "Nuxt.js"],
    },
    {
      title: "Mobile-First Development",
      description: "Responsive websites optimized for all devices",
      icon: Smartphone,
      technologies: ["Progressive Web Apps", "Responsive Design", "Mobile Optimization", "Touch Interfaces"],
    },
    {
      title: "Performance Optimization",
      description: "Fast-loading websites with optimal performance",
      icon: Zap,
      technologies: ["Code Splitting", "Lazy Loading", "CDN Integration", "Image Optimization"],
    },
    {
      title: "Security Implementation",
      description: "Secure web applications with best practices",
      icon: Shield,
      technologies: ["SSL/TLS", "Authentication", "Data Encryption", "Security Audits"],
    },
  ]

  const developmentProcess = [
    {
      step: "1",
      title: "Planning & Analysis",
      description: "Understanding requirements and creating technical specifications",
      deliverables: ["Technical requirements", "Architecture design", "Technology stack", "Project timeline"],
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description: "Creating wireframes and technical prototypes",
      deliverables: ["System architecture", "Database design", "API specifications", "UI/UX mockups"],
    },
    {
      step: "3",
      title: "Development",
      description: "Building the application with agile methodology",
      deliverables: ["Frontend development", "Backend development", "Database setup", "API integration"],
    },
    {
      step: "4",
      title: "Testing & QA",
      description: "Comprehensive testing across all devices and browsers",
      deliverables: ["Unit testing", "Integration testing", "Performance testing", "Security testing"],
    },
    {
      step: "5",
      title: "Deployment & Launch",
      description: "Deploying to production and ongoing support",
      deliverables: ["Production deployment", "Performance monitoring", "Documentation", "Training"],
    },
  ]

  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: "Expert", description: "Modern JavaScript library" },
        { name: "Vue.js", level: "Advanced", description: "Progressive JavaScript framework" },
        { name: "Angular", level: "Advanced", description: "Full-featured framework" },
        { name: "TypeScript", level: "Expert", description: "Typed JavaScript" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: "Expert", description: "JavaScript runtime" },
        { name: "Python", level: "Advanced", description: "Versatile programming language" },
        { name: "PHP", level: "Advanced", description: "Server-side scripting" },
        { name: "Express.js", level: "Expert", description: "Node.js framework" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", level: "Expert", description: "NoSQL database" },
        { name: "PostgreSQL", level: "Advanced", description: "Relational database" },
        { name: "MySQL", level: "Advanced", description: "Popular SQL database" },
        { name: "Redis", level: "Intermediate", description: "In-memory data store" },
      ],
    },
  ]

  const features = [
    "Responsive design for all devices",
    "Fast loading times and optimization",
    "SEO-friendly architecture",
    "Secure coding practices",
    "Scalable and maintainable code",
    "Cross-browser compatibility",
    "API integration capabilities",
    "Content management systems",
    "E-commerce functionality",
    "Third-party service integration",
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
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
              Web Development Services
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Modern Web Development That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Scales</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Build fast, secure, and scalable web applications with modern technologies. Our development team creates
              robust solutions that grow with your business and deliver exceptional user experiences.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Development Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 bg-transparent">
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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <Code className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">300+</div>
              <div className="text-sm text-gray-600">Websites Developed</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">2s</div>
              <div className="text-sm text-gray-600">Average Load Time</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Web Development Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive development services for modern web applications
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
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
              Modern technologies and frameworks for robust web development
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {technologies.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-gray-900 text-sm sm:text-base">{tech.name}</h4>
                            <Badge variant="secondary" className={`${getLevelColor(tech.level)} text-xs`}>
                              {tech.level}
                            </Badge>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600">{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Development Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              A proven methodology for delivering high-quality web applications
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5">
            {developmentProcess.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    {item.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center">
                        <div className="mr-2 h-1 w-1 rounded-full bg-blue-600"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">What We Deliver</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Key features and capabilities in every web development project
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
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
              Ready to Build Your Web Application?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              Let's create a modern, scalable web application that drives your business forward
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Development Project
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
      </Section>

      <Footer />
    </div>
  )
}
