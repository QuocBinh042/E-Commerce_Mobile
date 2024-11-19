import React from 'react';
import { View, StyleSheet } from 'react-native';
import TagRow from './TagRow';

const TagSection = () => {
  const tagRows = [
    [
      { label: 'Service', isSelected: true },
      { label: 'Quantity', isSelected: false },
    ],
    [
      { label: 'Payment', isSelected: false },
      { label: 'Delivery', isSelected: true },
    ],
    [
      { label: 'Promotion', isSelected: false },
      { label: '', isSelected: false },
    ],
  ];

  return (
    <View style={styles.tagSection}>
      {tagRows.map((row, index) => (
        <TagRow key={index} tags={row} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagSection: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
});

export default TagSection;