import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const AddToCartBar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4dd42c00c055031ce1451a177221749d64d99a70d6e0013d27a7bb067c59a8c1?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
        style={styles.favoriteIcon}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.addToCartButton}>
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7a0732e1b86f142a9792d5aea9232036f8c92a9060f1c13662a2c6ea26bbd73d?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
          style={styles.cartIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyNowButton}>
        <Text style={styles.buyNowText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(222, 225, 230, 1)',
    backgroundColor: '#FFFFFF',
  },
  favoriteIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  addToCartButton: {
    backgroundColor: 'rgba(255, 96, 38, 0.1)',
    borderRadius: 6,
    padding: 10,
    marginRight: 12,
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 96, 38, 1)',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buyNowText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato, sans-serif',
  },
});

export default AddToCartBar;