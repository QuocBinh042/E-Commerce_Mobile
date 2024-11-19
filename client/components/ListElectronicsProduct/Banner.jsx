import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const PromoBanner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/data/BannerEP.png')}
        style={styles.banner}
        resizeMode="contain" // Đổi sang 'cover' để ảnh lấp đầy khung
      />
      <View style={styles.indicatorContainer}>
        <View style={[styles.indicator, styles.activeIndicator]} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    overflow: 'hidden', // Đảm bảo ảnh không tràn ra ngoài
    width: '90%',
    height: 200, // Đặt chiều cao cụ thể cho khung
    marginLeft:20,

  },
  banner: {
    width: '100%', // Đảm bảo ảnh lấp đầy chiều rộng khung
    height: '100%', // Đảm bảo ảnh lấp đầy chiều cao khung
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Đặt chỉ báo lên trên hình ảnh
    bottom: 8,
    marginTop: 12,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(200, 200, 200, 1)',
    marginHorizontal: 3,
  },
  activeIndicator: {
    width: 20,
    backgroundColor: 'rgba(255, 96, 38, 1)',
  },
});

export default PromoBanner;
