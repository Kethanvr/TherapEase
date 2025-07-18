"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Star,
  User,
  Phone,
  Mail,
  MapPin,
  Plus,
} from "lucide-react";
import { upcomingAppointments, therapistProfiles } from "@/data/appointments";

export default function AppointmentBooking() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState<string>("");
  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
    type: "therapy",
    concern: "",
    notes: "",
  });

  const handleBookAppointment = () => {
    if (!selectedTherapist || !appointmentData.date || !appointmentData.time) {
      alert("Please fill in all required fields");
      return;
    }

    // In a real app, this would save to a database
    console.log("Booking appointment:", {
      therapist: selectedTherapist,
      ...appointmentData,
    });

    // Reset form
    setAppointmentData({
      date: "",
      time: "",
      type: "therapy",
      concern: "",
      notes: "",
    });
    setSelectedTherapist("");
    setShowBookingForm(false);
    alert("Appointment booked successfully!");
  };

  const getAppointmentTypeColor = (type: string) => {
    switch (type) {
      case "therapy":
        return "bg-blue-100 text-blue-800";
      case "psychiatry":
        return "bg-purple-100 text-purple-800";
      case "counseling":
        return "bg-green-100 text-green-800";
      case "group":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
          <p className="text-gray-600">
            Manage your therapy sessions and bookings
          </p>
        </div>
        <button
          onClick={() => setShowBookingForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
          Book Appointment
        </button>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Upcoming Appointments
        </h3>
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-xl p-4 border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {appointment.therapistName}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getAppointmentTypeColor(
                        appointment.type
                      )}`}
                    >
                      {appointment.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(appointment.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {appointment.time}
                    </div>
                  </div>
                  {appointment.notes && (
                    <p className="text-sm text-gray-600">{appointment.notes}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    Reschedule
                  </button>
                  <button className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Therapist Profiles */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Our Therapists
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {therapistProfiles.map((therapist) => (
            <div
              key={therapist.id}
              className="bg-white rounded-xl p-4 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {therapist.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {therapist.specialization}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                    <span>{therapist.experience} experience</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{therapist.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {therapist.availability.map((day) => (
                      <span
                        key={day}
                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedTherapist(therapist.id);
                      setShowBookingForm(true);
                    }}
                    className="w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Book Appointment
            </h3>

            <div className="space-y-4">
              {/* Therapist Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Therapist *
                </label>
                <select
                  value={selectedTherapist}
                  onChange={(e) => setSelectedTherapist(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Choose a therapist...</option>
                  {therapistProfiles.map((therapist) => (
                    <option key={therapist.id} value={therapist.id}>
                      {therapist.name} - {therapist.specialization}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={appointmentData.date}
                  onChange={(e) =>
                    setAppointmentData({
                      ...appointmentData,
                      date: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  value={appointmentData.time}
                  onChange={(e) =>
                    setAppointmentData({
                      ...appointmentData,
                      time: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select time...</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>

              {/* Session Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Type
                </label>
                <select
                  value={appointmentData.type}
                  onChange={(e) =>
                    setAppointmentData({
                      ...appointmentData,
                      type: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="therapy">Individual Therapy</option>
                  <option value="counseling">Counseling</option>
                  <option value="psychiatry">Psychiatry</option>
                  <option value="group">Group Session</option>
                </select>
              </div>

              {/* Main Concern */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Concern/Focus
                </label>
                <input
                  type="text"
                  value={appointmentData.concern}
                  onChange={(e) =>
                    setAppointmentData({
                      ...appointmentData,
                      concern: e.target.value,
                    })
                  }
                  placeholder="e.g., anxiety, depression, relationship issues"
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  value={appointmentData.notes}
                  onChange={(e) =>
                    setAppointmentData({
                      ...appointmentData,
                      notes: e.target.value,
                    })
                  }
                  placeholder="Any additional information or special requests..."
                  rows={3}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={handleBookAppointment}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Book Appointment
              </button>
              <button
                onClick={() => setShowBookingForm(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-red-900 mb-2">
          Crisis Support
        </h3>
        <p className="text-sm text-red-800 mb-4">
          If you&apos;re experiencing a mental health crisis or having thoughts
          of self-harm, please seek immediate help:
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-red-600" />
            <span className="font-medium">Crisis Hotline: 988</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-red-600" />
            <span className="font-medium">Emergency: 911</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-red-600" />
            <span className="font-medium">
              Crisis Text Line: Text HOME to 741741
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
