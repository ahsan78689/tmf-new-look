import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Code, BarChart3 } from "lucide-react"

export default function TechnologyStack() {
  const technologies = [
    {
      category: "Design Tools",
      icon: Palette,
      color: "from-pink-500 to-rose-600",
      tools: [
        { name: "Figma", level: "Expert", description: "UI/UX Design & Prototyping" },
        { name: "Adobe XD", level: "Advanced", description: "User Experience Design" },
        { name: "Sketch", level: "Advanced", description: "Interface Design" },
        { name: "InVision", level: "Intermediate", description: "Design Collaboration" },
      ],
    },
    {
      category: "Development",
      icon: Code,
      color: "from-blue-500 to-indigo-600",
      tools: [
        { name: "React", level: "Expert", description: "Modern Web Applications" },
        { name: "Node.js", level: "Expert", description: "Backend Development" },
        { name: "WordPress", level: "Expert", description: "Content Management" },
        { name: "Shopify", level: "Advanced", description: "E-commerce Solutions" },
        { name: "Magento", level: "Advanced", description: "Enterprise E-commerce" },
        { name: "HTML/CSS/JS", level: "Expert", description: "Frontend Fundamentals" },
      ],
    },
    {
      category: "Marketing Tools",
      icon: BarChart3,
      color: "from-green-500 to-emerald-600",
      tools: [
        { name: "Google Analytics", level: "Expert", description: "Web Analytics" },
        { name: "Google Ads", level: "Expert", description: "PPC Advertising" },
        { name: "Search Console", level: "Expert", description: "SEO Monitoring" },
        { name: "Meta Ads Manager", level: "Advanced", description: "Social Media Ads" },
        { name: "HubSpot", level: "Advanced", description: "Marketing Automation" },
        { name: "Mailchimp", level: "Intermediate", description: "Email Marketing" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800"
      case "Advanced":
        return "bg-blue-100 text-blue-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technology Stack</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We use cutting-edge tools and technologies to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {technologies.map((category, index) => (
            <Card key={index} className="border-0 bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} text-white`}
                  >
                    <category.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900">{tool.name}</h4>
                          <Badge variant="secondary" className={getLevelColor(tool.level)}>
                            {tool.level}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{tool.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-6 py-3">
            <span className="text-sm font-medium text-purple-700">
              Want to see our technology in action?
              <a href="/technology" className="ml-1 underline hover:no-underline">
                Explore our tech stack →
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
