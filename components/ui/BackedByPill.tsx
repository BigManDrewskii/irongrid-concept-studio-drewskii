import Image from 'next/image'

interface BackedByPillProps {
  size?: 'sm' | 'lg'
}

export function BackedByPill({ size = 'sm' }: BackedByPillProps) {
  const logoHeight = size === 'sm' ? 32 : 40
  const logoWidthYC = size === 'sm' ? 155 : 193
  const logoWidthVC = size === 'sm' ? 153 : 191

  return (
    <div className="inline-flex flex-wrap items-center gap-4 md:gap-6 border-0 outline-0">
      <Image
        src="/y-comb-logo.svg"
        alt="Y Combinator"
        width={logoWidthYC}
        height={logoHeight}
        className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-auto border-0 outline-0"
        style={{ height: size === 'sm' ? '28px' : '36px', maxHeight: size === 'sm' ? '28px' : '40px', border: 'none', outline: 'none' }}
      />
      <Image
        src="/venture-clim-tech-logo.svg"
        alt="Venture Climate Tech"
        width={logoWidthVC}
        height={logoHeight}
        className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-auto border-0 outline-0"
        style={{ height: size === 'sm' ? '28px' : '36px', maxHeight: size === 'sm' ? '28px' : '40px', border: 'none', outline: 'none' }}
      />
    </div>
  )
}
