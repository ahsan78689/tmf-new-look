import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Lightbulb, Code, Rocket, BarChart3, Shield } from "lucide-react"
import Link from "next/link"

export default function OurProcessPage() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Understanding your business, goals, and target audience",
      icon: Lightbulb,
      duration: "1-2 weeks",
      activities: [
        "Stakeholder interviews and workshops",
        "Market research and competitor analysis",
        "User research and persona development",
        "Goal setting and KPI definition",
        "Technical requirements gathering",
        "Project roadmap creation",
      ],
      deliverables: [
        "Project brief and requirements document",
        "User personas and journey maps",
        "Competitive analysis report",
        "Technical specification",
        "Project timeline and milestones",
      ],
    },
    {
      step: "02",
      title: "Planning & Design",
      description: "Creating strategic plans and visual designs",
      icon: Users,
      duration: "2-3 weeks",
      activities: [
        "Information architecture development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Content strategy planning",
        "Technical architecture design",
        "User experience optimization",
      ],
      deliverables: [
        "Wireframes and interactive prototypes",
        "Visual design mockups",
        "Style guide and design system",
        "Content strategy document",
        "Technical architecture plan",
      ],
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Building your solution with modern technologies",
      icon: Code,
      duration: "4-8 weeks",
      activities: [
        "Frontend and backend development",
        "Database design and setup",
        "API development and integration",
        "Content management system setup",
        "Third-party service integration",
        "Quality assurance testing",
      ],
      deliverables: [
        "Fully functional website/application",
        "Content management system",
        "API documentation",
        "Testing reports",
        "Performance optimization",
      ],
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Ensuring quality and optimal performance",
      icon: Shield,
      duration: "1-2 weeks",
      activities: [
        "Cross-browser and device testing",
        "Performance optimization",
        "Security testing and hardening",
        "User acceptance testing",
        "SEO optimization",
        "Accessibility compliance",
      ],
      deliverables: [
        "Testing reports and bug fixes",
        "Performance optimization report",
        "Security audit results",
        "SEO optimization checklist",
        "Accessibility compliance report",
      ],
    },
    {
      step: "05",
      title: "Launch & Deployment",
      description: "Going live with your new digital solution",
      icon: Rocket,
      duration: "1 week",
      activities: [
        "Production environment setup",
        "Domain and hosting configuration",
        "SSL certificate installation",
        "Analytics and tracking setup",
        "Content migration",
        "Go-live deployment",
      ],
      deliverables: [
        "Live website/application",
        "Analytics dashboard setup",
        "Training documentation",
        "Launch checklist completion",
        "Post-launch monitoring setup",
      ],
    },
    {
      step: "06",
      title: "Monitor & Optimize",
      description: "Ongoing support and continuous improvement",
      icon: BarChart3,
      duration: "Ongoing",
      activities: [
        "Performance monitoring",
        "Analytics review and reporting",
        "User feedback collection",
        "Continuous optimization",
        "Security updates and maintenance",
        "Feature enhancements",
      ],
      deliverables: [
        "Monthly performance reports",
        "Analytics insights and recommendations",
        "Maintenance and security updates",
        "Optimization recommendations",
        "Feature enhancement proposals",
      ],
    },
  ]

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative development with regular feedback and adjustments",
      benefits: ["Faster delivery", "Better collaboration", "Flexible to changes", "Higher quality output"],
    },
    {
      title: "User-Centered Design",
      description: "Putting users at the center of every design decision",
      benefits: ["Better user experience", "Higher conversion rates", "Reduced bounce rates", "Increased engagement"],
    },
    {
      title: "Data-Driven Approach",
      description: "Making decisions based on data and analytics",
      benefits: ["Measurable results", "Informed decisions", "Continuous improvement", "ROI optimization"],
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes",
      benefits: ["Bug-free delivery", "Optimal performance", "Security compliance", "Cross-platform compatibility"],
    },
  ]

  const tools = [
    {
      category: "Project Management",
      tools: ["Asana", "Trello", "Slack", "Zoom"],
    },
    {
      category: "Design & Prototyping",
      tools: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
    {
      category: "Development",
      tools: ["VS Code", "Git", "Docker", "AWS"],
    },
    {
      category: "Testing & Analytics",
      tools: ["Google Analytics", "Hotjar", "Selenium", "Lighthouse"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Our Process
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              A proven methodology that delivers exceptional results. Our structured approach ensures every project is
              completed on time, within budget, and exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">How We Work</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Our 6-step process ensures successful project delivery from concept to launch and beyond
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`${index % 2 === 1 ? "lg:flex-row-reverse" : ""} lg:flex lg:items-center lg:gap-16`}
              >
                <div className="lg:w-1/2">
                  <Card className="border-0 shadow-xl">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white text-xl font-bold">
                          {step.step}
                        </div>
                        <div>
                          <CardTitle className="text-xl sm:text-2xl">{step.title}</CardTitle>
                          <CardDescription className="text-sm sm:text-base">{step.description}</CardDescription>
                          <div className="mt-2 text-sm text-purple-600 font-medium">Duration: {step.duration}</div>
                        </div>
                      </div>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                        <step.icon className="h-6 w-6" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Activities</h4>
                          <ul className="space-y-2">
                            {step.activities.map((activity, activityIndex) => (
                              <li key={activityIndex} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Deliverables</h4>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                  <div className="relative mx-auto w-full max-w-md">
                    <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-2xl"></div>
                    <div className="relative h-64 sm:h-80 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                      <step.icon className="h-16 w-16 sm:h-20 sm:w-20 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Methodologies
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Proven approaches that ensure project success and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {methodologies.map((methodology, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{methodology.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{methodology.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {methodology.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Tools We Use</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Industry-leading tools and technologies that power our process
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {tools.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {category.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="text-center p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-900">{tool}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Start Your Project?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-purple-100">
              Let's discuss your project and show you how our proven process can deliver exceptional results
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Your Project
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/who-we-are/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
