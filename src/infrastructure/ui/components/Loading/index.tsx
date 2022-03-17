import React from 'react';
import {Indicator, IndicatorContainer} from '../../../utils/styles';

import CustomText, {TextSize} from '../CustomText';
import ScreenLayout from '../ScreenLayout';

const Loading = () => {
  return (
    <ScreenLayout>
      <IndicatorContainer>
        <Indicator>
          <CustomText size={TextSize.Medium}>Loading...</CustomText>
        </Indicator>
      </IndicatorContainer>
    </ScreenLayout>
  );
};

export default Loading;
