import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface PressCardProps {
  source: string
  date: string
  headline: string
  preview: string
  href: string
  banner?: string
}

export function PressCard({ source, date, headline, preview, href, banner }: PressCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col card-glass card-md transition-all duration-200 group overflow-hidden h-full"
      aria-label={`Read article: ${headline}`}
    >
      {/* Banner Image - Full Fill */}
      {banner && (
        <div className="relative w-[calc(100%+2.5rem)] md:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] h-[200px] md:h-[240px] -mx-5 -mt-5 md:-mx-6 md:-mt-6 lg:-mx-8 lg:-mt-8 mb-4 md:mb-5 overflow-hidden bg-navy flex-shrink-0">
          <Image
            src={banner}
            alt={headline}
            fill
            className="transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-3 md:gap-4 flex-1">
        {/* Meta */}
        <div className="flex flex-col gap-1 flex-shrink-0">
          <div className="text-14 font-technical text-electricBlue uppercase leading-none tracking-wide">
            {source}
          </div>
          <time className="text-12 text-white/60" dateTime={date}>
            {date}
          </time>
        </div>

        {/* Headline */}
        <h3 className="text-20 md:text-24 font-semibold text-white group-hover:text-electricBlue transition-colors line-clamp-2">
          {headline}
        </h3>

        {/* Preview */}
        <p className="text-15 md:text-16 text-white/70 line-clamp-3 leading-relaxed flex-1">
          {preview}
        </p>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-14 font-medium text-electricBlue mt-auto flex-shrink-0" aria-hidden="true">
          <span>Read more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
