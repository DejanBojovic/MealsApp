import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={onTermSubmit}>
        <Image
          style={{width: 25, height: 25}}
          source={require('../assets/loupe-1.png')}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EEEE',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginBottom: 30,
  },
  input: {
    marginHorizontal: 10,
    padding: 12,
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
