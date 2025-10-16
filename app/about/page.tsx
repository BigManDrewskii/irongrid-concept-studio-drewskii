import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AboutHero } from '@/components/sections/AboutHero'
import { CompanyVideo } from '@/components/sections/CompanyVideo'
import { LeadershipTeam } from '@/components/sections/LeadershipTeam'
import { FooterCTA } from '@/components/sections/FooterCTA'

export default function AboutPage() {
  return (
    <main id="main-content">
      <Header />
      <AboutHero />
      <CompanyVideo />
      <LeadershipTeam />
      <FooterCTA />
      <Footer />
    </main>
  )
}
