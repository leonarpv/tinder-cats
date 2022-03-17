import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createRef} from 'react';
import {mainBackground} from '../../infrastructure/utils/colors';
import CatsNavigator from './navigator';
import Home from '../../infrastructure/ui/screens/Home';
import TabNavigator from './tabNavigator';
import {StatusBar} from 'react-native';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <CatsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
