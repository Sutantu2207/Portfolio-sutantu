export interface PersonalInfo {
  name: string;
  role: string;
  secondaryRole: string;
  positioning: string;
  tagline: string;
  heroPills: string[];
  location: string;
  image?: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  statement: {
    headline: string;
    subheadline: string;
    description: string[];
  };
}

export const personalData: PersonalInfo = {
  name: "M SUTANTU",
  role: "Graphic & Brand Designer",
  secondaryRole: "Canva Pro & Visual UI Specialist",
  positioning: "A creative graphic designer specializing in Canva Pro brand systems, high-converting social media creatives, executive pitch decks, and Figma UI/UX interfaces.",
  tagline: "Crafting memorable brand identities, high-impact marketing creatives, and sleek digital experiences with Canva Pro and Figma.",
  heroPills: ["Canva Pro (Expert)", "Brand Kits & Identity", "Social Media Carousels", "Pitch Decks", "Figma UI/UX"],
  location: "Coimbatore, Tamil Nadu, India",
  image: "/sutantu.jpg",
  email: "sutantu07@gmail.com",
  phone: "+91 93456 07221",
  github: "github.com/Sutantu2207",
  githubUrl: "https://github.com/Sutantu2207",
  linkedin: "[ADD LINK]",
  statement: {
    headline: "GREAT DESIGN IS ABOUT VISION.",
    subheadline: "NOT TOOL COMPLEXITY.",
    description: [
      "I am a visual and graphic designer with deep expertise in Canva Pro, brand identity architecture, and modern digital interfaces in Figma. I believe outstanding graphic design stems from razor-sharp visual hierarchy, balanced typography, and deliberate storytelling that resonates with audiences.",
      "While many overcomplicate design workflows, my core strength is speed, consistency, and commercial impact. Using Canva Pro as my primary creative engine, I deliver full brand kits, high-converting multi-slide social carousels, event collateral, and investor pitch decks on rapid turnaround—supported by foundational Photoshop skills for asset prep and retouching.",
      "In digital product design, I bridge visual brand aesthetics with functional UI/UX in Figma. From the initial moodboard to production-ready design deliverables, I bring ideas to life with elegance, purpose, and pixel-level care."
    ]
  }
};
