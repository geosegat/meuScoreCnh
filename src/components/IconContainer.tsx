import React from 'react';
import { View, StyleSheet } from 'react-native';

interface IconContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  borderRadius?: number;
}

const IconContainer = ({ 
  children, 
  backgroundColor = '#f2f5f6',
  size = 'medium',
  borderRadius = 16 
}: IconContainerProps) => {
  
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return styles.small;
      case 'large':
        return styles.large;
      default:
        return styles.medium;
    }
  };

  return (
    <View style={[styles.container, getSizeStyles(), { backgroundColor, borderRadius }]}>
      {children}
    </View>
  );
};

export default IconContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  small: {
    padding: 12,
  },
  medium: {
    padding: 16,
  },
  large: {
    padding: 20,
  },
});
