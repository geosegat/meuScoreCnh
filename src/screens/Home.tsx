import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import Button from '../components/Button';
import LicensePointsCard from '../components/LicensePointsCard';
import FinesSummaryCard from '../components/FinesSummaryCard';
import RecentFinesCard from '../components/RecentFinesCard';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('Dados atualizados!');
    }, 2000);
  };

  return (
    <ScreenLayout hasTabBar={true}>
      <View style={styles.container}>
        <View>
          <Text style={styles.greeting}>Olá, Geovani!</Text>
          <Text style={styles.lastUpdateLabel}>Última atualização:</Text>
          <Text style={styles.lastUpdateDate}>04/08/2025 às 14:30</Text>
          <Button 
            label="Atualizar"
            variant="primary"
            size="small"
            loading={isLoading}
            onPress={handleUpdate}
          />
        </View>

        <LicensePointsCard/>
        <FinesSummaryCard/>
        <RecentFinesCard/>
      </View>
    </ScreenLayout> 
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
    color: '#111827',
  },
  lastUpdateLabel: {
    fontWeight: '500',
    color: '#787f8e',
  },
  lastUpdateDate: {
    fontWeight: '500',
    color: '#787f8e',
    marginBottom: 16,
  },
});

export default Home;