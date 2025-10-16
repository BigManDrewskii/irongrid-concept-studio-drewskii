'use client'

import { useEffect } from 'react'

export function FlowDiagram() {
  useEffect(() => {
    // Initialize UnicornStudio if not already loaded
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false }
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js'
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
          window.UnicornStudio.init()
          window.UnicornStudio.isInitialized = true
        }
      }
      ;(document.head || document.body).appendChild(script)
    }
  }, [])

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      <div
        data-us-project="2ybpHaSV5c3bKyiMCa1t"
        className="w-full h-full border border-white/10 rounded-lg overflow-hidden"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '500px',
          maxWidth: '600px',
          aspectRatio: '1 / 1'
        }}
      />
    </div>
  )
}
