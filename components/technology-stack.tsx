import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const technologies = [
  {
    category: "Design Tools",
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Photoshop", "Illustrator"],
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    category: "Development",
    tools: ["React", "Next.js", "Node.js", "WordPress", "Shopify", "Magento"],
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    category: "Marketing Tools",
    tools: ["Google Analytics", "Google Ads", "HubSpot", "Mailchimp", "SEMrush", "Ahrefs"],
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    category: "Cloud & Hosting",
    tools: ["AWS", "Vercel", "Netlify", "Cloudflare", "DigitalOcean", "Firebase"],
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
]

export default function TechnologyStack() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cutting-Edge Technology Stack</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage the latest tools and technologies to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech) => (
            <Card key={tech.category} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{tech.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className={tech.color}>
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/technology">Explore Our Technology</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
