import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, TrendingUp, Target, CheckCircle, ArrowRight, Users, Star, Zap, BarChart3, Rocket } from "lucide-react"
import Link from "next/link"

export default function SEOStrategyPage() {
  const benefits = [
    "Increased organic traffic and visibility",
    "Higher search engine rankings",
    "Better user experience and site performance",
    "Long-term sustainable growth",
    "Cost-effective marketing solution",
    "Improved brand credibility and trust",
    "Higher conversion rates",
    "Competitive advantage in search results",
  ]

  const process = [
    {
      step: "1",
      title: "SEO Audit & Analysis",
      description:
        "Comprehensive analysis of your current SEO performance, competitor research, and technical assessment",
      details:
        "We analyze over 200+ SEO factors including technical issues, content gaps, backlink profile, and competitor strategies.",
      icon: Search,
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Custom SEO strategy tailored to your business goals, target audience, and industry requirements",
      details:
        "Based on our findings, we create a detailed roadmap with prioritized actions, keyword targets, and timeline.",
      icon: Target,
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execute on-page, off-page, and technical SEO improvements with continuous monitoring",
      details: "Our team implements all optimizations while tracking progress and making data-driven adjustments.",
      icon: Zap,
    },
    {
      step: "4",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring, reporting, and optimization for sustained growth and improved performance",
      details: "Monthly reports, performance tracking, and ongoing optimizations to maintain and improve rankings.",
      icon: BarChart3,
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for small businesses starting their SEO journey",
      features: [
        "Keyword research & strategy",
        "On-page optimization (5 pages)",
        "Technical SEO audit",
        "Monthly reporting",
        "Google Analytics setup",
        "Local SEO basics",
        "Email support",
      ],
      cta: "Start Growing",
      popular: false,
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      popular: true,
      description: "Ideal for growing businesses ready to dominate search",
      features: [
        "Everything in Starter",
        "Content strategy & creation",
        "Link building campaign (10 links/month)",
        "Advanced local SEO optimization",
        "On-page optimization (15 pages)",
        "Competitor analysis",
        "Bi-weekly reporting",
        "Phone & email support",
        "Google My Business optimization",
      ],
      cta: "Scale Your Business",
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large businesses requiring comprehensive SEO solutions",
      features: [
        "Everything in Professional",
        "Advanced technical SEO",
        "E-commerce SEO optimization",
        "International SEO strategy",
        "Unlimited page optimization",
        "Custom content creation (8 pieces/month)",
        "Advanced link building (25 links/month)",
        "Weekly reporting & calls",
        "Dedicated account manager",
        "Priority support",
      ],
      cta: "Dominate Your Market",
      popular: false,
    },
  ]

  const caseStudies = [
    {
      client: "TechStart Solutions",
      industry: "B2B Software",
      challenge: "Low organic visibility for competitive keywords",
      results: {
        traffic: "+425%",
        rankings: "15 keywords in top 3",
        leads: "+300%",
        timeframe: "8 months",
      },
      testimonial:
        "The Meta Future's SEO strategy completely transformed our online presence. We now rank #1 for our most important keywords.",
      author: "Sarah Johnson, Marketing Director",
    },
    {
      client: "Urban Fashion Co.",
      industry: "E-commerce",
      challenge: "Poor product page rankings and low conversion rates",
      results: {
        traffic: "+380%",
        rankings: "50+ keywords in top 10",
        revenue: "+250%",
        timeframe: "6 months",
      },
      testimonial: "Our organic revenue increased by 250% in just 6 months. The ROI on SEO has been incredible.",
      author: "Michael Chen, CEO",
    },
  ]

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Local Services Pro",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Their SEO strategy helped us dominate local search. We went from page 3 to #1 for our main keywords in just 4 months.",
    },
    {
      name: "David Park",
      company: "E-commerce Plus",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "The comprehensive approach and attention to detail is outstanding. Our organic traffic has tripled since working with them.",
    },
    {
      name: "Lisa Wang",
      company: "Professional Services Inc.",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Best investment we've made in marketing. The SEO strategy delivered results beyond our expectations.",
    },
  ]

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer:
        "SEO is a long-term strategy, and results typically begin to show within 3-6 months. However, some improvements like technical fixes and on-page optimizations can show quicker results. Significant ranking improvements and traffic increases usually occur within 6-12 months of consistent optimization.",
    },
    {
      question: "What makes your SEO strategy different?",
      answer:
        "Our SEO strategy is data-driven and customized for each client. We focus on comprehensive audits, competitor analysis, and white-hat techniques that provide sustainable results. We also provide transparent reporting and regular communication to keep you informed of progress.",
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer:
        "While we cannot guarantee specific rankings (as search engines control this), we do guarantee our best efforts using proven strategies and techniques. Our track record shows that 85% of our clients achieve first-page rankings for their target keywords within 6-12 months.",
    },
    {
      question: "What's included in the SEO audit?",
      answer:
        "Our comprehensive SEO audit includes technical analysis (site speed, mobile-friendliness, crawlability), on-page optimization review, content analysis, backlink profile assessment, competitor analysis, and keyword research. You'll receive a detailed report with prioritized recommendations.",
    },
    {
      question: "Can you help with local SEO?",
      answer:
        "Local SEO is a key component of our strategy for businesses serving local markets. We optimize Google My Business profiles, build local citations, manage reviews, and implement location-based keyword strategies to improve local search visibility.",
    },
    {
      question: "How do you measure SEO success?",
      answer:
        "We track multiple KPIs including organic traffic growth, keyword rankings, conversion rates, bounce rate improvements, and ultimately, the impact on your business goals like leads and sales. We provide detailed monthly reports showing progress across all these metrics.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-8 animate-fade-in">
              <Search className="mr-2 h-4 w-4" />
              #1 SEO Strategy Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
              Strategic SEO That{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Drives Results
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Boost your search engine rankings and drive qualified organic traffic with our comprehensive SEO strategy
              services. We create data-driven SEO plans that deliver measurable results and sustainable growth for your
              business.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-200 hover:bg-green-50 bg-transparent px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                View Success Stories
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
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">300%</div>
              <div className="text-sm text-gray-600 font-medium">Average Traffic Increase</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-sm text-gray-600 font-medium">Keywords in Top 10</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-sm text-gray-600 font-medium">Successful SEO Projects</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Why Choose Our SEO Strategy?
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Our strategic approach to SEO delivers long-term results that grow your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Our SEO Process</h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              A proven methodology that delivers consistent results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge variant="outline" className="mb-4 text-white border-white/20 bg-white/10 backdrop-blur-sm">
              Success Stories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Real Results from Real Clients</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              See how our SEO strategies have transformed businesses across different industries
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl text-white">{study.client}</CardTitle>
                      <Badge variant="secondary" className="mt-2 bg-green-600/20 text-green-300 border-green-500/30">
                        {study.industry}
                      </Badge>
                    </div>
                    <Badge className="bg-green-600 text-white shadow-lg">{study.results.timeframe}</Badge>
                  </div>
                  <p className="text-gray-300">{study.challenge}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{study.results.traffic}</div>
                      <div className="text-xs text-gray-400">Traffic Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{study.results.rankings}</div>
                      <div className="text-xs text-gray-400">Top Rankings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        {study.results.leads || study.results.revenue}
                      </div>
                      <div className="text-xs text-gray-400">
                        {study.results.leads ? "Lead Growth" : "Revenue Growth"}
                      </div>
                    </div>
                  </div>
                  <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-300">
                    "{study.testimonial}"
                  </blockquote>
                  <p className="text-sm text-gray-400 mt-2">- {study.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              SEO Strategy Packages
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Choose the perfect SEO package for your business needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:scale-105 ${
                  pkg.popular
                    ? "border-green-500 shadow-2xl bg-gradient-to-br from-green-50 to-blue-50"
                    : "border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 shadow-lg">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <p className="text-gray-600 mt-2">{pkg.description}</p>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 text-lg">{pkg.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-3 text-lg transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl"
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
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Hear from businesses that have achieved remarkable growth with our SEO strategies
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
                    <Avatar className="h-12 w-12 ring-2 ring-green-200">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-green-600 to-blue-600 text-white">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Get answers to common questions about our SEO strategy services
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
                  <AccordionTrigger className="text-left font-semibold hover:text-green-600 transition-colors duration-300">
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
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <Rocket className="mx-auto h-16 w-16 text-white mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Boost Your Rankings?
            </h2>
            <p className="mt-6 text-xl leading-8 text-green-100">
              Get a free SEO audit and discover how we can improve your search visibility and drive more qualified
              traffic to your website.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                <Link href="/digital-marketing">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
