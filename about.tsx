import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock, Target } from "lucide-react"
import Image from "next/image"

export default function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Clock, label: "Years Experience", value: "8+" },
    { icon: Target, label: "Projects Completed", value: "1000+" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Strategist",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      role: "UX Designer",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="container">
        {/* About Section */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Our Agency</h2>
                <p className="text-lg leading-8 text-gray-600">
                  We are a full-service digital agency dedicated to helping businesses thrive in the digital landscape.
                  With over 8 years of experience, we've helped hundreds of companies achieve their online goals.
                </p>
                <p className="text-base leading-7 text-gray-600">
                  Our team of experts combines creativity with technical expertise to deliver solutions that not only
                  look great but also drive real business results. From startups to enterprise companies, we've got the
                  experience and skills to take your digital presence to the next level.
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
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-2xl"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Our Team"
                  width={500}
                  height={500}
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">The talented individuals behind our success</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                      width={300}
                      height={300}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-sm text-purple-600">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
