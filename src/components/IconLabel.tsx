import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import AppIcons from './AppIcons';

interface IconLabelProps {
  icon: keyof typeof AppIcons;
  label: string;
  iconSize?: number;
  iconColor?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  gap?: number;
}

const IconLabel = ({
  icon,
  label,
  iconSize = 24,
  iconColor = '#333',
  textStyle,
  containerStyle,
  gap = 8
}: IconLabelProps) => {
  const IconComponent = AppIcons[icon];

  return (
    <View style={[styles.container, { gap }, containerStyle]}>
      <IconComponent size={iconSize} color={iconColor} />
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </View>
  );
};

export default IconLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
