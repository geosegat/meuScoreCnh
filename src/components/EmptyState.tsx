import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import IconLabel from './IconLabel';

interface EmptyStateProps {
  title: string;
  message: string;
  icon?: keyof typeof import('./AppIcons').default;
}

const EmptyState = ({ title, message, icon = "Violations" }: EmptyStateProps) => {
  return (
    <Card >
      <View style={styles.content}>
        <IconLabel 
          icon={icon}
          label=""
          iconSize={48}
          iconColor="#9CA3AF"
          textStyle={styles.hiddenText}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
 
  content: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 16,
  },
  hiddenText: {
    display: 'none',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default EmptyState;
