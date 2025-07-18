export interface RelaxationExercise {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'breathing' | 'meditation' | 'sounds' | 'movement';
  instructions: string[];
}

export const relaxationExercises: RelaxationExercise[] = [
  {
    id: '1',
    title: '4-7-8 Breathing',
    description: 'A simple breathing technique to reduce anxiety and promote relaxation',
    duration: '5 minutes',
    type: 'breathing',
    instructions: [
      'Sit comfortably with your back straight',
      'Exhale completely through your mouth',
      'Inhale through your nose for 4 counts',
      'Hold your breath for 7 counts',
      'Exhale through your mouth for 8 counts',
      'Repeat 3-4 times'
    ]
  },
  {
    id: '2',
    title: 'Body Scan Meditation',
    description: 'Progressive relaxation focusing on different parts of your body',
    duration: '10 minutes',
    type: 'meditation',
    instructions: [
      'Lie down comfortably',
      'Close your eyes and take deep breaths',
      'Start from your toes and work upward',
      'Notice tension in each body part',
      'Consciously relax each muscle group',
      'End with full body awareness'
    ]
  },
  {
    id: '3',
    title: 'Nature Sounds',
    description: 'Calming sounds to help you unwind and focus',
    duration: '15 minutes',
    type: 'sounds',
    instructions: [
      'Find a quiet, comfortable space',
      'Put on headphones if available',
      'Close your eyes and listen',
      'Focus on the natural rhythms',
      'Let your mind wander peacefully',
      'Return attention to sounds when distracted'
    ]
  },
  {
    id: '4',
    title: 'Gentle Stretching',
    description: 'Light movement to release physical tension',
    duration: '8 minutes',
    type: 'movement',
    instructions: [
      'Stand or sit comfortably',
      'Roll your shoulders backward 5 times',
      'Gently turn your head side to side',
      'Stretch your arms above your head',
      'Take deep breaths with each movement',
      'Hold each stretch for 15-30 seconds'
    ]
  }
]; 