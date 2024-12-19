import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import appColors from '../theme/colors';
import {Notification, SearchNormal1, Sms} from 'iconsax-react-native';
import {NOTICE, NOTIFICATIONS} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';

export default function Categories() {
  const categori = ['Kategoriler', 'Erkek', 'Kadın', 'Ev & Yaşam', 'Çocuk'];
  const navigation = useNavigation();
  const images = [
    {
      uri: 'https://cdn.dsmcdn.com/ty1616/tr-event-banner/eeff44e6-0305-4601-aebd-4c9d9cea6813tr_3209557.jpeg',
    },
    {
      uri: 'https://cdn.dsmcdn.com/ty1616/tr-event-banner/a74970b5-94c1-48c0-b899-182c2efb7a0btr_3210572.jpeg',
    },
    {
      uri: 'https://cdn.dsmcdn.com/ty1615/tr-event-banner/a4577e49-e14c-41c2-983d-dc859e9c111etr_3210113.jpeg',
    },
  ];
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Aradığınız ürün,kategori,marka yazınız"
          placeholderTextColor="#000000"
          style={{
            backgroundColor: '#cecece',
            padding: 7,
            width: '80%',
            borderRadius: 5,
          }}
        />
        <SearchNormal1
          size="20"
          color="#FF8A65"
          style={{
            position: 'absolute',
            right: 80,
            paddingHorizontal: 15,
            variant: 'Bold',
          }}
        />
        <View style={{flexDirection: 'row', gap: 10, marginLeft: 7}}>
          <Pressable onPress={() => navigation.navigate(NOTICE)}>
            <Sms size="28" color={appColors.BLACK} variant="Outline" />
          </Pressable>
          <Pressable onPress={() => navigation.navigate(NOTIFICATIONS)}>
            <Notification size="28" color={appColors.BLACK} variant="Outline" />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 20,
        }}>
        {categori.map((item, index) => (
          <Text
            style={{
              backgroundColor: 'gray',
              padding: 7,
              border: 3,
              borderRadius: 20,
              color: 'white',
            }}
            key={index}>
            {item}
          </Text>
        ))}
      </View>
      <View style={{width: '100%', height: '200', marginBottom: 10}}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          {images.map((item, index) => (
            <Image
              key={index}
              style={{
                height: 200,
                width: 370,
                resizeMode: 'cover',
                marginRight: 9,
                borderRadius: 5,
              }}
              source={{uri: item.uri}}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}
