import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock, Target, Heart, Lightbulb, Shield, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Clock, label: "Years Experience", value: "8+" },
    { icon: Target, label: "Projects Completed", value: "1000+" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Client-Focused",
      description: "We put our clients at the center of everything we do, ensuring their success is our success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "You can count on us to deliver quality work on time, every time.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We strive for excellence in every project, no matter how big or small.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      bio: "Sarah leads our creative team with over 10 years of experience in digital design.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      bio: "Mike is our technical guru, specializing in modern web technologies and architecture.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Strategist",
      bio: "Emily develops data-driven marketing strategies that deliver measurable results.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Kim",
      role: "UX Designer",
      bio: "David creates user experiences that are both beautiful and highly functional.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're a passionate team of digital experts dedicated to helping businesses succeed online
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
                  <p className="text-lg leading-8 text-gray-600">
                    Founded in 2016, our agency started with a simple mission: to help businesses thrive in the digital
                    world. What began as a small team of passionate developers and designers has grown into a
                    full-service digital agency.
                  </p>
                  <p className="text-base leading-7 text-gray-600">
                    Over the years, we've had the privilege of working with hundreds of clients, from innovative
                    startups to established enterprises. Each project has taught us something new and helped us refine
                    our approach to digital solutions.
                  </p>
                  <p className="text-base leading-7 text-gray-600">
                    Today, we're proud to be a trusted partner for businesses looking to make their mark online. Our
                    team combines technical expertise with creative vision to deliver solutions that not only look great
                    but also drive real business results.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative mx-auto w-full max-w-lg">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-2xl"></div>
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Our Team"
                    width={600}
                    height={600}
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">The talented individuals behind our success</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-purple-600 mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Work Together?</h2>
            <p className="mt-4 text-lg leading-8 text-purple-100">
              Let's discuss how we can help your business grow and succeed online
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
