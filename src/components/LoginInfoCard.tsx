import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppIcons from './AppIcons'
import IconContainer from './IconContainer'

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
    <View style={styles.container}>
        <IconContainer backgroundColor={backgroundColor}>
            <IconComponent size={20} color={iconColor} />
        </IconContainer>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text >{description}</Text>
        </View>
    </View>
  )
}

export default LoginInfoCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
  
})