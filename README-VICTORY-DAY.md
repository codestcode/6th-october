# Victory Day Hero Section

A cinematic, modern hero section celebrating Egypt's Victory Day (October 6th).

## Features

- **Layered Parallax**: Background flag, midground pyramids, foreground content
- **Animations**: Entrance animations, flag wave, floating particles, light rays
- **Interactions**: Mouse-based parallax, hover effects, scroll-to-sticky header
- **Accessibility**: Respects `prefers-reduced-motion`, semantic HTML, ARIA labels
- **Performance**: GPU-accelerated animations, optimized rendering
- **Responsive**: Mobile-first design (75vh on mobile, full-screen on desktop)

## Usage

### Full Version (with all animations)

\`\`\`tsx
import VictoryDayHero from '@/components/victory-day-hero'

export default function Page() {
  return <VictoryDayHero />
}
\`\`\`

### Simple Version (lightweight fallback)

\`\`\`tsx
import VictoryDayHeroSimple from '@/components/victory-day-hero-simple'

export default function Page() {
  return <VictoryDayHeroSimple />
}
\`\`\`

## Customization

### Disable Cinematic Reveal

The 7-second cinematic intro can be disabled by modifying the component:

\`\`\`tsx
const [showCinematic, setShowCinematic] = useState(false) // Change to false
\`\`\`

### Adjust Colors

The theme uses:
- **Primary**: Black & Gold (luxury aesthetic)
- **Accents**: Egyptian flag colors (red #CE1126, white, black)
- **Highlights**: Amber/Gold (#D4AF37, amber-400)

### Performance Optimization

For better performance on lower-end devices:
1. Use `VictoryDayHeroSimple` component
2. Reduce particle count (line 30 in main component)
3. Disable volumetric light rays
4. Simplify flag wave animation

## Accessibility

- ✅ Semantic HTML (`<main>`, `<h1>`, `<button>`)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ `prefers-reduced-motion` support
- ✅ High contrast text (WCAG AA compliant)
- ✅ Screen reader friendly

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid & Flexbox
- CSS Custom Properties
- SVG animations
- Intersection Observer (for scroll effects)

## Image Assets

For production, replace placeholder images with optimized assets:

1. **Hero Background**: 1920x1080px (AVIF/WebP with JPG fallback)
2. **Mobile Background**: 768x1024px
3. **Tablet Background**: 1024x768px

Place in `/public/images/victory-day/` directory.
