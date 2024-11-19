import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SeeAllButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>See all</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: 'silver',
    marginTop: 14,
    marginHorizontal: 20,
    paddingVertical: 7,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default SeeAllButton;