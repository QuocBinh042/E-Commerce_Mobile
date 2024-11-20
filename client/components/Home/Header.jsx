import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useUser, useCart } from '../../App';

const Header = ({ title, showFullHeader = true }) => {
  const navigation = useNavigation();
  const { user } = useUser();
  const { cartItemCount, resetCartCount } = useCart();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      resetCartCount();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.goBack();
            resetCartCount();
          }}
        >
          <FontAwesome5 name="arrow-left" size={20} color="rgba(23, 26, 31, 1)" />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={[
            styles.headerTitle,
            showFullHeader ? styles.centeredTitleWithIcons : styles.centeredTitleWithoutIcons,
          ]}
        >
          {title}
        </Text>

        {/* Right Icons */}
        {showFullHeader ? (
          <View style={styles.rightIcons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate('Cart')}
            >
              <FontAwesome5 name="shopping-cart" size={20} color="rgba(23, 26, 31, 1)" />
              {cartItemCount > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.badgeText}>{cartItemCount}</Text>
                </View>
              )}
            </TouchableOpacity>

            {user && user.avatar ? (
              <Image
                source={{ uri: `http://localhost:3002/images/avatars/${user.avatar}` }}
                style={styles.avatar}
              />
            ) : (
              <FontAwesome5 name="user-circle" size={32} color="rgba(23, 26, 31, 1)" />
            )}
          </View>
        ) : (
          // Placeholder for alignment when right icons are hidden
          <View style={styles.rightPlaceholder} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  menuButton: {
    borderRadius: 6,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(23, 26, 31, 1)',
  },
  centeredTitleWithIcons: {
    flex: 1,
    textAlign: 'center',
  },
  centeredTitleWithoutIcons: {
    flex: 1,
    textAlign: 'center',
    marginRight: 45, // Placeholder spacing for missing icons
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightPlaceholder: {
    width: 50, // Matches the width of the right icons
  },
  iconButton: {
    position: 'relative',
    borderRadius: 6,
    marginRight: 10,
  },
  cartBadge: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(23, 26, 31, 0.1)',
  },
});

export default Header;
