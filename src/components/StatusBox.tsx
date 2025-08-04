import { StyleSheet, Text, ViewStyle } from 'react-native'
import React from 'react'
import Card from './Card'

interface StatusBoxProps {
  count: number
  title: string
  value: string
  type?: 'pending' | 'paid' | 'default'
  style?: ViewStyle
}

const StatusBox = ({ count, title, value, type = 'default', style }: StatusBoxProps) => {
  const isPaid = type === 'paid'
  const isPending = type === 'pending'
  
  return (
    <Card 
      style={[
        styles.container,
        isPaid ? styles.paidContainer : isPending ? styles.pendingContainer : styles.defaultContainer,
        style
      ] as any} 
    >
      <Text style={[
        styles.count,
        isPaid ? styles.paidText : isPending ? styles.pendingText : styles.defaultText
      ]}>
        {count}
      </Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={[
        styles.value,
        isPaid ? styles.paidText : isPending ? styles.pendingText : styles.defaultText
      ]}>
        {value}
      </Text>
    </Card>
  )
}

export default StatusBox

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 4,
  },
  pendingContainer: {
    backgroundColor: '#fff2f3',
    borderColor: '#fedfdf',
  },
  paidContainer: {
    backgroundColor: '#f0f9f0',
    borderColor: '#d4e5d4',
  },
  defaultContainer: {
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
  },
  count: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    color: '#333',
    fontSize: 14,
  },
  value: {
    fontWeight: '500',
    fontSize: 16,
  },
  pendingText: {
    color: '#dc3545',
  },
  paidText: {
    color: '#28a745',
  },
  defaultText: {
    color: '#333',
  },
})