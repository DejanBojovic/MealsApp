export default (favorites, payload) => {
  if (!favorites.find(el => el === payload)) {
    return [...favorites, payload];
  } else {
    return [...favorites];
  }
};
