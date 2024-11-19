import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Header from '../Home/Header';
import { useRoute, useNavigation } from '@react-navigation/native';
import { removeFromCart } from '../../services/cartService';
import { createInvoice } from '../../services/invoiceService';
import { useUser } from '../../App'; 

const PaymentSuccess = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { subtotal, discount, grandTotal, selectedItemIds, orderId } = route.params;
  const { user } = useUser(); 
  const userId = user?.userId; 

  const [isLoading, setIsLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const processAfterPayment = async () => {
      try {
        await Promise.all(selectedItemIds.map(item => removeFromCart(userId, item.productId)));
        await createInvoice(orderId, grandTotal);
      } catch (error) {
        console.error("Error processing after payment:", error);
      } finally {
        setIsLoading(false);
      }
    };

    processAfterPayment();
  }, [selectedItemIds, userId, orderId, grandTotal]);

  const handleBackToHome = () => {
    navigation.navigate('Home');
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6026" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Payment" />
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: 'https://example.com/success-image.png' }} style={styles.successIcon} resizeMode="contain" />
        <Text style={styles.title}>Order placed successfully!</Text>
        <Text style={styles.description}>Thank you for shopping with us.</Text>
        <View style={styles.orderSummary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>discount</Text>
            <Text style={styles.summaryValue}>${discount.toFixed(2)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${grandTotal.toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.backToHomeButton} onPress={handleBackToHome}>
          <Text style={styles.backToHomeText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { alignItems: 'center', paddingHorizontal: 24, paddingBottom: 40 },
  successIcon: { width: 80, height: 80, marginTop: 40 },
  title: { fontSize: 20, fontWeight: '700', color: '#FF6026', marginTop: 24, textAlign: 'center' },
  description: { fontSize: 14, color: '#9095A0', marginTop: 8, textAlign: 'center', maxWidth: 280 },
  orderSummary: { width: '100%', backgroundColor: '#FAFAFA', borderRadius: 8, padding: 16, marginTop: 32 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  summaryLabel: { fontSize: 14, color: '#565E6C' },
  summaryValue: { fontSize: 14, fontWeight: '700', color: '#171A1F' },
  divider: { height: 1, backgroundColor: '#DEE1E6', marginVertical: 12 },
  totalLabel: { fontSize: 16, fontWeight: '700', color: '#323842' },
  totalValue: { fontSize: 18, fontWeight: '700', color: '#171A1F' },
  backToHomeButton: { backgroundColor: '#FF6026', padding: 12, borderRadius: 6, alignItems: 'center', marginTop: 32 },
  backToHomeText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }
});

export default PaymentSuccess;
