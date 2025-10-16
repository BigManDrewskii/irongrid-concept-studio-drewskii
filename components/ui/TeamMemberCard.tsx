import React from 'react'
import Image from 'next/image'

interface TeamMemberCardProps {
  photo: string
  name: string
  title: string
  bio: string
}

export function TeamMemberCard({ photo, name, title, bio }: TeamMemberCardProps) {
  return (
    <div className="relative group h-full">
      {/* Main Card Container */}
      <div className="relative flex flex-col bg-white/[0.02] border border-white/10 rounded-none overflow-hidden backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-electricBlue/30 hover:shadow-[0_0_50px_rgba(14,165,233,0.1)] h-full">

        {/* Photo Section */}
        <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover object-center transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-500" />
        </div>

        {/* Content Section */}
        <div className="relative p-6 md:p-8 flex flex-col gap-4 flex-1">
          {/* Name & Title */}
          <div className="relative flex-shrink-0">
            <h3 className="text-24 md:text-28 font-heading font-semibold text-white mb-2 tracking-tight line-clamp-1">
              {name}
            </h3>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-electricBlue/10 border border-electricBlue/20">
              <div className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
              <p className="text-14 md:text-16 text-electricBlue font-medium whitespace-nowrap">
                {title}
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-15 md:text-16 text-white/75 leading-relaxed flex-1">
            {bio}
          </p>
        </div>
      </div>
    </div>
  )
}
