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
import EmptyState from '../components/EmptyState';
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

  if (fines.length === 0) {
    return (
      <ScreenLayout >
        <EmptyState 
          title="Parabéns!"
          message="Você não possui infrações registradas. Continue dirigindo com responsabilidade!"
          icon="Violations"
        />
      </ScreenLayout>
    );
  }

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

  const getEmptyStateTitle = (): string => {
    if (searchText) {
      return "Nenhum resultado encontrado";
    }
    if (selectedStatus !== 'all') {
      return "Nenhuma infração com este status";
    }
    if (selectedPeriod !== '12months') {
      return "Nenhuma infração no período";
    }
    return "Parabéns!";
  };

  const getEmptyStateMessage = (): string => {
    if (searchText) {
      return `Não encontramos infrações que correspondam à busca "${searchText}". Tente outros termos.`;
    }
    if (selectedStatus !== 'all') {
      return "Tente selecionar um status diferente ou 'Todos os status'.";
    }
    if (selectedPeriod !== '12months') {
      return "Não há infrações registradas neste período. Tente selecionar um período maior.";
    }
    return "Você não possui infrações registradas. Continue dirigindo com responsabilidade!";
  };

  return (
    <ScreenLayout hasTabBar={true}>
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
        {filteredFines.length === 0 ? (
          <EmptyState 
            title={getEmptyStateTitle()}
            message={getEmptyStateMessage()}
            icon="Violations"
          />
        ) : (
          filteredFines.map((fine, index) => (
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
          ))
        )}
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
