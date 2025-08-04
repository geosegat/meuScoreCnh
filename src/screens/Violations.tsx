import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenLayout from '../components/ScreenLayout';

const Violations = () => {
  return (
    <ScreenLayout hasTabBar={true}>
      <View style={styles.container}>
        <Text style={styles.title}>Violations</Text>
      </View>
    </ScreenLayout>
  );
};

export default Violations;

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
  },
});
