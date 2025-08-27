import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, Target, TrendingUp, CheckCircle, ArrowRight, FileText, BarChart3, Users, Zap, Award, Globe, Eye, MousePointer } from 'lucide-react'
import Link from "next/link"

export default function SEOContentWritingPage() {
  const seoServices = [
    {
      service: "Keyword Research & Strategy",
      description: "Data-driven keyword research that targets high-value search terms",
      icon: Search,
      deliverables: ["Keyword analysis report", "Search intent mapping", "Competitor gap analysis", "Content strategy roadmap"],
      timeline: "3-5 days",
      difficulty: 85,
      impact: "High"
    },
    {
      service: "SEO Blog Posts",
      description: "Long-form content optimized for search engines and user engagement",
      icon: FileText,
      deliverables: ["1500-3000 word articles", "On-page optimization", "Internal linking strategy", "Meta descriptions"],
      timeline: "5-7 days",
      difficulty: 75,
      impact: "Very High"
    },
    {
      service: "Landing Page Optimization",
      description: "Convert organic traffic with SEO-optimized landing pages",
      icon: Target,
      deliverables: ["Conversion-focused copy", "Schema markup", "Page speed optimization", "Mobile optimization"],
      timeline: "4-6 days",
      difficulty: 90,
      impact: "High"
    },
    {
      service: "Technical SEO Content",
      description: "Content that satisfies both users and search engine algorithms",
      icon: Zap,
      deliverables: ["Structured data markup", "FAQ schema", "Breadcrumb optimization", "Core Web Vitals content"],
      timeline: "2-4 days",
      difficulty: 95,
      impact: "Medium"
    }
  ]

  const rankingFactors = [
    { factor: "Content Quality", weight: 25, description: "Comprehensive, well-researched content" },
    { factor: "Keyword Optimization", weight: 20, description: "Strategic keyword placement and density" },
    { factor: "User Experience", weight: 20, description: "Engaging, readable, and valuable content" },
    { factor: "Technical SEO", weight: 15, description: "Proper structure, schema, and optimization" },
    { factor: "Content Freshness", weight: 10, description: "Regular updates and new information" },
    { factor: "Internal Linking", weight: 10, description: "Strategic linking to related content" }
  ]

  const contentTypes = [
    {
      type: "Informational Content",
      searchIntent: "Know",
      examples: ["How-to guides", "Tutorials", "Definitions", "Explanations"],
      avgWordCount: "1500-2500",
      competitiveness: "Medium",
      conversionPotential: "Low-Medium"
    },
    {
      type: "Commercial Content",
      searchIntent: "Do",
      examples: ["Product comparisons", "Reviews", "Best-of lists", "Buying guides"],
      avgWordCount: "2000-3500",
      competitiveness: "High",
      conversionPotential: "High"
    },
    {
      type: "Transactional Content",
      searchIntent: "Buy",
      examples: ["Product pages", "Service pages", "Pricing pages", "Contact pages"],
      avgWordCount: "800-1500",
      competitiveness: "Very High",
      conversionPotential: "Very High"
    },
    {
      type: "Navigational Content",
      searchIntent: "Go",
      examples: ["Brand pages", "About pages", "Location pages", "Contact info"],
      avgWordCount: "500-1200",
      competitiveness: "Low",
      conversionPotential: "Medium"
    }
  ]

  const seoResults = [
    {
      client: "TechSolutions Inc.",
      industry: "B2B Software",
      timeframe: "6 months",
      results: {
        organicTraffic: "+285%",
        keywordRankings: "150+ top 10",
        leadGeneration: "+180%",
        contentPieces: 24
      }
    },
    {
      client: "HealthWise Clinic",
      industry: "Healthcare",
      timeframe: "8 months",
      results: {
        organicTraffic: "+320%",
        keywordRankings: "200+ top 10",
        leadGeneration: "+240%",
        contentPieces: 32
      }
    },
    {
      client: "EcoHome Products",
      industry: "E-commerce",
      timeframe: "4 months",
      results: {
        organicTraffic: "+195%",
        keywordRankings: "85+ top 10",
        leadGeneration: "+160%",
        contentPieces: 18
      }
    }
  ]

  const seoProcess = [
    {
      phase: "SEO Audit",
      duration: "2-3 days",
      description: "Comprehensive analysis of current SEO performance",
      activities: ["Technical SEO audit", "Content gap analysis", "Competitor research", "Keyword opportunity mapping"]
    },
    {
      phase: "Strategy Development",
      duration: "1-2 days",
      description: "Creating data-driven SEO content strategy",
      activities: ["Keyword clustering", "Content calendar planning", "Search intent mapping", "Success metrics definition"]
    },
    {
      phase: "Content Creation",
      duration: "5-10 days",
      description: "Writing SEO-optimized content that ranks and converts",
      activities: ["Research and writing", "On-page optimization", "Internal linking", "Meta optimization"]
    },
    {
      phase: "Optimization & Monitoring",
      duration: "Ongoing",
      description: "Continuous improvement based on performance data",
      activities: ["Performance tracking", "Content updates", "Ranking monitoring", "Strategy refinement"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with SEO Focus */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
        </div>
        
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-8">
              <Search className="mr-2 h-4 w-4" />
              SEO Content Writing Experts
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Content That{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Ranks & Converts
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto">
              Dominate search results with SEO-optimized content that drives organic traffic, 
              builds authority, and converts visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Boost SEO Rankings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 hover:bg-green-50">
                Get SEO Audit
              </Button>
            </div>

            {/* SEO Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1500+</div>
                <div className="text-sm text-gray-600">Keywords Ranked</div>
                <div className="text-xs text-green-600 font-semibold">Top 10 positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">300%</div>
                <div className="text-sm text-gray-600">Avg Traffic Increase</div>
                <div className="text-xs text-green-600 font-semibold">Within 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
                <div className="text-xs text-green-600 font-semibold">Long-term success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services with Progress Bars */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive SEO Content Services
            </h2>
            <p className="text-lg text-gray-600">
              Strategic content creation that dominates search results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                          {service.service}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">{service.timeline}</Badge>
                          <Badge className={`${service.impact === 'Very High' ? 'bg-green-100 text-green-700' : service.impact === 'High' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {service.impact} Impact
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Complexity Level</span>
                      <span>{service.difficulty}%</span>
                    </div>
                    <Progress value={service.difficulty} className="h-2" />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">Deliverables:</h4>
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full group-hover:bg-green-600 transition-colors">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking Factors Visualization */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Makes Content Rank
            </h2>
            <p className="text-lg text-gray-600">
              The key factors we optimize for search engine success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {rankingFactors.map((factor, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{factor.factor}</h3>
                      <Badge className="bg-green-100 text-green-700">{factor.weight}%</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{factor.description}</p>
                    <div className="relative">
                      <Progress value={factor.weight * 4} className="h-3" />
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-75" style={{width: `${factor.weight * 4}%`}}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Types by Search Intent */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Content Optimized by Search Intent
            </h2>
            <p className="text-lg text-gray-600">
              Strategic content creation based on user search behavior
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                      {type.type}
                    </CardTitle>
                    <Badge className="bg-blue-100 text-blue-700">
                      {type.searchIntent}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Word Count</div>
                      <div className="font-semibold">{type.avgWordCount}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Competition</div>
                      <div className="font-semibold">{type.competitiveness}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Conversion Potential</div>
                      <div className="font-semibold">{type.conversionPotential}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Content Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven SEO Results
            </h2>
            <p className="text-lg text-gray-600">
              Real businesses achieving real search engine success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {seoResults.map((result, index) => (
              <Card key={index} className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50 hover:shadow-2xl transition-all">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{result.client}</h3>
                    <p className="text-gray-600">{result.industry}</p>
                    <Badge className="mt-2 bg-green-100 text-green-700">{result.timeframe}</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Organic Traffic</span>
                      <span className="font-bold text-green-600 text-lg">{result.results.organicTraffic}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Top 10 Rankings</span>
                      <span className="font-bold text-blue-600">{result.results.keywordRankings}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Lead Generation</span>
                      <span className="font-bold text-purple-600">{result.results.leadGeneration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Content Pieces</span>
                      <span className="font-bold text-gray-900">{result.results.contentPieces}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our SEO Content Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to SEO content success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {seoProcess.map((phase, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                            {phase.phase}
                          </h3>
                          <Badge variant="secondary">{phase.duration}</Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{phase.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {phase.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                              {activity}
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
        </div>
      </section>

      {/* CTA with SEO Guarantee */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get SEO content that ranks on page 1 and drives qualified organic traffic to your business
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">90 Days</div>
                  <div className="text-green-100">Ranking Guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">FREE</div>
                  <div className="text-green-100">SEO Audit</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-green-100">Support</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start SEO Content Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/digital-marketing/content-production">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
