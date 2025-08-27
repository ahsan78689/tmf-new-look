"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react"

const footerLinks = {
  services: [
    { name: "SEO Services", href: "/digital-marketing/seo-services" },
    { name: "Google Ads Management", href: "/digital-marketing/google-ads-management" },
    { name: "Social Media Marketing", href: "/digital-marketing/social-media-advertising" },
    { name: "Web Development", href: "/web-development/custom-websites" },
    { name: "E-commerce Development", href: "/web-development/ecommerce-development" },
    { name: "UI/UX Design", href: "/web-development/ui-ux-design" },
  ],
  company: [
    { name: "About Us", href: "/company/about-us" },
    { name: "Our Team", href: "/company/our-team" },
    { name: "Case Studies", href: "/company/case-studies" },
    { name: "Testimonials", href: "/company/testimonials" },
    { name: "Careers", href: "/company/careers" },
    { name: "Contact Us", href: "/company/contact-us" },
  ],
  resources: [
    { name: "Blog", href: "/company/blog" },
    { name: "Insights", href: "/insight" },
    { name: "Free Tools", href: "/tools" },
    { name: "Templates", href: "/templates" },
    { name: "Guides", href: "/guides" },
    { name: "Webinars", href: "/webinars" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
  { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
  { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
  { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
  { name: "YouTube", icon: <Youtube className="h-5 w-5" />, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="The Meta Future"
                width={200}
                height={50}
                className="h-10 w-auto filter brightness-0 invert"
              />
            </Link>

            <p className="text-gray-300 leading-relaxed max-w-md">
              We're a full-service digital marketing agency helping businesses grow their online presence and achieve
              measurable results through innovative strategies and cutting-edge technology.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span className="text-sm">123 Business Ave, Suite 100, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span className="text-sm">hello@themetafuture.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest digital marketing tips and insights delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 rounded-lg"
              />
              <Button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0">
                <span className="relative z-10">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>© 2024 The Meta Future. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <div className="flex items-center space-x-4">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center space-x-4">
                  <Link href={link.href} className="hover:text-purple-400 transition-colors">
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && <span className="text-gray-600">•</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-1 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by The Meta Future Team</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
