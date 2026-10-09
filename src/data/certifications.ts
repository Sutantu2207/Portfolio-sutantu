export interface CertificationItem {
  id: string;
  issuer: string;
  title: string;
  category: "Design" | "Media & Ethics" | "Analytical" | "Specialized";
  credentialBadge?: string;
  description: string;
  isSpecialCounter?: boolean;
}

export const certifications: CertificationItem[] = [
  {
    id: "ibm-design-thinking",
    issuer: "IBM",
    title: "Enterprise Design Thinking Practitioner",
    category: "Design",
    credentialBadge: "Verified Practitioner",
    description: "Industry-standard user-centered framework focusing on empathy mapping, rapid visual ideation, prototype evaluation, and collaborative user experience problem solving."
  },
  {
    id: "nptel-privacy",
    issuer: "NPTEL",
    title: "Privacy and Security in Online Social Media",
    category: "Media & Ethics",
    credentialBadge: "Verified Certification",
    description: "In-depth study of digital media ethics, brand identity protection, secure content handling, and user privacy in interconnected digital environments."
  },
  {
    id: "nptel-testing",
    issuer: "NPTEL",
    title: "Software Quality & Verification",
    category: "Specialized",
    credentialBadge: "Verified Certification",
    description: "Systematic principles in quality verification, design consistency checks, interface review standards, and attention to detail across digital deliverables."
  },
  {
    id: "analytics-vidhya-40",
    issuer: "Analytics Vidhya",
    title: "Information & Data Visualization Modules",
    category: "Analytical",
    credentialBadge: "40+ Certificates",
    isSpecialCounter: true,
    description: "Comprehensive achievement encompassing 40+ specialized modular certifications covering data foundations, visual infographics, and analytical charts."
  },
  {
    id: "bytexl-python",
    issuer: "BYTEXL",
    title: "Creative Computing & Problem Solving",
    category: "Specialized",
    credentialBadge: "Verified Certification",
    description: "Structured certification in digital logic, computational problem-solving, and procedural workflow automation."
  },
  {
    id: "bytexl-dsa",
    issuer: "BYTEXL",
    title: "Algorithmic Logic & Systematic Thinking",
    category: "Specialized",
    credentialBadge: "Verified Certification",
    description: "Mastery of structured problem decomposition, organized information models, and optimized logical thinking."
  }
];

export const languages = [
  { name: "English", proficiency: "Professional Working Proficiency" },
  { name: "Tamil", proficiency: "Native / Bilingual Proficiency" },
  { name: "Hindi", proficiency: "Conversational" },
  { name: "Telugu", proficiency: "Conversational" }
];
