import React from 'react'

interface IconFeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  variant?: 'light' | 'grid'
}

export function IconFeatureCard({ icon, title, description, variant = 'light' }: IconFeatureCardProps) {
  const isGrid = variant === 'grid'

  return (
    <div
      className={`
        flex flex-col gap-4 p-6 md:p-8 rounded-sm
        border transition-all duration-200
        ${isGrid
          ? 'border-grey/20 hover:border-electricBlue hover:bg-grey-light/50'
          : 'border-transparent'
        }
      `}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-electricBlue/10 text-electricBlue">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-20 md:text-24 font-semibold text-charcoal">
          {title}
        </h3>
        <p className="text-16 text-grey">
          {description}
        </p>
      </div>
    </div>
  )
}
