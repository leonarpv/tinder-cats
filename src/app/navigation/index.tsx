import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createRef} from 'react';
import {mainBackground} from '../../infrastructure/utils/colors';
import CatsNavigator from './navigator';

const AppNavigator = () => {
  const navigationRef = createRef<NavigationContainerRef>();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: mainBackground,
    },
  };

  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
      <CatsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
