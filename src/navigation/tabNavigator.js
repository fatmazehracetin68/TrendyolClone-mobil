import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CART,
  FAVORİTES,
  HOMESCREEN,
  PROFİLE,
  TRENDYOLGO,
} from '../utils/routes';
import TrendyolGo from '../screens/trendyolGo';
import Favorite from '../screens/favorite';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import TabIcon from '../components/routes/tabIcon';
import appColors from '../theme/colors';
import Home from '../screens/home';

export default function tabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <TabIcon
              name={route.name}
              size={size}
              color={color}
              focused={focused}
            />
          );
        },

        tabBarActiveTintColor: appColors.PRIMARY,
        tabBarInactiveTintColor: appColors.GRAY,
      })}>
      <Tab.Screen name={HOMESCREEN} component={Home} />
      <Tab.Screen name={TRENDYOLGO} component={TrendyolGo} />
      <Tab.Screen name={FAVORİTES} component={Favorite} />
      <Tab.Screen name={CART} component={Cart} />
      <Tab.Screen name={PROFİLE} component={Profile} />
    </Tab.Navigator>
  );
}
