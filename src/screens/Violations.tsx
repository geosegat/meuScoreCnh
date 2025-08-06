import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import SearchInput from '../components/SearchInput';
import StatusDropdown from '../components/StatusDropdown';
import AppIcons from '../components/AppIcons';
import FinesDetailsCard from '../components/FinesDetailsCard';
import PeriodFilterModal from '../components/PeriodFilterModal';
import { View } from 'react-native';
import finesData from '../data/finesData.json';
import { Fine } from '../types/fines';

const Violations = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('12months');
  const [isPeriodModalVisible, setIsPeriodModalVisible] = useState(false);
  
  const fines = finesData as Fine[];

  const filterByPeriod = (finesList: Fine[], period: string): Fine[] => {
    const currentDate = new Date();
    const periodDays = {
      '7days': 7,
      '1month': 30,
      '3months': 90,
      '6months': 180,
      '12months': 365,
    }[period] || 365;

    return finesList.filter(fine => {
      const fineDate = parseFineDate(fine.date);
      const daysDiff = Math.floor((currentDate.getTime() - fineDate.getTime()) / (1000 * 60 * 60 * 24));
      return daysDiff <= periodDays;
    });
  };

  const parseFineDate = (dateString: string): Date => {
    const [datePart] = dateString.split(' - ');
    const [day, month, year] = datePart.split('/');
    return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
  };

  const filterByStatus = (finesList: Fine[], status: string): Fine[] => {
    if (status === 'all') return finesList;
    return finesList.filter(fine => fine.status === status);
  };

  const filterBySearch = (finesList: Fine[], searchQuery: string): Fine[] => {
    if (!searchQuery.trim()) return finesList;
    
    const search = searchQuery.toLowerCase().trim();
    return finesList.filter(fine => 
      fine.type.toLowerCase().includes(search) ||
      (fine.location && fine.location.toLowerCase().includes(search)) ||
      (fine.licensePlate && fine.licensePlate.toLowerCase().includes(search)) ||
      (fine.id && fine.id.toLowerCase().includes(search))
    );
  };

  const getFilteredFines = (): Fine[] => {
    let filtered = fines;
    
    filtered = filterByPeriod(filtered, selectedPeriod);
    
    filtered = filterByStatus(filtered, selectedStatus);
    
    filtered = filterBySearch(filtered, searchText);
    
    return filtered;
  };

  const filteredFines = getFilteredFines();

  const handleFilterPress = () => {
    setIsPeriodModalVisible(true);
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <ScreenLayout >
      <SearchInput 
        placeholder="Buscar por tipo ou local..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <View style={styles.filterRow}>
         <StatusDropdown 
        placeholder="Todos os status"
        value={selectedStatus}
        onSelectionChange={setSelectedStatus}
      />
        <TouchableOpacity 
          style={styles.filterIcon}
          onPress={handleFilterPress}
          activeOpacity={0.7}
        >
          <AppIcons.Funnel size={18} color="black" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.finesContainer}>
        {filteredFines.map((fine, index) => (
          <FinesDetailsCard 
            key={fine.id || index}
            fine={fine}
            showId={true}
            showPoints={true}
            showLicensePlate={true} 
            showLocation={true} 
            style={index < filteredFines.length - 1 ? styles.fineWithMargin : undefined}
          />
        ))}
      </View>

      <PeriodFilterModal
        visible={isPeriodModalVisible}
        onClose={() => setIsPeriodModalVisible(false)}
        selectedPeriod={selectedPeriod}
        onPeriodChange={handlePeriodChange}
      />
    </ScreenLayout>
  );
};

export default Violations;

const styles = StyleSheet.create({
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  filterIcon: {
    backgroundColor: '#f3f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 4,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finesContainer: {
    marginTop: 8,
  },
  fineWithMargin: {
    marginBottom: 8,
  },
});
