import React, {useContext} from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { storeContext } from './StoreProvider';
import { useNavigation } from '@react-navigation/native';

function ListadoCompleto() {

  const [store, dispatch] = useContext(storeContext);
  const navigation = useNavigation();

  const handleCompleteDetails = (item) => {
    navigation.navigate('Detalle', { item });
  };

  return (
    <ScrollView>
      {store.nombre.map((nombre, index) => (
        <View key={index} style={styles.nameItem}>
          <Text style={styles.nameText}>{nombre.title}</Text>
          <View style={styles.nameText}>
          <Pressable onPress={() => handleCompleteDetails(nombre)}>
            <Image
              source={{ uri: nombre.image }}
              style={styles.nameImage}
            />
          </Pressable>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  nameItem: {
    flexDirection: 'row', 
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#A0C9D6', 
    borderRadius: 10,
  },
  nameText: {
    flex: 1, 
    fontSize: 20,
    color: 'white',
  },
  nameImage: {
    width: 100, 
    height: 100,
    marginLeft: 10, 
  },
});

export default ListadoCompleto;