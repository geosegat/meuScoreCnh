import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../types/navigation';
import ScreenLayout from '../components/ScreenLayout';
import SearchInput from '../components/SearchInput';
import StatusDropdown from '../components/StatusDropdown';
import AppIcons from '../components/AppIcons';
import FinesDetailsCard from '../components/FinesDetailsCard';
import PeriodFilterModal from '../components/PeriodFilterModal';
import { View } from 'react-native';
import finesData from '../data/finesData.json';
import { Fine } from '../types/fines';
import { getFilteredFines } from '../utils/filterUtils';

const Violations = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [searchText, setSearchText] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('12months');
  const [isPeriodModalVisible, setIsPeriodModalVisible] = useState(false);
  
  const fines = finesData as Fine[];

  const filteredFines = getFilteredFines(fines, selectedPeriod, selectedStatus, searchText);

  const handleFilterPress = () => {
    setIsPeriodModalVisible(true);
  };

  const handleFinePress = (fine: Fine) => {
    navigation.navigate('ViolationDetails', { fine });
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
            onPress={() => handleFinePress(fine)}
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
