import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export function FooterCTA() {
  return (
    <section className="section-dark section-md" id="contact-cta">
      <Container>
        <div className="content-width-normal">
          <div className="card-glass card-lg text-center relative overflow-hidden">
            {/* Electric blue glow accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-electricBlue/5 via-transparent to-transparent pointer-events-none" />

            {/* Background Pattern with Difference Blend Mode */}
            <div className="absolute inset-0" style={{ mixBlendMode: 'difference' }}>
              <Image
                src="/iron_grid_texture_diagonal.png"
                alt=""
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-56 font-heading font-semibold text-white heading-gap text-balance">
                Need insurance for your hardware&nbsp;assets?
              </h2>
              <p className="text-18 md:text-20 text-white/70 mt-4 md:mt-6 leading-relaxed max-w-2xl mx-auto">
                Get expert coverage tailored to&nbsp;your equipment. Fast quotes, transparent pricing, zero&nbsp;hassle.
              </p>
              <div className="mt-6 md:mt-8">
                <Button variant="primary" size="lg" href="/contact">
                  Contact Us Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
