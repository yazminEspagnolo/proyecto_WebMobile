import React, {useContext} from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { storeContext } from './StoreProvider';
import { useNavigation } from '@react-navigation/native';

function ListadoShows() {

  const [store, dispatch] = useContext(storeContext);
  const navigation = useNavigation();

  const handleShowDetails = (item) => {
    navigation.navigate('Detalle', { item });
  };

  return (
    <ScrollView>
      {store.shows.map((show, index) => (
        <View key={index} style={styles.showItem}>
          <Text style={styles.showText}>{show.title}</Text>
          <View style={styles.showText}>
          <Pressable onPress={() => handleShowDetails(show)}>
            <Image
              source={{ uri: show.image }}
              style={styles.showImage}
            />
          </Pressable>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  showItem: {
    flexDirection: 'row', 
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#A0C9D6', 
    borderRadius: 10,
  },
  showText: {
    flex: 1, 
    fontSize: 20,
    color: 'white',
  },
  showImage: {
    width: 100, 
    height: 100,
    marginLeft: 10, 
  },
});

export default ListadoShows;