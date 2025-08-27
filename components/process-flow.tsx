"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Target, Lightbulb, Code, Rocket, BarChart3, ArrowRight, CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: 1,
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Discovery & Consultation",
    description:
      "We start by understanding your business goals, target audience, and current challenges through detailed consultation.",
    details: ["Business Analysis", "Goal Setting", "Competitor Research", "Strategy Planning"],
    color: "from-blue-500 to-cyan-600",
    duration: "1-2 Days",
  },
  {
    step: 2,
    icon: <Target className="h-8 w-8" />,
    title: "Strategy Development",
    description: "Our experts create a comprehensive strategy tailored to your specific needs and market requirements.",
    details: ["Market Analysis", "Custom Strategy", "Timeline Creation", "Resource Planning"],
    color: "from-purple-500 to-violet-600",
    duration: "3-5 Days",
  },
  {
    step: 3,
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Creative Design",
    description: "We design engaging visuals, content, and user experiences that resonate with your target audience.",
    details: ["Visual Design", "Content Creation", "Brand Guidelines", "User Experience"],
    color: "from-pink-500 to-rose-600",
    duration: "1-2 Weeks",
  },
  {
    step: 4,
    icon: <Code className="h-8 w-8" />,
    title: "Development & Implementation",
    description:
      "Our development team brings the strategy to life with clean code, optimized performance, and best practices.",
    details: ["Clean Development", "Quality Assurance", "Performance Testing", "Security Implementation"],
    color: "from-green-500 to-emerald-600",
    duration: "2-4 Weeks",
  },
  {
    step: 5,
    icon: <Rocket className="h-8 w-8" />,
    title: "Launch & Deployment",
    description:
      "We carefully launch your project with thorough testing and monitoring to ensure everything works perfectly.",
    details: ["Final Testing", "Go-Live Support", "Performance Monitoring", "Issue Resolution"],
    color: "from-orange-500 to-red-600",
    duration: "1-3 Days",
  },
  {
    step: 6,
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Optimization & Growth",
    description: "We continuously monitor, analyze, and optimize your project to ensure maximum performance and ROI.",
    details: ["Performance Analysis", "Continuous Optimization", "Regular Reporting", "Growth Strategies"],
    color: "from-indigo-500 to-purple-600",
    duration: "Ongoing",
  },
]

export default function ProcessFlow() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
            Our Process
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Deliver Exceptional Results</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 6-step process ensures every project is delivered on time, within budget, and exceeds
            expectations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <CardContent className="p-8 relative h-full flex flex-col">
                    {/* Duration Badge */}
                    <div className="flex justify-end mb-4">
                      <Badge variant="secondary" className="text-xs font-medium">
                        {step.duration}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Details */}
                    <div className="mt-auto">
                      <h4 className="font-semibold text-sm text-gray-900 mb-3 text-left">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your project and see how our proven process can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </button>
            <button className="border border-gray-300 hover:border-purple-300 text-gray-700 hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
