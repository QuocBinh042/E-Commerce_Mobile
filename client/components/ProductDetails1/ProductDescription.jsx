import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ProductDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.description}>
        Quis occaecat magna elit magna do nisi ipsum amet excepteur tempor nisi exercitation qui...
      </Text>
      <View style={styles.featuresContainer}>
        <View style={styles.featureRow}>
          <View style={styles.feature}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/39044e5a16b16af479189be9c4b0a8a48cb0f8a1c25745c6fea3b845ff75ff50?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
              style={styles.featureIcon}
              resizeMode="contain"
            />
            <Text style={styles.featureText}>Express</Text>
          </View>
          <View style={styles.feature}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1a924725ffe90e2d810437c847626c3534bc7006e5c4f4f50e8c104ebf18511b?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
              style={styles.featureIcon}
              resizeMode="contain"
            />
            <Text style={styles.featureText}>Good review</Text>
          </View>
        </View>
        <View style={styles.featureRow}>
          <View style={styles.feature}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7a2a08168123bc777e2498ef85c30b898276561f5f851d19008bf4664f89cb95?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
              style={styles.featureIcon}
              resizeMode="contain"
            />
            <Text style={styles.featureText}>30-day free return</Text>
          </View>
          <View style={styles.feature}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5180edc5e964946e0dca0991b5cbde60628ca636cf828b4b073d671c37b4b019?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
              style={styles.featureIcon}
              resizeMode="contain"
            />
            <Text style={styles.featureText}>Authorized shop</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(50, 56, 66, 1)',
    fontFamily: 'Lato, sans-serif',
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: 'rgba(144, 149, 160, 1)',
    fontFamily: 'Lato, sans-serif',
    lineHeight: 22,
  },
  featuresContainer: {
    marginTop: 56,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureIcon: {
    width: 16,
    height: 16,
    marginRight: 9,
  },
  featureText: {
    fontSize: 14,
    color: 'rgba(144, 149, 160, 1)',
    fontFamily: 'Lato, sans-serif',
  },
});

export default ProductDescription;