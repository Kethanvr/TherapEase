"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Calendar, TrendingUp, Smile, Meh, Frown, Plus } from "lucide-react";
import { moodEntries, moodStats, moodEmojis, moodColors } from "@/data/mood";

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [notes, setNotes] = useState("");
  const [showAddMood, setShowAddMood] = useState(false);

  // Transform mood data for charts
  const chartData = moodEntries
    .map((entry) => ({
      date: new Date(entry.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      mood:
        entry.mood === "very-happy"
          ? 5
          : entry.mood === "happy"
          ? 4
          : entry.mood === "neutral"
          ? 3
          : entry.mood === "sad"
          ? 2
          : 1,
      energy: entry.energy,
      anxiety: 10 - entry.anxiety, // Invert anxiety so higher is better
      sleep: entry.sleep,
      moodColor: moodColors[entry.mood],
    }))
    .reverse();

  const handleAddMood = () => {
    if (!selectedMood) return;

    // In a real app, this would save to a database
    console.log("Adding mood:", {
      mood: selectedMood,
      notes,
      date: new Date(),
    });
    setSelectedMood("");
    setNotes("");
    setShowAddMood(false);
  };

  const moodOptions = [
    { value: "very-happy", label: "Very Happy", emoji: "😄", color: "#10B981" },
    { value: "happy", label: "Happy", emoji: "😊", color: "#34D399" },
    { value: "neutral", label: "Neutral", emoji: "😐", color: "#6B7280" },
    { value: "sad", label: "Sad", emoji: "😔", color: "#F59E0B" },
    { value: "very-sad", label: "Very Sad", emoji: "😢", color: "#EF4444" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Average Mood</h3>
          </div>
          <p className="text-2xl font-bold text-blue-600">
            {moodStats.averageMood}/10
          </p>
          <p className="text-sm text-gray-600">Last 7 days</p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Streak</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">
            {moodStats.streakDays} days
          </p>
          <p className="text-sm text-gray-600">Keep logging!</p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Smile className="h-5 w-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Trend</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600 capitalize">
            {moodStats.moodTrend}
          </p>
          <p className="text-sm text-gray-600">This week</p>
        </div>
      </div>

      {/* Add Mood Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowAddMood(!showAddMood)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
          Log Mood
        </button>
      </div>

      {/* Add Mood Form */}
      {showAddMood && (
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            How are you feeling today?
          </h3>

          <div className="grid grid-cols-5 gap-3 mb-4">
            {moodOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedMood(option.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedMood === option.value
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="text-3xl mb-2">{option.emoji}</div>
                <div className="text-xs font-medium text-gray-700">
                  {option.label}
                </div>
              </button>
            ))}
          </div>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any notes about your mood today? (optional)"
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
          />

          <div className="flex gap-2 mt-4">
            <button
              onClick={handleAddMood}
              disabled={!selectedMood}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Mood
            </button>
            <button
              onClick={() => setShowAddMood(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Mood Chart */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Mood Trends
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="date" stroke="#6B7280" />
              <YAxis domain={[1, 5]} stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="mood"
                stroke="#8B5CF6"
                strokeWidth={3}
                dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Wellness Metrics */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Wellness Metrics
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="date" stroke="#6B7280" />
              <YAxis domain={[0, 10]} stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="energy" fill="#3B82F6" name="Energy" />
              <Bar dataKey="anxiety" fill="#10B981" name="Calm" />
              <Bar dataKey="sleep" fill="#8B5CF6" name="Sleep" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Entries */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Entries
        </h3>
        <div className="space-y-3">
          {moodEntries.slice(0, 5).map((entry) => (
            <div
              key={entry.id}
              className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100"
            >
              <div className="text-2xl">{moodEmojis[entry.mood]}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900 capitalize">
                    {entry.mood.replace("-", " ")}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(entry.date).toLocaleDateString()}
                  </span>
                </div>
                {entry.notes && (
                  <p className="text-sm text-gray-600">{entry.notes}</p>
                )}
              </div>
              <div className="flex gap-2 text-xs text-gray-500">
                <span>Energy: {entry.energy}/10</span>
                <span>Sleep: {entry.sleep}/10</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
