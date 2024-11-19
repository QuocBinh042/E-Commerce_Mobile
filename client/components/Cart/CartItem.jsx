import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CartItem = ({ product, onRemove, onUpdateQuantity, onSelectItem }) => (
  <View style={styles.cartItem}>
    {/* Checkbox */}
    <CheckBox
      value={product.isSelected}
      onValueChange={() => onSelectItem(product.ProductID)}
      style={styles.checkbox}
    />
    {/* Hình ảnh sản phẩm */}
    <View style={styles.productImageContainer}>
      <Image
        source={{ uri: `http://localhost:3002/images/${product.Image}` }}
        style={styles.productImage}
        resizeMode="contain"
      />
    </View>
    {/* Thông tin sản phẩm */}
    <View style={styles.productInfo}>
      <View style={styles.productTopRow}>
        <Text style={styles.productName}>{product.ProductName}</Text>
        {/* Nút xóa sản phẩm */}
        <TouchableOpacity style={{marginBottom:20}} onPress={() => onRemove(product.ProductID)}>
          <Icon name="trash" size={18} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.productBottomRow}>
        <Text style={styles.productPrice}>${product.Price.toFixed(2)}</Text>
        {/* Điều khiển số lượng */}
        <View style={styles.quantityControls}>
          <TouchableOpacity
            onPress={() => onUpdateQuantity(product.ProductID, product.Quantity - 1)}
            style={styles.quantityButton}>
            <Icon name="minus" size={16} color="#323842" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{product.Quantity}</Text>
          <TouchableOpacity
            onPress={() => onUpdateQuantity(product.ProductID, product.Quantity + 1)}
            style={styles.quantityButton}>
            <Icon name="plus" size={16} color="#323842" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  checkbox: {
    marginRight: 10,
  },
  productImageContainer: {
    backgroundColor: '#F0F8FF',
    padding: 8,
    borderRadius: 8,
  },
  productImage: {
    width: 80,
    height: 80,
  },
  productInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  productTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#323842',
    marginBottom: 20
  },
  productPrice: {
    fontSize: 18, // Tăng kích thước giá
    fontWeight: '700',
    color: '#FF6026',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '700',
    marginHorizontal: 8,
    color: '#323842',
  },
});

export default CartItem;
