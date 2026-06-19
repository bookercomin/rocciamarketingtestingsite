import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustStatement from '@/components/TrustStatement'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Results from '@/components/Results'
import CaseStudies from '@/components/CaseStudies'
import WhyRoccia from '@/components/WhyRoccia'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />
      <Hero />
      <TrustStatement />
      <Marquee />
      <Services />
      <Results />
      <CaseStudies />
      <WhyRoccia />
      <FinalCTA />
      <Footer />
    </main>
  )
}
