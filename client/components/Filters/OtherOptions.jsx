import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const OtherOptions = () => {
  const options = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/cf3455471fa2c41240c60d6e35ccfa44d273a0f7c442e213ab2298d3a9c2ee7c?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&", label: "30-day Free Return", highlighted: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/c18aa79ea5ba2ab32c8178c710ac2b5e793dc69ad206d6b5f42546ed14f722bc?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&", label: "Buyer Protection" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/032eab4db1769dea956493e9baf22666ddcab12157f4932d2c15896b7aed9568?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&", label: "Best Deal" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/0c60ab0e98c14dc836dc3969c58e08a0b8e157e079a6de3b65fad3fbe4ee4acc?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&", label: "Ship to store" },
  ];

  return (
    <View style={styles.otherOptionsContainer}>
      <Text style={styles.otherOptionsTitle}>Others</Text>
      <View style={styles.optionsGrid}>
        {options.map((option, index) => (
          <View key={index} style={[
            styles.optionItem,
            option.highlighted && styles.highlightedOption
          ]}>
            <Image
              resizeMode="contain"
              source={{ uri: option.icon }}
              style={styles.optionIcon}
            />
            <Text style={[
              styles.optionLabel,
              option.highlighted && styles.highlightedLabel
            ]}>
              {option.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otherOptionsContainer: {
    display: 'flex',
    marginTop: 19,
    width: '100%',
    maxWidth: 336,
  },
  otherOptionsTitle: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '700',
    lineHeight: 32,
    marginBottom: 16,
  },
  optionsGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionItem: {
    borderRadius: 6,
    borderColor: 'rgba(222, 225, 230, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    width: '48%',
    marginBottom: 16,
  },
  highlightedOption: {
    borderColor: 'rgba(255, 96, 38, 1)',
  },
  optionIcon: {
    position: 'relative',
    display: 'flex',
    width: 32,
    aspectRatio: 1,
    marginBottom: 8,
  },
  optionLabel: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 12,
    color: 'rgba(144, 149, 160, 1)',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 24,
  },
  highlightedLabel: {
    color: 'rgba(255, 96, 38, 1)',
  },
});

export default OtherOptions;