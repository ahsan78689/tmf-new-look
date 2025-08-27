import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Megaphone, PenTool, BookOpen, ArrowRight, TrendingUp, Target, Users } from "lucide-react"
import Link from "next/link"

export default function DigitalMarketingPage() {
  const services = [
    {
      category: "Organic Search",
      icon: Search,
      description: "Improve your search engine rankings and drive organic traffic",
      color: "from-green-500 to-emerald-600",
      services: [
        {
          name: "SEO Strategy",
          href: "/digital-marketing/organic-search/seo-strategy",
          description: "Comprehensive SEO planning and execution",
        },
        {
          name: "Keyword Research",
          href: "/digital-marketing/organic-search/keyword-research",
          description: "Find the right keywords for your business",
        },
        {
          name: "On-Page Optimization",
          href: "/digital-marketing/organic-search/on-page-optimization",
          description: "Optimize your website content and structure",
        },
        {
          name: "Off-Page Optimization",
          href: "/digital-marketing/organic-search/off-page-optimization",
          description: "Build authority through link building",
        },
        {
          name: "Technical SEO",
          href: "/digital-marketing/organic-search/technical-seo",
          description: "Fix technical issues that impact rankings",
        },
        {
          name: "Local SEO",
          href: "/digital-marketing/organic-search/local-seo",
          description: "Dominate local search results",
        },
        {
          name: "eCommerce SEO",
          href: "/digital-marketing/organic-search/ecommerce-seo",
          description: "SEO for online stores",
        },
        {
          name: "SEO Audits",
          href: "/digital-marketing/organic-search/seo-audits",
          description: "Comprehensive website analysis",
        },
      ],
    },
    {
      category: "Digital Advertising",
      icon: Megaphone,
      description: "Targeted advertising campaigns that deliver results",
      color: "from-blue-500 to-cyan-600",
      services: [
        {
          name: "PPC Management",
          href: "/digital-marketing/digital-advertising/ppc-management",
          description: "Professional pay-per-click campaign management",
        },
        {
          name: "Google Ads",
          href: "/digital-marketing/digital-advertising/google-ads",
          description: "Search and display advertising on Google",
        },
        {
          name: "Social Media Advertising",
          href: "/digital-marketing/digital-advertising/social-media-advertising",
          description: "Facebook, Instagram, LinkedIn ads",
        },
        {
          name: "Display Advertising",
          href: "/digital-marketing/digital-advertising/display-advertising",
          description: "Banner and visual advertising campaigns",
        },
        {
          name: "Remarketing",
          href: "/digital-marketing/digital-advertising/remarketing",
          description: "Re-engage previous website visitors",
        },
        {
          name: "Ecommerce Advertising",
          href: "/digital-marketing/digital-advertising/ecommerce-advertising",
          description: "Shopping ads and product promotion",
        },
        {
          name: "Video Advertising",
          href: "/digital-marketing/digital-advertising/video-advertising",
          description: "YouTube and video platform advertising",
        },
        {
          name: "Advertising Strategy",
          href: "/digital-marketing/digital-advertising/advertising-strategy",
          description: "Strategic planning for advertising campaigns",
        },
      ],
    },
    {
      category: "Content Production",
      icon: PenTool,
      description: "High-quality content that engages and converts",
      color: "from-purple-500 to-violet-600",
      services: [
        {
          name: "Website Content Writing",
          href: "/digital-marketing/content-production/website-content-writing",
          description: "Professional website copywriting",
        },
        {
          name: "Blog / Article Writing",
          href: "/digital-marketing/content-production/blog-article-writing",
          description: "Engaging blog posts and articles",
        },
        {
          name: "Product Copy Writing",
          href: "/digital-marketing/content-production/product-copy-writing",
          description: "Compelling product descriptions",
        },
        {
          name: "eCommerce Content Writing",
          href: "/digital-marketing/content-production/ecommerce-content-writing",
          description: "Content for online stores",
        },
        {
          name: "SEO Content Writing",
          href: "/digital-marketing/content-production/seo-content-writing",
          description: "Search-optimized content creation",
        },
        {
          name: "Social Media Content Writing",
          href: "/digital-marketing/content-production/social-media-content-writing",
          description: "Social media posts and campaigns",
        },
        {
          name: "Email Marketing Content Writing",
          href: "/digital-marketing/content-production/email-marketing-content-writing",
          description: "Email campaigns and newsletters",
        },
        {
          name: "Multi Media Production",
          href: "/digital-marketing/content-production/multimedia-production",
          description: "Video, audio, and visual content",
        },
      ],
    },
  ]

  const stats = [
    { icon: TrendingUp, label: "Average ROI Increase", value: "250%" },
    { icon: Target, label: "Campaign Success Rate", value: "94%" },
    { icon: Users, label: "Clients Served", value: "500+" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 mb-6">
              <Megaphone className="mr-2 h-4 w-4" />
              Digital Marketing Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Drive Growth with Strategic{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Digital Marketing
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From SEO and PPC to content marketing and social media advertising, we provide comprehensive digital
              marketing solutions that deliver measurable results for your business.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-12 sm:py-16 lg:py-20 ${categoryIndex % 2 === 1 ? "bg-gray-50" : ""}`}
        >
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} text-white`}
              >
                <category.icon className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{category.category}</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <CardHeader className="relative pb-4">
                    <CardTitle className="text-lg font-semibold text-gray-900">{service.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative pt-0">
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between p-0 text-purple-600 hover:text-purple-700"
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Learn Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Learn Digital Marketing</h2>
            <p className="mt-4 text-lg leading-8 text-purple-100">
              Access our comprehensive library of digital marketing resources, guides, and articles to stay ahead of the
              curve.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/digital-marketing/learn">
                  Explore Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
