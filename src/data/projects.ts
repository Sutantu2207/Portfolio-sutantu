export interface ResumeProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  contribution: string;
  techStack: string[];
  productFocus?: string[];
  githubUrl: string;
  demoUrl: string;
  isPlaceholderUrl: boolean;
  accentColor: string;
  type: "Featured Design Project" | "Brand Identity" | "Editorial Design";
}

export interface FlutterProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  myRole: string;
  technologies: string[];
  features: string[];
  uiUxProcess: string;
  githubUrl: string;
  demoUrl: string;
  isPlaceholder: boolean;
  statusBadge: string;
  accentColor: string;
  mockupTheme: {
    appBarTitle: string;
    primaryColor: string;
    secondaryColor: string;
    statValue: string;
    statLabel: string;
    cardTitle: string;
    cardSubtitle: string;
    actionText: string;
    pillTags: string[];
  };
}

export const resumeProjects: ResumeProject[] = [
  {
    id: "freshify",
    number: "01",
    title: "FRESHIFY",
    subtitle: "Organic Brand Kit, Social Carousel Series & Packaging Suite",
    category: "Brand Kit & Marketing Suite (Canva Pro)",
    description: "A comprehensive organic visual brand identity, sustainable packaging mockup system, and 10-slide high-converting social media carousel crafted in Canva Pro for an organic produce collective. Designed with custom brand marks, earth-tone color palettes, and reusable marketing templates.",
    contribution: "Orchestrated the entire visual branding workflow in Canva Pro—curating the brand kit, custom typographic lockups, multi-slide educational Instagram carousels, and packaging mockups with rapid creative turnaround.",
    techStack: ["Canva Pro", "Canva Brand Kit", "Social Media Carousels", "Packaging Mockups", "Color Harmony", "Adobe Photoshop (Touch-up)"],
    productFocus: [
      "Full Canva Pro Brand Kit (custom logomark, font pairings, moodboard)",
      "10-slide high-converting educational Instagram carousel series",
      "Eco-conscious retail packaging labels & marketing flyers",
      "Multi-format promotional ad templates for rapid campaign rollout"
    ],
    githubUrl: "[BEHANCE / CANVA PREVIEW]",
    demoUrl: "[VIEW ASSETS]",
    isPlaceholderUrl: true,
    accentColor: "#d4d4d8",
    type: "Featured Design Project"
  },
  {
    id: "interview-twin",
    number: "02",
    title: "INTERVIEW TWIN",
    subtitle: "Digital Product UI & 14-Slide Investor Pitch Deck",
    category: "UI/UX & Investor Presentation Design",
    description: "An intuitive digital product UI crafted in Figma, paired with an executive 14-slide investor pitch deck designed in Canva Pro. Focused on crystal-clear visual hierarchy, anxiety-reducing color psychology, and persuasive data visualization.",
    contribution: "Designed mobile/desktop UI prototypes in Figma and translated product mechanics into a high-impact Canva investor pitch deck featuring custom visual charts, user flow infographics, and clean typography.",
    techStack: ["Figma", "Canva Pro", "Pitch Deck Design", "UI Wireframes", "Design System", "Infographics"],
    productFocus: [
      "High-fidelity Figma mobile & desktop interface components",
      "14-slide executive investor pitch deck crafted in Canva Pro",
      "Custom visual user journey maps & infographic diagrams",
      "Visual design token guide (typography scale & contrast tokens)"
    ],
    githubUrl: "[BEHANCE / CANVA PREVIEW]",
    demoUrl: "[VIEW ASSETS]",
    isPlaceholderUrl: true,
    accentColor: "#a1a1aa",
    type: "Featured Design Project"
  },
  {
    id: "kairos-editorial",
    number: "03",
    title: "KAIROS & CO.",
    subtitle: "Editorial Poster Series & Multi-Platform Ad Campaign",
    category: "Typographic Poster & Social Ad Suite",
    description: "A minimalist luxury visual campaign featuring modern Swiss-style typographic exhibition posters, event collaterals, and a dynamic 6-part social media ad suite. Emphasizes bold asymmetrical grids, elegant serif-sans pairings, and refined negative space.",
    contribution: "Conceptualized the visual direction, poster typography layouts, event invite collateral, and digital advertising suite using Canva Pro for rapid production and Photoshop for foundational image touch-ups.",
    techStack: ["Canva Pro", "Typographic Posters", "Social Campaign", "Visual Layout", "Adobe Photoshop (Asset Prep)"],
    productFocus: [
      "3-piece Swiss modernist typographic poster exhibition series",
      "Multi-platform digital marketing campaign creatives (1:1 and 9:16)",
      "Bespoke font pairing hierarchy & minimalist layout grid",
      "Print-ready high-resolution promotional flyers & invites"
    ],
    githubUrl: "[BEHANCE / CANVA PREVIEW]",
    demoUrl: "[VIEW ASSETS]",
    isPlaceholderUrl: true,
    accentColor: "#71717a",
    type: "Editorial Design"
  }
];

