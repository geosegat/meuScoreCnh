import React from 'react';
import {ScrollView, StyleSheet, Platform} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenLayoutProps {
  children: React.ReactNode;
  hasTabBar?: boolean; 
}

const ScreenLayout = ({children, hasTabBar = false}: ScreenLayoutProps) => {
  const insets = useSafeAreaInsets();
  
  const dynamicStyles = StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: '#f9fafb',
    },
    contentContainer: {
      padding: 18,
      paddingBottom: hasTabBar 
        ? Platform.OS === 'ios' ? 75 + insets.bottom : 75 + insets.bottom 
        : insets.bottom,
    },
  });

  return (
    <ScrollView 
      style={dynamicStyles.scrollView}
      contentContainerStyle={dynamicStyles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

export default ScreenLayout;