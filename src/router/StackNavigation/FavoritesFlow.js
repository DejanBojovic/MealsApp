import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FavoritesScreen from '../../screens/FavoritesScreen';
import DetailScreen from '../../screens/DetailScreen';

const Stack = createStackNavigator();

const FavoritesFlow = () => {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesFlow;
