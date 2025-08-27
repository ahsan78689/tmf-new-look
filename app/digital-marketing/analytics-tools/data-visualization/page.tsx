import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, BarChart3, LineChart, TrendingUp, Eye, Monitor, Palette, ArrowRight, CheckCircle, Layers, Zap, Award } from 'lucide-react'
import Link from "next/link"

export default function DataVisualizationPage() {
  const visualizationTypes = [
    {
      type: "Interactive Dashboards",
      description: "Dynamic dashboards with real-time data updates",
      icon: Monitor,
      complexity: "Advanced",
      timeframe: "2-3 weeks",
      features: ["Real-time updates", "Interactive filters", "Drill-down capabilities", "Mobile responsive"],
      examples: ["Executive dashboards", "Sales performance", "Marketing ROI", "Operational metrics"]
    },
    {
      type: "Statistical Charts",
      description: "Professional charts for data analysis and reporting",
      icon: BarChart3,
      complexity: "Medium",
      timeframe: "1-2 weeks",
      features: ["Multiple chart types", "Custom styling", "Data annotations", "Export options"],
      examples: ["Revenue trends", "Performance comparisons", "Growth analysis", "Market research"]
    },
    {
      type: "Infographic Design",
      description: "Visual storytelling through custom infographics",
      icon: Palette,
      complexity: "High",
      timeframe: "2-4 weeks",
      features: ["Custom illustrations", "Brand integration", "Story flow", "Print ready"],
      examples: ["Annual reports", "Process flows", "Company milestones", "Product features"]
    },
    {
      type: "Data Stories",
      description: "Narrative-driven visualizations that tell compelling stories",
      icon: Eye,
      complexity: "Expert",
      timeframe: "3-5 weeks",
      features: ["Narrative structure", "Progressive disclosure", "Interactive elements", "Guided exploration"],
      examples: ["Market insights", "Customer journeys", "Impact reports", "Research findings"]
    }
  ]

  const chartGallery = [
    { name: "Revenue Dashboard", type: "Dashboard", industry: "E-commerce", preview: "revenue-chart" },
    { name: "User Analytics", type: "Behavioral", industry: "SaaS", preview: "user-flow" },
    { name: "Marketing ROI", type: "Performance", industry: "Marketing", preview: "roi-analysis" },
    { name: "Sales Pipeline", type: "Funnel", industry: "Sales", preview: "pipeline-viz" },
    { name: "Customer Segments", type: "Demographic", industry: "Retail", preview: "segments" },
    { name: "Growth Metrics", type: "Trend", industry: "Startup", preview: "growth-chart" }
  ]

  const designProcess = [
    {
      phase: "Discovery",
      duration: "2-3 days",
      activities: ["Data audit", "Stakeholder interviews", "Requirements gathering", "Goal definition"],
      outcome: "Clear understanding of visualization needs and objectives"
    },
    {
      phase: "Design Strategy",
      duration: "3-5 days",
      activities: ["Information architecture", "Visual hierarchy", "Color palette", "Interaction design"],
      outcome: "Comprehensive design strategy and visual guidelines"
    },
    {
      phase: "Prototyping",
      duration: "1-2 weeks",
      activities: ["Wireframe creation", "Interactive prototypes", "User testing", "Iteration cycles"],
      outcome: "Validated prototypes ready for development"
    },
    {
      phase: "Development",
      duration: "2-4 weeks",
      activities: ["Data integration", "Visualization coding", "Performance optimization", "Quality assurance"],
      outcome: "Fully functional visualizations and dashboards"
    },
    {
      phase: "Deployment",
      duration: "3-5 days",
      activities: ["System integration", "User training", "Documentation", "Go-live support"],
      outcome: "Live visualizations with trained users"
    }
  ]

  const toolsAndTechnologies = [
    { category: "Business Intelligence", tools: ["Tableau", "Power BI", "Looker", "Qlik Sense"] },
    { category: "Web Visualization", tools: ["D3.js", "Chart.js", "Plotly", "Observable"] },
    { category: "Design Tools", tools: ["Figma", "Adobe Creative Suite", "Sketch", "Canva Pro"] },
    { category: "Data Processing", tools: ["Python", "R", "SQL", "Google Sheets"] }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      {/* Hero Section with Visual Elements */}
      <section className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90"></div>
        </div>
        
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm mb-6">
                <PieChart className="mr-2 h-4 w-4" />
                Data Visualization Studio
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Transform Data Into
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Visual Stories
                </span>
              </h1>
              <p className="text-xl leading-8 text-purple-100 mb-8">
                Create compelling data visualizations that turn complex information into clear, 
                actionable insights through interactive dashboards, custom charts, and visual storytelling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold">
                  Start Visualization Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </div>
            </div>
            
            {/* Visual Preview Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded mb-2 flex items-end justify-between p-2">
                    {[60, 80, 45, 90, 70].map((height, i) => (
                      <div key={i} className="bg-white/80 rounded-sm w-2" style={{height: `${height}%`}}></div>
                    ))}
                  </div>
                  <div className="text-xs text-white/80">Revenue Trends</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="w-12 h-12 rounded-full border-4 border-pink-400 border-t-transparent animate-spin mb-2"></div>
                  <div className="text-xs text-white/80">User Analytics</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="grid grid-cols-3 gap-1 mb-2">
                    {Array.from({length: 9}).map((_, i) => (
                      <div key={i} className={`h-3 rounded ${i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-pink-400' : 'bg-yellow-400'}`}></div>
                    ))}
                  </div>
                  <div className="text-xs text-white/80">Heatmap View</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="h-16 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold">
                      87%
                    </div>
                  </div>
                  <div className="text-xs text-white/80">Performance Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visualization Types with Tabs */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visualization Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Custom visualizations tailored to your specific needs and goals
            </p>
          </div>

          <Tabs defaultValue="0" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {visualizationTypes.map((type, index) => (
                <TabsTrigger key={index} value={index.toString()} className="text-sm">
                  <type.icon className="h-4 w-4 mr-2" />
                  {type.type.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {visualizationTypes.map((type, index) => (
              <TabsContent key={index} value={index.toString()}>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white">
                            <type.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{type.type}</h3>
                            <p className="text-gray-600">{type.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <div className="text-sm font-medium text-gray-700 mb-1">Complexity</div>
                            <Badge className={`${
                              type.complexity === 'Expert' ? 'bg-red-100 text-red-700' :
                              type.complexity === 'Advanced' ? 'bg-orange-100 text-orange-700' :
                              type.complexity === 'High' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {type.complexity}
                            </Badge>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-700 mb-1">Timeframe</div>
                            <Badge variant="outline">{type.timeframe}</Badge>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {type.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-violet-500 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Use Cases</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {type.examples.map((example, exampleIndex) => (
                            <div key={exampleIndex} className="bg-violet-50 rounded-lg p-3 text-center">
                              <div className="text-sm font-medium text-violet-900">{example}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Chart Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visualization Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Examples of our custom data visualizations across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chartGallery.map((chart, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-violet-100 to-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=300')] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto group-hover:scale-110 transition-transform">
                        <BarChart3 className="h-8 w-8" />
                      </div>
                      <div className="text-sm font-medium text-violet-900">{chart.preview}</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{chart.name}</h3>
                    <Badge variant="outline" className="text-xs">{chart.industry}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{chart.type} Visualization</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600">
              Structured approach to creating effective data visualizations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {designProcess.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6 pb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                          <Badge variant="outline">{phase.duration}</Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{phase.outcome}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {phase.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-violet-500 rounded-full mr-2 flex-shrink-0"></div>
                              {activity}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {index < designProcess.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-8 bg-gradient-to-b from-violet-500 to-purple-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600">
              Professional-grade tools for creating stunning visualizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toolsAndTechnologies.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="block text-xs py-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Visualize Your Data?
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Transform your data into compelling visual stories that drive understanding and action
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold">
                Start Visualization Project
                <Layers className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/digital-marketing/analytics-tools">View All Analytics Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
