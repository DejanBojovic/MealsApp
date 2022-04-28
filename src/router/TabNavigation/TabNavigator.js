import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchFlow from '../StackNavigation/SearchFlow';
import FavoritesFlow from '../StackNavigation/FavoritesFlow';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator defaultScreenOptions={{title: 'Business Search'}}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#fc8803',
          tabBarIcon: () => {
            return (
              <View>
                <Image
                  resizeMode="contain"
                  style={{width: 25, height: 25}}
                  source={require('./../../assets/home.png')}
                />
              </View>
            );
          },
        }}
        name="Search"
        component={SearchFlow}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#fc8803',
          tabBarIcon: () => {
            return (
              <View>
                <Image
                  resizeMode="contain"
                  style={{width: 25, height: 25}}
                  source={require('./../../assets/star.png')}
                />
              </View>
            );
          },
        }}
        name="Favorites"
        component={FavoritesFlow}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
