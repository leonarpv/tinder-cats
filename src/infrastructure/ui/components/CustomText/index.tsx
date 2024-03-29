import React from 'react';
import styled from 'styled-components/native';
import {secondaryFontColor} from '../../../utils/colors';

export enum TextSize {
  Big,
  Medium,
  Small,
}

const fontSizes = {
  [TextSize.Big]: '126px',
  [TextSize.Medium]: '16px',
  [TextSize.Small]: '8px',
};
const fontColors = {
  [TextSize.Big]: '126px',
  [TextSize.Medium]: '#434141',
  [TextSize.Small]: '#BFBFC0',
};

const TextContainer = styled.Text<{size: TextSize}>`
  font-size: ${props => fontSizes[props.size]};
  font-weight: 700;
  color: ${props => fontColors[props.size]};
`;
TextContainer.defaultProps = {
  size: TextSize.Medium,
};
interface ICustomText {
  children: string;
  size: TextSize;
}
const CustomText = ({children, ...restProps}: ICustomText) => {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

export default CustomText;
