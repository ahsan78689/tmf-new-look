import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Lightbulb } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every strategy we implement is designed to deliver measurable results and drive real business growth.",
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description: "We maintain the highest standards in everything we do, from initial consultation to final delivery.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "We stay ahead of industry trends and bring fresh, innovative ideas to every project we undertake.",
  },
]

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Why Choose The Meta Future?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're more than just a digital agency – we're your strategic partner in building a successful online
              presence. With years of experience and a proven track record, we combine creativity with data-driven
              insights to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Link href="/who-we-are/about-us">Learn More About Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/who-we-are/our-team">Meet Our Team</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
