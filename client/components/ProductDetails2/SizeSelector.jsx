import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SizeSelector = ({ sizes }) => {
  return (
    <View style={styles.container}>
      {sizes.map((size, index) => (
        <View
          key={index}
          style={[
            styles.sizeOption,
            index === 0 && styles.firstOption,
            index === sizes.length - 1 && styles.lastOption,
            index === 2 && styles.selectedSize
          ]}
        >
          <Text style={[styles.sizeText, index === 2 && styles.selectedSizeText]}>{size}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  sizeOption: {
    borderWidth: 1,
    borderColor: 'rgba(144, 149, 160, 1)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 41,
    height: 41,
  },
  firstOption: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  lastOption: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  selectedSize: {
    backgroundColor: 'rgba(255, 96, 38, 1)',
    borderColor: 'rgba(255, 96, 38, 1)',
  },
  sizeText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    color: 'rgba(144, 149, 160, 1)',
    fontWeight: '400',
  },
  selectedSizeText: {
    color: '#FFFFFF',
  },
});

export default SizeSelector;