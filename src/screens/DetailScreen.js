import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import FavoriteButton from '../components/FavoriteButton';

import yelp from '../api/yelp';

const DetailScreen = () => {
  const [data, setData] = useState(null);

  const route = useRoute();
  const id = route.params.id;

  const getResult = async () => {
    const res = await yelp.get(`/${id}`);
    setData(res.data);
  };

  useEffect(() => {
    getResult();
  }, []);

  if (!data) {
    return (
      <ActivityIndicator style={{marginTop: 60}} size="large" color="#fc8803" />
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{data.name}</Text>
        <FavoriteButton id={id} />
      </View>
      <View style={styles.infoContainer}>
        <Text>
          <Text style={styles.infoBold}>Adress:</Text> {data.location.address1}
        </Text>
        <Text>
          <Text style={styles.infoBold}>City:</Text> {data.location.city}
        </Text>
        <Text>
          <Text style={styles.infoBold}>Contact phone:</Text> {data.phone}
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.photos}
        keyExtractor={item => item}
        renderItem={({item}) => {
          return <Image style={styles.img} source={{uri: item}} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
  },
  titleContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#fc8803',
  },
  img: {
    height: 300,
    width: '100%',
    borderRadius: 12,
    marginVertical: 12,
  },
  infoBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailScreen;
