import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { FileText, TrendingUp, BarChart3, Users, Calendar, Clock, ArrowRight, CheckCircle, Download, Mail, Bell, Target } from 'lucide-react'
import Link from "next/link"

export default function ReportingAnalysisPage() {
  const reportingServices = [
    {
      service: "Executive Reports",
      description: "High-level strategic reports for C-suite decision making",
      icon: Target,
      frequency: "Monthly",
      deliveryTime: "2-3 days",
      features: ["KPI summaries", "Strategic insights", "Trend analysis", "Action recommendations"],
      clients: 45,
      satisfaction: 98
    },
    {
      service: "Performance Analytics",
      description: "Detailed performance analysis across all business metrics",
      icon: TrendingUp,
      frequency: "Weekly",
      deliveryTime: "1-2 days",
      features: ["Performance tracking", "Comparative analysis", "Goal monitoring", "Variance reporting"],
      clients: 78,
      satisfaction: 96
    },
    {
      service: "Custom Dashboards",
      description: "Tailored dashboards for specific business requirements",
      icon: BarChart3,
      frequency: "Real-time",
      deliveryTime: "Instant",
      features: ["Live data feeds", "Interactive charts", "Custom metrics", "Mobile access"],
      clients: 62,
      satisfaction: 97
    },
    {
      service: "Automated Reports",
      description: "Scheduled reports delivered automatically to stakeholders",
      icon: Mail,
      frequency: "Daily/Weekly",
      deliveryTime: "Automated",
      features: ["Scheduled delivery", "Multiple formats", "Distribution lists", "Alert systems"],
      clients: 89,
      satisfaction: 95
    }
  ]

  const analysisCapabilities = [
    {
      capability: "Trend Analysis",
      description: "Identify patterns and trends in your business data",
      techniques: ["Time series analysis", "Seasonal patterns", "Growth trajectories", "Forecasting"],
      accuracy: 92,
      useCase: "Revenue forecasting and market trend identification"
    },
    {
      capability: "Comparative Analysis",
      description: "Compare performance across different periods and segments",
      techniques: ["Year-over-year", "Period comparisons", "Segment analysis", "Benchmarking"],
      accuracy: 89,
      useCase: "Performance evaluation and competitive analysis"
    },
    {
      capability: "Correlation Analysis",
      description: "Discover relationships between different business metrics",
      techniques: ["Statistical correlation", "Causation analysis", "Multi-variate analysis", "Impact assessment"],
      accuracy: 87,
      useCase: "Marketing attribution and operational optimization"
    },
    {
      capability: "Predictive Analysis",
      description: "Forecast future performance based on historical data",
      techniques: ["Machine learning", "Regression analysis", "Predictive modeling", "Scenario planning"],
      accuracy: 85,
      useCase: "Budget planning and strategic decision making"
    }
  ]

  const reportFormats = [
    { format: "PDF Reports", description: "Professional formatted reports", usage: 85 },
    { format: "Interactive Dashboards", description: "Web-based interactive reports", usage: 92 },
    { format: "Excel Workbooks", description: "Detailed data analysis sheets", usage: 78 },
    { format: "PowerPoint Presentations", description: "Executive presentation format", usage: 67 },
    { format: "Email Summaries", description: "Concise email reports", usage: 94 },
    { format: "Mobile Reports", description: "Mobile-optimized reports", usage: 73 }
  ]

  const industryMetrics = [
    {
      industry: "E-commerce",
      metrics: ["Revenue", "Conversion Rate", "AOV", "Customer LTV", "Cart Abandonment", "Traffic Sources"],
      reportTypes: ["Sales Performance", "Customer Analytics", "Marketing ROI", "Inventory Analysis"]
    },
    {
      industry: "SaaS",
      metrics: ["MRR", "Churn Rate", "CAC", "User Engagement", "Feature Adoption", "Support Tickets"],
      reportTypes: ["Subscription Analytics", "User Behavior", "Growth Metrics", "Product Performance"]
    },
    {
      industry: "Healthcare",
      metrics: ["Patient Volume", "Treatment Outcomes", "Cost per Patient", "Staff Efficiency", "Quality Scores"],
      reportTypes: ["Operational Efficiency", "Patient Outcomes", "Financial Performance", "Quality Metrics"]
    },
    {
      industry: "Manufacturing",
      metrics: ["Production Volume", "Quality Rate", "Downtime", "OEE", "Cost per Unit", "Safety Incidents"],
      reportTypes: ["Production Analytics", "Quality Control", "Equipment Performance", "Cost Analysis"]
    }
  ]

  const automationFeatures = [
    { feature: "Scheduled Reports", description: "Automated report generation and delivery", adoption: 94 },
    { feature: "Alert Systems", description: "Threshold-based notifications and alerts", adoption: 87 },
    { feature: "Data Integration", description: "Automatic data collection from multiple sources", adoption: 91 },
    { feature: "Distribution Lists", description: "Automated stakeholder report distribution", adoption: 89 },
    { feature: "Format Optimization", description: "Device-specific report formatting", adoption: 76 },
    { feature: "Performance Monitoring", description: "Continuous system performance tracking", adoption: 83 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section with Report Preview */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm mb-6">
                <FileText className="mr-2 h-4 w-4" />
                Business Intelligence Reports
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Reports That
                <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                  Drive Decisions
                </span>
              </h1>
              <p className="text-xl leading-8 text-orange-100 mb-8">
                Professional reporting and analysis services that transform raw data into strategic insights, 
                automated reports, and actionable recommendations for informed business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
                  Get Custom Reports
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Sample Reports
                </Button>
              </div>
            </div>
            
            {/* Report Preview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="bg-white rounded-lg p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Executive Summary</h3>
                  <Badge className="bg-green-100 text-green-700">Live</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-gray-900">$2.4M</div>
                    <div className="text-xs text-gray-600">Monthly Revenue</div>
                    <div className="text-xs text-green-600">+18.5%</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-gray-900">94.2%</div>
                    <div className="text-xs text-gray-600">Customer Satisfaction</div>
                    <div className="text-xs text-green-600">+2.1%</div>
                  </div>
                </div>
                <div className="h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded flex items-end justify-between p-2">
                  {[45, 67, 52, 89, 73, 95, 81].map((height, i) => (
                    <div key={i} className="bg-orange-500 rounded-sm w-3" style={{height: `${height}%`}}></div>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-2 text-center">7-Day Performance Trend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Services Grid */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Reporting Services
            </h2>
            <p className="text-lg text-gray-600">
              Professional reports and analysis tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reportingServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white group-hover:scale-110 transition-transform">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.service}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">Frequency</div>
                      <Badge variant="outline" className="mt-1">{service.frequency}</Badge>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">Delivery</div>
                      <Badge variant="outline" className="mt-1">{service.deliveryTime}</Badge>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">Clients</div>
                      <div className="text-lg font-bold text-amber-600">{service.clients}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Client Satisfaction</span>
                      <span className="font-medium">{service.satisfaction}%</span>
                    </div>
                    <Progress value={service.satisfaction} className="h-2" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-amber-500 mr-2 flex-shrink-0" />
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

      {/* Analysis Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Analysis Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Deep analytical insights that uncover hidden opportunities
            </p>
          </div>

          <div className="space-y-8">
            {analysisCapabilities.map((analysis, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{analysis.capability}</h3>
                      <p className="text-gray-600 mb-4">{analysis.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700">Accuracy:</span>
                        <Badge className="bg-green-100 text-green-700">{analysis.accuracy}%</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Techniques Used</h4>
                      <div className="space-y-2">
                        {analysis.techniques.map((technique, techIndex) => (
                          <div key={techIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 flex-shrink-0"></div>
                            {technique}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Use Case</h4>
                      <p className="text-sm text-gray-700">{analysis.useCase}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Report Formats */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Report Formats
            </h2>
            <p className="text-lg text-gray-600">
              Flexible delivery options to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportFormats.map((format, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{format.format}</h3>
                  <p className="text-sm text-gray-600 mb-4">{format.description}</p>
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-amber-600">{format.usage}%</div>
                    <div className="text-xs text-gray-500">Client Usage</div>
                  </div>
                  <Progress value={format.usage} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Analytics
            </h2>
            <p className="text-lg text-gray-600">
              Specialized metrics and reports for different industries
            </p>
          </div>

          <div className="space-y-8">
            {industryMetrics.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{industry.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Metrics Tracked</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.metrics.map((metric, metricIndex) => (
                          <Badge key={metricIndex} variant="secondary" className="text-xs">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Report Types</h4>
                      <div className="space-y-2">
                        {industry.reportTypes.map((reportType, reportIndex) => (
                          <div key={reportIndex} className="flex items-center text-sm text-gray-600">
                            <FileText className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                            {reportType}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Automation & Intelligence
            </h2>
            <p className="text-lg text-gray-600">
              Smart automation features that save time and improve accuracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Bell className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.feature}</h3>
                  <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                  <div className="mb-3">
                    <div className="text-xl font-bold text-amber-600">{feature.adoption}%</div>
                    <div className="text-xs text-gray-500">Adoption Rate</div>
                  </div>
                  <Progress value={feature.adoption} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Reporting?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Get professional reports and analysis that provide clarity and drive strategic decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 font-semibold">
                Start Reporting Project
                <Download className="ml-2 h-4 w-4" />
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
