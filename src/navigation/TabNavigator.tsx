import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ViolationsScreen from '../screens/Violations';
import ProfileScreen from '../screens/Profile';
import AppIcons from '../components/AppIcons';
import { TabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<TabParamList>();

const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <AppIcons.Home size={size} color={color} />
);

const ViolationsIcon = ({ color, size }: { color: string; size: number }) => (
  <AppIcons.Violations size={size} color={color} />
);

const ProfileIcon = ({ color, size }: { color: string; size: number }) => (
  <AppIcons.Profile size={size} color={color} />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#111827',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#111827',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          paddingTop: 8,
          paddingBottom: 34, 
          height: 90, 
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
          tabBarLabel: 'Início',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Violations"
        component={ViolationsScreen}
        options={{
          title: 'Multas',
          tabBarLabel: 'Multas',
          tabBarIcon: ViolationsIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Perfil',
          tabBarLabel: 'Perfil',
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
