import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-heading text-white mb-4">404</h1>
        <p className="text-lg text-white/60 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block rounded-full border border-white/10 backdrop-blur-md shadow-lg hover:border-electricBlue/50 hover:bg-white/10 transition-all duration-200 px-6 py-2.5 text-14 font-medium text-white"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
