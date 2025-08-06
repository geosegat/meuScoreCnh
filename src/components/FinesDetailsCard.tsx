import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './Card'
import { FinesDetailsCardProps } from '../types/fines'
import IconLabel from './IconLabel'
import Divider from './Divider'
import { getStatusColor, getStatusTextColor, getStatusText } from '../utils/statusUtils'

const FinesDetailsCard = ({ 
  fine, 
  showId = true, 
  showPoints = true, 
  showLicensePlate = true, 
  showLocation = true,
  style,
  onPress 
}: FinesDetailsCardProps) => {

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
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
    </TouchableOpacity>
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