export const flutterProjects: FlutterProject[] = [
  {
    id: "flutter-pulsefit",
    name: "PulseFit Mobile UI",
    tagline: "Wellness App Visual UI & Design System",
    description: "An interactive mobile interface concept crafted for daily wellness tracking, featuring high-contrast dark themes, ergonomic typography, and intuitive visual data cards.",
    myRole: "Lead Visual & UI Designer [CONCEPT SHOWCASE]",
    technologies: ["Figma", "Canva Pro Assets", "Mobile UI Design", "Design Systems", "Visual Hierarchy"],
    features: [
      "Intuitive biometric visual charts & data display",
      "Ergonomic thumb-friendly navigation zones",
      "High-contrast dark mode color palette"
    ],
    uiUxProcess: "Explored visual habit loops with low-friction one-tap actions, thumb-reachable zones, and high-contrast numerical typography.",
    githubUrl: "https://github.com/Sutantu2207",
    demoUrl: "[VIEW CASE STUDY]",
    isPlaceholder: true,
    statusBadge: "Curated UI Concept",
    accentColor: "#d4d4d8",
    mockupTheme: {
      appBarTitle: "PulseFit Visual UI",
      primaryColor: "#02569B",
      secondaryColor: "#0175C2",
      statValue: "8,420",
      statLabel: "Active Steps Today • Visual Progress",
      cardTitle: "Design System: Typography & Color",
      cardSubtitle: "Curated high-contrast palette with ergonomic touch targets",
      actionText: "Explore Design System",
      pillTags: ["Figma UI", "Visual Design", "Design System"]
    }
  },
  {
    id: "flutter-finvibe",
    name: "FinVibe Mobile UI",
    tagline: "Minimalist Finance App UI & Iconography System",
    description: "A clean, modern financial companion interface crafted with seamless visual hierarchy, custom vector iconography, and balanced negative space.",
    myRole: "Digital Product & UI Designer [CONCEPT SHOWCASE]",
    technologies: ["Figma", "Canva Pro", "Iconography Design", "Information Architecture", "UI Components"],
    features: [
      "Custom vector finance iconography and visual categorization",
      "Clean monetary typography with clear scannability",
      "Streamlined visual budget cards with intuitive color tags"
    ],
    uiUxProcess: "Streamlined financial data visualization from cluttered tables into clean, scannable visual summaries.",
    githubUrl: "https://github.com/Sutantu2207",
    demoUrl: "[VIEW CASE STUDY]",
    isPlaceholder: true,
    statusBadge: "Curated UI Concept",
    accentColor: "#a1a1aa",
    mockupTheme: {
      appBarTitle: "FinVibe UI",
      primaryColor: "#0369a1",
      secondaryColor: "#0284c7",
      statValue: "$2,840.50",
      statLabel: "Monthly Budget Visual Summary",
      cardTitle: "Visual Information Architecture",
      cardSubtitle: "Categorized with custom vector iconography",
      actionText: "View Prototype",
      pillTags: ["Mobile UI", "Component Library", "Design Tokens"]
    }
  },
  {
    id: "flutter-curate",
    name: "Artisan Studio UI",
    tagline: "Luxury Editorial E-Commerce & Brand Experience",
    description: "A luxury mobile storefront visual concept celebrating editorial magazine layouts, bespoke typography pairings, and immersive visual storytelling.",
    myRole: "Brand & E-Commerce Visual Designer [CONCEPT SHOWCASE]",
    technologies: ["Figma", "Canva Pro", "Editorial Layout", "Typography", "Visual Branding"],
    features: [
      "Bespoke serif & sans typography combinations",
      "Editorial magazine-style layout for curated artisan products",
      "Refined negative space and luxury visual storytelling"
    ],
    uiUxProcess: "Balanced modern minimalist luxury aesthetics with clear product discovery and purchase pathways.",
    githubUrl: "https://github.com/Sutantu2207",
    demoUrl: "[VIEW CASE STUDY]",
    isPlaceholder: true,
    statusBadge: "Curated UI Concept",
    accentColor: "#71717a",
    mockupTheme: {
      appBarTitle: "Artisan Studio",
      primaryColor: "#1e3a8a",
      secondaryColor: "#2563eb",
      statValue: "Edition #07",
      statLabel: "Curated Handcrafted Visual Collection",
      cardTitle: "Minimalist Visual Design System",
      cardSubtitle: "Curated imagery, bespoke typography & refined spacing",
      actionText: "View Case Study",
      pillTags: ["Editorial UI", "Visual Branding", "Luxury Layout"]
    }
  }
];
