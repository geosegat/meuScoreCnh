import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import Card from './Card'
import IconLabel from './IconLabel'
import { getCurrentUser } from '../services/dataService'

const LicensePointsCard = () => {
  const user = getCurrentUser();
  
  if (!user) {
    return null; // Não exibe o card se não há usuário logado
  }
  
  const currentPoints = user.currentPoints;
  const maxPoints = user.maxPoints;
  const progressPercentage = (currentPoints / maxPoints) * 100;

  return (
    <Card>
      <IconLabel 
        icon="Car" 
        label="Pontos na CNH"
        containerStyle={styles.header}
      />
      
      <View style={styles.contentContainer}>
        <View style={styles.pointsContainer}>
          <Text style={styles.currentPoints}>{currentPoints}</Text>
          <Text style={styles.separator}>de</Text>
          <Text style={styles.maxPoints}>{maxPoints}</Text>
        </View>
        
        <Text style={styles.subtitle}>Pontos utilizados</Text>
        
        <View style={styles.progressBarContainer}>
          <View 
            style={[
              styles.progressBar, 
              { width: `${progressPercentage}%` }
            ]} 
          />
        </View>
      </View>
    </Card>
  )
}

export default LicensePointsCard

const styles = StyleSheet.create({
  header: {
    marginBottom: 16
  },
  contentContainer: {
    alignItems: 'center', 
  },
  pointsContainer: {
    flexDirection: 'row', 
    alignItems: 'baseline',
    gap: 4, 
    justifyContent: 'center'
  },
  currentPoints: {
    fontSize: 26, 
    fontWeight: 'bold',
    color: '#111827'
  },
  separator: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#6B7280',
    marginBottom: 4
  },
  maxPoints: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#6B7280'
  },
  subtitle: {
    fontSize: 14, 
    fontWeight: '600', 
    color: '#6B7280',
    marginBottom: 14
  },
  progressBarContainer: {
    width: '100%',
    height: 12,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: 4
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#111827',
    borderRadius: 4
  }
})