# IronGrid - AI-Powered Hardware Insurance

A modern, production-ready landing page for IronGrid, built with **Next.js 15**, **Tailwind CSS v3**, and **TypeScript**.

## About IronGrid

IronGrid is an AI-powered hardware insurance platform operating at the intersection of InsurTech, Hardware/Manufacturing, and AI/ML. We provide intelligent risk assessment and transparent pricing for next-generation hardware assets including battery systems, robotics, EV infrastructure, and manufacturing equipment.

**Brand Positioning**: "Industrial Intelligence" - **Palantir meets Tesla meets Swiss Re**

### Core Value Propositions

- **Real-Time Risk Assessment**: ML models analyze hardware performance data
- **Performance Guarantees**: Coverage for degradation, not just failure
- **Instant Claims Processing**: AI-powered verification for fast payouts
- **Transparent Pricing**: No black-box underwriting
- **Digital-First**: Modern dashboard for policy and claims management

---

## Design System

### Color Palette - "Industrial Intelligence"

```
Navy         #1A1F2E  Primary dark (trust, insurance credibility)
Charcoal     #0F1419  Secondary dark
Steel        #4A5568  Technical elements
Electric Blue #0EA5E9  Primary accent (AI/innovation)
Warm Gray    #A8A29E  Hardware reference
```

**Why these colors?**
- Navy replaces teal for insurance credibility
- Electric Blue replaces neon green for modern AI aesthetic
- Steel adds industrial/technical feel
- No gradients, no playful colors

### Typography

**Primary Font**: Inter (Google Fonts)
- Headings: Inter 600 (Semibold)
- Body: Inter 400 (Regular)
- Modern, technical, excellent legibility

**Technical Font**: JetBrains Mono
- Used for: Policy numbers, license info, technical data
- Professional monospace for data display

### Visual Language

- **Minimalist but substantial** (not sparse)
- **Data-driven visualizations**
- **Industrial photography** (real hardware, manufacturing)
- **Grid/lattice patterns** (subtle background texture)
- **Sharp, geometric shapes** (no playful illustrations)

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3.4
- **Language**: TypeScript 5
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono (Google Fonts)

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Site will be running at `http://localhost:3000`

---

## Project Structure

```
irongrid-theme/
├── app/
│   ├── globals.css          # Tailwind + IronGrid design system
│   ├── layout.tsx            # Root layout with Inter fonts
│   └── page.tsx              # Homepage with all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navigation (Solutions, How It Works, Pricing, etc.)
│   │   ├── Footer.tsx        # Insurance compliance info + CTAs
│   │   └── Container.tsx     # Max-width wrapper
│   ├── sections/
│   │   ├── Hero.tsx          # Hero with trust badges
│   │   ├── ProblemStatement.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── UseCases.tsx
│   │   ├── ValueProps.tsx
│   │   ├── SocialProof.tsx
│   │   ├── TechnologyShowcase.tsx
│   │   ├── CoverageDetails.tsx
│   │   ├── PricingTransparency.tsx
│   │   └── FAQ.tsx
│   └── ui/
│       ├── Button.tsx        # Primary/Secondary variants
│       ├── Logo.tsx          # IRONGRID wordmark + grid icon
│       ├── TrustBadge.tsx
│       ├── StatCard.tsx
│       ├── StepCard.tsx
│       ├── IconFeatureCard.tsx
│       └── ChecklistItem.tsx
├── tailwind.config.js        # IronGrid design tokens
├── BRAND_GUIDELINES.md       # Complete brand guide
└── public/fonts/            # Font assets
```

---

## Page Sections

The homepage follows this structure:

1. **Header** - Fixed navigation with IronGrid logo
2. **Hero** - AI-Powered Insurance headline + trust badges
3. **Problem Statement** - Why traditional insurance is broken
4. **How It Works** - 3-step process (Submit → Quote → Activate)
5. **Use Cases** - 4 hardware categories (Battery, Robotics, EV, Manufacturing)
6. **Value Props** - 6 key benefits (AI-driven, transparent, fast)
7. **Social Proof** - Stanford case study + stats
8. **Technology Showcase** - AI platform visualization
9. **Coverage Details** - What's covered vs. not covered
10. **Pricing Transparency** - 5 pricing factors
11. **FAQ** - Insurance-specific questions
12. **Footer** - Final CTA + compliance info

---

## Components

### UI Components

**`<Button />`** - 3 variants
- `variant="primary"` - White bg → Electric Blue hover
- `variant="secondary"` - Outlined → Filled hover
- `variant="small"` - Compact version

**`<TrustBadge />`** - Small pills for credibility
- Used in Hero: "Licensed in California", "Backed by Y Combinator", etc.

**`<StatCard />`** - Large number displays
- Used in Social Proof: "$XXM protected", "XX policies issued"

**`<StepCard />`** - Numbered process steps
- Used in How It Works section

