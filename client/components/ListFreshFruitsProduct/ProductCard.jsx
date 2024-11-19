import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      {/* Sử dụng product.Image để lấy ảnh sản phẩm */}
      <Image source={{ uri: `http://localhost:3002/images/${product.Image}` }} style={styles.productImage} resizeMode="cover" />
      <View style={styles.cardContent}>
        <View style={styles.nameAndAddContainer}>
          {/* Sử dụng product.ProductName cho tên sản phẩm */}
          <Text style={styles.productName}>{product.ProductName}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/933cabaeb3447f6e5e714b3ac1ac0efa8af77c078f49d3c5625fb9fef1b8f54f?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&' }}
              style={styles.addIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ratingAndPriceContainer}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/5069707bfa370877b5ff2284ef98623d5e08279c68402be18910900625c98046?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&' }}
            style={styles.ratingStars}
            resizeMode="contain"
          />
          {/* Sử dụng product.Price cho giá sản phẩm */}
          <Text style={styles.price}>${product.Price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 6,
    backgroundColor: '#fff',
    marginBottom: 16,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    aspectRatio: 1.23,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 10,
  },
  nameAndAddContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productName: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(23, 26, 31, 1)',
  },
  addButton: {
    padding: 4,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  ratingAndPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingStars: {
    width: 60,
    height: 12,
  },
  price: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(23, 26, 31, 1)',
  },
});

export default ProductCard;
