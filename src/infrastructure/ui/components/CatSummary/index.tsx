import React from 'react';
import styled from 'styled-components/native';
import {white} from '../../../utils/colors';
import CustomText, {TextSize} from '../CustomText';

const SummaryContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${white};
  width: 100%;
  padding: 16px;
`;

const Section = styled.View`
  display: flex;
  flex-direction: column;
`;

const CatSummary = ({
  name,
  origin,
  affection_level,
}: {
  name: string;
  origin: string;
  affection_level: string;
}) => {
  return (
    <SummaryContainer>
      <Section>
        <CustomText size={TextSize.Medium}>{name}</CustomText>
        <CustomText size={TextSize.Small}>{origin}</CustomText>
      </Section>
      <Section>
        <CustomText size={TextSize.Medium}>{affection_level}</CustomText>
      </Section>
    </SummaryContainer>
  );
};

export default CatSummary;
