import {View, Text, FlatList} from 'react-native';
import React from 'react';
import widgets from '../../widgets/widgets.json';
import Categories from '../../widgets/categories';
import BestSeller from '../../widgets/bestSeller';
import ForYou from '../../widgets/forYou';

export default function Home() {
  const widgetItem = ({item}) => {
    switch (item.name) {
      case 'categories':
        return <Categories item={item} />;
      case 'bestSeller':
        return <BestSeller item={item} />;
      case 'categories':
      case 'forYou':
        return <ForYou item={item} />;
    }
  };
  return (
    <View style={{padding: 7}}>
      <FlatList data={widgets} renderItem={widgetItem} />
    </View>
  );
}
