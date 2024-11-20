// src/Cart/Cart.jsx
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../Home/Header';
import CartItemList from './CartItemList';
import { useUser } from '../../App';
import { useRoute } from '@react-navigation/native';

const Cart = () => {
  const { user } = useUser();
  const route = useRoute();
  const selectedItemIds = route.params?.selectedItemIds || []; 

  return (
    <View style={styles.container}>
      <Header title="Checkout" showFullHeader={false}/>
      <ScrollView>
        <CartItemList userId={user.userId} selectedItemIds={selectedItemIds} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
});

export default Cart;
