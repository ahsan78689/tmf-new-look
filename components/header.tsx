"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import GetStartedPopup from "@/components/get-started-popup"
import {
  Search,
  BarChart3,
  Users,
  Briefcase,
  BookOpenCheck,
  PhoneCall,
  Lightbulb,
  FileText,
  FileSliders,
  Settings,
  TrendingUp,
} from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const digitalMarketingServices = [
    // Organic Search
    { name: "SEO Strategy", href: "/digital-marketing/organic-search/seo-strategy", category: "Organic Search" },
    {
      name: "Keyword Research",
      href: "/digital-marketing/organic-search/keyword-research",
      category: "Organic Search",
    },
    {
      name: "On-Page Optimization",
      href: "/digital-marketing/organic-search/on-page-optimization",
      category: "Organic Search",
    },
    {
      name: "Off-Page Optimization",
      href: "/digital-marketing/organic-search/off-page-optimization",
      category: "Organic Search",
    },
    { name: "Technical SEO", href: "/digital-marketing/organic-search/technical-seo", category: "Organic Search" },
    { name: "Local SEO", href: "/digital-marketing/organic-search/local-seo", category: "Organic Search" },
    { name: "eCommerce SEO", href: "/digital-marketing/organic-search/ecommerce-seo", category: "Organic Search" },
    { name: "SEO Audits", href: "/digital-marketing/organic-search/seo-audits", category: "Organic Search" },

    // Digital Advertising
    {
      name: "PPC Management",
      href: "/digital-marketing/digital-advertising/ppc-management",
      category: "Digital Advertising",
    },
    { name: "Google Ads", href: "/digital-marketing/digital-advertising/google-ads", category: "Digital Advertising" },
    {
      name: "Social Media Advertising",
      href: "/digital-marketing/digital-advertising/social-media-advertising",
      category: "Digital Advertising",
    },
    {
      name: "Display Advertising",
      href: "/digital-marketing/digital-advertising/display-advertising",
      category: "Digital Advertising",
    },
    {
      name: "Remarketing",
      href: "/digital-marketing/digital-advertising/remarketing",
      category: "Digital Advertising",
    },
    {
      name: "Ecommerce Advertising",
      href: "/digital-marketing/digital-advertising/ecommerce-advertising",
      category: "Digital Advertising",
    },
    {
      name: "Video Advertising",
      href: "/digital-marketing/digital-advertising/video-advertising",
      category: "Digital Advertising",
    },
    {
      name: "Advertising Strategy",
      href: "/digital-marketing/digital-advertising/advertising-strategy",
      category: "Digital Advertising",
    },

    // Content Production
    {
      name: "Website Content Writing",
      href: "/digital-marketing/content-production/website-content-writing",
      category: "Content Production",
    },
    {
      name: "Blog / Article Writing",
      href: "/digital-marketing/content-production/blog-article-writing",
      category: "Content Production",
    },
    {
      name: "Product Copy Writing",
      href: "/digital-marketing/content-production/product-copy-writing",
      category: "Content Production",
    },
    {
      name: "eCommerce Content Writing",
      href: "/digital-marketing/content-production/ecommerce-content-writing",
      category: "Content Production",
    },
    {
      name: "SEO Content Writing",
      href: "/digital-marketing/content-production/seo-content-writing",
      category: "Content Production",
    },
    {
      name: "Social Media Content Writing",
      href: "/digital-marketing/content-production/social-media-content-writing",
      category: "Content Production",
    },
    {
      name: "Email Marketing Content Writing",
      href: "/digital-marketing/content-production/email-marketing-content-writing",
      category: "Content Production",
    },
    {
      name: "Multi Media Production",
      href: "/digital-marketing/content-production/multi-media-production",
      category: "Content Production",
    },

    // Analytics & Tools
    {
      name: "Conversion Rate Optimization",
      href: "/digital-marketing/analytics-tools/conversion-rate-optimization",
      category: "Analytics & Tools",
    },
    {
      name: "Web Analytics",
      href: "/digital-marketing/analytics-tools/web-analytics",
      category: "Analytics & Tools",
    },
    {
      name: "Data Visualization",
      href: "/digital-marketing/analytics-tools/data-visualization",
      category: "Analytics & Tools",
    },
    {
      name: "Reporting & Analysis",
      href: "/digital-marketing/analytics-tools/reporting-analysis",
      category: "Analytics & Tools",
    },
  ]

  const webDevelopmentServices = [
    // UI/UX Design
    { name: "Web App Design", href: "/design-development/ui-ux-design/web-app-design", category: "UI/UX Design" },
    {
      name: "eCommerce Store Design",
      href: "/design-development/ui-ux-design/ecommerce-store-design",
      category: "UI/UX Design",
    },
    {
      name: "Wireframing & Prototyping",
      href: "/design-development/ui-ux-design/wireframing-prototyping",
      category: "UI/UX Design",
    },
    {
      name: "User Research & Testing",
      href: "/design-development/ui-ux-design/user-research-testing",
      category: "UI/UX Design",
    },
    {
      name: "Brand Identity Design",
      href: "/design-development/ui-ux-design/brand-identity-design",
      category: "UI/UX Design",
    },
    {
      name: "Design System Development",
      href: "/design-development/ui-ux-design/design-system-development",
      category: "UI/UX Design",
    },

    // Development
    {
      name: "Website Development",
      href: "/design-development/development/website-development",
      category: "Development",
    },
    {
      name: "eCommerce Development",
      href: "/design-development/development/ecommerce-development",
      category: "Development",
    },
    {
      name: "CMS Development",
      href: "/design-development/development/content-management-system-cms-development",
      category: "Development",
    },
    {
      name: "Web Application Development",
      href: "/design-development/development/web-application-development",
      category: "Development",
    },
    {
      name: "Website Maintenance & Support",
      href: "/design-development/development/website-maintenance-support",
      category: "Development",
    },

    // Maintenance
    {
      name: "Website Maintenance",
      href: "/design-development/maintenance/website-maintenance",
      category: "Maintenance",
    },
    {
      name: "Security Updates",
      href: "/design-development/maintenance/security-updates",
      category: "Maintenance",
    },
    {
      name: "Performance Optimization",
      href: "/design-development/maintenance/performance-optimization",
      category: "Maintenance",
    },
  ]

  const technologyServices = [
    // Design
    { name: "Figma", href: "/technology/design/figma", category: "Design" },
    { name: "Adobe XD", href: "/technology/design/adobe-xd", category: "Design" },
    { name: "Sketch", href: "/technology/design/sketch", category: "Design" },
    { name: "InVision", href: "/technology/design/invision", category: "Design" },

    // Development
    { name: "WordPress", href: "/technology/development/wordpress", category: "Development" },
    { name: "Shopify", href: "/technology/development/shopify", category: "Development" },
    { name: "Magento", href: "/technology/development/magento", category: "Development" },
    { name: "Sitecore", href: "/technology/development/sitecore", category: "Development" },
    { name: "React", href: "/technology/development/react", category: "Development" },
    { name: "Node.js", href: "/technology/development/node-js", category: "Development" },
    { name: "HTML/CSS/JavaScript", href: "/technology/development/html-css-javascript", category: "Development" },

    // Marketing
    { name: "Google Analytics", href: "/technology/marketing/google-analytics", category: "Marketing" },
    { name: "Google Ads", href: "/technology/marketing/google-ads", category: "Marketing" },
    { name: "Google Search Console", href: "/technology/marketing/google-search-console", category: "Marketing" },
    { name: "Meta Ads Manager", href: "/technology/marketing/meta-ads-manager", category: "Marketing" },
    { name: "HubSpot", href: "/technology/marketing/hubspot", category: "Marketing" },
    { name: "Mailchimp", href: "/technology/marketing/mailchimp", category: "Marketing" },
  ]

  const companyPages = [
    { name: "About Us", href: "/who-we-are/about-us", category: "About" },
    { name: "Our Team", href: "/who-we-are/our-team", category: "About" },
    { name: "Our Values", href: "/who-we-are/our-values", category: "About" },
    { name: "Our Process", href: "/who-we-are/our-process", category: "About" },
    { name: "Case Studies", href: "/who-we-are/case-studies", category: "Work" },
    { name: "Industries We Serve", href: "/who-we-are/industries-we-serve", category: "About" },
    { name: "Blog", href: "/company/blog", category: "Resources" },
    { name: "Contact Us", href: "/company/contact-us", category: "Contact" },
    { name: "Careers", href: "/company/careers", category: "About" },
    { name: "Portfolio", href: "/company/portfolio", category: "Work" },
    { name: "White Papers", href: "/company/white-papers", category: "Resources" },
    { name: "FAQ", href: "/company/faq", category: "Resources" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <Image src="/logo.png" alt="The Meta Future" width={216} height={48} className="h-10 w-auto" />
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-purple-600 transition-colors">
                Digital Marketing
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[1200px] bg-white border-gray-200 shadow-lg">
                <div className="p-6 grid grid-cols-6 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                      <Search className="mr-2 h-5 w-5" /> Organic Search
                    </h3>
                    <div className="space-y-2">
                      {digitalMarketingServices
                        .filter((service) => service.category === "Organic Search")
                        .map((service) => (
                          <DropdownMenuItem key={service.name} asChild>
                            <Link
                              href={service.href}
                              className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                            >
                              {service.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" /> Digital Advertising
                    </h3>
                    <div className="space-y-2">
                      {digitalMarketingServices
                        .filter((service) => service.category === "Digital Advertising")
                        .map((service) => (
                          <DropdownMenuItem key={service.name} asChild>
                            <Link
                              href={service.href}
                              className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                            >
                              {service.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                      <FileText className="mr-2 h-5 w-5" /> Content Production
                    </h3>
                    <div className="space-y-2">
                      {digitalMarketingServices
                        .filter((service) => service.category === "Content Production")
                        .map((service) => (
                          <DropdownMenuItem key={service.name} asChild>
                            <Link
                              href={service.href}
                              className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                            >
                              {service.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" /> Analytics & Tools
                    </h3>
                    <div className="space-y-2">
                      {digitalMarketingServices
                        .filter((service) => service.category === "Analytics & Tools")
                        .map((service) => (
                          <DropdownMenuItem key={service.name} asChild>
                            <Link
                              href={service.href}
                              className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                            >
                              {service.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                    </div>
                  </div>

                  <div>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/digital-marketing/learn"
                        className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                      >
                        Learn
                      </Link>
                    </DropdownMenuItem>
                  </div>

                  <div className="col-span-1">
                    <div className="bg-purple-50 rounded-lg p-4 h-full">
                      <h4 className="text-lg font-semibold text-purple-700 mb-2">Unlock Your Digital Potential</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Ready to transform your online presence? Get a free consultation today!
                      </p>
                      <Button className="w-full mb-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm">
                        Get Started
                      </Button>

                      <div className="bg-white rounded-lg p-3 mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Website Performance</span>
                          <span className="text-green-600 text-sm font-bold">+89</span>
                        </div>
                        <div className="flex space-x-1 mb-2">
                          {[...Array(7)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-4 h-8 rounded-sm ${
                                i < 4 ? "bg-blue-400" : i < 6 ? "bg-purple-400" : "bg-purple-500"
                              }`}
                            ></div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-600">
                          <div className="text-center">
                            <div className="font-bold text-gray-900">45K</div>
                            <div>Page Views</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-gray-900">1.2s</div>
                            <div>Load Time</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-gray-900">99.9%</div>
                            <div>Uptime</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-purple-600 transition-colors">
                Design & Development
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[1000px] bg-white border-gray-200 shadow-lg">
                <div className="p-4 grid grid-cols-4 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <FileSliders className="mr-2 h-5 w-5" /> UI/UX Design
                    </h3>
                    {webDevelopmentServices
                      .filter((service) => service.category === "UI/UX Design")
                      .map((service) => (
                        <DropdownMenuItem key={service.name} asChild>
                          <Link
                            href={service.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                          >
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <Lightbulb className="mr-2 h-5 w-5" /> Development
                    </h3>
                    {webDevelopmentServices
                      .filter((service) => service.category === "Development")
                      .map((service) => (
                        <DropdownMenuItem key={service.name} asChild>
                          <Link
                            href={service.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                          >
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <Settings className="mr-2 h-5 w-5" /> Maintenance
                    </h3>
                    {webDevelopmentServices
                      .filter((service) => service.category === "Maintenance")
                      .map((service) => (
                        <DropdownMenuItem key={service.name} asChild>
                          <Link
                            href={service.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                          >
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </div>
                  <div>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/design-development/learn"
                        className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                      >
                        Learn
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-purple-600 transition-colors">
                Technology
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[800px] bg-white border-gray-200 shadow-lg">
                <div className="p-4 grid grid-cols-4 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <FileSliders className="mr-2 h-5 w-5" /> Design
                    </h3>
                    {technologyServices
                      .filter((service) => service.category === "Design")
                      .map((service) => (
                        <DropdownMenuItem key={service.name} asChild>
                          <Link
                            href={service.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                          >
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <Lightbulb className="mr-2 h-5 w-5" /> Development
                    </h3>
                    {technologyServices
                      .filter((service) => service.category === "Development")
                      .map((service) => (
                        <DropdownMenuItem key={service.name} asChild>
                          <Link
                            href={service.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                          >
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" /> Marketing
                    </h3>
                    {technologyServices
                      .filter((service) => service.category === "Marketing")
                      .map((service) => (
                        <DropdownMenuItem key={service.name} asChild>
                          <Link
                            href={service.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                          >
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </div>
                  <div>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/technology/learn"
                        className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                      >
                        Learn
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-purple-600 transition-colors">
                Who We Are
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[800px] bg-white border-gray-200 shadow-lg">
                <div className="p-4 grid grid-cols-4 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <Users className="mr-2 h-5 w-5" /> About
                    </h3>
                    {companyPages
                      .filter((page) => page.category === "About")
                      .map((page) => (
                        <DropdownMenuItem key={page.name} asChild>
                          <Link
                            href={page.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                          >
                            {page.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <Briefcase className="mr-2 h-5 w-5" /> Work
                    </h3>
                    {companyPages
                      .filter((page) => page.category === "Work")
                      .map((page) => (
                        <DropdownMenuItem key={page.name} asChild>
                          <Link
                            href={page.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                          >
                            {page.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <BookOpenCheck className="mr-2 h-5 w-5" /> Resources
                    </h3>
                    {companyPages
                      .filter((page) => page.category === "Resources")
                      .map((page) => (
                        <DropdownMenuItem key={page.name} asChild>
                          <Link
                            href={page.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                          >
                            {page.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                      <PhoneCall className="mr-2 h-5 w-5" /> Contact
                    </h3>
                    {companyPages
                      .filter((page) => page.category === "Contact")
                      .map((page) => (
                        <DropdownMenuItem key={page.name} asChild>
                          <Link
                            href={page.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded cursor-pointer"
                          >
                            {page.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/insight" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Insight
            </Link>
          </nav>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo.png" alt="The Meta Future" width={180} height={36} className="h-7 w-auto" />
              </Link>
            </div>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-purple-600">Digital Marketing</div>
                  {digitalMarketingServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-600 pl-4 hover:text-purple-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-purple-600">Design & Development</div>
                  {webDevelopmentServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-600 pl-4 hover:text-purple-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-purple-600">Technology</div>
                  {technologyServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-600 pl-4 hover:text-purple-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-purple-600">Who We Are</div>
                  {companyPages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="block text-sm text-gray-600 pl-4 hover:text-purple-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
                <Link href="/insight" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                  Insight
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <Image src="/logo.png" alt="The Meta Future" width={144} height={29} className="h-6 w-auto" />
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <GetStartedPopup>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 sm:px-6 text-sm">
                Get A Proposal
              </Button>
            </GetStartedPopup>
          </nav>
        </div>
      </div>
    </header>
  )
}
