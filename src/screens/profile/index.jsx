import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {
  Clock,
  Notification,
  Message,
  Magicpen,
  Messages2,
  ArrowRotateRight,
  MedalStar,
  Calculator,
  Security,
  MoneyRecive,
} from 'iconsax-react-native';
import appColors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {NOTIFICATIONS} from '../../utils/routes';

export default function Profile() {
  const navigation = useNavigation();
  const list = [
    {text: 'Önceden gezdiklerim', icon: <Clock size="32" color="#ff8a65" />},
    {text: 'İndirim Kuponlarım', icon: <Magicpen size="32" color="#ff8a65" />},
    {text: 'Trendyol Asistan', icon: <Message size="32" color="#ff8a65" />},
    {text: 'Satıcı Mesajlarım', icon: <Messages2 size="32" color="#ff8a65" />},
  ];
  const service = [
    {
      icon: <ArrowRotateRight size="28" color="#2ccce4" />,
      text: 'Paylaş Kazan',
    },
    {icon: <MedalStar size="28" color="#2ccce4" />, text: 'Puan Bakiyesi'},
    {icon: <Calculator size="28" color="#2ccce4" />, text: 'Krediler'},
    {icon: <Security size="28" color="#2ccce4" />, text: 'Trendyol Sigorta'},
    {
      icon: <MoneyRecive size="28" color="#2ccce4" />,
      text: 'Finansal Çözümler',
    },
  ];
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            padding: 10,
          }}>
          <Text
            style={{
              backgroundColor: appColors.PRIMARY,
              width: 50,
              height: 50,
              borderRadius: 100,
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              padding: 10,
            }}>
            FÇ
          </Text>
          <View style={{gap: 5}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Fatma Çetin</Text>
            <Text>abc123@gmail.com</Text>
          </View>
        </View>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: 'white',
            borderRadius: 100,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <Pressable onPress={() => navigation.navigate(NOTIFICATIONS)}>
            <Notification />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 5,
        }}>
        {list.map((item, index) => (
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '25%',
              gap: 5,
              borderLeftColor: 'gray',
              borderLeftWidth: 0.2,
            }}>
            <View>{item.icon}</View>
            <Text style={{textAlign: 'center'}}>{item.text}</Text>
          </View>
        ))}
      </View>

      <View
        style={{
          flexDirection: 'row',
          margin: 8,
          gap: 8,
          backgroundColor: 'white',
          marginTop: 15,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <View
          style={{
            width: '25%',
            backgroundColor: '#45F942',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: '20', fontWeight: 'bold'}}>trendyol</Text>
          <Text style={{color: 'white', fontSize: '20', fontWeight: 'bold'}}>
            pass
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold'}}>Trendyol Pass</Text>
          <Text style={{color: '#328F04'}}>Kalan hakkın:4</Text>
          <Text>Geçerlilik Tarihi:27.12.2024</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'white', margin: 5, borderRadius: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            marginLeft: 8,
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
          }}>
          Hizmetlerim
        </Text>
        {service.map((item, index) => (
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              marginVertical: 5,
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Text>{item.icon}</Text>
            <Text>{item.text}</Text>
          </View>
        ))}
      </View>
    </>
  );
}
