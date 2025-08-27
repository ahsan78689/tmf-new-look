import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Zap, Heart, Globe, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutUsPage() {
  const values = [
    {
      icon: Heart,
      title: "Client-Focused",
      description: "We put our clients at the center of everything we do, ensuring their success is our priority.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "You can count on us to deliver quality work on time, every time.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, no matter how big or small.",
    },
  ]

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Target, label: "Projects Completed", value: "1000+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: TrendingUp, label: "Years Experience", value: "8+" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Sarah founded The Meta Future with a vision to help businesses succeed in the digital world.",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
    },
    {
      name: "Mike Chen",
      role: "CTO & Lead Developer",
      bio: "Mike is our technical guru with expertise in modern web technologies and system architecture.",
      image: "/placeholder.svg?height=300&width=300&text=Mike+Chen",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      bio: "Emily leads our marketing team and develops strategies that deliver measurable results.",
      image: "/placeholder.svg?height=300&width=300&text=Emily+Rodriguez",
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
              <Users className="mr-2 h-4 w-4" />
              About The Meta Future
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Shaping a Better{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Digital Tomorrow
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              At The Meta Future, we help entrepreneurs and startups bring impactful ideas to life with our 360° digital
              services—idea formulation, design, development, and marketing. Together, let's create a future where your
              brand thrives and makes the world a better place.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2016, The Meta Future began as a small team of passionate digital enthusiasts who believed
                  that every business deserves a powerful online presence. What started as a web development agency has
                  evolved into a comprehensive digital transformation partner.
                </p>
                <p>
                  Over the years, we've helped hundreds of businesses—from startups to established enterprises—navigate
                  the digital landscape and achieve remarkable growth. Our approach combines cutting-edge technology
                  with creative strategy to deliver solutions that not only meet today's needs but anticipate tomorrow's
                  opportunities.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for businesses across 25+ countries, helping them turn
                  their digital visions into reality through our comprehensive suite of services including web
                  development, digital marketing, UI/UX design, and strategic consulting.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto max-w-lg">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Our+Story"
                    alt="Our Story"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Our Core Values</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Meet Our Leadership
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              The visionaries behind The Meta Future
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <Badge className="mb-3 bg-purple-600">{member.role}</Badge>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and
              create lasting impact in the digital world. We believe that every business has the potential to make a
              difference, and we're here to help them realize that potential through strategic digital transformation.
            </p>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6">
                Join hundreds of successful businesses who have partnered with us to achieve their digital goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Get Started Today
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/our-team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
