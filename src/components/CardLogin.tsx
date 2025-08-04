import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIcons from './AppIcons'
import IconContainer from './IconContainer'

interface CardLoginProps {
  onLoginPress: () => void;
}

const CardLogin = ({ onLoginPress }: CardLoginProps) => {
  return (
    <View style={styles.container}>
        <IconContainer size="large" borderRadius={64}>
          <AppIcons.Shield size={48} color="#111827"/>
        </IconContainer>
        <View style={styles.textContainer}>
            <Text style={styles.appNameText}>
                Bem-vindo ao
            </Text>
            <Text style={styles.appNameText}>
               Meu Score CNH
            </Text>
            <View style={styles.descriptionContainer}>
                 <Text style={styles.welcomeText}>
                    Consulte seus pontos na carteira,
                </Text>
                <Text style={styles.welcomeText}>
                    histórico de multas e acompanhe sua
                </Text>
                <Text style={styles.welcomeText}>
                    situação no trânsito.
                </Text>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
                <Text style={styles.loginButtonText}>
                    Entrar com gov.br
                </Text>
                <AppIcons.ExternalLink size={16} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.redirectText}>Você será redirecionado para o portal oficial do governo</Text>

        </View>
    </View>
  )
}

export default CardLogin

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    gap: 16,
  },
  textContainer: {
    alignItems: 'center',
  },
  descriptionContainer: {
    gap: 4,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    textAlign: 'center',
  },
  appNameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },
  loginButton: {
    backgroundColor: '#111827',
    paddingHorizontal: 48,
    gap: 16,
    paddingVertical: 14,
    marginTop: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  redirectText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#787f8e',
    fontWeight: '500',
  },
})