import {Platform} from 'react-native';
import {black} from './colors';

export const baseShadow = {
  shadowColor: black,
  shadowRadius: 6,
  shadowOffset: {width: 0, height: 4},
  ...Platform.select({
    ios: {
      shadowOpacity: 0.25,
    },
    android: {
      shadowOpacity: 0.25,
      elevation: 25,
    },
  }),
};
