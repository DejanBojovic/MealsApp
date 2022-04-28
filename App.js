import 'react-native-gesture-handler';

import React from 'react';

import {Provider} from 'react-redux';
import Router from './src/router/Router';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
