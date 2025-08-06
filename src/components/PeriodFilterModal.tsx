import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import AppIcons from './AppIcons';

interface PeriodOption {
  label: string;
  value: string;
  description: string;
}

interface PeriodFilterModalProps {
  visible: boolean;
  onClose: () => void;
  selectedPeriod?: string;
  onPeriodChange: (period: string) => void;
}

const defaultPeriods: PeriodOption[] = [
  { 
    label: 'Últimos 7 dias', 
    value: '7days',
    description: '7 dias'
  },
  { 
    label: 'Último mês', 
    value: '1month',
    description: '1 mês'
  },
  { 
    label: 'Últimos 3 meses', 
    value: '3months',
    description: '3 meses'
  },
  { 
    label: 'Últimos 6 meses', 
    value: '6months',
    description: '6 meses'
  },
  { 
    label: 'Últimos 12 meses', 
    value: '12months',
    description: '1 ano'
  },
];

const PeriodFilterModal: React.FC<PeriodFilterModalProps> = ({
  visible,
  onClose,
  selectedPeriod = '12months',
  onPeriodChange,
}) => {
  const [tempSelectedPeriod, setTempSelectedPeriod] = useState(selectedPeriod);

  const handlePeriodPress = (period: string) => {
    setTempSelectedPeriod(period);
    onPeriodChange(period);
    onClose();
  };

  const renderPeriodOption = (option: PeriodOption) => {
    const isSelected = option.value === tempSelectedPeriod;
    
    return (
      <TouchableOpacity
        key={option.value}
        style={[
          styles.periodOption,
          isSelected && styles.selectedPeriodOption
        ]}
        onPress={() => handlePeriodPress(option.value)}
        activeOpacity={0.7}
      >
        <View style={styles.periodContent}>
          <Text style={[
            styles.periodLabel,
            isSelected && styles.selectedPeriodLabel
          ]}>
            {option.label}
          </Text>
          <Text style={[
            styles.periodDescription,
            isSelected && styles.selectedPeriodDescription
          ]}>
            {option.description}
          </Text>
        </View>
        
        {isSelected && (
          <View style={styles.selectedIndicator}>
            <Text style={styles.selectedText}>Selecionado</Text>
          </View>
        )}
        
        <AppIcons.Arrow size={16} color={isSelected ? '#fff' : '#9CA3AF'} />
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <TouchableOpacity 
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={onClose}
        />
        
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <View style={styles.headerTitleContainer}>
              <AppIcons.Calendar size={20} color="#111827" />
              <Text style={styles.modalTitle}>Período de Consulta</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <AppIcons.Close size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.modalSubtitle}>
            Selecione o período para visualizar suas multas
          </Text>
          
          <View style={styles.periodsList}>
            {defaultPeriods.map(renderPeriodOption)}
          </View>
          
          <Text style={styles.disclaimer}>
            Os dados são atualizados diariamente pelo sistema do DETRAN
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default PeriodFilterModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBackground: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  closeButton: {
    padding: 4,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
    lineHeight: 20,
  },
  periodsList: {
    gap: 12,
    marginBottom: 24,
  },
  periodOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#fff',
  },
  selectedPeriodOption: {
    backgroundColor: '#111827',
    borderColor: '#111827',
  },
  periodContent: {
    flex: 1,
  },
  periodLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  selectedPeriodLabel: {
    color: '#fff',
  },
  periodDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  selectedPeriodDescription: {
    color: '#D1D5DB',
  },
  selectedIndicator: {
    backgroundColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 12,
  },
  selectedText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
  },
  disclaimer: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 16,
  },
});
