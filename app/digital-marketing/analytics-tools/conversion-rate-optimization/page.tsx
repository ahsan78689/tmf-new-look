import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestTube, TrendingUp, Target, Users, MousePointer, Eye, Zap, ArrowRight, CheckCircle, BarChart3, Activity, Award } from 'lucide-react'
import Link from "next/link"

export default function ConversionRateOptimizationPage() {
  const testingMethods = [
    {
      method: "A/B Testing",
      description: "Split test two versions to find the winner",
      icon: TestTube,
      successRate: 85,
      avgImprovement: "23%",
      features: ["Statistical significance", "Traffic splitting", "Real-time results", "Winner selection"]
    },
    {
      method: "Multivariate Testing",
      description: "Test multiple elements simultaneously",
      icon: Target,
      successRate: 78,
      avgImprovement: "31%",
      features: ["Multiple variables", "Interaction effects", "Complex analysis", "Optimal combinations"]
    },
    {
      method: "User Experience Testing",
      description: "Analyze user behavior and interactions",
      icon: Eye,
      successRate: 92,
      avgImprovement: "45%",
      features: ["Heatmap analysis", "Session recordings", "User feedback", "Journey mapping"]
    },
    {
      method: "Funnel Optimization",
      description: "Optimize entire conversion funnels",
      icon: TrendingUp,
      successRate: 88,
      avgImprovement: "38%",
      features: ["Drop-off analysis", "Step optimization", "Flow improvement", "Conversion tracking"]
    }
  ]

  const optimizationAreas = [
    { area: "Landing Pages", impact: "High", difficulty: "Medium", timeframe: "2-4 weeks" },
    { area: "Product Pages", impact: "High", difficulty: "Low", timeframe: "1-2 weeks" },
    { area: "Checkout Process", impact: "Very High", difficulty: "High", timeframe: "4-6 weeks" },
    { area: "Contact Forms", impact: "Medium", difficulty: "Low", timeframe: "1 week" },
    { area: "Navigation", impact: "Medium", difficulty: "Medium", timeframe: "2-3 weeks" },
    { area: "Mobile Experience", impact: "High", difficulty: "Medium", timeframe: "3-4 weeks" }
  ]

  const caseStudies = [
    {
      client: "E-commerce Store",
      challenge: "Low checkout completion rate",
      solution: "Simplified checkout process with progress indicators",
      result: "+127% conversion rate",
      metric: "From 2.3% to 5.2%"
    },
    {
      client: "SaaS Platform",
      challenge: "Poor trial-to-paid conversion",
      solution: "Optimized onboarding flow and pricing page",
      result: "+89% trial conversions",
      metric: "From 12% to 23%"
    },
    {
      client: "Lead Generation",
      challenge: "High form abandonment",
      solution: "Multi-step forms with social proof",
      result: "+156% form completions",
      metric: "From 8% to 20.5%"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section with Interactive Elements */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <TestTube className="mr-2 h-4 w-4" />
              Conversion Rate Optimization Lab
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Turn Visitors Into
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Customers
              </span>
            </h1>
            <p className="text-xl leading-8 text-white/90 mb-8 max-w-3xl mx-auto">
              Scientific approach to conversion optimization. We test, measure, and optimize every element 
              of your customer journey to maximize conversions and revenue.
            </p>
            
            {/* Interactive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300">+150%</div>
                <div className="text-sm text-white/80">Average Conversion Lift</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-white/80">Tests Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300">$2M+</div>
                <div className="text-sm text-white/80">Revenue Generated</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Start Free CRO Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Methods with Progress Bars */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Testing Arsenal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced testing methodologies that deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testingMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white group-hover:scale-110 transition-transform">
                        <method.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{method.method}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                      {method.avgImprovement} avg lift
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Success Rate</span>
                      <span className="font-medium">{method.successRate}%</span>
                    </div>
                    <Progress value={method.successRate} className="h-2" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
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

      {/* Optimization Areas Table */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Optimize
            </h2>
            <p className="text-lg text-gray-600">
              Strategic optimization across your entire conversion funnel
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Optimization Area</th>
                    <th className="px-6 py-4 text-center font-semibold">Impact</th>
                    <th className="px-6 py-4 text-center font-semibold">Difficulty</th>
                    <th className="px-6 py-4 text-center font-semibold">Timeframe</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {optimizationAreas.map((area, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{area.area}</td>
                      <td className="px-6 py-4 text-center">
                        <Badge 
                          variant={area.impact === 'Very High' ? 'default' : area.impact === 'High' ? 'secondary' : 'outline'}
                          className={area.impact === 'Very High' ? 'bg-red-100 text-red-700' : area.impact === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}
                        >
                          {area.impact}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge 
                          variant="outline"
                          className={area.difficulty === 'High' ? 'border-red-200 text-red-700' : area.difficulty === 'Medium' ? 'border-yellow-200 text-yellow-700' : 'border-green-200 text-green-700'}
                        >
                          {area.difficulty}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">{area.timeframe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies with Tabs */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-gray-600">
              Real case studies from our CRO campaigns
            </p>
          </div>

          <Tabs defaultValue="0" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {caseStudies.map((study, index) => (
                <TabsTrigger key={index} value={index.toString()} className="text-sm">
                  {study.client}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {caseStudies.map((study, index) => (
              <TabsContent key={index} value={index.toString()}>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.client}</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl p-8">
                          <div className="text-4xl font-bold mb-2">{study.result}</div>
                          <div className="text-emerald-100 mb-4">Conversion Improvement</div>
                          <div className="text-lg font-medium">{study.metric}</div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Optimize Your Conversions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free CRO audit and discover your biggest conversion opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Get Free CRO Audit
                <Activity className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <Link href="/digital-marketing/analytics-tools">View All Analytics Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
