import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Target, Users, CheckCircle, ArrowRight, Send, Heart, TrendingUp, Zap, Award, MessageSquare } from 'lucide-react'
import Link from "next/link"

export default function EmailMarketingContentWritingPage() {
  const services = [
    {
      title: "Welcome Email Series",
      description: "Engaging welcome sequences that nurture new subscribers",
      icon: Heart,
      features: ["Onboarding sequences", "Brand introduction", "Value delivery", "Engagement building"],
    },
    {
      title: "Newsletter Content",
      description: "Regular newsletter content that keeps subscribers engaged",
      icon: MessageSquare,
      features: ["Weekly/monthly newsletters", "Industry updates", "Company news", "Valuable insights"],
    },
    {
      title: "Promotional Campaigns",
      description: "Sales-focused email campaigns that drive conversions",
      icon: Target,
      features: ["Product launches", "Sales promotions", "Limited offers", "Seasonal campaigns"],
    },
    {
      title: "Drip Campaigns",
      description: "Automated email sequences for lead nurturing and conversion",
      icon: Zap,
      features: ["Lead nurturing", "Educational series", "Product education", "Customer onboarding"],
    },
    {
      title: "Abandoned Cart Emails",
      description: "Recovery emails that bring customers back to complete purchases",
      icon: Award,
      features: ["Cart recovery", "Incentive offers", "Product reminders", "Urgency creation"],
    },
    {
      title: "Re-engagement Campaigns",
      description: "Win-back campaigns for inactive subscribers",
      icon: Users,
      features: ["Win-back sequences", "Preference updates", "Special offers", "Feedback requests"],
    },
  ]

  const emailTypes = [
    {
      type: "Transactional Emails",
      examples: ["Order confirmations", "Shipping updates", "Password resets", "Account notifications"],
      description: "Essential emails that provide important account and order information",
    },
    {
      type: "Marketing Campaigns",
      examples: ["Product promotions", "Sales announcements", "Event invitations", "Content updates"],
      description: "Promotional emails designed to drive sales and engagement",
    },
    {
      type: "Educational Content",
      examples: ["How-to guides", "Tips & tricks", "Industry insights", "Best practices"],
      description: "Value-driven content that educates and builds trust with subscribers",
    },
    {
      type: "Lifecycle Emails",
      examples: ["Welcome series", "Onboarding", "Milestone celebrations", "Renewal reminders"],
      description: "Automated emails triggered by subscriber behavior and milestones",
    },
  ]

  const emailProcess = [
    {
      step: "1",
      title: "Strategy Development",
      description: "Creating comprehensive email marketing strategies aligned with goals",
      activities: ["Audience segmentation", "Campaign planning", "Goal setting", "KPI definition"],
    },
    {
      step: "2",
      title: "Content Planning",
      description: "Developing content calendars and email sequences",
      activities: ["Content calendar", "Email sequences", "Template design", "Automation setup"],
    },
    {
      step: "3",
      title: "Copywriting",
      description: "Writing compelling email copy that drives action",
      activities: ["Subject lines", "Email body copy", "Call-to-actions", "Personalization"],
    },
    {
      step: "4",
      title: "Design Integration",
      description: "Coordinating copy with email design for optimal impact",
      activities: ["Template integration", "Visual hierarchy", "Mobile optimization", "Brand consistency"],
    },
    {
      step: "5",
      title: "Testing & Optimization",
      description: "Continuous testing and improvement of email performance",
      activities: ["A/B testing", "Performance analysis", "Optimization", "Reporting"],
    },
  ]

  const benefits = [
    "Higher email open and click-through rates",
    "Increased customer lifetime value",
    "Better subscriber engagement and retention",
    "More effective lead nurturing and conversion",
    "Enhanced brand loyalty and trust",
    "Improved ROI from email marketing campaigns",
    "Better customer segmentation and targeting",
    "Reduced unsubscribe rates and spam complaints",
  ]

  const industries = [
    { name: "E-commerce", description: "Product promotions and customer retention" },
    { name: "SaaS & Technology", description: "User onboarding and feature announcements" },
    { name: "Healthcare", description: "Patient communication and health tips" },
    { name: "Finance", description: "Account updates and financial education" },
    { name: "Education", description: "Course updates and student engagement" },
    { name: "Real Estate", description: "Property updates and market insights" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <Mail className="mr-2 h-4 w-4" />
              Email Marketing Content Writing
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Emails That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Convert & Connect
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Professional email marketing content that builds relationships, nurtures leads, 
              and drives conversions through strategic, personalized email campaigns.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Boost Email Performance
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                View Email Examples
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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <Send className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">5M+</div>
              <div className="text-sm text-gray-600">Emails Sent</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">35%</div>
              <div className="text-sm text-gray-600">Average Open Rate</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">8.5%</div>
              <div className="text-sm text-gray-600">Average Click Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Email Marketing Content Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Complete email content solutions for every stage of the customer journey
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
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

      {/* Email Types */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Types of Email Content We Create
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive email content for every business need and customer touchpoint
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            {emailTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{type.type}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, exampleIndex) => (
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

      {/* Email Process */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Email Content Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              A strategic approach to creating high-performing email campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5">
            {emailProcess.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    {item.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center">
                        <div className="mr-2 h-1 w-1 rounded-full bg-blue-600"></div>
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
              Specialized email marketing content across various industry sectors
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
              Benefits of Professional Email Content
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Why quality email content is crucial for marketing success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              Let's create email content that builds relationships and drives results
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Email Strategy
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
    </div>
  )
}
