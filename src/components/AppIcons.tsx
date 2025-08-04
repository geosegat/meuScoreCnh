import React from 'react';
import {
  Home,
  User,
  LogIn,
  AlertTriangle,
  Car,
  Settings,
  Search,
  X,
  Check,
  ArrowRight,
  Shield,
  SquareArrowOutUpRight,
  Lock,
  Zap,
  BarChart3,FileStack, Calendar, MapPin
} from 'lucide-react-native';

interface IconProps {
  size?: number;
  color?: string;
}

const AppIcons = {
  Home: ({size = 24, color = '#333'}: IconProps) => (
    <Home size={size} color={color} />
  ),
  Profile: ({size = 24, color = '#333'}: IconProps) => (
    <User size={size} color={color} />
  ),
  Login: ({size = 24, color = '#333'}: IconProps) => (
    <LogIn size={size} color={color} />
  ),
  Violations: ({size = 24, color = '#333'}: IconProps) => (
    <AlertTriangle size={size} color={color} />
  ),
  Car: ({size = 24, color = '#333'}: IconProps) => (
    <Car size={size} color={color} />
  ),
  Settings: ({size = 24, color = '#333'}: IconProps) => (
    <Settings size={size} color={color} />
  ),
  Search: ({size = 24, color = '#333'}: IconProps) => (
    <Search size={size} color={color} />
  ),
  Close: ({size = 24, color = '#333'}: IconProps) => (
    <X size={size} color={color} />
  ),
  Check: ({size = 24, color = '#333'}: IconProps) => (
    <Check size={size} color={color} />
  ),
  Arrow: ({size = 24, color = '#333'}: IconProps) => (
    <ArrowRight size={size} color={color} />
  ),
  Shield: ({size = 24, color = '#333'}: IconProps) => (
    <Shield size={size} color={color} />
  ),
  ExternalLink: ({size = 24, color = '#333'}: IconProps) => (
    <SquareArrowOutUpRight size={size} color={color} />
  ), 
  Security: ({size = 24, color = '#333'}: IconProps) => (
    <Lock size={size} color={color} />
  ),
  FastSearch: ({size = 24, color = '#333'}: IconProps) => (
    <Zap size={size} color={color} />
  ),
  History: ({size = 24, color = '#333'}: IconProps) => (
    <BarChart3 size={size} color={color} />
  ),
  FileStack: ({size = 24, color = '#333'}: IconProps) => (
    <FileStack size={size} color={color} />
  ),
  Calendar: ({size = 24, color = '#333'}: IconProps) => (
    <Calendar size={size} color={color} />
  ),
  MapPin: ({size = 24, color = '#333'}: IconProps) => (
    <MapPin size={size} color={color} />
  ),
};

export default AppIcons;
