# Roccia Marketing — Website

A premium Next.js marketing website for Roccia Marketing.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Google Fonts** — Syne (display) + Inter (body)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Home page
  globals.css       # Global styles + animations

components/
  Navbar.tsx        # Sticky nav with blur on scroll
  Hero.tsx          # Full-screen hero with particle canvas
  TrustStatement.tsx# Scroll-reveal text animation
  Marquee.tsx       # Infinite service ticker
  Services.tsx      # 6-card services grid
  Results.tsx       # Animated counter stats
  CaseStudies.tsx   # Horizontal drag-to-scroll case studies
  WhyRoccia.tsx     # 4 reason cards
  FinalCTA.tsx      # Full-width CTA section
  Footer.tsx        # Site footer
  CursorGlow.tsx    # Ambient cursor light effect

public/
  logo.png          # Roccia logo
```

## Color Palette

| Token    | Hex       |
|----------|-----------|
| Primary  | `#0D1030` |
| Secondary| `#427185` |
| Teal     | `#6FAEBD` |
| Light    | `#DFDFE3` |

## Features

- 🎯 Animated particle hero with mouse interaction
- 🌊 Smooth scroll-triggered reveals throughout
- 🔢 Animated stat counters
- ↔️ Drag-to-scroll case study showcase
- 🌟 Cursor ambient glow (desktop)
- 📱 Mobile-first responsive design
- ⚡ Performance optimized
- 🎨 Dark mode by default
