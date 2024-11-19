import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/data/BannerFreshFruit.png')}
        style={styles.banner}
        resizeMode="contain" 
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
    overflow: 'hidden',
    width: '90%',
    height: 200, 
    marginLeft:20,

  },
  banner: {
    width: '100%', 
    height: '100%', 
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
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

export default Banner;
