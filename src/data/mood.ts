export interface MoodEntry {
  id: string;
  date: string;
  mood: 'very-happy' | 'happy' | 'neutral' | 'sad' | 'very-sad';
  notes?: string;
  energy: number; // 1-10
  anxiety: number; // 1-10
  sleep: number; // 1-10
}

export interface MoodStats {
  averageMood: number;
  moodTrend: 'improving' | 'stable' | 'declining';
  streakDays: number;
}

export const moodEntries: MoodEntry[] = [
  {
    id: '1',
    date: '2024-01-15',
    mood: 'happy',
    notes: 'Had a great day at work, feeling productive',
    energy: 8,
    anxiety: 3,
    sleep: 7
  },
  {
    id: '2',
    date: '2024-01-14',
    mood: 'neutral',
    notes: 'Regular day, nothing special',
    energy: 6,
    anxiety: 5,
    sleep: 6
  },
  {
    id: '3',
    date: '2024-01-13',
    mood: 'sad',
    notes: 'Feeling overwhelmed with responsibilities',
    energy: 4,
    anxiety: 8,
    sleep: 4
  },
  {
    id: '4',
    date: '2024-01-12',
    mood: 'very-happy',
    notes: 'Spent time with friends, feeling grateful',
    energy: 9,
    anxiety: 2,
    sleep: 8
  },
  {
    id: '5',
    date: '2024-01-11',
    mood: 'happy',
    notes: 'Completed a challenging project',
    energy: 7,
    anxiety: 4,
    sleep: 7
  },
  {
    id: '6',
    date: '2024-01-10',
    mood: 'neutral',
    notes: 'Quiet day, did some reading',
    energy: 5,
    anxiety: 4,
    sleep: 6
  },
  {
    id: '7',
    date: '2024-01-09',
    mood: 'happy',
    notes: 'Morning workout felt great',
    energy: 8,
    anxiety: 3,
    sleep: 8
  }
];

export const moodStats: MoodStats = {
  averageMood: 6.5,
  moodTrend: 'improving',
  streakDays: 3
};

export const moodEmojis = {
  'very-happy': '😄',
  'happy': '😊',
  'neutral': '😐',
  'sad': '😔',
  'very-sad': '😢'
};

export const moodColors = {
  'very-happy': '#10B981',
  'happy': '#34D399',
  'neutral': '#6B7280',
  'sad': '#F59E0B',
  'very-sad': '#EF4444'
}; 