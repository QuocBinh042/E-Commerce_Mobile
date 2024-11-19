import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../Home/Header';
import ProductImageGallery from './ProductImageGallery';
import ProductInfo from './ProductInfo';
import AddToCartBar from './AddToCartBar';

const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title="Headphone" />
        <ProductImageGallery />
        <ProductInfo />
        {/* <ProductDescription />
        <ProductReviews />
        <RelatedProducts /> */}
        
      </ScrollView>
      <AddToCartBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default ProductDetailsScreen;