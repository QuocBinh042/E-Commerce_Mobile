// src/components/ProductCatalog/ProductCatalog.jsx
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { addToCart } from '../../services/cartService';
import { useCart } from '../../App';

const sortOptions = ['Best Sales', 'Best Matched', 'Popular'];

const SortingMenu = ({ onSortSelect }) => (
  <View style={styles.sortingContainer}>
    {sortOptions.map((option, index) => (
      <TouchableOpacity 
        key={index} 
        style={[styles.sortOption, index === 0 && styles.activeSortOption]}
        onPress={() => onSortSelect(option)}
      >
        <Text
          style={[styles.sortOptionText, index === 0 && styles.activeSortOptionText]}
        >
          {option}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const ProductItem = ({ product, userId }) => {
  const { incrementCartCount } = useCart();

  const handleAddToCart = async () => {
    try {
      // Call addToCart and expect it to return true if it's a new unique item
      const isUniqueItem = await addToCart(userId, product.ProductID, 1);
      if (isUniqueItem) {
        incrementCartCount(); // Increment count only for new unique items
      }
      Alert.alert("Success", `${product.ProductName} added to cart`);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      Alert.alert("Error", "Failed to add product to cart");
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.productInfo}>
        <Image source={{ uri: `http://localhost:3002/images/${product.Image}` }} style={styles.productImage} resizeMode="contain" />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.ProductName}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <TouchableOpacity onPress={handleAddToCart}>
          <FontAwesome5 name="cart-plus" size={24} color="gray" style={styles.addIcon} />
        </TouchableOpacity>
        <Text style={styles.priceText}>${product.Price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const ProductCatalog = ({ products, userId }) => {
  const handleSortSelect = (option) => {
    console.log("Selected sort option:", option);
  };

  return (
    <View>
      <SortingMenu onSortSelect={handleSortSelect} />
      {products.map((product) => (
        <ProductItem
          key={product.ProductID}
          product={product}
          userId={userId}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sortingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 38,
    marginBottom: 14,
  },
  sortOption: {
    paddingHorizontal: 25,
    paddingVertical: 3,
    borderRadius: 12,
  },
  activeSortOption: {
    backgroundColor: 'rgba(255, 96, 38, 0.1)',
  },
  sortOptionText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 11,
    color: 'rgba(86, 94, 108, 1)',
  },
  activeSortOptionText: {
    color: 'rgba(255, 96, 38, 1)',
    fontWeight: '700',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: 'rgba(243, 244, 246, 1)',
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 14,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  productDetails: {
    marginLeft: 14,
  },
  productName: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(50, 56, 66, 1)',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  addIcon: {
    marginBottom: 4,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(23, 26, 31, 1)',
  },
});

export default ProductCatalog;
