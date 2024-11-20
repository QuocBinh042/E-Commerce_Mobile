import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Header from "../Home/Header";
import SearchBar from "../Home/SearchBar";
import ProductCard from "./ProductCard";
import RelevantProducts from "./RelevantProduct";
import TabBarMenu from "../Home/BottomNavigation";
import { getProductsByCategory } from "../../services/productService";
import Banner from "./Banner";
import { useRoute } from "@react-navigation/native";

const FreshFruitsProduct = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [relevantProducts, setRelevantProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const route = useRoute();
  const { categoryId } = route.params;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsByCategory(categoryId);
        setFeaturedProducts(products);
        setRelevantProducts(products.slice(5, 10));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={styles.loadingIndicator}
      />
    );
  }

  const displayedProducts = showAllProducts ? featuredProducts : featuredProducts.slice(0, 4);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Fresh Fruits" showFullHeader={true} />
      <SearchBar />
      <ScrollView>
        <Banner />
        <View style={styles.productGrid}>
          {displayedProducts.map((product, index) => (
            <ProductCard key={product.ProductID || index} product={product} />
          ))}
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowAllProducts(!showAllProducts)}
        >
          <Text style={styles.buttonText}>
            {showAllProducts ? "See less" : "See all"}
          </Text>
        </TouchableOpacity>
        <RelevantProducts products={relevantProducts} />
      </ScrollView>
      <TabBarMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 1,
    marginTop: 14,
    marginHorizontal: 20,
    paddingVertical: 7,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    color: 'rgba(86, 94, 108, 1)',
    fontWeight: '400',
  },
});

export default FreshFruitsProduct;
