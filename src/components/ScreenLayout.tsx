import React from 'react';
import {ScrollView, StyleSheet, Platform, View} from 'react-native';

interface ScreenLayoutProps {
  children: React.ReactNode;
  hasTabBar?: boolean; 
}

const ScreenLayout = ({children, hasTabBar = false}: ScreenLayoutProps) => {
  
  const paddingBottom = hasTabBar 
    ? Platform.OS === 'ios' ? 100 : 20 
    : 20;

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={[
          styles.contentContainer,
          { paddingBottom }
        ]}
        showsVerticalScrollIndicator={false}
        bounces={true}
        alwaysBounceVertical={false}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 18,
  },
});

export default ScreenLayout;