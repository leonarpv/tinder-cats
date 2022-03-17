import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../infrastructure/ui/screens/Home';
import Messaging from '../../infrastructure/ui/screens/Messaging';
import Profile from '../../infrastructure/ui/screens/Profile';
import {Routes} from './routes';
import TabIcon from '../../infrastructure/ui/components/TabIcon';
import {baseShadow} from '../../infrastructure/utils/shadows';
export type HomeTabStackParamList = {
  [Routes.HomeTab]: {};
  [Routes.TabMessaging]: {};
  [Routes.TabProfile]: {};
};
const Tab = createBottomTabNavigator<HomeTabStackParamList>();

const screenOptions = () => ({
  tabBarIcon: TabIcon,
  title: '',
});
const internalScreenOptions = () => ({
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 32,
    height: 44,
    elevation: 0,
    left: 100,
    right: 100,
    borderRadius: 25,
    padding: 20,
    ...baseShadow,
  },
});
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={Routes.HomeTab}
        options={internalScreenOptions}
        component={Home}
      />
      <Tab.Screen
        name={Routes.TabMessaging}
        options={internalScreenOptions}
        component={Messaging}
      />
      <Tab.Screen
        name={Routes.TabProfile}
        options={internalScreenOptions}
        component={Profile}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
