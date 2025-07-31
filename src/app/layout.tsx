import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins, Baloo_Bhai_2 } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const balooBhai = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo-bhai",
});

export const metadata: Metadata = {
  title: "TherapEase - AI Mental Health Support | Kethan VR",
  description:
    "AI chatbot for mental health support by Kethan VR. Get personalized mental health guidance, mood tracking, and wellness resources. Built by an AI developer & full stack engineer from Bangalore.",
  keywords: [
    "Kethan VR",
    "AI Developer",
    "Full Stack Developer",
    "Bangalore Software Engineer",
    "GenAI Projects",
    "React Developer",
    "Node.js Developer",
    "Supabase Developer",
    "Prompt Engineering",
    "LangChain",
    "Gemini API",
    "OpenAI Chatbot",
    "Web App Developer",
    "DevOps Learner",
    "Portfolio Website",
    "CMRIT Bangalore",
    "Indian AI Developer",
    "Tailwind CSS",
    "MongoDB",
    "GitHub Developer",
    "Shun AI",
    "InstaScan",
    "CineSnap",
    "MediScan",
    "Petty",
    "InstaSearch",
    "LLMs",
    "AI Tools",
    "AI Chatbot Builder",
    "Frontend Backend Developer",
    "mental health",
    "AI chatbot",
    "therapy",
    "wellness",
    "mood tracking",
  ],
  authors: [{ name: "Kethan VR", url: "https://kethanvr.me" }],
  creator: "Kethan VR",
  openGraph: {
    title: "TherapEase - AI Mental Health Support | Kethan VR",
    description:
      "AI chatbot for mental health support by Kethan VR. Get personalized mental health guidance, mood tracking, and wellness resources.",
    type: "website",
    url: "https://kethanvr.me",
    siteName: "TherapEase",
    images: [
      {
        url: "/profilepic.jpg",
        width: 1200,
        height: 630,
        alt: "Kethan VR - AI Developer & Full Stack Engineer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TherapEase - AI Mental Health Support | Kethan VR",
    description:
      "AI chatbot for mental health support by Kethan VR. Get personalized mental health guidance, mood tracking, and wellness resources.",
    creator: "@VrKethan",
    images: ["/profilepic.jpg"],
    site: "@VrKethan",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  alternates: {
    canonical: "https://kethanvr.me",
    types: {
      "application/rss+xml": "https://kethanvr.me/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <head>
          {/* JSON-LD Structured Data for Person */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Kethan VR",
                url: "https://kethanvr.me",
                image: "https://kethanvr.me/profilepic.jpg",
                sameAs: [
                  "https://github.com/Kethanvr",
                  "https://linkedin.com/in/kethanvr",
                  "https://x.com/VrKethan",
                  "https://youtube.com/@kethanvr",
                ],
                jobTitle: "AI Developer & Full Stack Engineer",
                worksFor: {
                  "@type": "Organization",
                  name: "TherapEase",
                },
              }),
            }}
          />
        </head>
        <body
          className={`${poppins.variable} ${balooBhai.variable} font-poppins antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
