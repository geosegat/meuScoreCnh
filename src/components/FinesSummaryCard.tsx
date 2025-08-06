import { StyleSheet, Text, View,   } from 'react-native'
import React from 'react'
import StatusBox from './StatusBox'
import Card from './Card'
import IconLabel from './IconLabel'
import { getCurrentUserFines, calculatePendingFinesTotal, calculatePaidFinesTotal } from '../services/dataService'

const FinesSummaryCard = () => {
  const fines = getCurrentUserFines();
  
  // Calcular estatísticas
  const pendingFines = fines.filter(fine => fine.status === 'pending');
  const paidFines = fines.filter(fine => fine.status === 'paid');
  
  const pendingTotal = calculatePendingFinesTotal();
  const paidTotal = calculatePaidFinesTotal();
  const grandTotal = pendingTotal + paidTotal;
  return (
    <Card >
     <IconLabel icon='History' label='Resumo dos Últimos 12 Meses'/>
     <View style={styles.statusBoxRow}>
         <StatusBox 
           count={pendingFines.length}
           title="Multas pendentes"
           value={`R$ ${pendingTotal.toFixed(2).replace('.', ',')}`}
           type="pending"
           style={styles.flexBox}
         />
         <StatusBox 
           count={paidFines.length}
           title="Multas pagas"
           value={`R$ ${paidTotal.toFixed(2).replace('.', ',')}`}
           type="paid"
           style={styles.flexBox}
         />
     </View> 
        <StatusBox 
          count={fines.length}
          title="Total de multas"
          value={`R$ ${grandTotal.toFixed(2).replace('.', ',')}`}
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