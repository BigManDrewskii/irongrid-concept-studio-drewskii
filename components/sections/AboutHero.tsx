'use client'

import { Container } from '@/components/layout/Container'
import { useEffect, useState } from 'react'

export function AboutHero() {
  const [embedKey, setEmbedKey] = useState(0)

  useEffect(() => {
    // Reset embed on mount
    setEmbedKey(prev => prev + 1)

    // Initialize UnicornStudio with inline script approach
    const initUnicornStudio = () => {
      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: false }
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js'
        script.onload = () => {
          if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init()
            window.UnicornStudio.isInitialized = true
          }
        }
        ;(document.head || document.body).appendChild(script)
      }
    }

    initUnicornStudio()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <section className="w-full bg-navy">
      {/* Dark Background Container with UnicornStudio */}
      <div className="bg-navy noise-pattern relative w-full">
        {/* UnicornStudio Background - Full Width */}
        <div key={embedKey} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center">
          <div
            data-us-project="C5nR2Fk5eMNHZzdRma3P"
            style={{ width: '1728px', height: '1117px', minWidth: '100%', minHeight: '100%' }}
            className="w-full h-full"
          />
        </div>

        {/* Header Spacer */}
        <div className="h-[80px]" />

        {/* Hero Content - Reduced padding on mobile when embed is hidden */}
        <div className="py-16 md:py-32 lg:py-48" />
      </div>
    </section>
  )
}
