/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Button system
    'btn', 'btn-xs', 'btn-sm', 'btn-md', 'btn-lg',
    'btn-primary', 'btn-secondary', 'btn-tertiary', 'btn-ghost', 'btn-link',
    // Content width system
    'content-width-narrow', 'content-width-normal', 'content-width-wide', 'content-width-full',
    // Card system
    'card-base', 'card-sm', 'card-md', 'card-lg',
    'card-glass', 'card-glass-subtle',
    // Icon container system
    'icon-container-sm', 'icon-container-md', 'icon-container-lg',
    // Grid gap system
    'grid-gap-sm', 'grid-gap-md', 'grid-gap-lg',
  ],
  theme: {
    extend: {
      colors: {
        // IronGrid Primary Colors
        navy: '#1A1F2E',        // Deep navy - primary dark background (trust, depth, insurance credibility)
        charcoal: '#0F1419',    // Deep charcoal - secondary dark background
        steel: '#4A5568',       // Industrial steel - technical elements

        // IronGrid Accent Colors
        electricBlue: '#0EA5E9',  // Electric blue - primary accent (AI/tech innovation)
        warmGray: '#A8A29E',      // Warm gray - hardware reference

        // Neutral Colors
        borderGrey: '#e5e5e5',
        borderDark: '#1e262c',
        cloud: '#F0F5F8',
        grey: {
          DEFAULT: '#9ca3af',
          light: '#F7F9F9',
          medium: '#d1d5db',
          dark: '#6b7280',
          darker: '#4b5563',
        },

        // Legacy aliases (for gradual migration)
        rich: '#0F1419',        // Map to charcoal
        darkGreen: '#1A1F2E',   // Map to navy
      },
      fontFamily: {
        body: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
        brand: ['var(--font-brand)'],
        label: ['var(--font-label)'],
      },
      fontSize: {
        // Refined typography - tighter spacing for professional feel
        '88': ['2.5625rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '76': ['2.375rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '64': ['2rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '56': ['1.875rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '52': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        '40': ['2.0625rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        '36': ['1.65rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        '28': ['1.44375rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        '24': ['1.2375rem', { lineHeight: '1.15', letterSpacing: '0' }],
        '22': ['1.134375rem', { lineHeight: '1.4', letterSpacing: '0' }],
        '20': ['1.03125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        '18': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        '16': ['1rem', { lineHeight: '1.45', letterSpacing: '0' }],
        '14': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0' }],
        '12': ['0.75rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        container: '864px',
        content: '1089px',
      },
      spacing: {
        '18': '4.5rem',
        '70': '4.375rem',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        'full': '9999px',
      },
      boxShadow: {
        // Layered shadow system - ambient + directional
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 4px 6px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 6px 12px 0 rgba(0, 0, 0, 0.08)',
        'lg': '0 4px 6px 0 rgba(0, 0, 0, 0.08), 0 12px 24px 0 rgba(0, 0, 0, 0.1)',
        'xl': '0 8px 10px 0 rgba(0, 0, 0, 0.08), 0 20px 40px 0 rgba(0, 0, 0, 0.12)',
        '2xl': '0 12px 15px 0 rgba(0, 0, 0, 0.08), 0 30px 60px 0 rgba(0, 0, 0, 0.15)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        // Electric blue focus shadow
        'focus': '0 0 0 3px rgba(14, 165, 233, 0.3)',
      },
      transitionDuration: {
        '0': '0ms',
      },
      animation: {
        'wiggle': 'wiggle 0.2s ease',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
  },
  plugins: [],
}
