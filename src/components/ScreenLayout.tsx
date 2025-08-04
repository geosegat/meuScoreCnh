import React from 'react';
import {View, StyleSheet} from 'react-native';

interface ScreenLayoutProps {
  children: React.ReactNode;
}

const ScreenLayout = ({children}: ScreenLayoutProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb', 
  },
});

export default ScreenLayout;