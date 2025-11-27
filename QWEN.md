# AA3 Portfolio Website - Development Context

## Project Overview

The AA3 Portfolio Website is a modern, responsive portfolio built with Next.js 15. It features smooth animations, interactive components, and comprehensive project showcases. The site implements a clean, professional design with dark/light theme support and utilizes various cutting-edge technologies to provide an engaging user experience.

## Technology Stack

### Core Technologies
- **Framework**: Next.js 15.3.2 with App Router (using Turbopack for development)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom themes and animations
- **Runtime**: Node.js 18+

### Key Dependencies
- **Animation**: Framer Motion, Rive (rive-app/react-canvas) for custom logo animations
- **UI Components**: Radix UI, shadcn/ui components
- **Icons**: Lucide React, React Icons
- **3D Graphics**: Three.js, @react-three/fiber, OGL
- **Theming**: next-themes for dark/light mode support
- **Analytics**: @vercel/analytics
- **Utilities**: class-variance-authority, clsx, tailwind-merge

### Development Dependencies
- Tailwind CSS v4
- TypeScript ^5
- ESLint with Next.js configuration
- PostCSS

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Homepage with all sections
│   ├── projects/         # Projects pages
│   └── designs/          # Design gallery page
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── magicui/         # Custom animated components
│   └── skills/          # Skills visualization
├── contexts/            # React Context providers
├── data/                # Static data (projects, designs)
└── lib/                 # Utility functions
```

## Key Features

### Loading Animation
- **Rive Integration**: Custom logo animation using Rive
- **Session Management**: Animation plays only once per browser session
- **Smooth Transitions**: Coordinated fade-in for main content

### Project Showcase
- **Interactive Modals**: Detailed project views with image galleries
- **GitHub Integration**: Direct links to repositories
- **Enhanced Thumbnails**: Darkened overlays (90% opacity) for improved text readability
- **Responsive Design**: Optimized thumbnails with gradient overlays
- **Tech Stack Tags**: Color-coded technology indicators

### Design Gallery
- **Modal System**: Full-screen design showcases
- **Navigation**: Previous/next design navigation
- **Responsive Images**: Optimized for all screen sizes

### Theming
- **Dark/Light Mode**: Theme switching with persistent preference storage
- **Custom Styling**: CSS variables for consistent theme implementation

## Development Commands

### Prerequisites
- Node.js 18+
- npm (or yarn/pnpm)

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Development Practices

The project follows modern Next.js 15 development patterns with the App Router. Key practices include:

- **Type Safety**: Comprehensive TypeScript usage with strict mode enabled
- **Component Organization**: Modular components with clear separation of concerns
- **Accessibility**: Proper semantic HTML and ARIA attributes
- **Performance**: Optimized images and animations, minimal bundle sizes
- **Responsive Design**: Mobile-first approach with responsive breakpoints:
  - **Mobile**: 320px - 768px
  - **Tablet**: 768px - 1024px
  - **Desktop**: 1024px+

## Styling System

### Color Palette
- **Primary**: Custom CSS variables for theme consistency
- **Accent Colors**: Blue, green, purple, orange variants
- **Background**: Dark/light theme support
- **Text**: High contrast for accessibility

### Typography
- **Headings**: Sarina (custom font)
- **Body**: Inter (Google Fonts)
- **Code**: JetBrains Mono (Google Fonts)

## File Organization

### Main Application
- `src/app/page.tsx` - Main portfolio page containing all sections
- `src/app/layout.tsx` - Root layout with theme and component providers
- `src/app/globals.css` - Global styles and Tailwind customizations

### Components
- `src/components/ui` - Reusable UI components (shadcn-style)
- `src/components/magicui` - Custom animated components
- `src/components/skills` - Skills visualization components
- Individual component files like `ProjectCard.tsx`, `DesignCard.tsx`, etc.

### Data Management
- `src/data/` - Static data files for projects, designs, and skills
- Context providers in `src/contexts/` for global state management

## Special Features

### Turbopack Compatibility
- Uses Next.js 15 with Turbopack for faster development builds
- Font loading optimizations for better Turbopack compatibility

### Session Management
- Loading animation appears only once per browser session
- Theme preferences persist across sessions

## Deployment

The website is designed for deployment on Vercel with automatic deployments from the main branch. The production build is optimized for performance with minimal bundle sizes and efficient loading strategies.

## Environment Variables

No special environment variables required for basic functionality.

## Architecture Notes

- Uses Next.js App Router pattern
- Implements TypeScript strict mode for type safety
- Leverages Tailwind CSS for utility-first styling
- Includes custom animations via Framer Motion and Rive
- Component-based architecture with clear separation of concerns
- Responsive design with mobile-first approach
- Dark/light theme support using next-themes