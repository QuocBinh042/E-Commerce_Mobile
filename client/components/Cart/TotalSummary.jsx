import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TotalSummary = ({ grandTotal }) => (
  <View style={styles.container}>
    <Text style={styles.label}>Total</Text>
    <Text style={styles.amount}>${grandTotal.toFixed(2)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: '#323842',
  },
  amount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF6026',
  },
});

export default TotalSummary;
