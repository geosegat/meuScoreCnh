import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenLayoutProps {
  children: React.ReactNode;
  hasTabBar?: boolean; 
}

const ScreenLayout = ({children, hasTabBar = false}: ScreenLayoutProps) => {
  const insets = useSafeAreaInsets();
  
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9fafb',
      paddingBottom: hasTabBar 
        ? Platform.OS === 'ios' ? 75 + insets.bottom : 75 + insets.bottom 
        : insets.bottom,
    },
  });

  return <View style={dynamicStyles.container}>{children}</View>;
};

export default ScreenLayout;