// ElectronicsProduct.js
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../Home/Header";
import SearchBar from "../Home/SearchBar";
import CategorySeaction from './CategorySection'
import ProductCatalog from "./ProductCateLog";
import BottomNavigation from "../Home/BottomNavigation";
import PromoBanner from "./Banner";
import SeeAllButton from "./SeeAllButton";
import { getProductsByCategory } from "../../services/productService";
import { useUser } from "../../App";

const ElectronicsProduct = () => {
  const route = useRoute();
  const { categoryId } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory(categoryId);
        setProducts(data);
        console.log("Passed User ID:", user);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <View style={styles.container}>
      <Header title="Electronics" />
      <SearchBar />
      <ScrollView>
        <CategorySeaction />
        <ProductCatalog products={products} userId={user.userId} />
        <SeeAllButton />
        <PromoBanner />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default ElectronicsProduct;
