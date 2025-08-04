import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import AppIcons from '../components/AppIcons';

const Home = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <AppIcons.Home size={48} color="#28A745" />
        <Text style={styles.title}>Home</Text>
        <View style={styles.iconRow}>
          <AppIcons.Search size={24} color="#6C757D" />
          <AppIcons.Settings size={24} color="#6C757D" />
        </View>
      </View>
    </ScreenLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
  },
  iconRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },
});