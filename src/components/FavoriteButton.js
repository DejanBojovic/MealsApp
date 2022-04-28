import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useSelector, dispatch, useDispatch} from 'react-redux';

const FavoriteButton = ({id}) => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  let btn = (
    <TouchableOpacity
      style={{...styles.btn, backgroundColor: '#fc8803'}}
      onPress={() => dispatch({type: 'add', payload: id})}>
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  );
  if (favorites.find(el => el === id)) {
    btn = (
      <TouchableOpacity
        style={{...styles.btn, backgroundColor: 'red'}}
        onPress={() => dispatch({type: 'remove', payload: id})}>
        <Text style={styles.icon}>-</Text>
      </TouchableOpacity>
    );
  }

  return btn;
};

const styles = StyleSheet.create({
  btn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FavoriteButton;
