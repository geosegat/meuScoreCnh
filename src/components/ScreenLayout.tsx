import React from 'react';
import {ScrollView, StyleSheet, Platform, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScreenLayoutProps {
  children: React.ReactNode;
  hasTabBar?: boolean; 
}

const ScreenLayout = ({children, hasTabBar = false}: ScreenLayoutProps) => {
  const insets = useSafeAreaInsets();
  
  const getBottomPadding = () => {
    if (Platform.OS === 'ios') {
      return hasTabBar ? insets.bottom + 80 : insets.bottom + 20;
    } else {
      if (hasTabBar) {
        return 140; 
      } else {
        return 60; 
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={[
          styles.contentContainer,
          { paddingBottom: getBottomPadding() }
        ]}
        showsVerticalScrollIndicator={false}
        bounces={Platform.OS === 'ios'}
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