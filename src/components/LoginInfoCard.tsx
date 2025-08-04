import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppIcons from './AppIcons'
import IconContainer from './IconContainer'
import Card from './Card'

interface LoginInfoCardProps {
  icon: keyof typeof AppIcons;
  title: string;
  description: string;
  iconColor?: string;
  backgroundColor?: string;
}

const LoginInfoCard = ({ 
  icon, 
  title, 
  description, 
  iconColor = '#111827',
  backgroundColor = '#f2f5f6'
}: LoginInfoCardProps) => {
  const IconComponent = AppIcons[icon];
  
  return (
    <Card style={styles.container}>
      <IconContainer backgroundColor={backgroundColor}>
        <IconComponent size={20} color={iconColor} />
      </IconContainer>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Card>
  )
}

export default LoginInfoCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
})