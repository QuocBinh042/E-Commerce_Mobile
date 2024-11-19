import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const RelevantProducts = ({ products }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Relevant products</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
          <FontAwesome5 name="chevron-right" color={'silver'} style={styles.chevronIcon} />
        </TouchableOpacity>
      </View>

      {/* Render each relevant product */}
      {products.map((product) => (
        <View key={product.ProductID} style={styles.productCard}>
          {/* Product Information */}
          <View style={styles.productInfo}>
            {/* Use product.Image for the product image */}
            <Image
              source={{ uri: `http://localhost:3002/images/${product.Image}` }}
              style={styles.productImage}
              resizeMode="cover"
            />
            <View style={styles.productDetails}>
              {/* Use product.ProductName for the product name */}
              <Text style={styles.productName}>{product.ProductName}</Text>
              <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/4bb59645d3afa005f6eae37008b6ebff922947e1acc4d6f0678682ec5b8419a3?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&' }}
                style={styles.ratingStars}
                resizeMode="contain"
              />
            </View>
          </View>
          
          {/* Price and Add to Cart Button */}
          <View style={styles.priceAndAdd}>
            <TouchableOpacity style={styles.addButton}>
              <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/8fbb3756c6d913850bb7a4b50e3993efd0f9ff0a625dcb2a861a9ec4193d5a71?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&' }}
                style={styles.addIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {/* Use product.Price for the product price */}
            <Text style={styles.price}>${product.Price.toFixed(2)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(50, 56, 66, 1)',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 12,
    color: 'rgba(144, 149, 160, 1)',
    marginRight: 4,
  },
  chevronIcon: {
    width: 12,
    height: 12,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(243, 244, 246, 1)',
    borderRadius: 6,
    padding: 14,
    marginBottom: 14,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 14,
  },
  productDetails: {
    justifyContent: 'center',
  },
  productName: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(50, 56, 66, 1)',
    marginBottom: 6,
  },
  ratingStars: {
    width: 60,
    height: 12,
  },
  priceAndAdd: {
    alignItems: 'flex-end',
  },
  addButton: {
    marginBottom: 6,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  price: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(23, 26, 31, 1)',
  },
});

export default RelevantProducts;
