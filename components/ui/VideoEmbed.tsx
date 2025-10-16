import React from 'react'
import { ExternalLink } from 'lucide-react'

interface VideoEmbedProps {
  videoId: string
  title: string
}

export function VideoEmbed({ videoId, title }: VideoEmbedProps) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`

  return (
    <div className="relative group">
      {/* Elegant Container with Enhanced Borders */}
      <div className="relative rounded-none overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm shadow-2xl transition-all duration-300 group-hover:border-electricBlue/30 group-hover:shadow-[0_0_40px_rgba(14,165,233,0.15)]">
        {/* Video Aspect Ratio Container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Inner Border Glow Effect */}
        <div className="absolute inset-0 rounded-none border border-white/5 pointer-events-none" />
      </div>

      {/* Video Info Below */}
      <div className="flex items-center justify-between gap-4 mt-6 px-2">
        <h3 className="text-16 md:text-18 font-medium text-white/90">
          {title}
        </h3>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-14 md:text-16 text-electricBlue hover:text-white transition-colors font-medium whitespace-nowrap"
        >
          Watch on YouTube
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
