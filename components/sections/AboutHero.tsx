'use client'

import { Container } from '@/components/layout/Container'
import UnicornScene from 'unicornstudio-react/next'

export function AboutHero() {
  return (
    <section className="w-full bg-navy min-h-screen">
      {/* Dark Background Container with UnicornStudio */}
      <div className="bg-navy noise-pattern relative w-full min-h-screen">
        {/* UnicornStudio Background - Full Width */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <UnicornScene
            projectId="C5nR2Fk5eMNHZzdRma3P"
            width="100%"
            height="100%"
            fps={30}
            lazyLoad={true}
            production={true}
            className="w-full h-full"
          />
        </div>

        {/* Header Spacer */}
        <div className="h-[80px]" />

        {/* Hero Content - Spacing for the section */}
        <div className="py-16 md:py-32 lg:py-48" />
      </div>
    </section>
  )
}
