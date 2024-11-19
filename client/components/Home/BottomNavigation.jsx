import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BottomNavigation = () => {
  // State để lưu trữ mục đang active
  const [activeTab, setActiveTab] = useState('Home');
  const navigation = useNavigation();
  const handlePress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={() => {handlePress('Home'), navigation.navigate('Home') }}>
        <Image
          source={require('../../assets/data/Home.png')}
          style={[styles.navIcon, activeTab === 'Home' && styles.activeIcon]}
        />
        <Text style={[styles.navText, activeTab === 'Home' && styles.activeText]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => handlePress('Search')}>
        <Image
          source={require('../../assets/data/Search.png')}
          style={[styles.navIcon, activeTab === 'Search' && styles.activeIcon]}
        />
        <Text style={[styles.navText, activeTab === 'Search' && styles.activeText]}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => { handlePress('Favorites'), navigation.navigate('WishList') }}>
        <Image
          source={require('../../assets/data/Favorites.png')}
          style={[styles.navIcon, activeTab === 'Favorites' && styles.activeIcon]}
        />
        <Text style={[styles.navText, activeTab === 'Favorites' && styles.activeText]}>Favorites</Text>
        {activeTab === 'Favorites' && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>99+</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => handlePress('Inbox')}>
        <Image
          source={require('../../assets/data/Inbox.png')}
          style={[styles.navIcon, activeTab === 'Inbox' && styles.activeIcon]}
        />
        <Text style={[styles.navText, activeTab === 'Inbox' && styles.activeText]}>Inbox</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => {handlePress('Account'), navigation.navigate('Profile')}}>
        <Image
          source={require('../../assets/data/Account.png')}
          style={[styles.navIcon, activeTab === 'Account' && styles.activeIcon]}
        />
        <Text style={[styles.navText, activeTab === 'Account' && styles.activeText]}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: 'rgba(243, 244, 246, 1)',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
    position: 'relative',
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#6b7280', // Màu mặc định
  },
  activeIcon: {
    tintColor: '#FF6026', // Màu xanh cho icon active
  },
  navText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  activeText: {
    color: '#FF6026',  // Màu xanh cho text active
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -12,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default BottomNavigation;
