import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AllProduct from '../screens/products';

export default function ForYou() {
  const mark = [
    'ALTINYILDIZ CLASSICS',
    'Karaca',
    'DeFacto',
    'Lufian',
    'U.S POLO',
    'Koton',
    'TEFAL',
  ];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const request = await fetch('https://fakestoreapi.com/products', {
        method: 'GET',
      });

      if (request.ok) {
        const response = await request.json();
        console.log(response);
        setCategories(response);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Sana Özel Markalar</Text>
        <AllProduct />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {mark.map((item, index) => (
          <TouchableOpacity>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              style={styles.images}
              source={{
                uri: category.image,
              }}
            />
            <Text style={styles.imageText}>{category.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D5B9FF',
    padding: 3,
    marginTop: 10,
    borderRadius: 5,
  },
  text: {
    border: 3,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    margin: 3,
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  imageContainer: {
    padding: 5,
    gap: 5,
    width: 120,
    height: 180,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  imageText: {fontSize: 12, marginBottom: 5},
});
