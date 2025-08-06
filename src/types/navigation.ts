import { Fine } from './fines';
import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  TabNavigator: undefined;
  ViolationDetails: { fine: Fine };
};

export type TabParamList = {
  Home: undefined;
  Violations: undefined;
  Profile: undefined;
};

export type RootStackNavigationProp = NavigationProp<RootStackParamList>;
