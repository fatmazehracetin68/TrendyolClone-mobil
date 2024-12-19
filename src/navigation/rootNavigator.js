import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  HOMESCREEN,
  NOTICE,
  NOTIFICATIONS,
  PRODUCTS,
  TABMENU,
} from '../utils/routes';
import tabNavigator from './tabNavigator';
import Notice from '../screens/notice';
import Notifications from '../screens/notifications';
import Products from '../screens/products';

export default function RootNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerBackTitle: 'Geri'}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABMENU}
        component={tabNavigator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={NOTICE}
        component={Notice}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={NOTIFICATIONS}
        component={Notifications}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={PRODUCTS}
        component={Products}
      />
    </Stack.Navigator>
  );
}
