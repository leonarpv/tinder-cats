import React from 'react';
import {Indicator, IndicatorContainer} from '../../../utils/styles';
import CustomText, {TextSize} from '../../components/CustomText';
import ScreenLayout from '../../components/ScreenLayout';

const Profile = () => {
  return (
    <ScreenLayout>
      <IndicatorContainer>
        <Indicator>
          <CustomText size={TextSize.Big}>03</CustomText>
        </Indicator>
      </IndicatorContainer>
    </ScreenLayout>
  );
};

export default Profile;
