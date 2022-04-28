import firebase from '../../api/firebase';
import actionType from './type';

export const setFavorites = payload => {
  return {
    type: actionType.replace,
    payload,
  };
};

export const getFavorites = () => {
  return async (dispatch, getState) => {
    const res = await firebase.get('/favorites.json');

    const favorites = [];
    for (let key in res.data) {
      favorites.push(...res.data[key]);
    }

    dispatch(setFavorites(favorites));
  };
};

// akcija => asinhroni kod => data => redux store
