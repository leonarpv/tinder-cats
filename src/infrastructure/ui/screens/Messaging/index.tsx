import React from 'react';
import CustomText, {TextSize} from '../../components/CustomText';
import ScreenLayout from '../../components/ScreenLayout';

const Messaging = () => {
  return (
    <ScreenLayout>
      <CustomText size={TextSize.Big}>02</CustomText>
    </ScreenLayout>
  );
};

export default Messaging;
