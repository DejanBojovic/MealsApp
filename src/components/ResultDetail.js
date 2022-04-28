import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FavoriteButton from './FavoriteButton';

const ResultDetail = ({data, itemWidth, favPage = false}) => {
  const {name, image_url, rating, review_count, id} = data;

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: id})}>
      <View style={{...styles.screen, ...itemWidth}}>
        <Image
          style={{...styles.img, ...itemWidth}}
          source={{uri: image_url}}
        />
        <View style={styles.info}>
          <View style={styles.infoText}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.ratings}>
              {rating} Stars, {review_count} Reviews
            </Text>
          </View>
          <FavoriteButton id={id} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 10,
    width: 250,
  },
  img: {
    width: 250,
    height: 150,
    borderRadius: 12,
  },
  info: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    flexShrink: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    width: '100%',
  },
});

export default ResultDetail;
