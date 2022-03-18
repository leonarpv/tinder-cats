import React from 'react';
import {useRoute} from '@react-navigation/native';
import {NAV_ICONS} from '../../../../app/navigation/routes';
import styled from 'styled-components';
import {Image} from 'react-native';
import styles from './styles';
const ImageContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface Props {
  focused: boolean;
}
function TabIcon({focused}: Props) {
  const route = useRoute();

  return (
    <ImageContainer>
      <Image
        style={[styles.baseImage, !focused && styles.unFocusedImage]}
        source={NAV_ICONS[route.name]}
      />
    </ImageContainer>
  );
}

export default TabIcon;
