import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.tmimgcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kethanvr.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "therapease.kethanvr.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mental-ai-chatbot-lime.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
