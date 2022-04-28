import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useYelp from '../hooks/useYelp';
import FavoriteActions from '../store/actions';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const {results, error, searchApi} = useYelp();

  const dispatch = useDispatch();

  useEffect(() => {
    searchApi('pasta');
    dispatch(FavoriteActions.getFavorites());
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
      <SearchBar
        term={term}
        onTermSubmit={() => searchApi(term)}
        onTermChange={newTerm => setTerm(newTerm)}
      />

      {error ? <Text>{error}</Text> : null}

      {results.length === 0 ? (
        <ActivityIndicator size="large" color="#fc8803" />
      ) : (
        <>
          <ResultsList
            title="Cost Effective"
            results={results.filter(el => el.price === '$')}
          />
          <ResultsList
            title="Bit Pricier"
            results={results.filter(el => el.price === '$$')}
          />
          <ResultsList
            title="Big Spender"
            results={results.filter(el => el.price === '$$$')}
          />
        </>
      )}
      <View style={styles.bottomFix} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingBottom: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomFix: {
    marginBottom: 40,
  },
});

export default SearchScreen;
