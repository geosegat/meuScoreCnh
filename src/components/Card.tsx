import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: 'none' | 'small' | 'medium' | 'large';
  shadow?: boolean;
}

const Card = ({ 
  children, 
  style, 
  padding = 'medium',
  shadow = true 
}: CardProps) => {
  const getPaddingStyle = () => {
    switch (padding) {
      case 'none':
        return {};
      case 'small':
        return { padding: 8 };
      case 'medium':
        return { paddingHorizontal: 12, paddingVertical: 16 };
      case 'large':
        return { padding: 20 };
      default:
        return { paddingHorizontal: 12, paddingVertical: 16 };
    }
  };

  return (
    <View 
      style={[
        styles.card,
        getPaddingStyle(),
        shadow && styles.shadow,
        style
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#E5E7EB',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default Card;
