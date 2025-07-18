# 🧠 AI Chatbot for Mental Health Support

A smart and empathetic AI-powered chatbot designed to provide **mental health support** and **wellness tracking**. It helps users manage their emotions, connect with professionals, and stay consistent with self-care routines through intelligent assistance.

---

## 🚀 Features Overview

* 🧑‍⚕️ **AI Chatbot**: Acts as the central virtual assistant for mental health queries and conversation.
* 😔 **Emotion Detection**: Detect user emotion through text tone and sentiment.
* 📈 **Mood Tracking**: Show mood trend using static/dummy visual graphs.
* 🗣️ **Sentiment Analysis**: Analyze past conversations and messages for mood history.
* 🧘 **Relaxation Exercises**: Display simple cards for breathing, meditation, or calming sounds.
* 🗓️ **Appointment Booking**: Dummy form to simulate booking therapist sessions.
* 💊 **Medication Reminders**: Static cards showing upcoming reminders.

---

## 🧪 Tech Stack

* **Framework**: Next.js (App Router) + TypeScript
* **Styling**: Tailwind CSS v3 only (no external component library CSS overrides)
* **UI Kit**: ShadCN UI (using Tailwind base), Radix UI, Lucide Icons

---

## 🧱 Architecture & Implementation Plan

This project does **not** require any real backend. No auth, no database. Everything is built using dummy data. Here’s a step-by-step breakdown:

### 1. **Landing Page (****`/`****)**

* Responsive, scroll-based layout
* Sections: Hero ➝ About ➝ Features ➝ Call-to-action
* Use `@/components/ui/card.tsx` from ShadCN to showcase each feature
* Tailwind `bg-gradient-to-*` and soft shadows to set tone

### 2. **Features Page (****`/chatbot`****)**

* Layout: Sidebar (static nav) + Main content
* Contains:

  * **Chatbot Box** (dumb UI, no real NLP)
  * **Mood Tracker**: Line chart or emojis on a calendar
  * **Relaxation Cards**: Pre-defined list using ShadCN cards
  * **Appointment Booking**: Basic form (name, date, concern)
  * **Medication Section**: Display static medicine cards with time

### 3. **Routing**

* Use Next.js `app/` folder-based routing system
* Include Tailwind layout wrappers and containers (`max-w`, `mx-auto`, etc.)

### 4. **Data Handling**

* Use `data.ts` files with arrays of dummy objects
* Example: `reminders.ts`, `moodLogs.ts`, `relaxation.ts`
* No state management needed beyond `useState` and `useEffect`

### 5. **Styling Guidelines**

* Tailwind v3 only
* Mobile-first responsiveness
* Consistent padding, rounded corners (e.g., `rounded-2xl`), and drop shadows
* Dark mode optional but preferred

---

## ✅ Agent Instructions

This is a front-end only UI prototype.

* Focus on structure, layout, dummy flow
* Do **not** build real chatbot logic or connect APIs
* Keep code clean, modular, and reusable
* Use modern Next.js 13+ features (app router, `@/components`, etc.)

---

##
