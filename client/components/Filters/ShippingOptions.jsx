import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const ShippingOptions = () => {
  const options = [
    { label: 'Instant (2 hours delivery)' },
    { label: 'Express (2 days delivery)' },
    { label: 'Standard (7- 10 days delivery)' },
  ];

  return (
    <View style={styles.shippingContainer}>
      <View style={styles.shippingHeader}>
        <Text style={styles.shippingTitle}>Shipping options</Text>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/21fbc04e14a40ff1bec580677d3d8055da9e1765bf79acfa290e5438c5401a59?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
          style={styles.chevronIcon}
        />
      </View>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <View key={index} style={styles.optionRow}>
            <View style={styles.checkbox} />
            <Text style={styles.optionText}>{option.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shippingContainer: {
    display: 'flex',
    marginTop: 20,
    width: '100%',
    maxWidth: 335,
    flexDirection: 'column',
  },
  shippingHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  shippingTitle: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '700',
    lineHeight: 32,
  },
  chevronIcon: {
    position: 'relative',
    display: 'flex',
    width: 24,
    flexShrink: 0,
    aspectRatio: 1,
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  optionRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    borderRadius: 3,
    borderColor: 'rgba(144, 149, 160, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 16,
    height: 16,
    marginRight: 6,
  },
  optionText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '400',
    lineHeight: 28,
  },
});

export default ShippingOptions;