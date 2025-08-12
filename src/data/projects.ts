export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tags: string[];
  tagColors: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  features: string[];
  techStack: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "markplainer",
    title: "MarkPlainer",
    description: "An android app that convert markdown text to plain text written in kotlin.",
    fullDescription: "MarkPlainer is a powerful Android application designed to simplify markdown text by converting it to clean, readable plain text. Built with Kotlin, this app provides a seamless user experience for developers and writers who need to quickly strip markdown formatting from their content.",
    image: "/images/mark.png",
    images: ["/images/mark.png", "/images/mark-2.png", "/images/mark-3.png"],
    tags: ["Kotlin"],
    tagColors: ["bg-blue-500/10 text-purple-500"],
    links: {
      github: "https://github.com/MRQ67/MarkPlainer"
    },
    features: [
      "Convert markdown to plain text instantly",
      "Support for all standard markdown syntax",
      "Clean and intuitive user interface",
      "Fast processing with optimized algorithms",
      "Export functionality for processed text"
    ],
    techStack: ["Kotlin", "Android SDK", "Material Design"],
    status: "completed"
  },
  {
    id: 2,
    slug: "zync-chat",
    title: "Zync Chat",
    description: "a real-time chat web app in written golang.",
    fullDescription: "Zync Chat is a modern real-time chat application built with Go and JavaScript. It features instant messaging, user authentication, and a responsive web interface. The application demonstrates efficient WebSocket communication and scalable backend architecture.",
    image: "/images/zync.png",
    images: ["/images/zync.png", "/images/zync-2.png", "/images/zync-3.png"],
    tags: ["JavaScript", "Go"],
    tagColors: ["bg-yellow-500/10 text-yellow-500", "bg-blue-500/10 text-blue-500"],
    links: {
      github: "https://github.com/MRQ67/zync-chat"
    },
    features: [
      "Real-time messaging with WebSockets",
      "User authentication and authorization",
      "Responsive web interface",
      "Message history and persistence",
      "Online user status indicators"
    ],
    techStack: ["Go", "JavaScript", "WebSockets", "HTML/CSS"],
    status: "completed"
  },
  {
    id: 3,
    slug: "unique-e-learning",
    title: "Unique E-Learning Platform",
    description: "A secure, AI-powered e-learning platform with advanced proctoring for online exams and courses.",
    fullDescription: "Unique E-Learning Platform is a comprehensive educational solution that combines modern web technologies with AI-powered proctoring capabilities. The platform provides a secure environment for online learning and examination, featuring advanced monitoring systems and interactive course content.",
    image: "/images/unique.png",
    images: ["/images/unique.png", "/images/unique-2.png", "/images/unique-3.png"],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    tagColors: ["bg-black/10 text-foreground", "bg-blue-300/10 text-blue-300", "bg-orange-500/10 text-orange-500"],
    links: {
      github: "https://github.com/MRQ67/unique-e-learning"
    },
    features: [
      "AI-powered exam proctoring",
      "Interactive course content",
      "Secure authentication system",
      "Real-time monitoring dashboard",
      "Comprehensive analytics and reporting"
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "AI/ML APIs"],
    status: "completed"
  },
  {
    id: 4,
    slug: "unique-validation",
    title: "Unique Validation",
    description: "A modern web application for creating, managing, and validating e-learning certificates with QR code verification.",
    fullDescription: "Unique Validation is a sophisticated certificate management system that enables educational institutions to create, distribute, and verify digital certificates. The platform features QR code generation for instant verification and provides a comprehensive dashboard for certificate management.",
    image: "/images/vaild.png",
    images: ["/images/vaild.png", "/images/vaild-2.png", "/images/vaild-3.png"],
    tags: ["Next.js", "Tailwind CSS", "Vercel KV"],
    tagColors: ["bg-black/10 text-foreground", "bg-blue-300/10 text-blue-300", "bg-purple-400/10 text-purple-400"],
    links: {
      live: "https://unique-validation.vercel.app/",
      github: "https://github.com/MRQ67/unique-validation"
    },
    features: [
      "QR code certificate verification",
      "Digital certificate creation",
      "Secure certificate storage",
      "Batch certificate generation",
      "Real-time verification system"
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel KV", "QR Code API"],
    status: "completed"
  },
  {
    id: 5,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, featuring smooth animations and interactive components.",
    fullDescription: "This portfolio website showcases modern web development techniques with a focus on user experience and visual appeal. Built with Next.js and enhanced with Framer Motion animations, it demonstrates proficiency in contemporary web technologies and design principles.",
    image: "/images/portfolio-preview.png",
    images: ["/images/portfolio-preview.png", "/images/portfolio-2.png", "/images/portfolio-3.png"],
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    tagColors: ["bg-black/10 text-foreground", "bg-blue-500/10 text-blue-500", "bg-orange-500/10 text-orange-500"],
    links: {
      github: "https://github.com/MRQ67/aa3_portfolio",
      live: "https://aa3.site"
    },
    features: [
      "Responsive design for all devices",
      "Smooth animations and transitions",
      "Interactive UI components",
      "Optimized performance",
      "Modern design aesthetics"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    status: "completed"
  },
  {
    id: 6,
    slug: "task-manager-api",
    title: "Task Manager API",
    description: "A RESTful API for task management built with Go, featuring user authentication and real-time updates.",
    fullDescription: "A robust RESTful API built with Go that provides comprehensive task management functionality. The API features JWT authentication, real-time updates, and efficient database operations with PostgreSQL. Designed for scalability and performance.",
    image: "/images/task-api.png",
    images: ["/images/task-api.png", "/images/task-api-2.png", "/images/task-api-3.png"],
    tags: ["Go", "PostgreSQL", "JWT"],
    tagColors: ["bg-blue-500/10 text-blue-500", "bg-blue-600/10 text-blue-600", "bg-green-500/10 text-green-500"],
    links: {
      github: "https://github.com/MRQ67/task-manager-api"
    },
    features: [
      "RESTful API design",
      "JWT authentication",
      "Real-time task updates",
      "PostgreSQL database integration",
      "Comprehensive API documentation"
    ],
    techStack: ["Go", "PostgreSQL", "JWT", "REST API", "Docker"],
    status: "completed"
  },
  {
    id: 7,
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive charts.",
    fullDescription: "An intuitive weather dashboard that provides comprehensive weather information with beautiful visualizations. Features location-based forecasts, interactive charts, and a responsive design that works seamlessly across all devices.",
    image: "/images/weather-app.png",
    images: ["/images/weather-app.png", "/images/weather-2.png", "/images/weather-3.png"],
    tags: ["React", "Chart.js", "Weather API"],
    tagColors: ["bg-blue-400/10 text-blue-400", "bg-green-400/10 text-green-400", "bg-yellow-400/10 text-yellow-400"],
    links: {
      github: "https://github.com/MRQ67/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app"
    },
    features: [
      "Location-based weather forecasts",
      "Interactive weather charts",
      "7-day weather predictions",
      "Responsive design",
      "Real-time weather updates"
    ],
    techStack: ["React", "Chart.js", "Weather API", "CSS3", "JavaScript"],
    status: "completed"
  },
  {
    id: 8,
    slug: "ecommerce-mobile-app",
    title: "E-Commerce Mobile App",
    description: "A cross-platform mobile e-commerce application with payment integration and real-time inventory.",
    fullDescription: "A comprehensive cross-platform mobile e-commerce solution built with Flutter. The app features secure payment processing, real-time inventory management, and a smooth user experience across iOS and Android platforms.",
    image: "/images/ecommerce-app.png",
    images: ["/images/ecommerce-app.png", "/images/ecommerce-2.png", "/images/ecommerce-3.png"],
    tags: ["Flutter", "Firebase", "Stripe"],
    tagColors: ["bg-blue-500/10 text-blue-500", "bg-orange-500/10 text-orange-500", "bg-purple-500/10 text-purple-500"],
    links: {
      github: "https://github.com/MRQ67/ecommerce-mobile"
    },
    features: [
      "Cross-platform mobile app",
      "Secure payment processing",
      "Real-time inventory updates",
      "User authentication",
      "Shopping cart and wishlist"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Stripe API", "REST API"],
    status: "in-progress"
  }
];

// Get top 4 projects for homepage
export const getTopProjects = (count: number = 4): Project[] => {
  return projects.slice(0, count);
};