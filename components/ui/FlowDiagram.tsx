'use client'

import UnicornScene from 'unicornstudio-react/next'

export function FlowDiagram() {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      <UnicornScene
        projectId="2ybpHaSV5c3bKyiMCa1t"
        width="600px"
        height="500px"
        scale={0.7}
        fps={30}
        lazyLoad={true}
        production={true}
        className="w-full h-full border border-white/10 rounded-lg overflow-hidden max-w-[600px] min-h-[500px] aspect-square"
      />
    </div>
  )
}
