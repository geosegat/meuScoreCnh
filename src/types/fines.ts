export interface Fine {
  id?: string;
  type: string;
  date: string;
  location?: string;
  licensePlate?: string;
  amount: string;
  points?: number;
  status: 'pending' | 'paid' | 'overdue';
}

export interface FinesDetailsCardProps {
  fine: Fine;
  showId?: boolean;
  showPoints?: boolean;
  showLicensePlate?: boolean;
  showLocation?: boolean;
  style?: any;
}
