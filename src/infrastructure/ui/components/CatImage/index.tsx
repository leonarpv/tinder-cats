import React from 'react';
import styled from 'styled-components/native';
import {ViewStyle, StyleProp} from 'react-native';
import FastImage, {Source, FastImageProps} from 'react-native-fast-image';
import {useState} from 'react';

const ImageComponent = styled(FastImage)``;
const ImageContainer = styled.View``;
const PlaceholderImage = styled.View``;

interface Props extends Omit<FastImageProps, 'style'> {
  source: Source;
  style?: StyleProp<ViewStyle>;
}

export function CatsImage({source, onError, onLoadEnd, ...props}: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleLoaded = () => {
    onLoadEnd?.();
    setLoading(false);
  };

  const handleError = () => {
    onError?.();
    setError(true);
  };

  return (
    <ImageContainer>
      {(loading || error || !source) && <PlaceholderImage />}
      <ImageComponent
        {...props}
        source={source}
        onError={handleError}
        onLoadEnd={handleLoaded}
      />
    </ImageContainer>
  );
}
