// src/PaymentScreen/PayNowButton.jsx
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

const PayNowButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d45bb83e30b359acbda24a30cddd2c616876d9d62c6ff5384525dcd15a51312f?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>Pay now</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 96, 38, 1)',
    borderRadius: 6,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato, sans-serif',
  },
});

export default PayNowButton;
