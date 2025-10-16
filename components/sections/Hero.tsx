'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { BackedByPill } from '@/components/ui/BackedByPill'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Hero() {
  const headingAnimation = useScrollAnimation(0.1)
  const descriptionAnimation = useScrollAnimation(0.1)
  const ctaAnimation = useScrollAnimation(0.1)
  const backedByAnimation = useScrollAnimation(0.1)

  return (
    <section className="flex justify-center w-full bg-navy">
      <div className="pt-0 pb-0 !w-full">
        {/* Dark Background Container with Video Background */}
        <div className="bg-navy noise-pattern relative overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src="/irongrid-hero-bg.webm" type="video/webm" />
            </video>
          </div>

          {/* Header Spacer */}
          <Container>
            <div className="h-[80px]" />
          </Container>

          {/* Hero Content */}
          <Container>
            <div className="px-6 section-lg text-center content-width-normal relative z-10">
              <h1
                ref={headingAnimation.ref}
                className={`text-76 text-white font-heading font-bold mb-4 md:mb-6 text-balance transition-all duration-700 ${
                  headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Insurance for Hardware
              </h1>
              <p
                ref={descriptionAnimation.ref}
                className={`text-18 md:text-20 text-white/90 leading-relaxed transition-all duration-700 delay-150 ${
                  descriptionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                AI-powered coverage for battery systems, robotics, and manufacturing equipment. Get a&nbsp;quote in&nbsp;minutes.
              </p>

              {/* CTAs */}
              <div
                ref={ctaAnimation.ref}
                className={`flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mt-6 md:mt-8 transition-all duration-700 delay-300 ${
                  ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Button variant="primary" size="lg" href="/quote" className="w-full sm:w-auto">
                  Get a Quote
                </Button>
                <Button variant="secondary" size="lg" href="#how-it-works" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>

              {/* Backed By Section */}
              <div
                ref={backedByAnimation.ref}
                className={`flex flex-col items-center gap-3 md:gap-4 mt-6 md:mt-8 transition-all duration-700 delay-450 ${
                  backedByAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="text-14 text-white/40">Backed by</div>
                <BackedByPill size="sm" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
