import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { launchImageLibrary, launchCamera, ImagePickerResponse, MediaType } from 'react-native-image-picker';
import Card from './Card';
import AppIcons from './AppIcons';
import { getCurrentUser, saveUserProfileImage, getUserProfileImage } from '../services/dataService';

interface ProfileCardProps {
  name?: string;
  cpf?: string;
  cnh?: string;
  category?: string;
  validityDate?: string;
  email?: string;
  phone?: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const user = getCurrentUser();
  
  const name = user?.name || props.name || "João Silva Santos";
  const cpf = user?.cpf || props.cpf || "123.456.789-00";
  const cnh = user?.cnh || props.cnh || "12345678901";
  const category = user?.category || props.category || "B";
  const validityDate = user?.validityDate || props.validityDate || "15/08/2027";
  const email = user?.email || props.email || "joao.silva@email.com";
  const phone = user?.phone || props.phone || "(11) 99999-9999";

  const loadSavedImage = async () => {
    try {
      if (user?.id) {
        const savedImage = await getUserProfileImage(user.id);
        if (savedImage) {
          setProfileImage(savedImage);
        }
      }
    } catch (error) {
      console.log('Erro ao carregar imagem salva:', error);
    }
  };

  const saveImageToStorage = async (imageUri: string) => {
    try {
      if (user?.id) {
        await saveUserProfileImage(user.id, imageUri);
      }
    } catch (error) {
      console.log('Erro ao salvar imagem:', error);
    }
  };

  const handleSelectFromLibrary = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
      quality: 0.8 as any,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel || response.errorMessage) {
        return;
      }

      if (response.assets && response.assets[0]) {
        const imageUri = response.assets[0].uri;
        if (imageUri) {
          setProfileImage(imageUri);
          saveImageToStorage(imageUri);
        }
      }
    });
  };

  const handleTakePhoto = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
      quality: 0.8 as any,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel || response.errorMessage) {
        return;
      }

      if (response.assets && response.assets[0]) {
        const imageUri = response.assets[0].uri;
        if (imageUri) {
          setProfileImage(imageUri);
          saveImageToStorage(imageUri);
        }
      }
    });
  };

  const handleSelectImage = () => {
    Alert.alert(
      "Foto de Perfil",
      "Escolha uma opção",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Câmera",
          onPress: handleTakePhoto
        },
        {
          text: "Galeria",
          onPress: handleSelectFromLibrary
        }
      ]
    );
  };

  useEffect(() => {
    loadSavedImage();
  }, []);


  return (
    
    <Card >
      <View style={styles.header}>
        <TouchableOpacity onPress={handleSelectImage} style={styles.imageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.defaultImageContainer}>
              <AppIcons.Profile size={40} color="#6B7280" />
            </View>
          )}
          <View style={styles.cameraIconContainer}>
            <AppIcons.Camera size={16} color="#fff" />
          </View>
        </TouchableOpacity>
        
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.cpf}>CPF: {cpf}</Text>
        </View>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>CNH</Text>
          <Text style={styles.infoValue}>{cnh}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Categoria</Text>
          <Text style={styles.infoValue}>{category}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Validade CNH</Text>
          <Text style={styles.infoValue}>{validityDate}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>E-mail</Text>
          <Text style={styles.infoValue}>{email}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Telefone</Text>
          <Text style={styles.infoValue}>{phone}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F3F4F6',
  },
  defaultImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#111827',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  cpf: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  infoSection: {
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  infoLabel: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
    flex: 1,
  },
  infoValue: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '600',
    textAlign: 'right',
    flex: 1,
  },
});

export default ProfileCard;
