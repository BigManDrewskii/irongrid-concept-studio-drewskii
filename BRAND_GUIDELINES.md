# IronGrid Brand Guidelines

## Brand Positioning

**"Industrial Intelligence"**

IronGrid sits at the intersection of InsurTech, Hardware/Manufacturing, and AI/ML. We're positioned as: **Palantir meets Tesla meets Swiss Re**.

### Core Brand Attributes

1. **Modern** - AI-native, cutting-edge technology
2. **Credible** - B2B enterprise trustworthy, insurance professional
3. **Technical** - Deep hardware/manufacturing expertise
4. **Professional** - Built for serious business buyers

---

## Visual Identity

### Logo

**Current Implementation**: Temporary text-based logo with grid icon

- **Wordmark**: "IRONGRID" in Inter Bold, uppercase, tight tracking
- **Icon**: 4-square grid pattern (geometric, protective)
- **Usage**: Always together, never separate
- **Minimum Size**: 100px width on digital, 0.5 inches in print

**Future**: Custom geometric wordmark with integrated grid/lattice pattern

---

## Color Palette

### Primary Colors

```
Navy         #1A1F2E    rgb(26, 31, 46)     - Trust, depth, insurance credibility
Charcoal     #0F1419    rgb(15, 20, 25)     - Secondary dark background
Steel        #4A5568    rgb(74, 85, 104)    - Industrial/technical elements
```

### Accent Colors

```
Electric Blue  #0EA5E9  rgb(14, 165, 233)  - Primary accent (AI/innovation)
Warm Gray      #A8A29E  rgb(168, 162, 158) - Hardware reference, secondary
```

### Neutral Colors

```
White         #FFFFFF   rgb(255, 255, 255)  - Text on dark, clean backgrounds
Border Grey   #E5E5E5   rgb(229, 229, 229)  - Subtle borders
Cloud         #F0F5F8   rgb(240, 245, 248)  - Very light backgrounds
```

### Color Usage Rules

- **Navy**: Primary dark sections (Hero, Footer, How It Works, Social Proof)
- **Electric Blue**: CTAs, links, interactive elements, focus states
- **Steel**: Icons, technical diagrams, secondary elements
- **White**: Primary text on dark backgrounds
- **Charcoal**: Primary text on light backgrounds

**Never use**:
- Neon green (old Endex branding)
- Bright/playful colors
- Heavy gradients

---

## Typography

### Font Stack

**Headings & Body**: Inter
- Source: Google Fonts
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Why: Modern, technical, excellent legibility, professional

**Technical/Data**: JetBrains Mono
- Source: Google Fonts
- Usage: Policy numbers, license info, technical data display
- Why: Professional monospace, excellent for code/data

### Type Scale

```
Hero Headline (text-76)     38px → 76px   Inter 600   Line-height: 1.1
Section Heading (text-56)   30px → 56px   Inter 600   Line-height: 1.05
Subsection (text-40)        33px → 40px   Inter 600   Line-height: 1.15
Card Title (text-28)        23px → 28px   Inter 600   Line-height: 1.2
Card Title (text-24)        20px → 24px   Inter 600   Line-height: 1.2
Body Large (text-20)        16.5px → 20px Inter 400   Line-height: 1.5
Body (text-18)              18px          Inter 400   Line-height: 1.5
Body (text-16)              16px          Inter 400   Line-height: 1.5
Small/Caption (text-14)     11.5px → 14px Inter 400   Line-height: 1.5
Technical (text-12)         12px          JetBrains   Line-height: 1.5
```

### Typography Rules

- **Headlines**: Always semibold (600), tight leading (1.05-1.1)
- **Body**: Regular (400), comfortable leading (1.5)
- **Technical data**: JetBrains Mono, uppercase for labels
- **No decorative fonts**: Keep it professional and readable

---

## Design Language

### Visual Style

**Industrial Intelligence Aesthetic**:
- Minimalist but substantial (not sparse)
- Data-driven visualizations
- Industrial photography (real hardware, manufacturing)
- Technical diagrams showing process/risk
- Grid/lattice patterns as background elements
- Sharp, geometric shapes

### What to Avoid

- Playful illustrations
- Cartoon icons
- Neon colors
- Excessive animations
- Decorative flourishes
- Stock photos of happy people

### Grid Pattern

```css
background-image:
  linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
background-size: 40px 40px;
```

Use on dark backgrounds for subtle texture and brand reinforcement.

---

## Component Design Patterns

### Buttons

**Primary**:
- Background: White
- Border: White
- Text: Charcoal
- Hover: Electric Blue bg + white text
- Duration: 200ms

**Secondary**:
- Background: Transparent
- Border: White/20%
- Text: White
- Hover: White bg + charcoal text
- Duration: 200ms

**Focus States**:
- 2px Electric Blue ring
- 2px offset

