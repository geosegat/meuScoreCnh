import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface DividerProps {
  color?: string;
  thickness?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  style?: ViewStyle;
}

const Divider = ({
  color = '#E5E7EB',
  thickness = 1,
  marginVertical = 8,
  marginHorizontal = 0,
  style
}: DividerProps) => {
  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: color,
          height: thickness,
          marginVertical,
          marginHorizontal,
        },
        style
      ]}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});
