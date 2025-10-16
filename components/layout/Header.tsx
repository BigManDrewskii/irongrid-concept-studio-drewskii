'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Fade in on mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu on Escape key - MUST for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    // Return focus to button that opened menu - MUST for accessibility
    setTimeout(() => menuButtonRef.current?.focus(), 96)
  }

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[121] flex h-[80px] items-center justify-center text-white transition-opacity duration-700 ease-out ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >

        <div className="container !w-full relative z-10">
          <div className="mx-auto flex !w-full items-center justify-between px-6 xl:px-0">
            {/* Left: Logo + Nav Pill */}
            <div className="rounded-none border border-white/10 bg-navy backdrop-blur-md shadow-lg hover:border-electricBlue/50 hover:shadow-xl transition-all duration-200 hidden xl:flex relative overflow-hidden">
              <div className="flex items-center gap-2 px-6 py-3 relative z-10">
                <Link href="/" aria-label="home" className="flex items-center pr-4">
                  <span className="font-brand text-[28px] text-white tracking-tight">IRONGRID</span>
                </Link>

                <nav className="flex items-center gap-2 pl-4">
                  <Link
                    href="/"
                    className="px-4 py-2 text-[16px] rounded-none transition-all duration-200 hover:bg-electricBlue/30 hover:text-white hover:shadow-sm relative group/link"
                  >
                    <span className="relative z-10">Home</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-electricBlue/0 via-electricBlue/20 to-electricBlue/0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="px-4 py-2 text-[16px] rounded-none transition-all duration-200 hover:bg-electricBlue/30 hover:text-white hover:shadow-sm relative group/link"
                  >
                    <span className="relative z-10">Solutions</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-electricBlue/0 via-electricBlue/20 to-electricBlue/0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <Link
                    href="/about"
                    className="px-4 py-2 text-[16px] rounded-none transition-all duration-200 hover:bg-electricBlue/30 hover:text-white hover:shadow-sm relative group/link"
                  >
                    <span className="relative z-10">About</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-electricBlue/0 via-electricBlue/20 to-electricBlue/0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                  </Link>
                </nav>
              </div>
            </div>

            {/* Mobile: Logo + Menu Pill */}
            <div className="xl:hidden">
              <Link href="/" aria-label="home" className="flex items-center px-5 py-2.5 rounded-none bg-navy/85 border border-white/15 backdrop-blur-md shadow-lg">
                <span className="font-brand text-[24px] text-white tracking-tight">IRONGRID</span>
              </Link>
            </div>

            {/* Right: Contact Pill (Desktop) */}
            <Link
              href="/contact"
              className="hidden xl:flex rounded-none border border-white/20 bg-navy/80 backdrop-blur-md shadow-lg hover:border-electricBlue hover:bg-electricBlue/20 hover:text-white hover:shadow-xl transition-all duration-200 px-6 py-3 text-[16px] font-medium relative overflow-hidden"
            >
              <span className="relative z-10">Contact</span>
            </Link>

            {/* Mobile Menu Toggle Pill */}
            <div className="xl:hidden">
              <button
                ref={menuButtonRef}
                type="button"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center rounded-none border border-white/15 bg-navy/85 backdrop-blur-md shadow-lg w-12 h-12 hover:border-electricBlue/50 hover:bg-electricBlue/15 hover:shadow-xl transition-all duration-200"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="fixed inset-0 z-[120] bg-navy pt-[80px] xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          <nav className="flex flex-col items-center gap-4 p-6 text-white" role="navigation">
            <Link
              href="/"
              className="text-[18px] transition-colors hover:text-electricBlue min-h-[44px] flex items-center"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="text-[18px] transition-colors hover:text-electricBlue min-h-[44px] flex items-center"
              onClick={closeMobileMenu}
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="text-[18px] transition-colors hover:text-electricBlue min-h-[44px] flex items-center"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-none border border-white/20 bg-white/10 px-8 py-3 text-[16px] font-medium hover:border-electricBlue hover:bg-white/20 transition-all min-h-[44px] flex items-center mt-2"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
