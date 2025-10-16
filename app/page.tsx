import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { WhatWeCover } from '@/components/sections/WhatWeCover'
import { PressNews } from '@/components/sections/PressNews'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FooterCTA } from '@/components/sections/FooterCTA'

export default function Home() {
  return (
    <main id="main-content">
      <Header />
      <Hero />
      <WhatWeCover />
      <PressNews />
      <HowItWorks />
      <FooterCTA />
      <Footer />
    </main>
  )
}
