import React from 'react';
import styled from 'styled-components/native';
import CatSummary from '../CatSummary';
import Cat from '../../../../domain/entities/Cat';

const ItemContainer = styled.View`
  display: flex;
`;
const ImageElement = styled.Image`
  width: 100%;
  height: 446px;
  border-radius: 16px;
`;
const Summary = styled.View`
  z-index: 1;
  position: absolute;
  bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;
const CatItem = ({cat, key}: {cat: Cat; key: any}) => {
  const {image, ...restProps} = cat;

  return (
    <ItemContainer key={key}>
      {image !== 'undefined' && (
        <ImageElement
          key={`${cat.internalId}_${cat.id}`}
          source={{uri: image.url}}
        />
      )}
      <Summary>
        <CatSummary {...restProps} />
      </Summary>
    </ItemContainer>
  );
};

export default CatItem;
