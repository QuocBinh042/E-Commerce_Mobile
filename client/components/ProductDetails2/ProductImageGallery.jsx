import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';

const images = [
  'https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/c9e19f44df7b5216cb86589b12959d20ff560f0d1d5fb7024fcb22e244462a51?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/5708e0d46023345694bca58a50c93a76c80549cec42aabb40d227bfef166069a?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/a28300c248d6987ecdf3462a7e290da5a361c4d5010e7e7f1d93b4be1c6dc507?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/ba1d92adaf9a2f12d834bf8bfaa5441a27cabe0ba09ab58d3f8ab23492cbeb80?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/9bfea0f977032647f1820ffd47fd8bd87808513ce5729b072b5ecbb2b986542f?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10',
];

const ProductImageGallery = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: images[0] }}
        style={styles.mainImage}
        resizeMode="contain"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.thumbnailContainer}
      >
        {images.slice(1,5).map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.thumbnailImage}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  mainImage: {
    width: '100%',
    aspectRatio: 1.7,
    borderRadius: 8,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    marginTop: 14,
    paddingHorizontal: 22,
  },
  thumbnailImage: {
    width: 75,
    height: 75,
    borderRadius: 8,
    marginRight: 10,
  },
});

export default ProductImageGallery;