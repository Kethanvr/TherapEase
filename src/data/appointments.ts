export interface Appointment {
  id: string;
  therapistName: string;
  date: string;
  time: string;
  type: "therapy" | "psychiatry" | "counseling" | "group";
  status: "scheduled" | "completed" | "cancelled";
  notes?: string;
}

export interface TherapistProfile {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  availability: string[];
  image?: string;
}

export const upcomingAppointments: Appointment[] = [
  {
    id: "1",
    therapistName: "Dr. Sarah Johnson",
    date: "2024-01-18",
    time: "14:00",
    type: "therapy",
    status: "scheduled",
    notes: "Regular session - discuss anxiety management",
  },
  {
    id: "2",
    therapistName: "Dr. Michael Chen",
    date: "2024-01-22",
    time: "10:30",
    type: "psychiatry",
    status: "scheduled",
    notes: "Medication review",
  },
  {
    id: "3",
    therapistName: "Lisa Rodriguez, LCSW",
    date: "2024-01-25",
    time: "16:00",
    type: "counseling",
    status: "scheduled",
    notes: "Family counseling session",
  },
];

export const therapistProfiles: TherapistProfile[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialization: "Anxiety & Depression",
    experience: "12 years",
    rating: 4.9,
    availability: ["Monday", "Wednesday", "Friday"],
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialization: "Psychiatric Medicine",
    experience: "15 years",
    rating: 4.8,
    availability: ["Tuesday", "Thursday", "Saturday"],
  },
  {
    id: "3",
    name: "Lisa Rodriguez, LCSW",
    specialization: "Family & Couples Therapy",
    experience: "8 years",
    rating: 4.7,
    availability: ["Monday", "Tuesday", "Thursday", "Friday"],
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialization: "Trauma & PTSD",
    experience: "10 years",
    rating: 4.9,
    availability: ["Wednesday", "Friday", "Saturday"],
  },
];
