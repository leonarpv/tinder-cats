import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {mainBackground} from '../../../utils/colors';

const BaseContainer = styled(View)`
  background-color: ${mainBackground};
`;
export default function ScreenLayout({children}: {children: React.ReactNode}) {
  return <BaseContainer>{children}</BaseContainer>;
}
