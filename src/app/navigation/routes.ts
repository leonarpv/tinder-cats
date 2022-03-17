import {ImageSourcePropType} from 'react-native';
import icCat from '../assets/cat.png';
import icUser from '../assets/user.png';
import icMessage from '../assets/messageCircle.png';
export const noHeader = {
  headerShown: false,
};
export enum Routes {
  HomeTab = 'HomeTab',
  TabMessaging = 'TabMessaging',
  TabProfile = 'TabProfile',
}

export const NAV_ICONS: {[name: string]: ImageSourcePropType} = {
  [Routes.HomeTab]: icCat,
  [Routes.TabMessaging]: icMessage,
  [Routes.TabProfile]: icUser,
};
