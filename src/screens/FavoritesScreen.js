import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import yelp from '../api/yelp';
import firebase from '../api/firebase';

import ResultDetail from '../components/ResultDetail';

const FavoritesScreen = () => {
  const favorites = useSelector(state => state.favorites);
  const [favInfo, setFavInfo] = useState([]);

  const getFavorites = () => {
    favorites.forEach(async el => {
      const res = await yelp.get(`/${el}`);
      setFavInfo(prevState => [...prevState, res.data]);
    });
  };

  useEffect(() => {
    setFavInfo([]);
    getFavorites();
  }, [favorites]);

  const saveAllToFirebase = () => {
    firebase.delete('favorites.json');
    firebase.post('favorites.json', JSON.stringify(favorites));
  };

  if (favorites.length === 0) {
    return <Text style={styles.noFav}>NO FAVS!</Text>;
  }

  if (favInfo.length === 0) {
    return (
      <ActivityIndicator style={{marginTop: 50}} size="large" color="#fc8803" />
    );
  }

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.saveBtn} onPress={saveAllToFirebase}>
        <Text style={styles.btnText}>Save All Favorites</Text>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={favInfo}
        renderItem={({item}) => {
          return (
            <ResultDetail favPage={true} itemWidth={{width: 320}} data={item} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  saveBtn: {
    width: 300,
    padding: 20,
    backgroundColor: '#fc8803',
    borderRadius: 40,
    marginBottom: 30,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noFav: {
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 22,
    color: 'red',
  },
});

export default FavoritesScreen;
