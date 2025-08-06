import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import SearchInput from '../components/SearchInput';
import StatusDropdown from '../components/StatusDropdown';
import AppIcons from '../components/AppIcons';
import FinesDetailsCard from '../components/FinesDetailsCard';
import { View } from 'react-native';
import finesData from '../data/finesData.json';
import { Fine } from '../types/fines';

const Violations = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  const fines = finesData as Fine[];

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
        <View style={styles.filterIcon}>
          <AppIcons.Funnel size={18} color="black" />
        </View>
      </View>
      
      <View style={styles.finesContainer}>
        {fines.map((fine, index) => (
          <FinesDetailsCard 
            key={fine.id || index}
            fine={fine}
            showId={true}
            showPoints={true}
            showLicensePlate={true} 
            showLocation={true} 
            style={index < fines.length - 1 ? styles.fineWithMargin : undefined}
          />
        ))}
      </View>
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
