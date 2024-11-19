import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Header from "../Home/Header";
import ProductInfo from "./ProductInfo";
import Description from "./ProductDescription";
import ReviewSection from "./ReviewSection";
import RelevantProducts from "./RelatedProducts";
import NotificationToggle from "./NotificationToggle";
import BuyNowSection from "./AddToCartBar";

const ProductDetails1Containner = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header tilte="Headphone" />
      <ScrollView >
        <ProductInfo />
        <Description />
        <ReviewSection />
        <RelevantProducts />
        <NotificationToggle />        
      </ScrollView>
      <BuyNowSection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default ProductDetails1Containner;
