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
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    id: 0,
    slug: "coil-code-editor",
    title: "Coil Code Editor",
    description:
      "collaborative web code editor made by AA3. Built using Next.js (frontend), Yjs (synchronization), PartyKit (backend), and it is - Powered by Monaco Editor",
    fullDescription:
      "collaborative web code editor made by AA3. Built using Next.js (frontend), Yjs (synchronization), PartyKit (backend), and it is - Powered by Monaco Editor",
    image: "/projects/coilcode.png",
    images: ["/projects/coilcode.png"],
    tags: ["Next.js", "Partykit", "Yjs", "Convex"],
    tagColors: [
      "bg-black/10 text-foreground",
      "bg-blue-500/10 text-blue-500",
      "bg-green-500/10 text-green-500",
      "bg-purple-500/10 text-purple-500",
    ],
    links: {
      github: "https://github.com/MRQ67/coil-code",
      demo: "https://coil.aa3.site/",
    },
    features: [
      "Collaborative web code editor",
      "Real-time synchronization with Yjs",
      "Backend powered by PartyKit",
      "Powered by Monaco Editor",
      "Multi-user support",
    ],
    techStack: ["Next.js", "Yjs", "Partykit", "Convex"],
    status: "completed",
  },
  {
    id: 1,
    slug: "stackmatch-suite",
    title: "Stackmatch Suite",
    description:
      "A comprehensive tech stack management platform with CLI tools and web dashboard for developers.",
    fullDescription:
      "Stackmatch Suite is a complete solution for tech stack management featuring a powerful CLI tool and an intuitive web dashboard. Built with Next.js and TypeScript, it provides developers with streamlined tools to manage, analyze, and optimize their technology stacks. The platform includes authentication, real-time updates, and comprehensive analytics.",
    image: "/projects/stackmatch.png",
    images: ["/projects/stackmatch.png"],
    tags: ["Next.js", "TypeScript", "Supabase"],
    tagColors: [
      "bg-black/10 text-foreground",
      "bg-blue-500/10 text-blue-500",
      "bg-green-500/10 text-green-500",
    ],
    links: {
      demo: "https://stackmatch.aa3.site/",
      github: "https://github.com/MRQ67/stackmatch-dashboard",
    },
    features: [
      "Command-line interface for stack management",
      "Web-based dashboard with real-time analytics",
      "Authentication and user management",
      "Tech stack analysis and recommendations",
      "Integration with popular development tools",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "shadcn/ui",
    ],
    status: "completed",
  },
  {
    id: 2,
    slug: "bugpin",
    title: "Bugpin",
    description:
      "Pin Your Pain - An intuitive bug tracking and issue management platform for development teams.",
    fullDescription:
      "Bugpin is a modern bug tracking and issue management platform designed to help development teams efficiently track, manage, and resolve bugs. With its clean interface and powerful features, Bugpin makes it easy to 'pin your pain' and collaborate on solutions. Built with TypeScript and modern web technologies.",
    image: "/projects/bugpin.png",
    images: ["/projects/bugpin.png"],
    tags: ["TypeScript", "React", "Issue Tracking"],
    tagColors: [
      "bg-blue-500/10 text-blue-500",
      "bg-blue-400/10 text-blue-400",
      "bg-red-500/10 text-red-500",
    ],
    links: {
      github: "https://github.com/MRQ67/bugpin",
    },
    features: [
      "Intuitive bug tracking interface",
      "Team collaboration tools",
      "Priority and status management",
      "Real-time notifications",
      "Comprehensive reporting and analytics",
    ],
    techStack: ["TypeScript", "React", "Node.js", "Database Integration"],
    status: "in-progress",
  },
  {
    id: 3,
    slug: "youtube-auto-pip",
    title: "YT Auto PiP Suite",
    description:
      "Cross-platform suite enabling automatic Picture-in-Picture mode for YouTube videos across browser and desktop.",
    fullDescription:
      "A comprehensive cross-platform solution that automatically enables Picture-in-Picture mode for YouTube videos. The suite includes a browser extension built with JavaScript and a Windows desktop application developed in C#. This tool enhances the YouTube viewing experience by allowing seamless multitasking with video content.",
    image: "/projects/youtu.png",
    images: [
      "/projects/youtu.png",
      "/images/yt-auto-pip-2.png",
      "/images/yt-auto-pip-3.png",
    ],
    tags: ["JavaScript", "C#", "Browser Extension"],
    tagColors: [
      "bg-yellow-500/10 text-yellow-500",
      "bg-purple-500/10 text-purple-500",
      "bg-blue-600/10 text-blue-600",
    ],
    links: {
      github: "https://github.com/MRQ67/youtube-auto-pip",
      demo: "https://github.com/MRQ67/yt-auto-pip_win",
    },
    features: [
      "Automatic Picture-in-Picture activation",
      "Cross-platform compatibility",
      "Browser extension for seamless integration",
      "Windows desktop application",
      "User-friendly interface and controls",
    ],
    techStack: [
      "JavaScript",
      "C#",
      "Browser APIs",
      "Windows Forms",
      "YouTube API",
    ],
    status: "in-progress",
  },
  {
    id: 4,
    slug: "markplainer",
    title: "MarkPlainer",
    description:
      "An android app that convert markdown text to plain text written in kotlin.",
    fullDescription:
      "MarkPlainer is a powerful Android application designed to simplify markdown text by converting it to clean, readable plain text. Built with Kotlin, this app provides a seamless user experience for developers and writers who need to quickly strip markdown formatting from their content.",
    image: "/images/mark.png",
    images: ["/images/mark.png", "/images/mark-2.png", "/images/mark-3.png"],
    tags: ["Kotlin"],
    tagColors: ["bg-orange-500/10 text-orange-500"],
    links: {
      github: "https://github.com/MRQ67/MarkPlainer",
    },
    features: [
      "Convert markdown to plain text instantly",
      "Support for all standard markdown syntax",
      "Clean and intuitive user interface",
      "Fast processing with optimized algorithms",
      "Export functionality for processed text",
    ],
    techStack: ["Kotlin", "Android SDK", "Material Design"],
    status: "completed",
  },
  {
    id: 5,
    slug: "zync-chat",
    title: "Zync Chat",
    description: "a real-time chat web app in written Go.",
    fullDescription:
      "Zync Chat is a modern real-time chat application built with Go and JavaScript. It features instant messaging, user authentication, and a responsive web interface. The application demonstrates efficient WebSocket communication and scalable backend architecture.",
    image: "/images/zync.png",
    images: ["/images/zync.png", "/images/zync-2.png", "/images/zync-3.png"],
    tags: ["JavaScript", "Go"],
    tagColors: [
      "bg-yellow-500/10 text-yellow-500",
      "bg-blue-500/10 text-blue-500",
    ],
    links: {
      github: "https://github.com/MRQ67/zync-chat",
    },
    features: [
      "Real-time messaging with WebSockets",
      "User authentication and authorization",
      "Responsive web interface",
      "Message history and persistence",
      "Online user status indicators",
    ],
    techStack: ["Go", "JavaScript", "WebSockets", "HTML/CSS"],
    status: "completed",
  },
  {
    id: 6,
    slug: "unique-e-learning",
    title: "Unique E-Learning Platform",
    description:
      "A secure, AI-powered e-learning platform with advanced proctoring for online exams and courses.",
    fullDescription:
      "Unique E-Learning Platform is a comprehensive educational solution that combines modern web technologies with AI-powered proctoring capabilities. The platform provides a secure environment for online learning and examination, featuring advanced monitoring systems and interactive course content.",
    image: "/images/unique.png",
    images: [
      "/images/unique.png",
      "/images/unique-2.png",
      "/images/unique-3.png",
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    tagColors: [
      "bg-black/10 text-foreground",
      "bg-blue-300/10 text-blue-300",
      "bg-orange-500/10 text-orange-500",
    ],
    links: {
      github: "https://github.com/MRQ67/unique-e-learning",
    },
    features: [
      "AI-powered exam proctoring",
      "Interactive course content",
      "Secure authentication system",
      "Real-time monitoring dashboard",
      "Comprehensive analytics and reporting",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "AI/ML APIs",
    ],
    status: "completed",
  },
  {
    id: 7,
    slug: "unique-validation",
    title: "Unique Validation",
    description:
      "A modern web application for creating, managing, and validating e-learning certificates with QR code verification.",
    fullDescription:
      "Unique Validation is a sophisticated certificate management system that enables educational institutions to create, distribute, and verify digital certificates. The platform features QR code generation for instant verification and provides a comprehensive dashboard for certificate management.",
    image: "/images/vaild.png",
    images: ["/images/vaild.png", "/images/vaild-2.png", "/images/vaild-3.png"],
    tags: ["Next.js", "Tailwind CSS", "Vercel KV"],
    tagColors: [
      "bg-black/10 text-foreground",
      "bg-blue-300/10 text-blue-300",
      "bg-purple-400/10 text-purple-400",
    ],
    links: {
      live: "https://unique-validation.vercel.app/",
      github: "https://github.com/MRQ67/unique-validation",
    },
    features: [
      "QR code certificate verification",
      "Digital certificate creation",
      "Secure certificate storage",
      "Batch certificate generation",
      "Real-time verification system",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel KV", "QR Code API"],
    status: "completed",
  },
  {
    id: 8,
    slug: "portfolio-website",
    title: "AA3 Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, featuring smooth animations and interactive components.",
    fullDescription:
      "This portfolio website showcases modern web development techniques with a focus on user experience and visual appeal. Built with Next.js and enhanced with Framer Motion animations, it demonstrates proficiency in contemporary web technologies and design principles.",
    image: "/images/portfolio-preview.png",
    images: [
      "/images/portfolio-preview.png",
      "/images/portfolio-2.png",
      "/images/portfolio-3.png",
    ],
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    tagColors: [
      "bg-black/10 text-foreground",
      "bg-blue-500/10 text-blue-500",
      "bg-orange-500/10 text-orange-500",
    ],
    links: {
      github: "https://github.com/MRQ67/aa3_portfolio",
      live: "https://aa3.site",
    },
    features: [
      "Responsive design for all devices",
      "Smooth animations and transitions",
      "Interactive UI components",
      "Optimized performance",
      "Modern design aesthetics",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    status: "completed",
  },
];

// Get top 4 projects for homepage
export const getTopProjects = (count: number = 4): Project[] => {
  return projects.slice(0, count);
};
