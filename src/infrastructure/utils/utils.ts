import {Platform, StatusBar, Dimensions} from 'react-native';
const windowDimensions = Dimensions.get('window');
export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;
const screenDimensions = Dimensions.get('screen');
export const SCREEN_HEIGHT = screenDimensions.height;
export const SCREEN_WIDTH = screenDimensions.width;
