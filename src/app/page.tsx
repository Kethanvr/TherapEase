import Link from "next/link";
import { Brain, Heart, MessageCircle, TrendingUp, Calendar, Pill, Headphones } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-8">
            <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-4">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your AI Mental Health Companion
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Get personalized mental health support, track your mood, and access wellness resources 
            with our empathetic AI chatbot designed to help you thrive.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/chatbot"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Start Chatting
            </Link>
            <Link
              href="#features"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for mental wellness
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our comprehensive platform combines AI-powered support with practical wellness tools
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* AI Chatbot */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-3">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">AI Chatbot</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Chat with our empathetic AI assistant trained to provide mental health support, 
                coping strategies, and emotional guidance whenever you need it.
              </p>
            </div>

            {/* Mood Tracking */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 p-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Mood Tracking</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Monitor your emotional patterns with visual charts and insights. 
                Track your progress and identify trends in your mental health journey.
              </p>
            </div>

            {/* Emotion Detection */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 p-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Emotion Detection</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Advanced sentiment analysis helps understand your emotional state 
                and provides personalized recommendations based on your current mood.
              </p>
            </div>

            {/* Relaxation Exercises */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg bg-gradient-to-r from-green-500 to-green-600 p-3">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Relaxation Exercises</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Access guided breathing exercises, meditation sessions, and calming sounds 
                to help you relax and manage stress effectively.
              </p>
            </div>

            {/* Appointment Booking */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 p-3">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Appointment Booking</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Schedule sessions with qualified therapists and mental health professionals. 
                Find the right support for your specific needs.
              </p>
            </div>

            {/* Medication Reminders */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 p-3">
                  <Pill className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Medication Reminders</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Never miss your medication with smart reminders and tracking. 
                Stay consistent with your treatment plan and wellness routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl text-center px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to start your wellness journey?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Take the first step towards better mental health with our AI-powered support system. 
            Your journey to wellness starts with a single conversation.
          </p>
          <div className="mt-8">
            <Link
              href="/chatbot"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 MindfulAI. Supporting your mental health journey with compassionate AI.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              This is a demonstration app. Always consult with qualified healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
