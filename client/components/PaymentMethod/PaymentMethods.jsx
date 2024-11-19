import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const paymentMethods = [
  { id: 1, name: 'Credit Card', lastDigits: '2334', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8322dc4f0b33a6bc186fabff4930ebdd5c3fde847ce116e1d6d274a238188fc2?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' },
  { id: 2, name: 'Credit Card', lastDigits: '3774', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/65b0f239b8bd4577eb5010eff7e09b25b000da9eaa3aad33a413c8d8d79f29fa?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' },
  { id: 3, name: 'PayPal', email: 'abc@gmail.com', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/943e96d9c69a2775b4b8e9e050a6d9f7fb6257f72634e4bfedeb49e07e0f74b3?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' },
];

const PaymentMethodItem = ({ name, lastDigits, email, icon, isSelected, onSelect }) => (
  <TouchableOpacity style={[styles.methodItem, isSelected && styles.selectedMethod]} onPress={onSelect}>
    <Image source={{ uri: icon }} style={styles.methodIcon} resizeMode="contain" />
    <View style={styles.methodInfo}>
      <Text style={styles.methodName}>{name}</Text>
      <Text style={styles.methodDetails}>
        {lastDigits ? `****** ${lastDigits}` : email}
      </Text>
    </View>
    <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
      {isSelected && <View style={styles.radioButtonInner} />}
    </View>
  </TouchableOpacity>
);

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = React.useState(paymentMethods[0].id);

  return (
    <View style={styles.container}>
      {paymentMethods.map((method) => (
        <PaymentMethodItem
          key={method.id}
          {...method}
          isSelected={selectedMethod === method.id}
          onSelect={() => setSelectedMethod(method.id)}
        />
      ))}
      <TouchableOpacity style={styles.addNewCardButton}>
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/df3d16f6e4d137f21d3263c4e8fd6b94fe0a4211572d1abecaa1d2bf8be3a4b7?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
          style={styles.addIcon}
          resizeMode="contain"
        />
        <Text style={styles.addNewCardText}>Add new card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  methodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'rgba(222, 225, 230, 1)',
    borderRadius: 6,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  selectedMethod: {
    borderColor: 'rgba(255, 96, 38, 1)',
  },
  methodIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  methodInfo: {
    flex: 1,
  },
  methodName: {
    fontSize: 14,
    color: 'rgba(50, 56, 66, 1)',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '700',
  },
  methodDetails: {
    fontSize: 12,
    color: 'rgba(144, 149, 160, 1)',
    fontFamily: 'Lato, sans-serif',
    marginTop: 4,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(144, 149, 160, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: 'rgba(255, 96, 38, 1)',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 96, 38, 1)',
  },
  addNewCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 96, 38, 1)',
    borderRadius: 6,
    marginTop: 16,
  },
  addIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  addNewCardText: {
    fontSize: 16,
    color: 'rgba(255, 96, 38, 1)',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '700',
  },
});

export default PaymentMethods;