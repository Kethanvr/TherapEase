import type { Metadata } from "next";
import { Poppins, Baloo_Bhai_2 } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
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
  title: "TherapEase - AI Chatbot for Mental Health Support",
  description: "TherapEase AI chatbot for mental health support. Get empathetic assistance, mood tracking, and personalized wellness recommendations.",
  keywords: ["mental health", "AI chatbot", "wellness", "mood tracking", "therapy", "mindfulness", "TherapEase"],
  authors: [{ name: "TherapEase Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${poppins.variable} ${balooBhai.variable} font-poppins antialiased bg-gray-50 min-h-screen text-gray-900`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
