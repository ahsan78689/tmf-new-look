import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  FileSearch,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Users,
  Star,
  BarChart,
  Zap,
  Globe,
  Clock,
  Target,
  Search,
} from "lucide-react"
import Link from "next/link"

export default function SEOAuditsPage() {
  const auditComponents = [
    {
      icon: Zap,
      title: "Technical SEO Analysis",
      description: "Comprehensive technical review of your website's SEO foundation",
      checks: [
        "Site speed and Core Web Vitals",
        "Mobile-friendliness assessment",
        "Crawlability and indexing issues",
        "URL structure and redirects",
        "SSL certificate and security",
        "XML sitemap optimization",
      ],
    },
    {
      icon: FileSearch,
      title: "On-Page SEO Review",
      description: "Detailed analysis of your content and on-page optimization",
      checks: [
        "Title tags and meta descriptions",
        "Header tag structure (H1-H6)",
        "Content quality and keyword usage",
        "Internal linking strategy",
        "Image optimization and alt tags",
        "Schema markup implementation",
      ],
    },
    {
      icon: Globe,
      title: "Off-Page SEO Assessment",
      description: "Evaluation of your website's authority and external factors",
      checks: [
        "Backlink profile analysis",
        "Domain authority assessment",
        "Competitor backlink comparison",
        "Social signals evaluation",
        "Local citations (if applicable)",
        "Brand mention analysis",
      ],
    },
    {
      icon: Target,
      title: "Keyword & Content Analysis",
      description: "Strategic review of your keyword targeting and content strategy",
      checks: [
        "Current keyword rankings",
        "Keyword opportunity analysis",
        "Content gap identification",
        "Competitor keyword analysis",
        "Search intent alignment",
        "Content optimization recommendations",
      ],
    },
  ]

  const sampleFindings = [
    {
      category: "Critical Issues",
      color: "text-red-600 bg-red-50 border-red-200",
      icon: AlertTriangle,
      issues: [
        "Site loading speed is 4.2 seconds (should be under 3s)",
        "Missing SSL certificate on 15 pages",
        "Duplicate meta descriptions on 45% of pages",
        "Broken internal links found on 23 pages",
      ],
    },
    {
      category: "High Priority",
      color: "text-orange-600 bg-orange-50 border-orange-200",
      icon: AlertTriangle,
      issues: [
        "Missing H1 tags on 12 important pages",
        "Images without alt text (67% of images)",
        "No schema markup implementation",
        "Thin content on 18 product pages",
      ],
    },
    {
      category: "Medium Priority",
      color: "text-yellow-600 bg-yellow-50 border-yellow-200",
      icon: Clock,
      issues: [
        "Opportunity to optimize 25 title tags",
        "Internal linking could be improved",
        "Meta descriptions could be more compelling",
        "Some pages have low word count",
      ],
    },
    {
      category: "Opportunities",
      color: "text-green-600 bg-green-50 border-green-200",
      icon: CheckCircle,
      issues: [
        "Strong domain authority (DA: 45)",
        "Good mobile usability score",
        "Quality backlink profile",
        "Strong brand presence in search",
      ],
    },
  ]

  const packages = [
    {
      name: "Basic Audit",
      price: "$497",
      period: "one-time",
      description: "Essential SEO audit for small websites",
      pages: "Up to 25 pages",
      deliverables: [
        "Technical SEO analysis",
        "On-page optimization review",
        "Basic keyword analysis",
        "Priority action plan",
        "PDF report (15-20 pages)",
        "Email support for questions",
      ],
      timeline: "3-5 business days",
      cta: "Get Basic Audit",
      popular: false,
    },
    {
      name: "Professional Audit",
      price: "$997",
      period: "one-time",
      popular: true,
      description: "Comprehensive audit for growing businesses",
      pages: "Up to 100 pages",
      deliverables: [
        "Everything in Basic Audit",
        "Competitor analysis (3 competitors)",
        "Backlink profile analysis",
        "Content gap analysis",
        "Local SEO review (if applicable)",
        "Detailed PDF report (30-40 pages)",
        "1-hour strategy call",
        "30-day email support",
      ],
      timeline: "5-7 business days",
      cta: "Get Professional Audit",
    },
    {
      name: "Enterprise Audit",
      price: "$1,997",
      period: "one-time",
      description: "Complete audit for large websites and enterprises",
      pages: "Unlimited pages",
      deliverables: [
        "Everything in Professional Audit",
        "Advanced technical analysis",
        "International SEO review",
        "E-commerce SEO analysis",
        "Custom competitor research (5+ competitors)",
        "Video walkthrough of findings",
        "Comprehensive PDF report (50+ pages)",
        "2-hour strategy session",
        "60-day priority support",
        "Implementation roadmap",
      ],
      timeline: "7-10 business days",
      cta: "Get Enterprise Audit",
      popular: false,
    },
  ]

  const testimonials = [
    {
      name: "Robert Johnson",
      company: "TechStart Solutions",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "The SEO audit revealed critical issues we didn't know existed. After implementing their recommendations, our traffic increased by 150%.",
    },
    {
      name: "Amanda Chen",
      company: "E-commerce Fashion",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Incredibly detailed audit with actionable recommendations. The strategy call was invaluable for understanding our next steps.",
    },
    {
      name: "Mark Rodriguez",
      company: "Local Services Pro",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Best investment we made. The audit identified opportunities that led to a 200% increase in local search visibility.",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Website Analysis",
      description: "We crawl and analyze your entire website using advanced SEO tools",
      timeline: "1-2 days",
      icon: Search,
    },
    {
      step: "2",
      title: "Competitor Research",
      description: "Analyze your top competitors to identify opportunities and gaps",
      timeline: "1 day",
      icon: BarChart,
    },
    {
      step: "3",
      title: "Report Creation",
      description: "Compile findings into a comprehensive, actionable report",
      timeline: "2-3 days",
      icon: FileSearch,
    },
    {
      step: "4",
      title: "Strategy Session",
      description: "Review findings and create an implementation roadmap",
      timeline: "1 hour call",
      icon: Target,
    },
  ]

  const faqs = [
    {
      question: "What's included in an SEO audit?",
      answer:
        "Our SEO audit includes technical analysis, on-page optimization review, off-page assessment, keyword analysis, competitor research, and a detailed action plan. You'll receive a comprehensive report with prioritized recommendations and implementation guidance.",
    },
    {
      question: "How long does an SEO audit take?",
      answer:
        "Depending on the package, audits take 3-10 business days. Basic audits are completed in 3-5 days, Professional audits in 5-7 days, and Enterprise audits in 7-10 days. We'll provide regular updates throughout the process.",
    },
    {
      question: "Do you provide implementation support?",
      answer:
        "Yes! All audit packages include email support for questions about the recommendations. Professional and Enterprise packages also include strategy calls to help you understand and prioritize the implementations.",
    },
    {
      question: "What tools do you use for SEO audits?",
      answer:
        "We use industry-leading tools including Screaming Frog, SEMrush, Ahrefs, Google Search Console, PageSpeed Insights, and proprietary analysis tools to ensure comprehensive coverage of all SEO factors.",
    },
    {
      question: "Can you audit e-commerce websites?",
      answer:
        "Our Enterprise audit package includes specialized e-commerce SEO analysis covering product pages, category optimization, shopping feeds, and conversion optimization recommendations.",
    },
    {
      question: "What if I need help implementing the recommendations?",
      answer:
        "We offer implementation services separately. After your audit, we can discuss ongoing SEO services to help you execute the recommendations and achieve the projected results.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-8 animate-fade-in">
              <FileSearch className="mr-2 h-4 w-4" />
              Professional SEO Audits
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
              Comprehensive SEO Audits That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Reveal Everything
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Discover exactly what's holding your website back from ranking higher in search results. Our detailed SEO
              audits provide actionable insights and a clear roadmap to improve your search visibility.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Your SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 hover:bg-blue-50 bg-transparent px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
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
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FileSearch className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Websites Audited</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BarChart className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-sm text-gray-600 font-medium">SEO Factors Analyzed</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Components Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">What We Analyze</h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Our comprehensive SEO audit covers every aspect of your website's search performance
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {auditComponents.map((component, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <component.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{component.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.checks.map((check, checkIndex) => (
                      <li key={checkIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{check}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Findings Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Sample Audit Findings
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              See the type of insights and recommendations you'll receive in your SEO audit
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {sampleFindings.map((finding, index) => (
              <Card key={index} className={`border-2 ${finding.color} hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <finding.icon className={`h-6 w-6 ${finding.color.split(" ")[0]}`} />
                    <CardTitle className={`text-lg ${finding.color.split(" ")[0]}`}>{finding.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {finding.issues.map((issue, issueIndex) => (
                      <li key={issueIndex} className="text-sm text-gray-700">
                        • {issue}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our Audit Process
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              A systematic approach to uncovering every SEO opportunity
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <Badge variant="outline" className="mt-2 border-blue-200 text-blue-600">
                    {item.timeline}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              SEO Audit Packages
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Choose the audit package that fits your website size and needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:scale-105 ${
                  pkg.popular
                    ? "border-blue-500 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50"
                    : "border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 shadow-lg">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <p className="text-gray-600 mt-2">{pkg.description}</p>
                  <Badge variant="outline" className="mt-2 mx-auto border-blue-200 text-blue-600">
                    {pkg.pages}
                  </Badge>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 text-lg ml-2">{pkg.period}</span>
                  </div>
                  <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-700">
                    {pkg.timeline}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {pkg.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-3 text-lg transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                        : "bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Clients Say About Our Audits
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Hear from businesses that discovered game-changing insights through our SEO audits
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 ring-2 ring-blue-200">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Get answers to common questions about our SEO audit services
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg mb-4 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-blue-600 transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <FileSearch className="mx-auto h-16 w-16 text-white mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Discover What's Holding You Back?
            </h2>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Get a comprehensive SEO audit and uncover the exact steps needed to improve your search rankings and drive
              more organic traffic.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Your SEO Audit Now
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
