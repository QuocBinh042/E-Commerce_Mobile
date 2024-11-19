// src/PaymentScreen/TotalAmount.jsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TotalAmount = ({ amount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total</Text>
      <Text style={styles.amount}>${amount.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: 'rgba(50, 56, 66, 1)',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  amount: {
    fontSize: 32,
    color: 'rgba(23, 26, 31, 1)',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '700',
    marginTop: 8,
  },
});

export default TotalAmount;
