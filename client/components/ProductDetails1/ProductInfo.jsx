import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const ProductInfo = () => {
  return (
    <View style={styles.productInfoContainer}>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/e58b870683f2236348051257369638345961bd656505fa93246e3722025cc5a1?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.indicatorDots} />
      <View style={styles.priceRatingContainer}>
        <Text style={styles.price}>$59</Text>
        <View style={styles.ratingContainer}>
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/b099c88377acc4d13baa333a61691fb1c9da2d07d1ee6fa1b1d417070fe1fc98?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
            style={styles.ratingIcon}
            resizeMode="contain"
          />
          <Text style={styles.ratingScore}>4.5</Text>
          <Text style={styles.reviewCount}>(99 reviews)</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productInfoContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  productImage: {
    width: '100%',
    aspectRatio: 1.84,
    borderRadius: 6,
  },
  indicatorDots: {
    width: 16,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000',
    marginTop: 8,
  },
  priceRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 18,
  },
  price: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 18,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '700',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    width: 20,
    height: 20,
  },
  ratingScore: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    color: 'rgba(34, 39, 48, 1)',
    fontWeight: '700',
    marginLeft: 4,
  },
  reviewCount: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    color: 'rgba(144, 149, 160, 1)',
    marginLeft: 4,
  },
});

export default ProductInfo;