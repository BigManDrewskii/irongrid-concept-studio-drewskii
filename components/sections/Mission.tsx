'use client'

import { Container } from '@/components/layout/Container'
import { Shield, Lightbulb, Handshake } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function PrincipleCard({ icon: Icon, title, description, index }: { icon: any; title: string; description: string; index: number }) {
  const cardAnimation = useScrollAnimation(0.1)

  return (
    <div
      ref={cardAnimation.ref}
      className={`text-center md:text-left transition-all duration-700 ${
        cardAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100 + 300}ms` }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-electricBlue/10 border border-electricBlue/20 mb-4 md:mb-5">
        <Icon className="w-6 h-6 text-electricBlue" strokeWidth={2} />
      </div>
      <h3 className="text-24 md:text-28 font-heading font-semibold text-white mb-3 md:mb-4">
        {title}
      </h3>
      <p className="text-16 md:text-18 text-white/80 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export function Mission() {
  const headingAnimation = useScrollAnimation(0.1)
  const statementAnimation = useScrollAnimation(0.1)

  const principles = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We stand behind our commitments, leveraging third-party underwriting and state of the art physics-informed degradation modeling.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously evolve our solutions to address the latest technologies.'
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'We work closely with customers to understand their unique needs and provide tailored solutions.'
    }
  ]

  return (
    <section className="section-dark section-md" id="mission">
      <Container>
        <div className="content-width-wide">
          {/* Mission Statement */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2
              ref={headingAnimation.ref}
              className={`text-56 font-heading font-semibold text-white mb-6 md:mb-8 transition-all duration-700 ${
                headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Our Mission
            </h2>
            <p
              ref={statementAnimation.ref}
              className={`text-20 md:text-28 text-white/90 leading-relaxed max-w-4xl mx-auto transition-all duration-700 delay-150 ${
                statementAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Accelerate the deployment of new hardware by reducing risk through industry-leading insurance solutions.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {principles.map((principle, index) => (
              <PrincipleCard
                key={principle.title}
                icon={principle.icon}
                title={principle.title}
                description={principle.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
