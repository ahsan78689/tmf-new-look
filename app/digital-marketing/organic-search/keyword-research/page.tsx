import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Target, TrendingUp, CheckCircle, ArrowRight, BarChart, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function KeywordResearchPage() {
  const benefits = [
    "Identify high-value search opportunities",
    "Understand your target audience's search behavior",
    "Discover content gaps and opportunities",
    "Optimize for long-tail keywords",
    "Competitive keyword analysis",
    "Local and voice search optimization",
  ]

  const process = [
    {
      step: "1",
      title: "Business Analysis",
      description: "Understanding your business goals, target audience, and competitive landscape",
      icon: Target,
    },
    {
      step: "2",
      title: "Keyword Discovery",
      description: "Using advanced tools to identify relevant keywords and search terms",
      icon: Search,
    },
    {
      step: "3",
      title: "Competition Analysis",
      description: "Analyzing competitor keywords and identifying opportunities",
      icon: BarChart,
    },
    {
      step: "4",
      title: "Keyword Prioritization",
      description: "Ranking keywords by search volume, difficulty, and business value",
      icon: TrendingUp,
    },
  ]

  const tools = [
    { name: "Google Keyword Planner", description: "Free keyword research tool from Google" },
    { name: "SEMrush", description: "Comprehensive SEO and keyword analysis platform" },
    { name: "Ahrefs", description: "Advanced keyword research and backlink analysis" },
    { name: "Moz Keyword Explorer", description: "Keyword difficulty and opportunity analysis" },
    { name: "Google Search Console", description: "Performance data from Google directly" },
    { name: "Answer The Public", description: "Question-based keyword research tool" },
  ]

  const keywordTypes = [
    {
      type: "Short-tail Keywords",
      description: "1-2 word phrases with high search volume",
      example: "SEO services",
      difficulty: "High",
      volume: "High",
    },
    {
      type: "Long-tail Keywords",
      description: "3+ word phrases with specific intent",
      example: "affordable SEO services for small business",
      difficulty: "Low",
      volume: "Medium",
    },
    {
      type: "Local Keywords",
      description: "Location-based search terms",
      example: "SEO services in New York",
      difficulty: "Medium",
      volume: "Medium",
    },
    {
      type: "Commercial Keywords",
      description: "Purchase-intent keywords",
      example: "buy SEO software",
      difficulty: "High",
      volume: "High",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-8 animate-fade-in">
              <Search className="mr-2 h-4 w-4" />
              Keyword Research Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
              Strategic Keyword Research for{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                SEO Success
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Discover the keywords your customers are searching for. Our comprehensive keyword research services help
              you target the right terms to drive qualified traffic and improve your search rankings.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Keyword Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-200 hover:bg-green-50 bg-transparent px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                View Sample Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-sm text-gray-600 font-medium">Keywords Analyzed</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">150%</div>
              <div className="text-sm text-gray-600 font-medium">Average Traffic Increase</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BarChart className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-sm text-gray-600 font-medium">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Why Keyword Research Matters
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Strategic keyword research is the foundation of successful SEO campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200 group"
              >
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our Research Process
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              A systematic approach to discovering the best keywords for your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Keyword Types Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Types of Keywords We Research
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Understanding different keyword types for comprehensive SEO strategy
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {keywordTypes.map((keyword, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-green-600">{keyword.type}</CardTitle>
                    <div className="flex gap-2">
                      <Badge
                        variant="outline"
                        className={
                          keyword.difficulty === "High"
                            ? "border-red-200 text-red-600"
                            : keyword.difficulty === "Medium"
                              ? "border-yellow-200 text-yellow-600"
                              : "border-green-200 text-green-600"
                        }
                      >
                        {keyword.difficulty} Difficulty
                      </Badge>
                      <Badge variant="outline" className="border-blue-200 text-blue-600">
                        {keyword.volume} Volume
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{keyword.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Example:</p>
                    <p className="font-medium text-gray-900">"{keyword.example}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Tools We Use</h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Industry-leading tools for comprehensive keyword analysis
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                      <Search className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <Lightbulb className="mx-auto h-16 w-16 text-white mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Discover Your Keywords?
            </h2>
            <p className="mt-6 text-xl leading-8 text-green-100">
              Get a comprehensive keyword analysis and start ranking for the terms that matter most
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Keyword Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                <Link href="/digital-marketing/organic-search">View All SEO Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
