import React from 'react'
import Link from 'next/link'
import { ArrowRight, Loader2 } from 'lucide-react'

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  showArrow?: boolean
  loading?: boolean
  children: React.ReactNode
  className?: string
}

interface ButtonAsButton extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  href?: never
}

interface ButtonAsLink extends ButtonBaseProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> {
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    showArrow = false,
    loading = false,
    children,
    className = '',
    ...rest
  } = props

  const baseClass = 'btn'
  const variantClass = `btn-${variant}`
  const sizeClass = `btn-${size}`
  const combinedClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`

  const buttonContent = (
    <>
      {loading && (
        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
      )}
      {!loading && icon && iconPosition === 'left' && (
        <span className="inline-flex items-center" aria-hidden="true">
          {icon}
        </span>
      )}
      {!loading && showArrow && iconPosition === 'left' && (
        <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" />
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <span className="inline-flex items-center" aria-hidden="true">
          {icon}
        </span>
      )}
      {!loading && showArrow && iconPosition === 'right' && (
        <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" />
      )}
    </>
  )

  // Render as link when href is provided - MUST for accessibility (Cmd/Ctrl+click support)
  if ('href' in props && props.href) {
    const { href, ...linkProps } = rest as ButtonAsLink
    const isExternal = href.startsWith('http')

    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClass}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {buttonContent}
        </a>
      )
    }

    return (
      <Link href={href} className={combinedClass} {...linkProps}>
        {buttonContent}
      </Link>
    )
  }

  // Render as button
  const { disabled, ...buttonProps } = rest as ButtonAsButton
  const isDisabled = disabled || loading

  return (
    <button
      className={combinedClass}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...buttonProps}
    >
      {buttonContent}
    </button>
  )
}
