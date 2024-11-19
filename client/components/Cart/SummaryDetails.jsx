import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryDetails = ({ total, discount }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.label}>Subtotal:</Text>
      <Text style={styles.value}>${total.toFixed(2)}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Discount:</Text>
      <Text style={styles.value}>-${discount.toFixed(2)}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Fees:</Text>
      <Text style={styles.value}>$0</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#323842',
  },
  value: {
    fontSize: 14,
    color: '#FF6026',
    fontWeight: '600',
  },
});

export default SummaryDetails;
