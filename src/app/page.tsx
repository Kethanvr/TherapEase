import Link from "next/link";
import {
  Brain,
  Heart,
  MessageCircle,
  TrendingUp,
  Calendar,
  Pill,
  Headphones,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-600 p-2">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="font-baloo-bhai text-xl font-bold text-gray-900">
                  TherapEase
                </h1>
                <p className="text-xs text-gray-500 -mt-1">
                  AI Mental Health Support
                </p>
              </div>
            </div>
            <Link
              href="/chatbot"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="rounded-2xl bg-blue-50 p-6">
                <Brain className="h-16 w-16 text-blue-600" />
              </div>
            </div>
            <h1 className="font-baloo-bhai text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              TherapEase
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium">
              AI chatbot for mental health support
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get personalized mental health support, track your mood, and
              access wellness resources with our empathetic AI companion
              designed to help you thrive.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/chatbot"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Start Chatting
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-baloo-bhai text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need for mental wellness
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform combines AI-powered support with
              practical wellness tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Chatbot */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-50 rounded-xl p-3 w-fit mb-6">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Chatbot
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chat with our empathetic AI assistant trained to provide mental
                health support, coping strategies, and emotional guidance
                whenever you need it.
              </p>
            </div>

            {/* Mood Tracking */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-green-50 rounded-xl p-3 w-fit mb-6">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mood Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your emotional patterns with visual charts and insights.
                Track your progress and identify trends in your mental health
                journey.
              </p>
            </div>

            {/* Emotion Detection */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-purple-50 rounded-xl p-3 w-fit mb-6">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Emotion Detection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced sentiment analysis helps understand your emotional
                state and provides personalized recommendations based on your
                current mood.
              </p>
            </div>

            {/* Relaxation Exercises */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-teal-50 rounded-xl p-3 w-fit mb-6">
                <Headphones className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Relaxation Exercises
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access guided breathing exercises, meditation sessions, and
                calming sounds to help you relax and manage stress effectively.
              </p>
            </div>

            {/* Appointment Booking */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-orange-50 rounded-xl p-3 w-fit mb-6">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Appointment Booking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Schedule sessions with qualified therapists and mental health
                professionals. Find the right support for your specific needs.
              </p>
            </div>

            {/* Medication Reminders */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-pink-50 rounded-xl p-3 w-fit mb-6">
                <Pill className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Medication Reminders
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Never miss your medication with smart reminders and tracking.
                Stay consistent with your treatment plan and wellness routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-baloo-bhai text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why choose TherapEase?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      24/7 Availability
                    </h3>
                    <p className="text-gray-600">
                      Get support whenever you need it, day or night
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Privacy First
                    </h3>
                    <p className="text-gray-600">
                      Your conversations are private and secure
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Evidence-Based
                    </h3>
                    <p className="text-gray-600">
                      Built on proven mental health practices and research
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Personalized Support
                    </h3>
                    <p className="text-gray-600">
                      Tailored recommendations based on your unique needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-6">
                  <Brain className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="font-baloo-bhai text-2xl font-bold text-gray-900 mb-4">
                  Start your wellness journey today
                </h3>
                <p className="text-gray-600 mb-6">
                  Take the first step towards better mental health with
                  TherapEase
                </p>
                <Link
                  href="/chatbot"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center gap-2"
                >
                  Begin Chat
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-xl bg-blue-600 p-2">
                <Brain className="h-6 w-6 text-white" />
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
              © 2024 TherapEase. Supporting your mental health journey with
              compassionate AI.
            </p>
            <p className="text-xs text-gray-400">
              This is a demonstration app. Always consult with qualified
              healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
