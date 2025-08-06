import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import LoginScreen from './src/screens/Login';
import TabNavigator from './src/navigation/TabNavigator';
import ViolationDetailsScreen from './src/screens/ViolationDetails';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      // Configura a navigation bar do Android como branca com ícones escuros
      SystemNavigationBar.setNavigationColor('#ffffff', 'dark');
      SystemNavigationBar.setBarMode('dark', 'navigation');
    }
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerBackVisible: false,
          }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Meu Score CNH',
              headerStyle: {
                backgroundColor: '#111827',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false, 
            }}
          />
          <Stack.Screen
            name="ViolationDetails"
            component={ViolationDetailsScreen}
            options={{
              title: 'Detalhes da Multa',
              headerStyle: {
                backgroundColor: '#111827',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
              headerBackVisible: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;