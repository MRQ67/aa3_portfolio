export interface Design {
  id: number;
  title: string;
  description: string;
  image: string;
  gallery: string[]; // Array of image URLs for the slideshow
  category: 'logo' | 'poster' | 'ui' | 'branding' | 'illustration';
  tools: string[];
  year: string;
}

export const designs: Design[] = [
  {
    id: 1,
    title: "Firelance Dire",
    description: "Modern and dynamic logo design for a tech company",
    image: "/images/freelance/linkedin_profile.png",
    gallery: [
      "/images/freelance/linkedin_profile.png",
      "/images/freelance/Artboard%2020.png",
      "/images/freelance/Artboard%2024.png",
      "/images/freelance/Typography.png",
      "/images/freelance/free_logo.png"
    ],
    category: "logo",
    tools: ["Adobe Illustrator", "Figma"],
    year: "2024"
  },
  {
    id: 2,
    title: "Zarespace Digital",
    description: "Sleek and professional logo for a digital agency",
    image: "/images/zarespace/Linkedin%20Logo.png",
    gallery: [
      "/images/zarespace/Linkedin%20Logo.png",
      "/images/zarespace/Black%20Logo%20w-%20Text.png",
      "/images/zarespace/Black%20Name.png",
      "/images/zarespace/Black%20Wide%20Logo.png",
      "/images/zarespace/Chrome%20Logo.png",
      "/images/zarespace/Green%20Black%20Logo.png",
      "/images/zarespace/Green%20White%20Logo.png",
      "/images/zarespace/Linkedin%20Cover.png",
      "/images/zarespace/Linkedin%20Logo.png",
      "/images/zarespace/White%20Logo%20w-%20Text.png",
      "/images/zarespace/White%20Name.png",
      "/images/zarespace/White%20Wide%20Logo.png",
      "/images/zarespace/Wide.png",
      "/images/zarespace/X%20Banner.png"
    ],
    category: "logo",
    tools: ["Adobe Illustrator", "Figma"],
    year: "2024"
  },
  {
    id: 3,
    title: "Modern Logo Design",
    description: "Clean and minimalist logo design for a tech startup",
    image: "/designs/logo-1.png",
    gallery: ["/designs/logo-1.png"],
    category: "logo",
    tools: ["Adobe Illustrator", "Figma"],
    year: "2024"
  },
  {
    id: 4,
    title: "Event Poster",
    description: "Vibrant poster design for a music festival",
    image: "/designs/poster-1.png",
    gallery: ["/designs/poster-1.png"],
    category: "poster",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "2024"
  },
  {
    id: 5,
    title: "Mobile App UI",
    description: "Modern mobile app interface design with smooth animations",
    image: "/designs/ui-1.png",
    gallery: ["/designs/ui-1.png"],
    category: "ui",
    tools: ["Figma", "Adobe XD"],
    year: "2024"
  },
  {
    id: 6,
    title: "Brand Identity",
    description: "Complete brand identity package for a coffee shop",
    image: "/designs/brand-1.png",
    gallery: ["/designs/brand-1.png"],
    category: "branding",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    year: "2023"
  },
  {
    id: 7,
    title: "Digital Illustration",
    description: "Abstract digital artwork with geometric patterns",
    image: "/designs/illustration-1.png",
    gallery: ["/designs/illustration-1.png"],
    category: "illustration",
    tools: ["Adobe Illustrator", "Procreate"],
    year: "2024"
  },
  {
    id: 8,
    title: "Website Mockup",
    description: "Landing page design for a SaaS platform",
    image: "/designs/ui-2.png",
    gallery: ["/designs/ui-2.png"],
    category: "ui",
    tools: ["Figma", "Adobe Photoshop"],
    year: "2024"
  },
  {
    id: 9,
    title: "Corporate Logo",
    description: "Professional logo design for a consulting firm",
    image: "/designs/logo-2.png",
    gallery: ["/designs/logo-2.png"],
    category: "logo",
    tools: ["Adobe Illustrator"],
    year: "2023"
  },
  {
    id: 10,
    title: "Concert Poster",
    description: "Dynamic poster design for a rock concert",
    image: "/designs/poster-2.png",
    gallery: ["/designs/poster-2.png"],
    category: "poster",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "2024"
  },
  {
    id: 11,
    title: "Restaurant Branding",
    description: "Complete brand identity for a modern restaurant",
    image: "/designs/brand-2.png",
    gallery: ["/designs/brand-2.png"],
    category: "branding",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    year: "2023"
  }
];

// Get featured designs for homepage
export const getFeaturedDesigns = (p0: number): Design[] => {
  // Return exactly 3 designs for the homepage gallery
  return [
    designs[0],  // First logo design
    designs[1],  // Second logo design
    // designs[2]   // First design from the rest
  ];
};