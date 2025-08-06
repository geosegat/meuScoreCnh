import React from 'react';
import {ScrollView, StyleSheet, Platform, StatusBar} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

interface SafeScreenLayoutProps {
  children: React.ReactNode;
  hasTabBar?: boolean; 
  withBottomSafeArea?: boolean;
}

const SafeScreenLayout = ({children, hasTabBar = false, withBottomSafeArea = true}: SafeScreenLayoutProps) => {
  const insets = useSafeAreaInsets();
  
  const getBottomPadding = () => {
    if (Platform.OS === 'ios') {
      return hasTabBar ? insets.bottom + 20 : insets.bottom + 20;
    } else {
      if (hasTabBar) {
        return Math.max(insets.bottom + 20, 100); 
      } else {
        return withBottomSafeArea ? Math.max(insets.bottom + 20, 50) : 20;
      }
    }
  };

  const edges = Platform.OS === 'android' ? ['top'] : ['top', 'left', 'right'];

  return (
    <>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      )}
      <SafeAreaView style={styles.container} edges={edges}>
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
      </SafeAreaView>
    </>
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

export default SafeScreenLayout;
