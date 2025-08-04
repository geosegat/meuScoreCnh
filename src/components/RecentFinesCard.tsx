import { StyleSheet, View } from 'react-native'
import React from 'react'
import Card from './Card'
import IconLabel from './IconLabel'
import FinesDetailsCard from './FinesDetailsCard'
import finesData from '../data/finesData.json'
import { Fine } from '../types/fines'

const RecentFinesCard = () => {
  const fines = finesData as Fine[]
  const recentFines = fines.slice(0, 3)

  return (
   <Card>
    <IconLabel icon='FileStack' label='Multas Recentes'/>
    <View style={styles.finesContainer}>
      {recentFines.map((fine, index) => (
        <FinesDetailsCard 
          key={index}
          fine={fine}
          showId={false}
          showPoints={true}
          showLicensePlate={false} 
          showLocation={true} 
          style={index < recentFines.length - 1 ? styles.fineWithMargin : undefined}
        />
      ))}
    </View>
   </Card>
  )
}

export default RecentFinesCard

const styles = StyleSheet.create({
  finesContainer: {
    marginTop: 24,
    gap: 8,
  },
  fineWithMargin: {
    marginBottom: 8,
  },
})