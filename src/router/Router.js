import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigation/TabNavigator';
// import SearchFlow from './StackNavigation/SearchFlow';

const Router = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Router;
