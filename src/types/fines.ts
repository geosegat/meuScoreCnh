export interface Fine {
  id?: string;
  type: string;
  date: string;
  location?: string;
  licensePlate?: string;
  amount: string;
  points?: number;
  status: 'pending' | 'paid' | 'overdue';
  dueDate?: string;
  description?: string;
  article?: string;
  speedLimit?: number;
  recordedSpeed?: number;
  excessSpeed?: number;
  excessPercentage?: number;
  officer?: string;
  equipment?: string;
}

export interface FinesDetailsCardProps {
  fine: Fine;
  showId?: boolean;
  showPoints?: boolean;
  showLicensePlate?: boolean;
  showLocation?: boolean;
  style?: any;
  onPress?: () => void;
}
