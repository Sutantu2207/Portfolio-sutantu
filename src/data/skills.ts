export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  category: "CORE" | "SUPPORTING";
  description: string;
  details: string[];
  techPills: string[];
}

export interface SkillCategory {
  categoryName: string;
  badge: string;
  skills: {
    name: string;
    level: "Core (Expert)" | "Core" | "Foundational" | "Working Exposure";
    description?: string;
  }[];
}

export const expertiseItems: ExpertiseItem[] = [
  {
    id: "brand-identity",
    number: "01",
    title: "BRAND KITS & IDENTITY",
    category: "CORE",
    description: "Logo design, cohesive brand kits, and visual identity systems.",
    details: [
      "Crafting distinctive brand marks, custom logotypes, and curated Brand Kits in Canva Pro",
      "Formulating cohesive color palettes, moodboards, and professional typography hierarchy",
      "Establishing unified brand guidelines and reusable templates for consistent multi-platform presence"
    ],
    techPills: ["Canva Brand Kits", "Logo Design", "Color Theory", "Brand Guidelines", "Visual Identity"]
  },
  {
    id: "social-marketing",
    number: "02",
    title: "SOCIAL & MARKETING DESIGN",
    category: "CORE",
    description: "High-converting social media carousels, ad creatives, and promotional assets.",
    details: [
      "Designing high-engagement multi-slide carousels for Instagram, LinkedIn, and social feeds",
      "Producing scroll-stopping promotional banners, story templates, and digital advertising collateral",
      "Balancing visual storytelling, bold call-outs, and typography contrast to boost engagement"
    ],
    techPills: ["Canva Pro", "Carousel Design", "Social Media Ads", "Promotional Banners", "Visual Storytelling"]
  },
  {
    id: "presentations-decks",
    number: "03",
    title: "PRESENTATIONS & DECKS",
    category: "CORE",
    description: "Executive pitch decks, visual reports, and professional slide decks.",
    details: [
      "Designing clean, persuasive investor pitch decks and client presentation slide decks",
      "Translating complex information into clear visual infographics, statistics charts, and flow diagrams",
      "Applying consistent typography scales and generous negative space for maximum clarity"
    ],
    techPills: ["Pitch Decks", "Slide Deck Design", "Infographics", "Executive Keynotes", "Data Visuals"]
  },
  {
    id: "ui-ux",
    number: "04",
    title: "UI/UX & DIGITAL LAYOUTS",
    category: "CORE",
    description: "Wireframing, prototyping, and modern mobile/web interfaces in Figma.",
    details: [
      "Transforming creative ideas into high-fidelity mobile and web screen layouts in Figma",
      "Focusing on intuitive user flows, ergonomic touch zones, and clear visual hierarchy",
      "Combining Figma layout systems with Canva graphic assets for complete digital experiences"
    ],
    techPills: ["Figma", "Mobile UI", "Wireframing", "Component Tokens", "User Journeys"]
  },
  {
    id: "typography-print",
    number: "05",
    title: "TYPOGRAPHY & PRINT",
    category: "SUPPORTING",
    description: "Poster design, marketing flyers, packaging labels, and print collateral.",
    details: [
      "Expert font pairing, kerning, leading, and proportional typographic scales across print and digital",
      "Creating print-ready packaging labels, business cards, event posters, and marketing brochures",
      "Applying print bleed margins, high-resolution formatting, and color calibrations"
    ],
    techPills: ["Poster Design", "Packaging Labels", "Flyers & Brochures", "Typography Pairing", "Print Production"]
  },
  {
    id: "design-thinking",
    number: "06",
    title: "DESIGN THINKING",
    category: "SUPPORTING",
    description: "User empathy mapping, rapid visual ideation, and collaborative problem solving.",
    details: [
      "Certified in IBM Enterprise Design Thinking applied to creative problem solving",
      "Conducting competitor visual audits, moodboard curation, and concept validation",
      "Rapid iterative design workflows to deliver high-quality creative assets on fast turnaround"
    ],
    techPills: ["IBM Design Thinking", "Rapid Ideation", "Visual Research", "Moodboard Curation"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    categoryName: "Design Software & Tools",
    badge: "Core Tools",
    skills: [
      { name: "Canva Pro", level: "Core (Expert)", description: "Brand kits, marketing carousels & pitch decks" },
      { name: "Figma", level: "Core", description: "UI wireframes, digital layouts & prototypes" },
      { name: "Adobe Photoshop", level: "Foundational", description: "Basic photo retouching & asset prep" },
      { name: "Canva AI & Magic Studio", level: "Core (Expert)", description: "Generative fills, background removal & mockups" }
    ]
  },
  {
    categoryName: "Primary Design Disciplines",
    badge: "Specialization",
    skills: [
      { name: "Brand Kits & Logo Systems", level: "Core (Expert)", description: "Unified visual identities & style guides" },
      { name: "Social Media Carousels & Ads", level: "Core (Expert)", description: "High-converting visual marketing assets" },
      { name: "Pitch Decks & Presentations", level: "Core (Expert)", description: "Executive slide decks & infographics" },
      { name: "Mobile UI & Web Wireframes", level: "Core", description: "Clean digital interfaces in Figma" },
      { name: "Packaging & Marketing Print", level: "Core", description: "Labels, posters & promotional collateral" }
    ]
  },
  {
    categoryName: "Creative Strategy & Process",
    badge: "Methodology",
    skills: [
      { name: "Enterprise Design Thinking", level: "Working Exposure", description: "IBM certified user empathy & ideation" },
      { name: "Typography Pairing & Hierarchy", level: "Core (Expert)", description: "Curated font combinations & scales" },
      { name: "Color Theory & Contrast", level: "Core (Expert)", description: "Harmonious palettes & brand moodboards" },
      { name: "Fast Creative Turnaround", level: "Core (Expert)", description: "Agile asset generation & rapid iteration" }
    ]
  }
];
