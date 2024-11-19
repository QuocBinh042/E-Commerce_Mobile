import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ReviewSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.reviewText}>Reviews (99)</Text>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/36917d4c37c0c0f9e69e4b9ee14ae9e73c118d0aab7c0552e8e0c193cbbd35a6?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
        style={styles.chevronRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  reviewText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
    color: 'rgba(50, 56, 66, 1)',
    fontWeight: '700',
  },
  chevronRight: {
    width: 16,
    aspectRatio: 1,
  },
});

export default ReviewSection;