import React from 'react'

interface StatCardProps {
  number: string
  label: string
  icon?: React.ReactNode
  variant?: 'light' | 'dark'
}

export function StatCard({ number, label, icon, variant = 'dark' }: StatCardProps) {
  const textColorClass = variant === 'dark' ? 'text-white' : 'text-charcoal'
  const labelColorClass = variant === 'dark' ? 'text-white/70' : 'text-grey'

  return (
    <div className="flex flex-col gap-3">
      {icon && (
        <div className={`${textColorClass} w-10 h-10 flex items-center justify-center`}>
          {icon}
        </div>
      )}
      <div className={`text-40 md:text-52 font-semibold ${textColorClass}`}>
        {number}
      </div>
      <div className={`text-16 ${labelColorClass}`}>
        {label}
      </div>
    </div>
  )
}
