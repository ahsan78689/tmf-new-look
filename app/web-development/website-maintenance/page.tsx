import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Settings, Shield, Zap, BarChart3, CheckCircle, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

export default function WebsiteMaintenancePage() {
  const maintenanceServices = [
    {
      title: "Security Monitoring",
      description: "24/7 security monitoring and threat protection",
      icon: Shield,
      features: ["Malware scanning", "Security updates", "Firewall management", "SSL monitoring"],
      price: "Starting at $150/month",
    },
    {
      title: "Performance Optimization",
      description: "Keep your website fast and optimized",
      icon: Zap,
      features: ["Speed optimization", "Database cleanup", "Image compression", "Cache management"],
      price: "Starting at $200/month",
    },
    {
      title: "Content Updates",
      description: "Regular content updates and management",
      icon: Settings,
      features: ["Content updates", "Plugin updates", "Theme updates", "Backup management"],
      price: "Starting at $100/month",
    },
    {
      title: "Analytics & Reporting",
      description: "Monthly performance reports and insights",
      icon: BarChart3,
      features: ["Traffic analysis", "Performance reports", "SEO monitoring", "Uptime tracking"],
      price: "Starting at $75/month",
    },
  ]

  const maintenancePlans = [
    {
      name: "Basic",
      price: "$199",
      period: "/month",
      features: ["Security monitoring", "Regular backups", "Plugin updates", "Basic support", "Monthly reports"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      features: [
        "Everything in Basic",
        "Performance optimization",
        "Content updates (2 hours)",
        "Priority support",
        "Bi-weekly reports",
        "SEO monitoring",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      features: [
        "Everything in Professional",
        "Unlimited content updates",
        "24/7 monitoring",
        "Dedicated support",
        "Weekly reports",
        "Custom development",
      ],
      popular: false,
    },
  ]

  const maintenanceTasks = [
    { task: "Security Updates", frequency: "Weekly", icon: "🔒" },
    { task: "Backup Creation", frequency: "Daily", icon: "💾" },
    { task: "Performance Check", frequency: "Weekly", icon: "⚡" },
    { task: "Uptime Monitoring", frequency: "24/7", icon: "📊" },
    { task: "Content Updates", frequency: "As needed", icon: "✏️" },
    { task: "SEO Monitoring", frequency: "Monthly", icon: "🔍" },
  ]

  const benefits = [
    "Improved website security and protection",
    "Better search engine rankings",
    "Faster loading times and performance",
    "Regular backups and disaster recovery",
    "Reduced downtime and technical issues",
    "Professional support and expertise",
    "Cost-effective compared to in-house",
    "Peace of mind and time savings",
    "Proactive issue prevention",
    "Regular performance reports",
    "SEO monitoring and optimization",
    "24/7 uptime monitoring",
  ]

  const process = [
    {
      step: "1",
      title: "Website Audit",
      description: "Comprehensive analysis of your current website",
    },
    {
      step: "2",
      title: "Maintenance Plan",
      description: "Custom maintenance plan based on your needs",
    },
    {
      step: "3",
      title: "Implementation",
      description: "Setup monitoring, backups, and security measures",
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "Regular maintenance and proactive monitoring",
    },
  ]

  const results = [
    { metric: "Uptime", value: "99.9%", description: "Average uptime guarantee" },
    { metric: "Response Time", value: "<2hrs", description: "Support response time" },
    { metric: "Websites Maintained", value: "500+", description: "Active maintenance clients" },
    { metric: "Issues Prevented", value: "95%", description: "Proactive issue prevention" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 mb-6">
              <Settings className="mr-2 h-4 w-4" />
              Website Maintenance
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Keep Your Website{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Running Smoothly
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Professional website maintenance services to keep your site secure, fast, and up-to-date. Focus on your
              business while we take care of the technical details.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                Start Maintenance Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-200 hover:bg-orange-50 bg-transparent">
                Get Free Audit
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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-red-600 text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{result.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                <div className="text-xs text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Maintenance Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive website maintenance to keep your site running perfectly
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
            {maintenanceServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-red-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">{service.price}</span>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Maintenance Plans
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Choose the perfect maintenance plan for your website needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {maintenancePlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-orange-500 shadow-xl" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Tasks Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">What We Monitor</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Regular maintenance tasks to keep your website healthy
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {maintenanceTasks.map((task, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{task.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">{task.task}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {task.frequency}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Maintenance Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              How we keep your website running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-red-600 text-white text-lg font-bold">
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

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Maintenance Benefits
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Why professional website maintenance is essential
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Protect Your Website?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-orange-100">
              Let us handle your website maintenance so you can focus on growing your business
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Start Maintenance Plan
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/contact-us">Get Free Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
