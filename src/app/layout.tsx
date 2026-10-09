import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import LiveBackground from "@/components/LiveBackground";
import { personalData } from "@/data/personal";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sutantu M — Graphic & Visual Designer",
  description:
    "Portfolio of Sutantu M, a Graphic and Visual Designer crafting brand identities, marketing creatives, typography systems, and intuitive digital UI/UX experiences.",
  keywords: [
    "Sutantu M",
    "Graphic Designer",
    "Visual Designer",
    "Brand Identity Designer",
    "UI/UX Designer",
    "Digital Product Design",
    "Typography & Layout",
    "SNS College of Technology",
    "Coimbatore Graphic Designer",
  ],
  authors: [{ name: personalData.name }],
  creator: personalData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sutantu.dev",
    title: "Sutantu M — Graphic & Visual Designer",
    description:
      "Portfolio of Sutantu M, a Graphic and Visual Designer crafting brand identities, marketing creatives, and intuitive digital UI/UX experiences.",
    siteName: "Sutantu M Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutantu M — Graphic & Visual Designer",
    description:
      "Portfolio of Sutantu M, a Graphic and Visual Designer crafting brand identities, marketing creatives, and intuitive digital UI/UX experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    jobTitle: personalData.role,
    description: personalData.positioning,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "SNS College of Technology",
    },
    sameAs: [personalData.githubUrl],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jakarta.variable} scroll-smooth dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#090a0d] text-[#fafafa] font-sans antialiased min-h-screen flex flex-col selection:bg-white/20 selection:text-white relative">
        {/* Dynamic Breathing Glowing Background */}
        <LiveBackground />

        {/* Tactile Editorial Noise Grain */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Custom Physics Cursor for Desktop */}
        <CustomCursor />

        {/* Smooth Momentum Scrolling */}
        <SmoothScroll>
          <Navigation />
          <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
