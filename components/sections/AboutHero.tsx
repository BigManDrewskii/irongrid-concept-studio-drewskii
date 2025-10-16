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

    // Initialize immediately without timeout
    initUnicornStudio()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <section className="w-full bg-navy">
      {/* Dark Background Container with UnicornStudio */}
      <div className="bg-navy noise-pattern relative w-full">
        {/* UnicornStudio Background - Full Width - Hidden on Mobile */}
        <div key={embedKey} className="hidden md:block absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <div
            data-us-project="C5nR2Fk5eMNHZzdRma3P"
            style={{ width: '100%', height: '100%', minWidth: '100vw' }}
            className="w-full h-full"
          />
        </div>

        {/* Header Spacer */}
        <div className="h-[80px]" />

        {/* Hero Content - Reduced padding on mobile when embed is hidden */}
        <div className="py-8 md:py-20 lg:py-32" />
      </div>
    </section>
  )
}
