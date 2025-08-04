import { StyleSheet, Text, View,   } from 'react-native'
import React from 'react'
import StatusBox from './StatusBox'
import Card from './Card'
import IconLabel from './IconLabel'

const FinesSummaryCard = () => {
  return (
    <Card >
     <IconLabel icon='History' label='Resumo dos Últimos 12 Meses'/>
     <View style={styles.statusBoxRow}>
         <StatusBox 
           count={3}
           title="Multas pendentes"
           value="R$ 577,08"
           type="pending"
           style={styles.flexBox}
         />
         <StatusBox 
           count={2}
           title="Multas pagas"
           value="R$ 234,50"
           type="paid"
           style={styles.flexBox}
         />
     </View> 
        <StatusBox 
          count={5}
          title="Total de multas"
          value="R$ 811,58"
          type="default"
        />

    <Text style={styles.subtitle}>* Dados baseados no periodo de 04/08/2024 até hoje</Text>
    </Card>
  )
}

export default FinesSummaryCard

const styles = StyleSheet.create({ 
  statusBoxRow: {
    gap: 12,
    marginVertical: 16,
    flexDirection: 'row',
  },
  flexBox: {
    flex: 1,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 12, 
    fontWeight: '600', 
    color: '#6B7280',
    marginVertical: 12,
  },
})