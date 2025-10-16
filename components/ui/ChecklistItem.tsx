import React from 'react'
import { Check, X } from 'lucide-react'

interface ChecklistItemProps {
  text: string
  checked: boolean
}

export function ChecklistItem({ text, checked }: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`
          flex items-center justify-center w-5 h-5 rounded-sm mt-0.5 flex-shrink-0
          ${checked
            ? 'bg-electricBlue/10 text-electricBlue'
            : 'bg-grey-light text-grey-dark'
          }
        `}
      >
        {checked ? (
          <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
        ) : (
          <X className="w-3.5 h-3.5" strokeWidth={2.5} />
        )}
      </div>
      <span className="text-16 text-charcoal">
        {text}
      </span>
    </div>
  )
}
