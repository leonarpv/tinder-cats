import React from 'react';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';
import Cat from '../../../../domain/entities/Cat';
import xImage from '../../../../app/assets/xImage.png';
import matchImage from '../../../../app/assets/matchImage.png';
import {white} from '../../../utils/colors';

const ButtonContainer = styled.View`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;
const ButtonVote = styled.TouchableOpacity`
  background-color: ${white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 32px;
  width: 54px;
  height: 54px;
  box-shadow: 0px 10px 16px rgba(191, 191, 192, 0.3);
`;
const ImageContainer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export enum VoteType {
  Match = 1,
  Next = 0,
}
export interface VoteAction {
  type: VoteType;
  image_id: string;
}
const VoteButtons = ({
  cat,
  onPressVote,
}: {
  cat: Cat;
  onPressVote: ({type, image_id}: VoteAction) => void;
}) => {
  return (
    <ButtonContainer>
      <ButtonVote
        onPress={() =>
          onPressVote({type: VoteType.Next, image_id: cat.reference_image_id})
        }>
        <ImageContainer>
          <Image source={xImage} />
        </ImageContainer>
      </ButtonVote>
      <ButtonVote
        onPress={() =>
          onPressVote({type: VoteType.Match, image_id: cat.reference_image_id})
        }>
        <ImageContainer>
          <Image source={matchImage} />
        </ImageContainer>
      </ButtonVote>
    </ButtonContainer>
  );
};

export default VoteButtons;
