import HeroBanners from "@/components/hero-banners"
import TechnologyLogos from "@/components/technology-logos"
import FeaturedBlog from "@/components/featured-blog"
import MainServices from "@/components/main-services"
import ProcessFlow from "@/components/process-flow"
import SecondBlog from "@/components/second-blog"
import Testimonials from "@/components/testimonials"
import RecentBlogs from "@/components/recent-blogs"
import NewsletterSubscription from "@/components/newsletter-subscription"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanners />
      <TechnologyLogos />
      <FeaturedBlog />
      <MainServices />
      <ProcessFlow />
      <SecondBlog />
      <Testimonials />
      <RecentBlogs />
      <NewsletterSubscription />
    </div>
  )
}
