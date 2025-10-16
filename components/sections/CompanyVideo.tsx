'use client'

import { Container } from '@/components/layout/Container'
import { VideoEmbed } from '@/components/ui/VideoEmbed'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function CompanyVideo() {
  const headingAnimation = useScrollAnimation(0.1)
  const videoAnimation = useScrollAnimation(0.1)

  return (
    <section className="section-dark section-md hidden md:block" id="company-video">
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
              See IronGrid in Action
            </h2>
          </div>

          {/* Video Embed */}
          <div
            ref={videoAnimation.ref}
            className={`transition-all duration-700 delay-150 ${
              videoAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <VideoEmbed
              videoId="0xSwAoPR0VE"
              title="IronGrid | AI Insurance for Hardware"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
