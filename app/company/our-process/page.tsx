import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Target,
  Palette,
  Code,
  Rocket,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function OurProcessPage() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      duration: "1-2 weeks",
      description: "We start by understanding your business, goals, target audience, and competitive landscape.",
      icon: Search,
      activities: [
        "Business goals analysis",
        "Target audience research",
        "Competitive analysis",
        "Current state audit",
        "Strategy development",
      ],
      deliverables: ["Strategy document", "Project roadmap", "Timeline & milestones"],
    },
    {
      step: "02",
      title: "Planning & Design",
      duration: "2-3 weeks",
      description: "We create detailed plans and designs that align with your brand and business objectives.",
      icon: Palette,
      activities: [
        "User experience design",
        "Visual design concepts",
        "Content strategy",
        "Technical architecture",
        "Project planning",
      ],
      deliverables: ["Design mockups", "Content plan", "Technical specifications"],
    },
    {
      step: "03",
      title: "Development & Implementation",
      duration: "4-8 weeks",
      description: "Our expert team brings your project to life with clean code and best practices.",
      icon: Code,
      activities: [
        "Frontend development",
        "Backend development",
        "Content creation",
        "Integration setup",
        "Quality assurance",
      ],
      deliverables: ["Functional website/campaign", "Testing reports", "Documentation"],
    },
    {
      step: "04",
      title: "Launch & Optimization",
      duration: "1-2 weeks",
      description: "We launch your project and continuously optimize for better performance and results.",
      icon: Rocket,
      activities: [
        "Pre-launch testing",
        "Go-live deployment",
        "Performance monitoring",
        "Initial optimization",
        "Team training",
      ],
      deliverables: ["Live project", "Analytics setup", "Training materials"],
    },
    {
      step: "05",
      title: "Monitor & Improve",
      duration: "Ongoing",
      description: "We provide ongoing support, monitoring, and improvements to ensure continued success.",
      icon: BarChart3,
      activities: [
        "Performance monitoring",
        "Regular reporting",
        "Continuous optimization",
        "Support & maintenance",
        "Strategic updates",
      ],
      deliverables: ["Monthly reports", "Performance insights", "Improvement recommendations"],
    },
  ]

  const methodologies = [
    {
      title: "Agile Development",
      description: "Flexible, iterative approach that adapts to changing requirements",
      icon: Target,
      benefits: ["Faster delivery", "Better collaboration", "Continuous improvement", "Risk reduction"],
    },
    {
      title: "Data-Driven Decisions",
      description: "Every decision backed by research, analytics, and proven best practices",
      icon: BarChart3,
      benefits: ["Measurable results", "Reduced guesswork", "Better ROI", "Continuous optimization"],
    },
    {
      title: "Client Collaboration",
      description: "Close partnership throughout the project with regular communication",
      icon: Users,
      benefits: ["Aligned expectations", "Faster approvals", "Better outcomes", "Stronger relationships"],
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks at every stage of development",
      icon: CheckCircle,
      benefits: ["Bug-free delivery", "Better performance", "User satisfaction", "Long-term reliability"],
    },
  ]

  const communicationTools = [
    { name: "Slack", description: "Real-time communication", icon: "💬" },
    { name: "Zoom", description: "Video meetings & calls", icon: "📹" },
    { name: "Asana", description: "Project management", icon: "📋" },
    { name: "Google Drive", description: "File sharing & collaboration", icon: "📁" },
    { name: "Figma", description: "Design collaboration", icon: "🎨" },
    { name: "GitHub", description: "Code collaboration", icon: "💻" },
  ]

  const projectTypes = [
    {
      type: "Website Development",
      timeline: "6-12 weeks",
      phases: ["Discovery", "Design", "Development", "Launch", "Optimization"],
      description: "Complete website development from concept to launch",
    },
    {
      type: "Digital Marketing Campaign",
      timeline: "2-4 weeks setup + ongoing",
      phases: ["Strategy", "Setup", "Launch", "Optimize", "Scale"],
      description: "Comprehensive digital marketing campaigns across channels",
    },
    {
      type: "E-commerce Store",
      timeline: "8-16 weeks",
      phases: ["Planning", "Design", "Development", "Testing", "Launch"],
      description: "Full-featured online stores with payment integration",
    },
    {
      type: "Brand Identity",
      timeline: "4-8 weeks",
      phases: ["Research", "Concept", "Design", "Refinement", "Delivery"],
      description: "Complete brand identity and visual design systems",
    },
  ]

  const qualityStandards = [
    "Mobile-first responsive design",
    "Cross-browser compatibility",
    "SEO optimization built-in",
    "Performance optimization",
    "Security best practices",
    "Accessibility compliance",
    "Clean, maintainable code",
    "Comprehensive testing",
    "Documentation included",
    "Post-launch support",
    "Analytics integration",
    "Backup & recovery systems",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 mb-6">
              <Target className="mr-2 h-4 w-4" />
              Our Process
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              How We Deliver{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Exceptional Results
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step process ensures every project is delivered on time, on budget, and exceeds expectations.
              From initial strategy to ongoing optimization, we're with you every step of the way.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                <Link href="/contact-us">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-indigo-200 hover:bg-indigo-50 bg-transparent"
              >
                <Link href="/company/case-studies">View Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our 5-Step Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              A systematic approach that delivers consistent, exceptional results
            </p>
          </div>
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex items-start gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <Card className="border-0 shadow-xl">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                          <step.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-indigo-600 mb-1">Step {step.step}</div>
                          <CardTitle className="text-2xl">{step.title}</CardTitle>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                            <Clock className="h-3 w-3" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                          <ul className="space-y-2">
                            {step.activities.map((activity, activityIndex) => (
                              <li key={activityIndex} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="flex items-center text-sm">
                                <FileText className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden lg:flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl font-bold flex-shrink-0">
                  {step.step}
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
              Proven approaches that ensure project success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {methodologies.map((methodology, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                    <methodology.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{methodology.title}</CardTitle>
                  <CardDescription className="text-sm">{methodology.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {methodology.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Project Timelines
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Typical timelines for different types of projects
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.type}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-indigo-600 font-medium">
                    <Clock className="h-4 w-4" />
                    {project.timeline}
                  </div>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.phases.map((phase, phaseIndex) => (
                      <Badge key={phaseIndex} variant="secondary" className="text-xs">
                        {phase}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Tools */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Communication & Collaboration
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Tools we use to keep you informed and involved throughout the project
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {communicationTools.map((tool, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{tool.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">{tool.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Quality Standards
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Every project meets our rigorous quality standards
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Experience Our Process?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-indigo-100">
              Let's discuss your project and show you how our proven process can deliver exceptional results
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                <Link href="/contact-us">Start Your Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/company/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
