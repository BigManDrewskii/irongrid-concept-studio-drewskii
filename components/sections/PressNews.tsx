'use client'

import { Container } from '@/components/layout/Container'
import { PressCard } from '@/components/ui/PressCard'
import { Carousel } from '@/components/ui/Carousel'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function PressNews() {
  const headingAnimation = useScrollAnimation(0.1)
  const subtitleAnimation = useScrollAnimation(0.1)
  const carouselAnimation = useScrollAnimation(0.1)

  const articles = [
    {
      source: 'Intercalation',
      date: 'September 4, 2025',
      headline: 'Battery insurance basics',
      preview:
        'Learn how AI-powered insurance is making battery deployment safer and more affordable for energy storage projects.',
      href: '/press/battery-insurance-basics',
      banner: '/iron_grid_banner_battery_v2.png',
    },
    {
      source: 'Stanford University',
      date: 'September 4, 2025',
      headline: 'Stanford student teams secure funding to commercialize battery tech',
      preview:
        'Stanford Energy teams partnered with Iron Grid to obtain performance insurance, enabling them to attract investors and scale their innovations.',
      href: '/press/stanford-battery-funding',
      banner: '/iron_grid_banner_stanford_v2.png',
    },
    {
      source: 'Springwise',
      date: 'August 29, 2025',
      headline: 'AI insurance de-risks emerging tech',
      preview:
        'How machine learning is transforming hardware insurance by providing real-time risk assessment and transparent pricing for innovative equipment.',
      href: '/press/ai-insurance-emerging-tech',
      banner: '/iron_grid_banner_ai_v2.png',
    },
    {
      source: 'Overlook VC',
      date: 'August 28, 2025',
      headline: 'The rise of AI-driven insurance for hardware',
      preview:
        'Venture capital perspective on how intelligent insurance platforms are enabling the next generation of hardware startups to scale faster.',
      href: '/press/vc-perspective-hardware-insurance',
      banner: '/iron_grid_banner_climate_v2.png',
    },
    {
      source: 'Y Combinator',
      date: 'August 5, 2025',
      headline: 'IronGrid: the AI insurance company for hardware risk',
      preview:
        'Read more',
      href: '/press/yc-irongrid-hardware-insurance',
      banner: '/iron_grid_banner_yc.png',
    },
    {
      source: 'Stanford University',
      date: 'June 21, 2025',
      headline: 'Stanford Impact Founder (SIF-Eco) Prizewinners: 2025 Cohort',
      preview:
        'Read more',
      href: '/press/stanford-sif-eco-2025',
      banner: '/iron_grid_banner_sif_eco.png',
    },
  ]

  return (
    <section className="section-dark section-md" id="press">
      <Container>
        <div className="content-width-wide">
          {/* Heading */}
          <div className="text-center heading-gap mb-8 md:mb-12">
            <h2
              ref={headingAnimation.ref}
              className={`text-56 font-heading font-semibold text-white text-balance transition-all duration-700 ${
                headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Press &amp;&nbsp;Posts
            </h2>
            <p
              ref={subtitleAnimation.ref}
              className={`text-18 md:text-20 text-white/70 mt-3 md:mt-4 leading-relaxed transition-all duration-700 delay-150 ${
                subtitleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Coverage and insights on hardware insurance&nbsp;innovation
            </p>
          </div>

          {/* Articles Carousel */}
          <div
            ref={carouselAnimation.ref}
            className={`transition-all duration-700 delay-300 ${
              carouselAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Carousel>
              {articles.map((article, index) => (
                <PressCard
                  key={index}
                  source={article.source}
                  date={article.date}
                  headline={article.headline}
                  preview={article.preview}
                  href={article.href}
                  banner={article.banner}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  )
}
