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
    tools: ["Adobe Illustrator"],
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
    tools: ["Adobe Illustrator"],
    year: "2024"
  }
];

// Get featured designs for homepage
export const getFeaturedDesigns = (): Design[] => {
  // Return exactly 3 designs for the homepage gallery
  return [
    designs[0],  // First logo design
    designs[1],  // Second logo design
    // designs[2]   // First design from the rest
  ];
};