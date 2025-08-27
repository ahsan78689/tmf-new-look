import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Mail, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OurTeamPage() {
  const leadership = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Sarah founded MetaFuture with a vision to help businesses succeed in the digital world. With over 12 years of experience in digital marketing and business strategy, she leads our team with passion and expertise.",
      image: "/placeholder.svg?height=400&width=400",
      skills: ["Business Strategy", "Digital Marketing", "Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@metafuture.com",
      },
    },
    {
      name: "Mike Chen",
      role: "CTO & Lead Developer",
      bio: "Mike is our technical guru with expertise in modern web technologies. He ensures our development projects are built with the latest technologies and best practices for optimal performance.",
      image: "/placeholder.svg?height=400&width=400",
      skills: ["React", "Node.js", "System Architecture"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mike@metafuture.com",
      },
    },
  ]

  const team = [
    {
      name: "Emily Rodriguez",
      role: "Marketing Strategist",
      department: "Digital Marketing",
      bio: "Emily develops data-driven marketing strategies that deliver measurable results for our clients.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["SEO", "PPC", "Analytics"],
    },
    {
      name: "David Kim",
      role: "Senior UX Designer",
      department: "Design",
      bio: "David creates user experiences that are both beautiful and highly functional.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["UI/UX Design", "Prototyping", "User Research"],
    },
    {
      name: "Lisa Wang",
      role: "Content Strategist",
      department: "Content",
      bio: "Lisa crafts compelling content strategies that engage audiences and drive conversions.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Content Strategy", "Copywriting", "SEO Writing"],
    },
    {
      name: "James Wilson",
      role: "Full Stack Developer",
      department: "Development",
      bio: "James builds robust web applications using modern technologies and frameworks.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["JavaScript", "Python", "Database Design"],
    },
    {
      name: "Maria Garcia",
      role: "Social Media Manager",
      department: "Digital Marketing",
      bio: "Maria manages social media campaigns that build brand awareness and engagement.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Social Media", "Community Management", "Content Creation"],
    },
    {
      name: "Alex Thompson",
      role: "Project Manager",
      department: "Operations",
      bio: "Alex ensures projects are delivered on time and within budget while maintaining quality.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Project Management", "Agile", "Client Relations"],
    },
  ]

  const departments = [
    {
      name: "Digital Marketing",
      count: 8,
      description: "SEO, PPC, Content Marketing, and Social Media experts",
    },
    {
      name: "Design & Development",
      count: 6,
      description: "UI/UX Designers and Full-Stack Developers",
    },
    {
      name: "Strategy & Operations",
      count: 4,
      description: "Project Managers and Business Strategists",
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
              Meet Our Team
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The People Behind{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Our Success
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the talented individuals who make MetaFuture a leading digital agency. Our diverse team brings
              together expertise in design, development, marketing, and strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{dept.count}</div>
                <div className="text-lg font-semibold text-purple-600 mt-2">{dept.name}</div>
                <div className="text-sm text-gray-600 mt-1">{dept.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leadership Team</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">The visionaries leading MetaFuture into the future</p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        width={200}
                        height={200}
                        className="w-32 h-32 rounded-full object-cover mx-auto sm:mx-0"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                      <p className="text-lg text-purple-600 mb-4">{leader.role}</p>
                      <p className="text-gray-600 mb-4">{leader.bio}</p>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                        {leader.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 justify-center sm:justify-start">
                        <Button size="sm" variant="outline" className="p-2 bg-transparent">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="p-2 bg-transparent">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="p-2 bg-transparent">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The talented professionals who bring our projects to life
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                    <Badge className="absolute top-4 right-4 bg-purple-600">{member.department}</Badge>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-purple-600 mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join Our Team</h2>
            <p className="mt-4 text-lg leading-8 text-purple-100">
              We're always looking for talented individuals to join our growing team
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                View Open Positions
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/who-we-are/about-us">Learn About Our Culture</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
