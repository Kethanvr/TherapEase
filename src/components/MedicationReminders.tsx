"use client";

import { useState } from "react";
import {
  Clock,
  Pill,
  Bell,
  CheckCircle,
  AlertCircle,
  Plus,
  Calendar,
} from "lucide-react";
import { medicationReminders } from "@/data/medication";

export default function MedicationReminders() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMedication, setNewMedication] = useState({
    name: "",
    dosage: "",
    frequency: "daily",
    time: "",
    notes: "",
  });

  const handleAddMedication = () => {
    if (!newMedication.name || !newMedication.dosage || !newMedication.time) {
      alert("Please fill in all required fields");
      return;
    }

    // In a real app, this would save to a database
    console.log("Adding medication:", newMedication);

    // Reset form
    setNewMedication({
      name: "",
      dosage: "",
      frequency: "daily",
      time: "",
      notes: "",
    });
    setShowAddForm(false);
    alert("Medication reminder added successfully!");
  };

  const markAsTaken = (medicationId: string) => {
    // In a real app, this would update the database
    console.log("Marking medication as taken:", medicationId);
    alert("Medication marked as taken!");
  };

  const getNextDueTime = (nextDue: string) => {
    const now = new Date();
    const dueDate = new Date(nextDue);
    const diffMs = dueDate.getTime() - now.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (diffMs < 0) {
      return "Overdue";
    } else if (diffHours === 0) {
      return `${diffMinutes}m`;
    } else if (diffHours < 24) {
      return `${diffHours}h ${diffMinutes}m`;
    } else {
      return dueDate.toLocaleDateString();
    }
  };

  const getUrgencyColor = (nextDue: string) => {
    const now = new Date();
    const dueDate = new Date(nextDue);
    const diffMs = dueDate.getTime() - now.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);

    if (diffMs < 0) {
      return "border-red-500 bg-red-50";
    } else if (diffHours <= 1) {
      return "border-orange-500 bg-orange-50";
    } else if (diffHours <= 4) {
      return "border-yellow-500 bg-yellow-50";
    } else {
      return "border-gray-200 bg-white";
    }
  };

  const getStatusIcon = (nextDue: string) => {
    const now = new Date();
    const dueDate = new Date(nextDue);
    const diffMs = dueDate.getTime() - now.getTime();

    if (diffMs < 0) {
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    } else {
      return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Medication Reminders
          </h2>
          <p className="text-gray-600">
            Stay on track with your medication schedule
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
          Add Medication
        </button>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Today&apos;s Schedule
        </h3>
        <div className="space-y-3">
          {medicationReminders.map((medication) => (
            <div
              key={medication.id}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${getUrgencyColor(
                medication.nextDue
              )}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: medication.color }}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {medication.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {medication.dosage}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    {getStatusIcon(medication.nextDue)}
                    <span>Due in {getNextDueTime(medication.nextDue)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => markAsTaken(medication.id)}
                    className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Mark Taken
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                    Skip
                  </button>
                </div>
              </div>
              {medication.notes && (
                <p className="text-sm text-gray-600 mt-2 ml-6">
                  {medication.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Medication List */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          All Medications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {medicationReminders.map((medication) => (
            <div
              key={medication.id}
              className="bg-white rounded-xl p-4 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: medication.color + "20" }}
                  >
                    <Pill
                      className="h-5 w-5"
                      style={{ color: medication.color }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {medication.name}
                    </h4>
                    <p className="text-sm text-gray-600">{medication.dosage}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    {medication.frequency} at {medication.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span>
                    Next: {new Date(medication.nextDue).toLocaleString()}
                  </span>
                </div>
              </div>

              {medication.notes && (
                <p className="text-sm text-gray-600 mt-3 p-2 bg-gray-50 rounded-lg">
                  {medication.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add Medication Form */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Add Medication
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medication Name *
                </label>
                <input
                  type="text"
                  value={newMedication.name}
                  onChange={(e) =>
                    setNewMedication({ ...newMedication, name: e.target.value })
                  }
                  placeholder="e.g., Vitamin D, Ibuprofen"
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dosage *
                </label>
                <input
                  type="text"
                  value={newMedication.dosage}
                  onChange={(e) =>
                    setNewMedication({
                      ...newMedication,
                      dosage: e.target.value,
                    })
                  }
                  placeholder="e.g., 500mg, 1 tablet"
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frequency
                </label>
                <select
                  value={newMedication.frequency}
                  onChange={(e) =>
                    setNewMedication({
                      ...newMedication,
                      frequency: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="daily">Daily</option>
                  <option value="twice-daily">Twice Daily</option>
                  <option value="three-times-daily">Three Times Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="as-needed">As Needed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time *
                </label>
                <input
                  type="time"
                  value={newMedication.time}
                  onChange={(e) =>
                    setNewMedication({ ...newMedication, time: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  value={newMedication.notes}
                  onChange={(e) =>
                    setNewMedication({
                      ...newMedication,
                      notes: e.target.value,
                    })
                  }
                  placeholder="e.g., Take with food, Before bed"
                  rows={3}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={handleAddMedication}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Add Medication
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          💡 Medication Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div>
            <h4 className="font-medium mb-2">Best Practices</h4>
            <ul className="space-y-1">
              <li>• Take medications at the same time each day</li>
              <li>• Use a pill organizer for multiple medications</li>
              <li>• Set phone alarms as backup reminders</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Important Notes</h4>
            <ul className="space-y-1">
              <li>• Never skip doses without consulting your doctor</li>
              <li>• Keep medications in their original containers</li>
              <li>• Check expiration dates regularly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
