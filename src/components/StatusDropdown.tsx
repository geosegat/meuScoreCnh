import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import AppIcons from './AppIcons';

interface StatusOption {
  label: string;
  value: string;
}

interface StatusDropdownProps {
  placeholder?: string;
  value?: string;
  onSelectionChange?: (value: string) => void;
  options?: StatusOption[];
}

const defaultOptions: StatusOption[] = [
  { label: 'Todos os status', value: 'all' },
  { label: 'Pendentes', value: 'pending' },
  { label: 'Pagas', value: 'paid' },
  { label: 'Vencidas', value: 'overdue' },
];

const StatusDropdown: React.FC<StatusDropdownProps> = ({
  placeholder = "Todos os status",
  value,
  onSelectionChange,
  options = defaultOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || 'all');

  const selectedOption = options.find(option => option.value === selectedValue);

  const handleOptionPress = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onSelectionChange?.(optionValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.dropdown}
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.7}
      >
        <Text style={styles.dropdownText}>
          {selectedOption?.label || placeholder}
        </Text>
        <View style={[styles.chevron, isOpen && styles.chevronRotated]}>
          <AppIcons.ChevronDown 
            size={18} 
            color="gray" 
          />
        </View>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.optionsContainer}>
          <ScrollView
            style={styles.optionsList}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
          >
            {options.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={[
                  styles.option,
                  item.value === selectedValue && styles.selectedOption
                ]}
                onPress={() => handleOptionPress(item.value)}
              >
                <Text style={[
                  styles.optionText,
                  item.value === selectedValue && styles.selectedOptionText
                ]}>
                  {item.label}
                </Text>
                {item.value === selectedValue && (
                  <AppIcons.Check size={16} color="#111827" />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default StatusDropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    zIndex: 1000,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f3f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    
  },
  dropdownText: {
    color: 'black',
    fontWeight: '500',
    flex: 1,
  },
  chevron: {
    marginLeft: 8,
  },
  chevronRotated: {
    transform: [{ rotate: '180deg' }],
  },
  optionsContainer: {
    position: 'absolute',
    top: '100%',
    left: 4,
    right: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: -8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 1001,
  },
  optionsList: {
    maxHeight: 200,
    borderRadius: 12,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
     paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E7EB',
  },
  selectedOption: {
    backgroundColor: '#F3F4F6',
  },
  optionText: {
    color: '#333',
    flex: 1,
  },
  selectedOptionText: {
    fontWeight: '600',
    color: '#111827',
  },
});
