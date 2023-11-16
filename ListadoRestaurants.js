import React, {useContext} from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { storeContext } from './StoreProvider';
import { useNavigation } from '@react-navigation/native';

function ListadoRestaurants() {

  const [store, dispatch] = useContext(storeContext);
  const navigation = useNavigation();
  const handleRestaurantDetails = (item) => {
    navigation.navigate('Detalle', { item });
  };

  return (
    <ScrollView>
      {store.restaurants.map((restaurant, index) => (
        <View key={index} style={styles.restaurantItem}>
          <Text style={styles.restaurantText}>{restaurant.title}</Text>
          <View style={styles.restaurantText}>
          <Pressable onPress={() => handleRestaurantDetails(restaurant)}>
            <Image
              source={{ uri: restaurant.image }}
              style={styles.restaurantImage}
            />
          </Pressable>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  restaurantItem: {
    flexDirection: 'row', 
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#A0C9D6', 
    borderRadius: 10,
  },
  restaurantText: {
    flex: 1, 
    fontSize: 20,
    color: 'white',
  },
  restaurantImage: {
    width: 100, 
    height: 100,
    marginLeft: 10, 
  },
});

export default ListadoRestaurants;
