import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Detalle from './Detalle'; 
import ListadoShows from './ListadoShows'; 
import ListadoRestaurants from './ListadoRestaurants'; 
import ListadoCompleto from './ListadoCompleto';
import StoreProvider from './StoreProvider';

const Stack = createStackNavigator();

function App() {
  return (
    <StoreProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalle" component={Detalle} />
        <Stack.Screen name="ListadoShows" component={ListadoShows} />
        <Stack.Screen name="ListadoRestaurants" component={ListadoRestaurants} />
        <Stack.Screen name="ListadoCompleto" component={ListadoCompleto} />
      </Stack.Navigator>
    </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
