import {View, Text} from 'react-native';
import React from 'react';
import {
  Heart,
  Home,
  Profile,
  ShoppingCart,
  TriangleLogo,
} from 'iconsax-react-native';
import {
  CART,
  FAVORİTES,
  HOMESCREEN,
  PROFİLE,
  TRENDYOLGO,
} from '../../utils/routes';

const TabIcon = ({name, size, color, focused}) => {
  switch (name) {
    case HOMESCREEN:
      return (
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case TRENDYOLGO:
      return (
        <TriangleLogo
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case FAVORİTES:
      return (
        <Heart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case CART:
      return (
        <ShoppingCart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case PROFİLE:
      return (
        <Profile
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    default:
      return (
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
  }
};
export default TabIcon;
