import React from 'react'
import { Check } from 'lucide-react'

interface TrustBadgeProps {
  text: string
  variant?: 'light' | 'dark'
  icon?: React.ReactNode
}

export function TrustBadge({ text, variant = 'light', icon }: TrustBadgeProps) {
  const baseClasses = 'inline-flex items-center gap-1.5 text-14 font-medium px-3 py-1.5 rounded-sm'
  const variantClasses = variant === 'dark'
    ? 'bg-white/10 text-white/90 border border-white/20'
    : 'bg-grey-light text-charcoal border border-grey-medium'

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      {icon || <Check className="w-3.5 h-3.5" strokeWidth={2.5} />}
      <span className="leading-none">{text}</span>
    </div>
  )
}
