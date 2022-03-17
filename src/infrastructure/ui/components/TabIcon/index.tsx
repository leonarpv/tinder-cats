import React from 'react';
import {useRoute} from '@react-navigation/native';
import {NAV_ICONS} from '../../../../app/navigation/routes';
import styled from 'styled-components';
const ImageContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ImageItem = styled.Image`
  height: 20px;
  width: 20px;
`;
function TabIcon() {
  const route = useRoute();

  return (
    <ImageContainer>
      <ImageItem source={NAV_ICONS[route.name]} />
    </ImageContainer>
  );
}

export default TabIcon;
