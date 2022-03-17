import {ImageSourcePropType} from 'react-native';
import icHome from '../assets/cat.png';
export enum Routes {
  HomeTab = 'HomeTab',
  Home = 'Home',
  Messaging = 'Messaging',
  Profile = 'Profile',
}

export const NAV_ICONS: {[name: string]: ImageSourcePropType} = {
  [Routes.HomeTab]: icHome,
  [Routes.Home]: icHome,
  [Routes.Messaging]: icHome,
  [Routes.Profile]: icHome,
};
