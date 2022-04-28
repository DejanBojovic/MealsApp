import addItemHelper from './helpers/addItemHelper';
import removeItemHelper from './helpers/removeItemHelper';

import actionType from '../actions/type';

const initialState = {favorites: []};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.add:
      return {
        ...state,
        favorites: addItemHelper([...state.favorites], action.payload),
      };
    case actionType.remove:
      return {
        ...state,
        favorites: removeItemHelper([...state.favorites], action.payload),
      };
    case actionType.replace:
      return {...state, favorites: [...action.payload]};
    default:
      return state;
  }
};

export default favoritesReducer;
