import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../components/ScreenLayout';
import Button from '../components/Button';
import ProfileCard from '../components/ProfileCard';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Profile = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScreenLayout hasTabBar={true}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View >
          
          <ProfileCard />
          
          <Button 
            icon='LogOut'
            label="Sair da conta"
            variant="primary"
            size="medium"
            iconPosition='left'
            onPress={handleLogout}
            style={styles.logoutButton}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 20, gap: 4}}>
          <Text style={{color: 'gray', fontWeight: 'bold'}}>Meu ScoreCNH - gov.br</Text>
          <Text style={{color: 'gray', fontWeight: 'bold'}}>Versão 1.0.0</Text>
          <Text style={{color: 'gray', fontWeight: 'bold'}}>© 2024 Governo Federal do Brasil</Text>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  logoutButton: {
    backgroundColor: '#DC2626',
    marginTop: 16,
  },
});
