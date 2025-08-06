import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppIcons from './AppIcons'
import IconContainer from './IconContainer'
import Card from './Card'
import Button from './Button'

interface CardLoginProps {
  onLoginPress: () => void;
}

const CardLogin = ({ onLoginPress }: CardLoginProps) => {
  return (
    <Card style={styles.container} padding="large">
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
            
            <Button 
              label="Entrar com conta Gov.br"
              variant="primary"
              size="medium"
              style={styles.loginButton}
              onPress={onLoginPress}
            />
            
            <Text style={styles.redirectText}>
              Você será redirecionado para o portal oficial do governo
            </Text>
        </View>
    </Card>
  )
}

export default CardLogin

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 16,
  },
  redirectText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#787f8e',
    fontWeight: '500',
  },
})