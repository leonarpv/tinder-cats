import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import Home from '../../infrastructure/ui/screens/Home'
import Messaging from '../../infrastructure/ui/screens/Messaging'
import Profile from '../../infrastructure/ui/screens/Profile'

type AppStackParamList = {
  [Routes.Home]: {};
  [Routes.Messaging]: {};
  [Routes.Profile]: {};
};

const Stack = createStackNavigator<AppStackParamList>();

const CatsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Messaging} component={Messaging} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default CatsNavigator;
