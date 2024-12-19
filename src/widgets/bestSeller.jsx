import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import AllProduct from '../screens/products';

export default function BestSeller({item}) {
  const images = [
    {
      uri: 'https://cdn.dsmcdn.com/ty1527/product/media/images/prod/PIM/20240906/13/92eac147-43d7-4a2f-bf24-f10b91142395/1_org_zoom.jpg',
    },
    {
      uri: 'https://cdn.dsmcdn.com/ty1571/prod/QC/20240926/11/87d02816-2831-348d-90d8-0d8b4949518b/1_org_zoom.jpg',
    },
    {
      uri: 'https://cdn.dsmcdn.com/ty1521/product/media/images/prod/QC/20240904/08/7c394d96-737e-3a7b-bb93-28816667f6b1/1_org_zoom.jpg',
    },
    {
      uri: 'https://cdn.dsmcdn.com/ty1476/product/media/images/prod/QC/20240709/05/f112f616-c1db-3953-9b85-b9f6118d32cc/1_org_zoom.jpg',
    },
    {
      uri: 'https://cdn.dsmcdn.com/ty1513/product/media/images/prod/QC/20240805/17/9d6a8d33-2a7f-3332-b518-6a0cba026b77/1_org_zoom.jpg',
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16}}>Çok Satan Kategorilerin</Text>
          <AllProduct />
        </View>

        <Text style={{fontSize: 12}}>
          İlgilendiğin kategorilerin çok satan ürünlerini incele
        </Text>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {images.map((item, index) => (
              <Image
                source={{uri: item.uri}}
                style={{
                  width: 100,
                  height: 150,
                  marginHorizontal: 10,
                  borderRadius: 10,
                }}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#F5A600',
    gap: 4,
    padding: 4,
    borderRadius: 5,
  },
});
