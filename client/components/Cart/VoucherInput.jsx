import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
const VoucherInput = ({ value, onChange }) => {
  const navigation = useNavigation();
  return (
  <View style={styles.container}>
    <Text style={styles.label}>Voucher</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter voucher code"
      placeholderTextColor="rgba(188, 193, 202, 1)"
      value={value}
      onChangeText={onChange}
    />
    <TouchableOpacity style={styles.applyButton} onPress={()=>navigation.navigate('Voucher')}>
      <Text style={styles.applyButtonText}>Apply</Text>
    </TouchableOpacity>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#323842',
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginRight: 10,
    fontSize: 14,
    color: '#323842',
  },
  applyButton: {
    backgroundColor: '#28a745',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default VoucherInput;
