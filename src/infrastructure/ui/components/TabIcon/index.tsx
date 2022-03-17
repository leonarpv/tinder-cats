import React from 'react';
import {Image} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {NAV_ICONS} from '../../../../app/navigation/routes';

function TabIcon() {
  const route = useRoute();
  return <Image source={NAV_ICONS[route.name]} />;
}

export default TabIcon;
