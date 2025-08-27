"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, CheckCircle } from "lucide-react"

interface GetStartedPopupProps {
  children: React.ReactNode
}

export default function GetStartedPopup({ children }: GetStartedPopupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const services = [
    "SEO Strategy",
    "PPC Management",
    "Content Marketing",
    "Social Media Advertising",
    "Web Design",
    "E-commerce Development",
    "UI/UX Design",
    "Web Development",
    "Complete Digital Marketing",
    "Other",
  ]

  const budgets = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not sure yet",
  ]

  const timelines = ["ASAP", "Within 1 month", "1-3 months", "3-6 months", "6+ months", "Just exploring"]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setStep(4) // Show success message
  }

  const resetForm = () => {
    setStep(1)
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    })
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(resetForm, 300) // Reset after dialog closes
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get Started with MetaFuture
          </DialogTitle>
          <DialogDescription>Tell us about your project and we'll get back to you within 24 hours</DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <Card className="border-0 shadow-none">
            <CardHeader className="px-0">
              <CardTitle className="text-lg">Step 1: Contact Information</CardTitle>
              <CardDescription>Let's start with your basic information</CardDescription>
            </CardHeader>
            <CardContent className="px-0 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button
                  onClick={handleNext}
                  disabled={!formData.name || !formData.email}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card className="border-0 shadow-none">
            <CardHeader className="px-0">
              <CardTitle className="text-lg">Step 2: Project Details</CardTitle>
              <CardDescription>Tell us about your project requirements</CardDescription>
            </CardHeader>
            <CardContent className="px-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="service">Service Needed *</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((budget) => (
                        <SelectItem key={budget} value={budget}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>
                          {timeline}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!formData.service}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="border-0 shadow-none">
            <CardHeader className="px-0">
              <CardTitle className="text-lg">Step 3: Project Description</CardTitle>
              <CardDescription>Provide more details about your project</CardDescription>
            </CardHeader>
            <CardContent className="px-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="message">Project Description</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your project, goals, and any specific requirements..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• We'll review your project details</li>
                  <li>• Our team will contact you within 24 hours</li>
                  <li>• We'll schedule a free consultation call</li>
                  <li>• You'll receive a custom proposal</li>
                </ul>
              </div>
              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Submit Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 4 && (
          <Card className="border-0 shadow-none text-center">
            <CardContent className="px-0 py-8">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl mb-4 text-green-600">Thank You!</CardTitle>
              <CardDescription className="text-lg mb-6">
                Your project details have been submitted successfully. Our team will contact you within 24 hours to
                discuss your project.
              </CardDescription>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Project Summary:</h4>
                <div className="text-sm text-left space-y-1">
                  <p>
                    <strong>Name:</strong> {formData.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                  <p>
                    <strong>Service:</strong> {formData.service}
                  </p>
                  {formData.budget && (
                    <p>
                      <strong>Budget:</strong> {formData.budget}
                    </p>
                  )}
                  {formData.timeline && (
                    <p>
                      <strong>Timeline:</strong> {formData.timeline}
                    </p>
                  )}
                </div>
              </div>
              <Button
                onClick={handleClose}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Close
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-center pt-4">
          <div className="flex space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded-full ${
                  i <= step ? "bg-gradient-to-r from-purple-600 to-blue-600" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
