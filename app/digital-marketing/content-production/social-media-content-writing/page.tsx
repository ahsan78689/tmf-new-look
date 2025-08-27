import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Share2, Target, Heart, CheckCircle, ArrowRight, MessageCircle, Users, TrendingUp, Zap, Award, Camera } from 'lucide-react'
import Link from "next/link"

export default function SocialMediaContentWritingPage() {
  const services = [
    {
      title: "Social Media Posts",
      description: "Engaging posts that drive likes, shares, and comments across platforms",
      icon: MessageCircle,
      features: ["Platform-specific content", "Hashtag strategy", "Visual content planning", "Engagement optimization"],
    },
    {
      title: "Ad Copy & Campaigns",
      description: "Compelling social media ad copy that converts followers into customers",
      icon: Target,
      features: ["Ad copywriting", "Campaign messaging", "A/B test variations", "CTA optimization"],
    },
    {
      title: "Content Calendars",
      description: "Strategic content planning and scheduling for consistent posting",
      icon: Award,
      features: ["Content planning", "Editorial calendars", "Seasonal campaigns", "Brand consistency"],
    },
    {
      title: "Community Management",
      description: "Authentic responses and engagement that builds community",
      icon: Users,
      features: ["Response templates", "Community guidelines", "Crisis management", "Brand voice training"],
    },
    {
      title: "Influencer Content",
      description: "Collaborative content creation for influencer partnerships",
      icon: Zap,
      features: ["Influencer briefs", "Campaign guidelines", "Content templates", "Performance tracking"],
    },
    {
      title: "Visual Content Copy",
      description: "Captions and copy for visual content across all platforms",
      icon: Camera,
      features: ["Image captions", "Video scripts", "Story content", "Carousel copy"],
    },
  ]

  const platforms = [
    {
      platform: "Facebook",
      examples: ["Business posts", "Event promotions", "Community content", "Video descriptions"],
      description: "Professional content for business networking and community building",
    },
    {
      platform: "Instagram",
      examples: ["Photo captions", "Story content", "Reel scripts", "IGTV descriptions"],
      description: "Visual-first content that captures attention and drives engagement",
    },
    {
      platform: "LinkedIn",
      examples: ["Professional posts", "Industry insights", "Company updates", "Thought leadership"],
      description: "B2B focused content for professional networking and lead generation",
    },
    {
      platform: "Twitter/X",
      examples: ["Tweet threads", "News commentary", "Quick updates", "Engagement posts"],
      description: "Real-time content for news, updates, and community engagement",
    },
    {
      platform: "TikTok",
      examples: ["Video scripts", "Trend content", "Challenge participation", "Educational content"],
      description: "Creative, trend-focused content for younger demographics",
    },
    {
      platform: "YouTube",
      examples: ["Video titles", "Descriptions", "Thumbnail text", "Community posts"],
      description: "Long-form content optimization for video marketing success",
    },
  ]

  const contentProcess = [
    {
      step: "1",
      title: "Brand Analysis",
      description: "Understanding your brand voice, audience, and social media goals",
      activities: ["Brand voice audit", "Audience research", "Competitor analysis", "Platform assessment"],
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Creating a comprehensive social media content strategy",
      activities: ["Content pillars", "Posting schedule", "Hashtag strategy", "Engagement tactics"],
    },
    {
      step: "3",
      title: "Content Creation",
      description: "Writing engaging, platform-specific social media content",
      activities: ["Post writing", "Caption creation", "Story development", "Ad copy creation"],
    },
    {
      step: "4",
      title: "Visual Planning",
      description: "Coordinating copy with visual elements for maximum impact",
      activities: ["Visual briefs", "Caption alignment", "Story planning", "Video scripts"],
    },
    {
      step: "5",
      title: "Performance Optimization",
      description: "Monitoring and optimizing content based on engagement metrics",
      activities: ["Analytics review", "A/B testing", "Content optimization", "Strategy refinement"],
    },
  ]

  const benefits = [
    "Increased social media engagement and followers",
    "Higher brand awareness and recognition",
    "Better customer relationships and loyalty",
    "Improved website traffic from social platforms",
    "Enhanced brand personality and voice consistency",
    "More effective social media advertising ROI",
    "Stronger community building and user-generated content",
    "Better crisis management and reputation protection",
  ]

  const industries = [
    { name: "E-commerce", description: "Product showcases and customer engagement" },
    { name: "SaaS & Technology", description: "Feature announcements and user education" },
    { name: "Healthcare", description: "Health tips and patient community building" },
    { name: "Fashion & Beauty", description: "Trend content and product styling" },
    { name: "Food & Beverage", description: "Recipe content and brand storytelling" },
    { name: "Real Estate", description: "Property showcases and market insights" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700 mb-6">
              <Share2 className="mr-2 h-4 w-4" />
              Social Media Content Writing
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Content That{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Goes Viral
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Professional social media content writing that builds communities, drives engagement, 
              and turns followers into loyal customers across all major platforms.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
              >
                Boost Social Engagement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-pink-200 hover:bg-pink-50 bg-transparent">
                View Content Examples
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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                <Heart className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">10M+</div>
              <div className="text-sm text-gray-600">Social Engagements Generated</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">400%</div>
              <div className="text-sm text-gray-600">Average Engagement Increase</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Brands Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Social Media Content Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Complete social media content solutions for every platform and goal
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-pink-600 mr-2 flex-shrink-0" />
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

      {/* Platforms Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Platforms We Create Content For
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Platform-specific content optimized for each social media channel
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{platform.platform}</CardTitle>
                  <CardDescription className="text-base">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {platform.examples.map((example, exampleIndex) => (
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

      {/* Content Process */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Social Content Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              A strategic approach to creating engaging social media content
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5">
            {contentProcess.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-purple-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    {item.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center">
                        <div className="mr-2 h-1 w-1 rounded-full bg-pink-600"></div>
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
              Industries We Create Content For
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Specialized social media content across various industry verticals
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
              Benefits of Professional Social Content
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Why quality social media content is essential for brand success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-600 to-purple-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Transform Your Social Presence?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-pink-100">
              Let's create engaging social media content that builds community and drives results
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                Start Social Strategy
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
