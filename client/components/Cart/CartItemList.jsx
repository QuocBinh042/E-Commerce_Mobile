import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Modal, Text, Button, CheckBox } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CartItem from './CartItem';
import VoucherInput from './VoucherInput';
import SummaryDetails from './SummaryDetails';
import TotalSummary from './TotalSummary';
import { getCartItems, removeFromCart, updateCartQuantity } from '../../services/cartService';
import CheckoutButton from './CheckoutButton';

const CartItemList = ({ userId }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState(0); // State for discount value
  const [modalVisible, setModalVisible] = useState(false);
  const [noItemsSelectedModalVisible, setNoItemsSelectedModalVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  // Fetch cart items on mount
  useEffect(() => {
    fetchCartItems();
  }, [userId]);

  // Fetch cart items function
  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const items = await getCartItems(userId);
      setCartItems(items.map(item => ({ ...item, isSelected: false })));
    } catch (error) {
      console.error('Error fetching cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle applying voucher code
  useEffect(() => {
    if (route.params?.appliedVoucher) {
      setVoucherCode(route.params.appliedVoucher);
      calculateDiscount(route.params.appliedVoucher);
    }
  }, [route.params?.appliedVoucher]);

  // Calculate discount based on voucher
  const calculateDiscount = (code) => {
    const subtotal = calculateTotal(cartItems);
    if (code === '20firstorder') {
      setDiscount(subtotal * 0.2);
    } else if (code === '25fridaysale') {
      setDiscount(subtotal * 0.25);
    } else if (code === '10flashsale') {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  // Handle removing item
  const handleRemoveItem = async () => {
    try {
      await removeFromCart(userId, selectedProductId);
      setCartItems(prevItems => prevItems.filter(item => item.ProductID !== selectedProductId));
      setModalVisible(false);
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  // Handle selecting all items
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setCartItems(prevItems => prevItems.map(item => ({ ...item, isSelected: newSelectAll })));
  };

  // Calculate subtotal
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.Price * item.Quantity, 0);
  };

  // Handle checkout
  const handleCheckout = () => {
    const selectedItems = cartItems.filter(item => item.isSelected);
    if (selectedItems.length === 0) {
      setNoItemsSelectedModalVisible(true);
    } else {
      const subtotal = calculateTotal(selectedItems);
      const grandTotal = subtotal - discount;
      const selectedItemIds = selectedItems.map(item => ({
        productId: item.ProductID,
        quantity: item.Quantity,
        price: item.Price || 0,
      }));

      navigation.navigate('PaymentMethod', { subtotal, discount, grandTotal, selectedItemIds });
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
  }

  return (
    <View style={styles.container}>


      {/* Cart Items List */}
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem
            product={item}
            onRemove={() => setSelectedProductId(item.ProductID)}
            onUpdateQuantity={(productId, newQuantity) => {
              const updatedCartItems = cartItems.map(cartItem =>
                cartItem.ProductID === productId
                  ? { ...cartItem, Quantity: newQuantity }
                  : cartItem
              );
              setCartItems(updatedCartItems);
            }}
            onSelectItem={() => {
              setCartItems(cartItems.map(cartItem =>
                cartItem.ProductID === item.ProductID
                  ? { ...cartItem, isSelected: !cartItem.isSelected }
                  : cartItem
              ));
            }}
          />
        )}
        keyExtractor={item => item.ProductID.toString()}
        contentContainerStyle={styles.listContainer}
      />
      {/* Select All Checkbox */}
      <View style={styles.selectAllContainer}>
        <View style={styles.checkboxWrapper}>
          <CheckBox value={selectAll} onValueChange={handleSelectAll} />
        </View>
        <Text style={styles.selectAllText}>Select All</Text>
      </View>

      {/* Voucher Input */}
      <VoucherInput value={voucherCode} onChange={(code) => {
        setVoucherCode(code);
        calculateDiscount(code);
      }} />

      {/* Summary Details */}
      <SummaryDetails
        total={calculateTotal(cartItems.filter(item => item.isSelected))}
        discount={discount}
      />

      {/* Total Summary */}
      <TotalSummary
        grandTotal={calculateTotal(cartItems.filter(item => item.isSelected)) - discount}
      />

      {/* Checkout Button */}
      <CheckoutButton onPress={handleCheckout} />

      {/* Remove Item Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure you want to remove this item from the cart?</Text>
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="#888" />
              <Button title="Confirm" onPress={handleRemoveItem} color="#FF6026" />
            </View>
          </View>
        </View>
      </Modal>

      {/* No Items Selected Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={noItemsSelectedModalVisible}
        onRequestClose={() => setNoItemsSelectedModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Please select at least one item to proceed to checkout.</Text>
            <View style={styles.modalButtons}>
              <Button title="Close" onPress={() => setNoItemsSelectedModalVisible(false)} color="#FF6026" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  
    selectAllContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start', // Ensures alignment to the left
      backgroundColor: '#F9F9F9', // Light background for better visibility
      padding: 10,
      marginTop:-10,
      marginBottom: 10, // Add some space below the container
      borderRadius: 8, // Rounded edges
      shadowColor: '#000', // Subtle shadow for better depth
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2, // For Android shadow
    },
    checkboxWrapper: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8, // Add space between checkbox and text
    },
    selectAllText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#323842', // Neutral text color
    },
  
  listContainer: {
    paddingBottom: 20,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});

export default CartItemList;
