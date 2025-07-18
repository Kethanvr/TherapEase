export interface MedicationReminder {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  nextDue: string;
  color: string;
  notes?: string;
}

export const medicationReminders: MedicationReminder[] = [
  {
    id: '1',
    name: 'Vitamin D',
    dosage: '1000 IU',
    frequency: 'Daily',
    time: '08:00',
    nextDue: '2024-01-16T08:00:00',
    color: '#8B5CF6',
    notes: 'Take with breakfast'
  },
  {
    id: '2',
    name: 'Omega-3',
    dosage: '1000mg',
    frequency: 'Twice daily',
    time: '08:00, 20:00',
    nextDue: '2024-01-16T08:00:00',
    color: '#3B82F6',
    notes: 'Take with meals'
  },
  {
    id: '3',
    name: 'Magnesium',
    dosage: '400mg',
    frequency: 'Daily',
    time: '21:00',
    nextDue: '2024-01-16T21:00:00',
    color: '#10B981',
    notes: 'Take before bed'
  },
  {
    id: '4',
    name: 'Melatonin',
    dosage: '3mg',
    frequency: 'As needed',
    time: '22:00',
    nextDue: '2024-01-16T22:00:00',
    color: '#F59E0B',
    notes: 'Only when having trouble sleeping'
  }
]; 