'use client'

import { Container } from '@/components/layout/Container'
import { useEffect, useState } from 'react'

export function AboutHero() {
  const [embedKey, setEmbedKey] = useState(0)

  useEffect(() => {
    // Reset embed on mount
    setEmbedKey(prev => prev + 1)

    // Clean up and reinitialize UnicornStudio
    const initUnicornStudio = () => {
      // Remove existing script if present
      const existingScript = document.querySelector('script[src*="unicornstudio"]')
      if (existingScript) {
        existingScript.remove()
      }

      // Reset window object
      if (window.UnicornStudio) {
        window.UnicornStudio.isInitialized = false
      }

      // Load script fresh
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js'
      script.onload = () => {
        if (window.UnicornStudio && window.UnicornStudio.init) {
          window.UnicornStudio.init()
          window.UnicornStudio.isInitialized = true
        }
      }
      ;(document.head || document.body).appendChild(script)
    }

    const timer = setTimeout(initUnicornStudio, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="flex justify-center w-full bg-navy">
      <div className="pt-0 pb-0 !w-full">
        {/* Dark Background Container with UnicornStudio */}
        <div className="bg-navy noise-pattern relative">
          {/* UnicornStudio Background - Full Width */}
          <div key={embedKey} className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden w-full">
            <div
              data-us-project="C5nR2Fk5eMNHZzdRma3P"
              style={{ width: '1920px', height: '840px' }}
              className="opacity-100"
            />
          </div>

          {/* Header Spacer */}
          <Container>
            <div className="h-[80px]" />
          </Container>

          {/* Hero Content - Empty but maintains original spacing */}
          <Container>
            <div className="px-6 section-lg text-center content-width-normal relative z-10">
              {/* Content removed - just maintaining the section-lg spacing */}
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
