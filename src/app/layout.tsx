import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MindfulAI - Mental Health Support Chatbot",
  description: "AI-powered mental health support and wellness tracking. Get empathetic assistance, mood tracking, and personalized wellness recommendations.",
  keywords: ["mental health", "AI chatbot", "wellness", "mood tracking", "therapy", "mindfulness"],
  authors: [{ name: "MindfulAI Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
