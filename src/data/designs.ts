export interface Design {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'logo' | 'poster' | 'ui' | 'branding' | 'illustration';
  tools: string[];
  year: string;
}

export const designs: Design[] = [
  {
    id: 1,
    title: "Modern Logo Design",
    description: "Clean and minimalist logo design for a tech startup",
    image: "/designs/logo-1.png",
    category: "logo",
    tools: ["Adobe Illustrator", "Figma"],
    year: "2024"
  },
  {
    id: 2,
    title: "Event Poster",
    description: "Vibrant poster design for a music festival",
    image: "/designs/poster-1.png",
    category: "poster",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "2024"
  },
  {
    id: 3,
    title: "Mobile App UI",
    description: "Modern mobile app interface design with smooth animations",
    image: "/designs/ui-1.png",
    category: "ui",
    tools: ["Figma", "Adobe XD"],
    year: "2024"
  },
  {
    id: 4,
    title: "Brand Identity",
    description: "Complete brand identity package for a coffee shop",
    image: "/designs/brand-1.png",
    category: "branding",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    year: "2023"
  },
  {
    id: 5,
    title: "Digital Illustration",
    description: "Abstract digital artwork with geometric patterns",
    image: "/designs/illustration-1.png",
    category: "illustration",
    tools: ["Adobe Illustrator", "Procreate"],
    year: "2024"
  },
  {
    id: 6,
    title: "Website Mockup",
    description: "Landing page design for a SaaS platform",
    image: "/designs/ui-2.png",
    category: "ui",
    tools: ["Figma", "Adobe Photoshop"],
    year: "2024"
  },
  {
    id: 7,
    title: "Corporate Logo",
    description: "Professional logo design for a consulting firm",
    image: "/designs/logo-2.png",
    category: "logo",
    tools: ["Adobe Illustrator"],
    year: "2023"
  },
  {
    id: 8,
    title: "Concert Poster",
    description: "Dynamic poster design for a rock concert",
    image: "/designs/poster-2.png",
    category: "poster",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "2024"
  },
  {
    id: 9,
    title: "Restaurant Branding",
    description: "Complete brand identity for a modern restaurant",
    image: "/designs/brand-2.png",
    category: "branding",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    year: "2023"
  }
];

// Get featured designs for homepage
export const getFeaturedDesigns = (count: number = 3): Design[] => {
  return designs.slice(0, count);
};