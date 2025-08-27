import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Video, Camera, Mic, CheckCircle, ArrowRight, Play, Image, Music, Film, Palette, Headphones } from 'lucide-react'
import Link from "next/link"

export default function MultiMediaProductionPage() {
  const services = [
    {
      title: "Video Production",
      description: "Professional video content for marketing, training, and brand storytelling",
      icon: Video,
      features: ["Promotional videos", "Explainer videos", "Training content", "Social media videos"],
    },
    {
      title: "Audio Production",
      description: "High-quality audio content including podcasts and voiceovers",
      icon: Headphones,
      features: ["Podcast production", "Voiceover recording", "Audio editing", "Sound design"],
    },
    {
      title: "Photography",
      description: "Professional photography for products, events, and brand imagery",
      icon: Camera,
      features: ["Product photography", "Corporate headshots", "Event photography", "Stock imagery"],
    },
    {
      title: "Animation & Motion Graphics",
      description: "Engaging animated content and motion graphics for digital platforms",
      icon: Film,
      features: ["2D/3D animation", "Motion graphics", "Logo animations", "Explainer animations"],
    },
    {
      title: "Graphic Design",
      description: "Visual design assets for digital and print marketing materials",
      icon: Palette,
      features: ["Social media graphics", "Infographics", "Print materials", "Brand assets"],
    },
    {
      title: "Interactive Media",
      description: "Interactive content experiences that engage and convert audiences",
      icon: Play,
      features: ["Interactive videos", "Virtual tours", "AR/VR content", "Interactive infographics"],
    },
  ]

  const mediaTypes = [
    {
      type: "Video Content",
      examples: ["Product demos", "Testimonials", "Behind-the-scenes", "Educational content"],
      description: "Engaging video content for various platforms and purposes",
    },
    {
      type: "Audio Content",
      examples: ["Podcasts", "Audiobooks", "Voiceovers", "Music production"],
      description: "Professional audio content for entertainment and education",
    },
    {
      type: "Visual Content",
      examples: ["Infographics", "Social graphics", "Presentations", "Digital art"],
      description: "Eye-catching visual content that communicates effectively",
    },
    {
      type: "Interactive Content",
      examples: ["Quizzes", "Calculators", "Virtual experiences", "Interactive videos"],
      description: "Engaging interactive experiences that drive participation",
    },
  ]

  const productionProcess = [
    {
      step: "1",
      title: "Creative Brief",
      description: "Understanding your vision, goals, and target audience",
      activities: ["Project scoping", "Creative direction", "Audience analysis", "Goal setting"],
    },
    {
      step: "2",
      title: "Pre-Production",
      description: "Planning and preparing all aspects of the production",
      activities: ["Storyboarding", "Script writing", "Location scouting", "Talent casting"],
    },
    {
      step: "3",
      title: "Production",
      description: "Creating the multimedia content with professional equipment",
      activities: ["Filming/Recording", "Photography", "Animation", "Audio capture"],
    },
    {
      step: "4",
      title: "Post-Production",
      description: "Editing and refining content to perfection",
      activities: ["Video editing", "Audio mixing", "Color correction", "Graphics integration"],
    },
    {
      step: "5",
      title: "Delivery & Distribution",
      description: "Finalizing and delivering content in required formats",
      activities: ["Format optimization", "Quality assurance", "Delivery", "Distribution support"],
    },
  ]

  const benefits = [
    "Higher engagement rates across all platforms",
    "Improved brand recognition and recall",
    "Better storytelling and emotional connection",
    "Increased conversion rates and sales",
    "Enhanced social media presence",
    "Professional brand image and credibility",
    "Better SEO performance with rich media",
    "Competitive advantage in digital marketing",
  ]

  const industries = [
    { name: "Technology", description: "Product demos and explainer videos" },
    { name: "Healthcare", description: "Educational content and patient testimonials" },
    { name: "E-commerce", description: "Product photography and promotional videos" },
    { name: "Education", description: "Training videos and interactive learning content" },
    { name: "Real Estate", description: "Property tours and promotional materials" },
    { name: "Entertainment", description: "Content creation and promotional materials" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-700 mb-6">
              <Video className="mr-2 h-4 w-4" />
              Multi-Media Production
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Content That{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Captivates & Converts
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Professional multimedia production services that bring your brand to life through video, 
              audio, photography, and interactive content that engages audiences and drives results.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
              >
                Start Media Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-red-200 hover:bg-red-50 bg-transparent">
                View Portfolio
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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-orange-600 text-white">
                <Play className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-600">Media Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-orange-600 text-white">
                <Image className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">500%</div>
              <div className="text-sm text-gray-600">Average Engagement Increase</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-orange-600 text-white">
                <Music className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Multi-Media Production Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Complete multimedia solutions that bring your brand story to life
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-orange-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
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

      {/* Media Types */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Types of Media We Produce
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Diverse multimedia content formats for every marketing need
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            {mediaTypes.map((media, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{media.type}</CardTitle>
                  <CardDescription className="text-base">{media.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {media.examples.map((example, exampleIndex) => (
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

      {/* Production Process */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Production Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              A professional approach to creating high-quality multimedia content
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5">
            {productionProcess.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-orange-600 text-white text-lg font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    {item.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center">
                        <div className="mr-2 h-1 w-1 rounded-full bg-red-600"></div>
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
              Professional multimedia production across various industry sectors
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
              Benefits of Professional Multimedia
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Why quality multimedia content is essential for modern marketing
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-red-600 to-orange-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Create Stunning Multimedia Content?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-red-100">
              Let's bring your brand story to life with professional multimedia production
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Start Media Project
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
