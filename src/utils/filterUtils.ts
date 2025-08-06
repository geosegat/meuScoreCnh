
import { Fine } from '../types/fines';
import { parseFineDate, getDaysDifference } from './dateUtils';
import { FILTER_PERIODS } from './constants';


const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD') 
    .replace(/[\u0300-\u036f]/g, '') 
    .replace(/[^\w\s]/g, ' ') 
    .replace(/\s+/g, ' ') 
    .trim();
};

export const filterByPeriod = (finesList: Fine[], period: string): Fine[] => {
  const currentDate = new Date();
  const periodDays = FILTER_PERIODS[period as keyof typeof FILTER_PERIODS]?.days || 365;

  return finesList.filter(fine => {
    const fineDate = parseFineDate(fine.date);
    const daysDiff = getDaysDifference(currentDate, fineDate);
    return daysDiff <= periodDays;
  });
};

export const filterByStatus = (finesList: Fine[], status: string): Fine[] => {
  if (status === 'all') return finesList;
  return finesList.filter(fine => fine.status === status);
};

export const filterBySearch = (finesList: Fine[], searchQuery: string): Fine[] => {
  if (!searchQuery.trim()) return finesList;
  
  const normalizedSearch = normalizeText(searchQuery);
  
  return finesList.filter(fine => {
    const normalizedType = normalizeText(fine.type);
    const normalizedLocation = fine.location ? normalizeText(fine.location) : '';
    const normalizedLicensePlate = fine.licensePlate ? normalizeText(fine.licensePlate) : '';
    const normalizedId = fine.id ? normalizeText(fine.id) : '';
    const normalizedDescription = fine.description ? normalizeText(fine.description) : '';
    
    return normalizedType.includes(normalizedSearch) ||
           normalizedLocation.includes(normalizedSearch) ||
           normalizedLicensePlate.includes(normalizedSearch) ||
           normalizedId.includes(normalizedSearch) ||
           normalizedDescription.includes(normalizedSearch);
  });
};

export const getFilteredFines = (
  fines: Fine[], 
  period: string, 
  status: string, 
  searchText: string
): Fine[] => {
  let filtered = fines;
  
  filtered = filterByPeriod(filtered, period);
  filtered = filterByStatus(filtered, status);
  filtered = filterBySearch(filtered, searchText);
  
  return filtered;
};
