"use client";

import { useState, useEffect } from "react";
import {
  MessageCircle,
  TrendingUp,
  Calendar,
  Pill,
  Headphones,
  Home,
  Brain,
} from "lucide-react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Components
import ChatInterface from "@/components/ChatInterface";
import MoodTracker from "@/components/MoodTracker";
import RelaxationExercises from "@/components/RelaxationExercises";
import AppointmentBooking from "@/components/AppointmentBooking";
import MedicationReminders from "@/components/MedicationReminders";

type ActiveTab = "chat" | "mood" | "relaxation" | "appointments" | "medication";

export default function ChatbotPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("chat");
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const navigationItems = [
    { id: "chat", label: "AI Chat", icon: MessageCircle },
    { id: "mood", label: "Mood Tracker", icon: TrendingUp },
    { id: "relaxation", label: "Relaxation", icon: Headphones },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "medication", label: "Medication", icon: Pill },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "chat":
        return <ChatInterface />;
      case "mood":
        return <MoodTracker />;
      case "relaxation":
        return <RelaxationExercises />;
      case "appointments":
        return <AppointmentBooking />;
      case "medication":
        return <MedicationReminders />;
      default:
        return <ChatInterface />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-bold text-gray-900"
            >
              <div className="rounded-xl bg-gray-50 p-2">
                <img
                  src="https://s.tmimgcdn.com/scr/1200x750/352100/mindsol-logo-design-brain-ai-logo_352161-original.jpg"
                  alt="TherapEase Logo"
                  className="h-8 w-8 object-contain rounded-lg"
                />
              </div>
              <div>
                <h1 className="font-baloo-bhai text-lg font-bold text-gray-900">
                  TherapEase
                </h1>
                <p className="text-xs text-gray-500 -mt-1">
                  AI Mental Health Support
                </p>
              </div>
            </Link>
          </div>

          {/* User Info */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <UserButton afterSignOutUrl="/" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {user?.firstName || user?.username || "User"}
                </p>
                <p className="text-xs text-gray-500">Welcome back!</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as ActiveTab)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === item.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                {navigationItems.find((item) => item.id === activeTab)?.label}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">
                  Hello, {user?.firstName || user?.username || "User"}!
                </span>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-auto p-6 bg-gray-50">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}
