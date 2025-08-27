import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PenTool, Target, Search, CheckCircle, ArrowRight, FileText, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function WebsiteContentWritingPage() {
  const services = [
    {
      title: "Website Copy",
      description: "Compelling homepage and landing page copy that converts visitors",
      icon: PenTool,
      features: ["Homepage copy", "Landing pages", "About us pages", "Service descriptions"],
    },
    {
      title: "SEO Content Writing",
      description: "Search-optimized content that ranks and engages readers",
      icon: Search,
      features: ["Keyword research", "SEO optimization", "Meta descriptions", "Content strategy"],
    },
    {
      title: "Product Descriptions",
      description: "Persuasive product copy that drives sales and conversions",
      icon: Target,
      features: ["E-commerce copy", "Product features", "Benefits-focused", "Call-to-action optimization"],
    },
    {
      title: "Blog Content",
      description: "Engaging blog posts that establish authority and drive traffic",
      icon: FileText,
      features: ["Industry articles", "How-to guides", "Thought leadership", "Content calendars"],
    },
    {
      title: "Email Copy",
      description: "Email campaigns that nurture leads and drive conversions",
      icon: Users,
      features: ["Newsletter content", "Drip campaigns", "Welcome sequences", "Promotional emails"],
    },
    {
      title: "Social Media Copy",
      description: "Engaging social content that builds community and drives engagement",
      icon: TrendingUp,
      features: ["Post captions", "Ad copy", "Story content", "Community management"],
    },
  ]

  const writingProcess = [
    {
      step: "1",
      title: "Research & Strategy",
      description: "Understanding your audience, brand voice, and content goals",
      activities: ["Audience research", "Competitor analysis", "Brand voice definition", "Content strategy"],
    },
    {
      step: "2",
      title: "Content Planning",
      description: "Creating content outlines and editorial calendars",
      activities: ["Content outlines", "Keyword mapping", "Editorial calendar", "Content pillars"],
    },
    {
      step: "3",
      title: "Writing & Creation",
      description: "Crafting compelling, on-brand content that resonates",
      activities: ["Content writing", "SEO optimization", "Brand alignment", "Call-to-action creation"],
    },
    {
      step: "4",
      title: "Review & Optimization",
      description: "Refining content for maximum impact and performance",
      activities: ["Content review", "SEO optimization", "Performance testing", "A/B testing"],
    },
    {
      step: "5",
      title: "Publishing & Monitoring",
      description: "Publishing content and tracking performance metrics",
      activities: ["Content publishing", "Performance tracking", "Analytics review", "Optimization"],
    },
  ]

  const contentTypes = [
    {
      type: "Website Pages",
      examples: ["Homepage", "About Us", "Services", "Contact"],
      description: "Core website pages that establish credibility and drive conversions",
    },
    {
      type: "Blog Articles",
      examples: ["Industry insights", "How-to guides", "Case studies", "News updates"],
      description: "Educational and engaging content that drives organic traffic",
    },
    {
      type: "Product Content",
      examples: ["Product descriptions", "Feature benefits", "Specifications", "User guides"],
      description: "Compelling product copy that highlights value and drives sales",
    },
    {
      type: "Marketing Materials",
      examples: ["Brochures", "White papers", "Case studies", "Email campaigns"],
      description: "Persuasive marketing content that nurtures leads and builds trust",
    },
  ]

  const benefits = [
    "Improved search engine rankings",
    "Higher conversion rates",
    "Enhanced brand credibility",
    "Better user engagement",
    "Increased organic traffic",
    "Stronger brand voice consistency",
    "Higher customer retention",
    "Improved lead generation",
  ]

  const industries = [
    { name: "Technology", description: "SaaS, software, and tech startups" },
    { name: "Healthcare", description: "Medical practices and health services" },
    { name: "E-commerce", description: "Online stores and retail businesses" },
    { name: "Finance", description: "Financial services and fintech" },
    { name: "Real Estate", description: "Property management and real estate" },
    { name: "Education", description: "Schools, courses, and training" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700 mb-6">
              <PenTool className="mr-2 h-4 w-4" />
              Website Content Writing
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Content That{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Converts
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Professional website content writing that engages your audience, improves SEO rankings, and drives
              conversions. From homepage copy to blog articles, we create content that works.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Get Content Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 hover:bg-green-50 bg-transparent">
                View Writing Samples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <FileText className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Content Pieces Written</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">65%</div>
              <div className="text-sm text-gray-600">Average Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <Search className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">150%</div>
              <div className="text-sm text-gray-600">Average Traffic Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Content Writing Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive content solutions for all your website needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Types of Content We Create
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              From website pages to marketing materials, we cover all your content needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            {contentTypes.map((content, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{content.type}</CardTitle>
                  <CardDescription className="text-base">{content.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {content.examples.map((example, exampleIndex) => (
                      <Badge key={exampleIndex} variant="secondary" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Process */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Writing Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              A proven methodology for creating high-quality, results-driven content
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5">
            {writingProcess.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    {item.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center">
                        <div className="mr-2 h-1 w-1 rounded-full bg-green-600"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Industries We Serve
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Specialized content writing for various industries and sectors
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Benefits of Professional Content Writing
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Why investing in quality content writing pays off
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Transform Your Website Content?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-green-100">
              Let's create compelling content that engages your audience and drives results
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Get Content Quote
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/digital-marketing/content-production">View All Content Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
