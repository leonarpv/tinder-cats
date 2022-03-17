import React from 'react';
import styled from 'styled-components/native';
import {white} from '../../../utils/colors';

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

const Name = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
const Origin = styled.Text`
  font-size: 8px;
  font-weight: 700;
`;
const Affection = styled.Text`
  font-size: 20px;
  font-weight: 700;
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
        <Name>{name}</Name>
        <Origin>{origin}</Origin>
      </Section>
      <Section>
        <Affection>{affection_level}</Affection>
      </Section>
    </SummaryContainer>
  );
};

export default CatSummary;
