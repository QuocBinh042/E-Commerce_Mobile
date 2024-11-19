import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const QuantitySelector = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/b6f9efe6eb05c264b173c3363c835adc8e3b68454bda655ec606c2440446324f?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
        style={styles.button}
      />
      <Text style={styles.quantity}>2</Text>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/e8198dd016f04c0e841d2f7655a245fddd36f0f7c59454bd5cadda60f04fcea2?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  button: {
    width: 36,
    aspectRatio: 1,
    borderRadius: 6,
  },
  quantity: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '400',
  },
});

export default QuantitySelector;