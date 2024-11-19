import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useUser, useCart } from '../../App';

const Header = ({ title }) => {
  const navigation = useNavigation();
  const { user } = useUser();
  const { cartItemCount, resetCartCount } = useCart(); // Get resetCartCount function

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      resetCartCount(); // Reset cart count when screen gains focus
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        {/* Back button */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.goBack();
            resetCartCount(); // Reset count when going back
          }}
        >
          <FontAwesome5 name="arrow-left" size={20} color="rgba(23, 26, 31, 1)" />
        </TouchableOpacity>

        {/* Page Title */}
        <Text style={styles.headerTitle}>{title}</Text>

        {/* Cart and Avatar */}
        <View style={styles.rightIcons}>
          {/* Cart Icon with badge for item count */}
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("Cart")}>
            <FontAwesome5 name="shopping-cart" size={20} color="rgba(23, 26, 31, 1)" />
            {cartItemCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.badgeText}>{cartItemCount}</Text> {/* Display unique item count */}
              </View>
            )}
          </TouchableOpacity>

          {/* User Avatar */}
          {user && user.avatar ? (
            <Image source={{ uri: `http://localhost:3002/images/${user.avatar}` }} style={styles.avatar} />
          ) : (
            <FontAwesome5 name="user-circle" size={32} color="rgba(23, 26, 31, 1)" />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: { width: '100%', padding: 10 },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
    paddingHorizontal: 12,
  },
  menuButton: { borderRadius: 6 },
  headerTitle: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 18,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '700',
  },
  rightIcons: { flexDirection: 'row', alignItems: 'center' },
  iconButton: { position: 'relative', borderRadius: 6, marginRight: 10 },
  cartBadge: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(23, 26, 31, 0.1)',
  },
});

export default Header;
