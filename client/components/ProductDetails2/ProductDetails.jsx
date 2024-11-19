import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';
import ReviewSection from './ReviewSection';
import AddToCartButton from './AddToCartBar';
import ProductImageGallery from './ProductImageGallery';

const ProductDetails = () => {
  const colors = ['#FFFFFF', '#000000', '#FF6026'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productImageContainer}>
        <View style={styles.backButtonContainer}>
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/2327739c5357bea4b8004d3e6e22dad80526a8c07e86189baf2fcfdf80944603?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
            style={styles.backButton}
          />
          <Text style={styles.productType}>T-Shirt</Text>
        </View>
      </View>

      {/* <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/c9e19f44df7b5216cb86589b12959d20ff560f0d1d5fb7024fcb22e244462a51?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
        style={styles.mainProductImage}
      /> */}

      {/* <View style={styles.thumbnailContainer}>
        {[4, 5, 6, 7].map((num) => (
          <Image
            key={num}
            resizeMode="contain"
            source={{ uri: `http://b.io/ext_${num}-` }}
            style={styles.thumbnailImage}
          />
        ))}
      </View> */}

      <ProductImageGallery/>
      <View style={styles.productInfoContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$2,99</Text>
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>Buy 1 get 1</Text>
          </View>
        </View>
        <Text style={styles.productName}>Hoodie shirt</Text>
        <Text style={styles.productDescription}>Occaecat est deserunt tempor offici</Text>

        <Text style={styles.sectionTitle}>Color</Text>
        <ColorSelector colors={colors} />

        <Text style={styles.sectionTitle}>Size</Text>
        <SizeSelector sizes={sizes} />

        <Text style={styles.sectionTitle}>Quantity</Text>
        <QuantitySelector />

        <View style={styles.ratingContainer}>
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/8fe33502e4b17e64eee888105e450c525a7879d2e9cc8c330ef29c53d741582c?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
            style={styles.ratingImage}
          />
          <Text style={styles.ratingText}>4.5</Text>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>$4,98</Text>
        </View>
      </View>

      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/716ca3db364907978b7ac8f0efe86e823fddc2fd9223f6a1bd247f4370f4439f?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
        style={styles.divider}
      />

      <View style={styles.sizeGuideContainer}>
        <Text style={styles.sizeGuideText}>Size guide</Text>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/003a53b2c7cf732a3960225dc671c235da572ac706a81c69c46555cca8a2dc81?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
          style={styles.chevronRight}
        />
      </View>

      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/716ca3db364907978b7ac8f0efe86e823fddc2fd9223f6a1bd247f4370f4439f?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
        style={styles.divider}
      />

      <ReviewSection />
      <AddToCartButton />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  productImageContainer: {
    width: '100%',
  },
  productImage: {
    width: '100%',
    aspectRatio: 9.35,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  backButton: {
    width: 44,
    aspectRatio: 1.22,
    borderRadius: 6,
  },
  productType: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 18,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '700',
    marginLeft: 10,
  },
  mainProductImage: {
    width: '100%',
    aspectRatio: 1.7,
    borderRadius: 8,
    marginTop: 14,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  thumbnailImage: {
    width: 75,
    aspectRatio: 1.09,
    borderRadius: 8,
  },
  productInfoContainer: {
    marginTop: 28,
    paddingHorizontal: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 32,
    color: 'rgba(255, 96, 38, 1)',
    fontWeight: '700',
  },
  discountTag: {
    backgroundColor: 'rgba(65, 176, 41, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  discountText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 11,
    color: 'rgba(65, 176, 41, 1)',
    fontWeight: '400',
  },
  productName: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 20,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '700',
    marginTop: 8,
  },
  productDescription: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 12,
    color: 'rgba(86, 94, 108, 1)',
    fontWeight: '400',
    marginTop: 4,
  },
  sectionTitle: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
    color: 'rgba(34, 39, 48, 1)',
    fontWeight: '400',
    marginTop: 30,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  ratingImage: {
    width: 22,
    aspectRatio: 1.1,
  },
  ratingText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    color: 'rgba(34, 39, 48, 1)',
    fontWeight: '700',
    marginLeft: 8,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  totalLabel: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 12,
    color: 'rgba(86, 94, 108, 1)',
    fontWeight: '400',
  },
  totalPrice: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 20,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '700',
  },
  divider: {
    width: '100%',
    height: 1,
    marginVertical: 20,
  },
  sizeGuideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sizeGuideText: {
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

export default ProductDetails;