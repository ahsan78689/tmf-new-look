import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Meta Future - Digital Marketing & Development Agency",
  description:
    "Transform your digital presence with comprehensive marketing strategies, stunning design, and robust development solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <div suppressHydrationWarning>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="light" 
            enableSystem={false} 
            disableTransitionOnChange
          >
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
