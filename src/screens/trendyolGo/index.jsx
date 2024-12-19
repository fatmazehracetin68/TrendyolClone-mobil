import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {ArrowCircleRight} from 'iconsax-react-native';
ArrowCircleRight;

export default function TrendyolGo() {
  const group = [
    {
      text: 'Hemen Gelsin',
      icon: <ArrowCircleRight size="32" color="#f47373" variant="Bold" />,
      uri: 'https://cdn.dsmcdn.com/mrktng/seo/hizlimarketlanding22-4/sepet1.png',
      backgroundColor: '#FDF9E2',
    },
    {
      text: 'Dilediğin Saatte Gelsin',
      icon: <ArrowCircleRight size="32" color="#f47373" variant="Bold" />,
      uri: 'https://st3.depositphotos.com/4326917/14549/v/450/depositphotos_145490463-stock-illustration-alarm-clock-sign-vector-green.jpg',
      backgroundColor: '#D1FAD8',
    },
    {
      text: 'Semt esnafının indirimleri keşfet',
      icon: <ArrowCircleRight size="32" color="#f47373" variant="Bold" />,
      uri: 'https://w7.pngwing.com/pngs/288/368/png-transparent-red-and-white-shop-illustration-text-brand-illustration-shop-text-retail-rectangle-thumbnail.png',
      backgroundColor: '#FFE3F2',
    },
  ];
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
          marginTop: 10,
        }}>
        <View
          style={{
            width: 150,
            height: 250,
            backgroundColor: '#D3F9CF',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 25}}>trendyol</Text>
            <Text style={{color: 'orange', fontWeight: 'bold'}}>
              hızlı market
            </Text>
          </View>

          <Image
            style={{
              width: 100,
              height: 80,
              resizeMode: 'cover',
              marginVertical: 20,
            }}
            source={{
              uri: 'https://cdn.dsmcdn.com/mrktng/seo/hizlimarketlanding22-4/sepet1.png',
            }}
          />
          <Text style={{backgroundColor: 'green', padding: 5, color: 'white'}}>
            Market siparişini ver!
          </Text>
        </View>
        <View
          style={{
            width: 150,
            height: 250,
            backgroundColor: '#F7D8C4',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 25}}>trendyol</Text>
            <Text style={{color: 'orange', fontWeight: 'bold'}}>yemek</Text>
          </View>

          <Image
            style={{
              width: 150,
              height: 80,
              resizeMode: 'cover',
              marginVertical: 20,
            }}
            source={{
              uri: 'https://firsatatikla.com/wp-content/uploads/2022/12/front-view-yummy-meat-cheeseburger-with-french-fries-dark-background-dinner-burgers-snack-fast-food-sandwich-salad-dish-toast-scaled.jpg',
            }}
          />
          <Text style={{backgroundColor: 'orange', padding: 5, color: 'white'}}>
            Yemek siparişini ver!
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 150,
          backgroundColor: '#D5FCFF',
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
          borderRadius: 10,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            marginVertical: 20,
            marginHorizontal: 10,
            position: 'relative',
          }}>
          <Text style={{width: 100}}>Su ve damacana</Text>
          <Text
            style={{
              backgroundColor: '#14D6FF',
              padding: 5,
              borderRadius: 5,
              color: 'white',
              textWeight: 'bold',
            }}>
            Su siparişi ver!
          </Text>
        </View>
        <Image
          style={{
            width: 170,
            height: 150,
            resizeMode: 'cover',
          }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLRIGlU8vPlN15o3oWToWAYHnYJkbjh3YYSQ&sg',
          }}
        />
      </View>

      <View>
        <Text style={{margin: 10}}>Hızlı Market</Text>
        <ScrollView horizontal={true}>
          {group.map((item, index) => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: item.backgroundColor,
                marginHorizontal: 10,
                borderRadius: 10,
                width: 150,
                height: 120,
              }}>
              <View
                style={{
                  width: 80,
                  justifyContent: 'space-between',
                  marginVertical: 8,
                  padding: 2,
                }}>
                <Text style={{width: 100, fontSize: 12, margin: 8}}>
                  {item.text}
                </Text>
                <Text>{item.icon}</Text>
              </View>
              <Image
                style={{width: 50, height: 50, marginTop: 60}}
                source={{uri: item.uri}}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
