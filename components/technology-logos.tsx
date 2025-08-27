"use client"

import { useEffect, useRef } from "react"

const technologies = [
  { name: "React", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Next.js", logo: "/placeholder.svg?height=60&width=120" },
  { name: "TypeScript", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Node.js", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Python", logo: "/placeholder.svg?height=60&width=120" },
  { name: "WordPress", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Shopify", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Google Ads", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Facebook", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Instagram", logo: "/placeholder.svg?height=60&width=120" },
  { name: "LinkedIn", logo: "/placeholder.svg?height=60&width=120" },
  { name: "TikTok", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Mailchimp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "HubSpot", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120" },
  { name: "AWS", logo: "/placeholder.svg?height=60&width=120" },
]

export default function TechnologyLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Remove the JavaScript scrolling logic - we'll use CSS animations instead
  }, [])

  return (
    <section className="py-16 bg-gray-50 border-y">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-12 animate-scroll-slow"
            style={{
              animation: "scroll-horizontal 60s linear infinite",
              width: "max-content",
            }}
          >
            {/* First set of logos */}
            {technologies.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {technologies.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-slow {
          animation: scroll-horizontal 60s linear infinite;
        }
        
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
        
        .overflow-x-hidden {
          overflow-x: hidden;
        }
      `}</style>
    </section>
  )
}
