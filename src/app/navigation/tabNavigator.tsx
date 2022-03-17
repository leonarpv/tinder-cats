import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../infrastructure/ui/screens/Home';
import Messaging from '../../infrastructure/ui/screens/Messaging';
import Profile from '../../infrastructure/ui/screens/Profile';
import {Routes} from './routes';
import {Text, TouchableOpacity} from 'react-native';
import {blue, white, whiteBackground} from '../../infrastructure/utils/colors';
import TabIcon from '../../infrastructure/ui/components/TabIcon';

const Tab = createBottomTabNavigator();
const tabBarOptions = {
  activeTintColor: whiteBackground,

  style: {
    borderTopWidth: 0,
    paddingTop: 5,
  },
};

export const defaultNavOptions = () => ({
  headerStyle: {
    backgroundColor: blue,
  },
  headerBackTitleStyle: {
    color: white,
  },
  headerTitleStyle: {
    color: white,
  },
  headerTintColor: white,
});

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: TabIcon,
        title: '',
      }}>
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={({navigation}) => ({
          tabBarButton: props => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text>Settings</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name={Routes.Messaging}
        component={Messaging}
        options={{
          tabBarButton: (props: any) => <Text>Prueba</Text>,
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarButton: (props: any) => <Text>Prueba</Text>,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
