import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchScreen from '../../screens/SearchScreen';
import DetailScreen from '../../screens/DetailScreen';

import TabNavigator from '../TabNavigation/TabNavigator';

const Stack = createStackNavigator();

const SearchFlow = () => {
  return (
    <Stack.Navigator initialRouteName="tab">
      {/* <Stack.Screen name="tab" component={TabNavigator} /> */}
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default SearchFlow;
