import React from 'react';
import {StyleSheet, TextInput, View, TextInputProps} from 'react-native';
import AppIcons from './AppIcons';

interface SearchInputProps extends TextInputProps {
  onChangeText?: (text: string) => void;
  placeholder?: string;
  value?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onChangeText,
  placeholder = "Buscar...",
  value,
  ...rest
}) => {
  return (
    <View style={styles.searchContainer}>
      <AppIcons.Search size={18} color="gray" />
      <TextInput  
        style={styles.searchInput} 
        placeholderTextColor={'gray'}   
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
        {...rest}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#f3f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    flex: 1,
  },
});
