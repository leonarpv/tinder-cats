import {StyleSheet} from 'react-native';
import {red, black} from '../../../utils/colors';

const iconSize = 20;

export default StyleSheet.create({
  baseImage: {
    tintColor: red,
    height: iconSize,
    width: iconSize,
    resizeMode: 'contain',
  },
  unFocusedImage: {
    tintColor: black,
  },
});
