import React, { memo } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const PRIMARY_COLOR = '#FF6026';
const BACKGROUND_COLOR = '#F5F9F8';
const TEXT_COLOR = '#000000';
const BUTTON_COLOR = '#333333';

const PromoBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Shoes</Text>
        <Text style={styles.subtitle}>50% off</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy now</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/data/Image5.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const ProductGrid = () => {
  return (
    <View style={styles.gridContainer}>
      <View style={styles.productCard}>
        <Image
          source={require('../../assets/data/Image6.png')} // Đường dẫn hình ảnh sản phẩm 1
          style={styles.productImage}
          resizeMode="cover"
        />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>30%</Text>
        </View>
      </View>
      <View style={styles.productCard}>
        <Image
          source={require('../../assets/data/Image7.png')} // Đường dẫn hình ảnh sản phẩm 2
          style={styles.productImage}
          resizeMode="cover"
        />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>30%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 20,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: PRIMARY_COLOR,
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: TEXT_COLOR,
    fontSize: 18,
    marginTop: 4,
  },
  button: {
    backgroundColor: BUTTON_COLOR,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  image: {
    width: 140,
    height: 140,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  productCard: {
    width: 160,
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 8,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default memo(() => (
  <>
    <PromoBanner />
    <ProductGrid />
  </>
));
