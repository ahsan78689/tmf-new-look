import Header from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, TrendingUp, ArrowRight, Heart } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO",
      company: "Fashion Forward Boutique",
      industry: "E-commerce",
      rating: 5,
      testimonial: "The Meta Future completely transformed our online business. Within 8 months, our revenue increased by 340% and our conversion rate nearly tripled. Their team's expertise in e-commerce optimization and digital marketing is unmatched. We went from struggling to make sales to becoming a leading fashion retailer in our niche.",
      results: "+340% Revenue Growth",
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Mike Rodriguez",
      title: "Owner",
      company: "Premier Home Services",
      industry: "Home Services",
      rating: 5,
      testimonial: "Working with The Meta Future was the best business decision I've made. They helped us dominate our local market through strategic SEO and Google My Business optimization. Our phone rings constantly with qualified leads, and we've had to hire additional staff to keep up with demand. The ROI has been incredible.",
      results: "+420% Local Leads",
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Dr. Lisa Thompson",
      title: "Medical Director",
      company: "Advanced Medical Center",
      industry: "Healthcare",
      rating: 5,
      testimonial: "The Meta Future understood the unique challenges of marketing a medical practice. Their medical SEO expertise and reputation management strategies helped us attract 220% more new patients. Our online reputation improved dramatically, and we're now the go-to medical center in our area.",
      results: "+220% New Patients",
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "David Chen",
      title: "VP of Marketing",
      company: "TechFlow Solutions",
      industry: "SaaS",
      rating: 5,
      testimonial: "The Meta Future helped us build a predictable lead generation machine. Their content marketing strategy and LinkedIn advertising reduced our cost per lead by 65% while improving lead quality by 280%. Our sales team is now closing higher-quality deals consistently, and our pipeline value has grown by 450%.",
      results: "+450% Pipeline Growth",
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Jennifer Martinez",
      title: "Marketing Director",
      company: "Luxury Real Estate Group",
      industry: "Real Estate",
      rating: 5,
      testimonial: "The Meta Future's digital marketing expertise transformed our real estate business. Their targeted Google Ads campaigns and SEO strategies increased our qualified leads by 190% while reducing our cost per acquisition. The quality of leads improved significantly, resulting in higher-value transactions.",
      results: "+190% Qualified Leads",
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-amber-500 to-orange-500",
    },
    {
      name: "Robert Kim",
      title: "Founder",
      company: "Elite Fitness Studio",
      industry: "Fitness",
      rating: 5,
      testimonial: "The Meta Future's local SEO and social media marketing strategies helped us become the premier fitness studio in our city. Our membership grew by 180% in just 6 months, and our online community engagement increased dramatically. They truly understand how to build a brand in the fitness industry.",
      results: "+180% Membership Growth",
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-red-500 to-pink-500",
    },
  ]

  const stats = [
    { metric: "Client Satisfaction", value: "98%", description: "Happy clients who recommend us" },
    { metric: "Average Growth", value: "250%", description: "Business growth achieved" },
    { metric: "Projects Completed", value: "500+", description: "Successful digital transformations" },
    { metric: "Years of Experience", value: "10+", description: "Proven track record" },
  ]

  const videoTestimonials = [
    {
      name: "Alex Thompson",
      title: "CEO, Thompson Manufacturing",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "2:15",
      preview: "See how we helped Thompson Manufacturing increase their B2B leads by 300%"
    },
    {
      name: "Maria Garcia",
      title: "Owner, Garcia Restaurant Group",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "1:45",
      preview: "Discover how our local marketing strategy boosted restaurant sales by 180%"
    },
    {
      name: "James Wilson",
      title: "Director, Wilson Law Firm",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "3:20",
      preview: "Learn how we helped Wilson Law Firm dominate legal search results"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <Heart className="mr-2 h-4 w-4" />
              Client Testimonials
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              What Our Clients{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Say About Us
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear directly from our clients about how we've helped transform their
              businesses through innovative digital marketing and web development solutions.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{stat.metric}</div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Client Success Stories
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Real feedback from real clients who've achieved remarkable results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <div className={`h-1 bg-gradient-to-r ${testimonial.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <CardTitle className="text-lg font-bold">{testimonial.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {testimonial.title}, {testimonial.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.industry}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge className={`bg-gradient-to-r ${testimonial.color} text-white border-0 text-xs`}>
                        {testimonial.results}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gray-200" />
                    <blockquote className="text-gray-700 leading-relaxed pl-6">
                      {testimonial.testimonial}
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Video Testimonials
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Watch our clients share their success stories in their own words
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={`${video.name} testimonial`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                      <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Play Video
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{video.name}</h3>
                  <p className="text-\
