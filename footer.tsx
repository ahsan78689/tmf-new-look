import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const digitalMarketingServices = [
    { name: "SEO Strategy", href: "/digital-marketing/organic-search/seo-strategy" },
    { name: "PPC Management", href: "/digital-marketing/digital-advertising/ppc-management" },
    { name: "Content Marketing", href: "/digital-marketing/content-production/website-content-writing" },
    { name: "Social Media Advertising", href: "/digital-marketing/digital-advertising/social-media-advertising" },
  ]

  const designDevelopmentServices = [
    { name: "Web Design", href: "/design-development/ui-ux-design/web-app-design" },
    { name: "E-commerce Development", href: "/design-development/development/ecommerce-development" },
    { name: "UI/UX Design", href: "/design-development/ui-ux-design" },
    { name: "Web Development", href: "/design-development/development/website-development" },
  ]

  const company = [
    { name: "About Us", href: "/who-we-are/about-us" },
    { name: "Our Team", href: "/who-we-are/our-team" },
    { name: "Our Values", href: "/who-we-are/our-values" },
    { name: "Case Studies", href: "/who-we-are/case-studies" },
    { name: "Industries We Serve", href: "/who-we-are/industries-we-serve" },
  ]

  const resources = [
    { name: "Digital Marketing Learn", href: "/digital-marketing/learn" },
    { name: "Design & Development Learn", href: "/design-development/learn" },
    { name: "Technology Resources", href: "/technology/learn" },
    { name: "Our Process", href: "/who-we-are/our-process" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="The Meta Future"
                width={180}
                height={60}
                className="h-6 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400">
              Full-service digital agency specializing in web design, development, and digital marketing solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Digital Marketing</h3>
            <ul className="space-y-3">
              {digitalMarketingServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Design & Development */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Design & Development</h3>
            <ul className="space-y-3">
              {designDevelopmentServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-gray-800">
              <h4 className="font-medium mb-3">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">hello@metafuture.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">© 2024 MetaFuture. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
