import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../components/ScreenLayout';
import Button from '../components/Button';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Profile = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScreenLayout hasTabBar={true}>
      <View style={styles.container}>
        <Text style={styles.title}>Perfil</Text>
        
        <Button
          label="Sair"
          variant="primary"
          size="medium"
          onPress={handleLogout}
          style={styles.logoutButton}
        />
      </View>
    </ScreenLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#DC2626',
  },
});
