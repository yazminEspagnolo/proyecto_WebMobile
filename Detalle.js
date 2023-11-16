import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

function Detalle() {
  const route = useRoute();
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.backgroundImage} blurRadius={5} />
      <View style={styles.overlay}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 800,
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    marginTop: 30,
    width: 350, 
    height: 350, 
    borderRadius: 10, 
    marginBottom: 20,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#61dafb',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
export default Detalle;
