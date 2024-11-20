import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Voucher = () => {
  const [couponCode, setCouponCode] = useState('');
  const navigation = useNavigation();

  const promoCodes = [
    { id: 1, discount: '20%', expireDate: 'Dec 15, 2024', code: '20firstorder', isExpiringSoon: false },
    { id: 2, discount: '25%', expireDate: 'Sep 30, 2024', code: '25fridaysale', isExpiringSoon: false },
    { id: 3, discount: '10%', expireDate: 'in 3 days', code: '10flashsale', isExpiringSoon: true },
  ];

  const handleApplyCode = (code) => {
    navigation.navigate('Cart', { appliedVoucher: code }); 
  };

  const renderPromoCode = ({ item }) => (
    <View style={styles.promoCodeContainer}>
      <View style={styles.iconContainer}>
        <Icon name="ticket" size={20} color="#FF6026" />
      </View>
      <View style={styles.promoDetails}>
        <Text style={styles.discountText}>{item.discount}</Text>
        <Text
          style={[
            styles.expireText,
            item.isExpiringSoon ? { color: 'red' } : { color: '#9095A0' },
          ]}
        >
          {item.isExpiringSoon ? `Expire ${item.expireDate}` : `Expire ${item.expireDate}`}
        </Text>
        <Text style={styles.codeText}>{item.code}</Text>
      </View>
      <TouchableOpacity
        style={styles.copyButton}
        onPress={() => handleApplyCode(item.code)} // Gửi mã giảm giá khi nhấn
      >
        <Icon name="clipboard" size={16} color="#FF6026" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Voucher" showFullHeader={false} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Coupon Code"
          placeholderTextColor="#C7C7C7"
          value={couponCode}
          onChangeText={setCouponCode}
        />
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => handleApplyCode(couponCode)} // Gửi mã giảm giá khi nhấn Apply
        >
          <Text style={styles.applyButtonText}>Apply Code</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={promoCodes}
        renderItem={renderPromoCode}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.promoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#323842',
    flex: 1,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#F5F5F5',
    marginBottom: 8,
  },
  applyButton: {
    height: 50,
    backgroundColor: '#FF6026',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  promoList: {
    marginTop: 8,
  },
  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 8,
  },
  iconContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    marginRight: 16,
  },
  promoDetails: {
    flex: 1,
  },
  discountText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#323842',
  },
  expireText: {
    fontSize: 14,
    marginTop: 4,
  },
  codeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9095A0',
    marginTop: 4,
  },
  copyButton: {
    padding: 10,
  },
});

export default Voucher;
