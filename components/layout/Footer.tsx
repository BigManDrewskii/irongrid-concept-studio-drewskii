'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { BackedByPill } from '@/components/ui/BackedByPill'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export function Footer() {
  const logoAnimation = useScrollAnimation(0.2)

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/50" />
        <div className="absolute bottom-0 left-0 right-0 h-[calc(100%-8rem)] bg-gradient-to-t from-electricBlue/10 via-electricBlue/5 to-transparent" />
      </div>

      {/* Full Width Logo Section */}
      <div className="w-full relative z-10 pt-12 md:pt-16 pb-3 md:pb-4">
        <Container>
          <div
            ref={logoAnimation.ref}
            className={`w-full footer-logo-container ${
              logoAnimation.isVisible ? 'footer-logo-glow' : ''
            }`}
          >
            <Image
              src="/IRONGRID-FOOTER.svg"
              alt="IRONGRID"
              width={866}
              height={97}
              className="w-full h-auto"
              priority
            />
          </div>
        </Container>
      </div>

      {/* Double Line Divider */}
      <div className="w-full relative z-10 pb-8 md:pb-10">
        <Container>
          <div className="flex flex-col gap-3">
            <div className="w-full border-t border-white/20"></div>
            <div className="w-full border-t border-white/20"></div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="px-6 pb-12 md:pb-16 lg:pb-24 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="text-16 text-white/60 space-y-3 md:space-y-4 leading-relaxed">
                <div className="text-white/70 font-medium leading-none">Iron Grid Insurance Services, LLC</div>
                <div className="space-y-1.5 md:space-y-2">
                  <div>License #6017026</div>
                  <div>Licensed in California</div>
                </div>
                <div className="space-y-1.5 md:space-y-2 pt-1 md:pt-2">
                  <div>2823 18th Street, Unit #112</div>
                  <div>San Francisco, CA 94110</div>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-14 text-white/40 mt-2 md:mt-3">
                © 2025 Iron Grid. All rights reserved.
              </div>

              {/* Backed By Section */}
              <div className="mt-4 md:mt-6">
                <div className="text-12 font-body uppercase text-white/30 mb-3 md:mb-4 tracking-wider font-medium">
                  Backed by
                </div>
                <BackedByPill size="lg" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-12 font-body uppercase mb-4 md:mb-6 text-white/40 tracking-wider font-medium" style={{ lineHeight: '1' }}>
                Navigation
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-16 text-white/60 hover:text-electricBlue transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
