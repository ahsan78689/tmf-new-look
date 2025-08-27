import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users, Heart, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $160k",
      description:
        "Join our frontend team to build amazing user experiences with React, Next.js, and modern web technologies.",
      requirements: [
        "5+ years React experience",
        "TypeScript proficiency",
        "UI/UX design skills",
        "Team collaboration",
      ],
    },
    {
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "New York / Remote",
      type: "Full-time",
      salary: "$80k - $110k",
      description:
        "Lead our digital marketing efforts across multiple channels including SEO, PPC, social media, and content marketing.",
      requirements: ["3+ years digital marketing", "Google Ads certified", "Analytics expertise", "Content strategy"],
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Los Angeles / Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      description:
        "Create beautiful, user-centered designs for web and mobile applications that delight our clients and their users.",
      requirements: ["4+ years UX/UI design", "Figma expertise", "User research skills", "Portfolio required"],
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $150k",
      description: "Build scalable backend systems and APIs using Node.js, Python, and cloud technologies.",
      requirements: ["4+ years backend development", "API design experience", "Database expertise", "Cloud platforms"],
    },
    {
      title: "SEO Specialist",
      department: "Marketing",
      location: "Chicago / Remote",
      type: "Full-time",
      salary: "$60k - $85k",
      description:
        "Drive organic growth for our clients through technical SEO, content optimization, and link building strategies.",
      requirements: ["2+ years SEO experience", "Technical SEO skills", "Analytics tools", "Content optimization"],
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      salary: "$75k - $100k",
      description:
        "Manage client projects from inception to delivery, ensuring quality, timeline, and budget requirements are met.",
      requirements: ["3+ years project management", "Agile methodology", "Client communication", "Team leadership"],
    },
  ]

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance",
      icon: Heart,
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible working hours",
      icon: Clock,
    },
    {
      title: "Professional Growth",
      description: "Learning budget and conference attendance support",
      icon: Zap,
    },
    {
      title: "Team Culture",
      description: "Collaborative environment with amazing colleagues",
      icon: Users,
    },
  ]

  const values = [
    "Innovation and creativity in everything we do",
    "Client success is our primary focus",
    "Continuous learning and improvement",
    "Work-life balance and mental health",
    "Diversity, equity, and inclusion",
    "Transparency and open communication",
    "Quality over quantity in our work",
    "Environmental and social responsibility",
  ]

  const perks = [
    "Competitive salary and equity options",
    "Unlimited PTO policy",
    "Home office setup allowance",
    "Monthly wellness stipend",
    "Team retreats and events",
    "Professional development budget",
    "Latest tech equipment",
    "Flexible working hours",
    "Parental leave benefits",
    "Mental health support",
    "Gym membership reimbursement",
    "Commuter benefits",
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
              Join Our Team
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Build Your Career with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Amazing People
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Join a team of passionate professionals who are dedicated to creating exceptional digital experiences.
              We're always looking for talented individuals who share our values and want to make a difference.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                Learn About Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Why Work With Us?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              We believe in creating an environment where everyone can thrive
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription className="text-sm">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Open Positions</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Find your next opportunity with our growing team
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="h-3 w-3" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="h-3 w-3" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <DollarSign className="h-3 w-3" />
                          {position.salary}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Our Values</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Perks & Benefits
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              We take care of our team members
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {perks.map((perk, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{perk}</span>
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
              Ready to Join Our Team?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-purple-100">
              Don't see a position that fits? We're always interested in hearing from talented individuals.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Send Us Your Resume
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
