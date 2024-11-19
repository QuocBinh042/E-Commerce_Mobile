import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const AverageReview = () => {
  return (
    <View style={styles.averageReviewContainer}>
      <View style={styles.averageReviewHeader}>
        <Text style={styles.averageReviewTitle}>Average review</Text>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/21fbc04e14a40ff1bec580677d3d8055da9e1765bf79acfa290e5438c5401a59?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
          style={styles.chevronIcon}
        />
      </View>
      <View style={styles.ratingContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/79cbc696ae4660a9905342d45db01b95e0cadf641641342af528ce94e7b6331b?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
          style={styles.ratingStars}
        />
        <Text style={styles.ratingText}>& Up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  averageReviewContainer: {
    display: 'flex',
    marginTop: 19,
    width: '100%',
    maxWidth: 335,
  },
  averageReviewHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  averageReviewTitle: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '700',
    lineHeight: 32,
  },
  chevronIcon: {
    position: 'relative',
    display: 'flex',
    width: 24,
    flexShrink: 0,
    aspectRatio: 1,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  ratingStars: {
    position: 'relative',
    display: 'flex',
    width: 155,
    maxWidth: '100%',
    aspectRatio: 6.45,
  },
  ratingText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '400',
    lineHeight: 28,
  },
});

export default AverageReview;