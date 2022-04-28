import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import ResultDetail from './ResultDetail';

const ResultsList = ({results, title}) => {
  return (
    <View>
      {results.length === 0 ? null : (
        <>
          <Text style={styles.title}>{title}</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={results}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ResultDetail data={item} />}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
});

export default ResultsList;
