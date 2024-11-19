import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';

const relatedProducts = [
  {
    id: 1,
    name: 'Headphone',
    price: 99,
    rating: 4.5,
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4f2c7c3dd059930677d63235689c124d6dbff4a1df388d6f78d09e37aee4b621?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10',
  },
  {
    id: 2,
    name: 'Headphone',
    price: 99,
    rating: 4.5,
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4602cb07c64e2006495d3c6102e5e8f26f25e650512b8d503d5193c6dad6a8f7?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10',
  },
  {
    id: 3,
    name: 'Headphone',
    price: 99,
    rating: 4.5,
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c61c0e2b663d7812af15102baf9ac4b344cf67588367e7d3452438905cffa62c?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10',
  },
];

const RelatedProductItem = ({ name, price, rating, image }) => (
  <View style={styles.productItem}>
    <Image source={{ uri: image }} style={styles.productImage} resizeMode="contain" />
    <Text style={styles.productName}>{name}</Text>
    <View style={styles.productDetails}>
      <View style={styles.ratingContainer}>
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/83a35f360b9588927d11c34e05865ecbc62de76c25425df60d0b59748512292d?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
          style={styles.ratingIcon}
          resizeMode="contain"
        />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <Text style={styles.priceText}>${price}</Text>
    </View>
  </View>
);

const RelatedProducts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Relevant products</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a94096543507ef26cfda66d6edddbb0707bbf2e2a8ad7bbeb598b8b0c29e3c6b?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
            style={styles.seeAllIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={relatedProducts}
        renderItem={({ item }) => <RelatedProductItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingLeft: 24,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 24,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(50, 56, 66, 1)',
    fontFamily: 'Lato, sans-serif',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 12,
    color: 'rgba(144, 149, 160, 1)',
    fontFamily: 'Lato, sans-serif',
    marginRight: 3,
  },
  seeAllIcon: {
    width: 12,
    height: 12,
  },
  productList: {
    paddingRight: 24,
  },
  productItem: {
    width: 150,
    marginRight: 16,
   
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 6,
     backgroundColor:'silver'
  },
  productName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(50, 56, 66, 1)',
    fontFamily: 'Lato, sans-serif',
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    color: 'rgba(23, 26, 31, 1)',
    fontFamily: 'Lato, sans-serif',
  },
  priceText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(23, 26, 31, 1)',
    fontFamily: 'Lato, sans-serif',
  },
});

export default RelatedProducts;