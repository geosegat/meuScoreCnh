export const FILTER_PERIODS = {
  '7days': { label: '7 dias', days: 7 },
  '1month': { label: '1 mês', days: 30 },
  '3months': { label: '3 meses', days: 90 },
  '6months': { label: '6 meses', days: 180 },
  '12months': { label: '12 meses', days: 365 },
} as const;

export const STATUS_OPTIONS = [
  { label: 'Todos os status', value: 'all' },
  { label: 'Pendente', value: 'pending' },
  { label: 'Paga', value: 'paid' },
  { label: 'Vencida', value: 'overdue' },
] as const;

export const VIOLATION_ARTICLES = {
  SPEEDING: 'Art. 218, II do CTB',
  PARKING: 'Art. 181, I do CTB',
  RED_LIGHT: 'Art. 208 do CTB',
  PHONE: 'Art. 252, VII do CTB',
  SEATBELT: 'Art. 167 do CTB',
} as const;
