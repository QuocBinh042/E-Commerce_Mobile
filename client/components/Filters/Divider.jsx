import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'rgba(222, 225, 230, 1)',
    width: '100%',
    maxWidth: 335,
    marginVertical: 20,
  },
});

export default Divider;