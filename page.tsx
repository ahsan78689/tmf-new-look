import Header from "@/components/header"
import Hero from "@/components/hero"
import ServicesOverview from "@/components/services-overview"
import TechnologyStack from "@/components/technology-stack"
import AboutPreview from "@/components/about-preview"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServicesOverview />
      <TechnologyStack />
      <AboutPreview />
      <Footer />
    </div>
  )
}
