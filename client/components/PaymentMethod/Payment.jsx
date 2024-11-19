import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Modal, Text, ActivityIndicator, Button } from 'react-native';
import Header from '../Home/Header';
import TotalAmount from './TotalAmount';
import PaymentMethods from './PaymentMethods';
import PayNowButton from './PayNowButton';
import { useRoute, useNavigation } from '@react-navigation/native';
import { createOrder } from '../../services/orderService';
import { createInvoice } from '../../services/invoiceService';
import { useUser } from '../../App';

const Payment = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { subtotal, discount, grandTotal, selectedItemIds } = route.params;
  const { user } = useUser();
  const userId = user?.userId;

  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePayNow = async () => {
    const formattedItems = selectedItemIds.map(item => ({
      productId: item.productId || item,
      quantity: item.quantity || 1,
      price: item.price || 0
    }));

    setIsLoading(true);

    try {
      const order = await createOrder(userId, formattedItems, grandTotal);

      if (order?.orderId) {
        await createInvoice(order.orderId, grandTotal);

        setSuccessModalVisible(true);
        setTimeout(() => {
          setSuccessModalVisible(false);
          navigation.navigate('PaymentSuccess', { 
            subtotal, 
            discount, 
            grandTotal, 
            selectedItemIds: formattedItems,
            orderId: order.orderId 
          });
        }, 2000);
      } else {
        throw new Error("Order creation failed.");
      }
    } catch (error) {
      console.error('Error during payment:', error);
      setErrorModalVisible(true);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Payment" />
      <ScrollView>
        <TotalAmount amount={grandTotal} />
        <PaymentMethods />
      </ScrollView>
      <PayNowButton onPress={handlePayNow} disabled={isLoading} />
      
      {isLoading && <ActivityIndicator size="large" color="#FF6026" style={styles.loadingIndicator} />}

      {/* Success Modal */}
      <Modal animationType="fade" transparent visible={successModalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Payment Successful!</Text>
            <Text style={styles.modalSubText}>Thank you for your purchase.</Text>
          </View>
        </View>
      </Modal>

      {/* Error Modal */}
      <Modal animationType="fade" transparent visible={errorModalVisible} onRequestClose={() => setErrorModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Payment Error</Text>
            <Text style={styles.modalSubText}>Payment failed. Please try again.</Text>
            <Button title="Close" onPress={() => setErrorModalVisible(false)} color="#FF6026" />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContainer: { width: '80%', backgroundColor: '#FFFFFF', padding: 20, borderRadius: 10, alignItems: 'center' },
  modalText: { fontSize: 20, fontWeight: '700', color: '#FF6026', marginBottom: 10 },
  modalSubText: { fontSize: 16, color: '#323842', textAlign: 'center' },
  loadingIndicator: { position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -25 }, { translateY: -25 }] },
});

export default Payment;
