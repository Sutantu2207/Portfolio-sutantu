export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  isDominant: boolean;
  status: string;
  highlights: string[];
  focusAreas: string[];
}

export const educations: EducationItem[] = [
  {
    id: "sns-be-cse",
    degree: "B.E. Computer Science and Engineering",
    institution: "SNS College of Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "2023 – 2027",
    isDominant: true,
    status: "Currently Pursuing (Undergraduate)",
    highlights: [
      "Dedicated focus on UI/UX design, visual communication, design thinking, and human-computer interaction",
      "Academic coursework in multimedia systems, digital interfaces, and modern design principles",
      "Practical exploration of design systems, accessibility standards, and creative typography"
    ],
    focusAreas: [
      "UI/UX & Interface Design",
      "Enterprise Design Thinking",
      "Visual Communication",
      "Typography & Layout Systems",
      "Digital Media & Prototyping"
    ]
  },
  {
    id: "velammal-hsc",
    degree: "Higher Secondary Education (HSC / Grade XII)",
    institution: "Velammal Bodhi Campus",
    location: "Tamil Nadu, India",
    period: "2021 – 2023",
    isDominant: false,
    status: "Completed",
    highlights: [
      "Rigorous science and mathematics foundation fostering strong analytical and creative problem-solving skills"
    ],
    focusAreas: ["Mathematics", "Physics", "Computer Science"]
  },
  {
    id: "suguna-sslc",
    degree: "Secondary School Education (SSLC / Grade X)",
    institution: "Suguna PIPS School",
    location: "Tamil Nadu, India",
    period: "2010 – 2020",
    isDominant: false,
    status: "Completed",
    highlights: [
      "Foundational schooling cultivating curiosity, creative visual discipline, and collaborative leadership"
    ],
    focusAreas: ["Core Academics", "Visual Arts", "Extracurriculars"]
  }
];
