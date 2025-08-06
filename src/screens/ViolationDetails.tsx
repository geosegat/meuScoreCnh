import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenLayout from '../components/ScreenLayout'
import Card from '../components/Card'
import IconLabel from '../components/IconLabel'
import Divider from '../components/Divider'
import { Fine } from '../types/fines'
import { getStatusColor, getStatusTextColor, getStatusText } from '../utils/statusUtils'

interface ViolationDetailsProps {
  route?: {
    params?: {
      fine?: Fine
    }
  }
}

const ViolationDetails = ({ route }: ViolationDetailsProps) => {
  const fine: Fine = route?.params?.fine || {
    id: "#75420-1",
    type: "Excesso de velocidade",
    date: "15/11/2024 às 14:32",
    location: "Av. Paulista, 1500 - Bela Vista, São Paulo - SP",
    licensePlate: "ABC-1234",
    amount: "195,23",
    points: 5,
    status: "pending",
    dueDate: "15/12/2024",
    description: "Velocidade registrada: 85 km/h em via de 60 km/h. Você excedeu o limite de velocidade em 41,7%.",
    article: "Art. 218, II do CTB",
    speedLimit: 60,
    recordedSpeed: 85,
    excessSpeed: 25,
    excessPercentage: 41.7,
    officer: "Agente 12345",
    equipment: "Radar fixo modelo XYZ-2024 - Equipamento 001 - Posto Avançado Paulista"
  };

  return (
    <ScreenLayout >
      <Card style={styles.headerCard}>
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
        
        <View style={styles.idContainer}>
          <Text style={styles.idValue}>{fine.id}</Text>
          <Text style={styles.article}>• {fine.article}</Text>
        </View>
         <View style={styles.valuesRow}>
          <View style={styles.valueItem}>
            <Text style={styles.amount}>R$ {fine.amount}</Text>
            <Text style={styles.valueLabel}>Valor da multa</Text>
          </View>
          <View style={styles.valueItem}>
            <Text style={styles.points}>{fine.points} pontos</Text>
            <Text style={styles.valueLabel}>Pontos na CNH</Text>
          </View>
        </View>
      </Card>

    

      <Card style={styles.detailsCard}>
        <IconLabel 
          icon="BookText" 
          label="Detalhes da Infração"
          textStyle={styles.sectionTitle}
          iconSize={20}
          iconColor="#111827"
        />
        
        <View style={styles.detailsContent}>
          <View style={styles.detailRow}>
            <IconLabel 
              icon="Calendar" 
              label="Data e Hora"
              textStyle={styles.detailLabel}
              iconSize={16}
              iconColor="#6B7280"
            />
            <Text style={styles.detailValue}>{fine.date}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <IconLabel 
              icon="MapPin" 
              label="Local"
              textStyle={styles.detailLabel}
              iconSize={16}
              iconColor="#6B7280"
            />
            <Text style={styles.detailValue}>{fine.location}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <IconLabel 
              icon="Car" 
              label="Placa do Veículo"
              textStyle={styles.detailLabel}
              iconSize={16}
              iconColor="#6B7280"
            />
            <Text style={styles.detailValue}>{fine.licensePlate}</Text>
          </View>

          {fine.dueDate && (
            <View style={styles.detailRow}>
              <IconLabel 
                icon="Calendar" 
                label="Vencimento"
                textStyle={styles.detailLabel}
                iconSize={16}
                iconColor="#6B7280"
              />
              <Text style={styles.detailValue}>{fine.dueDate}</Text>
            </View>
          )}
        </View>

        {fine.description && (
          <>
            <Divider />
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Descrição da Infração</Text>
              <Text style={styles.descriptionText}>{fine.description}</Text>
              
              {fine.speedLimit && fine.recordedSpeed && fine.excessSpeed && (
                <View style={styles.speedInfoContainer}>
                  <Text style={styles.speedInfoTitle}>Infração Média</Text>
                  <Text style={styles.excessPercentage}>+{fine.excessPercentage}%</Text>
                  
                  <View style={styles.speedValuesRow}>
                    <View style={styles.speedValueItem}>
                      <Text style={styles.speedValue}>{fine.speedLimit} km/h</Text>
                      <Text style={styles.speedLabel}>Permitida</Text>
                    </View>
                    
                    <View style={styles.speedValueItem}>
                      <Text style={styles.speedValue}>{fine.recordedSpeed} km/h</Text>
                      <Text style={styles.speedLabel}>Registrada</Text>
                    </View>
                    
                    <View style={styles.speedValueItem}>
                      <Text style={styles.speedValueExcess}>+{fine.excessSpeed} km/h</Text>
                      <Text style={styles.speedLabel}>Excesso</Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </>
        )}

        {(fine.officer || fine.equipment) && (
          <>
            <Divider />
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Informações da Infração</Text>
              
              <View style={styles.officerContent}>
                {fine.officer && (
                  <View style={styles.officerRow}>
                    <Text style={styles.officerLabel}>Agente autuador:</Text>
                    <Text style={styles.officerValue}>{fine.officer}</Text>
                  </View>
                )}
                
                {fine.equipment && (
                  <View style={styles.officerRowVertical}>
                    <Text style={styles.officerLabel}>Equipamento:</Text>
                    <Text style={styles.officerValueVertical}>{fine.equipment}</Text>
                  </View>
                )}
              </View>
            </View>
          </>
        )}
      </Card>

      <Card style={styles.infoCard}>
        <IconLabel 
          icon="Violations" 
          label="Informações Importantes"
          textStyle={styles.sectionTitle}
          iconSize={20}
          iconColor="#111827"
        />
        
        <View style={styles.infoContent}>
          <Text style={styles.infoText}>
            • Prazo para recurso: 30 dias a partir da notificação
          </Text>
          <Text style={styles.infoText}>
            • Desconto de 40% para pagamento à vista
          </Text>
          <Text style={styles.infoText}>
            • Possibilidade de parcelamento em até 12x
          </Text>
          <Text style={styles.infoText}>
            • Consulte o DETRAN para mais informações
          </Text>
        </View>
      </Card>
    </ScreenLayout>
  )
}

export default ViolationDetails

const styles = StyleSheet.create({
  headerCard: {
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
    marginRight: 12,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  idContainer: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  idLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  idValue: {
    fontWeight: '600',
    color: '#111827',
  },
  article: {
    fontSize: 14,
    color: '#6B7280',
  },
  
  valuesCard: {
    marginBottom: 16,
  },
  valuesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16
  },
  valueItem: {
    alignItems: 'center',
    flex: 1,
  },
  amount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  points: {
    fontSize: 24,
    fontWeight: '700',
    color: '#EF4444',
    marginBottom: 4,
  },
  valueLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  detailsCard: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  detailsContent: {
    marginTop: 16,
    gap: 16,
  },
  sectionContainer: {
    marginTop: 16,
  },
  detailRow: {
    gap: 8,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  detailValue: {
    fontSize: 14,
    color: '#111827',
    marginLeft: 24,
  },
  infoCard: {
    marginBottom: 16,
  },
  infoContent: {
    marginTop: 16,
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  descriptionText: {
    fontSize: 14,
    color: '#111827',
    lineHeight: 20,
    marginTop: 12,
  },
  speedInfoContainer: {
    marginTop: 16,
    backgroundColor: '#fff6ec',
    borderWidth: 1,
    borderColor: '#fed7a7',
    padding: 16,
    borderRadius: 12,
  },
  speedInfoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#92400E',
    marginBottom: 4,
  },
  excessPercentage: {
    fontSize: 18,
    fontWeight: '700',
    color: '#92400E',
    textAlign: 'right',
    marginTop: -24,
  },
  speedValuesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  speedValueItem: {
    alignItems: 'center',
    flex: 1,
  },
  speedValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  speedValueExcess: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
  },
  speedLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  officerContent: {
    marginTop: 16,
    gap: 12,
  },
  officerRow: {
    flexDirection: 'row',
    gap: 12,
  },
  officerLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
    minWidth: 100,
    maxWidth: 120,
  },
  officerValue: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
    flex: 1,
    flexShrink: 1,
    textAlign: 'right',
  },
  officerRowVertical: {
    flexDirection: 'row',
  
    gap: 4,
  },
  officerValueVertical: {
   fontSize: 14,
    color: '#111827',
    fontWeight: '600',
    flex: 1,
    flexShrink: 1,
    textAlign: 'right',
  },
})