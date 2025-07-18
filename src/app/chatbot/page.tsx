"use client";

import { useState } from "react";
import { 
  MessageCircle, 
  TrendingUp, 
  Calendar, 
  Pill, 
  Headphones, 
  Home,
  Brain
} from "lucide-react";
import Link from "next/link";

// Components
import ChatInterface from "@/components/ChatInterface";
import MoodTracker from "@/components/MoodTracker";
import RelaxationExercises from "@/components/RelaxationExercises";
import AppointmentBooking from "@/components/AppointmentBooking";
import MedicationReminders from "@/components/MedicationReminders";

type ActiveTab = 'chat' | 'mood' | 'relaxation' | 'appointments' | 'medication';

export default function ChatbotPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('chat');

  const navigationItems = [
    { id: 'chat', label: 'AI Chat', icon: MessageCircle },
    { id: 'mood', label: 'Mood Tracker', icon: TrendingUp },
    { id: 'relaxation', label: 'Relaxation', icon: Headphones },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'medication', label: 'Medication', icon: Pill },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return <ChatInterface />;
      case 'mood':
        return <MoodTracker />;
      case 'relaxation':
        return <RelaxationExercises />;
      case 'appointments':
        return <AppointmentBooking />;
      case 'medication':
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
            <Link href="/" className="flex items-center gap-3 text-xl font-bold text-gray-900">
              <div className="rounded-xl bg-blue-600 p-2">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="font-baloo-bhai text-lg font-bold text-gray-900">TherapEase</h1>
                <p className="text-xs text-gray-500 -mt-1">AI Mental Health Support</p>
              </div>
            </Link>
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
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50'
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
            <h1 className="text-2xl font-bold text-gray-900">
              {navigationItems.find(item => item.id === activeTab)?.label}
            </h1>
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
