import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
  Github,
  Linkedin,
  Youtube,
  Twitter,
  Globe,
  ArrowRight,
  Heart,
  MessageCircle,
  TrendingUp,
  Calendar,
  Pill,
  Headphones,
  Check,
  Code,
  Brain,
  Rocket,
  BookOpen,
  Users,
} from "lucide-react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const projects = [
  {
    name: "MediScan",
    description:
      "Scan a pill, get the info. Built this because my family kept asking me what their meds do. Now, the app answers instead of me!",
    tech: ["React", "Supabase", "Gemini AI"],
    status: "Live",
    link: "https://mediscan.kethanvr.me",
    icon: Pill,
    color: "from-green-500 to-teal-600",
  },
  {
    name: "InstaScan",
    description:
      "Point your phone at a food label or cosmetic, and get a breakdown of what’s inside. Health scores included. (Yes, I’m that friend who checks ingredients at the store.)",
    tech: ["React Native", "AI Vision", "Health API"],
    status: "Live",
    link: "https://instascan.kethanvr.me",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Shun AI",
    description:
      "A multilingual GenAI chatbot that actually understands you (even if you mix languages). Built with LangChain & Whisper. Try it for deep convos or just to vent!",
    tech: ["LangChain", "Whisper", "Python", "React"],
    status: "Live",
    link: "https://ai.kethanvr.me",
    icon: MessageCircle,
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "InstaSearch",
    description:
      "Quick image search via Unsplash API. I use it to grab high-quality images for my side projects (and memes).",
    tech: ["React", "Unsplash API"],
    status: "Live",
    link: "https://instasearch.kethanvr.me",
    icon: Globe,
    color: "from-blue-400 to-blue-700",
  },
  {
    name: "CineSnap",
    description:
      "Movie insights, instant summaries, and CineShot downloads. Built for movie nights with friends who can’t decide what to watch.",
    tech: ["Next.js", "TMDB API", "LLM"],
    status: "Live",
    link: "https://cinesnap.kethanvr.me",
    icon: MessageCircle,
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Petty",
    description:
      "AI-powered pet care & relocation platform. Won 1st prize as a mini project, but my dog still ignores it.",
    tech: ["Next.js", "AI", "Healthcare", "Travel API"],
    status: "In Progress",
    link: "https://petty.kethanvr.me",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "TherapEase",
    description:
      "Mental health chatbot, mood tracker, and more. Built for real support, not just another bot. Open source on GitHub!",
    tech: ["Next.js", "TypeScript", "Clerk", "Gemini AI", "Tailwind CSS"],
    status: "Live",
    link: "https://github.com/Kethanvr/TherapEase",
    icon: Brain,
    color: "from-blue-500 to-purple-600",
  },
];

const stack = [
  { label: "Frontend", value: "React.js, Tailwind CSS, Next.js" },
  { label: "Backend", value: "Node.js, Express.js, Supabase, MongoDB" },
  {
    label: "AI & ML",
    value: "Gemini API, OpenAI, Prompt Engineering, AI Chatbots",
  },
  { label: "Dev Tools", value: "Git, GitHub, VS Code, Postman, Figma, Canva" },
];

