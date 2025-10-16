'use client'

import { Container } from '@/components/layout/Container'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function CoverageItem({ iconPath, title, description, index }: { iconPath: string; title: string; description: string; index: number }) {
  const itemAnimation = useScrollAnimation(0.1)

  return (
    <div
      ref={itemAnimation.ref}
      className={`transition-all duration-700 ${
        itemAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100 + 200}ms` }}
    >
      {/* Divider Line */}
      <div className="border-t border-borderGrey" />

      {/* Feature Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-10 md:py-12">
        {/* Left Column */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 text-steel" aria-hidden="true">
            <Image
              src={iconPath}
              alt=""
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
          <h3 className="text-24 md:text-28 font-semibold text-charcoal leading-tight pt-1">
            {title}
          </h3>
        </div>

        {/* Right Column */}
        <div className="lg:pl-12">
          <p className="text-18 text-charcoal/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function WhatWeCover() {
  const headingAnimation = useScrollAnimation(0.1)
  const socialProofAnimation = useScrollAnimation(0.1)
  const coverage = [
    {
      iconPath: '/icons/battery-minimal.svg',
      title: 'Battery systems and energy storage',
      description: 'AI-powered risk assessment monitors capacity degradation, thermal events, and performance anomalies in real-time.',
    },
    {
      iconPath: '/icons/robot-minimal.svg',
      title: 'Robotics and autonomous equipment',
      description: 'Comprehensive coverage for operational failures, component wear, system malfunctions, and downtime events.',
    },
    {
      iconPath: '/icons/factory-minimal.svg',
      title: 'Manufacturing and production machinery',
      description: 'Protection for production equipment with instant claims processing and minimal disruption to operations.',
    },
    {
      iconPath: '/icons/charging-minimal.svg',
      title: 'EV charging infrastructure',
      description: 'Coverage for charging networks including power distribution failures, equipment damage, and grid integration issues.',
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24" id="what-we-cover">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="mb-12 md:mb-16">
            <h2
              ref={headingAnimation.ref}
              className={`text-40 md:text-56 font-heading font-semibold text-charcoal text-balance transition-all duration-700 ${
                headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Comprehensive hardware protection
            </h2>
          </div>

          {/* Coverage List */}
          <div className="space-y-0">
            {coverage.map((item, index) => (
              <CoverageItem
                key={item.title}
                iconPath={item.iconPath}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}

            {/* Final Divider */}
            <div className="border-t border-borderGrey" />
          </div>

          {/* Social Proof */}
          <div
            ref={socialProofAnimation.ref}
            className={`mt-12 md:mt-16 transition-all duration-700 ${
              socialProofAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-16 md:text-18 text-charcoal/60">
              Trusted by <span className="font-semibold text-charcoal">Stanford University</span> teams
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
