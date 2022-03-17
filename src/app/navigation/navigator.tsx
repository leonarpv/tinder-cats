import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {noHeader, Routes} from './routes';
import TabNavigator from './tabNavigator';

type AppStackParamList = {
  [Routes.Home]: {};
};

const Stack = createStackNavigator<AppStackParamList>();

const CatsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Home}
        component={TabNavigator}
        options={noHeader}
      />
    </Stack.Navigator>
  );
};

export default CatsNavigator;
