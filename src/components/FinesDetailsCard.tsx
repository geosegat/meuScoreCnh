import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { FinesDetailsCardProps } from '../types/fines'
import IconLabel from './IconLabel'
import Divider from './Divider'

const FinesDetailsCard = ({ 
  fine, 
  showId = true, 
  showPoints = true, 
  showLicensePlate = true, 
  showLocation = true,
  style 
}: FinesDetailsCardProps) => {
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#FEF3C7' 
      case 'paid':
        return '#D1FAE5' 
      case 'overdue':
        return '#FEE2E2' 
      default:
        return '#F3F4F6' 
    }
  }

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#92400E'
      case 'paid':
        return '#065F46'
      case 'overdue':
        return '#991B1B'
      default:
        return '#374151'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendente'
      case 'paid':
        return 'Paga'
      case 'overdue':
        return 'Vencida'
      default:
        return 'Desconhecido'
    }
  }

  return (
    <Card style={style}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{fine.type}</Text>
          <View style={[
            styles.statusBadge, 
            { backgroundColor: getStatusColor(fine.status) }
          ]}>
            <Text style={[
              styles.statusText,
              { color: getStatusTextColor(fine.status) }
            ]}>
              {getStatusText(fine.status)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.infoRow}>
          <IconLabel 
            gap={6} 
            textStyle={styles.iconLabelText} 
            iconSize={14} 
            icon="Calendar" 
            label={fine.date} 
          />
        </View>
        {showLocation && fine.location && (
          <View style={styles.infoRow}>
            <IconLabel 
              gap={6} 
              textStyle={styles.iconLabelText} 
              iconSize={14} 
              icon="MapPin" 
              label={fine.location} 
            />
          </View>
        )}

        {showLicensePlate && fine.licensePlate && (
          <View style={styles.infoRow}>
            <IconLabel 
              gap={6} 
              textStyle={styles.iconLabelText} 
              iconSize={14} 
              icon="Car" 
              label={fine.licensePlate} 
            />
          </View>
        )}
        <Divider />

        <View style={styles.footer}>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>R$ {fine.amount}</Text>
            {showPoints && fine.points && fine.points > 0 && (
              <Text style={styles.points}>{fine.points} pontos</Text>
            )}
          </View>
          
          {showId && fine.id && (
            <Text style={styles.id}>{fine.id}</Text>
          )}
        </View>
      </View>
    </Card>
  )
}

export default FinesDetailsCard

const styles = StyleSheet.create({
  header: {
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  content: {
    gap: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    color: '#6B7280',
  },
  location: {
    fontSize: 14,
    color: '#6B7280',
  },
  licensePlate: {
    fontSize: 14,
    color: '#6B7280',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  amountContainer: {
    gap: 4,
  },
  amount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  points: {
    fontSize: 12,
    color: '#EF4444',
    fontWeight: '500',
  },
  id: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  iconLabelText: {
    fontSize: 12,
    fontWeight: 'normal',
  },
})