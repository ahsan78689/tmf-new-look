import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Globe, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutUsPage() {
  const stats = [
    { label: "Years in Business", value: "8+", icon: Award },
    { label: "Projects Completed", value: "500+", icon: Target },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Countries Served", value: "15+", icon: Globe },
  ]

  const values = [
    {
      title: "Client-First Approach",
      description: "Your success is our success. We prioritize your business goals in every decision we make.",
      icon: Users,
    },
    {
      title: "Innovation & Excellence",
      description: "We stay ahead of industry trends and deliver cutting-edge solutions that drive results.",
      icon: Target,
    },
    {
      title: "Transparency & Trust",
      description: "Open communication and honest reporting build lasting partnerships with our clients.",
      icon: Award,
    },
    {
      title: "Global Perspective",
      description: "Our diverse team brings international expertise to solve complex digital challenges.",
      icon: Globe,
    },
  ]

  const timeline = [
    {
      year: "2016",
      title: "Company Founded",
      description: "Started as a small digital marketing agency with a vision to help businesses grow online.",
    },
    {
      year: "2018",
      title: "Expanded Services",
      description: "Added web development and design services to provide comprehensive digital solutions.",
    },
    {
      year: "2020",
      title: "Remote-First",
      description: "Transitioned to a remote-first company, allowing us to work with global talent and clients.",
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Integrated AI and automation tools to enhance our service delivery and client results.",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as a leading digital agency with 500+ successful projects and growing.",
    },
  ]

  const achievements = [
    "Google Premier Partner status",
    "Facebook Marketing Partner",
    "Shopify Plus Partner",
    "HubSpot Solutions Partner",
    "AWS Certified Team",
    "ISO 27001 Certified",
    "Inc. 5000 Fastest Growing",
    "Best Places to Work Award",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <Users className="mr-2 h-4 w-4" />
              About The Meta Future
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Transforming Businesses Through{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Since 2016, we've been helping businesses of all sizes achieve their digital goals through strategic
              marketing, innovative design, and robust development solutions. Our passion is your success.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/company/our-team">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                <Link href="/company/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                We exist to empower businesses with digital solutions that drive growth, enhance customer experiences,
                and create lasting competitive advantages. Our mission is to be the trusted partner that transforms your
                digital presence into a powerful business asset.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Through innovative strategies, cutting-edge technology, and exceptional service, we help our clients
                navigate the digital landscape and achieve measurable results that matter to their bottom line.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/company/our-process">Learn Our Process</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Our+Mission"
                alt="Our Mission"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Our Values</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                  <CardDescription className="text-sm">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Our Journey</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Key milestones in our company's growth
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription className="text-sm">{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Awards & Certifications
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Recognition for our excellence and expertise
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{achievement}</span>
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
              Ready to Work Together?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              Let's discuss how we can help transform your digital presence and drive business growth
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact-us">Start a Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/company/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
