import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Lightbulb, Shield, Zap, Users, Target, Award, Globe } from "lucide-react"
import Link from "next/link"

export default function OurValuesPage() {
  const coreValues = [
    {
      icon: Heart,
      title: "Client-Focused",
      description: "We put our clients at the center of everything we do, ensuring their success is our success.",
      details: [
        "Understanding client needs deeply",
        "Delivering solutions that exceed expectations",
        "Building long-term partnerships",
        "Providing exceptional customer service",
      ],
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions.",
      details: [
        "Embracing new technologies and trends",
        "Creative problem-solving approaches",
        "Continuous learning and improvement",
        "Forward-thinking strategies",
      ],
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "You can count on us to deliver quality work on time, every time.",
      details: [
        "Meeting deadlines consistently",
        "Maintaining high quality standards",
        "Transparent communication",
        "Dependable project management",
      ],
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We strive for excellence in every project, no matter how big or small.",
      details: [
        "Attention to detail in all work",
        "Continuous quality improvement",
        "Best practices implementation",
        "Going above and beyond expectations",
      ],
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaborative partnerships.",
      details: [
        "Open communication and feedback",
        "Cross-functional team collaboration",
        "Client partnership approach",
        "Knowledge sharing and mentoring",
      ],
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that drive business growth.",
      details: [
        "Data-driven decision making",
        "Clear goal setting and tracking",
        "ROI-focused strategies",
        "Performance measurement and optimization",
      ],
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices.",
      details: [
        "Honest and transparent communication",
        "Ethical business practices",
        "Keeping promises and commitments",
        "Building trust through actions",
      ],
    },
    {
      icon: Globe,
      title: "Diversity & Inclusion",
      description: "We embrace diversity and create an inclusive environment for all.",
      details: [
        "Diverse team perspectives",
        "Inclusive workplace culture",
        "Equal opportunities for all",
        "Celebrating different backgrounds",
      ],
    },
  ]

  const culturePrinciples = [
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and encourage continuous skill development.",
    },
    {
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between work and personal life.",
    },
    {
      title: "Open Communication",
      description: "We foster an environment where everyone feels comfortable sharing ideas.",
    },
    {
      title: "Innovation Mindset",
      description: "We encourage creative thinking and experimentation in our work.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Values</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The core principles that guide our decisions, shape our culture, and drive our commitment to excellence in
              everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              These values are the foundation of our company culture and guide every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 mb-6">{value.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {value.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Culture Principles</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              How we create an environment where everyone can thrive and do their best work
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culturePrinciples.map((principle, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Values in Action</h2>
                  <p className="text-lg leading-8 text-gray-600">
                    Our values aren't just words on a wall – they're lived every day through our actions, decisions, and
                    interactions with clients and team members.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-bold mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Client Success Stories</h4>
                        <p className="text-gray-600">
                          Every project we complete reflects our commitment to client success and excellence.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-bold mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Team Development</h4>
                        <p className="text-gray-600">
                          We invest in our team's growth through training, mentorship, and career development
                          opportunities.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-bold mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Community Impact</h4>
                        <p className="text-gray-600">
                          We give back to our community through pro bono work and supporting local initiatives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative mx-auto w-full max-w-lg">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-2xl"></div>
                  <div className="relative space-y-4">
                    <Card className="bg-white shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                            <Heart className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Client Satisfaction</h4>
                            <p className="text-sm text-gray-500">98% satisfaction rate</p>
                          </div>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-[98%] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Lightbulb className="h-8 w-8 text-purple-600" />
                            <div>
                              <h4 className="font-semibold text-gray-900">Innovation Score</h4>
                              <p className="text-sm text-gray-500">Industry leading</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-purple-600">A+</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join Our Value-Driven Team</h2>
            <p className="mt-4 text-lg leading-8 text-purple-100">
              If these values resonate with you, we'd love to have you on our team or as a partner
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
                <Link href="/who-we-are/our-team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
