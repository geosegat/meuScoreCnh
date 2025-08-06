import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import ScreenLayout from '../components/ScreenLayout';
import CardLogin from '../components/CardLogin';
import LoginInfoCard from '../components/LoginInfoCard';
import UserSelectionModal from '../components/UserSelectionModal';
import AppIcons from '../components/AppIcons';
import { RootStackParamList } from '../types/navigation';
import { 
  usersData, 
  setCurrentUser, 
  getAllUserProfileImages 
} from '../services/dataService';
import { User } from '../types/user';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const infoCardsData = [
  {
    id: 1,
    icon: 'Security' as keyof typeof AppIcons,
    title: 'Seguro e Confiável',
    description: 'Autenticação oficial do governo brasileiro'
  },
  {
    id: 2,
    icon: 'FastSearch' as keyof typeof AppIcons,
    title: 'Consulta Rápida',
    description: 'Acesse suas informações a qualquer momento'
  },
  {
    id: 3,
    icon: 'History' as keyof typeof AppIcons,
    title: 'Histórico Completo',
    description: 'Acompanhe multas e pontuação dos últimos 12 meses'
  }
];

const Login = () => {
  const navigation = useNavigation<NavigationProp>();
  const [showUserModal, setShowUserModal] = useState(false);
  const [userProfileImages, setUserProfileImages] = useState<{ [userId: string]: string }>({});

  useEffect(() => {
    loadUserProfileImages();
  }, []);

  const loadUserProfileImages = async () => {
    const images = await getAllUserProfileImages();
    setUserProfileImages(images);
  };

  const handleLogin = () => {
    setShowUserModal(true);
  };

  const handleQuickUserSelection = (user: User) => {
    setCurrentUser(user);
    setShowUserModal(false);
    navigation.navigate('TabNavigator');
  };

  return (
    <ScreenLayout >
      <View style={styles.container}>
        <CardLogin onLoginPress={handleLogin}/>
        
        <View style={styles.containerLoginInfoCard}>
           {infoCardsData.map((card) => (
            <LoginInfoCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </View>
        
        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimerText}>
            Este aplicativo é independente e não possui vínculo oficial com o governo. 
            Utilizamos apenas dados públicos oficiais para consultas.
          </Text>
          <Text style={styles.copyrightText}>
            © 2025 Meu Score CNH - Todos os direitos reservados
          </Text>
        </View>
      </View>
      
      {/* Modal de seleção de usuários */}
      <UserSelectionModal
        visible={showUserModal}
        users={usersData}
        onSelectUser={handleQuickUserSelection}
        onClose={() => setShowUserModal(false)}
        userProfileImages={userProfileImages}
      />
    </ScreenLayout>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  containerLoginInfoCard: {
    width: '100%',
    gap: 12,
  },
  disclaimerContainer: {
    alignItems: 'center',
  },
  disclaimerText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 16,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  copyrightText: {
    fontSize: 12,
    textAlign: 'center',
  },
});