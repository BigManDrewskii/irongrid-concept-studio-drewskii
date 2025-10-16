'use client'

import { Container } from '@/components/layout/Container'
import { ProcessStep } from '@/components/ui/ProcessStep'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function AnimatedProcessStep({ number, title, description, index }: { number: number; title: string; description: string; index: number }) {
  const stepAnimation = useScrollAnimation(0.1)

  return (
    <div
      ref={stepAnimation.ref}
      className={`transition-all duration-700 ${
        stepAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100 + 300}ms` }}
    >
      <ProcessStep
        number={number}
        title={title}
        description={description}
      />
    </div>
  )
}

export function HowItWorks() {
  const headingAnimation = useScrollAnimation(0.1)
  const subtitleAnimation = useScrollAnimation(0.1)
  const steps = [
    {
      number: 1,
      title: 'Submit hardware specs',
      description:
        'Upload technical documentation, operating parameters, and usage data through our secure portal.',
    },
    {
      number: 2,
      title: 'AI risk assessment',
      description:
        'Machine learning models analyze 50+ risk factors in real-time to evaluate coverage requirements.',
    },
    {
      number: 3,
      title: 'Instant quote',
      description:
        'Receive transparent pricing with a complete breakdown of coverage limits, premiums, and terms.',
    },
    {
      number: 4,
      title: 'Activate coverage',
      description:
        'Digital policy issued immediately with 24/7 claims portal access and dedicated support.',
    },
  ]

  return (
    <section id="how-it-works" className="section-dark section-md">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center heading-gap mb-12 md:mb-16">
            <h2
              ref={headingAnimation.ref}
              className={`text-56 font-heading font-semibold text-white text-balance transition-all duration-700 ${
                headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Fast, transparent, intelligent
            </h2>
            <p
              ref={subtitleAnimation.ref}
              className={`text-18 md:text-20 text-white/70 mt-3 md:mt-4 leading-relaxed transition-all duration-700 delay-150 ${
                subtitleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              From specs to coverage in&nbsp;minutes
            </p>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <AnimatedProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
