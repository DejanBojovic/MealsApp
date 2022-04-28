import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import favoritesReducer from './reducers/favoritesReducer';

const store = createStore(favoritesReducer, applyMiddleware(thunk));

export default store;

// logika u helper metode -
// drugacija struktura store-a -
// vise js metoda umesto loop-a -
// stavi switch -
// uvek spreaduj state kad ga vracas -
