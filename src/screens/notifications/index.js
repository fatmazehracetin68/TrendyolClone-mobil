import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Notification, Warning2} from 'iconsax-react-native';

export default function Notifications() {
  const [selectedItem, setSelectedItem] = useState(null);
  const list = ['Tümü', 'Siparişlerim', 'Kuponlarım', 'Kampanyalarım'];
  const handlePress = item => {
    setSelectedItem(item);
  };
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}>
        Bildirimlerim
      </Text>

      <ScrollView horizontal={true}>
        {list.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(item)}
            style={[styles.item, selectedItem === item && styles.selectedItem]}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#cdcdcd',
        }}>
        <Warning2 size="32" color="#FF8A65" variant="Bold" />
        <Text style={{fontSize: 12}}>6 adet duyurun bulunmaktadır</Text>
        <Text
          style={{
            fontSize: 10,
            marginLeft: 10,
            color: '#FF8A65',
            fontWeight: 'bold',
          }}>
          Hemen incele
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            padding: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'orange',
              padding: 8,
              borderRadius: 100,
            }}>
            <Notification />
          </View>

          <Text style={{fontSize: 12}}>
            Siparişini teslim ettik.Güzel günlerde kullanmanı dileriz.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            padding: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'orange',
              padding: 8,
              borderRadius: 100,
            }}>
            <Notification />
          </View>
          <Text style={{fontSize: 12}}>
            963324 numaralı siparişini kargoya verdik.kargo takibini hesabından
            yapabilirsin.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            padding: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'orange',
              padding: 8,
              borderRadius: 100,
            }}>
            <Notification />
          </View>
          <Text style={{fontSize: 12}}>
            963456 numaralı yemek siparişini teslim ettik.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            padding: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'orange',
              padding: 8,
              borderRadius: 100,
            }}>
            <Notification />
          </View>

          <Text style={{fontSize: 12}}>
            Siparişini teslim ettik.Güzel günlerde kullanmanı dileriz.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            padding: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'orange',
              padding: 8,
              borderRadius: 100,
            }}>
            <Notification />
          </View>
          <Text style={{fontSize: 12}}>
            963324 numaralı siparişini kargoya verdik.kargo takibini hesabından
            yapabilirsin.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            padding: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'orange',
              padding: 8,
              borderRadius: 100,
            }}>
            <Notification />
          </View>
          <Text style={{fontSize: 12}}>
            963456 numaralı yemek siparişini teslim ettik.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 5,
    padding: 8,
    borderRadius: 10,
    marginVertical: 8,
  },
  selectedItem: {
    backgroundColor: 'orange', // Seçilen öğenin arka plan rengi
  },
});
