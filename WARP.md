# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

ECO-ESSENTIA is a React-based environmental solutions website built with modern web technologies. The project showcases environmental engineering services, water treatment solutions, and pollution control services. It's a single-page application with smooth scrolling navigation and animated sections.

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: GSAP (GreenSock Animation Platform)
- **3D Graphics**: Three.js with React Three Fiber
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Development**: ESLint, TypeScript
- **Package Manager**: npm (with bun.lockb for alternative runtime)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

### Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── Hero.tsx         # Landing section with CTA
│   ├── Navigation.tsx   # Sticky header with smooth scroll
│   ├── Services.tsx     # Service cards with animations
│   ├── About.tsx        # Company information
│   ├── Contact.tsx      # Contact form and details
│   └── Footer.tsx       # Footer links
├── hooks/               # Custom React hooks
│   ├── useGSAPAnimations.tsx  # GSAP scroll animations
│   └── use-toast.ts     # Toast notifications
├── pages/               # Route components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── lib/                 # Utility functions
└── assets/              # Static assets
```

### Key Components

**Navigation**: Fixed header with glassmorphism effect, smooth scroll navigation, and mobile-responsive menu.

**Hero**: Full-screen landing section with gradient text, parallax scrolling, animated stats, and prominent CTAs.

**Services**: Grid layout showcasing 7 core services with icons, descriptions, feature lists, and hover animations.

**GSAP Animations**: Custom hook manages scroll-triggered animations for smooth reveal effects throughout the site.

**Design System**: Nature-inspired color palette using HSL variables, consistent spacing, and custom CSS animations (leaf-sway, gentle-float, nature-pulse).

## Configuration Files

- `vite.config.ts`: Development server configuration with lovable-tagger for development mode
- `tailwind.config.ts`: Custom theme with nature-inspired colors and extended font families
- `components.json`: shadcn/ui configuration with path aliases
- `tsconfig.json`: TypeScript configuration with relaxed strictness for rapid development

## Development Tasks & Improvements

### 1. Design Consistency Fixes
- [ ] Standardize font weights across components (currently using Poppins + Inter)
- [ ] Fix responsive spacing issues on mobile devices
- [ ] Ensure consistent button sizing and padding
- [ ] Standardize card hover effects and transitions
- [ ] Fix logo image path (currently hardcoded to `/src/assets/eco.jpg`)

### 2. Performance Optimizations
- [ ] Convert hero background image to WebP/AVIF format
- [ ] Implement lazy loading for Three.js components
- [ ] Add image optimization with proper srcset attributes
- [ ] Minify and compress assets in build process
- [ ] Implement code splitting for better initial load times
- [ ] Optimize GSAP animations for better performance

### 3. SEO & Meta Tags
- [ ] Add comprehensive meta tags in `index.html`
- [ ] Implement OpenGraph tags for social media sharing
- [ ] Add proper title and description tags
- [ ] Create favicon.ico and various icon sizes
- [ ] Add structured data markup for services
- [ ] Implement sitemap generation

### 4. New Features to Implement

#### Hero Section Enhancements
- [ ] Add prominent "Get Free Consultation" CTA button
- [ ] Implement background video or animated graphics
- [ ] Add trust indicators (certifications, years of experience)

#### Services Section Upgrades
- [ ] Enhance service cards with better icons and hover effects
- [ ] Add "Learn More" functionality with detailed service modals
- [ ] Implement service filtering/categorization

#### New Sections to Add
- [ ] **Portfolio/Projects**: Showcase case studies with before/after images
- [ ] **Testimonials**: Client reviews with photos/company logos
- [ ] **Team**: Staff profiles with photos and expertise areas
- [ ] **Blog/Insights**: Articles on environmental topics for SEO
- [ ] **Certifications**: Display relevant licenses and certifications

#### Contact Enhancements
- [ ] Integrate contact form with email service (EmailJS/Formspree)
- [ ] Embed Google Maps showing office location
- [ ] Add multiple contact methods (WhatsApp, phone, email)
- [ ] Implement contact form validation with proper error handling

#### Footer Improvements
- [ ] Add quick navigation links
- [ ] Implement newsletter signup form
- [ ] Add social media icons and links
- [ ] Include business hours and location information

### 5. Technical Improvements
- [ ] Add WhatsApp floating chat button
- [ ] Integrate Google Analytics and Search Console
- [ ] Implement proper error boundaries
- [ ] Add loading states for async operations
- [ ] Set up proper environment variable management
- [ ] Add unit tests for components
- [ ] Implement accessibility improvements (ARIA labels, keyboard navigation)

### 6. Mobile Optimization
- [ ] Fix mobile navigation menu styling
- [ ] Optimize hero section for mobile devices
- [ ] Ensure all animations work smoothly on mobile
- [ ] Test and fix touch interactions
- [ ] Optimize images for mobile viewports

## Common Development Patterns

### Adding New Components
Components should follow the established patterns:
- Use TypeScript interfaces for props
- Implement responsive design with Tailwind classes
- Use nature-themed CSS classes from the design system
- Include appropriate animations and hover effects

### Styling Guidelines
- Use HSL color values defined in CSS variables
- Apply nature-inspired animations (gentle-float, leaf-sway)
- Maintain consistent border radius (--radius)
- Use gradient backgrounds for call-to-action elements

### Animation Implementation
- Utilize the `useGSAPAnimations` hook for scroll-triggered animations
- Apply `fade-in-gentle` class with intersection observer for staggered reveals
- Use `nature-pulse` for attention-grabbing elements

## Environment Setup Notes

- Development server runs on port 8080
- Uses SWC for fast React compilation
- Supports both npm and bun package managers
- Configured for Windows development environment
- Includes lovable-tagger for development mode component identification
