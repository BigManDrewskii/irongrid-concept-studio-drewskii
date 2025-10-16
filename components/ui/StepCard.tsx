import React from 'react'

interface StepCardProps {
  stepNumber: number
  title: string
  description: string
}

export function StepCard({ stepNumber, title, description }: StepCardProps) {
  return (
    <div className="card-glass-subtle card-md flex flex-col gap-4 md:gap-6 hover:scale-[1.02] transition-all duration-200 group">
      {/* Step Number */}
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-electricBlue/10 border-2 border-electricBlue group-hover:bg-electricBlue group-hover:border-electricBlue flex items-center justify-center transition-all duration-200">
        <span className="text-28 md:text-32 font-semibold text-electricBlue group-hover:text-white leading-none transition-colors">{stepNumber}</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 md:gap-3">
        <h3 className="text-28 md:text-32 font-semibold text-white">
          {title}
        </h3>
        <p className="text-16 md:text-18 text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
