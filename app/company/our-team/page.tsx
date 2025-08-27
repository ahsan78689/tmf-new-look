import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Linkedin, Twitter, Mail, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OurTeamPage() {
  const leadership = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "With over 12 years in digital marketing, Sarah founded The Meta Future to help businesses thrive online. She's passionate about data-driven strategies and client success.",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
      location: "San Francisco, CA",
      expertise: ["Digital Strategy", "Leadership", "Business Development"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@themetafuture.com",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Michael leads our technical vision with 15+ years in web development. He ensures our solutions are scalable, secure, and cutting-edge.",
      image: "/placeholder.svg?height=300&width=300&text=Michael+Chen",
      location: "Seattle, WA",
      expertise: ["Full-Stack Development", "Cloud Architecture", "Team Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@themetafuture.com",
      },
    },
  ]

  const teamMembers = [
    {
      name: "Emily Rodriguez",
      role: "Head of Marketing",
      department: "Marketing",
      image: "/placeholder.svg?height=250&width=250&text=Emily+Rodriguez",
      location: "Austin, TX",
      expertise: ["SEO", "Content Strategy", "PPC"],
    },
    {
      name: "David Kim",
      role: "Lead Designer",
      department: "Design",
      image: "/placeholder.svg?height=250&width=250&text=David+Kim",
      location: "Los Angeles, CA",
      expertise: ["UI/UX Design", "Branding", "Prototyping"],
    },
    {
      name: "Lisa Wang",
      role: "Senior Developer",
      department: "Development",
      image: "/placeholder.svg?height=250&width=250&text=Lisa+Wang",
      location: "New York, NY",
      expertise: ["React", "Node.js", "Database Design"],
    },
    {
      name: "James Wilson",
      role: "Project Manager",
      department: "Operations",
      image: "/placeholder.svg?height=250&width=250&text=James+Wilson",
      location: "Chicago, IL",
      expertise: ["Agile", "Client Relations", "Process Optimization"],
    },
    {
      name: "Maria Garcia",
      role: "Social Media Specialist",
      department: "Marketing",
      image: "/placeholder.svg?height=250&width=250&text=Maria+Garcia",
      location: "Miami, FL",
      expertise: ["Social Media", "Community Management", "Analytics"],
    },
    {
      name: "Alex Thompson",
      role: "Frontend Developer",
      department: "Development",
      image: "/placeholder.svg?height=250&width=250&text=Alex+Thompson",
      location: "Portland, OR",
      expertise: ["JavaScript", "CSS", "Performance Optimization"],
    },
    {
      name: "Rachel Brown",
      role: "Content Strategist",
      department: "Marketing",
      image: "/placeholder.svg?height=250&width=250&text=Rachel+Brown",
      location: "Denver, CO",
      expertise: ["Content Marketing", "Copywriting", "Brand Voice"],
    },
    {
      name: "Tom Anderson",
      role: "Backend Developer",
      department: "Development",
      image: "/placeholder.svg?height=250&width=250&text=Tom+Anderson",
      location: "Boston, MA",
      expertise: ["Python", "API Development", "DevOps"],
    },
  ]

  const departments = [
    { name: "All Team", count: teamMembers.length + leadership.length },
    { name: "Leadership", count: leadership.length },
    { name: "Marketing", count: teamMembers.filter((m) => m.department === "Marketing").length },
    { name: "Development", count: teamMembers.filter((m) => m.department === "Development").length },
    { name: "Design", count: teamMembers.filter((m) => m.department === "Design").length },
    { name: "Operations", count: teamMembers.filter((m) => m.department === "Operations").length },
  ]

  const stats = [
    { label: "Team Members", value: "25+" },
    { label: "Countries", value: "8" },
    { label: "Years Experience", value: "150+" },
    { label: "Certifications", value: "50+" },
  ]

  const benefits = [
    "Remote-first culture",
    "Flexible working hours",
    "Professional development budget",
    "Health & wellness benefits",
    "Team retreats and events",
    "Latest tech equipment",
    "Unlimited PTO",
    "Stock options",
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              The People Behind{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Your Success
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Meet the talented individuals who make The Meta Future a leading digital agency. Our diverse team of
              experts is passionate about delivering exceptional results for our clients.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Link href="/company/careers">
                  Join Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-200 hover:bg-purple-50 bg-transparent"
              >
                <Link href="/company/about-us">About Our Company</Link>
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
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {departments.map((dept, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {dept.name} ({dept.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Leadership Team</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              The visionaries leading our company forward
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                  <div className="aspect-square sm:aspect-auto">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{leader.role}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                      <MapPin className="h-3 w-3" />
                      {leader.location}
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{leader.bio}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {leader.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="p-2 bg-transparent">
                        <Linkedin className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-2 bg-transparent">
                        <Twitter className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-2 bg-transparent">
                        <Mail className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Our Team</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              The talented professionals who bring your projects to life
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={250}
                      height={250}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-purple-600">{member.role}</CardDescription>
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mt-1">
                    <MapPin className="h-3 w-3" />
                    {member.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="outline" className="p-2 bg-transparent">
                      <Linkedin className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2 bg-transparent">
                      <Mail className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Why Our Team Loves Working Here
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              We create an environment where everyone can thrive
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Want to Join Our Team?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-purple-100">
              We're always looking for talented individuals who share our passion for digital excellence
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/company/careers">View Open Positions</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/contact-us">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