### Icons

- Style: Stroke-based, 2px weight
- Library: Lucide React
- Size: 16px (small), 20px (medium), 24px (large)
- Color: Inherit from parent or Electric Blue for accent

### Cards

- Padding: 24px (mobile) → 48px (desktop)
- Border: 1px solid, Grey/20% opacity
- Hover: Border → Electric Blue, subtle lift (optional)
- Radius: 2px (minimal rounding)

### Spacing

- Base unit: 4px
- Sections: 64px (mobile) → 96px (desktop) vertical padding
- Cards: 32px gaps in grid
- Elements: 16px-24px spacing between related items

---

## Content Voice & Tone

### Voice Attributes

- **Intelligent**: Use precise, technical language
- **Direct**: No fluff, get to the point
- **Confident**: Assert expertise without arrogance
- **No-nonsense**: Professional, matter-of-fact

### Tone Guidelines

**Do:**
- Use industry terminology correctly
- Include specific numbers and data
- Be transparent about processes
- Sound technical but accessible
- Write in active voice

**Don't:**
- Use insurance jargon without explanation
- Oversell or make unrealistic promises
- Sound too casual or playful
- Use buzzwords without substance
- Write long, winding paragraphs

### Example Copy Styles

**Good**:
> "Our AI analyzes 50+ risk factors in real-time to price your hardware insurance accurately."

**Bad**:
> "We use cutting-edge AI magic to revolutionize insurance! 🚀"

**Good**:
> "Claims processed in days, not weeks."

**Bad**:
> "Say goodbye to boring old insurance processes!"

---

## Photography & Imagery

### Preferred Imagery

1. **Industrial Hardware**: Real equipment in manufacturing settings
2. **Technical Diagrams**: Risk assessment flows, data visualizations
3. **Grid Overlays**: Protective lattice patterns on hardware
4. **Dashboard Screenshots**: Real UI showing metrics/data
5. **Manufacturing Environments**: Clean, well-lit facilities

### Image Treatment

- High contrast, sharp focus
- Desaturated slightly (professional, not Instagram)
- Overlay subtle grid pattern on hero images
- Use real photos, not illustrations

---

## Competitor Differentiation

### We Look Like (Inspiration)

- **Palantir**: Technical sophistication, data-forward
- **Stripe**: Clean, developer-friendly, trustworthy
- **Linear**: Modern B2B SaaS, polished UI
- **Notion**: Sophisticated, professional, accessible

### We Don't Look Like

- Traditional insurance companies (old-fashioned)
- Generic SaaS startups (too playful)
- Deep tech (too academic/complex)
- Consumer fintech (too casual)

---

## Brand Applications

### Website

- Navy primary background for key sections
- White for content-heavy sections
- Electric Blue for all CTAs and links
- Grid pattern on Hero only
- Inter throughout, JetBrains Mono for technical

### Marketing Materials

- Same color palette
- Headlines in Inter 600
- Body in Inter 400
- Always include insurance license info in footer

### Social Media

- Profile image: Grid icon on navy background
- Cover images: Industrial hardware + grid overlay
- Post style: Technical, data-driven, professional
- No emojis (except checkmarks ✓ sparingly)

### Email

- Header: Logo on navy background
- Body: White background, charcoal text
- CTAs: Electric Blue buttons
- Footer: License info required

---

## Legal & Compliance

### Required Disclaimers

**Always include on website footer**:
```
Iron Grid Insurance Services, LLC
California Insurance License #6017026
Licensed State (resident): California
```

**On marketing materials**:
```
Licensed insurance provider | CA License #6017026
```

### Approved Claims

✓ "AI-powered insurance"
✓ "Instant quotes"
✓ "Real-time risk assessment"
✓ "Transparent pricing"

### Restricted Claims

✗ "Never denied claims" (can't guarantee)
✗ "Cheapest insurance" (can't promise)
✗ "100% coverage" (policy has limits)
✗ "Guaranteed approval" (underwriting required)

---

## Quick Reference

### Color Codes

```
Navy: #1A1F2E
Charcoal: #0F1419
Steel: #4A5568
Electric Blue: #0EA5E9
Warm Gray: #A8A29E
```

### Typography

```
Headings: Inter 600
Body: Inter 400
Technical: JetBrains Mono
```

### Spacing

```
Section padding: 64px → 96px
Card padding: 24px → 48px
Grid gaps: 32px
```

### Key Attributes

```
Style: Industrial Intelligence
Position: Palantir × Tesla × Swiss Re
Tone: Intelligent, Direct, Confident
```

---

## Version History

- **v1.0** (2025-01-15): Initial IronGrid brand guidelines
- Based on transformation from Endex template
- Aligned with "Industrial Intelligence" positioning

---

**Questions?** Contact: contact@getirongrid.com
