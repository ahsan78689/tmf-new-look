import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Smartphone, Database, Shield, Zap, CheckCircle, ArrowRight, Server, Layers } from "lucide-react"
import Link from "next/link"

export default function WebsiteDevelopmentPage() {
  const developmentServices = [
    {
      title: "Custom Website Development",
      description: "Tailored websites built from scratch to meet your specific needs",
      icon: Code,
      features: ["Custom coding", "Unique design", "Scalable architecture", "Performance optimization"],
    },
    {
      title: "Responsive Web Development",
      description: "Mobile-first websites that work perfectly on all devices",
      icon: Smartphone,
      features: [
        "Mobile optimization",
        "Cross-device compatibility",
        "Touch-friendly interfaces",
        "Progressive web apps",
      ],
    },
    {
      title: "E-commerce Development",
      description: "Powerful online stores that drive sales and conversions",
      icon: Globe,
      features: ["Shopping cart systems", "Payment integration", "Inventory management", "Order processing"],
    },
    {
      title: "CMS Development",
      description: "Content management systems for easy website updates",
      icon: Layers,
      features: ["WordPress development", "Custom CMS", "User-friendly admin", "Content workflows"],
    },
    {
      title: "Database Integration",
      description: "Robust database solutions for dynamic websites",
      icon: Database,
      features: ["Database design", "API development", "Data migration", "Performance tuning"],
    },
    {
      title: "Website Security",
      description: "Comprehensive security measures to protect your website",
      icon: Shield,
      features: ["SSL certificates", "Security audits", "Malware protection", "Regular updates"],
    },
  ]

  const technologies = [
    {
      category: "Frontend Technologies",
      items: [
        { name: "HTML5", description: "Modern markup language", level: "Expert" },
        { name: "CSS3", description: "Advanced styling and animations", level: "Expert" },
        { name: "JavaScript", description: "Interactive functionality", level: "Expert" },
        { name: "React", description: "Component-based UI library", level: "Advanced" },
        { name: "Vue.js", description: "Progressive JavaScript framework", level: "Advanced" },
        { name: "TypeScript", description: "Typed JavaScript", level: "Intermediate" },
      ],
    },
    {
      category: "Backend Technologies",
      items: [
        { name: "Node.js", description: "JavaScript runtime environment", level: "Expert" },
        { name: "PHP", description: "Server-side scripting language", level: "Expert" },
        { name: "Python", description: "Versatile programming language", level: "Advanced" },
        { name: "Express.js", description: "Node.js web framework", level: "Advanced" },
        { name: "Laravel", description: "PHP web framework", level: "Advanced" },
        { name: "Django", description: "Python web framework", level: "Intermediate" },
      ],
    },
    {
      category: "Databases & Tools",
      items: [
        { name: "MySQL", description: "Relational database management", level: "Expert" },
        { name: "PostgreSQL", description: "Advanced relational database", level: "Advanced" },
        { name: "MongoDB", description: "NoSQL document database", level: "Advanced" },
        { name: "Git", description: "Version control system", level: "Expert" },
        { name: "Docker", description: "Containerization platform", level: "Intermediate" },
        { name: "AWS", description: "Cloud computing services", level: "Intermediate" },
      ],
    },
  ]

  const developmentProcess = [
    {
      step: "1",
      title: "Planning & Analysis",
      description: "Understanding requirements and creating technical specifications",
      duration: "1-2 weeks",
      deliverables: ["Technical requirements", "Site architecture", "Technology stack", "Project timeline"],
    },
    {
      step: "2",
      title: "Design & Wireframing",
      description: "Creating visual designs and user experience wireframes",
      duration: "2-3 weeks",
      deliverables: ["Wireframes", "Visual designs", "Style guide", "Responsive layouts"],
    },
    {
      step: "3",
      title: "Development",
      description: "Building the website with clean, efficient code",
      duration: "4-8 weeks",
      deliverables: ["Frontend development", "Backend development", "Database setup", "API integration"],
    },
    {
      step: "4",
      title: "Testing & QA",
      description: "Comprehensive testing across devices and browsers",
      duration: "1-2 weeks",
      deliverables: ["Functionality testing", "Performance testing", "Security testing", "Browser compatibility"],
    },
    {
      step: "5",
      title: "Launch & Support",
      description: "Deploying the website and providing ongoing support",
      duration: "1 week",
      deliverables: ["Domain setup", "Hosting configuration", "SSL installation", "Training & documentation"],
    },
  ]

  const websiteTypes = [
    {
      type: "Business Websites",
      description: "Professional websites for businesses and organizations",
      features: ["Company profiles", "Service pages", "Contact forms", "SEO optimization"],
      startingPrice: "$2,500",
    },
    {
      type: "E-commerce Stores",
      description: "Online stores with shopping cart and payment processing",
      features: ["Product catalogs", "Shopping cart", "Payment gateways", "Order management"],
      startingPrice: "$5,000",
    },
    {
      type: "Portfolio Websites",
      description: "Showcase your work with stunning portfolio sites",
      features: ["Gallery layouts", "Project showcases", "Client testimonials", "Contact integration"],
      startingPrice: "$1,500",
    },
    {
      type: "Blog & News Sites",
      description: "Content-focused websites with publishing capabilities",
      features: ["Content management", "Category organization", "Search functionality", "Social sharing"],
      startingPrice: "$2,000",
    },
  ]

  const features = [
    "Responsive design for all devices",
    "Fast loading times and optimization",
    "SEO-friendly structure and code",
    "Secure coding practices",
    "Cross-browser compatibility",
    "Content management system",
    "Social media integration",
    "Analytics and tracking setup",
    "Contact forms and lead capture",
    "Regular backups and updates",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <Globe className="mr-2 h-4 w-4" />
              Website Development Services
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Professional Websites That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Custom website development that combines stunning design with powerful functionality. We build fast,
              secure, and scalable websites that help your business grow and succeed online.
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

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <Globe className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Websites Built</div>
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
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <Server className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Website Development Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive development services for all your website needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {developmentServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
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

      {/* Website Types */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Types of Websites We Build
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              From simple business sites to complex e-commerce platforms
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            {websiteTypes.map((website, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{website.type}</CardTitle>
                    <Badge variant="secondary" className="text-sm font-semibold">
                      From {website.startingPrice}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{website.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {website.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
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

      {/* Technologies Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Technologies We Use
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Modern technologies and frameworks for robust website development
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
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Development Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              A proven methodology for delivering high-quality websites
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
                  <Badge variant="secondary" className="text-xs mt-2">
                    {item.duration}
                  </Badge>
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
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              What's Included in Every Website
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Standard features and capabilities in every website we build
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Build Your Website?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              Let's create a professional website that drives your business forward
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
                <Link href="/design-development/development">View All Development Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
