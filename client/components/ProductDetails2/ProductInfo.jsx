import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ProductInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$2,99</Text>
        <View style={styles.discountTag}>
          <Text style={styles.discountText}>Buy 1 get 1</Text>
        </View>
      </View>
      <Text style={styles.productName}>Hoodie shirt</Text>
      <Text style={styles.productDescription}>
        Occaecat est deserunt tempor offici
      </Text>
      <Text style={styles.sectionTitle}>Color</Text>
      <View style={styles.colorOptions}>
        <TouchableOpacity style={[styles.colorOption, styles.color1]} />
        <TouchableOpacity style={[styles.colorOption, styles.color2]} />
        <TouchableOpacity style={[styles.colorOption, styles.color3]} />
      </View>
      <Text style={styles.sectionTitle}>Size</Text>
      <View style={styles.sizeOptions}>
        <TouchableOpacity style={styles.sizeOption}>
          <Text style={styles.sizeText}>XS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeOption}>
          <Text style={styles.sizeText}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sizeOption, styles.selectedSize]}>
          <Text style={[styles.sizeText, styles.selectedSizeText]}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeOption}>
          <Text style={styles.sizeText}>L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeOption}>
          <Text style={styles.sizeText}>XL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    paddingHorizontal: 24,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: 'rgba(255, 96, 38, 1)',
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Lato, sans-serif',
  },
  discountTag: {
    backgroundColor: 'rgba(65, 176, 41, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginLeft: 15,
  },
  discountText: {
    color: 'rgba(65, 176, 41, 1)',
    fontSize: 11,
    fontFamily: 'Lato, sans-serif',
  },
  productName: {
    color: 'rgba(23, 26, 31, 1)',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Lato, sans-serif',
    marginTop: 8,
  },
  productDescription: {
    color: 'rgba(86, 94, 108, 1)',
    fontSize: 12,
    fontFamily: 'Lato, sans-serif',
    marginTop: 4,
  },
  sectionTitle: {
    color: 'rgba(34, 39, 48, 1)',
    fontSize: 16,
    fontFamily: 'Lato, sans-serif',
    marginTop: 30,
  },
  colorOptions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  colorOption: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 10,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  color1: {
    backgroundColor: 'red',
  },
  color2: {
    backgroundColor: 'blue',
  },
  color3: {
    backgroundColor: 'rgba(255, 96, 38, 1)',
  },
  sizeOptions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  sizeOption: {
    borderWidth: 1,
    borderColor: 'rgba(144, 149, 160, 1)',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 10,
  },
  sizeText: {
    color: 'rgba(144, 149, 160, 1)',
    fontSize: 14,
    fontFamily: 'Lato, sans-serif',
  },
  selectedSize: {
    backgroundColor: 'rgba(255, 96, 38, 1)',
    borderColor: 'rgba(255, 96, 38, 1)',
  },
  selectedSizeText: {
    color: 'rgba(255, 255, 255, 1)',
  },
});

export default ProductInfo;