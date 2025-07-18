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
  title: "TherapEase - AI Mental Health Support",
  description:
    "AI chatbot for mental health support. Get personalized mental health guidance, mood tracking, and wellness resources.",
  keywords: [
    "mental health",
    "AI chatbot",
    "therapy",
    "wellness",
    "mood tracking",
  ],
  authors: [{ name: "TherapEase" }],
  openGraph: {
    title: "TherapEase - AI Mental Health Support",
    description:
      "AI chatbot for mental health support. Get personalized mental health guidance, mood tracking, and wellness resources.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${balooBhai.variable} font-poppins antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
