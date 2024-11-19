import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColorSelector = ({ colors }) => {
  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <View
          key={index}
          style={[
            styles.colorOption,
            { backgroundColor: color },
            index === 2 && styles.selectedColor
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  colorOption: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  selectedColor: {
    borderColor: 'rgba(255, 96, 38, 1)',
  },
});

export default ColorSelector;