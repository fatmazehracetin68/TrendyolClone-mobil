import {View, Text} from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';

export default function AllProduct() {
  return (
    <View>
      <Text style={{color: appColors.WHITE, fontWeight: 'bold'}}>
        Tüm Ürünler
      </Text>
    </View>
  );
}
