import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BarChart3, Users, MousePointer, Clock, TrendingUp, Eye, Target, ArrowRight, CheckCircle, Activity, Globe, Smartphone } from 'lucide-react'
import Link from "next/link"

export default function WebAnalyticsPage() {
  const analyticsMetrics = [
    {
      category: "Traffic Analytics",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      metrics: [
        { name: "Sessions", value: "125,847", change: "+12.5%", trend: "up" },
        { name: "Page Views", value: "487,293", change: "+8.3%", trend: "up" },
        { name: "Bounce Rate", value: "34.2%", change: "-5.1%", trend: "down" },
        { name: "Avg. Session Duration", value: "3m 42s", change: "+15.2%", trend: "up" }
      ]
    },
    {
      category: "User Behavior",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      metrics: [
        { name: "New Users", value: "89,234", change: "+18.7%", trend: "up" },
        { name: "Returning Users", value: "36,613", change: "+22.1%", trend: "up" },
        { name: "User Engagement", value: "67.8%", change: "+9.4%", trend: "up" },
        { name: "Pages per Session", value: "4.2", change: "+6.8%", trend: "up" }
      ]
    },
    {
      category: "Conversion Tracking",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      metrics: [
        { name: "Goal Completions", value: "8,947", change: "+28.3%", trend: "up" },
        { name: "Conversion Rate", value: "7.1%", change: "+19.6%", trend: "up" },
        { name: "Revenue", value: "$284,592", change: "+31.2%", trend: "up" },
        { name: "ROI", value: "425%", change: "+45.8%", trend: "up" }
      ]
    }
  ]

  const trackingCapabilities = [
    {
      title: "Real-Time Monitoring",
      description: "Live tracking of user activity and website performance",
      features: ["Active users", "Real-time events", "Live conversions", "Traffic sources"],
      icon: Activity
    },
    {
      title: "E-commerce Tracking",
      description: "Complete e-commerce analytics and revenue tracking",
      features: ["Product performance", "Sales funnel", "Revenue attribution", "Shopping behavior"],
      icon: BarChart3
    },
    {
      title: "Mobile Analytics",
      description: "Comprehensive mobile user behavior and app analytics",
      features: ["Mobile traffic", "App interactions", "Device insights", "Mobile conversions"],
      icon: Smartphone
    },
    {
      title: "Custom Events",
      description: "Track specific user actions and business-critical events",
      features: ["Button clicks", "Form submissions", "Video plays", "File downloads"],
      icon: MousePointer
    }
  ]

  const analyticsTools = [
    { name: "Google Analytics 4", setup: "Advanced", reporting: "Custom", integration: "Full" },
    { name: "Google Tag Manager", setup: "Complete", reporting: "Event", integration: "Seamless" },
    { name: "Search Console", setup: "Verified", reporting: "SEO", integration: "Connected" },
    { name: "Hotjar", setup: "Configured", reporting: "Behavioral", integration: "Active" },
    { name: "Facebook Pixel", setup: "Optimized", reporting: "Social", integration: "Tracking" },
    { name: "LinkedIn Insight", setup: "Enabled", reporting: "B2B", integration: "Professional" }
  ]

  const implementationSteps = [
    {
      step: 1,
      title: "Analytics Audit",
      description: "Comprehensive review of current tracking setup",
      duration: "1-2 days",
      deliverables: ["Current state analysis", "Gap identification", "Recommendations report"]
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Custom analytics strategy aligned with business goals",
      duration: "2-3 days",
      deliverables: ["Measurement plan", "KPI framework", "Implementation roadmap"]
    },
    {
      step: 3,
      title: "Technical Implementation",
      description: "Setup and configuration of analytics tools",
      duration: "1-2 weeks",
      deliverables: ["Tool configuration", "Custom tracking", "Quality assurance"]
    },
    {
      step: 4,
      title: "Dashboard Creation",
      description: "Custom dashboards and automated reporting",
      duration: "3-5 days",
      deliverables: ["Executive dashboards", "Automated reports", "Alert systems"]
    },
    {
      step: 5,
      title: "Training & Optimization",
      description: "Team training and ongoing optimization",
      duration: "Ongoing",
      deliverables: ["User training", "Documentation", "Monthly optimization"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dashboard Preview */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm mb-6">
                <BarChart3 className="mr-2 h-4 w-4" />
                Web Analytics Intelligence
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Data-Driven
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Decision Making
                </span>
              </h1>
              <p className="text-xl leading-8 text-blue-100 mb-8">
                Transform your website data into actionable insights with comprehensive analytics 
                implementation, custom dashboards, and strategic reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Get Analytics Setup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Demo Dashboard
                </Button>
              </div>
            </div>
            
            {/* Mock Dashboard Preview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Analytics Overview</h3>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Live</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">24,847</div>
                  <div className="text-xs text-blue-200">Active Users</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">$12,394</div>
                  <div className="text-xs text-blue-200">Revenue Today</div>
                </div>
              </div>
              <div className="h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-end justify-between p-2">
                {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                  <div key={i} className="bg-cyan-400 rounded-sm w-3" style={{height: `${height}%`}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Metrics Dashboard */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real-Time Analytics Dashboard
            </h2>
            <p className="text-lg text-gray-600">
              Live metrics from our analytics implementations
            </p>
          </div>

          <div className="space-y-8">
            {analyticsMetrics.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                  <div className="flex items-center space-x-3">
                    <category.icon className="h-6 w-6" />
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="p-6 border-r border-gray-200 last:border-r-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm font-medium text-gray-600">{metric.name}</div>
                          <div className={`flex items-center text-xs ${
                            metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            <TrendingUp className={`h-3 w-3 mr-1 ${
                              metric.trend === 'down' ? 'rotate-180' : ''
                            }`} />
                            {metric.change}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Capabilities Grid */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Tracking Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive analytics solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trackingCapabilities.map((capability, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white group-hover:scale-110 transition-transform">
                      <capability.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{capability.title}</CardTitle>
                      <CardDescription className="text-base">{capability.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Tools Matrix */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Analytics Tools We Master
            </h2>
            <p className="text-lg text-gray-600">
              Professional implementation across all major analytics platforms
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Analytics Tool</th>
                    <th className="px-6 py-4 text-center font-semibold">Setup Level</th>
                    <th className="px-6 py-4 text-center font-semibold">Reporting Type</th>
                    <th className="px-6 py-4 text-center font-semibold">Integration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {analyticsTools.map((tool, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{tool.name}</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="bg-blue-100 text-blue-700">{tool.setup}</Badge>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge variant="outline" className="border-purple-200 text-purple-700">
                          {tool.reporting}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="bg-green-100 text-green-700">{tool.integration}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              Structured approach to analytics implementation and optimization
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {implementationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <Badge key={deliverableIndex} variant="secondary" className="text-xs">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Unlock Your Data Potential?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Get professional analytics implementation that drives real business results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Start Analytics Audit
                <Eye className="ml-2 h-4 w-4" />
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
