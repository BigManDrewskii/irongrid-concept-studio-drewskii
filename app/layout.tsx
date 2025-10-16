import type { Metadata, Viewport } from 'next'
import { Goldman, Manrope } from 'next/font/google'
import './globals.css'

const goldman = Goldman({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-goldman',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://getirongrid.com'),
  title: 'IronGrid - Insurance for Hardware Innovation',
  description: 'AI-powered insurance for battery systems, robotics, and manufacturing equipment. Physics-informed risk assessment. Transparent pricing. Get coverage in minutes.',
  keywords: ['hardware insurance', 'battery insurance', 'robotics insurance', 'manufacturing insurance', 'AI risk assessment', 'equipment insurance'],
  authors: [{ name: 'IronGrid Insurance Services, LLC' }],
  openGraph: {
    title: 'IronGrid - Insurance for Hardware Innovation',
    description: 'AI-powered insurance for battery systems, robotics, and manufacturing equipment. Get coverage in minutes.',
    url: 'https://getirongrid.com',
    siteName: 'IronGrid',
    type: 'website',
    images: [
      {
        url: '/iron_grid_banner_ai_v2.png',
        width: 1200,
        height: 630,
        alt: 'IronGrid - Insurance for Hardware Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IronGrid - Insurance for Hardware Innovation',
    description: 'AI-powered insurance for hardware. Get coverage in minutes.',
    images: ['/iron_grid_banner_ai_v2.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#1A1F2E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allow zoom for accessibility
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${goldman.variable} ${manrope.variable}`}>
      <body className={manrope.className}>
        {/* Skip to content link for keyboard navigation - MUST for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
