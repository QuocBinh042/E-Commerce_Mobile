import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, SafeAreaView } from 'react-native';
import Header from '../Home/Header';
import ShippingOptions from './ShippingOptions';
import PriceRange from './PriceRange';
import AverageReview from './AverageReview';
import OtherOptions from './OtherOptions';
import Divider from './Divider';

const Filter = () => {
  return (
    <SafeAreaView style={styles.filterContainer}>
      <Header />
      <ScrollView>
        <ShippingOptions />
        <Divider />
        <PriceRange />
        <Divider />
        <AverageReview />
        <Divider />
        <OtherOptions />
      </ScrollView>      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingBottom: 30,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
  },
});

export default Filter;