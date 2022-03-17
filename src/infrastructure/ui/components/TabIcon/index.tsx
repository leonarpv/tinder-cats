import React from 'react';
import {Image, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {NAV_ICONS} from '../../../../app/navigation/routes';
import styled from 'styled-components';
const ImageContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ImageItem = styled.Image`
  height: 20;
  width: 20;
`;
function TabIcon() {
  const route = useRoute();
  console.log({route});
  return (
    <ImageContainer>
      <ImageItem source={NAV_ICONS[route.name]} />
    </ImageContainer>
  );
}

export default TabIcon;
