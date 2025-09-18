# AA3 Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring smooth animations, interactive components, and a comprehensive showcase of development projects.

## 🌟 Features

- **Modern Design**: Clean, professional layout with dark/light theme support
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Loading**: Rive animation on first visit with session-based display
- **Enhanced Readability**: Darkened project thumbnails for better text contrast
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Project Showcase**: Detailed project cards with modals and GitHub integration
- **Design Gallery**: Interactive design portfolio with modal views
- **Skills Section**: Comprehensive tech stack visualization
- **Contact Integration**: Direct links to GitHub, LinkedIn, and email
- **Performance Optimized**: Turbopack compatibility and optimized font loading

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom themes
- **Animations**: Framer Motion
- **Fonts**: Inter, JetBrains Mono, Sarina (custom)
- **Icons**: Custom SVG icons and Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

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

## 🎨 Key Components

### Loading Animation
- **Rive Integration**: Custom logo animation using Rive
- **Session Management**: Animation plays only once per browser session
- **Smooth Transitions**: Coordinated fade-in for main content

### Project Cards
- **Interactive Modals**: Detailed project views with image galleries
- **GitHub Integration**: Direct links to repositories
- **Enhanced Thumbnails**: Darkened overlays (90% opacity) for improved text readability
- **Responsive Design**: Optimized thumbnails with gradient overlays
- **Tech Stack Tags**: Color-coded technology indicators

### Design Gallery
- **Modal System**: Full-screen design showcases
- **Navigation**: Previous/next design navigation
- **Responsive Images**: Optimized for all screen sizes

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/MRQ67/aa3_portfolio.git
cd aa3_portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📱 Responsive Design

The website is fully responsive with breakpoints optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Projects Showcase

### Featured Projects
1. **Stackmatch Suite** - Tech stack management platform with CLI tools and web dashboard (Next.js + TypeScript)
2. **Bugpin** - Intuitive bug tracking and issue management platform (TypeScript + React)
3. **YouTube Auto Picture-in-Picture Suite** - Cross-platform suite for automatic PiP mode (JavaScript + C#)
4. **MarkPlainer** - Android markdown converter app (Kotlin)
5. **Zync Chat** - Real-time chat web application (Go + JavaScript)

### Additional Projects
- **Unique E-Learning Platform** - AI-powered learning platform with proctoring (Next.js)
- **Unique Validation** - Certificate management system with QR verification (Next.js)
- **Portfolio Website** - This modern portfolio website (Next.js + TypeScript)

### Recent Updates
- **Enhanced Thumbnails**: Added custom project thumbnails for better visual appeal
- **Improved Readability**: Darkened overlay gradients for better text contrast
- **Font Optimization**: Switched to JetBrains Mono for better Turbopack compatibility
- **Session Management**: Loading animation now appears only once per browser session

## 🎨 Design System

### Color Palette
- **Primary**: Custom CSS variables for theme consistency
- **Accent Colors**: Blue, green, purple, orange variants
- **Background**: Dark/light theme support
- **Text**: High contrast for accessibility

### Typography
- **Headings**: Sarina (custom font)
- **Body**: Inter (Google Fonts)
- **Code**: JetBrains Mono (Google Fonts)

## 🚀 Deployment

The website is deployed on Vercel with automatic deployments from the main branch.

**Live Site**: [https://aa3.site](https://aa3.site)

### Recent Improvements
- **Turbopack Compatibility**: Fixed font loading issues for faster development builds
- **TypeScript Safety**: Enhanced type checking for better code quality
- **ESLint Optimization**: Resolved dependency warnings for cleaner builds
- **Performance**: Optimized loading animations and transitions

### Environment Variables
No environment variables required for basic functionality.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **GitHub**: [@MRQ67](https://github.com/MRQ67)
- **LinkedIn**: [Abdellah MRQ](https://linkedin.com/in/abdellah-mrq)
- **Email**: abdellah.mrq@gmail.com
- **Portfolio**: [https://aa3.site](https://aa3.site)

---

Built with ❤️ by Abdellah MRQ

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/MRQ67/aa3_portfolio?utm_source=oss&utm_medium=github&utm_campaign=MRQ67%2Faa3_portfolio&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)