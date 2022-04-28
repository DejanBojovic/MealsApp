export default (favorites, payload) => {
  return favorites.filter(el => el !== payload);
};
