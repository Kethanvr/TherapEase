# TherapEase Setup Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Gemini API Key
1. Get your Gemini API key from [Google AI Studio](https://ai.google.dev/gemini-api/docs)
2. Create a `.env.local` file in the root directory
3. Add your API key:
```
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧠 Features

- **AI Chatbot**: Powered by Google's Gemini 2.5 Flash Lite with mental health support prompts
- **Mood Tracking**: Visual charts and mood logging with dummy data
- **Relaxation Exercises**: Guided breathing, meditation, and wellness activities
- **Appointment Booking**: Therapist profiles and appointment scheduling (demo)
- **Medication Reminders**: Medication tracking and reminder system (demo)

## 🎨 Design

**TherapEase** features a clean, professional design with:
- **Light theme** with minimal colors
- **Google Poppins** font for body text
- **Baloo Bhai 2** font for headings and branding
- **Blue primary color** (#2563EB) for consistency
- **Subtle shadows** and clean borders
- **Responsive design** for mobile and desktop

## 🔧 Tech Stack

- **Framework**: Next.js 15 with App Router
- **AI Model**: Google Gemini 2.5 Flash Lite Preview
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Poppins, Baloo Bhai 2)
- **Charts**: Recharts
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 📝 Notes

- This is a demonstration app with dummy data
- No real database or authentication
- Always consult healthcare professionals for medical advice
- The AI provides supportive responses but is not a replacement for professional help
- Uses the latest Gemini 2.5 Flash Lite model for improved performance and responses
