import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import {mainBackground} from '../../../utils/colors';
import {SCREEN_HEIGHT} from '../../../utils/utils';

const ScreenContainer = styled.View`
  padding: 16px;
  height: ${SCREEN_HEIGHT}px;
  background-color: ${mainBackground};
`;
export default function ScreenLayout({children}: {children: ReactNode}) {
  return <ScreenContainer>{children}</ScreenContainer>;
}
