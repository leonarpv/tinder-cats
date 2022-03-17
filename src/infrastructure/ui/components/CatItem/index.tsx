import React from 'react';
import styled from 'styled-components/native';
import CatSummary from '../CatSummary';
import Cat from '../../../../domain/entities/Cat';
import {graphsGray} from '../../../utils/colors';
import placeHolder from '../../../../app/assets/cat_place.png';
import {useState} from 'react';

const ItemContainer = styled.View`
  display: flex;
`;
const ImageElement = styled.Image`
  width: 100%;
  height: 446px;
  border-radius: 16px;
`;
const ImageElementPlaceHolder = styled.View`
  width: 100%;
  height: 446px;
  border-radius: 16px;
  background-color: ${graphsGray};
`;
const Summary = styled.View`
  z-index: 1;
  position: absolute;
  bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;
const place =
  'https://thumbs.dreamstime.com/b/cartoon-vector-business-cat-holding-empty-white-paper-hands-board-successful-businessman-placeholder-illustration-isolated-173032315.jpg';
const CatItem = ({cat}: {cat: Cat}) => {
  const {image, ...restProps} = cat;

  return (
    <ItemContainer>
      <ImageElement
        resizeMode="cover"
        key={`${cat.internalId}_${cat.id}`}
        source={{
          uri: image?.url || place,
        }}
      />

      <Summary>
        <CatSummary {...restProps} />
      </Summary>
    </ItemContainer>
  );
};

export default CatItem;