**`<IconFeatureCard />`** - Card with icon, title, description
- Used in Use Cases and Value Props sections
- `variant="grid"` for hover effects

**`<ChecklistItem />`** - Check/X icon + text
- Used in Coverage Details

### Section Components

All sections follow responsive patterns:
- Mobile-first design
- Fluid typography (clamp)
- Stacking → Grid layouts
- Navy/White alternation

---

## Responsive Breakpoints

```
sm:  640px   (mobile landscape)
md:  768px   (tablet)
lg:  1024px  (desktop)
xl:  1280px  (large desktop, nav reveals)
2xl: 1440px  (extra large)
```

### Key Responsive Behaviors

- **Header**: Hamburger menu < 1280px, full nav ≥ 1280px
- **Typography**: Fluid scaling (38px → 76px on headlines)
- **Grids**: 1 column → 2 columns → 3 columns
- **Padding**: 24px → 48px on cards
- **Spacing**: 64px → 96px on sections

---

## Design Tokens

### Spacing Scale

```
Section padding: 64px (mobile) → 96px (desktop)
Card padding:    24px (mobile) → 48px (desktop)
Grid gaps:       32px
Element spacing: 16px-24px
```

### Typography Scale

```
text-76:  38px → 76px   Hero headlines
text-56:  30px → 56px   Section headings
text-40:  33px → 40px   Subheadings
text-28:  23px → 28px   Card titles
text-24:  20px → 24px   Card titles
text-18:  18px          Body text
text-16:  16px          Body text
text-14:  11.5px → 14px Small/caption
```

### Border Strategy

```
Light sections: border-grey/20 (rgba(229, 229, 229, 0.2))
Dark sections:  border-white/10, border-white/20
Hover states:   border-electricBlue
```

---

## Brand Guidelines

See [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for:
- Complete color palette with hex codes
- Typography rules and scale
- Voice & tone guidelines
- Photography style
- Legal compliance requirements
- Competitor differentiation

---

## Insurance Compliance

### Required Footer Information

```
Iron Grid Insurance Services, LLC
California Insurance License #6017026
Licensed State (resident): California
```

This information **must appear** on:
- Website footer (implemented)
- All marketing materials
- Email signatures

### Contact Information

**Email**: contact@getirongrid.com
**Address**: 2823 18th Street, Unit #112, San Francisco, CA 94110

---

## Development

### Scripts

```bash
npm run dev    # Development server (http://localhost:3000)
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

### Build Output

```
Route (app)              Size    First Load JS
┌ ○ /                   6.46 kB  108 kB
└ ○ /_not-found         992 B    103 kB
+ First Load JS shared  102 kB
```

**Build Time**: ~3-5 seconds
**Performance**: Lighthouse 90+

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy (auto-configured for Next.js)
4. Custom domain optional

### Other Platforms

- **Netlify**: Zero-config Next.js support
- **Docker**: Create Dockerfile (see deployment docs)
- **Traditional hosting**: Build + copy `.next/`, `public/`, run `npm start`

---

## Customization

### Changing Colors

Edit `tailwind.config.js`:

```js
colors: {
  navy: '#1A1F2E',        // Your primary dark
  electricBlue: '#0EA5E9', // Your primary accent
  // ...
}
```

### Adding Sections

1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add to render tree

### Modifying Content

All copy is in component files - no CMS needed. Edit directly in:
- `components/sections/*.tsx`
- `components/layout/Header.tsx` (navigation)
- `components/layout/Footer.tsx` (footer links, compliance)

---

## Performance

### Optimizations

- ✓ Next.js 15 automatic optimizations
- ✓ Tailwind JIT compilation
- ✓ Google Fonts with `display: swap`
- ✓ Minimal JavaScript (mostly static)
- ✓ Image placeholders (ready for actual images)
- ✓ Responsive images (when real assets added)

### Expected Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: 90-100

---

## Accessibility

- ✓ WCAG 2.1 AA compliant color contrast
- ✓ Focus indicators (Electric Blue rings)
- ✓ Keyboard navigation
- ✓ Semantic HTML
- ✓ ARIA labels on interactive elements
- ✓ Responsive text sizing

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## License & Credits

### Original Template
This project was transformed from the Endex theme template.

### IronGrid Implementation
- **Brand Design**: "Industrial Intelligence" positioning
- **Color Palette**: Navy, Steel, Electric Blue (custom)
- **Typography**: Inter + JetBrains Mono
- **Content**: Insurance-specific copy and sections
- **Compliance**: California insurance license integration

### Legal
Iron Grid Insurance Services, LLC
California Insurance License #6017026

© 2025 Iron Grid. All rights reserved.

---

## Support

**Questions?** Contact: contact@getirongrid.com

**Documentation**:
- [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) - Complete brand guide
- [Next.js Docs](https://nextjs.org/docs) - Framework reference
- [Tailwind Docs](https://tailwindcss.com/docs) - Styling reference

---

Built with modern web technologies for the future of hardware insurance.
