'use client'

import { Container } from '@/components/layout/Container'
import UnicornScene from 'unicornstudio-react/next'

export function AboutHero() {
  return (
    <section className="w-full bg-navy">
      {/* Dark Background Container with UnicornStudio */}
      <div className="bg-navy noise-pattern relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
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

        {/* Hero Content - Centered spacing */}
        <div className="flex items-center justify-center h-[calc(100%-80px)]">
          <div className="w-full max-w-4xl px-6 text-center">
            {/* Content can be added here if needed */}
          </div>
        </div>
      </div>
    </section>
  )
}
