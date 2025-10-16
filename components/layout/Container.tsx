import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  borders?: boolean
  className?: string
}

export function Container({ children, borders = false, className = '' }: ContainerProps) {
  return (
    <div className={`container ${borders ? 'container-borders' : ''} ${className}`}>
      {children}
    </div>
  )
}
