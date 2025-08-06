import React from 'react';
import { 
  Modal, 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView,
  Image 
} from 'react-native';
import { User } from '../types/user';
import AppIcons from './AppIcons';

interface UserSelectionModalProps {
  visible: boolean;
  users: User[];
  onSelectUser: (user: User) => void;
  onClose: () => void;
  userProfileImages: { [userId: string]: string };
}

const UserSelectionModal: React.FC<UserSelectionModalProps> = ({
  visible,
  users,
  onSelectUser,
  onClose,
  userProfileImages
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Selecione o usuário</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <AppIcons.X size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.usersList}>
            {users.map((user) => (
              <TouchableOpacity
                key={user.id}
                style={styles.userItem}
                onPress={() => onSelectUser(user)}
                activeOpacity={0.7}
              >
                <View style={styles.userImageContainer}>
                  {userProfileImages[user.id] ? (
                    <Image 
                      source={{ uri: userProfileImages[user.id] }} 
                      style={styles.userImage} 
                    />
                  ) : (
                    <View style={styles.defaultUserImage}>
                      <AppIcons.Profile size={32} color="#6B7280" />
                    </View>
                  )}
                </View>
                
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{user.name}</Text>
                  <Text style={styles.userCpf}>CPF: {user.cpf}</Text>
                  <Text style={styles.userCategory}>CNH: {user.category}</Text>
                </View>
                
                <AppIcons.ArrowRight size={20} color="#6B7280" />
              </TouchableOpacity>
            ))}
          </ScrollView>
          
          <Text style={styles.hint}>
            Toque em um usuário para fazer login automaticamente
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    margin: 20,
    maxHeight: '80%',
    width: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  closeButton: {
    padding: 4,
  },
  usersList: {
    maxHeight: 400,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    borderRadius: 8,
    marginBottom: 8,
  },
  userImageContainer: {
    marginRight: 16,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  defaultUserImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  userCpf: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },
  userCategory: {
    fontSize: 14,
    color: '#6B7280',
  },
  hint: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 16,
    fontStyle: 'italic',
  },
});

export default UserSelectionModal;
