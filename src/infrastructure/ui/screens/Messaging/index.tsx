import React from 'react';
import {Indicator, IndicatorContainer} from '../../../utils/styles';

import CustomText, {TextSize} from '../../components/CustomText';
import ScreenLayout from '../../components/ScreenLayout';

const Messaging = () => {
  return (
    <ScreenLayout>
      <IndicatorContainer>
        <Indicator>
          <CustomText size={TextSize.Big}>02</CustomText>
        </Indicator>
      </IndicatorContainer>
    </ScreenLayout>
  );
};

export default Messaging;