const socials = [
  { name: "GitHub", icon: Github, url: "https://github.com/Kethanvr" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/kethanvr/",
  },
  { name: "Portfolio", icon: Globe, url: "https://kethanvr.me" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@kethanvr" },
  { name: "X / Twitter", icon: Twitter, url: "https://x.com/VrKethan" },
];

const learning = [
  "Tinkering with LLMs and AI models locally (Docker, HuggingFace, PyTorch)",
  "Trying to make DevOps less scary (CI/CD, cloud infra, serverless)",
  "API optimization, microservices, and making databases go brrr",
  "Prompt engineering for chatbots that don’t sound like robots",
];

const education = [
  { label: "CMRIT Bangalore", value: "ISE (2024–2028)" },
  {
    label: "Self-taught",
    value: "Udemy, YouTube university",
  },
  {
    label: "Philosophy",
    value: "Projects > Certificates — I believe in real-world execution",
  },
];

export default async function AboutPage() {
  const { userId } = await auth();

  return (
    <>
      <Head>
        <title>
          Kethan VR | AI Developer & Full Stack Engineer | Bangalore
        </title>
        <meta
          name="description"
          content="Kethan VR is an AI developer and full stack engineer from Bangalore, building GenAI, LLM, and web apps that scale. Explore projects, skills, and connect!"
        />
        <meta
          name="keywords"
          content="Kethan VR, AI Developer, Full Stack Developer, Bangalore, GenAI, React, Node.js, Supabase, Prompt Engineering, LangChain, Gemini API, OpenAI, Web App Developer, DevOps, Portfolio, CMRIT, Indian AI Developer, Tailwind CSS, MongoDB, GitHub Developer, Shun AI, InstaScan, CineSnap, MediScan, Petty, InstaSearch, LLMs, AI Tools, AI Chatbot Builder, Frontend Backend Developer"
        />
        <meta
          property="og:title"
          content="Kethan VR | AI Developer & Full Stack Engineer"
        />
        <meta
          property="og:description"
          content="AI developer & software builder from Bangalore. Building GenAI, LLM, and web apps that scale. Explore projects, skills, and connect!"
        />
        <meta property="og:image" content="/profilepic.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kethan VR | AI Developer & Full Stack Engineer"
        />
        <meta
          name="twitter:description"
          content="AI developer & software builder from Bangalore. Building GenAI, LLM, and web apps that scale. Explore projects, skills, and connect!"
        />
        <meta name="twitter:image" content="/profilepic.jpg" />
        <link rel="canonical" href="https://kethanvr.me/about" />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-3">
                <div className="rounded-xl bg-gray-50 p-2">
                  <Image
                    src="https://s.tmimgcdn.com/scr/1200x750/352100/mindsol-logo-design-brain-ai-logo_352161-original.jpg"
                    alt="TherapEase Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h1 className="font-baloo-bhai text-xl font-bold text-gray-900">
                    TherapEase
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">
                    AI Mental Health Support
                  </p>
                </div>
              </Link>
              <div className="flex items-center gap-4">
                {userId ? (
                  <div className="flex items-center gap-4">
                    <Link
                      href="/chatbot"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Dashboard
                    </Link>
                    <UserButton afterSignOutUrl="/" />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <SignInButton mode="modal">
                      <button className="text-gray-600 hover:text-gray-900 px-4 py-2 font-medium">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Get Started
                      </button>
                    </SignUpButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
                  <Image
                    src="/profilepic.jpg"
                    alt="Kethan VR"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="128px"
                    priority
                  />
                </div>
              </div>
              <h1 className="font-baloo-bhai text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Hey, I'm Kethan 👋
              </h1>
              <p className="text-xl sm:text-2xl text-blue-700 mb-4 font-semibold">
                AI developer, full-stack builder, and professional tinkerer
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                I love building things that are actually useful (and sometimes
                just for fun). If it involves GenAI, LLMs, or a cool new stack,
                I’m probably already experimenting with it. My goal? Ship
                real-world tech that helps people, not just another demo.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {socials.map(({ name, icon: Icon, url }) => (
                  <Link
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium transition"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-baloo-bhai text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              ✨ What I Do
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-base">
              <li className="flex gap-3 items-start">
                <span className="text-blue-600">🔬</span> Always poking at the
                future of AI & building GenAI apps that (hopefully) make life
                easier
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-600">💻</span> Full-stack dev:
                Next.js, Node, Tailwind, Supabase, and whatever else gets the
                job done
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-purple-600">🧠</span> LLMs in the wild:
                LangChain, Gemini, OpenAI, and a lot of prompt engineering
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-yellow-500">🧰</span> DevOps explorer
                (Docker, CI/CD, cloud stuff) — still learning, still breaking
                things
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-pink-500">🎙️</span> Sharing my dev
                journey, wins, and fails on the internet (YouTube, blog,
                Twitter/X)
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Stack Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-baloo-bhai text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              🧠 Technical Stack & Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stack.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                >
                  <div className="font-semibold text-blue-700 mb-1">
                    {item.label}
                  </div>
                  <div className="text-gray-800">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-baloo-bhai text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                🚀 Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Here’s what I’ve been building, breaking, and shipping lately:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`bg-gradient-to-r ${project.color} rounded-xl p-3`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          project.status === "Live"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                    >
                      View Project
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Currently Learning Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-baloo-bhai text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              📚 Currently Learning
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
              {learning.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-baloo-bhai text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              🧭 Career Path & Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-gray-100"
                >
                  <div className="font-semibold text-blue-700 mb-1">
                    {item.label}
                  </div>
                  <div className="text-gray-800">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-xl bg-gray-100 p-2">
                  <Image
                    src="https://s.tmimgcdn.com/scr/1200x750/352100/mindsol-logo-design-brain-ai-logo_352161-original.jpg"
                    alt="TherapEase Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-baloo-bhai text-lg font-bold text-gray-900">
                    TherapEase
                  </h3>
                  <p className="text-xs text-gray-500 -mt-1">
                    AI Mental Health Support
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                © 2025 TherapEase. Supporting your mental health journey with
                compassionate AI.
              </p>
              <p className="text-xs text-gray-400">
                “Forever learning & shipping real-world tech.”
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
