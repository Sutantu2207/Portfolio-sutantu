export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent: boolean;
  type: string;
  summary: string;
  responsibilities: string[];
  techTags: string[];
  badgeNote?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "skill-hive",
    role: "Full Stack Designer Intern",
    company: "Skill Hive Innovations",
    period: "June 2026 – Present",
    isCurrent: true,
    type: "Internship",
    summary: "Bridging visual design, UI/UX architecture, responsive frontend layouts, and cross-functional design system execution for production web applications.",
    badgeNote: "Full Stack Design & UI Systems",
    responsibilities: [
      "Crafting high-fidelity UI/UX wireframes, user journey blueprints, and interactive prototypes in Figma",
      "Translating design tokens, typography scales, and modular components into responsive frontend layouts",
      "Maintaining design system consistency, accessible contrast ratios, and seamless cross-device ergonomics",
      "Collaborating with engineering and product teams to oversee end-to-end design implementation",
      "Conducting usability audits, micro-interaction polishing, and workflow optimizations"
    ],
    techTags: ["Full Stack Design", "UI/UX Architecture", "Figma", "Design Systems", "Responsive Layouts", "Prototyping"]
  },
  {
    id: "epoch-minds",
    role: "AI & Machine Learning Intern",
    company: "Epoch Minds",
    period: "May 2024 – June 2024",
    isCurrent: false,
    type: "Internship",
    summary: "Explored foundational AI models, machine learning algorithms, structured data preprocessing, and predictive analytical pipelines.",
    responsibilities: [
      "Data preprocessing, cleaning, feature engineering, and dataset normalization",
      "Training, evaluating, and fine-tuning predictive machine learning models and classification benchmarks",
      "Experimenting with supervised learning algorithms and AI-driven analytical pipelines",
      "Analyzing model accuracy metrics, performance benchmarks, and data visualization"
    ],
    techTags: ["Artificial Intelligence", "Machine Learning", "Python", "Data Preprocessing", "Model Training", "Predictive Analytics"]
  },
  {
    id: "harvy-solutions",
    role: "Digital Marketing & Graphic Design Intern",
    company: "Harvy Solutions",
    period: "December 2023 – January 2024",
    isCurrent: false,
    type: "Internship",
    summary: "Supported brand visibility initiatives, social media communication design, and audience engagement campaigns.",
    responsibilities: [
      "Crafting engaging social media creatives, ad banners, and promotional posters",
      "Enhancing brand visual identity across key digital touchpoints and community channels",
      "Designing visual campaign templates tailored to target audience demographics",
      "Monitoring audience visual engagement patterns to optimize promotional assets"
    ],
    techTags: ["Graphic Design", "Social Media Creatives", "Brand Identity", "Ad Banners", "Marketing Campaigns"]
  }
];
