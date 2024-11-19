import React from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const PLACEHOLDER_COLOR = 'rgba(188, 193, 202, 1)';
const INPUT_COLOR = 'rgba(23, 26, 31, 1)';
const BORDER_COLOR = 'rgba(0, 0, 0, 0)';
const ICON_SIZE_SMALL = 16;
const ICON_SIZE_LARGE = 36;

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb1032709bf7997fc1f9f1a3ab0fce0ad3fd17ba9c17b00c6635e3618325c942?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10" }}
          style={styles.iconSmall}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="Search for product"
          placeholderTextColor={PLACEHOLDER_COLOR}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d45aebd59d47fcad1c3dfac407ca8837b5ee5635df51f6405a9af3b341b6d11a?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10" }}
          style={styles.iconLarge}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 24,
    
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor:'#F3F4F6'
  },
  iconSmall: {
    width: ICON_SIZE_SMALL,
    height: ICON_SIZE_SMALL,
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: INPUT_COLOR,
    width:'100%'
  },
  button: {
    marginLeft: 15,
  },
  iconLarge: {
    width: ICON_SIZE_LARGE,
    height: ICON_SIZE_LARGE,
    borderRadius: 6,
  },
});

export default SearchBar;
