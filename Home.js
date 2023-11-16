import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, Dimensions, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import { storeContext } from './StoreProvider';

function Home() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [suggestions, setSuggestions] = useState([]);
  const navigation = useNavigation(); 
  const width = Dimensions.get('window').width;
  const [store, dispatch] = useContext(storeContext);

  const handleSearch = (text) => { 
    setSearchQuery(text);
    const filteredSuggestions = store.nombre.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleShowDetails = (item) => {
    navigation.navigate('Detalle', { item });
  };

  return (
    <ScrollView style={styles.showsContainer}>
      <View style={styles.section}>
        <Text style={styles.sectionShowTitle}>Shows</Text>
      </View>

      <Carousel
        data={store.shows}
        autoplay={true}
        loop={true}
        sliderWidth={width}
        itemWidth={width - 40}
        renderItem={({ item }) => (
          <View>
            <Pressable onPress={() => handleShowDetails(item)}>
              <Image
                source={{ uri: item.image }}
                style={styles.showsImage}
              />
            </Pressable>
          </View>  
        )}
      />

      <View style={styles.sectionButton}>
        <Button
          style={styles.button}
          title="Más shows..."
          color={'white'}
          onPress={() => navigation.navigate('ListadoShows')} 
        />
      </View>

      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Busca un restaurante/show..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {suggestions.length > 0 && (
          <ScrollView style={styles.suggestionsScrollView}>
            {suggestions.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setSearchQuery(item.title);
                  handleShowDetails(item);
                }}
              >
                <Text style={styles.autocompleteItem}>{item.title}</Text>
              </Pressable>
            ))}
          </ScrollView>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionRestaurantTitle}>Restaurantes</Text>
      </View>

      
      <ScrollView horizontal={true} style={styles.restaurantsContainer}>
        {store.restaurants.map((item, index) => (
          <Pressable key={index} onPress={() => handleShowDetails(item)}>
            <Image
              source={{ uri: item.image }}
              style={styles.restaurantsImage}
            />
          </Pressable>
        ))}
        <View style={styles.button}>
          <Button
            title="Más"
            onPress={() => navigation.navigate('ListadoRestaurants')}
            color="white"
            style={styles.button}
          />
        </View>
      </ScrollView>

      <Text style={styles.showTitle}></Text>
        <View style={styles.buttonAll}>
        <Button
          title="Ver todos los restaurantes y shows..."
          color={'white'}
          onPress={() => navigation.navigate('ListadoCompleto')} 
        />
        </View>
    </ScrollView>
    
  );
}


const styles = StyleSheet.create({ 
  searchSection: {
    padding: 20,
    position: 'relative',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 0,
  },
  suggestionsScrollView: {
    maxHeight: 35,
    borderWidth: 0.2,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  section: {
    backgroundColor: 'white',
    padding: 10,
  },
  sectionButton: {
    backgroundColor: '#73B5CC',
    padding: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  sectionShowTitle: {
    color: "grey",
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  sectionRestaurantTitle: {
    color: "grey",
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: -50,
  },
  showTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  searchSection: {
    padding: 20,  
    paddingVertical: 50,
    marginTop: -40,
    marginBottom: 10,
  },
  showsContainer: {
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'white',
  },
  restaurantsContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 5,
    marginTop: -20,
  },
  showsImageContainer: {
    padding: 5,
  },
  showsImage: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    borderRadius: 20,
  },
  restaurantsImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 5,
  },
  autocompleteItem: {
    fontSize: 10,
    padding: 10, 
  },
  button: {
    backgroundColor: '#73B5CC',
    padding: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonAll: {
    backgroundColor: '#B161EC',
    padding: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default Home;
